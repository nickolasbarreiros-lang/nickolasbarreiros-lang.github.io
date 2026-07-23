/* =========================================================
   IMPORTAÇÕES
========================================================= */

import {
    compararTextos,
    escaparHTML,
    formatarDataCompleta,
    nomesMeses,
    normalizarMesesFloracao
} from "./util.js";

import {
    criarEnderecoFicha
} from "./cards.js";


/* =========================================================
   CONFIGURAÇÕES
========================================================= */

const EVENTO_FILTRAR_FLORACOES =
    "catalogo:filtrar-floracoes";

const CLASSE_BOTAO_ATIVO =
    "filtro-floracao-ativo";


/* =========================================================
   VALIDAÇÃO DO MÊS
========================================================= */

function normalizarMes(mes) {
    const numero = Number(mes);

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
   CÁLCULO DOS MESES FUTUROS
========================================================= */

export function obterMesSeguinte(
    mesReferencia,
    quantidade = 1
) {
    const mes =
        normalizarMes(mesReferencia);

    const deslocamento =
        Number.isInteger(Number(quantidade))
            ? Number(quantidade)
            : 1;

    return (
        (
            mes - 1 + deslocamento
        ) % 12 + 12
    ) % 12 + 1;
}


/* =========================================================
   VERIFICAÇÃO DA FLORAÇÃO
========================================================= */

export function floresceNoMes(
    orquidea,
    mes
) {
    const mesNormalizado =
        normalizarMes(mes);

    const mesesFloracao =
        normalizarMesesFloracao(orquidea);

    return mesesFloracao.includes(
        mesNormalizado
    );
}


/* =========================================================
   FILTRAGEM POR MÊS
========================================================= */

export function obterOrquideasDoMes(
    orquideas,
    mes
) {
    if (!Array.isArray(orquideas)) {
        return [];
    }

    return orquideas
        .filter(Boolean)
        .filter((orquidea) => {
            return floresceNoMes(
                orquidea,
                mes
            );
        })
        .sort((a, b) => {
            return compararTextos(
                a?.nome,
                b?.nome
            );
        });
}


/* =========================================================
   CÁLCULO DO PERCENTUAL
========================================================= */

export function calcularPercentualFloracao(
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
        return 0;
    }

    return Math.min(
        100,
        Math.max(
            0,
            Math.round(
                (
                    quantidadeValida /
                    totalValido
                ) * 100
            )
        )
    );
}


/* =========================================================
   RESUMO MENSAL
========================================================= */

export function calcularResumoFloracoes(
    orquideas,
    mesReferencia
) {
    const lista =
        Array.isArray(orquideas)
            ? orquideas.filter(Boolean)
            : [];

    const mesAtual =
        normalizarMes(mesReferencia);

    const proximoMes =
        obterMesSeguinte(
            mesAtual,
            1
        );

    const mesDoisMeses =
        obterMesSeguinte(
            mesAtual,
            2
        );

    const orquideasMesAtual =
        obterOrquideasDoMes(
            lista,
            mesAtual
        );

    const orquideasProximoMes =
        obterOrquideasDoMes(
            lista,
            proximoMes
        );

    const orquideasDoisMeses =
        obterOrquideasDoMes(
            lista,
            mesDoisMeses
        );

    const percentual =
        calcularPercentualFloracao(
            orquideasMesAtual.length,
            lista.length
        );

    return {
        mesAtual,
        proximoMes,
        mesDoisMeses,

        nomeMesAtual:
            nomesMeses[mesAtual - 1],

        nomeProximoMes:
            nomesMeses[proximoMes - 1],

        nomeMesDoisMeses:
            nomesMeses[mesDoisMeses - 1],

        totalColecao:
            lista.length,

        percentual,

        orquideasMesAtual,
        orquideasProximoMes,
        orquideasDoisMeses,

        quantidadeMesAtual:
            orquideasMesAtual.length,

        quantidadeProximoMes:
            orquideasProximoMes.length,

        quantidadeDoisMeses:
            orquideasDoisMeses.length
    };
}


/* =========================================================
   FORMATAÇÃO DA QUANTIDADE
========================================================= */

function criarTextoQuantidade(
    quantidade,
    nomeMes
) {
    if (quantidade === 0) {
        return `Nenhuma espécie prevista para florir em ${nomeMes}.`;
    }

    if (quantidade === 1) {
        return `1 espécie prevista para florir em ${nomeMes}.`;
    }

    return `${quantidade} espécies previstas para florir em ${nomeMes}.`;
}


/* =========================================================
   ESTADO VAZIO DA LISTA
========================================================= */

