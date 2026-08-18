// Ficha científica e de cultivo revisada — Refinamento Lote 08.

export const cattleyaLueddemannianaTipo = {
    id: "cattleya-lueddemanniana-tipo",
    nome: "Cattleya lueddemanniana",
    genero: "Cattleya",
    sinonimo: "Cattleya roezlii",
    tipo: "Espécie botânica — forma tipo",
    dificuldade: "Moderada",
    indiceDificuldadeCultivo: {
        versao: "IDC 1.0",
        referenciaRegional: "Litoral de clima quente",
        indice: 35,
        nivel: "Moderada",
        fatores: {
            temperatura: { nota: 1, peso: 18 },
            agua: { nota: 1, peso: 15 },
            umidadeVentilacao: { nota: 1, peso: 12 },
            luminosidade: { nota: 1, peso: 8 },
            raizes: { nota: 2, peso: 15 },
            cicloRepouso: { nota: 1, peso: 12 },
            floracao: { nota: 4, peso: 20 }
        }
    },
    caracteristicas: [
        "Unifoliada venezuelana",
        "Flores muito grandes",
        "Perfume intenso",
        "Espata floral persistente"
    ],
    fotos: [
        "imagens/Cattleya lueddemanniana/Cattleya lueddemanniana1.jpg",
        "imagens/Cattleya lueddemanniana/Cattleya lueddemanniana2.jpg",
        "imagens/Cattleya lueddemanniana/Cattleya lueddemanniana3.jpg",
        "imagens/Cattleya lueddemanniana/Cattleya lueddemanniana4.jpg"
    ],
    descricao: "Uma das grandes Cattleyas venezuelanas, Cattleya lueddemanniana chama atenção pelas flores amplas, cerosas e perfumadas, geralmente em tons de rosa a rosa-lilás. O labelo é o grande destaque: intensamente ornamentado em púrpura, com desenhos que podem avançar pela garganta sobre áreas amarelas ou douradas, dando a cada flor uma aparência muito marcante. É uma planta robusta e elegante, capaz de produzir florações impressionantes quando bem estabelecida. Apesar da aparência sofisticada, costuma responder muito bem ao cultivo quente e luminoso, desde que as raízes permaneçam arejadas e sequem com rapidez entre as regas.",
    origem: "Norte da Venezuela.",
    regiao: "Cordilheira da Costa venezuelana.",
    habitat: "Florestas tropicais úmidas · epífita.",
    clima: "Quente a intermediário · ventilado.",
    climaFloracao: "A planta amadurece o pseudobulbo antes de desenvolver a inflorescência. A espata pode amarelar ou secar externamente e ainda permanecer funcional, protegendo botões que surgirão semanas depois. Após a maturação, aumente gradualmente o intervalo entre as regas, sem impor seca absoluta. Boa luz, raízes sadias e crescimento completo são mais importantes que qualquer tentativa de forçar a floração.",
    iluminacao: {
        sombrite: "40% a 60% — 50% como referência inicial",
        solDireto: "Apenas sol suave",
        horario: "Primeiras horas da manhã",
        observacoes: "Tolera luminosidade alta, mas extremos não são necessários. Folhas firmes, verde-médio a verde-claro, e pseudobulbos robustos indicam bom equilíbrio. Folhagem muito escura e crescimento alongado costumam acompanhar pouca luz."
    },
    floracao: "A floração principal ocorre do fim de dezembro a março. Plantas adultas e alguns clones podem apresentar uma segunda floração entre setembro e novembro.",
    adubacao: "🌿 Orgânica: bokashi em pequena quantidade a cada 60 a 90 dias durante o crescimento ativo.\n💧 Foliar: NPK equilibrado, como 20-20-20, em 1/4 a 1/3 da dose semanal ou quinzenalmente enquanto brotos e raízes estiverem ativos. Após a maturação, reduza a frequência e evite excesso de nitrogênio; não há necessidade de doses elevadas de fósforo para induzir floração.\n🧪 Liberação lenta: Osmocote 14-14-14 ou equivalente em dose moderada para vasos e cachepôs, reduzindo a adubação líquida se for utilizado.",
    rega: "Durante o crescimento ativo, regue abundantemente e deixe o sistema radicular secar de forma significativa antes da próxima irrigação. Após a maturação do pseudobulbo, aumente gradualmente o intervalo entre as regas, mantendo a planta mais seca sem provocar desidratação excessiva. Em Litoral de clima quente, a frequência deve acompanhar o suporte, a temperatura e a velocidade real de secagem.",
    suporte: "🥇 Cachepô de madeira, excelente para secagem rápida e raízes arejadas.\n🥈 Vaso de barro, que ajuda a dissipar umidade e calor pelas paredes.\n🥉 Vaso plástico muito perfurado, sempre com substrato grosseiro e excelente drenagem.",
    substrato: "🥇 Casca de macadâmia média + pinus médio + pedra-pomes + carvão vegetal.\n🥈 Chips de coco grossos + pedra-pomes + carvão + pinus médio, com secagem clara entre regas.\n🥉 Pinus médio/grosso + pedra-pomes + carvão + chips de coco em baixa proporção.\n⭐ Alternativa: Casca de macadâmia + argila expandida + carvão vegetal + pinus grosso.",
    errosComuns: "Cortar espata seca sem verificar se há botões; deixar água acumulada dentro de espata fechada; manter substrato constantemente molhado; cultivar com pouca luz; usar vaso excessivamente grande; enterrar o rizoma; confundir repouso com seca absoluta; replantar fora da emissão de novas raízes; adubar em excesso.",
    dica: "Nunca descarte uma espata apenas porque ficou amarela, marrom ou aparentemente seca. Ela pode proteger botões que ainda estão se desenvolvendo. Evite água parada dentro da bainha, especialmente em noites quentes. Depois da floração, observe a base do novo crescimento: quando começarem a despontar raízes novas, chegou a melhor janela para replantar.",
    adaptacaoRegional: {
        litoralQuente: "Adapta-se muito bem à Litoral de clima quente. O calor é compatível com sua origem; o maior risco é a combinação de noites quentes, substrato fechado e raízes permanentemente molhadas. Prefira boa ventilação, vaso ou cachepô arejado e luz filtrada forte.",
        montanhaFrio: "Tolera noites frescas, mas não aprecia frio úmido prolongado. Reduza as regas durante sequências frias e nubladas e proteja contra temperaturas extremas."
    },
    mesesFloracao: [12, 1, 2, 3, 9, 10, 11],
    "selosCultivo": {
        "rega": { "nivel": "moderada", "regime": "reduzir-repouso" },
        "climaFloracao": { "faixa": "quente" }
    },
    avaliacoes: {
        cultivo: 2,
        floracao: 5,
        perfume: 4,
        luminosidade: 4,
        agua: 3,
        raridade: 3
    }
};
