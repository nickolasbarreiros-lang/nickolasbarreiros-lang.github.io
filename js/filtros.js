/* =========================================================
   IMPORTAÇÕES
========================================================= */

import {
    compararTextos,
    nomesMeses,
    normalizarMesesFloracao,
    normalizarTexto,
    obterTextoOpcaoSelecionada,
    obterValoresUnicos
} from "./util.js";

import {
    NOME_EVENTO_FILTRAR_FLORACOES
} from "./painel-floracao.js";


/* =========================================================
   CONFIGURAÇÕES
========================================================= */

const EVENTO_FILTROS_ALTERADOS =
    "catalogo:filtros-alterados";

const CAMPOS_PESQUISAVEIS = [
    "nome",
    "genero",
    "tipo",
    "descricao",
    "origem",
    "regiao",
    "habitat",
    "clima",
    "iluminacao",
    "floracao",
    "adubacao",
    "rega",
    "suporte",
    "substrato",
    "dica",
    "dificuldade"
];


/* =========================================================
   VALIDAÇÃO DA LISTA
========================================================= */

function obterListaValida(orquideas) {
    return Array.isArray(orquideas)
        ? orquideas.filter(Boolean)
        : [];
}


/* =========================================================
   ELEMENTOS DA PÁGINA
========================================================= */

export function obterElementosFiltros() {
    return {
        busca:
            document.getElementById(
                "busca"
            ),

        genero:
            document.getElementById(
                "filtro-genero"
            ),

        tipo:
            document.getElementById(
                "filtro-tipo"
            ),

        clima:
            document.getElementById(
                "filtro-clima"
            ),

        luz:
            document.getElementById(
                "filtro-luz"
            ),

        dificuldade:
            document.getElementById(
                "filtro-dificuldade"
            ),

        floracao:
            document.getElementById(
                "filtro-floracao"
            ),

        limpar:
            document.getElementById(
                "limpar-filtros"
            ),

        filtrosAtivos:
            document.getElementById(
                "filtros-ativos"
            )
    };
}


/* =========================================================
   CRIAÇÃO DE OPÇÕES
========================================================= */

function criarOpcao(
    valor,
    texto
) {
    const opcao =
        document.createElement("option");

    opcao.value =
        String(valor ?? "");

    opcao.textContent =
        String(texto ?? "");

    return opcao;
}


/* =========================================================
   PREENCHIMENTO SEGURO DE SELECT
========================================================= */

function preencherSelect(
    select,
    valores,
    textoPadrao
) {
    if (!select) {
        return;
    }

    const valorAtual =
        select.value;

    select.innerHTML = "";

    select.appendChild(
        criarOpcao(
            "",
            textoPadrao
        )
    );

    valores.forEach((valor) => {
        select.appendChild(
            criarOpcao(
                valor,
                valor
            )
        );
    });

    const possuiValorAtual =
        [...select.options].some((opcao) => {
            return opcao.value === valorAtual;
        });

    select.value =
        possuiValorAtual
            ? valorAtual
            : "";
}


/* =========================================================
   PREENCHIMENTO DOS FILTROS AUTOMÁTICOS
========================================================= */

export function preencherFiltrosAutomaticos(
    orquideas,
    elementos = obterElementosFiltros()
) {
    const lista =
        obterListaValida(orquideas);

    const generos =
        obterValoresUnicos(
            lista,
            "genero"
        );

    const climas =
        obterValoresUnicos(
            lista,
            "clima"
        );

    const iluminacoes =
        obterValoresUnicos(
            lista,
            "iluminacao"
        );

    preencherSelect(
        elementos.genero,
        generos,
        "Todos os gêneros"
    );

    preencherSelect(
        elementos.clima,
        climas,
        "Todos os climas"
    );

    preencherSelect(
        elementos.luz,
        iluminacoes,
        "Todas as iluminações"
    );

    return {
        generos,
        climas,
        iluminacoes
    };
}


/* =========================================================
   OBTENÇÃO DOS FILTROS ATUAIS
========================================================= */

export function obterEstadoFiltros(
    elementos = obterElementosFiltros()
) {
    return {
        busca:
            String(
                elementos.busca?.value || ""
            ).trim(),

        genero:
            String(
                elementos.genero?.value || ""
            ).trim(),

        tipo:
            String(
                elementos.tipo?.value || ""
            ).trim(),

        clima:
            String(
                elementos.clima?.value || ""
            ).trim(),

        luz:
            String(
                elementos.luz?.value || ""
            ).trim(),

        dificuldade:
            String(
                elementos.dificuldade?.value || ""
            ).trim(),

        floracao:
            String(
                elementos.floracao?.value || ""
            ).trim()
    };
}


