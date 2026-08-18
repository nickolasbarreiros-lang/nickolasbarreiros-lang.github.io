// Ficha científica e de cultivo revisada — Padrão V3.
// Material historicamente identificado como Bifrenaria verboonenii.

export const bifrenariaTyrianthina = {
    id: "bifrenaria-tyrianthina",
    nome: "Bifrenaria tyrianthina",
    genero: "Bifrenaria",
    sinonimo: "Bifrenaria verboonenii",
    tipo: "Espécie botânica brasileira — epífita ou litófita",
    dificuldade: "Difícil",
    caracteristicas: [
        "Ex-B. verboonenii",
        "Ambiente montano",
        "Pseudobulbos robustos",
        "Flores grandes e cerosas",
        "Perfume intenso",
        "Noites frescas"
    ],
    fotos: [
        "imagens/Bifrenaria verboonenii/Bifrenaria verboonenii1.jpg",
        "imagens/Bifrenaria verboonenii/Bifrenaria verboonenii2.jpg",
        "imagens/Bifrenaria verboonenii/Bifrenaria verboonenii3.jpg",
        "imagens/Bifrenaria verboonenii/Bifrenaria verboonenii4.jpg"
    ],
    descricao: "Flores grandes, cerosas e perfumadas fazem da Bifrenaria tyrianthina uma das espécies brasileiras mais atraentes do gênero. Encontrada principalmente em áreas montanas da Bahia, Espírito Santo e Minas Gerais, ela pode crescer sobre árvores ou rochas e produz flores duráveis que chegam a aproximadamente 8,5–9 cm. Seus pseudobulbos robustos e sulcados carregam uma única folha plicada, enquanto as hastes curtas surgem junto à base e normalmente apresentam de uma a quatro flores. Por viver naturalmente em altitudes elevadas, com noites mais frescas e inverno relativamente mais seco, seu principal desafio no litoral quente não é a umidade, mas o excesso de calor noturno aliado à pouca ventilação.",
    origem: "Brasil.",
    regiao: "Bahia, Espírito Santo e Minas Gerais.",
    habitat: "Ambientes montanos · epífita/litófita · 1.000–2.000 m.",
    clima: "Fresco · luminoso · inverno mais seco.",
    climaFloracao: "A indução floral é favorecida pela maturação completa do pseudobulbo, boa luminosidade, noites mais frescas e redução sazonal das regas. Não é necessário impor seca absoluta. Em Litoral de clima quente, temperatura noturna elevada e raízes aquecidas são os principais fatores limitantes.",
    iluminacao: {
        sombrite: "40% a 50%",
        solDireto: "Apenas muito suave e com aclimatação",
        horario: "Primeiras horas da manhã",
        observacoes: "Prefere alta claridade filtrada. No litoral, 40% a 50% de sombra reduz superaquecimento sem escurecer demais a planta. Folhas muito escuras indicam luz insuficiente."
    },
    floracao: "Floresce da primavera ao início do verão. A inflorescência basal, ereta e rígida mede cerca de 7,5 cm e produz normalmente 1 a 4 flores carnosas, perfumadas e duráveis, que podem chegar a aproximadamente 8,75 cm. A combinação de 1.000–2.000 m de altitude e estação seca de inverno explica a preferência por noites frescas e uma redução sazonal de água, sem necessidade de seca absoluta.",
    adubacao: "🌿 Orgânica: Bokashi opcional em pequena dose durante crescimento ativo.\n💧 Foliar/mineral: NPK equilibrado em aproximadamente 1/4 da dose a cada 10 a 15 dias enquanto houver crescimento e raízes ativas.\n🧪 Liberação lenta: Osmocote em baixa dose pode ser usado em vaso drenante. Após a maturação do pseudobulbo, reduza gradualmente a frequência; não é necessário suspender 100% de forma abrupta.",
    rega: "Durante crescimento ativo, regue bem e permita que o substrato drene e se aproxime da secagem antes da próxima irrigação. No outono e inverno, reduza significativamente a frequência conforme a atividade cair, mas não provoque desidratação severa dos pseudobulbos.",
    suporte: "🥇 Vaso de barro pequeno a médio, muito bem drenado.\n🥈 Cachepô de madeira bastante vazado.\n🥉 Vaso plástico muito perfurado com mistura extremamente aberta.\nMontagem nua não é a primeira opção no litoral por aumentar demais a oscilação hídrica.",
    substrato: "🥇 Casca de macadâmia média + pinus médio + pedra-pomes + carvão vegetal.\n🥈 Chips de coco grossos + pedra-pomes + carvão + pinus médio, com secagem clara entre regas.\n🥉 Pinus médio/grosso + pedra-pomes + carvão + chips de coco em baixa proporção.\n⭐ Alternativa: Casca de macadâmia + argila expandida + carvão vegetal + pinus grosso.",
    errosComuns: "• Manter Bifrenaria verboonenii como espécie aceita independente.\n• Cultivar em local quente e abafado.\n• Tratar a planta como rupícola obrigatoriamente mineral.\n• Secar excessivamente durante crescimento ativo.\n• Impor repouso totalmente seco por meses.\n• Replantar sem raízes novas começando a surgir.\n• Usar substrato compacto.\n• Permitir sol forte aquecendo vaso e raízes.",
    dica: "🏆 No litoral, preocupe-se mais com a temperatura das raízes do que com reproduzir uma fenda de rocha. Use vaso de barro ou cachepô ventilado com casca grossa, pedra-pomes e carvão. Regue bem no crescimento e aumente os intervalos no inverno. Replante quando o novo crescimento começar a emitir as primeiras pontas de raízes. Em Litoral de clima quente, mantenha a planta no ponto mais fresco e ventilado do orquidário.",
    indiceAdaptacaoRegional: {
        versao: "IAR 1.1",
        escala: "compatibilidade",
        litoralQuente: {
            indice: 52,
            estrelas: 3,
            fatores: {
                habitatNatural: { nota: 3, peso: 30 },
                temperatura: { nota: 3, peso: 30 },
                aguaUmidade: { nota: 3, peso: 5 },
                ventilacao: { nota: 4, peso: 5 },
                luminosidade: { nota: 3, peso: 5 },
                sazonalidade: { nota: 2, peso: 5 },
                floracao: { nota: 1, peso: 20 }
            }
        },
        montanhaFrio: {
            indice: 83,
            estrelas: 5,
            fatores: {
                habitatNatural: { nota: 5, peso: 30 },
                temperatura: { nota: 3, peso: 30 },
                aguaUmidade: { nota: 3, peso: 5 },
                ventilacao: { nota: 4, peso: 5 },
                luminosidade: { nota: 3, peso: 5 },
                sazonalidade: { nota: 5, peso: 5 },
                floracao: { nota: 5, peso: 20 }
            }
        }
    },
    adaptacaoRegional: {
        litoralQuente: { texto: "Difícil Noites quentes persistentes são o principal gargalo. Evite telhados, paredes quentes e recipientes que acumulem calor." },
        montanhaFrio: { texto: "Noites frescas e inverno mais seco reproduzem muito melhor as condições naturais." }
    },
    mesesFloracao: [9, 10, 11, 12],
    "selosCultivo": {
        "rega": { "nivel": "moderada", "regime": "reduzir-inverno" },
        "climaFloracao": { "faixa": "ameno", "quedaTermica": true }
    },
    avaliacoes: {
        cultivo: 4,
        floracao: 3,
        perfume: 4,
        luminosidade: 4,
        agua: 3,
        raridade: 4
    }
};
