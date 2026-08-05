/* =========================================================
   IMPORTAÇÕES
========================================================= */

import {
    renderizarCartoes
} from "./cards.js";

import {
    ordenarOrquideas
} from "./ordenacao.js";

import {
    NOME_EVENTO_FILTROS_ALTERADOS
} from "./filtros.js";


/* =========================================================
   CONFIGURAÇÕES
========================================================= */

const EVENTO_CATALOGO_ATUALIZADO =
    "catalogo:resultados-atualizados";

const CRITERIO_PADRAO =
    "nome-az";


/* =========================================================
   VALIDAÇÃO DA LISTA
========================================================= */

function obterListaValida(orquideas) {
    return Array.isArray(orquideas)
        ? orquideas.filter(Boolean)
        : [];
}


/* =========================================================
   VALIDAÇÃO DO MÊS
========================================================= */

function normalizarMes(mes) {
    const numero =
        Number(mes);

    if (
        Number.isInteger(numero) &&
        numero >= 1 &&
        numero <= 12
    ) {
        return numero;
    }

    return new Date().getMonth() + 1;
}


/* =========================================================
   ELEMENTOS DA PÁGINA
========================================================= */

export function obterElementosCatalogo() {
    return {
        catalogo:
            document.getElementById(
                "catalogo"
            ),

        contador:
            document.getElementById(
                "contador"
            ),

        semResultados:
            document.getElementById(
                "sem-resultados"
            ),

        ordenacao:
            document.getElementById(
                "ordenacao"
            ),

        areaResultados:
            document.querySelector(
                ".area-resultados"
            )
    };
}


/* =========================================================
   FORMATAÇÃO DA QUANTIDADE
========================================================= */

export function criarTextoContador(
    quantidade,
    total
) {
    const quantidadeValida =
        Math.max(
            0,
            Number(quantidade) || 0
        );

    const totalValido =
        Math.max(
            0,
            Number(total) || 0
        );

    if (totalValido === 0) {
        return "Nenhuma orquídea cadastrada.";
    }

    if (quantidadeValida === totalValido) {
        if (totalValido === 1) {
            return "1 orquídea cadastrada.";
        }

        return `${totalValido} orquídeas cadastradas.`;
    }

    if (quantidadeValida === 0) {
        return `Nenhum resultado entre ${totalValido} orquídeas.`;
    }

    if (quantidadeValida === 1) {
        return `1 resultado entre ${totalValido} orquídeas.`;
    }

    return `${quantidadeValida} resultados entre ${totalValido} orquídeas.`;
}


/* =========================================================
   ATUALIZAÇÃO DO CONTADOR
========================================================= */

export function atualizarContador(
    elemento,
    quantidade,
    total
) {
    if (!elemento) {
        return;
    }

    elemento.textContent =
        criarTextoContador(
            quantidade,
            total
        );

    elemento.dataset.quantidade =
        String(
            Math.max(
                0,
                Number(quantidade) || 0
            )
        );

    elemento.dataset.total =
        String(
            Math.max(
                0,
                Number(total) || 0
            )
        );
}


/* =========================================================
   CONTROLE DA MENSAGEM SEM RESULTADOS
========================================================= */

export function atualizarMensagemSemResultados(
    elemento,
    possuiResultados
) {
    if (!elemento) {
        return;
    }

    const exibir =
        !possuiResultados;

    elemento.hidden =
        !exibir;

    elemento.classList.toggle(
        "visivel",
        exibir
    );

    elemento.setAttribute(
        "aria-hidden",
        exibir
            ? "false"
            : "true"
    );
}


/* =========================================================
   CONTROLE DO CATÁLOGO VAZIO
========================================================= */

function atualizarEstadoCatalogo(
    elementos,
    possuiResultados
) {
    if (elementos.catalogo) {
        elementos.catalogo.hidden =
            !possuiResultados;

        elementos.catalogo.classList.toggle(
            "catalogo-vazio",
            !possuiResultados
        );
    }

    if (elementos.areaResultados) {
        elementos.areaResultados.classList.toggle(
            "sem-resultados-ativos",
            !possuiResultados
        );
    }

    atualizarMensagemSemResultados(
        elementos.semResultados,
        possuiResultados
    );
}


