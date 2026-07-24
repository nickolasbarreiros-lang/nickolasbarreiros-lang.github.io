/* =========================================================
   IMPORTAÇÃO DOS DADOS
========================================================= */

import { orquideas } from "../dados/orquideas/index.js";


/* =========================================================
   IMPORTAÇÃO DOS MÓDULOS
========================================================= */

import {
    renderizarEstatisticasDaPagina
} from "./estatisticas.js";

import {
    inicializarCatalogo
} from "./catalogo.js";

import {
    inicializarFiltros
} from "./filtros.js";

import {
    inicializarPainelFloracao
} from "./painel-floracao.js";

import {
    inicializarVisualizacao
} from "./visualizacao.js";


/* =========================================================
   CONFIGURAÇÕES
========================================================= */

const EVENTO_LIMPAR_PAINEL =
    "catalogo:limpar-painel-floracao";

const ID_MENSAGEM_ERRO =
    "erro-inicializacao-catalogo";


/* =========================================================
   CONTROLADORES
========================================================= */

let controladorCatalogo = null;

let controladorFiltros = null;

let controladorPainelFloracao = null;

let controladorVisualizacao = null;

let aplicacaoInicializada = false;


/* =========================================================
   OBTENÇÃO DOS DADOS
========================================================= */

function obterOrquideasDoModulo() {
    const possibilidades = [
        moduloDados.orquideas,
        moduloDados.catalogoOrquideas,
        moduloDados.dadosOrquideas,
        moduloDados.default
    ];

    const listaEncontrada =
        possibilidades.find((valor) => {
            return Array.isArray(valor);
        });

    if (!listaEncontrada) {
        return [];
    }

    return listaEncontrada.filter(Boolean);
}


/* =========================================================
   ORDENAÇÃO INICIAL DOS DADOS
========================================================= */

function prepararOrquideas(orquideas) {
    if (!Array.isArray(orquideas)) {
        return [];
    }

    return orquideas.filter((orquidea) => {
        return (
            orquidea &&
            typeof orquidea === "object"
        );
    });
}


/* =========================================================
   ELEMENTO DE ERRO
========================================================= */

function obterAreaPrincipal() {
    return (
        document.querySelector("main") ||
        document.body
    );
}


/* =========================================================
   CRIAÇÃO DA MENSAGEM DE ERRO
========================================================= */

function criarMensagemErro(mensagem) {
    const existente =
        document.getElementById(
            ID_MENSAGEM_ERRO
        );

    if (existente) {
        existente.remove();
    }

    const elemento =
        document.createElement("section");

    elemento.id =
        ID_MENSAGEM_ERRO;

    elemento.className =
        "mensagem-erro-catalogo";

    elemento.setAttribute(
        "role",
        "alert"
    );

    const titulo =
        document.createElement("h2");

    titulo.textContent =
        "Não foi possível carregar o catálogo";

    const descricao =
        document.createElement("p");

    descricao.textContent =
        mensagem;

    const orientacao =
        document.createElement("p");

    orientacao.textContent =
        "Verifique o console do navegador para identificar o arquivo que apresentou o problema.";

    elemento.append(
        titulo,
        descricao,
        orientacao
    );

    obterAreaPrincipal().prepend(
        elemento
    );

    return elemento;
}


/* =========================================================
   REMOÇÃO DA MENSAGEM DE ERRO
========================================================= */

function removerMensagemErro() {
    document
        .getElementById(
            ID_MENSAGEM_ERRO
        )
        ?.remove();
}


/* =========================================================
   MÊS ATUAL
========================================================= */

function obterMesAtual() {
    return new Date().getMonth() + 1;
}


/* =========================================================
   INICIALIZAÇÃO DAS ESTATÍSTICAS
========================================================= */

function iniciarEstatisticas(orquideas) {
    renderizarEstatisticasDaPagina(
        orquideas
    );
}


/* =========================================================
   INICIALIZAÇÃO DO CATÁLOGO
========================================================= */

function iniciarCatalogo(orquideas) {
    controladorCatalogo =
        inicializarCatalogo(
            orquideas,
            {
                mesReferencia:
                    obterMesAtual()
            }
        );

    return controladorCatalogo;
}


/* =========================================================
   INICIALIZAÇÃO DA VISUALIZAÇÃO
========================================================= */

function iniciarVisualizacao() {
    controladorVisualizacao =
        inicializarVisualizacao();

    return controladorVisualizacao;
}


/* =========================================================
   INICIALIZAÇÃO DO PAINEL
========================================================= */

function iniciarPainelFloracao(orquideas) {
    controladorPainelFloracao =
        inicializarPainelFloracao(
            orquideas,
            {
                mesInicial:
                    obterMesAtual(),

                aoAlterarMes(resumo) {
                    controladorCatalogo
                        ?.definirMesReferencia(
                            resumo.mesAtual
                        );
                },

                aoFiltrar(detalhes) {
                    controladorCatalogo
                        ?.definirMesReferencia(
                            detalhes.mes
                        );
                }
            }
        );

    return controladorPainelFloracao;
}


/* =========================================================
   INICIALIZAÇÃO DOS FILTROS
========================================================= */

function iniciarFiltros(orquideas) {
    controladorFiltros =
        inicializarFiltros(
            orquideas,
            {
                aoFiltrar(resultado) {
                    if (
                        resultado.mesPainel
                    ) {
                        controladorCatalogo
                            ?.definirMesReferencia(
                                resultado.mesPainel
                            );
                    }
                }
            }
        );

    return controladorFiltros;
}


/* =========================================================
   LIMPEZA DO FILTRO DO PAINEL
========================================================= */

