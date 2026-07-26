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
    if (!orquidea) {
        return "";
    }

    const mesReferencia =
        Number(opcoes.mesReferencia) ||
        new Date().getMonth() + 1;

    const nome =
        orquidea.nome ||
        "Orquídea sem identificação";

    const genero =
        orquidea.genero ||
        "Gênero não informado";

    const origem =
        orquidea.origem ||
        "Origem não informada";

    const descricao =
        orquidea.descricao ||
        "Descrição ainda não cadastrada.";

    const foto =
        obterFotoPrincipal(orquidea);

    const textoAlternativo =
        obterTextoAlternativoFoto(orquidea);

    const enderecoFicha =
        criarEnderecoFicha(orquidea);

    const etiquetas =
        criarEtiquetasPrincipais(orquidea);

    const caracteristicas =
        criarCaracteristicasResumidas(orquidea);

    const informacoesCultivo =
        criarInformacoesCultivo(orquidea);

    const raridade =
        criarAvaliacaoRaridade(orquidea);

    const statusFloracao =
        criarStatusFloracao(
            orquidea,
            mesReferencia
        );

    return `
        <article
            class="cartao-orquidea"
            data-orquidea-id="${escaparHTML(
                orquidea.id || ""
            )}"
        >

            <a
                class="link-imagem-cartao"
                href="${escaparHTML(enderecoFicha)}"
                aria-label="${escaparHTML(
                    `Abrir ficha de ${nome}`
                )}"
            >

                <div class="area-imagem-cartao">

                    <img
                        class="imagem-cartao"
                        src="${escaparHTML(foto)}"
                        alt="${escaparHTML(
                            textoAlternativo
                        )}"
                        loading="lazy"
                        decoding="async"
                        onerror="
                            this.onerror = null;
                            this.src = '${IMAGEM_PADRAO}';
                        "
                    >

                    <div class="status-sobre-imagem">

                        ${statusFloracao}

                    </div>

                </div>

            </a>

            <div class="conteudo-cartao">

                <div class="topo-conteudo-cartao">

                    <div class="etiquetas-cartao">

                        ${etiquetas}

                    </div>

                    ${raridade}

                </div>

                <div class="identificacao-cartao">

                    <span class="genero-cartao">
                        ${escaparHTML(genero)}
                    </span>

                    <h3>
                        <a href="${escaparHTML(
                            enderecoFicha
                        )}">
                            <em>
                                ${escaparHTML(nome)}
                            </em>
                        </a>
                    </h3>

                    <p class="origem-cartao">
                        <span aria-hidden="true">
                            🌎
                        </span>

                        ${escaparHTML(origem)}
                    </p>

                </div>

                <p class="descricao-cartao">
                    ${escaparHTML(descricao)}
                </p>

                ${caracteristicas}

                ${informacoesCultivo}

                <div class="rodape-cartao">

                    <a
                        class="botao-ficha-completa"
                        href="${escaparHTML(
                            enderecoFicha
                        )}"
                    >
                        Ver ficha completa

                        <span aria-hidden="true">
                            →
                        </span>
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
