/* =========================================================
   IMPORTAÇÕES
========================================================= */

import {
    criarEstrelas,
    escaparHTML,
    obterStatusFloracao
} from "./util.js";

/* =========================================================
   IMAGEM PADRÃO
========================================================= */

const IMAGEM_PADRAO = [
    "data:image/svg+xml;charset=UTF-8,",
    encodeURIComponent(`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="800"
            height="600"
            viewBox="0 0 800 600"
        >
            <rect
                width="800"
                height="600"
                fill="#eef4ee"
            />

            <text
                x="400"
                y="270"
                text-anchor="middle"
                font-size="90"
            >
                🌸
            </text>

            <text
                x="400"
                y="360"
                text-anchor="middle"
                font-family="Arial, sans-serif"
                font-size="30"
                fill="#56705a"
            >
                Imagem não disponível
            </text>
        </svg>
    `)
].join("");

/* =========================================================
   OBTENÇÃO DA FOTO PRINCIPAL
========================================================= */

export function obterFotoPrincipal(orquidea) {
    if (
        !orquidea ||
        !Array.isArray(orquidea.fotos) ||
        orquidea.fotos.length === 0
    ) {
        return IMAGEM_PADRAO;
    }

    const fotoValida = orquidea.fotos.find((foto) => {
        if (typeof foto === "string") {
            return foto.trim() !== "";
        }

        if (
            foto &&
            typeof foto === "object"
        ) {
            return Boolean(
                foto.src ||
                foto.url ||
                foto.arquivo
            );
        }

        return false;
    });

    if (!fotoValida) {
        return IMAGEM_PADRAO;
    }

    if (typeof fotoValida === "string") {
        return fotoValida;
    }

    return (
        fotoValida.src ||
        fotoValida.url ||
        fotoValida.arquivo ||
        IMAGEM_PADRAO
    );
}

/* =========================================================
   TEXTO ALTERNATIVO DA IMAGEM
========================================================= */

export function obterTextoAlternativoFoto(orquidea) {
    const nome =
        orquidea?.nome ||
        "Orquídea";

    return `Foto de ${nome}`;
}

/* =========================================================
   NOTA DE RARIDADE
========================================================= */

export function obterNotaRaridade(orquidea) {
    const nota =
        orquidea?.avaliacoes?.raridade;

    return Math.max(
        0,
        Math.min(
            5,
            Number(nota) || 0
        )
    );
}

/* =========================================================
   TEXTO DE RARIDADE
========================================================= */

export function obterTextoRaridade(nota) {
    const valor = Number(nota) || 0;

    if (valor >= 5) {
        return "Muito rara";
    }

    if (valor >= 4) {
        return "Rara";
    }

    if (valor >= 3) {
        return "Pouco comum";
    }

    if (valor >= 2) {
        return "Comum";
    }

    if (valor >= 1) {
        return "Muito comum";
    }

    return "Raridade não avaliada";
}

/* =========================================================
   CLASSE DA DIFICULDADE
========================================================= */

export function obterClasseDificuldade(dificuldade) {
    const valor =
        String(dificuldade || "")
            .toLowerCase()
            .trim();

    if (valor === "fácil" || valor === "facil") {
        return "dificuldade-facil";
    }

    if (valor === "moderada") {
        return "dificuldade-moderada";
    }

    if (valor === "difícil" || valor === "dificil") {
        return "dificuldade-dificil";
    }

    return "dificuldade-nao-informada";
}

/* =========================================================
   ETIQUETAS PRINCIPAIS
========================================================= */

export function criarEtiquetasPrincipais(orquidea) {
    const etiquetas = [];

    if (orquidea?.tipo) {
        etiquetas.push({
            texto: orquidea.tipo,
            classe: "etiqueta-tipo"
        });
    }

    if (orquidea?.dificuldade) {
        etiquetas.push({
            texto: orquidea.dificuldade,
            classe: obterClasseDificuldade(
                orquidea.dificuldade
            )
        });
    }

    return etiquetas
        .map((etiqueta) => {
            return `
                <span
                    class="etiqueta-cartao ${escaparHTML(
                        etiqueta.classe
                    )}"
                >
                    ${escaparHTML(etiqueta.texto)}
                </span>
            `;
        })
        .join("");
}

/* =========================================================
   CARACTERÍSTICAS RESUMIDAS
========================================================= */