function aoLimparPainelFloracao() {
    controladorPainelFloracao
        ?.desativarFiltro();
}


/* =========================================================
   EVENTOS GLOBAIS
========================================================= */

function adicionarEventosGlobais() {
    document.addEventListener(
        EVENTO_LIMPAR_PAINEL,
        aoLimparPainelFloracao
    );
}


/* =========================================================
   REMOÇÃO DOS EVENTOS GLOBAIS
========================================================= */

function removerEventosGlobais() {
    document.removeEventListener(
        EVENTO_LIMPAR_PAINEL,
        aoLimparPainelFloracao
    );
}


/* =========================================================
   DESTRUIÇÃO DOS CONTROLADORES
========================================================= */

export function destruirAplicacao() {
    removerEventosGlobais();

    controladorFiltros
        ?.destruir();

    controladorPainelFloracao
        ?.destruir();

    controladorVisualizacao
        ?.destruir();

    controladorCatalogo
        ?.destruir();

    controladorCatalogo = null;
    controladorFiltros = null;
    controladorPainelFloracao = null;
    controladorVisualizacao = null;

    aplicacaoInicializada = false;
}


/* =========================================================
   VERIFICAÇÃO DOS ELEMENTOS PRINCIPAIS
========================================================= */

function verificarEstruturaDaPagina() {
    const elementosObrigatorios = [
        {
            id: "catalogo",
            descricao:
                "área do catálogo"
        },
        {
            id: "contador",
            descricao:
                "contador de resultados"
        }
    ];

    const ausentes =
        elementosObrigatorios.filter(
            (item) => {
                return !document.getElementById(
                    item.id
                );
            }
        );

    if (ausentes.length === 0) {
        return;
    }

    const descricoes =
        ausentes
            .map((item) => {
                return item.descricao;
            })
            .join(", ");

    throw new Error(
        `Elementos obrigatórios ausentes no index.html: ${descricoes}.`
    );
}


/* =========================================================
   INICIALIZAÇÃO PRINCIPAL
========================================================= */

export function inicializarAplicacao() {
    if (aplicacaoInicializada) {
        return obterControladores();
    }

    removerMensagemErro();

    verificarEstruturaDaPagina();

    const orquideas =
        prepararOrquideas(
            obterOrquideasDoModulo()
        );

    if (orquideas.length === 0) {
        console.warn(
            "Nenhuma orquídea foi encontrada em dados/orquideas.js."
        );
    }

    /*
     * O catálogo é iniciado antes dos filtros porque o módulo
     * de filtros dispara um evento logo na inicialização.
     * Dessa forma, o catálogo já estará preparado para receber
     * o primeiro resultado.
     */

    iniciarEstatisticas(
        orquideas
    );

    iniciarCatalogo(
        orquideas
    );

    iniciarVisualizacao();

    iniciarPainelFloracao(
        orquideas
    );

    iniciarFiltros(
        orquideas
    );

    adicionarEventosGlobais();

    aplicacaoInicializada = true;

    const controladores =
        obterControladores();

    disponibilizarAplicacaoGlobalmente(
        orquideas,
        controladores
    );

    document.documentElement.classList.add(
        "catalogo-inicializado"
    );

    document.dispatchEvent(
        new CustomEvent(
            "catalogo:aplicacao-inicializada",
            {
                detail: {
                    total:
                        orquideas.length,

                    controladores
                }
            }
        )
    );

    return controladores;
}


/* =========================================================
   OBTENÇÃO DOS CONTROLADORES
========================================================= */

export function obterControladores() {
    return {
        catalogo:
            controladorCatalogo,

        filtros:
            controladorFiltros,

        painelFloracao:
            controladorPainelFloracao,

        visualizacao:
            controladorVisualizacao
    };
}


/* =========================================================
   DISPONIBILIZAÇÃO PARA TESTES NO CONSOLE
========================================================= */

function disponibilizarAplicacaoGlobalmente(
    orquideas,
    controladores
) {
    window.catalogoOrquideasApp = {
        orquideas:
            [...orquideas],

        controladores,

        reiniciar() {
            destruirAplicacao();

            return inicializarAplicacao();
        },

        obterEstado() {
            return {
                totalOrquideas:
                    orquideas.length,

                filtros:
                    controladorFiltros
                        ?.obterFiltros() ||
                    null,

                quantidadeExibida:
                    controladorCatalogo
                        ?.obterResultado()
                        ?.quantidade ??
                    0,

                ordenacao:
                    controladorCatalogo
                        ?.obterCriterioOrdenacao() ||
                    null,

                mesReferencia:
                    controladorCatalogo
                        ?.obterMesReferencia() ||
                    null,

                modoVisualizacao:
                    controladorVisualizacao
                        ?.obterModo() ||
                    null,

                filtroMensalAtivo:
                    controladorPainelFloracao
                        ?.filtroEstaAtivo() ||
                    false
            };
        }
    };
}


/* =========================================================
   TRATAMENTO DE ERRO
========================================================= */

function tratarErroInicializacao(erro) {
    aplicacaoInicializada = false;

    console.error(
        "Erro ao inicializar o catálogo:",
        erro
    );

    criarMensagemErro(
        erro instanceof Error
            ? erro.message
            : "Ocorreu um erro inesperado durante a inicialização."
    );
}


/* =========================================================
   EXECUÇÃO AUTOMÁTICA
========================================================= */

function executar() {
    try {
        inicializarAplicacao();
    } catch (erro) {
        tratarErroInicializacao(
            erro
        );
    }
}

if (
    document.readyState === "loading"
) {
    document.addEventListener(
        "DOMContentLoaded",
        executar,
        {
            once: true
        }
    );
} else {
    executar();
}
