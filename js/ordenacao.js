import { obterNotaRaridadeCalculada } from "./raridade.js";
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
        obterNotaRaridadeCalculada(a);

    const notaB =
        obterNotaRaridadeCalculada(b);

    if (notaA !== notaB) {
        return notaB - notaA;
    }

    return compararNomeAZ(a, b);
}

function compararRaridadeMenor(a, b) {

    const notaA =
        obterNotaRaridadeCalculada(a);

    const notaB =
        obterNotaRaridadeCalculada(b);

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

function obterNotaAvaliacao(orquidea, campo) {
    const valor = Number(orquidea?.avaliacoes?.[campo]);
    return Number.isFinite(valor) ? valor : 0;
}

function compararAvaliacao(campo, direcao = "menor") {
    return (a, b) => {
        const notaA = obterNotaAvaliacao(a, campo);
        const notaB = obterNotaAvaliacao(b, campo);
        if (notaA !== notaB) {
            return direcao === "maior" ? notaB - notaA : notaA - notaB;
        }
        return compararNomeAZ(a, b);
    };
}

/* =========================================================
   TABELA DE ORDENAÇÕES
========================================================= */

const ORDENACOES = {
    "nome-az": compararNomeAZ,
    "nome-za": compararNomeZA,

    "raridade-maior": compararRaridadeMaior,
    "raridade-menor": compararRaridadeMenor,

    // Mantidos por compatibilidade com versões anteriores.
    "cultivo-facil": compararCultivoFacil,
    "cultivo-dificil": compararCultivoDificil,

    // Avaliações da ficha (1 a 5 estrelas).
    "cultivo-maior": compararAvaliacao("cultivo", "maior"),
    "cultivo-menor": compararAvaliacao("cultivo", "menor"),
    "luminosidade-maior": compararAvaliacao("luminosidade", "maior"),
    "luminosidade-menor": compararAvaliacao("luminosidade", "menor"),
    "agua-maior": compararAvaliacao("agua", "maior"),
    "agua-menor": compararAvaliacao("agua", "menor"),
    "floracao-maior": compararAvaliacao("floracao", "maior"),
    "floracao-menor": compararAvaliacao("floracao", "menor"),
    "perfume-maior": compararAvaliacao("perfume", "maior"),
    "perfume-menor": compararAvaliacao("perfume", "menor")
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