/* =========================================================
   TEXTO PESQUISÁVEL DA ORQUÍDEA
========================================================= */

export function criarTextoPesquisavel(
    orquidea
) {
    const partes = [];

    CAMPOS_PESQUISAVEIS.forEach(
        (campo) => {
            const valor =
                orquidea?.[campo];

            if (
                typeof valor === "string" &&
                valor.trim() !== ""
            ) {
                partes.push(valor);
            }
        }
    );

    if (
        Array.isArray(
            orquidea?.caracteristicas
        )
    ) {
        partes.push(
            ...orquidea.caracteristicas
        );
    }

    if (
        Array.isArray(
            orquidea?.mesesFloracao
        )
    ) {
        orquidea.mesesFloracao
            .map(Number)
            .filter((mes) => {
                return (
                    Number.isInteger(mes) &&
                    mes >= 1 &&
                    mes <= 12
                );
            })
            .forEach((mes) => {
                partes.push(
                    nomesMeses[mes - 1]
                );
            });
    }

    return normalizarTexto(
        partes.join(" ")
    );
}


/* =========================================================
   PESQUISA POR TEXTO
========================================================= */

function correspondeBusca(
    orquidea,
    termo
) {
    const busca =
        normalizarTexto(termo);

    if (!busca) {
        return true;
    }

    const palavras =
        busca
            .split(/\s+/)
            .filter(Boolean);

    const texto =
        criarTextoPesquisavel(orquidea);

    return palavras.every((palavra) => {
        return texto.includes(palavra);
    });
}


/* =========================================================
   COMPARAÇÃO DE CAMPO
========================================================= */

function correspondeCampo(
    valorOrquidea,
    valorFiltro
) {
    const filtro =
        normalizarTexto(valorFiltro);

    if (!filtro) {
        return true;
    }

    const valor =
        normalizarTexto(valorOrquidea);

    return valor === filtro;
}


/* =========================================================
   FILTRO DE MÊS
========================================================= */

function correspondeMesFloracao(
    orquidea,
    valorFiltro
) {
    if (!valorFiltro) {
        return true;
    }

    const mes =
        Number(valorFiltro);

    if (
        !Number.isInteger(mes) ||
        mes < 1 ||
        mes > 12
    ) {
        return true;
    }

    const meses =
        normalizarMesesFloracao(
            orquidea
        );

    return meses.includes(mes);
}


/* =========================================================
   FILTRO POR IDS DO PAINEL
========================================================= */

function correspondeFiltroPainel(
    orquidea,
    idsPainel,
    filtroPainelAtivo
) {
    if (!filtroPainelAtivo) {
        return true;
    }

    if (!(idsPainel instanceof Set)) {
        return true;
    }

    const id =
        String(
            orquidea?.id || ""
        );

    return idsPainel.has(id);
}


/* =========================================================
   FILTRO POR ORIGEM GEOGRÁFICA
========================================================= */

function ehOrquideaBrasileira(orquidea) {
    const textoOrigem = normalizarTexto([
        orquidea?.origem,
        orquidea?.regiao,
        orquidea?.descricao
    ].filter(Boolean).join(" "));

    return (
        textoOrigem.includes("brasil") ||
        textoOrigem.includes("brasileir")
    );
}

function correspondeOrigemGeografica(orquidea, categoria) {
    if (!categoria) {
        return true;
    }

    const brasileira = ehOrquideaBrasileira(orquidea);

    if (categoria === "brasileira") {
        return brasileira;
    }

    if (categoria === "estrangeira") {
        return !brasileira;
    }

    return true;
}

/* =========================================================
   APLICAÇÃO DOS FILTROS
========================================================= */

