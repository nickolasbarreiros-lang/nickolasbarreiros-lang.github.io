// Refinamento final — revisão consolidada com fontes botânicas e de cultivo.

export const dichaeaPendula = {
    id: "dichaea-pendula",
    nome: "Dichaea pendula",
    genero: "Dichaea",
    sinonimo: "Dichaea echinocarpa",
    tipo: "Espécie botânica",
    dificuldade: "Moderada",
    caracteristicas: [
        "Espécie neotropical",
        "Crescimento pendente",
        "Hastes pendentes e flexíveis",
        "Folhas em duas fileiras",
        "Sem pseudobulbos",
        "Flores axilares pequenas, com sépalas de 6–9 mm",
        "Alta umidade ambiental",
        "Ocorre em florestas úmidas de diferentes altitudes"
    ],
    fotos: [
        "imagens/Dichaea pendula/Dichaea pendula1.jpeg",
        "imagens/Dichaea pendula/Dichaea pendula2.webp",
        "imagens/Dichaea pendula/Dichaea pendula3.jpeg",
        "imagens/Dichaea pendula/Dichaea pendula4.webp"
    ],
    descricao: "Dichaea pendula forma longas hastes flexíveis que se arqueiam e pendem, revestidas por pequenas folhas em duas fileiras. Sem pseudobulbos, a planta lembra uma delicada cortina verde, pontuada por flores solitárias que surgem nas axilas das folhas. As flores são discretas, geralmente amareladas, com sépalas de poucos milímetros e labelo de formato característico. Seus frutos podem apresentar pequenas projeções na superfície, detalhe útil para reconhecer a espécie. Distribui-se amplamente pela América tropical, em florestas úmidas de diferentes altitudes. No Brasil, há registros tanto em ambientes amazônicos quanto em florestas da Mata Atlântica.",
    origem: "América Tropical",
    regiao: "Caribe · América Central · América do Sul",
    habitat: "Florestas úmidas tropicais · epífita ou rupícola · altitude variável.",
    clima: "Quente a intermediário; populações montanas toleram condições mais frescas.",
    climaFloracao: "A espécie ocorre tanto em florestas úmidas de terras baixas quanto em populações montanas; não se deve exigir noites frias para todas as procedências. Alta umidade atmosférica e pouca oscilação hídrica favorecem raízes finas. IOSPE registra floração na primavera e no verão. Não há evidência específica suficiente para atribuir indução floral a uma estação local fixa; mantenha a planta ativa e hidratada. Não possui repouso seco verdadeiro.",
    iluminacao: {
        sombrite: "60% a 70%",
        solDireto: "Não permitido",
        horario: "Não permitido",
        observacoes: "Prefere sombra clara de sub-bosque. Luz insuficiente deixa as hastes fracas; sol direto, principalmente associado a calor, desidrata rapidamente folhas e raízes finas."
    },
    floracao: "IOSPE cita floração na primavera e no verão em seu contexto, mas não há levantamento regional de exsicatas suficiente para fixar meses universais de floração no Brasil. As flores surgem individualmente em pequenas hastes axilares ao longo dos ramos e podem aparecer sucessivamente em uma planta bem estabelecida.",
    adubacao: "🌿 Orgânica: use bokashi apenas em quantidade mínima e longe das raízes ativas.\n💧 Mineral/Foliar: NPK equilibrado em 1/4 da dose a cada 10–15 dias durante crescimento ativo.\n🌱 Crescimento: mantenha nutrição leve e contínua, pois a espécie não apresenta repouso seco marcado.\n🧪 Liberação lenta: geralmente desnecessária; em vasos, use pouquíssimos grânulos.\n🚿 Lavagem: enxágue o suporte periodicamente para evitar acúmulo de sais nas raízes finas.",
    rega: "Mantenha as raízes regularmente úmidas, sem permitir secas prolongadas. Em placas, regas diárias podem ser necessárias no verão. A frequência deve cair quando a evaporação diminuir, mas nunca ao ponto de desidratar completamente a planta. Regue preferencialmente pela manhã e garanta ventilação suficiente para que a água não permaneça acumulada entre bainhas e folhas durante a noite.",
    suporte: "🥇 Placa vertical de cortiça ou madeira com fina camada de esfagno — favorece o hábito pendente e a aeração.\n🥈 Cesto suspenso pequeno — permite que as hastes cresçam livres.\n🥉 Vaso estreito e muito ventilado — útil quando a umidade ambiental é menor.\nMantenha espaço livre abaixo da planta para o desenvolvimento natural dos ramos.",
    substrato: ["Casca de pinus média + perlita grossa + carvão vegetal miúdo + pequena fração de esfagno de fibra longa solto","Chips de coco pequenos lavados + casca de pinus fina/média + pequena fração de esfagno de fibra longa solto"],
    formasCultivo: {
        perfilVisual: "dichaea-epifita-pendente-umida",
        destaque: "Placa / tronco",
        resumo: "Epífita pendente sem pseudobulbos, sensível à seca prolongada e ao calor noturno abafado. Prefere montagem vertical com umidade frequente, sombra luminosa e circulação de ar.",
        metodos: [
            { nome: "Placa / tronco", asset: "placa-tronco", estrelas: 5, status: "Mais recomendado na ficha", texto: "Placa vertical de cortiça ou madeira com esfagno fino e solto junto às raízes; deixar espaço livre abaixo para os ramos pendentes." },
            { nome: "Cachepô de Madeira", asset: "cesto-madeira", estrelas: 5, status: "Muito recomendado", texto: "Cachepô pequeno e suspenso, com mistura leve e úmida, permitindo que as hastes se desenvolvam livremente." },
            { nome: "Vaso plástico vasado", asset: "vaso-plastico-vasado", estrelas: 4, status: "Alternativa", texto: "Recipiente estreito, bem ventilado e suspenso, útil quando a umidade ambiental for menor." },
            { nome: "Vaso de Barro", asset: "vaso-barro", estrelas: 3, status: "Uso condicional", texto: "Vaso pequeno e raso, mantido em posição alta; exige atenção à secagem rápida e à hidratação das hastes." }
        ]
    },
    substratoVisual: {
        titulo: "Substrato ideal",
        contexto: "Mistura para cachepô ou vaso; montagem principal usa apenas esfagno fino junto às raízes",
        resumo: "Partículas pequenas a médias que preservam umidade uniforme e aeração, sem formar massa compacta.",
        justificativa: "A receita 40/35/25 para vaso ou cachepô é hipótese horticultural sem ensaio específico da espécie; a montagem principal em placa/tronco não exige percentuais volumétricos. Dichaea pendula apresenta raízes finas e não possui pseudobulbos para armazenar água, por isso precisa de umidade regular sem compactação. A montagem vertical em placa ou tronco utiliza apenas uma camada fina de esfagno solto junto às raízes. Em cachepô ou vaso ventilado, os chips de coco preparados e a casca de pinus oferecem apoio e retenção moderada, enquanto a perlita mantém espaços de ar. Observe a secagem e ajuste as regas para evitar tanto o encharcamento quanto a desidratação.",
        receitaTexto: "Proposta horticultural NÃO HOMOLOGADA para vaso/cachepô: 40% chips de coco pequenos lavados + 35% casca de pinus fina/média + 25% perlita grossa. Na montagem principal em placa/tronco, não se aplicam percentuais volumétricos.",
        perfil: ["Epífita pendente", "Sem pseudobulbos", "Umidade frequente", "Sombra luminosa", "Boa circulação de ar"],
        comportamento: [
            { nome: "Retenção", valor: 4, icone: "💧" },
            { nome: "Aeração", valor: 4, icone: "💨" },
            { nome: "Secagem", valor: 2, icone: "⚡" },
            { nome: "Compactação", valor: 2, icone: "🧱" }
        ],
        itens: [
            { asset: "chips-coco", nome: "Chips de coco pequenos lavados", proporcao: "40%", nota: "umidade", finalidade: "Ajuda a manter umidade frequente sem encharcar." },
            { asset: "casca-pinus", nome: "Casca de pinus fina/média", proporcao: "35%", nota: "estrutura", finalidade: "Oferece apoio às raízes e espaços de ar." },
            { asset: "perlita", nome: "Perlita grossa", proporcao: "25%", nota: "aeração", finalidade: "Reduz compactação e favorece drenagem." }
        ],
        alerta: "Evitar secagem completa, sol direto forte, calor noturno abafado e água parada nas axilas. Regar de modo a hidratar as raízes sem prolongar o molhamento das folhas.",
        notaEvidencia: "MACS 1.1 — revisão documental: Dichaea pendula, epífita pendente sem pseudobulbos, exige umidade frequente, aeração e proteção contra secas prolongadas. Suportes placa/tronco e cachepô madeira 5 estrelas, plástico vasado 4, barro 3; estimativas sem validação específica. Receita visual para recipiente 40% chips coco pequenos + 35% pinus fino/médio + 25% perlita grossa = 100%; receitaTexto e itens concordam. Receita principal textual e visual coincidem; duas alternativas qualitativas distintas, sendo a segunda uma inferência horticultural explicitamente identificada. Montagem principal em placa com fina camada de esfagno difere da receita visual para cesto/vaso. Avaliar retenção e secagem para espécie sem pseudobulbos; meta até 25 produtores brasileiros específicos não atingida. Percentuais e estrelas NÃO HOMOLOGADOS."
    },
    errosComuns: "Deixar secar completamente; cultivar em calor noturno abafado; baixa umidade do ar; água parada nas axilas; sol direto forte; esfagno velho e compacto; vaso profundo; excesso de adubo; regas noturnas frequentes; falta de espaço para as hastes pendentes.",
    dica: "Não interprete a necessidade de umidade como necessidade de encharcamento. Em litoral quente, a melhor combinação é suporte pequeno, umidade atmosférica alta, regas frequentes e muita circulação de ar. Se as hastes começarem a enrugar, aumente a frequência das regas; se houver manchas escuras e tecidos moles nas bainhas, aumente imediatamente a ventilação e reduza o tempo de molhamento.",
    revisaoCientificaIAR: {
        "nome": "Dichaea pendula",
        "statusTaxonomico": "Dichaea pendula aceita em POWO; Dichaea echinocarpa é sinônimo heterotípico ilegítimo.",
        "sinonimosPrincipais": "Limodorum pendulum (basiônimo); Dichaea echinocarpa e Cymbidium echinocarpon (sinônimos heterotípicos).",
        "morfologiaDimensoes": "Caules pendentes, folhas dísticas com base não articulada, pedúnculo geniculado, flores axilares amareladas com sépalas de 6–9 mm e frutos muricados (Flora do Brasil, WFO).",
        "habitatAltitudeClima": "Epífita ou rupícola em florestas úmidas amazônicas e atlânticas, inclusive matas ciliares; altitude variável, não restrita a montanhas.",
        "distribuicaoGeografica": "Caribe, América Central e América do Sul.",
        "cultivoPremiacao": "Sem ensaio brasileiro específico de substrato confirmado nesta passagem; recomendações de montagem e rega são inferências de manejo.",
        "confianca": "alta",
        "fontes": [
            "POWO/Kew",
            "WFO/IPNI",
            "GBIF/Tropicos",
            "IOSPE/OrchidSpecies"
        ]
    },
    indiceDificuldadeCultivo: {
        "versao": "IDC 3.2 — selo por facilidade",
        "escala": "dificuldade",
        "indice": 36,
        "classificacao": "Moderada",
        "cultivoEstrelas": 3,
        "criterios": {
            "temperatura": {
                "notaDificuldade": 2,
                "peso": 15
            },
            "rega": {
                "notaDificuldade": 2,
                "peso": 15
            },
            "umidade": {
                "notaDificuldade": 2,
                "peso": 10
            },
            "ventilacao": {
                "notaDificuldade": 2,
                "peso": 10
            },
            "luminosidade": {
                "notaDificuldade": 1,
                "peso": 10
            },
            "raizesSubstrato": {
                "notaDificuldade": 2,
                "peso": 10
            },
            "sazonalidade": {
                "notaDificuldade": 1,
                "peso": 10
            },
            "floracao": {
                "notaDificuldade": 2,
                "peso": 20
            }
        },
        "faixas": {
            "facil": "0–25",
            "moderada": "26–50",
            "dificil": "51–89",
            "extrema": "90–100"
        }
    },
    indiceAdaptacaoRegional: {
        "versao": "IAR 2.0 — revisão científica",
        "escala": "compatibilidade regional",
        "metodo": "notas atribuídas manualmente após confronto das fontes botânicas e horticulturais; não derivadas do texto da ficha",
        "litoralQuente": {
            "indice": 95,
            "estrelas": 5,
            "fatores": {
                "habitatNatural": {
                    "nota": 5,
                    "peso": 30
                },
                "temperatura": {
                    "nota": 5,
                    "peso": 30
                },
                "aguaUmidade": {
                    "nota": 5,
                    "peso": 5
                },
                "ventilacao": {
                    "nota": 4,
                    "peso": 5
                },
                "luminosidade": {
                    "nota": 2,
                    "peso": 5
                },
                "sazonalidade": {
                    "nota": 4,
                    "peso": 5
                },
                "floracao": {
                    "nota": 5,
                    "peso": 20
                }
            }
        },
        "montanhaFrio": {
            "indice": 80,
            "estrelas": 4,
            "fatores": {
                "habitatNatural": {
                    "nota": 4,
                    "peso": 30
                },
                "temperatura": {
                    "nota": 4,
                    "peso": 30
                },
                "aguaUmidade": {
                    "nota": 5,
                    "peso": 5
                },
                "ventilacao": {
                    "nota": 4,
                    "peso": 5
                },
                "luminosidade": {
                    "nota": 3,
                    "peso": 5
                },
                "sazonalidade": {
                    "nota": 4,
                    "peso": 5
                },
                "floracao": {
                    "nota": 4,
                    "peso": 20
                }
            }
        }
    },
        adaptacaoRegional: {
        litoralQuente: { texto: "Boa compatibilidade potencial com litoral quente e úmido, conforme o IAR 95/100; mantenha sombra clara, umidade regular e ventilação, evitando calor noturno abafado e secagem das raízes." },
        montanhaFrio: { texto: "Boa adaptação potencial em condições intermediárias e frescas, conforme o IAR 80/100, desde que não haja geada, vento seco ou secagem prolongada." }
    },
    mesesFloracao: [],
    "selosCultivo": {
        "rega": { "nivel": "muito-frequente" },
        "climaFloracao": { "faixa": "ameno", "quedaTermica": true }
    },
        avaliacoes: {
        cultivo: 3,
        floracao: 3,
        perfume: 1,
        luminosidade: 2,
        agua: 5,
        raridade: 3
    }
};
