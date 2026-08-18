import { orquideas } from "./dados/orquideas/index.js";

/* =========================================================
   CONFIGURAÇÃO INICIAL
========================================================= */

const parametros = new URLSearchParams(
    window.location.search
);

const idOrquidea = parametros.get("id");

const ficha = document.getElementById("ficha");

const fichaNaoEncontrada =
    document.getElementById("ficha-nao-encontrada");

const nomesMeses = [
    "JAN",
    "FEV",
    "MAR",
    "ABR",
    "MAI",
    "JUN",
    "JUL",
    "AGO",
    "SET",
    "OUT",
    "NOV",
    "DEZ"
];

/* =========================================================
   LOCALIZAÇÃO DA ORQUÍDEA
========================================================= */

const orquidea = orquideas.find((item) => {
    return String(item.id) === String(idOrquidea);
});


/* =========================================================
   NAVEGAÇÃO CIRCULAR ENTRE AS FICHAS
========================================================= */

const orquideasOrdenadas = [...orquideas]
    .filter((item) => item && item.id && item.nome)
    .sort((a, b) => String(a.nome).localeCompare(
        String(b.nome),
        "pt-BR",
        { sensitivity: "base", numeric: true }
    ));

function obterOrquideasVizinhas(itemAtual) {
    if (!itemAtual || orquideasOrdenadas.length < 2) {
        return { anterior: null, proxima: null };
    }

    const indiceAtual = orquideasOrdenadas.findIndex((item) => {
        return String(item.id) === String(itemAtual.id);
    });

    if (indiceAtual < 0) {
        return { anterior: null, proxima: null };
    }

    const total = orquideasOrdenadas.length;

    return {
        anterior: orquideasOrdenadas[(indiceAtual - 1 + total) % total],
        proxima: orquideasOrdenadas[(indiceAtual + 1) % total]
    };
}

function obterFotoNavegacao(item) {
    const fotos = obterFotos(item?.imagens || item?.fotos);
    return fotos[0] || "";
}

function criarNavegacaoEntreFichas(itemAtual) {
    const { anterior, proxima } = obterOrquideasVizinhas(itemAtual);

    if (!anterior || !proxima) {
        return "";
    }

    const fotoAnterior = obterFotoNavegacao(anterior);
    const fotoProxima = obterFotoNavegacao(proxima);

    return `
        <nav class="navegacao-orquideas-v6" aria-label="Navegação entre fichas de orquídeas">
            <a class="cartao-navegacao-v6 anterior-v6"
               href="orquidea.html?id=${encodeURIComponent(anterior.id)}"
               aria-label="Abrir orquídea anterior: ${anterior.nome}">
                <span class="foto-navegacao-v6" aria-hidden="true">
                    ${fotoAnterior ? `<img src="${fotoAnterior}" alt="" loading="lazy">` : `<span>🌸</span>`}
                </span>
                <span class="seta-navegacao-v6" aria-hidden="true">←</span>
                <span class="texto-navegacao-v6">
                    <small>Orquídea anterior</small>
                    <strong>${anterior.nome}</strong>
                </span>
            </a>

            <a class="cartao-navegacao-v6 proxima-v6"
               href="orquidea.html?id=${encodeURIComponent(proxima.id)}"
               aria-label="Abrir próxima orquídea: ${proxima.nome}">
                <span class="texto-navegacao-v6">
                    <small>Próxima orquídea</small>
                    <strong>${proxima.nome}</strong>
                </span>
                <span class="seta-navegacao-v6" aria-hidden="true">→</span>
                <span class="foto-navegacao-v6" aria-hidden="true">
                    ${fotoProxima ? `<img src="${fotoProxima}" alt="" loading="lazy">` : `<span>🌸</span>`}
                </span>
            </a>
        </nav>
    `;
}

/* =========================================================
   FUNÇÕES AUXILIARES
========================================================= */

function obterTexto(
    valor,
    textoPadrao = "Não informado"
) {
    if (valor === undefined || valor === null) {
        return textoPadrao;
    }

    if (typeof valor === "object") {
        return textoPadrao;
    }

    if (String(valor).trim() === "") {
        return textoPadrao;
    }

    return valor;
}

function criarChip(icone, texto, classeExtra = "") {
    if (texto === undefined || texto === null || String(texto).trim() === "") {
        return "";
    }

    return `
        <span class="chip-info-v2 ${classeExtra}">
            ${icone ? `<span aria-hidden="true">${icone}</span>` : ""}
            <span>${texto}</span>
        </span>
    `;
}


