// IAR — Índice de Adaptação Regional v1.0
// Quanto MAIOR o IAR, MELHOR a compatibilidade regional.
//
// Cada fator recebe nota de compatibilidade de 0 a 5:
// 0 = incompatível
// 1 = muito pouco compatível
// 2 = pouco compatível
// 3 = razoavelmente compatível
// 4 = muito compatível
// 5 = excelente compatibilidade
//
// Pesos:
// Compatibilidade com habitat/altitude natural .... 20%
// Compatibilidade térmica ......................... 20%
// Regime hídrico e umidade ........................ 15%
// Ventilação ...................................... 10%
// Compatibilidade luminosa ........................ 10%
// Sazonalidade / repouso ..........................  5%
// Probabilidade de floração na região ............. 20%
//
// IAR = Σ [(nota / 5) × peso]
//
// Conversão para o selo:
// 0–20 = ★☆☆☆☆
// 21–40 = ★★☆☆☆
// 41–60 = ★★★☆☆
// 61–80 = ★★★★☆
// 81–100 = ★★★★★
//
// O IAR é calculado separadamente para:
// - litoral quente
// - montanha / clima frio
//
// O IDC continua sendo independente: IDC mede dificuldade;
// IAR mede compatibilidade com a região.

export const iarMetodologia = {
    versao: "IAR 1.0",
    escala: "compatibilidade",
    pesos: {
        habitatNatural: 20,
        temperatura: 20,
        aguaUmidade: 15,
        ventilacao: 10,
        luminosidade: 10,
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