export function filtrarOrquideas(
    orquideas,
    filtros = {},
    opcoes = {}
) {
    const lista =
        obterListaValida(orquideas);

    const idsPainel =
        opcoes.idsPainel instanceof Set
            ? opcoes.idsPainel
            : new Set(
                Array.isArray(opcoes.idsPainel)
                    ? opcoes.idsPainel.map(String)
                    : []
            );

    const filtroPainelAtivo =
        Boolean(
            opcoes.filtroPainelAtivo
        );

    return lista.filter((orquidea) => {
        return (
            correspondeBusca(
                orquidea,
                filtros.busca
            ) &&

            correspondeCampo(
                orquidea?.genero,
                filtros.genero
            ) &&

            correspondeCampo(
                orquidea?.tipo,
                filtros.tipo
            ) &&

            correspondeCampo(
                orquidea?.clima,
                filtros.clima
            ) &&

            correspondeCampo(
                orquidea?.iluminacao,
                filtros.luz
            ) &&

            correspondeCampo(
                orquidea?.dificuldade,
                filtros.dificuldade
            ) &&

            correspondeMesFloracao(
                orquidea,
                filtros.floracao
            ) &&

            correspondeFiltroPainel(
                orquidea,
                idsPainel,
                filtroPainelAtivo
            ) &&

            correspondeOrigemGeografica(
                orquidea,
                opcoes.filtroOrigem
            )
        );
    });
}


/* =========================================================
   VERIFICAÇÃO DE FILTROS ATIVOS
========================================================= */

export function existemFiltrosAtivos(
    filtros = {},
    filtroPainelAtivo = false
) {
    return Boolean(
        filtros.busca ||
        filtros.genero ||
        filtros.tipo ||
        filtros.clima ||
        filtros.luz ||
        filtros.dificuldade ||
        filtros.floracao ||
        filtroPainelAtivo
    );
}


/* =========================================================
   DESCRIÇÃO DOS FILTROS ATIVOS
========================================================= */

function criarDescricaoFiltro(
    rotulo,
    valor
) {
    return `${rotulo}: ${valor}`;
}


/* =========================================================
   LISTA DOS FILTROS ATIVOS
========================================================= */

export function listarFiltrosAtivos(
    filtros,
    elementos = obterElementosFiltros(),
    opcoes = {}
) {
    const ativos = [];

    if (filtros.busca) {
        ativos.push(
            criarDescricaoFiltro(
                "Pesquisa",
                `"${filtros.busca}"`
            )
        );
    }

    if (filtros.genero) {
        ativos.push(
            criarDescricaoFiltro(
                "Gênero",
                obterTextoOpcaoSelecionada(
                    elementos.genero
                )
            )
        );
    }

    if (filtros.tipo) {
        ativos.push(
            criarDescricaoFiltro(
                "Classificação",
                obterTextoOpcaoSelecionada(
                    elementos.tipo
                )
            )
        );
    }

    if (filtros.clima) {
        ativos.push(
            criarDescricaoFiltro(
                "Clima",
                obterTextoOpcaoSelecionada(
                    elementos.clima
                )
            )
        );
    }

    if (filtros.luz) {
        ativos.push(
            criarDescricaoFiltro(
                "Iluminação",
                obterTextoOpcaoSelecionada(
                    elementos.luz
                )
            )
        );
    }

    if (filtros.dificuldade) {
        ativos.push(
            criarDescricaoFiltro(
                "Dificuldade",
                obterTextoOpcaoSelecionada(
                    elementos.dificuldade
                )
            )
        );
    }

    if (filtros.floracao) {
        ativos.push(
            criarDescricaoFiltro(
                "Floração",
                obterTextoOpcaoSelecionada(
                    elementos.floracao
                )
            )
        );
    }

    if (opcoes.filtroPainelAtivo) {
        const mes =
            Number(
                opcoes.mesPainel
            );

        const nomeMes =
            Number.isInteger(mes) &&
            mes >= 1 &&
            mes <= 12
                ? nomesMeses[mes - 1]
                : "mês selecionado";

        ativos.push(
            criarDescricaoFiltro(
                "Painel mensal",
                nomeMes
            )
        );
    }

    return ativos;
}


/* =========================================================
   RENDERIZAÇÃO DOS FILTROS ATIVOS
========================================================= */

export function renderizarFiltrosAtivos(
    filtros,
    elementos = obterElementosFiltros(),
    opcoes = {}
) {
    const elemento =
        elementos.filtrosAtivos;

    if (!elemento) {
        return [];
    }

    const ativos =
        listarFiltrosAtivos(
            filtros,
            elementos,
            opcoes
        );

    if (ativos.length === 0) {
        elemento.textContent = "";
        elemento.hidden = true;

        return ativos;
    }

    elemento.textContent =
        `Filtros ativos: ${ativos.join(" • ")}`;

    elemento.hidden = false;

    return ativos;
}


/* =========================================================
   LIMPEZA DOS CAMPOS
========================================================= */

