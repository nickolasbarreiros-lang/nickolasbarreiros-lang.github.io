// IDC — Índice de Dificuldade de Cultivo v2.0
// Quanto MAIOR o índice, MAIOR a dificuldade.
//
// Referência regional principal:
// Litoral de clima quente.
//
// Cada fator recebe nota de 0 a 5:
// 0 = praticamente nenhuma dificuldade / grande tolerância
// 1 = baixa dificuldade
// 2 = baixa a moderada
// 3 = exigente
// 4 = muito exigente
// 5 = crítico
//
// Pesos:
// Temperatura ................................ 18%
// Água ....................................... 15%
// Umidade + ventilação ....................... 12%
// Luminosidade ...............................  8%
// Sensibilidade das raízes ................... 15%
// Ciclo / repouso ............................ 12%
// Indução e regularidade da floração ......... 20%
//
// IDC = Σ [(nota do fator / 5) × peso]
//
// Faixas oficiais:
// 0 <= IDC < 30   = Fácil
// 30 <= IDC < 60  = Moderada
// 60 <= IDC < 90  = Difícil
// 90 <= IDC <=100 = Extrema
//
// Como os índices são armazenados como inteiros:
// 0–29 Fácil | 30–59 Moderada | 60–89 Difícil | 90–100 Extrema

export const idcMetodologia = {
    versao: "IDC 2.0",
    referenciaRegional: "Litoral de clima quente",
    pesos: {
        temperatura: 18,
        agua: 15,
        umidadeVentilacao: 12,
        luminosidade: 8,
        raizes: 15,
        cicloRepouso: 12,
        floracao: 20
    },
    faixas: [
        { min: 0, max: 29, nivel: "Fácil" },
        { min: 30, max: 59, nivel: "Moderada" },
        { min: 60, max: 89, nivel: "Difícil" },
        { min: 90, max: 100, nivel: "Extrema" }
    ]
};
