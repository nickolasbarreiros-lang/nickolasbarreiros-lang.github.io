// Ficha científica e de cultivo revisada — Padrão V3.
// Estrutura histórica preservada para compatibilidade com o índice do site.
// Nota taxonômica: Bifrenaria verboonenii é atualmente tratada como sinônimo de Bifrenaria tyrianthina.

export const bifrenariaVerboonenii = {
    id: "bifrenaria-verboonenii",
    nome: "Bifrenaria verboonenii",
    genero: "Bifrenaria",
    nomeAceito: "Bifrenaria tyrianthina",
    sinonimo: "Bifrenaria tyrianthina",
    tipo: "Espécie botânica brasileira — nome histórico em sinonímia",
    dificuldade: "Moderada",
    caracteristicas: [
        "Nome histórico preservado",
        "Aceita como B. tyrianthina",
        "Ambiente montano",
        "Pseudobulbos robustos",
        "Flores grandes e cerosas",
        "Perfume intenso"
    ],
    fotos: [
        "imagens/Bifrenaria verboonenii/Bifrenaria verboonenii1.jpeg",
        "imagens/Bifrenaria verboonenii/Bifrenaria verboonenii2.jpg",
        "imagens/Bifrenaria verboonenii/Bifrenaria verboonenii3.jpg",
        "imagens/Bifrenaria verboonenii/Bifrenaria verboonenii4.jpg"
    ],
    descricao: "Uma Bifrenaria de presença marcante, com pseudobulbos robustos e flores grandes, carnosas e cerosas que chamam atenção tanto pela aparência quanto pelo perfume. As hastes são curtas e surgem junto à base dos pseudobulbos maduros, normalmente carregando poucas flores, mas de tamanho expressivo e boa duração. Encontrada em áreas montanas do Sudeste brasileiro, em altitudes elevadas, aprecia noites mais amenas e um inverno relativamente mais seco — característica que ajuda a entender por que pode exigir atenção extra quando cultivada no litoral quente.",
    origem: "Brasil",
    regiao: "BA · ES · MG",
    habitat: "Epífita/litófita · 1.000–2.000 m",
    clima: "Fresco · montano · inverno mais seco",
    climaFloracao: "A indução floral é favorecida pela maturação completa do pseudobulbo, boa luminosidade, noites mais frescas e redução sazonal das regas. Não é necessário impor seca absoluta. Em Litoral de clima quente, temperatura noturna elevada e raízes aquecidas são os principais fatores limitantes.",
    iluminacao: {
        sombrite: "40% a 50%",
        solDireto: "Apenas muito suave e com aclimatação",
        horario: "Primeiras horas da manhã",
        observacoes: "Prefere alta claridade filtrada. No litoral, 40% a 50% de sombra reduz superaquecimento sem escurecer demais a planta. Folhas muito escuras indicam luz insuficiente."
    },
    floracao: "Primavera ao início do verão; em cultivo, a data pode variar com procedência e maturação do pseudobulbo.",
    adubacao: "🌿 Orgânica: Bokashi opcional em pequena dose durante crescimento ativo.\n💧 Foliar/mineral: NPK equilibrado em aproximadamente 1/4 da dose a cada 10 a 15 dias enquanto houver crescimento e raízes ativas.\n🧪 Liberação lenta: Osmocote em baixa dose pode ser usado em vaso drenante. Após a maturação do pseudobulbo, reduza gradualmente a frequência; não é necessário suspender 100% de forma abrupta.",
    rega: "Durante crescimento ativo, regue bem e permita que o substrato drene e se aproxime da secagem antes da próxima irrigação. No outono e inverno, reduza significativamente a frequência conforme a atividade cair, mas não provoque desidratação severa dos pseudobulbos.",
    suporte: "🥇 Vaso de barro pequeno a médio, muito bem drenado.\n🥈 Cachepô de madeira bastante vazado.\n🥉 Vaso plástico muito perfurado com mistura extremamente aberta.\nMontagem nua não é a primeira opção no litoral por aumentar demais a oscilação hídrica.",
    substrato: "🥇 Casca de macadâmia média + pinus médio + pedra-pomes + carvão vegetal.\n🥈 Casca de macadâmia + argila expandida + carvão vegetal + pinus grosso.\n🥉 Chips de coco grossos + pedra-pomes + carvão + pinus médio, com secagem clara entre regas.\n⭐ Alternativa: Pinus médio/grosso + pedra-pomes + carvão + chips de coco em baixa proporção.",
    errosComuns: "• Manter a atualização taxonômica sem registrar que Bifrenaria verboonenii é tratada hoje como sinônimo de Bifrenaria tyrianthina.\n• Cultivar em local quente e abafado.\n• Tratar a planta como rupícola obrigatoriamente mineral.\n• Secar excessivamente durante crescimento ativo.\n• Impor repouso totalmente seco por meses.\n• Replantar sem raízes novas começando a surgir.\n• Usar substrato compacto.\n• Permitir sol forte aquecendo vaso e raízes.",
    dica: "🏆 Esqueça tentar imitar fendas de rocha e foque no frescor das raízes. Use vasos de barro ou cachepôs altamente ventilados com um substrato bem grosso e de drenagem imediata (casca, pedra-pomes e carvão). Posicione a planta no local mais fresco e arejado do cultivo, mantendo regas fartas na fase de crescimento, espaçando no inverno e replantando estritamente quando surgirem as primeiras pontas de novas raízes.",
    adaptacaoRegional: {
        litoralQuente: { nota: 2, texto: "Difícil Noites quentes persistentes são o principal gargalo. Evite telhados, paredes quentes e recipientes que acumulem calor." },
        montanhaFrio: { nota: 5, texto: "Noites frescas e inverno mais seco reproduzem muito melhor as condições naturais." }
    },
    mesesFloracao: [9, 10, 11, 12],
    "selosCultivo": {
        "rega": { "nivel": "moderada", "regime": "reduzir-inverno" },
        "climaFloracao": { "faixa": "ameno", "quedaTermica": true }
    },
    indiceDificuldadeCultivo: {
        versao: "IDC 2.0",
        referenciaRegional: "Litoral de clima quente",
        indice: 41,
        nivel: "Moderada",
        fatores: {
            temperatura: { nota: 4, peso: 18 },
            agua: { nota: 1, peso: 15 },
            umidadeVentilacao: { nota: 1, peso: 12 },
            luminosidade: { nota: 2, peso: 8 },
            raizes: { nota: 2, peso: 15 },
            cicloRepouso: { nota: 0, peso: 12 },
            floracao: { nota: 3, peso: 20 }
        }
    },
    avaliacoes: {
        cultivo: 3,
        floracao: 3,
        perfume: 4,
        luminosidade: 4,
        agua: 3,
        raridade: 4
    }
};
