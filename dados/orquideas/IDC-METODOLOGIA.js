// Metodologia de referência do Índice de Dificuldade de Cultivo (IDC)
export const metodologiaIDC = {
  versao: "IDC 1.0",
  referenciaRegional: "Litoral de clima quente",
  pesos: { temperatura: 18, agua: 15, umidadeVentilacao: 12, luminosidade: 8, raizes: 15, cicloRepouso: 12, floracao: 20 },
  faixas: { facil: [0,25], moderada: [26,50], dificil: [51,75], extrema: [76,100] },
  regrasCriticas: [
    "floracao = 5 => classificação mínima Difícil",
    "temperatura, raizes ou cicloRepouso = 5 => classificação não pode ser Fácil",
    "dois ou mais fatores com nota 5 => elevação mínima de uma categoria"
  ]
};