function criarMensagemSemFloracoes(
    nomeMes
) {
    return `
        <div class="mensagem-sem-floracoes">

            <span
                class="icone-sem-floracoes"
                aria-hidden="true"
            >
                🌿
            </span>

            <div>

                <strong>
                    Nenhuma floração cadastrada para
                    ${escaparHTML(nomeMes)}
                </strong>

                <p>
                    As espécies aparecerão aqui quando o mês
                    for incluído no campo
                    <code>mesesFloracao</code>.
                </p>

            </div>

        </div>
    `;
}


/* =========================================================
   ITEM DA LISTA
========================================================= */

function criarItemFloracao(orquidea) {
    const nome =
        orquidea?.nome ||
        "Orquídea sem identificação";

    const genero =
        orquidea?.genero ||
        "Gênero não informado";

    const dificuldade =
        orquidea?.dificuldade ||
        "Dificuldade não informada";

    const endereco =
        criarEnderecoFicha(orquidea);

    return `
        <a
            class="item-especie-floracao"
            href="${escaparHTML(endereco)}"
        >

            <span
                class="icone-item-floracao"
                aria-hidden="true"
            >
                🌸
            </span>

            <span class="conteudo-item-floracao">

                <strong>
                    <em>
                        ${escaparHTML(nome)}
                    </em>
                </strong>

                <small>
                    ${escaparHTML(genero)}
                    ·
                    ${escaparHTML(dificuldade)}
                </small>

            </span>

            <span
                class="seta-item-floracao"
                aria-hidden="true"
            >
                →
            </span>

        </a>
    `;
}


/* =========================================================
   LISTA DAS ESPÉCIES
========================================================= */

export function criarListaFloracoes(
    orquideas,
    nomeMes
) {
    if (
        !Array.isArray(orquideas) ||
        orquideas.length === 0
    ) {
        return criarMensagemSemFloracoes(
            nomeMes
        );
    }

    return orquideas
        .map(criarItemFloracao)
        .join("");
}


/* =========================================================
   ELEMENTOS DA PÁGINA
========================================================= */

export function obterElementosPainelFloracao() {
    return {
        painel:
            document.querySelector(
                ".painel-floracoes-mensal"
            ),

        titulo:
            document.getElementById(
                "titulo-floracoes-mes"
            ),

        dataAtual:
            document.getElementById(
                "data-atual-floracoes"
            ),

        seletorMes:
            document.getElementById(
                "mes-painel-floracoes"
            ),

        quantidadeMes:
            document.getElementById(
                "quantidade-floracoes-mes"
            ),

        textoQuantidade:
            document.getElementById(
                "texto-quantidade-floracoes"
            ),

        progresso:
            document.getElementById(
                "progresso-floracoes-mes"
            ),

        percentual:
            document.getElementById(
                "percentual-floracoes-mes"
            ),

        quantidadeAtual:
            document.getElementById(
                "quantidade-florindo-agora"
            ),

        quantidadeProximo:
            document.getElementById(
                "quantidade-proximo-mes"
            ),

        quantidadeDoisMeses:
            document.getElementById(
                "quantidade-dois-meses"
            ),

        tituloLista:
            document.getElementById(
                "titulo-lista-floracoes"
            ),

        descricaoLista:
            document.getElementById(
                "descricao-lista-floracoes"
            ),

        lista:
            document.getElementById(
                "lista-especies-floracoes"
            ),

        botaoFiltrar:
            document.getElementById(
                "filtrar-floracoes-do-mes"
            )
    };
}


/* =========================================================
   ATUALIZAÇÃO SEGURA DE TEXTO
========================================================= */

function definirTexto(
    elemento,
    texto
) {
    if (!elemento) {
        return;
    }

    elemento.textContent =
        String(texto ?? "");
}


/* =========================================================
   ATUALIZAÇÃO DA BARRA
========================================================= */

function atualizarBarraProgresso(
    elemento,
    percentual
) {
    if (!elemento) {
        return;
    }

    const valor =
        Math.min(
            100,
            Math.max(
                0,
                Number(percentual) || 0
            )
        );

    elemento.style.width =
        `${valor}%`;

    elemento.setAttribute(
        "aria-valuemin",
        "0"
    );

    elemento.setAttribute(
        "aria-valuemax",
        "100"
    );

    elemento.setAttribute(
        "aria-valuenow",
        String(valor)
    );

    elemento.setAttribute(
        "role",
        "progressbar"
    );
}


/* =========================================================
   ATUALIZAÇÃO DOS RÓTULOS DOS CARTÕES
========================================================= */

