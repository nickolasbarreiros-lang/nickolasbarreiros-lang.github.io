import { orquideas } from "./dados/orquideas.js";

/* =========================================================
   LEITURA DO ID DA ORQUÍDEA
========================================================= */

const parametros = new URLSearchParams(window.location.search);
const idOrquidea = parametros.get("id");

const ficha = document.getElementById("ficha");

const fichaNaoEncontrada =
    document.getElementById("ficha-nao-encontrada");

/* =========================================================
   LOCALIZAÇÃO DA ORQUÍDEA
========================================================= */

const orquidea = orquideas.find((item) => {
    return item.id === idOrquidea;
});

/* =========================================================
   FUNÇÕES AUXILIARES
========================================================= */

function obterTexto(valor, textoPadrao = "Não informado") {
    if (
        valor === undefined ||
        valor === null ||
        String(valor).trim() === ""
    ) {
        return textoPadrao;
    }

    return valor;
}

function criarCaracteristicas(caracteristicas) {
    if (
        !Array.isArray(caracteristicas) ||
        caracteristicas.length === 0
    ) {
        return "";
    }

    return caracteristicas.map((caracteristica) => {
        return `
            <span class="caracteristica">
                ${caracteristica}
            </span>
        `;
    }).join("");
}

function obterFotos(fotos) {
    if (!Array.isArray(fotos)) {
        return [];
    }

    return fotos.filter((foto) => {
        return typeof foto === "string" && foto.trim() !== "";
    });
}

function criarGaleriaInicial(fotos) {
    if (fotos.length === 0) {
        return `
            <div class="foto-galeria foto-sem-imagem">

                <div class="imagem-nao-disponivel">
                    <span>🌸</span>

                    <p>
                        Imagem ainda não cadastrada
                    </p>
                </div>

            </div>
        `;
    }

    return fotos.map((foto, indice) => {
        return `
            <button
                class="foto-galeria"
                type="button"
                data-indice="${indice}"
                aria-label="Visualizar foto ${indice + 1}"
            >

                <img
                    src="${foto}"
                    alt="${orquidea.nome} — foto ${indice + 1}"
                    loading="${indice === 0 ? "eager" : "lazy"}"
                >

            </button>
        `;
    }).join("");
}

/* =========================================================
   EXIBIÇÃO DA FICHA
========================================================= */

if (!orquidea) {

    ficha.style.display = "none";
    fichaNaoEncontrada.style.display = "block";

} else {

    fichaNaoEncontrada.style.display = "none";

    document.title =
        `${orquidea.nome} | Catálogo de Orquídeas`;

    const fotos = obterFotos(orquidea.fotos);

    ficha.innerHTML = `

        <section class="cabecalho-especie">

            <div class="linha-superior-especie">

                <div class="identificacao-especie">

                    <div class="etiquetas">

                        <span class="etiqueta">
                            ${obterTexto(
                                orquidea.tipo,
                                "Tipo não informado"
                            )}
                        </span>

                        <span class="etiqueta">
                            ${obterTexto(
                                orquidea.genero,
                                "Gênero não informado"
                            )}
                        </span>

                        <span class="etiqueta">
                            Cultivo ${obterTexto(
                                orquidea.dificuldade,
                                "não informado"
                            )}
                        </span>

                    </div>

                    <h2 class="titulo-ficha">
                        ${orquidea.nome}
                    </h2>

                    <div class="lista-caracteristicas">

                        ${criarCaracteristicas(
                            orquidea.caracteristicas
                        )}

                    </div>

                </div>

                <div class="acoes-ficha">

                    <button
                        id="imprimir-ficha"
                        class="botao-acao-ficha botao-imprimir"
                        type="button"
                    >
                        🖨️ Imprimir
                    </button>

                    <button
                        id="copiar-link"
                        class="botao-acao-ficha botao-copiar"
                        type="button"
                    >
                        🔗 Copiar link
                    </button>

                </div>

            </div>

        </section>

        <section class="galeria-detalhada">

            ${criarGaleriaInicial(fotos)}

        </section>

        <section class="conteudo-ficha">

            <section class="descricao-especie">

                <h3>
                    Sobre a espécie
                </h3>

                <p>
                    ${obterTexto(
                        orquidea.descricao,
                        "A descrição desta orquídea ainda não foi cadastrada."
                    )}
                </p>

            </section>

        </section>

    `;

    /* =====================================================
       BOTÃO DE IMPRESSÃO
    ===================================================== */

    const botaoImprimir =
        document.getElementById("imprimir-ficha");

    botaoImprimir.addEventListener("click", () => {
        window.print();
    });

    /* =====================================================
       BOTÃO PARA COPIAR O LINK
    ===================================================== */

    const botaoCopiarLink =
        document.getElementById("copiar-link");

    botaoCopiarLink.addEventListener("click", async () => {

        const textoOriginal =
            botaoCopiarLink.innerHTML;

        try {

            await navigator.clipboard.writeText(
                window.location.href
            );

            botaoCopiarLink.innerHTML =
                "✅ Link copiado";

        } catch {

            botaoCopiarLink.innerHTML =
                "Não foi possível copiar";

        }

        window.setTimeout(() => {

            botaoCopiarLink.innerHTML =
                textoOriginal;

        }, 1800);

    });

}
