// IDC 2.1 — Índice de Dificuldade de Cultivo
// Quanto MAIOR o IDC, MAIOR a dificuldade.
//
// Pesos oficiais:
// Temperatura ..................... 30%
// Rega ............................ 15%
// Umidade .........................  5%
// Ventilação ......................  5%
// Luminosidade .................... 15%
// Raízes e substrato ..............  5%
// Sazonalidade / repouso ..........  5%
// Exigência para florescer ........ 20%
//
// Cada fator recebe nota de dificuldade de 0 a 5.
// IDC = Σ [(nota / 5) × peso]
//
// Classificação:
// 0–29 = Fácil
// 30–59 = Moderada
// 60–89 = Difícil
// 90–100 = Extrema
//
// Estrelas de Cultivo representam FACILIDADE:
// 0–19 IDC   = ★★★★★
// 20–39 IDC  = ★★★★☆
// 40–59 IDC  = ★★★☆☆
// 60–79 IDC  = ★★☆☆☆
// 80–100 IDC = ★☆☆☆☆
//
// Portanto, estrelas e IDC têm sentidos opostos:
// IDC alto = mais difícil; mais estrelas = mais fácil.

export const idcMetodologia = {
    versao: "IDC 2.1",
    pesos: {
        temperatura: 30,
        rega: 15,
        umidade: 5,
        ventilacao: 5,
        luminosidade: 15,
        raizesSubstrato: 5,
        sazonalidade: 5,
        floracao: 20
    }
};