export function criarCaracteristicasResumidas(
    orquidea,
    limite = 3
) {
    if (
        !Array.isArray(orquidea?.caracteristicas) ||
        orquidea.caracteristicas.length === 0
    ) {
        return "";
    }

    const caracteristicas =
        orquidea.caracteristicas
            .filter((item) => {
                return (
                    typeof item === "string" &&
                    item.trim() !== ""
                );
            })
            .slice(0, limite);

    if (caracteristicas.length === 0) {
        return "";
    }

    return `
        <div class="caracteristicas-cartao">

            ${caracteristicas
                .map((caracteristica) => {
                    return `
                        <span>
                            ${escaparHTML(caracteristica)}
                        </span>
                    `;
                })
                .join("")}

        </div>
    `;
}

/* =========================================================
   INFORMAÇÕES DE CULTIVO
========================================================= */

export function criarInformacoesCultivo(orquidea) {
    const informacoes = [
        {
            icone: "🌡️",
            rotulo: "Clima",
            valor: orquidea?.clima
        },
        {
            icone: "☀️",
            rotulo: "Iluminação",
            valor: orquidea?.iluminacao
        },
        {
            icone: "🌸",
            rotulo: "Floração",
            valor: orquidea?.floracao
        }
    ];

    const informacoesValidas = informacoes.filter(
        (informacao) => {
            return (
                typeof informacao.valor === "string" &&
                informacao.valor.trim() !== ""
            );
        }
    );

    if (informacoesValidas.length === 0) {
        return `
            <p class="informacao-nao-disponivel">
                Informações de cultivo ainda não cadastradas.
            </p>
        `;
    }

    return `
        <div class="informacoes-cartao">

            ${informacoesValidas
                .map((informacao) => {
                    return `
                        <div class="informacao-cartao">

                            <span class="icone-informacao-cartao">
                                ${informacao.icone}
                            </span>

                            <div>

                                <strong>
                                    ${escaparHTML(
                                        informacao.rotulo
                                    )}
                                </strong>

                                <span>
                                    ${escaparHTML(
                                        informacao.valor
                                    )}
                                </span>

                            </div>

                        </div>
                    `;
                })
                .join("")}

        </div>
    `;
}

/* =========================================================
   RARIDADE
========================================================= */

export function criarAvaliacaoRaridade(orquidea) {
    const nota =
        obterNotaRaridade(orquidea);

    const estrelas =
        criarEstrelas(nota);

    const texto =
        obterTextoRaridade(nota);

    return `
        <div
            class="raridade-cartao"
            title="${escaparHTML(texto)}"
            aria-label="${escaparHTML(
                `${texto}: ${nota} de 5`
            )}"
        >

            <span class="rotulo-raridade">
                Raridade
            </span>

            <span class="estrelas-raridade">
                ${estrelas}
            </span>

        </div>
    `;
}

/* =========================================================
   STATUS DA FLORAÇÃO
========================================================= */

export function criarStatusFloracao(
    orquidea,
    mesReferencia = new Date().getMonth() + 1
) {
    const status =
        obterStatusFloracao(
            orquidea,
            mesReferencia
        );

    return `
        <span
            class="status-floracao-cartao ${escaparHTML(
                status.classe
            )}"
            title="${escaparHTML(status.texto)}"
        >
            <span aria-hidden="true">
                ${status.icone}
            </span>

            ${escaparHTML(status.texto)}
        </span>
    `;
}


/* =========================================================
   RESUMOS VISUAIS E SELOS DO CARTÃO V4
========================================================= */

function primeiraFrase(texto, limite = 145) {
    const valor = String(texto || "").replace(/\s+/g, " ").trim();
    if (!valor) return "Informação ainda não cadastrada.";

    const frase = valor.split(/(?<=[.!?])\s+/)[0] || valor;
    if (frase.length <= limite) return frase;

    const corte = frase.slice(0, limite + 1);
    const ultimoEspaco = corte.lastIndexOf(" ");
    return `${corte.slice(0, ultimoEspaco > 80 ? ultimoEspaco : limite).trim()}…`;
}

