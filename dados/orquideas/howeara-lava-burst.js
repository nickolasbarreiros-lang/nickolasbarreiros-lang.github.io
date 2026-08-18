// Refinamento Final — Lote 15.

export const howearaLavaBurst = {
    id: "howeara-lava-burst",
    nome: "Leomesezia Lava Burst",
    genero: "Leomesezia",
    sinonimo: "Howeara Lava Burst",
    tipo: "Híbrido intergenérico",
    dificuldade: "Difícil",
    indiceDificuldadeCultivo: {
        versao: "IDC 1.0",
        referenciaRegional: "Litoral de clima quente",
        indice: 53,
        nivel: "Difícil",
        fatores: {
            temperatura: { nota: 1, peso: 18 },
            agua: { nota: 4, peso: 15 },
            umidadeVentilacao: { nota: 1, peso: 12 },
            luminosidade: { nota: 2, peso: 8 },
            raizes: { nota: 3, peso: 15 },
            cicloRepouso: { nota: 3, peso: 12 },
            floracao: { nota: 4, peso: 20 }
        }
    },
    caracteristicas: ["Mini-orquídea", "Flores vermelho-alaranjadas", "Touceira compacta", "Floração recorrente", "Raízes finas"],
    fotos: [
        "imagens/Howeara Lava Burst/Howeara Lava Burst1.jpg",
        "imagens/Howeara Lava Burst/Howeara Lava Burst2.webp",
        "imagens/Howeara Lava Burst/Howeara Lava Burst3.webp",
        "imagens/Howeara Lava Burst/Howeara Lava Burst4.jpeg"
    ],
    descricao: "Pequena no tamanho e enorme no efeito visual! Leomesezia Lava Burst é um híbrido compacto que forma touceiras cheias e produz hastes delicadas cobertas por pequenas flores vermelho-alaranjadas. Foi registrado em 1993 por Puanani a partir de Leomesezia Mini-Primi × Rodriguezia lanceolata, combinação que reuniu plantas tropicais americanas de crescimento ativo e raízes finas. O cultivar ‘Puanani’ é o mais conhecido no cultivo. Quando recebe luz filtrada abundante, umidade regular e adubação leve, pode repetir a floração sempre que novos pseudobulbos amadurecem.",
    origem: "Híbrido hortícola · registrado em 1993.",
    regiao: "Ancestrais tropicais americanos.",
    habitat: "Sem habitat natural · herança epífita.",
    clima: "Intermediário a quente · úmido e ventilado.",
    climaFloracao: "Como híbrido, não existe uma altitude natural única para converter em regra. O melhor guia é o comportamento de seus ancestrais: raízes finas, pseudobulbos pequenos e crescimento relativamente contínuo. No litoral quente, floresce melhor quando o vaso permanece fresco e aerado, sem seca prolongada nem calor abafado. Não precisa de repouso seco para induzir flores; precisa completar novos pseudobulbos saudáveis.",
    iluminacao: {
        sombrite: "50% a 60%",
        solDireto: "Somente muito suave e aclimatado",
        horario: "Início da manhã, se houver boa ventilação",
        observacoes: "Luz filtrada abundante favorece hastes mais firmes e floríferas. Folhas muito escuras e pseudobulbos pequenos sugerem sombra excessiva; folhas amareladas ou quentes ao toque indicam excesso de luz."
    },
    floracao: "Pode ocorrer mais de uma vez ao ano, acompanhando a maturação dos novos pseudobulbos. Em cultivo estável é comum apresentar floradas recorrentes, sem uma estação única e rígida.",
    adubacao: "🌿 Orgânica: bokashi em dose mínima e sempre afastado do coleto.\n💧 Foliar: NPK equilibrado em 1/4 da dose a cada 7–15 dias enquanto houver raízes e brotos ativos.\n🧪 Liberação lenta: poucos grânulos apenas em vaso muito drenante.\n💦 Lavagem: uma vez por mês, passe água limpa em abundância pelo substrato para reduzir sais acumulados.",
    rega: "Regue quando a superfície começar a secar, mantendo umidade leve e regular sem deixar o miolo do vaso saturado. Os pseudobulbos pequenos guardam pouca água e não devem enrugar repetidamente. No inverno ou em períodos chuvosos, reduza apenas de acordo com a evaporação real.",
    suporte: "🥇 Vaso plástico pequeno e muito perfurado.\n🥈 Cachepô pequeno e bem ventilado.\n🥉 Vaso de barro pequeno em ambientes onde a secagem não seja rápida demais.",
    substrato: "🥇 Casca de pinus média + chips de coco + pedra-pomes + carvão vegetal.\n🥈 Pinus médio + pedra-pomes + argila expandida miúda + pequena fração de esfagno solto.\n🥉 Casca de macadâmia triturada média + pinus médio + pedra-pomes, com pequena fração de fibra de coco.\n⭐ Alternativa: Chips de coco + carvão vegetal + perlita + casca de pinus média.",
    errosComuns: "Usar vaso grande; deixar o substrato velho e compacto; impor seca para estimular floração; permitir enrugamento frequente; cultivar em calor abafado; usar excesso de bokashi ou adubo de liberação lenta; aplicar fertilizante concentrado; deixar água parada na base da touceira; manter sombra profunda.",
    dica: "Não tente ‘forçar’ a floração com seca. A estratégia mais eficiente é manter a planta em crescimento contínuo: vaso pequeno, raízes saudáveis, luz filtrada forte e adubação fraca. Cada pseudobulbo bem formado aumenta a chance de uma nova haste, e uma touceira adulta pode florescer repetidamente ao longo do ano.",
    adaptacaoRegional: {
        litoralQuente: "Boa. Proteja do sol forte da tarde, mantenha circulação de ar contínua e evite recipientes grandes que permaneçam quentes e molhados por muito tempo.",
        montanhaFrio: "Excelente. Reduza as regas apenas nos períodos frios de baixa evaporação e proteja de temperaturas muito baixas."
    },
    mesesFloracao: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    "selosCultivo": {
        "rega": { "nivel": "moderada", "regime": "reduzir-inverno" },
        "climaFloracao": { "faixa": "quente" }
    },
    avaliacoes: { cultivo: 3, floracao: 5, perfume: 1, luminosidade: 3, agua: 4, raridade: 2 }
};
