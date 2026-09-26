import { obterFotoPrincipal } from "./cards.js";

const nomesMeses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

function escapar(texto) {
  return String(texto ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function resumoFloracao(orquidea) {
  const meses = Array.isArray(orquidea?.mesesFloracao) ? orquidea.mesesFloracao : [];
  if (!meses.length) return "Época variável";
  const ordenados = [...meses].sort((a,b)=>a-b);
  return `${nomesMeses[ordenados[0]-1]} – ${nomesMeses[ordenados.at(-1)-1]}`;
}

// Destaques semanais determinísticos.
// A semana começa na segunda-feira. O mesmo conjunto permanece fixo durante
// toda a semana e muda automaticamente na segunda seguinte.
function inicioDaSemana(data = new Date()) {
  const d = new Date(data.getFullYear(), data.getMonth(), data.getDate());
  const dia = d.getDay();
  const deslocamento = dia === 0 ? -6 : 1 - dia;
  d.setDate(d.getDate() + deslocamento);
  d.setHours(12, 0, 0, 0);
  return d;
}

function chaveDaSemana(data = new Date()) {
  const segunda = inicioDaSemana(data);
  const inicioAno = new Date(segunda.getFullYear(), 0, 1, 12);
  const dias = Math.floor((segunda - inicioAno) / 86400000);
  const semana = Math.floor((dias + inicioAno.getDay() + 6) / 7) + 1;
  return `${segunda.getFullYear()}-S${String(semana).padStart(2, "0")}`;
}

function hashDeterministico(texto) {
  let h = 2166136261;
  for (const caractere of String(texto)) {
    h ^= caractere.charCodeAt(0);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function temFotoValida(orquidea) {
  return Array.isArray(orquidea?.fotos) && orquidea.fotos.some(foto => {
    if (typeof foto === "string") return foto.trim() !== "";
    return Boolean(foto && typeof foto === "object" && (foto.src || foto.url || foto.arquivo));
  });
}

function ordenarPelaSemana(lista, chave, grupo) {
  return [...lista].sort((a, b) => {
    const ha = hashDeterministico(`${chave}|${grupo}|${a?.id || a?.nome || ""}`);
    const hb = hashDeterministico(`${chave}|${grupo}|${b?.id || b?.nome || ""}`);
    return ha - hb || String(a?.nome || "").localeCompare(String(b?.nome || ""), "pt-BR");
  });
}

function escolherComGenerosVariados(lista, quantidade, usados, generosUsados) {
  const escolhidos = [];
  const disponiveis = lista.filter(o => !usados.has(o.id || o.nome));

  for (const o of disponiveis) {
    const genero = String(o?.genero || "").trim().toLowerCase();
    if (genero && generosUsados.has(genero)) continue;
    escolhidos.push(o);
    usados.add(o.id || o.nome);
    if (genero) generosUsados.add(genero);
    if (escolhidos.length === quantidade) return escolhidos;
  }

  for (const o of disponiveis) {
    if (usados.has(o.id || o.nome)) continue;
    escolhidos.push(o);
    usados.add(o.id || o.nome);
    const genero = String(o?.genero || "").trim().toLowerCase();
    if (genero) generosUsados.add(genero);
    if (escolhidos.length === quantidade) break;
  }
  return escolhidos;
}

function selecionarDestaquesDaSemana(orquideas, data = new Date(), evitarIds = new Set()) {
  const segunda = inicioDaSemana(data);
  const chave = chaveDaSemana(segunda);
  const mesReferencia = segunda.getMonth() + 1;

  const elegiveis = orquideas.filter(o => o?.id && temFotoValida(o));
  const semRepetidos = elegiveis.filter(o => !evitarIds.has(o.id));
  const fonte = semRepetidos.length >= 4 ? semRepetidos : elegiveis;

  const sazonais = ordenarPelaSemana(
    fonte.filter(o => Array.isArray(o.mesesFloracao) && o.mesesFloracao.includes(mesReferencia)),
    chave,
    "sazonais"
  );
  const restantes = ordenarPelaSemana(
    fonte.filter(o => !Array.isArray(o.mesesFloracao) || !o.mesesFloracao.includes(mesReferencia)),
    chave,
    "catalogo"
  );

  const usados = new Set();
  const generosUsados = new Set();
  const destaques = [];

  // Regra editorial: 2 em época de floração + 2 do restante do catálogo.
  destaques.push(...escolherComGenerosVariados(sazonais, Math.min(2, sazonais.length), usados, generosUsados));
  destaques.push(...escolherComGenerosVariados(restantes, Math.min(2, 4 - destaques.length), usados, generosUsados));

  if (destaques.length < 4) {
    const complemento = ordenarPelaSemana(fonte, chave, "complemento");
    destaques.push(...escolherComGenerosVariados(complemento, 4 - destaques.length, usados, generosUsados));
  }

  return destaques.slice(0, 4);
}

function renderizarDestaques(orquideas) {
  const grade = document.getElementById("grade-destaques-v4");
  if (!grade) return;

  const hoje = new Date();
  const semanaAnterior = new Date(inicioDaSemana(hoje));
  semanaAnterior.setDate(semanaAnterior.getDate() - 7);

  const anteriores = selecionarDestaquesDaSemana(orquideas, semanaAnterior);
  const idsAnteriores = new Set(anteriores.map(o => o.id));
  const destaques = selecionarDestaquesDaSemana(orquideas, hoje, idsAnteriores);

  grade.innerHTML = destaques.map(o => `
    <a class="cartao-destaque-v4 cartao-destaque-v9" href="orquidea.html?id=${encodeURIComponent(o.id || "")}">
      <span class="selo-destaque-v9">DESTAQUE</span>
      <img src="${escapar(obterFotoPrincipal(o))}" alt="Foto de ${escapar(o.nome)}" loading="lazy">
      <span class="cartao-destaque-v4-info">
        <small class="rotulo-destaque-v9">ORCHIDACEAE</small>
        <strong>${escapar(o.nome || "Orquídea")}</strong>
        <span class="cartao-destaque-v4-meta"><span>✿ ${escapar(resumoFloracao(o))}</span><span>${escapar(o.dificuldade || "Não informada")}</span></span>
        <span class="abrir-ficha-v9">Ver ficha completa <b>→</b></span>
      </span>
    </a>`).join("");
}
function renderizarGeneros(orquideas) {
  const grade = document.getElementById("grade-generos-v4");
  if (!grade) return;
  const contagem = new Map();
  orquideas.forEach(o => {
    const genero = String(o?.genero || "").trim();
    if (genero) contagem.set(genero, (contagem.get(genero) || 0) + 1);
  });
  grade.innerHTML = [...contagem.entries()]
    .sort((a,b)=>b[1]-a[1] || a[0].localeCompare(b[0],"pt-BR"))
    .slice(0,18)
    .map(([genero,total]) => `<button class="botao-genero-v4" type="button" data-genero-v4="${escapar(genero)}">${escapar(genero)}<small>${total} ${total === 1 ? "espécie" : "espécies"}</small></button>`)
    .join("");
}

function rolar(destino) {
  document.querySelector(destino)?.scrollIntoView({behavior:"smooth",block:"start"});
}

function pesquisar(texto) {
  const busca = document.getElementById("busca");
  if (!busca) return;
  busca.value = texto;
  busca.dispatchEvent(new Event("input", {bubbles:true}));
  rolar("#catalogo-area");
}

function ligarEventos() {
  document.getElementById("botao-busca-hero")?.addEventListener("click", () => rolar("#catalogo-area"));
  document.getElementById("busca")?.addEventListener("keydown", e => { if (e.key === "Enter") rolar("#catalogo-area"); });

  document.querySelectorAll("[data-destino]").forEach(botao => {
    botao.addEventListener("click", () => {
      const destino = botao.dataset.destino;
      rolar(destino);
      if (botao.id === "atalho-previstas") {
        setTimeout(() => {
          const alternar = document.getElementById("alternar-lista-floracoes");
          if (alternar?.getAttribute("aria-expanded") !== "true") alternar?.click();
        }, 350);
      }
    });
  });

  function filtrarPorOrigem(categoria) {
    document.dispatchEvent(new CustomEvent("catalogo:filtrar-origem", {
      detail: { categoria }
    }));
    rolar("#catalogo-area");
  }

  document.querySelector('[data-filtro-caracteristica="brasileira"]')?.addEventListener("click", () => filtrarPorOrigem("brasileira"));
  document.querySelector('[data-filtro-caracteristica="estrangeira"]')?.addEventListener("click", () => filtrarPorOrigem("estrangeira"));

  document.getElementById("grade-generos-v4")?.addEventListener("click", e => {
    const botao = e.target.closest("[data-genero-v4]");
    if (!botao) return;
    const select = document.getElementById("filtro-genero");
    if (!select) return;
    select.value = botao.dataset.generoV4;
    select.dispatchEvent(new Event("change", {bubbles:true}));
    rolar("#catalogo-area");
  });
}

export function inicializarHomeV4(orquideas) {
  renderizarDestaques(Array.isArray(orquideas) ? orquideas : []);
  renderizarGeneros(Array.isArray(orquideas) ? orquideas : []);
  ligarEventos();
}
