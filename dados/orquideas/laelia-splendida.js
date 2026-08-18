// Ficha científica e de cultivo revisada — Laelia splendida.
// Mantém "Schomburgkia splendida" como identificação histórica relevante da coleção.

export const laeliaSplendida = {
    id: "laelia-splendida",
    nome: "Laelia splendida",
    genero: "Laelia",
    tipo: "Espécie botânica epífita ou rupícola sul-americana",
    dificuldade: "Moderada",
    caracteristicas: [
        "Sin. Schomburgkia splendida",
        "Flores grandes e vistosas",
        "Haste floral longa",
        "Alta luminosidade",
        "Clima quente a intermediário",
        "Crescimento robusto"
    ],
    fotos: [
        "imagens/Laelia splendida/Laelia splendida1.jpg",
        "imagens/Laelia splendida/Laelia splendida2.jpg",
        "imagens/Laelia splendida/Laelia splendida3.jpg",
        "imagens/Laelia splendida/Laelia splendida4.jpg"
    ],
    descricao: "Laelia splendida é uma orquídea de presença marcante, conhecida por muitos colecionadores pelo antigo nome Schomburgkia splendida. Forma pseudobulbos robustos e, quando adulta, lança hastes florais longas que elevam as flores bem acima da folhagem. As flores são grandes, vistosas e de aspecto tropical, fazendo desta uma espécie especialmente interessante para espaços claros e bem ventilados. Apesar do porte imponente, seu cultivo é relativamente direto quando recebe bastante luz, raízes arejadas e uma boa alternância entre rega abundante e secagem.",
    origem: "América do Sul.",
    regiao: "Colômbia e Equador.",
    habitat: "Epífita ou rupícola de ambientes tropicais claros e ventilados.",
    clima: "Quente a intermediário, luminoso e ventilado.",
    climaFloracao: "A floração depende principalmente de pseudobulbos maduros, boa reserva de energia e luminosidade elevada. No litoral quente, adapta-se bem desde que as raízes tenham excelente aeração e a planta não permaneça constantemente molhada.",
    iluminacao: {
        sombrite: "30% a 50%",
        solDireto: "Aceita sol fraco da manhã após aclimatação",
        horario: "Luz intensa e filtrada durante grande parte do dia",
        observacoes: "É uma espécie de alta luminosidade. Sombra excessiva produz crescimento verde e vigoroso, mas pode impedir a floração. No litoral quente, evite sol forte do meio do dia sobre folhas não aclimatadas."
    },
    floracao: "A época pode variar conforme procedência e condições de cultivo. No calendário do site, primavera e início do verão são usados como janela prática de referência, observando sempre a maturação dos pseudobulbos.",
    adubacao: "🌿 Orgânica: bokashi em pequena quantidade, preferencialmente em porta-adubo.\n💧 Foliar/mineral: NPK equilibrado, como 20-20-20, em cerca de 1/4 da dose comercial a cada 10 a 15 dias durante crescimento ativo.\n🧪 Liberação lenta: pode ser utilizada em poucos grânulos em vasos ou cestos.\n🚿 Lavagem: faça regas periódicas apenas com água para evitar acúmulo de sais.",
    rega: "Regue abundantemente enquanto novos brotos e raízes estiverem ativos, deixando o suporte secar parcialmente antes da próxima irrigação. Com pseudobulbos maduros, aumente moderadamente o intervalo entre regas. Evite raízes permanentemente molhadas.",
    suporte: [
        "🥇 Cesto ou cachepô de madeira, permitindo raízes muito arejadas.",
        "🥈 Vaso de barro largo e bem perfurado, proporcional à frente de crescimento.",
        "🥉 Placa ou tronco robusto, quando houver umidade suficiente para regas frequentes."
    ],
    substrato: ["🥇 Casca de macadâmia média + pinus médio + pedra-pomes + carvão vegetal.", "🥈 Pinus médio/grosso + pedra-pomes + carvão + chips de coco em baixa proporção.", "🥉 Casca de macadâmia + argila expandida + carvão vegetal + pinus grosso.", "⭐ Alternativa: Chips de coco grossos + pedra-pomes + carvão + pinus médio, com secagem clara entre regas."],
    errosComuns: [
        "Cultivar em sombra excessiva",
        "Usar vaso profundo e pouco ventilado",
        "Manter raízes permanentemente molhadas",
        "Dividir a planta em partes muito pequenas",
        "Replantar sem novas raízes em atividade",
        "Aplicar fertilizante concentrado",
        "Não oferecer espaço para a nova frente de crescimento",
        "Expor abruptamente ao sol forte sem aclimatação"
    ],
    dica: "🏆 Se a planta cresce bem mas não floresce, investigue primeiro a luz. Laelia splendida precisa acumular bastante energia para sustentar suas hastes longas. No litoral quente, um local muito claro, ventilado e com raízes quase expostas costuma funcionar melhor que um vaso úmido e sombreado.",
    adaptacaoRegional: {
        litoralQuente: { nota: 4, texto: "Muito boa Calor não costuma ser o principal problema; ofereça muita luz, circulação de ar e secagem relativamente rápida das raízes." },
        montanhaFrio: { nota: 4, texto: "Boa Tolera noites mais frescas, mas deve ser protegida de frio intenso e de substrato frio e constantemente saturado." }
    },
    mesesFloracao: [9, 10, 11, 12],
    "selosCultivo": {
        "rega": { "nivel": "moderada" },
        "climaFloracao": { "faixa": "quente" }
    },
    indiceDificuldadeCultivo: {
        versao: "IDC 2.0",
        referenciaRegional: "Litoral de clima quente",
        indice: 33,
        nivel: "Moderada",
        fatores: {
            temperatura: { nota: 1, peso: 18 },
            agua: { nota: 1, peso: 15 },
            umidadeVentilacao: { nota: 1, peso: 12 },
            luminosidade: { nota: 3, peso: 8 },
            raizes: { nota: 3, peso: 15 },
            cicloRepouso: { nota: 1, peso: 12 },
            floracao: { nota: 2, peso: 20 }
        }
    },
    avaliacoes: { cultivo: 2, floracao: 4, perfume: 2, luminosidade: 4, agua: 3, raridade: 4 }
};