export function limparCamposFiltros(
    elementos = obterElementosFiltros()
) {
    if (elementos.busca) {
        elementos.busca.value = "";
    }

    if (elementos.genero) {
        elementos.genero.value = "";
    }

    if (elementos.tipo) {
        elementos.tipo.value = "";
    }

    if (elementos.clima) {
        elementos.clima.value = "";
    }

    if (elementos.luz) {
        elementos.luz.value = "";
    }

    if (elementos.dificuldade) {
        elementos.dificuldade.value = "";
    }

    if (elementos.floracao) {
        elementos.floracao.value = "";
    }
}


/* =========================================================
   DISPARO DO EVENTO DE ALTERAÇÃO
========================================================= */

function dispararEventoFiltros(
    resultado
) {
    document.dispatchEvent(
        new CustomEvent(
            EVENTO_FILTROS_ALTERADOS,
            {
                detail: resultado
            }
        )
    );
}


/* =========================================================
   CONTROLADOR DOS FILTROS
========================================================= */

export function inicializarFiltros(
    orquideas,
    opcoes = {}
) {
    const lista =
        obterListaValida(orquideas);

    const elementos =
        opcoes.elementos ||
        obterElementosFiltros();

    let filtroPainelAtivo = false;

    let mesPainel = null;

    let idsPainel = new Set();

    let filtroOrigem = "";

    let resultadoAtual = [...lista];


    /* -----------------------------------------------------
       PREENCHIMENTO INICIAL
    ------------------------------------------------------ */

    preencherFiltrosAutomaticos(
        lista,
        elementos
    );


    /* -----------------------------------------------------
       PROCESSAMENTO
    ------------------------------------------------------ */

    function processarFiltros(
        origem = "campos"
    ) {
        const filtros =
            obterEstadoFiltros(
                elementos
            );

        resultadoAtual =
            filtrarOrquideas(
                lista,
                filtros,
                {
                    filtroPainelAtivo,
                    idsPainel,
                    filtroOrigem
                }
            );

        renderizarFiltrosAtivos(
            filtros,
            elementos,
            {
                filtroPainelAtivo,
                mesPainel
            }
        );

        const resultado = {
            origem,

            filtros,

            orquideas:
                [...resultadoAtual],

            quantidade:
                resultadoAtual.length,

            total:
                lista.length,

            filtroPainelAtivo,

            filtroOrigem,

            mesPainel,

            idsPainel:
                [...idsPainel]
        };

        dispararEventoFiltros(
            resultado
        );

        if (
            typeof opcoes.aoFiltrar ===
            "function"
        ) {
            opcoes.aoFiltrar(
                resultado
            );
        }

        return resultado;
    }


    /* -----------------------------------------------------
       ALTERAÇÃO DOS CAMPOS
    ------------------------------------------------------ */

    function aoAlterarCampo() {
        processarFiltros(
            "campos"
        );
    }


    /* -----------------------------------------------------
       LIMPEZA DOS FILTROS
    ------------------------------------------------------ */

    function limparFiltros() {
        limparCamposFiltros(
            elementos
        );

        filtroPainelAtivo = false;
        mesPainel = null;
        idsPainel = new Set();
        filtroOrigem = "";

        const resultado =
            processarFiltros(
                "limpeza"
            );

        document.dispatchEvent(
            new CustomEvent(
                "catalogo:limpar-painel-floracao"
            )
        );

        elementos.busca?.focus();

        if (
            typeof opcoes.aoLimpar ===
            "function"
        ) {
            opcoes.aoLimpar(
                resultado
            );
        }
    }


    /* -----------------------------------------------------
       EVENTO DO PAINEL MENSAL
    ------------------------------------------------------ */

    function aoReceberFiltroPainel(
        evento
    ) {
        const detalhe =
            evento?.detail || {};

        filtroPainelAtivo =
            Boolean(
                detalhe.ativo
            );

        mesPainel =
            Number(detalhe.mes) || null;

        idsPainel =
            new Set(
                Array.isArray(detalhe.ids)
                    ? detalhe.ids.map(String)
                    : []
            );

        processarFiltros(
            "painel-floracao"
        );
    }


    /* -----------------------------------------------------
       FILTRO RÁPIDO: BRASILEIRAS / ESTRANGEIRAS
    ------------------------------------------------------ */

    function aoReceberFiltroOrigem(evento) {
        const categoria = String(evento?.detail?.categoria || "").trim();

        limparCamposFiltros(elementos);
        filtroPainelAtivo = false;
        mesPainel = null;
        idsPainel = new Set();
        filtroOrigem = ["brasileira", "estrangeira"].includes(categoria)
            ? categoria
            : "";

        processarFiltros("atalho-origem");
    }


    /* -----------------------------------------------------
       EVENTOS DOS CAMPOS
    ------------------------------------------------------ */

    elementos.busca?.addEventListener(
        "input",
        aoAlterarCampo
    );

    elementos.genero?.addEventListener(
        "change",
        aoAlterarCampo
    );

    elementos.tipo?.addEventListener(
        "change",
        aoAlterarCampo
    );

    elementos.clima?.addEventListener(
        "change",
        aoAlterarCampo
    );

    elementos.luz?.addEventListener(
        "change",
        aoAlterarCampo
    );

    elementos.dificuldade?.addEventListener(
        "change",
        aoAlterarCampo
    );

    elementos.floracao?.addEventListener(
        "change",
        aoAlterarCampo
    );

    elementos.limpar?.addEventListener(
        "click",
        limparFiltros
    );

    document.addEventListener(
        NOME_EVENTO_FILTRAR_FLORACOES,
        aoReceberFiltroPainel
    );


    document.addEventListener(
        "catalogo:filtrar-origem",
        aoReceberFiltroOrigem
    );


    /* -----------------------------------------------------
       ESTADO INICIAL
    ------------------------------------------------------ */

    processarFiltros(
        "inicializacao"
    );


    /* -----------------------------------------------------
       API DO CONTROLADOR
    ------------------------------------------------------ */

    return {
        processar() {
            return processarFiltros(
                "manual"
            );
        },

        limpar() {
            limparFiltros();
        },

        obterResultado() {
            return [...resultadoAtual];
        },

        obterFiltros() {
            return obterEstadoFiltros(
                elementos
            );
        },

        filtroDoPainelEstaAtivo() {
            return filtroPainelAtivo;
        },

        obterMesPainel() {
            return mesPainel;
        },

        definirFiltroPainel(
            ativo,
            mes,
            ids = []
        ) {
            filtroPainelAtivo =
                Boolean(ativo);

            mesPainel =
                Number(mes) || null;

            idsPainel =
                new Set(
                    Array.isArray(ids)
                        ? ids.map(String)
                        : []
                );

            return processarFiltros(
                "painel-manual"
            );
        },

        atualizarOrquideas(
            novasOrquideas
        ) {
            const novaLista =
                obterListaValida(
                    novasOrquideas
                );

            lista.splice(
                0,
                lista.length,
                ...novaLista
            );

            preencherFiltrosAutomaticos(
                lista,
                elementos
            );

            return processarFiltros(
                "atualizacao-dados"
            );
        },

        destruir() {
            elementos.busca
                ?.removeEventListener(
                    "input",
                    aoAlterarCampo
                );

            elementos.genero
                ?.removeEventListener(
                    "change",
                    aoAlterarCampo
                );

            elementos.tipo
                ?.removeEventListener(
                    "change",
                    aoAlterarCampo
                );

            elementos.clima
                ?.removeEventListener(
                    "change",
                    aoAlterarCampo
                );

            elementos.luz
                ?.removeEventListener(
                    "change",
                    aoAlterarCampo
                );

            elementos.dificuldade
                ?.removeEventListener(
                    "change",
                    aoAlterarCampo
                );

            elementos.floracao
                ?.removeEventListener(
                    "change",
                    aoAlterarCampo
                );

            elementos.limpar
                ?.removeEventListener(
                    "click",
                    limparFiltros
                );

            document.removeEventListener(
                NOME_EVENTO_FILTRAR_FLORACOES,
                aoReceberFiltroPainel
            );


            document.removeEventListener(
                "catalogo:filtrar-origem",
                aoReceberFiltroOrigem
            );
        }
    };
}


/* =========================================================
   ORDENAÇÃO AUXILIAR DOS RESULTADOS
========================================================= */

export function ordenarResultadosPorNome(
    orquideas
) {
    return obterListaValida(orquideas)
        .sort((a, b) => {
            return compararTextos(
                a?.nome,
                b?.nome
            );
        });
}


/* =========================================================
   NOME DO EVENTO PARA OUTROS MÓDULOS
========================================================= */

export const NOME_EVENTO_FILTROS_ALTERADOS =
    EVENTO_FILTROS_ALTERADOS;
