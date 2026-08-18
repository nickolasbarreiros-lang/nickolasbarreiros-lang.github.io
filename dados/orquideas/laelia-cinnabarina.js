// Ficha científica e de cultivo revisada — Refinamento Lote 09.
// ID e nome de arquivo históricos preservados; nome atual exibido como Cattleya cinnabarina.

export const laeliaCinnabarina = {
    id: "laelia-cinnabarina",
    nome: "Cattleya cinnabarina",
    genero: "Cattleya",
    sinonimo: "Laelia cinnabarina",
    tipo: "Espécie botânica — grupo histórico das Laelias rupícolas",
    dificuldade: "Moderada",
    caracteristicas: [
        "Espécie brasileira",
        "Flores laranja-cinábrio",
        "Hastes altas e multiflorais",
        "Luminosidade muito alta",
        "Sem perfume significativo",
        "Raízes muito aeradas"
    ],
    fotos: [
        "imagens/Cattleya cinnabarina/Cattleya cinnabarina1.webp",
        "imagens/Cattleya cinnabarina/Cattleya cinnabarina2.jpg",
        "imagens/Cattleya cinnabarina/Cattleya cinnabarina3.jpg"
    ],
    descricao: "Uma explosão de laranja nas montanhas do Sudeste! Cattleya cinnabarina chama atenção pelas flores estreladas em intenso tom cinábrio, geralmente reunidas em hastes altas que podem chegar perto de 60 cm. Na natureza cresce sobre rochas entre gramíneas, sobretudo em áreas serranas de Minas Gerais e Rio de Janeiro, aproximadamente entre 800 e 1.500 m. Apesar do aspecto de planta de ambiente seco, ela floresce melhor quando recebe muita luz, raízes bem arejadas e água suficiente durante o crescimento — o excesso de calor nas raízes é um problema maior que a falta de um “repouso seco”.",
    origem: "Brasil.",
    regiao: "Minas Gerais e Rio de Janeiro.",
    habitat: "Afloramentos rochosos · ~800–1.500 m.",
    clima: "Intermediário a fresco · alta luz · ventilado.",
    climaFloracao: "Pseudobulbos maduros, alta luminosidade e boa diferença térmica entre dia e noite favorecem a floração. No litoral, preserve claridade elevada, mas evite que vaso e pedras acumulem calor; reduza a rega apenas conforme a atividade diminui, sem criar seca artificial extrema.",
    iluminacao: {
        sombrite: "30% a 50% — 40% a 50% no litoral quente",
        solDireto: "Somente suave e após aclimatação",
        horario: "Bem cedo pela manhã",
        observacoes: "Necessita muita claridade, mas não use horários fixos como regra. No verão de litoral quente, priorize 40% a 50% de sombreamento e circulação intensa. Crescimento compacto e pseudobulbos firmes são indicadores melhores que buscar avermelhamento das folhas."
    },
    floracao: "Principalmente do fim do inverno à primavera. As hastes podem atingir cerca de 60 cm e carregar aproximadamente 5–15 flores duráveis, geralmente com cerca de 6 cm e forte coloração laranja-cinábrio.",
    adubacao: "🌿 Orgânica: Bokashi é opcional e deve ser usado em quantidade mínima, preferencialmente em sachê.\n💧 Foliar/mineral: NPK equilibrado, como 20-20-20, em cerca de 1/4 da dose a cada 7 a 15 dias durante brotação e enraizamento.\n🧪 Maturação: reduza gradualmente a frequência da adubação e evite excesso de nitrogênio. Não é necessário recorrer a formulações extremamente ricas em fósforo para obter floração.",
    rega: "No crescimento ativo, molhe completamente e permita drenagem rápida e forte oxigenação. Deixe o meio se aproximar da secagem antes da próxima rega, sem submeter a planta a sede crônica. Quando o crescimento desacelerar, aumente moderadamente o intervalo entre as irrigações, sobretudo em períodos mais frios e úmidos.",
    suporte: "🥇 Vaso de barro baixo, tipo cuia, com excelente aeração.\n🥈 Cesto baixo e muito vazado.\n🥉 Pedra porosa ou montagem mineral bem fixada.\nPlaca de madeira pode funcionar, mas não é necessária como primeira escolha para este grupo.",
    substrato: "🥇 Pedra-pomes + brita fina/média + casca de macadâmia triturada, com pequena fração de pinus.\n🥈 Macadâmia grossa + pedra-pomes + cacos de cerâmica/argila expandida, mantendo o colo totalmente aerado.\n🥉 Pedra-pomes + argila expandida + carvão vegetal + casca de pinus grossa em baixa proporção.\n⭐ Alternativa: Brita + pedra-pomes + carvão vegetal, acrescentando apenas 15–25% de componente orgânico grosso.",
    errosComuns: "• Sombra excessiva e pseudobulbos estiolados.\n• Vaso ou pedra superaquecendo sob sol forte.\n• Substrato fino, compacto ou permanentemente molhado.\n• Confundir hábito rupícola com ausência de necessidade hídrica.\n• Repouso seco exagerado.\n• Vaso profundo e fechado, com centro quente e úmido.\n• Adubação concentrada e salinização.\n• Pouca ventilação no verão litorâneo.",
    dica: "🏆 Dê muita luz sem cozinhar as raízes. Um vaso baixo, muito aerado e predominantemente mineral funciona bem, mas deve ficar protegido do sol forte que aquece pedra e barro. Durante o crescimento, regue de verdade; depois, reduza gradualmente conforme a planta desacelera.",
    indiceAdaptacaoRegional: {
        versao: "IAR 1.1",
        escala: "compatibilidade",
        litoralQuente: {
            indice: 63,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 3, peso: 30 },
                temperatura: { nota: 3, peso: 30 },
                aguaUmidade: { nota: 3, peso: 5 },
                ventilacao: { nota: 4, peso: 5 },
                luminosidade: { nota: 4, peso: 5 },
                sazonalidade: { nota: 4, peso: 5 },
                floracao: { nota: 3, peso: 20 }
            }
        },
        montanhaFrio: {
            indice: 87,
            estrelas: 5,
            fatores: {
                habitatNatural: { nota: 5, peso: 30 },
                temperatura: { nota: 5, peso: 30 },
                aguaUmidade: { nota: 3, peso: 5 },
                ventilacao: { nota: 4, peso: 5 },
                luminosidade: { nota: 4, peso: 5 },
                sazonalidade: { nota: 4, peso: 5 },
                floracao: { nota: 3, peso: 20 }
            }
        }
    },
    adaptacaoRegional: {
        litoralQuente: { texto: "Cultive no ponto mais claro, fresco e ventilado disponível, evitando telhados, paredes e pedras que acumulem calor." },
        montanhaFrio: { texto: "Em locais luminosos e ventilados. Proteja de geadas fortes e reduza regas quando frio e umidade prolongarem a secagem." }
    },
    mesesFloracao: [10, 11, 12, 1, 2],
    "selosCultivo": {
        "rega": { "nivel": "moderada", "regime": "reduzir-repouso" },
        "climaFloracao": { "faixa": "ameno" }
    },
    indiceDificuldadeCultivo: {
        versao: "IDC 2.0",
        referenciaRegional: "Litoral de clima quente",
        indice: 38,
        nivel: "Moderada",
        fatores: {
            temperatura: { nota: 3, peso: 18 },
            agua: { nota: 1, peso: 15 },
            umidadeVentilacao: { nota: 1, peso: 12 },
            luminosidade: { nota: 1, peso: 8 },
            raizes: { nota: 1, peso: 15 },
            cicloRepouso: { nota: 4, peso: 12 },
            floracao: { nota: 2, peso: 20 }
        }
    },
    avaliacoes: {
        cultivo: 2,
        floracao: 4,
        perfume: 1,
        luminosidade: 5,
        agua: 2,
        raridade: 3
    }
};