/* =========================================================
   OBTENÇÃO DO CRITÉRIO DE ORDENAÇÃO
========================================================= */

export function obterCriterioOrdenacao(
    elemento
) {
    const criterio =
        String(
            elemento?.value ||
            CRITERIO_PADRAO
        ).trim();

    return criterio || CRITERIO_PADRAO;
}


/* =========================================================
   RENDERIZAÇÃO PRINCIPAL
========================================================= */

export function renderizarCatalogo(
    orquideas,
    opcoes = {}
) {
    const elementos =
        opcoes.elementos ||
        obterElementosCatalogo();

    const lista =
        obterListaValida(orquideas);

    const total =
        Number.isFinite(
            Number(opcoes.total)
        )
            ? Math.max(
                0,
                Number(opcoes.total)
            )
            : lista.length;

    const criterio =
        String(
            opcoes.criterio ||
            obterCriterioOrdenacao(
                elementos.ordenacao
            )
        ).trim() || CRITERIO_PADRAO;

    const mesReferencia =
        normalizarMes(
            opcoes.mesReferencia
        );

    const listaOrdenada =
        ordenarOrquideas(
            lista,
            criterio
        );

    const possuiResultados =
        listaOrdenada.length > 0;

    atualizarContador(
        elementos.contador,
        listaOrdenada.length,
        total
    );

    atualizarEstadoCatalogo(
        elementos,
        possuiResultados
    );

    if (elementos.catalogo) {
        if (possuiResultados) {
            renderizarCartoes(
                elementos.catalogo,
                listaOrdenada,
                {
                    mesReferencia
                }
            );
        } else {
            elementos.catalogo.innerHTML = "";
        }

        elementos.catalogo.dataset.quantidade =
            String(listaOrdenada.length);

        elementos.catalogo.dataset.total =
            String(total);

        elementos.catalogo.dataset.ordenacao =
            criterio;

        elementos.catalogo.dataset.mesReferencia =
            String(mesReferencia);
    }

    return {
        orquideas:
            listaOrdenada,

        quantidade:
            listaOrdenada.length,

        total,

        criterio,

        mesReferencia,

        possuiResultados
    };
}


/* =========================================================
   DISPARO DO EVENTO DE ATUALIZAÇÃO
========================================================= */

function dispararEventoCatalogo(
    resultado,
    origem
) {
    document.dispatchEvent(
        new CustomEvent(
            EVENTO_CATALOGO_ATUALIZADO,
            {
                detail: {
                    ...resultado,
                    origem
                }
            }
        )
    );
}


/* =========================================================
   CONTROLADOR DO CATÁLOGO
========================================================= */

