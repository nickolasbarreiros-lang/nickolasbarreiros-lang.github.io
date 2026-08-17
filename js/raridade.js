/* =========================================================
   ÍNDICE DE RARIDADE — ORQUIDÁRIO DIGITAL
   Versão 2.0 — Fase 2

   Escala editorial 0–100. NÃO é uma probabilidade oficial de
   extinção e não substitui IUCN/CNCFlora.

   Pesos:
   22% restrição geográfica (EOO/AOO/distribuição)
   14% escassez de ocorrências GBIF limpas
   13% endemismo + especialização de habitat
   18% conservação oficial
   13% tendência populacional + fragmentação
   12% ameaças documentadas / pressão de coleta
    8% escassez comercial atual no Brasil

   A disponibilidade comercial recebe apenas 8% porque uma
   espécie pode ser raríssima na natureza e, ao mesmo tempo,
   amplamente propagada em laboratório ou viveiros.
========================================================= */

export const PESOS_RARIDADE_V2 = Object.freeze({
    distribuicao: 0.22,
    ocorrenciasGBIF: 0.14,
    endemismoHabitat: 0.13,
    conservacao: 0.18,
    populacaoFragmentacao: 0.13,
    ameacas: 0.12,
    disponibilidadeComercial: 0.08
});

function limitar100(v) {
    const n = Number(v);
    if (!Number.isFinite(n)) return null;
    return Math.max(0, Math.min(100, n));
}