function resumirOrigem(orquidea) {
    const origem = String(orquidea?.origem || "").trim();
    if (!origem) return "Origem não informada";

    const texto = origem.toLowerCase();
    const regioes = [
        ["brasil", "Brasil"],
        ["mata atlântica", "Mata Atlântica"],
        ["américa central", "América Central"],
        ["américa do sul", "América do Sul"],
        ["áfrica tropical", "África tropical"],
        ["áfrica ocidental", "África Ocidental"],
        ["áfrica", "África"],
        ["méxico", "México"],
        ["himal", "Himalaia"],
        ["nova guiné", "Nova Guiné"],
        ["ásia", "Ásia tropical"],
        ["híbrido", "Híbrido de cultivo"]
    ];

    const encontrados = regioes
        .filter(([termo]) => texto.includes(termo))
        .map(([, rotulo]) => rotulo);

    if (encontrados.length) return encontrados[0];
    return primeiraFrase(origem, 58).replace(/[.;:]$/, "");
}

function detectarPorte(orquidea) {
    const base = [
        ...(Array.isArray(orquidea?.caracteristicas) ? orquidea.caracteristicas : []),
        orquidea?.descricao,
        orquidea?.habitat
    ].join(" ").toLowerCase();

    if (/micro|miniatura|minúscul|muito pequena/.test(base)) return "Miniatura";
    if (/grande porte|porte grande|robusta|gigante/.test(base)) return "Grande porte";
    return "Porte médio";
}

function detectarHabito(orquidea) {
    const base = [orquidea?.descricao, orquidea?.habitat, ...(orquidea?.caracteristicas || [])]
        .join(" ").toLowerCase();
    if (base.includes("terrestre")) return "Terrestre";
    if (base.includes("litófita") || base.includes("rupícola")) return "Rupícola";
    return "Epífita";
}

function obterSinonimoPrincipal(orquidea) {
    if (typeof orquidea?.sinonimo === "string" && orquidea.sinonimo.trim()) {
        return orquidea.sinonimo.trim();
    }

    if (Array.isArray(orquidea?.sinonimos)) {
        const primeiro = orquidea.sinonimos.find((item) => {
            return typeof item === "string" && item.trim();
        });

        if (primeiro) return primeiro.trim();
    }

    return "";
}

function criarSelosEspecie(orquidea) {
    const sinonimo = obterSinonimoPrincipal(orquidea);
    const selos = [
        { icone: "🌿", texto: detectarHabito(orquidea), classe: "" },
        { icone: "📏", texto: detectarPorte(orquidea), classe: "" },
        { icone: "🌺", texto: Number(orquidea?.avaliacoes?.perfume) >= 4 ? "Perfumada" : null, classe: "" },
        { icone: "💎", texto: Number(orquidea?.avaliacoes?.raridade) >= 4 ? "Rara" : null, classe: "" },
        { icone: "🏷️", texto: sinonimo ? `Sinônimo: ${sinonimo}` : null, classe: "selo-sinonimo-cartao" }
    ].filter((selo) => selo.texto);

    return selos.map((selo) => `
        <span class="selo-visual-cartao ${selo.classe}">
            <span aria-hidden="true">${selo.icone}</span>
            ${escaparHTML(selo.texto)}
        </span>
    `).join("");
}

function criarAvaliacaoCompacta(orquidea) {
    const itens = [
        ["🌱", "Cultivo", orquidea?.avaliacoes?.cultivo],
        ["🌸", "Floração", orquidea?.avaliacoes?.floracao],
        ["🌺", "Perfume", orquidea?.avaliacoes?.perfume],
        ["☀️", "Luz", orquidea?.avaliacoes?.luminosidade],
        ["💧", "Água", orquidea?.avaliacoes?.agua],
        ["💎", "Raridade", orquidea?.avaliacoes?.raridade]
    ];

    return `
        <section class="avaliacao-compacta-cartao" aria-label="Avaliação resumida da espécie">
            <strong class="titulo-avaliacao-compacta">
                <span aria-hidden="true">⭐</span>
                Avaliação da espécie
            </strong>
            <div class="grade-avaliacao-compacta">
                ${itens.map(([icone, rotulo, nota]) => `
                    <div class="item-avaliacao-compacta" title="${escaparHTML(`${rotulo}: ${Number(nota) || 0} de 5`)}">
                        <span class="rotulo-avaliacao-compacta">
                            <span aria-hidden="true">${icone}</span>
                            ${escaparHTML(rotulo)}
                        </span>
                        <span class="estrelas-avaliacao-compacta" aria-label="${Number(nota) || 0} de 5 estrelas">
                            ${criarEstrelas(Number(nota) || 0)}
                        </span>
                    </div>
                `).join("")}
            </div>
        </section>
    `;
}

