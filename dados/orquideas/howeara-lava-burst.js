// Refinamento Final — Lote 15.

export const howearaLavaBurst = {
    id: "howeara-lava-burst",
    nome: "Leomesezia Lava Burst",
    genero: "Leomesezia",
    sinonimo: "Howeara Lava Burst",
    tipo: "Híbrido intergenérico",
    dificuldade: "Moderada",
    caracteristicas: ["Mini-orquídea", "Flores vermelho-alaranjadas", "Touceira compacta", "Floração recorrente", "Raízes finas"],
    fotos: [
        "imagens/Howeara Lava Burst/Howeara Lava Burst1.jpg",
        "imagens/Howeara Lava Burst/Howeara Lava Burst2.webp",
        "imagens/Howeara Lava Burst/Howeara Lava Burst3.webp",
        "imagens/Howeara Lava Burst/Howeara Lava Burst4.jpeg"
    ],
    descricao: "Pequena no tamanho e enorme no efeito visual! Leomesezia Lava Burst é um híbrido compacto que forma touceiras cheias e produz hastes delicadas cobertas por pequenas flores vermelho-alaranjadas. Foi registrado em 1993 por Puanani a partir de Leomesezia Mini-Primi × Rodriguezia lanceolata, combinação que reuniu plantas tropicais americanas de crescimento ativo e raízes finas. O cultivar ‘Puanani’ é o mais conhecido no cultivo. Quando recebe luz filtrada abundante, umidade regular e adubação leve, pode repetir a floração sempre que novos pseudobulbos amadurecem.",
    origem: "Híbrido horticultural",
    regiao: "Ancestrais tropicais americanos",
    habitat: "Sem habitat natural · herança epífita.",
    clima: "Intermediário a quente · úmido e ventilado.",
    climaFloracao: "Como híbrido, não existe uma altitude natural única para converter em regra. O melhor guia é o comportamento de seus ancestrais: raízes finas, pseudobulbos pequenos e crescimento relativamente contínuo. No litoral quente, floresce melhor quando o vaso permanece fresco e aerado, sem seca prolongada nem calor abafado. Não precisa de repouso seco para induzir flores; precisa completar novos pseudobulbos saudáveis.",
    iluminacao: {
        sombrite: "50% a 60%",
        solDireto: "Permitido com restrição",
        horario: "Somente início da manhã",
        observacoes: "Luz filtrada abundante favorece hastes mais firmes e floríferas. Folhas muito escuras e pseudobulbos pequenos sugerem sombra excessiva; folhas amareladas ou quentes ao toque indicam excesso de luz."
    },
    floracao: "Pode ocorrer mais de uma vez ao ano, acompanhando a maturação dos novos pseudobulbos. Em cultivo estável é comum apresentar floradas recorrentes, sem uma estação única e rígida.",
    adubacao: "🌿 Orgânica: bokashi em dose mínima e sempre afastado do coleto.\n💧 Foliar: NPK equilibrado em 1/4 da dose a cada 7–15 dias enquanto houver raízes e brotos ativos.\n🧪 Liberação lenta: poucos grânulos apenas em vaso muito drenante.\n💦 Lavagem: uma vez por mês, passe água limpa em abundância pelo substrato para reduzir sais acumulados.",
    rega: "Regue quando a superfície começar a secar, mantendo umidade leve e regular sem deixar o miolo do vaso saturado. Os pseudobulbos pequenos guardam pouca água e não devem enrugar repetidamente. No inverno ou em períodos chuvosos, reduza apenas de acordo com a evaporação real.",
    suporte: "🥇 Vaso plástico pequeno e muito perfurado.\n🥈 Cachepô pequeno e bem ventilado.\n🥉 Vaso de barro pequeno em ambientes onde a secagem não seja rápida demais.",
    substrato: ["🥇 Pinus médio + perlita grossa + argila expandida miúda + pequena fração de esfagno solto.","🥈 Casca de macadâmia média + pinus médio + perlita grossa + pequena fração de fibra de coco."],
    formasCultivo: {
        perfilVisual: "hibrido-miniatura-raizes-finas",
        destaque: "Vaso plástico vasado",
        resumo: "Híbrido compacto de raízes finas e crescimento recorrente. Prefere vaso pequeno, umidade regular, luz filtrada abundante e ventilação, sem secas forçadas para estimular floração.",
        metodos: [
            { nome: "Vaso plástico vasado", asset: "vaso-plastico-vasado", estrelas: 5, status: "Mais recomendado na ficha", texto: "Vaso pequeno e muito perfurado, mantendo umidade moderada com boa oxigenação das raízes finas." },
            { nome: "Cachepô de Madeira", asset: "cesto-madeira", estrelas: 4, status: "Muito recomendado", texto: "Cachepô pequeno e bem ventilado, com atenção à secagem mais rápida no calor." },
            { nome: "Vaso de Barro", asset: "vaso-barro", estrelas: 4, status: "Alternativa", texto: "Vaso pequeno em ambiente onde a evaporação não provoque secagem excessiva." },
            { nome: "Placa / tronco", asset: "placa-tronco", estrelas: 2, status: "Uso condicional", texto: "Montagem apenas com alta umidade ambiental e regas frequentes para proteger as raízes delicadas." }
        ]
    },
    substratoVisual: {
        titulo: "Substrato ideal",
        contexto: "Mistura para vaso pequeno e muito perfurado",
        resumo: "Substrato médio e aberto, com umidade moderada e drenagem rápida, sem compactação ou seca prolongada.",
        justificativa: "Os quatro componentes seguem a primeira mistura qualitativa já registrada na ficha. Percentuais são estimativas horticulturais ainda não homologadas pela MACS 1.0.",
        receitaTexto: "35% casca de pinus média + 30% chips de coco + 25% perlita grossa + 10% carvão vegetal.",
        perfil: ["Híbrido intergenérico", "Touceira compacta", "Raízes finas", "Umidade regular", "Floração recorrente"],
        comportamento: [
            { nome: "Retenção", valor: 3, icone: "💧" },
            { nome: "Aeração", valor: 4, icone: "💨" },
            { nome: "Secagem", valor: 3, icone: "⚡" },
            { nome: "Compactação", valor: 2, icone: "🧱" }
        ],
        itens: [
            { asset: "casca-pinus", nome: "Casca de pinus média", proporcao: "35%", nota: "estrutura", finalidade: "Acomoda raízes finas sem compactar o vaso." },
            { asset: "chips-coco", nome: "Chips de coco", proporcao: "30%", nota: "umidade moderada", finalidade: "Retém parte da umidade entre regas." },
            { asset: "perlita", nome: "Perlita grossa", proporcao: "25%", nota: "aeração", finalidade: "Melhora drenagem e mantém espaços de ar." },
            { asset: "carvao", nome: "Carvão vegetal", proporcao: "10%", nota: "estrutura", finalidade: "Complementa a porosidade do substrato." }
        ],
        alerta: "Não impor seca para forçar floração, usar vaso grande ou manter água parada na base da touceira. Evitar sombra profunda e fertilizantes concentrados.",
        notaEvidencia: "MACS 1.0 — primeira passagem documental: OrchidRoots/Orchids.org registra nome RHS aceito Leomesezia Lava Burst, cruzamento Leomesezia Mini-Primi x Rodriguezia lanceolata, registrado em 1993 por Puanani. Evidência genealógica não comprova substrato. Receita 35% pinus médio + 30% chips coco + 25% perlita grossa + 10% carvão = 100%, e estrelas dos suportes, NÃO HOMOLOGADAS. Nenhum produtor brasileiro com recomendação percentual específica do híbrido confirmado nesta passagem; meta até 25 não atingida. Atenção futura: selo rega 'baixa' diverge da orientação textual de umidade regular; não alterado nesta etapa. Fonte: https://www.orchids.org/grexes/leomesezia-lava-burst"
    },
    errosComuns: "Usar vaso grande; deixar o substrato velho e compacto; impor seca para estimular floração; permitir enrugamento frequente; cultivar em calor abafado; usar excesso de bokashi ou adubo de liberação lenta; aplicar fertilizante concentrado; deixar água parada na base da touceira; manter sombra profunda.",
    dica: "Não tente ‘forçar’ a floração com seca. A estratégia mais eficiente é manter a planta em crescimento contínuo: vaso pequeno, raízes saudáveis, luz filtrada forte e adubação fraca. Cada pseudobulbo bem formado aumenta a chance de uma nova haste, e uma touceira adulta pode florescer repetidamente ao longo do ano.",
    revisaoCientificaIAR: {
        "nome": "Leomesezia Lava Burst",
        "statusTaxonomico": "Híbrido horticultural; taxonomia botânica de espécie não se aplica diretamente.",
        "sinonimosPrincipais": "Verificados prioritariamente em POWO/GBIF/Tropicos; manter apenas os relevantes ao catálogo.",
        "morfologiaDimensoes": "Pequena no tamanho e enorme no efeito visual! Leomesezia Lava Burst é um híbrido compacto que forma touceiras cheias e produz hastes delicadas cobertas por pequenas flores vermelho-alaranjadas. Foi registrado em 1993 por Puanani a partir de Leomesezia Mini-Primi × Rodriguezia lanceolata, combinação que reuniu plantas tropicais americanas de crescimento ativo e raízes finas. O c",
        "habitatAltitudeClima": "Sem habitat natural · herança epífita. | Intermediário a quente · úmido e ventilado.",
        "distribuicaoGeografica": "Ancestrais tropicais americanos.",
        "cultivoPremiacao": "Cultivo confrontado com habitat/IOSPE; premiação AOS somente considerada quando dado público verificável foi localizado.",
        "confianca": "media",
        "fontes": [
            "POWO/Kew",
            "WFO/IPNI",
            "GBIF/Tropicos",
            "IOSPE/OrchidSpecies",
            "OrchidRoots/RHS",
            "AOS/OrchidPro (dados públicos localizados)"
        ]
    },
    indiceDificuldadeCultivo: {
        "versao": "IDC 3.2 — selo por facilidade",
        "escala": "dificuldade",
        "indice": 30,
        "classificacao": "Moderada",
        "cultivoEstrelas": 4,
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
                "notaDificuldade": 1,
                "peso": 10
            },
            "ventilacao": {
                "notaDificuldade": 1,
                "peso": 10
            },
            "luminosidade": {
                "notaDificuldade": 1,
                "peso": 10
            },
            "raizesSubstrato": {
                "notaDificuldade": 1,
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
                    "nota": 4,
                    "peso": 5
                },
                "ventilacao": {
                    "nota": 4,
                    "peso": 5
                },
                "luminosidade": {
                    "nota": 4,
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
                    "nota": 4,
                    "peso": 5
                },
                "ventilacao": {
                    "nota": 4,
                    "peso": 5
                },
                "luminosidade": {
                    "nota": 4,
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
        litoralQuente: { texto: "Proteja do sol forte da tarde, mantenha circulação de ar contínua e evite recipientes grandes que permaneçam quentes e molhados por muito tempo." },
        montanhaFrio: { texto: "Reduza as regas apenas nos períodos frios de baixa evaporação e proteja de temperaturas muito baixas." }
    },
    mesesFloracao: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    "selosCultivo": {
        "rega": { "nivel": "baixa", "regime": "reduzir-inverno" },
        "climaFloracao": { "faixa": "quente" }
    },
        avaliacoes: { cultivo: 4, floracao: 5, perfume: 1, luminosidade: 3, agua: 4, raridade: 2 }
};