export function pontuarConservacao(categoria) {
    const mapa = {
        EX: 100, EW: 100,
        CR: 100,
        EN: 85,
        VU: 65,
        NT: 40,
        LC: 10,
        DD: null,
        NE: null
    };
    return Object.prototype.hasOwnProperty.call(mapa, categoria) ? mapa[categoria] : null;
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

/* A contagem principal usa células ocupadas de 10 km,
   reduzindo o peso de dezenas de registros repetidos na mesma localidade. */
export function pontuarOcorrenciasGBIF(celulas10km, registrosLimpos = null) {
    const c = Number(celulas10km);
    if (Number.isFinite(c) && c >= 0) {
        if (c <= 3) return 95;
        if (c <= 7) return 85;
        if (c <= 15) return 70;
        if (c <= 35) return 50;
        if (c <= 75) return 30;
        return 10;
    }
    const r = Number(registrosLimpos);
    if (!Number.isFinite(r) || r < 0) return null;
    if (r <= 10) return 90;
    if (r <= 25) return 80;
    if (r <= 75) return 65;
    if (r <= 200) return 45;
    if (r <= 500) return 25;
    return 10;
}

export function pontuarDisponibilidadeComercial(vendedoresAtivos, canaisConsultados = null, propagacao = null) {
    const v = Number(vendedoresAtivos);
    const c = Number(canaisConsultados);
    if (!Number.isFinite(v) || v < 0) return null;

    // Zero só recebe pontuação alta se a busca teve cobertura mínima.
    let p;
    if (v === 0) {
        p = Number.isFinite(c) && c >= 8 ? 95 : 75;
    } else if (v === 1) p = 82;
    else if (v === 2) p = 68;
    else if (v <= 4) p = 50;
    else if (v <= 7) p = 28;
    else p = 10;

    const prop = String(propagacao || "").toLowerCase();
    if (/laboratorio|laboratório|meristema|semente|seedling|muda em escala|massal/.test(prop)) p -= 10;
    if (/somente divis|apenas divis|coleta antiga|planta adulta de coleção/.test(prop)) p += 8;

    return limitar100(p);
}

function fatorDistribuicao(meta = {}) {
    const bloco = meta.distribuicao || {};
    const eoo = pontuarEOO(bloco.eooKm2);
    const aoo = pontuarAOO(bloco.aooKm2);
    if (eoo !== null && aoo !== null) return Math.round(eoo * 0.60 + aoo * 0.40);
    if (eoo !== null) return eoo;
    if (aoo !== null) return aoo;
    return limitar100(bloco.pontuacao);
}

export function calcularIndiceRaridadeV2(meta = {}) {
    if (meta?.aplicavel === false) {
        return { indice: null, estrelas: null, confianca: 100, aplicavel: false };
    }

    const fatores = {
        distribuicao: fatorDistribuicao(meta),
        ocorrenciasGBIF: meta.ocorrenciasGBIF
            ? (limitar100(meta.ocorrenciasGBIF.pontuacao) ??
               pontuarOcorrenciasGBIF(meta.ocorrenciasGBIF.celulas10km, meta.ocorrenciasGBIF.registrosLimpos))
            : null,
        endemismoHabitat: limitar100(meta.endemismoHabitat?.pontuacao ?? meta.endemismoHabitat),
        conservacao: meta.conservacao
            ? (limitar100(meta.conservacao.pontuacao) ?? pontuarConservacao(meta.conservacao.categoria))
            : null,
        populacaoFragmentacao: limitar100(meta.populacaoFragmentacao?.pontuacao ?? meta.populacaoFragmentacao),
        ameacas: limitar100(meta.ameacas?.pontuacao ?? meta.ameacas),
        disponibilidadeComercial: meta.disponibilidadeComercial
            ? (limitar100(meta.disponibilidadeComercial.pontuacao) ??
               pontuarDisponibilidadeComercial(
                   meta.disponibilidadeComercial.vendedoresAtivosIndependentes,
                   meta.disponibilidadeComercial.canaisConsultados,
                   meta.disponibilidadeComercial.propagacaoComercial
               ))
            : null
    };

    let pesoDisponivel = 0;
    let soma = 0;
    for (const [k, peso] of Object.entries(PESOS_RARIDADE_V2)) {
        const v = fatores[k];
        if (v === null) continue;
        pesoDisponivel += peso;
        soma += (v / 100) * peso;
    }

    const confianca = Math.round(pesoDisponivel * 100);
    if (pesoDisponivel < 0.60) {
        return {
            indice: null,
            estrelas: null,
            confianca,
            fatores,
            motivo: "Menos de 60% do peso possui evidência validada"
        };
    }

    let base = soma / pesoDisponivel;

    // Convergência: raridade cresce ligeiramente quando diferentes evidências
    // independentes apontam na mesma direção. Limite absoluto: 8%.
    const g = (fatores.distribuicao ?? 0) / 100;
    const o = (fatores.ocorrenciasGBIF ?? 0) / 100;
    const e = (fatores.endemismoHabitat ?? 0) / 100;
    const c = (fatores.conservacao ?? 0) / 100;
    const p = (fatores.populacaoFragmentacao ?? 0) / 100;
    const convergencia = ((g * o) + (g * e) + (c * p)) / 3;
    base = Math.min(1, base + 0.08 * convergencia * (1 - base));

    const indice = Math.round(base * 100);
    return {
        indice,
        estrelas: converterIndiceEmEstrelas(indice),
        confianca,
        fatores
    };
}

export function converterIndiceEmEstrelas(indice) {
    const v = Number(indice);
    if (!Number.isFinite(v)) return null;
    if (v >= 80) return 5;
    if (v >= 60) return 4;
    if (v >= 40) return 3;
    if (v >= 20) return 2;
    return 1;
}

export function obterNotaRaridadeCalculada(orquidea) {
    const meta = orquidea?.raridadeIndice;
    if (meta?.versao === "2.0") {
        const r = calcularIndiceRaridadeV2(meta);
        if (Number.isFinite(r.estrelas)) return r.estrelas;

        // Enquanto a auditoria V2 da espécie não atingir 60% de confiança,
        // preserva a nota anterior e NÃO inventa um novo valor.
        const legado = Number(meta?.fase1Legado?.estrelasCalculadas ?? orquidea?.avaliacoes?.raridade);
        return Number.isFinite(legado) ? Math.max(0, Math.min(5, legado)) : 0;
    }

    const legado = Number(orquidea?.avaliacoes?.raridade);
    return Number.isFinite(legado) ? Math.max(0, Math.min(5, legado)) : 0;
}

export function obterIndiceRaridade(orquidea) {
    const meta = orquidea?.raridadeIndice;
    if (!meta) return null;
    if (meta.versao === "2.0") return calcularIndiceRaridadeV2(meta);
    return null;
}

export function obterTextoRaridadePorEstrelas(nota) {
    const v = Number(nota) || 0;
    if (v >= 5) return "Rara";
    if (v >= 4) return "Incomum";
    if (v >= 3) return "Pouco comum";
    if (v >= 2) return "Comum";
    if (v >= 1) return "Muito comum";
    return "Raridade não avaliada";
}
