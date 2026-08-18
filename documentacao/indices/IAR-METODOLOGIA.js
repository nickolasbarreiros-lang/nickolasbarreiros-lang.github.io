// IAR — Índice de Adaptação Regional 2.0 — REVISÃO CIENTÍFICA
//
// A pontuação NÃO é inferida por palavras existentes nas fichas.
// Cada fator é avaliado manualmente por região após confronto de fontes:
// POWO/Kew, WFO/IPNI, GBIF/Tropicos, IOSPE/OrchidSpecies/Swiss Orchid,
// OrchidRoots/RHS para híbridos e AOS/OrchidPro quando há dado público verificável.
//
// Escala de compatibilidade de cada fator:
// 0 = incompatível
// 1 = muito pouco compatível
// 2 = pouco compatível
// 3 = compatibilidade intermediária
// 4 = muito compatível
// 5 = excelente compatibilidade
//
// Pesos:
// Habitat/altitude natural ................ 30%
// Compatibilidade térmica ................. 30%
// Regime hídrico e umidade ................  5%
// Ventilação ..............................  5%
// Compatibilidade luminosa ................  5%
// Sazonalidade / repouso ..................  5%
// Probabilidade de floração regional ...... 20%
//
// IAR = Σ [(nota / 5) × peso]
//
// Selos:
// 0–20   = ★☆☆☆☆
// 21–40  = ★★☆☆☆
// 41–60  = ★★★☆☆
// 61–80  = ★★★★☆
// 81–100 = ★★★★★
//
// IDC e IAR são independentes.

export const iarMetodologia = {
    versao: "IAR 2.0 — revisão científica",
    pesos: {
        habitatNatural: 30,
        temperatura: 30,
        aguaUmidade: 5,
        ventilacao: 5,
        luminosidade: 5,
        sazonalidade: 5,
        floracao: 20
    },
    faixasEstrelas: [
        { min: 0, max: 20, estrelas: 1 },
        { min: 21, max: 40, estrelas: 2 },
        { min: 41, max: 60, estrelas: 3 },
        { min: 61, max: 80, estrelas: 4 },
        { min: 81, max: 100, estrelas: 5 }
    ]
};
