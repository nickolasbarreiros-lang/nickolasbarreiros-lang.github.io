// IDC 3.0 — régua recalibrada
// Pesos: Temperatura 15%; Rega 15%; Umidade 10%; Ventilação 10%;
// Luminosidade 10%; Raízes/substrato 10%; Sazonalidade/repouso 10%; Floração 20%.
//
// Notas por fator: 0 = praticamente não acrescenta dificuldade; 5 = crítico.
// Faixas: 0–25 Fácil | 26–50 Moderada | 51–89 Difícil | 90–100 Extrema.
// Estrelas de Cultivo representam facilidade, portanto são inversas ao IDC.

export const idcMetodologia = {
    versao: "IDC 3.0 — régua recalibrada",
    pesos: {
        temperatura: 15,
        rega: 15,
        umidade: 10,
        ventilacao: 10,
        luminosidade: 10,
        raizesSubstrato: 10,
        sazonalidade: 10,
        floracao: 20
    },
    faixas: [
        {min:0,max:25,nivel:"Fácil"},
        {min:26,max:50,nivel:"Moderada"},
        {min:51,max:89,nivel:"Difícil"},
        {min:90,max:100,nivel:"Extrema"}
    ]
};
