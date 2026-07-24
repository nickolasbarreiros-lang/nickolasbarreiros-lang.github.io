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

function renderizarDestaques(orquideas) {
  const grade = document.getElementById("grade-destaques-v4");
  if (!grade) return;
  const mes = new Date().getMonth() + 1;
  const florindo = orquideas.filter(o => Array.isArray(o.mesesFloracao) && o.mesesFloracao.includes(mes));
  const fonte = florindo.length >= 5 ? florindo : orquideas;
  const destaques = [...fonte]
    .sort((a,b) => (Number(b?.avaliacoes?.floracao)||0) - (Number(a?.avaliacoes?.floracao)||0))
    .slice(0,5);
  grade.innerHTML = destaques.map(o => `
    <a class="cartao-destaque-v4" href="orquidea.html?id=${encodeURIComponent(o.id || "")}">
      <img src="${escapar(obterFotoPrincipal(o))}" alt="Foto de ${escapar(o.nome)}" loading="lazy">
      <span class="cartao-destaque-v4-info">
        <strong>${escapar(o.nome || "Orquídea")}</strong>
        <span class="cartao-destaque-v4-meta"><span>❀ ${escapar(resumoFloracao(o))}</span><span>${escapar(o.dificuldade || "Não informada")}</span></span>
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

  document.querySelector('[data-filtro-caracteristica="brasileira"]')?.addEventListener("click", () => pesquisar("Brasil"));
  document.querySelector('[data-filtro-caracteristica="estrangeira"]')?.addEventListener("click", () => {
    document.getElementById("limpar-filtros")?.click();
    rolar("#pesquisa");
  });

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
