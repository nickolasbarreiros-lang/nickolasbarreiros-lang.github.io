/* =========================================================
   ÍNDICE DE RARIDADE — ORQUIDÁRIO DIGITAL
   Versão 1.0 — 2026-08-14

   O índice varia de 0 a 100 e NÃO é probabilidade oficial
   de extinção. É um índice editorial probabilístico de raridade
   botânica, inspirado em variáveis usadas por IUCN/CNCFlora,
   POWO e dados de ocorrência.

   Cada fator deve ser informado na escala 0–100:
   0   = sem evidência de raridade nesse fator
   100 = raridade/risco máximo nesse fator

   Pesos:
   25% restrição geográfica (EOO/AOO/distribuição)
   15% escassez de ocorrências confiáveis
   15% endemismo + especialização de habitat
   20% estado de conservação oficial
   15% tendência populacional + fragmentação
   10% ameaças documentadas / pressão de coleta

   Há um bônus de sinergia de até 12 pontos quando diferentes
   sinais de raridade convergem. Isso evita que uma única
   característica isolada produza automaticamente 5 estrelas.
========================================================= */

export const PESOS_RARIDADE = Object.freeze({
    distribuicao: 0.25,
    ocorrencias: 0.15,
    endemismoHabitat: 0.15,
    conservacao: 0.20,
    populacaoFragmentacao: 0.15,
    ameacas: 0.10
});

function limitar100(valor) {
    const numero = Number(valor);
    if (!Number.isFinite(numero)) return null;
    return Math.max(0, Math.min(100, numero));
}

export function pontuarStatusConservacao(status) {
    const mapa = {
        EX: 100,
        EW: 100,
        CR: 100,
        EN: 85,
        VU: 65,
        NT: 40,
        LC: 10,
        DD: null,
        NE: null
    };
    return Object.prototype.hasOwnProperty.call(mapa, status) ? mapa[status] : null;
}

export function pontuarEOO(eooKm2) {
    const v = Number(eooKm2);
    if (!Number.isFinite(v) || v < 0) return null;
    if (v <= 100) return 100;
    if (v <= 5_000) return 85;
    if (v <= 20_000) return 70;
    if (v <= 100_000) return 50;
    if (v <= 500_000) return 30;
    return 10;
}

export function pontuarAOO(aooKm2) {
    const v = Number(aooKm2);
    if (!Number.isFinite(v) || v < 0) return null;
    if (v <= 10) return 100;
    if (v <= 500) return 85;
    if (v <= 2_000) return 70;
    if (v <= 10_000) return 50;
    if (v <= 50_000) return 30;
    return 10;
}

export function pontuarOcorrencias(qtd) {
    const v = Number(qtd);
    if (!Number.isFinite(v) || v < 0) return null;
    if (v <= 10) return 100;
    if (v <= 25) return 85;
    if (v <= 75) return 65;
    if (v <= 200) return 45;
    if (v <= 500) return 25;
    return 10;
}

export function calcularFatorDistribuicao(meta = {}) {
    const eoo = pontuarEOO(meta.eooKm2);
    const aoo = pontuarAOO(meta.aooKm2);

    if (eoo !== null && aoo !== null) return Math.round(eoo * 0.60 + aoo * 0.40);
    if (eoo !== null) return eoo;
    if (aoo !== null) return aoo;

    return limitar100(meta.distribuicao);
}

export function calcularIndiceRaridade(meta = {}) {
    const fatores = {
        distribuicao: calcularFatorDistribuicao(meta),
        ocorrencias:
            meta.ocorrenciasConfiaveis !== undefined
                ? pontuarOcorrencias(meta.ocorrenciasConfiaveis)
                : limitar100(meta.ocorrencias),
        endemismoHabitat: limitar100(meta.endemismoHabitat),
        conservacao:
            meta.statusConservacao
                ? pontuarStatusConservacao(meta.statusConservacao)
                : limitar100(meta.conservacao),
        populacaoFragmentacao: limitar100(meta.populacaoFragmentacao),
        ameacas: limitar100(meta.ameacas)
    };

    let somaPesos = 0;
    let base = 0;

    for (const [chave, peso] of Object.entries(PESOS_RARIDADE)) {
        const valor = fatores[chave];
        if (valor === null) continue;
        somaPesos += peso;
        base += (valor / 100) * peso;
    }

    if (somaPesos < 0.55) {
        return {
            indice: null,
            estrelas: null,
            confianca: Math.round(somaPesos * 100),
            fatores,
            motivo: "Dados insuficientes para cálculo confiável"
        };
    }

    // Renormaliza somente os fatores disponíveis.
    base = base / somaPesos;

    // Sinergia: combina restrição + endemismo + conservação/população.
    const g = (fatores.distribuicao ?? 0) / 100;
    const e = (fatores.endemismoHabitat ?? 0) / 100;
    const c = (fatores.conservacao ?? 0) / 100;
    const p = (fatores.populacaoFragmentacao ?? 0) / 100;
    const o = (fatores.ocorrencias ?? 0) / 100;

    const sinergia = ((g * e) + (g * o) + (c * p)) / 3;
    const final = Math.min(1, base + 0.12 * sinergia * (1 - base));
    const indice = Math.round(final * 100);

    return {
        indice,
        estrelas: converterIndiceEmEstrelas(indice),
        confianca: Math.round(somaPesos * 100),
        fatores
    };
}

export function converterIndiceEmEstrelas(indice) {
    const v = Number(indice);
    if (!Number.isFinite(v)) return null;

    if (v >= 80) return 5; // Rara
    if (v >= 60) return 4; // Incomum
    if (v >= 40) return 3; // Pouco comum
    if (v >= 20) return 2; // Comum
    return 1;              // Muito comum
}

export function obterNotaRaridadeCalculada(orquidea) {
    const meta = orquidea?.raridadeIndice;
    if (meta) {
        const calculo = calcularIndiceRaridade(meta);
        if (Number.isFinite(calculo.estrelas)) {
            return calculo.estrelas;
        }
    }

    // Compatibilidade temporária com fichas ainda não auditadas pelo índice V1.
    const legado = Number(orquidea?.avaliacoes?.raridade);
    return Number.isFinite(legado)
        ? Math.max(0, Math.min(5, legado))
        : 0;
}

export function obterIndiceRaridade(orquidea) {
    const meta = orquidea?.raridadeIndice;
    if (!meta) return null;
    return calcularIndiceRaridade(meta);
}

export function obterTextoRaridadePorEstrelas(nota) {
    const valor = Number(nota) || 0;
    if (valor >= 5) return "Rara";
    if (valor >= 4) return "Incomum";
    if (valor >= 3) return "Pouco comum";
    if (valor >= 2) return "Comum";
    if (valor >= 1) return "Muito comum";
    return "Raridade não avaliada";
}
