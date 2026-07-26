/* =========================================================
   IMPORTAÇÕES
========================================================= */

import {
    compararTextos,
    obterNivelDificuldade
} from "./util.js";

/* =========================================================
   COMPARADORES
========================================================= */

function compararNomeAZ(a, b) {
    return compararTextos(a.nome, b.nome);
}

function compararNomeZA(a, b) {
    return compararNomeAZ(b, a);
}

function compararRaridadeMaior(a, b) {

    const notaA =
        Number(a?.avaliacoes?.raridade || 0);

    const notaB =
        Number(b?.avaliacoes?.raridade || 0);

    if (notaA !== notaB) {
        return notaB - notaA;
    }

    return compararNomeAZ(a, b);
}

function compararRaridadeMenor(a, b) {

    const notaA =
        Number(a?.avaliacoes?.raridade || 0);

    const notaB =
        Number(b?.avaliacoes?.raridade || 0);

    if (notaA !== notaB) {
        return notaA - notaB;
    }

    return compararNomeAZ(a, b);
}

function compararCultivoFacil(a, b) {

    const nivelA =
        obterNivelDificuldade(a.dificuldade);

    const nivelB =
        obterNivelDificuldade(b.dificuldade);

    if (nivelA !== nivelB) {
        return nivelA - nivelB;
    }

    return compararNomeAZ(a, b);
}

function compararCultivoDificil(a, b) {

    const nivelA =
        obterNivelDificuldade(a.dificuldade);

    const nivelB =
        obterNivelDificuldade(b.dificuldade);

    if (nivelA !== nivelB) {
        return nivelB - nivelA;
    }

    return compararNomeAZ(a, b);
}

/* =========================================================
   TABELA DE ORDENAÇÕES
========================================================= */

const ORDENACOES = {

    "nome-az": compararNomeAZ,

    "nome-za": compararNomeZA,

    "raridade-maior": compararRaridadeMaior,

    "raridade-menor": compararRaridadeMenor,

    "cultivo-facil": compararCultivoFacil,

    "cultivo-dificil": compararCultivoDificil
};

/* =========================================================
   ORDENAÇÃO PRINCIPAL
========================================================= */

export function ordenarOrquideas(
    lista,
    criterio = "nome-az"
) {

    const copia = Array.isArray(lista)
        ? [...lista]
        : [];

    const comparador =
        ORDENACOES[criterio] ||
        compararNomeAZ;

    copia.sort(comparador);

    return copia;
}

/* =========================================================
   LISTA DE CRITÉRIOS
========================================================= */

export function listarOrdenacoesDisponiveis() {

    return Object.keys(ORDENACOES);

}

/* =========================================================
   VALIDAÇÃO
========================================================= */

export function criterioValido(criterio) {

    return criterio in ORDENACOES;

}
