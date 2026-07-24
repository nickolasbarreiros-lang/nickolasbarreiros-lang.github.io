/* =========================================================
   IMPORTAÇÕES
========================================================= */

import {
    normalizarTexto
} from "./util.js";

/* =========================================================
   CONFIGURAÇÃO
========================================================= */

const NOTA_MINIMA_RARIDADE = 4;

/* =========================================================
   VALIDAÇÃO DA LISTA
========================================================= */

function obterListaValida(orquideas) {
    return Array.isArray(orquideas)
        ? orquideas.filter(Boolean)
        : [];
}

/* =========================================================
   TOTAL DE ORQUÍDEAS
========================================================= */

export function contarOrquideas(orquideas) {
    return obterListaValida(orquideas).length;
}

/* =========================================================
   TOTAL DE GÊNEROS
========================================================= */

export function contarGeneros(orquideas) {
    const lista =
        obterListaValida(orquideas);

    const generos = new Set();

    lista.forEach((orquidea) => {
        const genero =
            normalizarTexto(orquidea?.genero);

        if (genero) {
            generos.add(genero);
        }
    });

    return generos.size;
}

/* =========================================================
   TOTAL DE ORIGENS
========================================================= */

export function contarOrigens(orquideas) {
    const lista =
        obterListaValida(orquideas);

    const origens = new Set();

    lista.forEach((orquidea) => {
        const origem =
            normalizarTexto(orquidea?.origem);

        if (origem) {
            origens.add(origem);
        }
    });

    return origens.size;
}

/* =========================================================
   VERIFICAÇÃO DE RARIDADE
========================================================= */

export function verificarSeOrquideaRara(orquidea) {
    const nota =
        Number(
            orquidea?.avaliacoes?.raridade
        );

    return (
        Number.isFinite(nota) &&
        nota >= NOTA_MINIMA_RARIDADE
    );
}

/* =========================================================
   TOTAL DE ORQUÍDEAS RARAS
========================================================= */

export function contarOrquideasRaras(orquideas) {
    return obterListaValida(orquideas)
        .filter(verificarSeOrquideaRara)
        .length;
}

/* =========================================================
   CÁLCULO COMPLETO DAS ESTATÍSTICAS
========================================================= */

export function calcularEstatisticas(orquideas) {
    const lista =
        obterListaValida(orquideas);

    return {
        totalOrquideas:
            contarOrquideas(lista),

        totalGeneros:
            contarGeneros(lista),

        totalOrigens:
            lista.filter((orquidea) => {
                const texto = normalizarTexto([
                    orquidea?.origem,
                    orquidea?.regiao,
                    ...(Array.isArray(orquidea?.caracteristicas) ? orquidea.caracteristicas : [])
                ].join(" "));
                return texto.includes("brasil") || texto.includes("brasileir");
            }).length,

        totalRaras:
            lista.filter((orquidea) => {
                const texto = normalizarTexto([
                    orquidea?.origem,
                    orquidea?.regiao,
                    ...(Array.isArray(orquidea?.caracteristicas) ? orquidea.caracteristicas : [])
                ].join(" "));
                return !(texto.includes("brasil") || texto.includes("brasileir"));
            }).length
    };
}

/* =========================================================
   FORMATAÇÃO DE NÚMEROS
========================================================= */

function formatarNumero(valor) {
    return new Intl.NumberFormat(
        "pt-BR"
    ).format(
        Number(valor) || 0
    );
}

/* =========================================================
   ATUALIZAÇÃO SEGURA DE ELEMENTOS
========================================================= */

function atualizarTextoElemento(
    elemento,
    valor
) {
    if (!elemento) {
        return;
    }

    elemento.textContent =
        formatarNumero(valor);
}

/* =========================================================
   RENDERIZAÇÃO DAS ESTATÍSTICAS
========================================================= */

export function renderizarEstatisticas(
    orquideas,
    elementos = {}
) {
    const estatisticas =
        calcularEstatisticas(orquideas);

    atualizarTextoElemento(
        elementos.totalOrquideas,
        estatisticas.totalOrquideas
    );

    atualizarTextoElemento(
        elementos.totalGeneros,
        estatisticas.totalGeneros
    );

    atualizarTextoElemento(
        elementos.totalOrigens,
        estatisticas.totalOrigens
    );

    atualizarTextoElemento(
        elementos.totalRaras,
        estatisticas.totalRaras
    );

    return estatisticas;
}

/* =========================================================
   RENDERIZAÇÃO AUTOMÁTICA PELOS IDs DA PÁGINA
========================================================= */

export function renderizarEstatisticasDaPagina(
    orquideas
) {
    return renderizarEstatisticas(
        orquideas,
        {
            totalOrquideas:
                document.getElementById(
                    "total-orquideas"
                ),

            totalGeneros:
                document.getElementById(
                    "total-generos"
                ),

            totalOrigens:
                document.getElementById(
                    "total-origens"
                ),

            totalRaras:
                document.getElementById(
                    "total-raras"
                )
        }
    );
}