export function inicializarCatalogo(
    orquideas,
    opcoes = {}
) {
    const listaCompleta =
        obterListaValida(orquideas);

    const elementos =
        opcoes.elementos ||
        obterElementosCatalogo();

    let listaAtual =
        [...listaCompleta];

    let criterioAtual =
        obterCriterioOrdenacao(
            elementos.ordenacao
        );

    let mesReferencia =
        normalizarMes(
            opcoes.mesReferencia
        );

    let resultadoAtual = null;


    /* -----------------------------------------------------
       RENDERIZAÇÃO
    ------------------------------------------------------ */

    function renderizar(
        origem = "manual"
    ) {
        resultadoAtual =
            renderizarCatalogo(
                listaAtual,
                {
                    elementos,

                    total:
                        listaCompleta.length,

                    criterio:
                        criterioAtual,

                    mesReferencia
                }
            );

        dispararEventoCatalogo(
            resultadoAtual,
            origem
        );

        if (
            typeof opcoes.aoRenderizar ===
            "function"
        ) {
            opcoes.aoRenderizar({
                ...resultadoAtual,
                origem
            });
        }

        return resultadoAtual;
    }


    /* -----------------------------------------------------
       ALTERAÇÃO DA ORDENAÇÃO
    ------------------------------------------------------ */

    function aoAlterarOrdenacao() {
        criterioAtual =
            obterCriterioOrdenacao(
                elementos.ordenacao
            );

        renderizar(
            "ordenacao"
        );
    }


    /* -----------------------------------------------------
       RECEBIMENTO DOS FILTROS
    ------------------------------------------------------ */

    function aoReceberFiltros(evento) {
        const detalhe =
            evento?.detail || {};

        listaAtual =
            obterListaValida(
                detalhe.orquideas
            );

        renderizar(
            detalhe.origem ||
            "filtros"
        );
    }


    /* -----------------------------------------------------
       RECEBIMENTO DO MÊS DO PAINEL
    ------------------------------------------------------ */

    function aoAlterarMesPainel(evento) {
        const mes =
            evento?.detail?.mes;

        if (mes) {
            mesReferencia =
                normalizarMes(mes);

            renderizar(
                "mes-painel"
            );
        }
    }


    /* -----------------------------------------------------
       EVENTOS
    ------------------------------------------------------ */

    elementos.ordenacao
        ?.addEventListener(
            "change",
            aoAlterarOrdenacao
        );

    document.addEventListener(
        NOME_EVENTO_FILTROS_ALTERADOS,
        aoReceberFiltros
    );

    document.addEventListener(
        "catalogo:mes-floracao-alterado",
        aoAlterarMesPainel
    );


    /* -----------------------------------------------------
       ESTADO INICIAL
    ------------------------------------------------------ */

    renderizar(
        "inicializacao"
    );


    /* -----------------------------------------------------
       API DO CONTROLADOR
    ------------------------------------------------------ */

    return {
        renderizar() {
            return renderizar(
                "api"
            );
        },

        obterResultado() {
            if (!resultadoAtual) {
                return null;
            }

            return {
                ...resultadoAtual,
                orquideas:
                    [...resultadoAtual.orquideas]
            };
        },

        obterOrquideasExibidas() {
            return [...listaAtual];
        },

        obterTodasOrquideas() {
            return [...listaCompleta];
        },

        obterCriterioOrdenacao() {
            return criterioAtual;
        },

        definirOrdenacao(
            novoCriterio
        ) {
            criterioAtual =
                String(
                    novoCriterio ||
                    CRITERIO_PADRAO
                ).trim() ||
                CRITERIO_PADRAO;

            if (elementos.ordenacao) {
                const opcaoExiste =
                    [
                        ...elementos
                            .ordenacao
                            .options
                    ].some((opcao) => {
                        return (
                            opcao.value ===
                            criterioAtual
                        );
                    });

                if (opcaoExiste) {
                    elementos.ordenacao.value =
                        criterioAtual;
                }
            }

            return renderizar(
                "ordenacao-api"
            );
        },

        obterMesReferencia() {
            return mesReferencia;
        },

        definirMesReferencia(
            novoMes
        ) {
            mesReferencia =
                normalizarMes(
                    novoMes
                );

            return renderizar(
                "mes-api"
            );
        },

        definirOrquideas(
            novasOrquideas
        ) {
            listaAtual =
                obterListaValida(
                    novasOrquideas
                );

            return renderizar(
                "lista-api"
            );
        },

        exibirTodas() {
            listaAtual =
                [...listaCompleta];

            return renderizar(
                "exibir-todas"
            );
        },

        atualizarBase(
            novasOrquideas
        ) {
            const novaLista =
                obterListaValida(
                    novasOrquideas
                );

            listaCompleta.splice(
                0,
                listaCompleta.length,
                ...novaLista
            );

            listaAtual =
                [...listaCompleta];

            return renderizar(
                "atualizacao-base"
            );
        },

        destruir() {
            elementos.ordenacao
                ?.removeEventListener(
                    "change",
                    aoAlterarOrdenacao
                );

            document.removeEventListener(
                NOME_EVENTO_FILTROS_ALTERADOS,
                aoReceberFiltros
            );

            document.removeEventListener(
                "catalogo:mes-floracao-alterado",
                aoAlterarMesPainel
            );
        }
    };
}


/* =========================================================
   EXPORTAÇÕES
========================================================= */

export const NOME_EVENTO_CATALOGO_ATUALIZADO =
    EVENTO_CATALOGO_ATUALIZADO;

export const ORDENACAO_PADRAO =
    CRITERIO_PADRAO;
