// IAR — Índice de Adaptação Regional v1.1
// Quanto MAIOR o IAR, MELHOR a compatibilidade regional.
//
// Pesos:
// Habitat/altitude natural: 30%
// Compatibilidade térmica: 30%
// Regime hídrico e umidade: 5%
// Ventilação: 5%
// Compatibilidade luminosa: 5%
// Sazonalidade / repouso: 5%
// Probabilidade de floração na região: 20%
//
// IAR = Σ [(nota / 5) × peso]
//
// 0–20 = ★☆☆☆☆
// 21–40 = ★★☆☆☆
// 41–60 = ★★★☆☆
// 61–80 = ★★★★☆
// 81–100 = ★★★★★

export const iarMetodologia = {
    versao: "IAR 1.1",
    escala: "compatibilidade",
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