function atualizarRotulosDosResumos(
    elementos,
    resumo
) {
    const cartaoAtual =
        elementos.quantidadeAtual
            ?.closest(
                ".cartao-resumo-floracao"
            );

    const cartaoProximo =
        elementos.quantidadeProximo
            ?.closest(
                ".cartao-resumo-floracao"
            );

    const cartaoDoisMeses =
        elementos.quantidadeDoisMeses
            ?.closest(
                ".cartao-resumo-floracao"
            );

    const textoAtual =
        cartaoAtual?.querySelector(
            "span:last-child"
        );

    const textoProximo =
        cartaoProximo?.querySelector(
            "span:last-child"
        );

    const textoDoisMeses =
        cartaoDoisMeses?.querySelector(
            "span:last-child"
        );

    definirTexto(
        textoAtual,
        `Previstas para ${resumo.nomeMesAtual}`
    );

    definirTexto(
        textoProximo,
        `Previstas para ${resumo.nomeProximoMes}`
    );

    definirTexto(
        textoDoisMeses,
        `Previstas para ${resumo.nomeMesDoisMeses}`
    );
}


/* =========================================================
   CONTROLE DO BOTÃO DE FILTRO
========================================================= */

function atualizarEstadoBotao(
    botao,
    resumo,
    filtroAtivo
) {
    if (!botao) {
        return;
    }

    const possuiResultados =
        resumo.quantidadeMesAtual > 0;

    botao.disabled =
        !possuiResultados;

    botao.classList.toggle(
        CLASSE_BOTAO_ATIVO,
        Boolean(filtroAtivo)
    );

    botao.setAttribute(
        "aria-pressed",
        filtroAtivo
            ? "true"
            : "false"
    );

    if (!possuiResultados) {
        botao.textContent =
            "Nenhuma espécie neste mês";

        return;
    }

    botao.textContent =
        filtroAtivo
            ? "Exibir catálogo completo"
            : "Mostrar somente estas";
}


/* =========================================================
   RENDERIZAÇÃO DO PAINEL
========================================================= */

export function renderizarPainelFloracao(
    orquideas,
    mesReferencia,
    elementos = obterElementosPainelFloracao(),
    opcoes = {}
) {
    const resumo =
        calcularResumoFloracoes(
            orquideas,
            mesReferencia
        );

    const filtroAtivo =
        Boolean(opcoes.filtroAtivo);

    definirTexto(
        elementos.titulo,
        `Florações de ${resumo.nomeMesAtual}`
    );

    definirTexto(
        elementos.dataAtual,
        `Hoje é ${formatarDataCompleta(
            new Date()
        )}`
    );

    if (elementos.seletorMes) {
        elementos.seletorMes.value =
            String(resumo.mesAtual);
    }

    definirTexto(
        elementos.quantidadeMes,
        resumo.quantidadeMesAtual
    );

    definirTexto(
        elementos.textoQuantidade,
        criarTextoQuantidade(
            resumo.quantidadeMesAtual,
            resumo.nomeMesAtual
        )
    );

    atualizarBarraProgresso(
        elementos.progresso,
        resumo.percentual
    );

    definirTexto(
        elementos.percentual,
        resumo.totalColecao === 0
            ? "Coleção ainda sem espécies cadastradas"
            : `${resumo.percentual}% da coleção`
    );

    definirTexto(
        elementos.quantidadeAtual,
        resumo.quantidadeMesAtual
    );

    definirTexto(
        elementos.quantidadeProximo,
        resumo.quantidadeProximoMes
    );

    definirTexto(
        elementos.quantidadeDoisMeses,
        resumo.quantidadeDoisMeses
    );

    atualizarRotulosDosResumos(
        elementos,
        resumo
    );

    definirTexto(
        elementos.tituloLista,
        `Espécies previstas para ${resumo.nomeMesAtual}`
    );

    definirTexto(
        elementos.descricaoLista,
        resumo.quantidadeMesAtual === 0
            ? "Não há espécies cadastradas para este período."
            : "Selecione uma espécie para abrir a ficha completa."
    );

    if (elementos.lista) {
        elementos.lista.innerHTML =
            criarListaFloracoes(
                resumo.orquideasMesAtual,
                resumo.nomeMesAtual
            );
    }

    atualizarEstadoBotao(
        elementos.botaoFiltrar,
        resumo,
        filtroAtivo
    );

    if (elementos.painel) {
        elementos.painel.dataset.mesSelecionado =
            String(resumo.mesAtual);

        elementos.painel.dataset.quantidade =
            String(resumo.quantidadeMesAtual);
    }

    return resumo;
}


/* =========================================================
   DISPARO DO EVENTO DE FILTRAGEM
========================================================= */

function dispararEventoFiltragem(
    mes,
    orquideas,
    ativo
) {
    const ids =
        orquideas
            .map((orquidea) => {
                return String(
                    orquidea?.id || ""
                );
            })
            .filter(Boolean);

    document.dispatchEvent(
        new CustomEvent(
            EVENTO_FILTRAR_FLORACOES,
            {
                detail: {
                    mes:
                        normalizarMes(mes),

                    ativo:
                        Boolean(ativo),

                    ids
                }
            }
        )
    );
}