function normalizarTextoSelo(valor) {
    return String(valor || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

function criarSeloCultivo({ texto, icone = "", tipo = "neutro" }) {
    if (!texto) return "";

    return `
        <span class="selo-cultivo-v4 selo-${tipo}-v4">
            ${icone ? `<span class="icone-selo-v4" aria-hidden="true">${icone}</span>` : ""}
            <span>${texto}</span>
        </span>
    `;
}

function criarSelosRega(orquidea) {
    const configuracao = orquidea.selosCultivo?.rega || {};
    const texto = normalizarTextoSelo(`${orquidea.rega || ""} ${orquidea.climaFloracao || ""}`);
    const agua = Number(orquidea.avaliacoes?.agua);
    const selos = [];

    const mapaNivel = {
        "baixa": { texto: "REGA BAIXA", tipo: "rega-baixa", icone: "💧" },
        "moderada": { texto: "REGA MODERADA", tipo: "rega-moderada", icone: "💧" },
        "frequente": { texto: "REGA FREQUENTE", tipo: "rega-frequente", icone: "💧" },
        "muito-frequente": { texto: "REGA MUITO FREQUENTE", tipo: "rega-constante", icone: "🌧️" },
        "sazonal": { texto: "REGA SAZONAL", tipo: "rega-moderada", icone: "🍂" },
        "constante": { texto: "REGA MUITO FREQUENTE", tipo: "rega-constante", icone: "🌧️" }
    };

    let principal = mapaNivel[configuracao.nivel];

    // Compatibilidade com fichas antigas: a inferência só é usada quando a ficha
    // ainda não possui classificação editorial explícita.
    if (!principal) {
        principal = mapaNivel.moderada;

        if (/umidade constante|constantemente umid|sempre umid|nao deixar secar|nunca secar/.test(texto) || agua >= 5) {
            principal = mapaNivel.constante;
        } else if (/rega frequente|regas frequentes|muita agua|abundantemente durante|manter levemente umid/.test(texto) || agua === 4) {
            principal = mapaNivel.frequente;
        } else if (/rega baixa|pouca agua|secar bem|seque completamente|secagem completa/.test(texto) || (Number.isFinite(agua) && agua <= 2)) {
            principal = mapaNivel.baixa;
        }
    }

    selos.push(criarSeloCultivo(principal));

    // O regime hídrico e o risco de encharcamento são dimensões independentes.
    // Assim, quando realmente necessário, a ficha pode mostrar até 3 selos:
    // nível de rega + regime sazonal + alerta de encharcamento.
    if (configuracao.regime === "repouso-seco") {
        selos.push(criarSeloCultivo({ texto: "REPOUSO SECO", icone: "🍂", tipo: "alerta-seco" }));
    } else if (configuracao.regime === "reduzir-inverno") {
        selos.push(criarSeloCultivo({ texto: "REDUZIR NO INVERNO", icone: "🍃", tipo: "sazonal" }));
    } else if (configuracao.regime === "reduzir-repouso") {
        selos.push(criarSeloCultivo({ texto: "REDUZIR NO REPOUSO", icone: "🍃", tipo: "sazonal" }));
    }

    // Alerta independente. Só aparece quando foi marcado editorialmente ou
    // quando uma ficha antiga traz uma indicação muito explícita no próprio texto.
    const alertaEncharcamentoExplicito =
        configuracao.evitarEncharcamento === true ||
        (
            configuracao.evitarEncharcamento !== false &&
            /nao tolera encharc|nunca (?:deve )?(?:ficar|permanecer) encharcad|evite (?:o )?encharc|evitar (?:o )?encharc|drenar rapidamente|drenagem imediata/.test(texto)
        );

    if (alertaEncharcamentoExplicito) {
        selos.push(criarSeloCultivo({ texto: "EVITAR ENCHARCAMENTO", icone: "⊘", tipo: "alerta" }));
    }

    return selos.slice(0, 3);
}

function criarSelosClimaFloracao(orquidea) {
    const configuracao = orquidea.selosCultivo?.climaFloracao || {};
    const clima = normalizarTextoSelo(orquidea.clima);
    const floracao = normalizarTextoSelo(orquidea.climaFloracao);
    const texto = `${clima} ${floracao}`;
    const selos = [];

    const mapaFaixa = {
        "quente": { texto: "CLIMA QUENTE", tipo: "clima-quente", icone: "☀️" },
        "intermediario": { texto: "CLIMA INTERMEDIÁRIO", tipo: "clima-intermediario", icone: "🌡️" },
        "ameno": { texto: "CLIMA AMENO", tipo: "clima-ameno", icone: "🌤️" },
        "frio": { texto: "CLIMA FRIO", tipo: "clima-frio", icone: "❄️" }
    };

    let principal = mapaFaixa[configuracao.faixa];

    // Compatibilidade temporária com fichas sem parâmetro explícito.
    // A negação de frio é avaliada ANTES de qualquer palavra como "frio" ou
    // "noites frias", evitando classificações contraditórias como a observada
    // em Cyrtopodium saintlegerianum.
    if (!principal) {
        const negaFrio = /nao (?:e |é )?(?:necessario|requisito)|nao (?:necessita|precisa)(?: de)? frio|frio (?:intenso )?nao (?:e|é) requisito|sem necessidade de frio|nao depende de frio|frio artificial/.test(floracao);

        principal = mapaFaixa.intermediario;
        if (negaFrio && /quente|baixa altitude|nivel do mar|litoral quente/.test(texto)) {
            principal = mapaFaixa.quente;
        } else if (/muito quente|quente a intermediario|quente e umido|clima quente|baixa altitude|nivel do mar/.test(texto)) {
            principal = mapaFaixa.quente;
        } else if (!negaFrio && /frio a ameno|clima frio|temperaturas frias|alta altitude|montano|noites frias/.test(texto)) {
            principal = mapaFaixa.frio;
        } else if (/ameno|fresco|temperado/.test(texto)) {
            principal = mapaFaixa.ameno;
        }
    }

    selos.push(criarSeloCultivo(principal));

    if (configuracao.floraNoCalor === true) {
        selos.push(criarSeloCultivo({ texto: "FLORA NO CALOR", icone: "☀️", tipo: "positivo" }));
    } else if (configuracao.quedaTermica === true) {
        selos.push(criarSeloCultivo({ texto: "QUEDA TÉRMICA", icone: "↘", tipo: "clima-ameno" }));
    } else if (configuracao.frioNecessario === true) {
        selos.push(criarSeloCultivo({ texto: "FRIO NECESSÁRIO", icone: "❄️", tipo: "clima-frio" }));
    } else if (!Object.keys(configuracao).length) {
        const negaFrio = /nao (?:e |é )?(?:necessario|requisito)|nao (?:necessita|precisa)(?: de)? frio|frio (?:intenso )?nao (?:e|é) requisito|sem necessidade de frio|nao depende de frio|frio artificial/.test(floracao);
        if (negaFrio || /floresce.*calor|baixa altitude/.test(texto)) {
            selos.push(criarSeloCultivo({ texto: "FLORA NO CALOR", icone: "☀️", tipo: "positivo" }));
        } else if (/queda termica|amplitude termica|diferenca.*dia.*noite|diferença.*dia.*noite/.test(texto)) {
            selos.push(criarSeloCultivo({ texto: "QUEDA TÉRMICA", icone: "↘", tipo: "clima-ameno" }));
        } else if (/precisa.*frio|necessita.*frio|frio necessario|periodo frio|período frio|noites frias.*flor/.test(texto)) {
            selos.push(criarSeloCultivo({ texto: "FRIO NECESSÁRIO", icone: "❄️", tipo: "clima-frio" }));
        }
    }

    return selos;
}

function criarIndicadorRotulado(rotulo, chip) {
    if (!chip) {
        return "";
    }

    return `
        <div class="indicador-rotulado-v3">
            <span class="rotulo-indicador-v3">${rotulo}</span>
            ${chip}
        </div>
    `;
}

function criarInfoCard({
    titulo,
    icone,
    conteudo,
    chips = [],
    indicadores = [],
    descricao = "",
    classeExtra = ""
}) {
    const chipsValidos = chips.filter(Boolean);
    const indicadoresValidos = indicadores.filter(Boolean);

    return `
        <article class="card-cultivo-v2 ${classeExtra}">
            <div class="icone-card-v2" aria-hidden="true">
                ${icone}
            </div>

            <div class="conteudo-card-cultivo-v2">
                <h4>${titulo}</h4>

                ${indicadoresValidos.length ? `
                    <div class="linha-indicadores-v3">
                        ${indicadoresValidos.join("")}
                    </div>
                ` : ""}

                ${chipsValidos.length ? `
                    <div class="linha-chips-v2">
                        ${chipsValidos.join("")}
                    </div>
                ` : ""}

                ${conteudo ? `
                    <p class="info-horizontal">
                        ${conteudo}
                    </p>
                ` : ""}

                ${descricao ? `
                    <p class="observacao-card-v2">
                        ${descricao}
                    </p>
                ` : ""}
            </div>
        </article>
    `;
}


function criarLinhasEstruturadas(valor, classe = "") {
    if (valor === undefined || valor === null) {
        return "";
    }

    if (Array.isArray(valor)) {
        return `
            <div class="lista-estruturada-v2 ${classe}">
                ${valor.map((item) => `<p>${item}</p>`).join("")}
            </div>
        `;
    }

    if (typeof valor === "object") {
        const rotulos = {
            organica: ["🌿", "Orgânica"],
            foliar: ["💧", "Foliar"],
            liberacaoLenta: ["🧪", "Liberação lenta"]
        };

        const linhas = Object.entries(valor)
            .filter(([, texto]) => texto !== undefined && texto !== null && String(texto).trim() !== "")
            .map(([chave, texto]) => {
                const [icone, rotulo] = rotulos[chave] || ["", chave];
                return `
                    <div class="linha-estruturada-v2">
                        <strong>${icone} ${rotulo}</strong>
                        <span>${texto}</span>
                    </div>
                `;
            })
            .join("");

        return linhas ? `<div class="lista-estruturada-v2 ${classe}">${linhas}</div>` : "";
    }

    const texto = String(valor).trim();

    if (!texto) {
        return "";
    }

    const linhas = texto
        .split(/\n+/)
        .map((linha) => linha.trim())
        .filter(Boolean);

    if (linhas.length > 1) {
        return `
            <div class="lista-estruturada-v2 ${classe}">
                ${linhas.map((linha) => `<p>${linha}</p>`).join("")}
            </div>
        `;
    }

    return `<p class="info-horizontal">${texto}</p>`;
}

function criarCardEstruturado({
    titulo,
    icone,
    valor,
    classeExtra = ""
}) {
    const conteudo = criarLinhasEstruturadas(valor);

    if (!conteudo) {
        return "";
    }

    return `
        <article class="card-cultivo-v2 ${classeExtra}">
            <div class="icone-card-v2" aria-hidden="true">${icone}</div>
            <div class="conteudo-card-cultivo-v2">
                <h4>${titulo}</h4>
                ${conteudo}
            </div>
        </article>
    `;
}

function normalizarErrosComuns(valor) {
    if (Array.isArray(valor)) {
        return valor.filter(Boolean);
    }

    if (typeof valor !== "string") {
        return [];
    }

    return valor
        .split(/\n+|;\s*/)
        .map((item) => item.trim().replace(/\.$/, ""))
        .filter(Boolean);
}

function criarErrosComuns(valor) {
    const erros = normalizarErrosComuns(valor);

    if (!erros.length) {
        return "";
    }

    return `
        <section id="erros-comuns" class="erros-comuns-v2 secao-ancora-v3">
            <div class="titulo-secao-v2">
                <span>❌</span>
                <h3>Erros comuns</h3>
            </div>
            <ul>
                ${erros.map((erro) => `<li>${erro}.</li>`).join("")}
            </ul>
        </section>
    `;
}

function normalizarAdaptacaoRegionalItem(valor) {
    if (!valor) {
        return null;
    }

    if (typeof valor === "string") {
        return {
            nota: null,
            texto: valor
        };
    }

    if (typeof valor === "object") {
        const notaBruta = Number(valor.nota);
        return {
            nota: Number.isFinite(notaBruta)
                ? Math.max(1, Math.min(5, Math.round(notaBruta)))
                : null,
            texto: obterTexto(valor.texto || valor.descricao || "")
        };
    }

    return null;
}

function criarSeloAdaptacaoRegional(nota, indice = null) {
    if (!nota) {
        return "";
    }

    const preenchidas = "★".repeat(nota);
    const vazias = "☆".repeat(5 - nota);

    return `
        <div class="selo-adaptacao-regional-v3" aria-label="Adaptação regional: ${nota} de 5 estrelas${indice !== null ? `; IAR ${indice} de 100` : ""}">
            <span class="selo-adaptacao-rotulo-v3">Adaptação</span>
            <span class="selo-adaptacao-estrelas-v3" aria-hidden="true">
                <span class="estrelas-preenchidas-v3">${preenchidas}</span><span class="estrelas-vazias-v3">${vazias}</span>
            </span>
        </div>
    `;
}

function criarAdaptacaoRegional(valor, iar = null) {
    if (!valor || typeof valor !== "object") {
        return "";
    }

    const litoral = normalizarAdaptacaoRegionalItem(valor.litoralQuente || valor.litoral);
    const montanha = normalizarAdaptacaoRegionalItem(valor.montanhaFrio || valor.montanha);

    if (!litoral && !montanha) {
        return "";
    }

    const iarLitoral = iar?.litoralQuente || null;
    const iarMontanha = iar?.montanhaFrio || null;

    return `
        <section id="adaptacao-regional" class="adaptacao-regional-v2 secao-ancora-v3">
            <div class="titulo-secao-v2">
                <span>🌍</span>
                <h3>Adaptação regional</h3>
            </div>

            <div class="grade-adaptacao-v2">
                ${litoral ? `
                    <article class="adaptacao-item-v2">
                        <div class="cabecalho-adaptacao-item-v3">
                            <h4>🌴 Regiões litorâneas e quentes</h4>
                            ${criarSeloAdaptacaoRegional(
                                Number(iarLitoral?.estrelas) || litoral.nota,
                                Number.isFinite(Number(iarLitoral?.indice)) ? Number(iarLitoral.indice) : null
                            )}
                        </div>
                        <p>${litoral.texto}</p>
                    </article>
                ` : ""}

                ${montanha ? `
                    <article class="adaptacao-item-v2">
                        <div class="cabecalho-adaptacao-item-v3">
                            <h4>🏔️ Regiões de montanha e clima frio</h4>
                            ${criarSeloAdaptacaoRegional(
                                Number(iarMontanha?.estrelas) || montanha.nota,
                                Number.isFinite(Number(iarMontanha?.indice)) ? Number(iarMontanha.indice) : null
                            )}
                        </div>
                        <p>${montanha.texto}</p>
                    </article>
                ` : ""}
            </div>
        </section>
    `;
}


function solDiretoNaoRecomendado(valor) {
    const texto = String(valor || "").trim().toLowerCase();
    return [
        "não recomendado",
        "nao recomendado",
        "evitar",
        "evite",
        "não usar",
        "nao usar",
        "sem sol direto",
        "não expor",
        "nao expor",
        "apenas luz solar muito suave e filtrada",
        "somente luz solar muito suave e filtrada"
    ].some(termo => texto.includes(termo));
}

function criarCardIluminacao(iluminacao) {
    if (!iluminacao || typeof iluminacao !== "object") {
        return criarInfoCard({
            titulo: "Iluminação",
            icone: "☀️",
            conteudo: obterTexto(iluminacao),
            classeExtra: "card-iluminacao-v2"
        });
    }

    const valorSol = String(iluminacao.solDireto || "").trim();
    const solNormalizado = valorSol.toLowerCase();

    let textoSol = valorSol;
    let iconeSol = "🌤️";

    if (solNormalizado === "sol pleno") {
        textoSol = "Sol pleno";
        iconeSol = "☀️";
    } else if (
        solNormalizado === "não permitido" ||
        solNormalizado === "nao permitido"
    ) {
        textoSol = "Não permitido";
        iconeSol = "🚫";
    } else if (
        solNormalizado === "permitido com restrição" ||
        solNormalizado === "permitido com restricao"
    ) {
        textoSol = "Permitido com restrição";
        iconeSol = "⚠️";
    } else if (solNormalizado === "permitido" || solNormalizado === "sim") {
        textoSol = "Permitido";
        iconeSol = "🌤️";
    }

    const indicadores = [
        criarIndicadorRotulado(
            "Sombrite",
            criarChip("🟨", iluminacao.sombrite)
        ),
        criarIndicadorRotulado(
            "Sol direto",
            criarChip(iconeSol, textoSol)
        )
    ];

    const horario = String(iluminacao.horario || "").trim();
    const horarioEhTemporal =
        /\b(?:[0-1]?\d|2[0-3])\s*(?:h|:)\s*(?:[0-5]\d)?\b/i.test(horario) ||
        /(manhã|manha|tarde|amanhecer|entardecer|início do dia|inicio do dia|primeiras horas|final do dia|fim do dia|antes das|após as|apos as)/i.test(horario);

    if (textoSol !== "Não permitido" && horario && (horarioEhTemporal || horario.toLowerCase() === "sol pleno")) {
        indicadores.push(
            criarIndicadorRotulado(
                "Exposição segura",
                criarChip("🕘", horario)
            )
        );
    }

    return criarInfoCard({
        titulo: "Iluminação",
        icone: "☀️",
        indicadores,
        descricao: iluminacao.observacoes || "",
        classeExtra: "card-iluminacao-v2"
    });
}

function obterFotos(fotos) {
    if (!Array.isArray(fotos)) {
        return [];
    }

    return fotos.filter((foto) => {
        return (
            typeof foto === "string" &&
            foto.trim() !== ""
        );
    });
}

function criarCaracteristicas(caracteristicas) {
    if (
        !Array.isArray(caracteristicas) ||
        caracteristicas.length === 0
    ) {
        return "";
    }

    return caracteristicas
        .map((caracteristica) => {
            return `
                <span class="caracteristica">
                    ${caracteristica}
                </span>
            `;
        })
        .join("");
}

function criarEstrelas(nota) {
    const valor = Number(nota) || 0;

    let estrelas = "";

    for (let indice = 1; indice <= 5; indice++) {
        estrelas +=
            indice <= valor
                ? "★"
                : "☆";
    }

    return estrelas;
}

function criarAvaliacao(
    titulo,
    nota,
    icone
) {
    const valor = Number(nota) || 0;

    return `
        <div class="avaliacao-v2">

            <div class="avaliacao-v2-cabecalho">

                <span class="avaliacao-v2-titulo">
                    ${icone} ${titulo}
                </span>

                <span class="avaliacao-v2-nota">
                    ${valor}/5
                </span>

            </div>

            <div
                class="estrelas-v2"
                aria-label="${valor} de 5 estrelas"
                title="${valor} de 5"
            >
                ${criarEstrelas(valor)}
            </div>

        </div>
    `;
}

function criarCalendarioFloracao(
    mesesFloracao
) {
    const mesesAtivos =
        Array.isArray(mesesFloracao)
            ? mesesFloracao.map(Number)
            : [];

    return nomesMeses
        .map((mes, indice) => {
            const numeroMes = indice + 1;

            const ativo =
                mesesAtivos.includes(numeroMes);

            return `
                <div
                    class="
                        mes-floracao-v2
                        ${ativo ? "mes-ativo-v2" : ""}
                    "
                >

                    <span>
                        ${mes}
                    </span>

                    <strong>
                        ${ativo ? "🌸" : "—"}
                    </strong>

                </div>
            `;
        })
        .join("");
}

function criarSelos(orquidea) {
    const selos = [];
    const textoCaracteristicas = Array.isArray(orquidea.caracteristicas)
        ? orquidea.caracteristicas.join(" ").toLowerCase()
        : "";
    const tipo = String(orquidea.tipo || "").toLowerCase();
    const dificuldade = String(orquidea.dificuldade || "").toLowerCase();
    const origem = String(orquidea.origem || "").toLowerCase();

    if (origem.includes("brasil") || textoCaracteristicas.includes("brasileir")) {
        selos.push(["🇧🇷", "Brasileira"]);
    }

    if (tipo.includes("híbr") || tipo.includes("hibr")) {
        selos.push(["🧬", "Híbrido"]);
    } else if (tipo.includes("espéc") || tipo.includes("espec")) {
        selos.push(["🌿", "Espécie botânica"]);
    }

    if (textoCaracteristicas.includes("perfum")) {
        selos.push(["🌸", "Perfumada"]);
    }

    if (dificuldade.includes("fácil") || dificuldade.includes("facil")) {
        selos.push(["🟢", "Cultivo fácil"]);
    } else if (dificuldade.includes("moder")) {
        selos.push(["🟡", "Cultivo moderado"]);
    } else if (dificuldade.includes("difícil") || dificuldade.includes("dificil") || dificuldade.includes("avanç")) {
        selos.push(["🔴", "Cultivo avançado"]);
    }

    return selos.slice(0, 5).map(([icone, texto]) => `
        <span class="selo-especie-v4">
            <span aria-hidden="true">${icone}</span>
            ${texto}
        </span>
    `).join("");
}

function criarGaleria(fotos) {
    if (fotos.length === 0) {
        return `
            <div class="galeria-v2-sem-foto">
                <span>🌸</span>
                <p>Imagem ainda não cadastrada</p>
            </div>
        `;
    }

    const fotoPrincipal = fotos[0];
    const fotosSecundarias = fotos.slice(1, 4);
    const quantidadeExtra = Math.max(0, fotos.length - 4);

    const miniaturas = fotosSecundarias
        .map((foto, indice) => {
            const indiceReal = indice + 1;
            const mostrarExtra = indice === 2 && quantidadeExtra > 0;

            return `
                <button
                    class="miniatura-v2"
                    type="button"
                    data-galeria-indice="${indiceReal}"
                    aria-label="Exibir foto ${indiceReal + 1} como principal"
                    aria-pressed="false"
                >
                    <img
                        src="${foto}"
                        alt="${orquidea.nome} — foto ${indiceReal + 1}"
                        loading="lazy"
                    >
                    ${mostrarExtra ? `<span class="mais-fotos-v4">+${quantidadeExtra}</span>` : ""}
                </button>
            `;
        })
        .join("");

    return `
        <div class="galeria-v2" data-total-fotos="${fotos.length}">
            <button
                id="foto-principal-v4"
                class="foto-principal-v2"
                type="button"
                data-abrir-indice="0"
                aria-label="Ampliar foto principal"
            >
                <img
                    id="imagem-principal-v4"
                    src="${fotoPrincipal}"
                    alt="${orquidea.nome} — foto principal"
                    loading="eager"
                >
                <span class="ampliar-foto-v4" aria-hidden="true">⛶ Ampliar</span>
            </button>

            ${miniaturas ? `<div class="miniaturas-v2">${miniaturas}</div>` : ""}
        </div>
    `;
}

function mostrarMensagemBotao(
    botao,
    mensagem
) {
    const textoOriginal = botao.innerHTML;

    botao.innerHTML = mensagem;
    botao.disabled = true;

    window.setTimeout(() => {
        botao.innerHTML = textoOriginal;
        botao.disabled = false;
    }, 1800);
}

async function copiarLinkFicha(botao) {
    try {
        await navigator.clipboard.writeText(
            window.location.href
        );

        mostrarMensagemBotao(
            botao,
            "✅ Link copiado"
        );
    } catch {
        const campoTemporario =
            document.createElement("textarea");

        campoTemporario.value =
            window.location.href;

        campoTemporario.style.position =
            "fixed";

        campoTemporario.style.opacity =
            "0";

        document.body.appendChild(
            campoTemporario
        );

        campoTemporario.select();

        document.execCommand("copy");

        campoTemporario.remove();

        mostrarMensagemBotao(
            botao,
            "✅ Link copiado"
        );
    }
}

/* =========================================================
   ORQUÍDEA NÃO ENCONTRADA
========================================================= */

if (!orquidea) {

    ficha.style.display = "none";

    fichaNaoEncontrada.style.display =
        "block";

} else {

    fichaNaoEncontrada.style.display =
        "none";

    document.title =
        `${orquidea.nome} | Catálogo de Orquídeas`;

    const fotos = obterFotos(
        orquidea.imagens || orquidea.fotos
    );

    const avaliacoes =
        orquidea.avaliacoes || {};

    /* =====================================================
       CONTEÚDO DA FICHA V2
    ===================================================== */

    ficha.innerHTML = `

        <nav class="breadcrumb-v4" aria-label="Navegação estrutural">
            <a href="index.html">Início</a>
            <span aria-hidden="true">›</span>
            <a href="index.html#catalogo">Catálogo</a>
            <span aria-hidden="true">›</span>
            <span aria-current="page">${orquidea.nome}</span>
        </nav>

        <section class="topo-ficha-v2">

            <div class="identificacao-v2">

                <div class="etiquetas-v2">

                    <span class="etiqueta-v2">
                        ${obterTexto(
                            orquidea.tipo,
                            "Tipo não informado"
                        )}
                    </span>

                    <span class="etiqueta-v2">
                        ${obterTexto(
                            orquidea.genero,
                            "Gênero não informado"
                        )}
                    </span>

                    <span class="etiqueta-v2">
                        Cultivo ${obterTexto(
                            orquidea.dificuldade,
                            "não informado"
                        )}
                    </span>

                    ${orquidea.adaptacaoRegional ? `
                        <span class="etiqueta-v2 etiqueta-regional-v3">
                            🌍 Adaptação regional
                        </span>
                    ` : ""}

                </div>

                <h2 class="titulo-ficha-v2">
                    ${orquidea.nome}
                </h2>

                <div class="selos-especie-v4" aria-label="Destaques da espécie">
                    ${criarSelos(orquidea)}
                </div>

                <div class="caracteristicas-v2">

                    ${criarCaracteristicas(
                        orquidea.caracteristicas
                    )}

                </div>

            </div>

            <div class="acoes-ficha-v2">

                <button
                    id="imprimir-ficha"
                    class="botao-v2 botao-imprimir-v2"
                    type="button"
                >
                    🖨️ Imprimir
                </button>

                <button
                    id="copiar-link"
                    class="botao-v2 botao-copiar-v2"
                    type="button"
                >
                    🔗 Copiar link
                </button>

            </div>

        </section>

        <nav class="navegacao-ficha-v3" aria-label="Seções da ficha">
            <a href="#visao-geral">Visão geral</a>
            <a href="#sobre-especie">Sobre</a>
            <a href="#guia-cultivo">Cultivo</a>
            <a href="#avaliacao-especie">Avaliações</a>
            ${orquidea.errosComuns ? `<a href="#erros-comuns">Erros comuns</a>` : ""}
            ${orquidea.adaptacaoRegional ? `<a href="#adaptacao-regional">Adaptação regional</a>` : ""}
            <a href="#dica-ouro">Dica de Ouro</a>
        </nav>

        <section id="visao-geral" class="apresentacao-v2 secao-ancora-v3">

            <div class="area-galeria-v2">

                ${criarGaleria(fotos)}

            </div>

            <aside class="resumo-lateral-v2">

                <div class="resumo-item-v2">

                    <span class="resumo-icone-v2">
                        🌎
                    </span>

                    <div>
                        <strong>Origem</strong>

                        <p class="info-horizontal">
                            ${obterTexto(
                                orquidea.origem
                            )}
                        </p>
                    </div>

                </div>

                <div class="resumo-item-v2">

                    <span class="resumo-icone-v2">
                        📍
                    </span>

                    <div>
                        <strong>Região natural</strong>

                        <p class="info-horizontal">
                            ${obterTexto(
                                orquidea.regiao
                            )}
                        </p>
                    </div>

                </div>

                <div class="resumo-item-v2">

                    <span class="resumo-icone-v2">
                        🌳
                    </span>

                    <div>
                        <strong>Habitat</strong>

                        <p class="info-horizontal">
                            ${obterTexto(
                                orquidea.habitat
                            )}
                        </p>
                    </div>

                </div>

                <div class="resumo-item-v2">

                    <span class="resumo-icone-v2">
                        🌡️
                    </span>

                    <div>
                        <strong>Clima</strong>

                        <p class="info-horizontal">
                            ${obterTexto(
                                orquidea.clima
                            )}
                        </p>
                    </div>

                </div>

            </aside>

        </section>

        ${criarNavegacaoEntreFichas(orquidea)}

        <section id="sobre-especie" class="descricao-v2 secao-ancora-v3">

            <div class="titulo-secao-v2">

                <span>🌸</span>

                <h3>
                    Sobre a espécie
                </h3>

            </div>

            <div class="identificacao-cientifica-v2">
                <div>
                    <span>📖 Nome científico</span>
                    <strong><em>${orquidea.nome}</em></strong>
                </div>

                <div>
                    <span>🌍 Origem</span>
                    <strong>${obterTexto(orquidea.origem)}</strong>
                </div>
            </div>

            <p>
                ${obterTexto(
                    orquidea.descricao,
                    "A descrição desta orquídea ainda não foi cadastrada."
                )}
            </p>

        </section>

        <section id="guia-cultivo" class="secao-cultivo-v2 secao-ancora-v3">

            <div class="titulo-secao-v2">

                <span>🌿</span>

                <h3>
                    Guia de cultivo
                </h3>

            </div>

            <div class="grade-cultivo-v2">

                ${criarCardIluminacao(orquidea.iluminacao)}

                ${criarInfoCard({
                    titulo: "Rega",
                    icone: "💧",
                    chips: criarSelosRega(orquidea),
                    conteudo: obterTexto(orquidea.rega),
                    classeExtra: "card-rega-v4"
                })}

                ${criarInfoCard({
                    titulo: "Clima para floração",
                    icone: "🌡️",
                    chips: criarSelosClimaFloracao(orquidea),
                    conteudo: obterTexto(
                        orquidea.climaFloracao,
                        orquidea.clima ||
                        "Condições específicas de floração ainda não cadastradas."
                    ),
                    classeExtra: "card-clima-floracao-v2 card-clima-v4"
                })}

                ${criarCardEstruturado({
                    titulo: "Adubação recomendada",
                    icone: "🧪",
                    valor: orquidea.adubacao,
                    classeExtra: "card-adubacao-v2"
                })}

                ${criarCardEstruturado({
                    titulo: "Suportes recomendados",
                    icone: "🪵",
                    valor: orquidea.suporte,
                    classeExtra: "card-suporte-v2"
                })}

                ${criarCardEstruturado({
                    titulo: "Substratos recomendados",
                    icone: "🌱",
                    valor: orquidea.substrato,
                    classeExtra: "card-substrato-v2"
                })}

            </div>

        </section>

        <section id="avaliacao-especie" class="painel-dados-v2 secao-ancora-v3">

            <div class="avaliacoes-v2">

                <div class="titulo-secao-v2">

                    <span>⭐</span>

                    <h3>
                        Avaliação da espécie
                    </h3>

                </div>

                <div class="lista-avaliacoes-v2">

                    ${criarAvaliacao(
                        "Cultivo",
                        avaliacoes.cultivo,
                        "🌿"
                    )}

                    ${criarAvaliacao(
                        "Floração",
                        avaliacoes.floracao,
                        "🌸"
                    )}

                    ${criarAvaliacao(
                        "Perfume",
                        avaliacoes.perfume,
                        "🌺"
                    )}

                    ${criarAvaliacao(
                        "Luminosidade",
                        avaliacoes.luminosidade,
                        "☀️"
                    )}

                    ${criarAvaliacao(
                        "Água",
                        avaliacoes.agua,
                        "💧"
                    )}

                    ${criarAvaliacao(
                        "Raridade",
                        avaliacoes.raridade,
                        "💎"
                    )}

                </div>

            </div>

            <div class="calendario-v2">

                <div class="titulo-secao-v2">

                    <span>🌸</span>

                    <h3>
                        Floração
                    </h3>

                </div>

                <p class="texto-floracao-v2">
                    ${obterTexto(orquidea.floracao,"Período de floração não cadastrado.")}
                </p>

                <div class="meses-v2">

                    ${criarCalendarioFloracao(
                        orquidea.mesesFloracao
                    )}

                </div>

            </div>

        </section>

        ${criarErrosComuns(orquidea.errosComuns)}

        ${criarAdaptacaoRegional(orquidea.adaptacaoRegional, orquidea.indiceAdaptacaoRegional)}

        <section id="dica-ouro" class="dica-ouro-v2 secao-ancora-v3">

            <div class="icone-dica-v2">
                💡
            </div>

            <div>

                <h3>
                    Dica de Ouro
                </h3>

                <p>
                    ${obterTexto(
                        orquidea.dica,
                        "Nenhuma dica cadastrada."
                    )}
                </p>

            </div>

        </section>

        <div
            id="visualizador-v2"
            class="visualizador-v2"
            aria-hidden="true"
        >

            <button
                id="fechar-visualizador-v2"
                class="fechar-visualizador-v2"
                type="button"
                aria-label="Fechar visualizador"
            >
                ×
            </button>

            <button
                id="foto-anterior-v2"
                class="controle-visualizador-v2 anterior-v2"
                type="button"
                aria-label="Foto anterior"
            >
                ‹
            </button>

            <img
                id="foto-ampliada-v2"
                src=""
                alt=""
            >

            <button
                id="proxima-foto-v2"
                class="controle-visualizador-v2 proxima-v2"
                type="button"
                aria-label="Próxima foto"
            >
                ›
            </button>

            <span
                id="contador-v2"
                class="contador-v2"
            ></span>

        </div>

    `;

    /* =====================================================
       BOTÕES
    ===================================================== */

    const botaoImprimir =
        document.getElementById(
            "imprimir-ficha"
        );

    const botaoCopiarLink =
        document.getElementById(
            "copiar-link"
        );

    botaoImprimir.addEventListener(
        "click",
        () => {
            window.print();
        }
    );

    botaoCopiarLink.addEventListener(
        "click",
        () => {
            copiarLinkFicha(
                botaoCopiarLink
            );
        }
    );

    /* =====================================================
       GALERIA AMPLIADA
    ===================================================== */

    if (fotos.length > 0) {

        let indiceAtual = 0;

        const visualizador =
            document.getElementById(
                "visualizador-v2"
            );

        const fotoAmpliada =
            document.getElementById(
                "foto-ampliada-v2"
            );

        const contador =
            document.getElementById(
                "contador-v2"
            );

        const fecharVisualizador =
            document.getElementById(
                "fechar-visualizador-v2"
            );

        const fotoAnterior =
            document.getElementById(
                "foto-anterior-v2"
            );

        const proximaFoto =
            document.getElementById(
                "proxima-foto-v2"
            );

        const botaoFotoPrincipal =
            document.getElementById("foto-principal-v4");

        const imagemPrincipal =
            document.getElementById("imagem-principal-v4");

        const botoesMiniaturas =
            document.querySelectorAll("[data-galeria-indice]");

        let indicePrincipal = 0;

        function atualizarVisualizador() {
            fotoAmpliada.src =
                fotos[indiceAtual];

            fotoAmpliada.alt =
                `${orquidea.nome} — foto ${indiceAtual + 1}`;

            contador.textContent =
                `${indiceAtual + 1} de ${fotos.length}`;
        }

        function abrirVisualizador(indice) {
            indiceAtual = indice;

            atualizarVisualizador();

            visualizador.classList.add(
                "visualizador-v2-aberto"
            );

            visualizador.setAttribute(
                "aria-hidden",
                "false"
            );

            document.body.classList.add(
                "sem-rolagem"
            );
        }

        function fecharGaleria() {
            visualizador.classList.remove(
                "visualizador-v2-aberto"
            );

            visualizador.setAttribute(
                "aria-hidden",
                "true"
            );

            document.body.classList.remove(
                "sem-rolagem"
            );
        }

        function mostrarFotoAnterior() {
            indiceAtual =
                (
                    indiceAtual -
                    1 +
                    fotos.length
                ) %
                fotos.length;

            atualizarVisualizador();
        }

        function mostrarProximaFoto() {
            indiceAtual =
                (
                    indiceAtual +
                    1
                ) %
                fotos.length;

            atualizarVisualizador();
        }

        function trocarFotoPrincipal(botaoMiniatura) {
            if (!imagemPrincipal || !botaoFotoPrincipal || !botaoMiniatura) {
                return;
            }

            const imagemMiniatura = botaoMiniatura.querySelector("img");
            const indiceClicado = Number(botaoMiniatura.dataset.galeriaIndice);

            if (!imagemMiniatura || !Number.isInteger(indiceClicado)) {
                return;
            }

            const indiceAnterior = indicePrincipal;
            indicePrincipal = indiceClicado;

            imagemPrincipal.classList.add("imagem-principal-v4-trocando");
            botaoMiniatura.classList.add("miniatura-v2-trocando");

            // Troca real: a lateral sobe e a antiga principal ocupa exatamente
            // o botão lateral clicado. Não há cópia nem imagem duplicada.
            const fotoClicada = imagemMiniatura.src;
            const altClicado = imagemMiniatura.alt;
            const fotoPrincipalAnterior = imagemPrincipal.src;
            const altPrincipalAnterior = imagemPrincipal.alt;

            imagemPrincipal.src = fotoClicada;
            imagemPrincipal.alt = altClicado;
            botaoFotoPrincipal.dataset.abrirIndice = String(indiceClicado);

            imagemMiniatura.src = fotoPrincipalAnterior;
            imagemMiniatura.alt = altPrincipalAnterior;
            botaoMiniatura.dataset.galeriaIndice = String(indiceAnterior);
            botaoMiniatura.setAttribute(
                "aria-label",
                `Exibir foto ${indiceAnterior + 1} como principal`
            );

            botoesMiniaturas.forEach((miniatura) => {
                miniatura.classList.remove("miniatura-v2-ativa");
                miniatura.setAttribute("aria-pressed", "false");
            });

            window.requestAnimationFrame(() => {
                imagemPrincipal.classList.remove("imagem-principal-v4-trocando");
                botaoMiniatura.classList.remove("miniatura-v2-trocando");
            });
        }

        botoesMiniaturas.forEach((botao) => {
            botao.addEventListener("click", () => {
                trocarFotoPrincipal(botao);
            });
        });

        if (botaoFotoPrincipal) {
            botaoFotoPrincipal.addEventListener("click", () => {
                abrirVisualizador(indicePrincipal);
            });
        }

        fecharVisualizador.addEventListener(
            "click",
            fecharGaleria
        );

        fotoAnterior.addEventListener(
            "click",
            mostrarFotoAnterior
        );

        proximaFoto.addEventListener(
            "click",
            mostrarProximaFoto
        );

        visualizador.addEventListener(
            "click",
            (evento) => {
                if (
                    evento.target ===
                    visualizador
                ) {
                    fecharGaleria();
                }
            }
        );

        document.addEventListener(
            "keydown",
            (evento) => {
                if (
                    !visualizador.classList.contains(
                        "visualizador-v2-aberto"
                    )
                ) {
                    return;
                }

                if (evento.key === "Escape") {
                    fecharGaleria();
                }

                if (
                    evento.key ===
                    "ArrowLeft"
                ) {
                    mostrarFotoAnterior();
                }

                if (
                    evento.key ===
                    "ArrowRight"
                ) {
                    mostrarProximaFoto();
                }
            }
        );

        if (fotos.length <= 1) {
            fotoAnterior.style.display =
                "none";

            proximaFoto.style.display =
                "none";
        }
    }
}
