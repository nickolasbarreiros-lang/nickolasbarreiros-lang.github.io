/* =========================================================
   CONFIGURAÇÕES
========================================================= */

const CHAVE_ARMAZENAMENTO =
    "catalogo-orquideas:modo-visualizacao";

const MODO_GALERIA =
    "galeria";

const MODO_LISTA =
    "lista";

const MODOS_VALIDOS = [
    MODO_GALERIA,
    MODO_LISTA
];


/* =========================================================
   VALIDAÇÃO DO MODO
========================================================= */

export function normalizarModoVisualizacao(
    modo
) {
    const valor =
        String(modo || "")
            .toLowerCase()
            .trim();

    return MODOS_VALIDOS.includes(valor)
        ? valor
        : MODO_GALERIA;
}


/* =========================================================
   LEITURA DO ARMAZENAMENTO
========================================================= */

export function obterModoVisualizacaoSalvo() {
    try {
        const modoSalvo =
            localStorage.getItem(
                CHAVE_ARMAZENAMENTO
            );

        return normalizarModoVisualizacao(
            modoSalvo
        );
    } catch (erro) {
        return MODO_GALERIA;
    }
}


/* =========================================================
   SALVAMENTO DO MODO
========================================================= */

export function salvarModoVisualizacao(
    modo
) {
    const modoNormalizado =
        normalizarModoVisualizacao(
            modo
        );

    try {
        localStorage.setItem(
            CHAVE_ARMAZENAMENTO,
            modoNormalizado
        );
    } catch (erro) {
        /*
         * O catálogo continua funcionando mesmo quando
         * o navegador bloqueia o armazenamento local.
         */
    }

    return modoNormalizado;
}


/* =========================================================
   ELEMENTOS DA PÁGINA
========================================================= */

export function obterElementosVisualizacao() {
    return {
        catalogo:
            document.getElementById(
                "catalogo"
            ),

        botaoGaleria:
            document.getElementById(
                "modo-galeria"
            ),

        botaoLista:
            document.getElementById(
                "modo-lista"
            )
    };
}


/* =========================================================
   ATUALIZAÇÃO DOS BOTÕES
========================================================= */

function atualizarBotao(
    botao,
    ativo
) {
    if (!botao) {
        return;
    }

    botao.classList.toggle(
        "ativo",
        ativo
    );

    botao.setAttribute(
        "aria-pressed",
        ativo
            ? "true"
            : "false"
    );
}


/* =========================================================
   APLICAÇÃO DO MODO
========================================================= */

export function aplicarModoVisualizacao(
    modo,
    elementos = obterElementosVisualizacao(),
    opcoes = {}
) {
    const modoNormalizado =
        normalizarModoVisualizacao(
            modo
        );

    const catalogo =
        elementos.catalogo;

    if (catalogo) {
        catalogo.classList.toggle(
            "modo-galeria",
            modoNormalizado === MODO_GALERIA
        );

        catalogo.classList.toggle(
            "modo-lista",
            modoNormalizado === MODO_LISTA
        );

        catalogo.dataset.visualizacao =
            modoNormalizado;
    }

    atualizarBotao(
        elementos.botaoGaleria,
        modoNormalizado === MODO_GALERIA
    );

    atualizarBotao(
        elementos.botaoLista,
        modoNormalizado === MODO_LISTA
    );

    if (opcoes.salvar !== false) {
        salvarModoVisualizacao(
            modoNormalizado
        );
    }

    return modoNormalizado;
}


/* =========================================================
   EVENTO PERSONALIZADO
========================================================= */

function dispararEventoVisualizacao(
    modo
) {
    document.dispatchEvent(
        new CustomEvent(
            "catalogo:visualizacao-alterada",
            {
                detail: {
                    modo
                }
            }
        )
    );
}


/* =========================================================
   CONTROLADOR DA VISUALIZAÇÃO
========================================================= */

export function inicializarVisualizacao(
    opcoes = {}
) {
    const elementos =
        opcoes.elementos ||
        obterElementosVisualizacao();

    let modoAtual =
        normalizarModoVisualizacao(
            opcoes.modoInicial ||
            obterModoVisualizacaoSalvo()
        );


    /* -----------------------------------------------------
       ALTERAÇÃO DO MODO
    ------------------------------------------------------ */

    function definirModo(
        novoModo,
        origem = "manual"
    ) {
        modoAtual =
            aplicarModoVisualizacao(
                novoModo,
                elementos
            );

        const resultado = {
            modo:
                modoAtual,

            origem
        };

        dispararEventoVisualizacao(
            modoAtual
        );

        if (
            typeof opcoes.aoAlterar ===
            "function"
        ) {
            opcoes.aoAlterar(
                resultado
            );
        }

        return resultado;
    }


    /* -----------------------------------------------------
       EVENTOS DOS BOTÕES
    ------------------------------------------------------ */

    function ativarGaleria() {
        definirModo(
            MODO_GALERIA,
            "botao-galeria"
        );
    }

    function ativarLista() {
        definirModo(
            MODO_LISTA,
            "botao-lista"
        );
    }

    elementos.botaoGaleria
        ?.addEventListener(
            "click",
            ativarGaleria
        );

    elementos.botaoLista
        ?.addEventListener(
            "click",
            ativarLista
        );


    /* -----------------------------------------------------
       ESTADO INICIAL
    ------------------------------------------------------ */

    aplicarModoVisualizacao(
        modoAtual,
        elementos,
        {
            salvar: false
        }
    );


    /* -----------------------------------------------------
       API DO CONTROLADOR
    ------------------------------------------------------ */

    return {
        obterModo() {
            return modoAtual;
        },

        definirModo(novoModo) {
            return definirModo(
                novoModo,
                "api"
            );
        },

        exibirGaleria() {
            return definirModo(
                MODO_GALERIA,
                "api-galeria"
            );
        },

        exibirLista() {
            return definirModo(
                MODO_LISTA,
                "api-lista"
            );
        },

        alternar() {
            return definirModo(
                modoAtual === MODO_GALERIA
                    ? MODO_LISTA
                    : MODO_GALERIA,
                "alternancia"
            );
        },

        destruir() {
            elementos.botaoGaleria
                ?.removeEventListener(
                    "click",
                    ativarGaleria
                );

            elementos.botaoLista
                ?.removeEventListener(
                    "click",
                    ativarLista
                );
        }
    };
}


/* =========================================================
   EXPORTAÇÕES DOS NOMES DOS MODOS
========================================================= */

export const VISUALIZACAO_GALERIA =
    MODO_GALERIA;

export const VISUALIZACAO_LISTA =
    MODO_LISTA;