/* =========================================================
   CONTROLADOR DO PAINEL
========================================================= */

export function inicializarPainelFloracao(
    orquideas,
    opcoes = {}
) {
    const lista =
        Array.isArray(orquideas)
            ? orquideas.filter(Boolean)
            : [];

    const elementos =
        opcoes.elementos ||
        obterElementosPainelFloracao();

    let mesSelecionado =
        normalizarMes(
            opcoes.mesInicial ||
            new Date().getMonth() + 1
        );

    let filtroAtivo = false;

    let resumoAtual =
        renderizarPainelFloracao(
            lista,
            mesSelecionado,
            elementos,
            {
                filtroAtivo
            }
        );


    /* -----------------------------------------------------
       ALTERAÇÃO DO MÊS
    ------------------------------------------------------ */

    function alterarMes(evento) {
        mesSelecionado =
            normalizarMes(
                evento?.target?.value
            );

        filtroAtivo = false;

        resumoAtual =
            renderizarPainelFloracao(
                lista,
                mesSelecionado,
                elementos,
                {
                    filtroAtivo
                }
            );

        dispararEventoFiltragem(
            mesSelecionado,
            resumoAtual.orquideasMesAtual,
            false
        );

        if (
            typeof opcoes.aoAlterarMes ===
            "function"
        ) {
            opcoes.aoAlterarMes(
                resumoAtual
            );
        }
    }


    /* -----------------------------------------------------
       ATIVAÇÃO DO FILTRO
    ------------------------------------------------------ */

    function alternarFiltro() {
        if (
            resumoAtual.quantidadeMesAtual === 0
        ) {
            return;
        }

        filtroAtivo =
            !filtroAtivo;

        atualizarEstadoBotao(
            elementos.botaoFiltrar,
            resumoAtual,
            filtroAtivo
        );

        dispararEventoFiltragem(
            mesSelecionado,
            resumoAtual.orquideasMesAtual,
            filtroAtivo
        );

        if (
            typeof opcoes.aoFiltrar ===
            "function"
        ) {
            opcoes.aoFiltrar({
                ativo:
                    filtroAtivo,

                mes:
                    mesSelecionado,

                resumo:
                    resumoAtual,

                orquideas:
                    resumoAtual.orquideasMesAtual
            });
        }
    }


    /* -----------------------------------------------------
       EVENTOS
    ------------------------------------------------------ */

    elementos.seletorMes?.addEventListener(
        "change",
        alterarMes
    );

    elementos.botaoFiltrar?.addEventListener(
        "click",
        alternarFiltro
    );


    /* -----------------------------------------------------
       API DO CONTROLADOR
    ------------------------------------------------------ */

    return {
        obterMesSelecionado() {
            return mesSelecionado;
        },

        obterResumo() {
            return resumoAtual;
        },

        filtroEstaAtivo() {
            return filtroAtivo;
        },

        selecionarMes(novoMes) {
            mesSelecionado =
                normalizarMes(novoMes);

            filtroAtivo = false;

            resumoAtual =
                renderizarPainelFloracao(
                    lista,
                    mesSelecionado,
                    elementos,
                    {
                        filtroAtivo
                    }
                );

            dispararEventoFiltragem(
                mesSelecionado,
                resumoAtual.orquideasMesAtual,
                false
            );

            return resumoAtual;
        },

        desativarFiltro() {
            if (!filtroAtivo) {
                return;
            }

            filtroAtivo = false;

            atualizarEstadoBotao(
                elementos.botaoFiltrar,
                resumoAtual,
                false
            );

            dispararEventoFiltragem(
                mesSelecionado,
                resumoAtual.orquideasMesAtual,
                false
            );
        },

        atualizar(novasOrquideas) {
            const novaLista =
                Array.isArray(novasOrquideas)
                    ? novasOrquideas.filter(Boolean)
                    : [];

            lista.splice(
                0,
                lista.length,
                ...novaLista
            );

            filtroAtivo = false;

            resumoAtual =
                renderizarPainelFloracao(
                    lista,
                    mesSelecionado,
                    elementos,
                    {
                        filtroAtivo
                    }
                );

            return resumoAtual;
        },

        destruir() {
            elementos.seletorMes
                ?.removeEventListener(
                    "change",
                    alterarMes
                );

            elementos.botaoFiltrar
                ?.removeEventListener(
                    "click",
                    alternarFiltro
                );
        }
    };
}


/* =========================================================
   NOME DO EVENTO PARA OUTROS MÓDULOS
========================================================= */

export const NOME_EVENTO_FILTRAR_FLORACOES =
    EVENTO_FILTRAR_FLORACOES;
