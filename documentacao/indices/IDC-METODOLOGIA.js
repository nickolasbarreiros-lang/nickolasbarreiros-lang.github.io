// IDC 3.2 — Índice de Dificuldade de Cultivo
//
// O IDC continua medindo DIFICULDADE:
// 0–25 Fácil | 26–50 Moderada | 51–89 Difícil | 90–100 Extrema.
//
// O selo visual "Cultivo" mede FACILIDADE e, portanto, é inverso ao IDC:
// 0–25   = ★★★★★
// 26–35  = ★★★★☆
// 36–50  = ★★★☆☆
// 51–89  = ★★☆☆☆
// 90–100 = ★☆☆☆☆
//
// Pesos:
// Temperatura 15%; Rega 15%; Umidade 10%; Ventilação 10%;
// Luminosidade 10%; Raízes/substrato 10%; Sazonalidade/repouso 10%;
// Exigência para florescer 20%.

export const idcMetodologia = {
  versao: "IDC 3.2 — selo por facilidade",
  pesos: {
    temperatura: 15, rega: 15, umidade: 10, ventilacao: 10,
    luminosidade: 10, raizesSubstrato: 10, sazonalidade: 10, floracao: 20
  },
  faixas: [
    {min:0,max:25,nivel:"Fácil"},
    {min:26,max:50,nivel:"Moderada"},
    {min:51,max:89,nivel:"Difícil"},
    {min:90,max:100,nivel:"Extrema"}
  ],
  seloCultivo: [
    {min:0,max:25,estrelas:5},
    {min:26,max:35,estrelas:4},
    {min:36,max:50,estrelas:3},
    {min:51,max:89,estrelas:2},
    {min:90,max:100,estrelas:1}
  ]
};