function criarInformacoesRapidas(orquidea, origemResumida) {
    const dificuldade = String(orquidea?.dificuldade || "").trim();
    const itens = [
        ["🌍", origemResumida],
        dificuldade ? ["📊", `Dificuldade: ${dificuldade}`] : null
    ].filter(Boolean);

    return `
        <div class="informacoes-rapidas-cartao" aria-label="Informações rápidas">
            ${itens.map(([icone, texto]) => `
                <span class="informacao-rapida-cartao">
                    <span aria-hidden="true">${icone}</span>
                    ${escaparHTML(texto)}
                </span>
            `).join("")}
        </div>
    `;
}

/* =========================================================
   ENDEREÇO DA FICHA
========================================================= */

export function criarEnderecoFicha(orquidea) {
    const id =
        String(orquidea?.id || "").trim();

    if (!id) {
        return "orquidea.html";
    }

    return `orquidea.html?id=${encodeURIComponent(id)}`;
}

/* =========================================================
   CARTÃO COMPLETO
========================================================= */

export function criarCartaoOrquidea(
    orquidea,
    opcoes = {}
) {
    if (!orquidea) return "";

    const mesReferencia = Number(opcoes.mesReferencia) || new Date().getMonth() + 1;
    const nome = orquidea.nome || "Orquídea sem identificação";
    const genero = orquidea.genero || "Gênero não informado";
    const origemResumida = resumirOrigem(orquidea);
    const descricaoResumida = primeiraFrase(orquidea.descricao, 145);
    const foto = obterFotoPrincipal(orquidea);
    const textoAlternativo = obterTextoAlternativoFoto(orquidea);
    const enderecoFicha = criarEnderecoFicha(orquidea);
    const statusFloracao = criarStatusFloracao(orquidea, mesReferencia);
    const selos = criarSelosEspecie(orquidea);
    const avaliacao = criarAvaliacaoCompacta(orquidea);
    const informacoesRapidas = criarInformacoesRapidas(orquidea, origemResumida);

    return `
        <article class="cartao-orquidea cartao-orquidea-v4" data-orquidea-id="${escaparHTML(orquidea.id || "")}">
            <div class="bloco-imagem-cartao">
                <a class="link-imagem-cartao" href="${escaparHTML(enderecoFicha)}" aria-label="${escaparHTML(`Abrir ficha de ${nome}`)}">
                    <div class="area-imagem-cartao">
                        <img class="imagem-cartao" src="${escaparHTML(foto)}" alt="${escaparHTML(textoAlternativo)}" loading="lazy" decoding="async"
                            onerror="this.onerror = null; this.src = '${IMAGEM_PADRAO}';">
                        <div class="status-sobre-imagem">${statusFloracao}</div>
                    </div>
                </a>
                ${selos ? `<div class="selos-abaixo-imagem-cartao" aria-label="Características da orquídea">${selos}</div>` : ""}
            </div>

            <div class="conteudo-cartao">
                <div class="identificacao-cartao">
                    <span class="rotulo-genero-cartao">Gênero</span>
                    <span class="genero-cartao">${escaparHTML(genero)}</span>
                    <h3><a href="${escaparHTML(enderecoFicha)}"><em>${escaparHTML(nome)}</em></a></h3>
                    ${informacoesRapidas}
                </div>

                <p class="descricao-cartao descricao-cartao-v4">${escaparHTML(descricaoResumida)}</p>
                ${avaliacao}

                <div class="rodape-cartao">
                    <a class="botao-ficha-completa" href="${escaparHTML(enderecoFicha)}">
                        Ver ficha completa <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </article>
    `;
}

/* =========================================================
   LISTA DE CARTÕES
========================================================= */

export function criarCartoesOrquideas(
    orquideas,
    opcoes = {}
) {
    if (
        !Array.isArray(orquideas) ||
        orquideas.length === 0
    ) {
        return "";
    }

    return orquideas
        .map((orquidea) => {
            return criarCartaoOrquidea(
                orquidea,
                opcoes
            );
        })
        .join("");
}

/* =========================================================
   RENDERIZAÇÃO DOS CARTÕES
========================================================= */

export function renderizarCartoes(
    elemento,
    orquideas,
    opcoes = {}
) {
    if (!elemento) {
        return;
    }

    elemento.innerHTML =
        criarCartoesOrquideas(
            orquideas,
            opcoes
        );
}
