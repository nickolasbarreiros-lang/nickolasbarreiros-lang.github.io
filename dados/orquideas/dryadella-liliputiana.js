// Refinamento final — revisão consolidada com fontes botânicas e de cultivo.
// ID histórico mantido para preservar links do site; grafia científica exibida como Dryadella lilliputiana.

export const dryadellaLiliputiana = {
    id: "dryadella-liliputiana",
    nome: "Dryadella lilliputiana",
    genero: "Dryadella",
    sinonimo: "Masdevallia lilliputiana",
    tipo: "Espécie botânica",
    dificuldade: "Difícil",
    caracteristicas: [
        "Micro-orquídea",
        "Brasil e Bolívia",
        "Touceira minúscula",
        "Sem pseudobulbos",
        "Folhas carnosas",
        "Flores de cerca de 1 cm",
        "700–1.700 m",
        "Floração de inverno"
    ],
    fotos: [
        "imagens/Dryadella lilliputiana/Dryadella lilliputiana1.jpg",
        "imagens/Dryadella lilliputiana/Dryadella lilliputiana2.jpg",
        "imagens/Dryadella lilliputiana/Dryadella lilliputiana3.webp",
        "imagens/Dryadella lilliputiana/Dryadella lilliputiana4.webp"
    ],
    descricao: "Uma verdadeira lilliputiana entre as orquídeas! Esta micro-orquídea forma minúsculas touceiras de folhas estreitas e carnosas, sem pseudobulbos, e produz flores de cerca de 1 cm que parecem enormes quando comparadas ao tamanho da planta. O próprio epíteto lilliputiana faz referência ao seu porte diminuto. É encontrada no Sul e Sudeste do Brasil e também na Bolívia; registros de cultivo e habitat indicam populações em torno de 700 a 1.700 m. Por isso, gosta de ambiente úmido, bem ventilado e de temperaturas intermediárias a frescas, sendo o calor noturno prolongado um dos maiores desafios no litoral.",
    origem: "Brasil e Bolívia",
    regiao: "Sul/Sudeste do Brasil · Bolívia",
    habitat: "Epífita montana · ~700–1.700 m.",
    clima: "Intermediário a fresco · úmido e ventilado.",
    climaFloracao: "IOSPE registra floração no inverno e crescimento quente a fresco ao longo de sua faixa altitudinal. Em cultivo, a combinação mais favorável é touceira madura, umidade do ar alta, raízes oxigenadas e noites mais amenas. Não necessita de repouso seco. No litoral, o verão deve ser manejado reduzindo temperatura radicular e aumentando circulação de ar, não mantendo o substrato permanentemente saturado.",
    iluminacao: {
        sombrite: "Cerca de 70%",
        solDireto: "Não permitido",
        horario: "",
        observacoes: "Prefere sombra clara. Luz suficiente mantém folhas compactas, mas o excesso de radiação aquece rapidamente a pequena touceira e aumenta a desidratação."
    },
    floracao: "Mais característica no inverno. As numerosas inflorescências são muito curtas, cerca de 1,2–1,6 cm, e carregam flores solitárias posicionadas pouco abaixo da altura das folhas. Uma touceira adulta pode produzir várias flores ao mesmo tempo.",
    adubacao: "🌿 Orgânica: evite bokashi diretamente no pequeno recipiente, pois é difícil dosar sem aumentar decomposição e sais.\n💧 Mineral/Foliar: NPK equilibrado em 1/4 da dose a cada 10–15 dias durante crescimento ativo.\n🧪 Liberação lenta: não recomendada para recipientes tão pequenos.\n🚿 Lavagem: faça regas abundantes apenas com água periodicamente para remover sais.\n💧 Água: baixa condutividade é especialmente benéfica às raízes finas.",
    rega: "Mantenha umidade relativamente estável, mas nunca uma massa de substrato quente e saturada. Regue novamente quando o material ao redor das raízes estiver se aproximando da secagem. Em montagem com pouco musgo, pode exigir rega diária no verão; em vaso com esfagno, o intervalo deve ser maior. Evite tanto seca prolongada quanto encharcamento contínuo.",
    suporte: "🥇 Placa pequena de cortiça ou madeira com camada fina de esfagno — máxima aeração.\n🥈 Vaso miniatura de barro — ajuda a dissipar calor por evaporação.\n🥉 Cachepô pequeno e muito aberto — útil com mistura extremamente leve.\nMantenha a touceira íntegra e evite manipulações frequentes.",
    substrato: "🥇 Montagem em nó de pinho, cortiça ou madeira com uma lâmina fina de esfagno apenas sob as raízes.\n🥈 Casca de pinus fina + perlita + perlita grossa fina + pequena fração de esfagno solto.\n🥉 Chips de coco pequenos + perlita + casca de pinus fina, mantendo o conjunto leve e aerado.\n⭐ Alternativa: Esfagno de fibra longa usado muito solto + perlita grossa fina; evitar compactação junto ao rizoma.",
    formasCultivo: {
        perfilVisual: "microorquidea-montana-umida",
        destaque: "Placa / tronco",
        resumo: "Micro-orquídea montana sem pseudobulbos, sensível ao calor noturno acumulado, à seca prolongada e ao esfagno saturado. Prefere sombra luminosa, umidade frequente e circulação de ar.",
        metodos: [
            { nome: "Placa / tronco", asset: "placa-tronco", estrelas: 5, status: "Mais recomendado na ficha", texto: "Placa minúscula de cortiça ou madeira com lâmina fina de esfagno solto sob as raízes, mantendo a montagem úmida e arejada." },
            { nome: "Vaso de Barro", asset: "vaso-barro", estrelas: 4, status: "Alternativa recomendada", texto: "Vaso miniatura e raso, com substrato leve; a evaporação pode ajudar a moderar a temperatura quando há ventilação." },
            { nome: "Cachepô de Madeira", asset: "cesto-madeira", estrelas: 4, status: "Alternativa", texto: "Cachepô muito pequeno e aberto, com mistura de baixa compactação e hidratação frequente." },
            { nome: "Vaso plástico vasado", asset: "vaso-plastico-vasado", estrelas: 3, status: "Uso condicional", texto: "Recipiente miniatura e muito perfurado, sem acúmulo de água e protegido do aquecimento." }
        ]
    },
    substratoVisual: {
        titulo: "Substrato ideal",
        contexto: "Montagem principal com fina camada de esfagno; proposta para vaso miniatura ou cachepô",
        resumo: "Mistura fina e aberta, capaz de manter leve umidade sem saturar a base da microtouceira.",
        justificativa: "A montagem é a primeira recomendação original. A receita quantitativa utiliza os componentes da segunda alternativa, consolidando as granulometrias de perlita para evitar duplicação; percentuais não homologados pela MACS 1.0.",
        receitaTexto: "45% casca de pinus fina + 35% perlita de granulometria adequada a miniaturas + 20% esfagno de fibra longa solto.",
        perfil: ["Micro-orquídea montana", "Sem pseudobulbos", "Raízes delicadas", "Umidade frequente", "Noites amenas"],
        comportamento: [
            { nome: "Retenção", valor: 4, icone: "💧" },
            { nome: "Aeração", valor: 4, icone: "💨" },
            { nome: "Secagem", valor: 2, icone: "⚡" },
            { nome: "Compactação", valor: 2, icone: "🧱" }
        ],
        itens: [
            { asset: "casca-pinus", nome: "Casca de pinus fina", proporcao: "45%", nota: "estrutura", finalidade: "Oferece apoio para raízes pequenas sem compactação." },
            { asset: "perlita", nome: "Perlita calibrada", proporcao: "35%", nota: "aeração", finalidade: "Mantém espaços de ar e drenagem no recipiente miniatura." },
            { asset: "esfagno", nome: "Esfagno de fibra longa solto", proporcao: "20%", nota: "retenção leve", finalidade: "Reduz secagem excessiva sem formar bola saturada junto ao rizoma." }
        ],
        alerta: "Evitar noites quentes e abafadas, esfagno compactado ou encharcado, secagem por vários dias e divisão da touceira. Água em excesso não compensa temperatura elevada.",
        notaEvidencia: "Percentuais e estrelas são estimativas horticulturais não homologadas pela MACS 1.0. Conferência visual dos assets ainda pendente."
    },
    errosComuns: "Calor noturno acumulado; esfagno permanentemente encharcado; deixar secar por vários dias; água muito salina; adubação forte; pouca circulação de ar; dividir a touceira; vaso grande; exposição ao sol; tentar compensar calor com excesso de água no substrato.",
    dica: "O porte minúsculo exige estabilidade, não excesso. Em Litoral de clima quente, cultive em um ponto fresco, luminoso sem sol, com ar sempre em movimento. Uma montagem levemente úmida e regada com frequência costuma ser mais segura no verão do que uma bola de esfagno quente e saturada.",
    revisaoCientificaIAR: {
        "nome": "Dryadella lilliputiana",
        "statusTaxonomico": "Espécie/nome infraespecífico tratado como aceito na revisão taxonômica de referência.",
        "sinonimosPrincipais": "Verificados prioritariamente em POWO/GBIF/Tropicos; manter apenas os relevantes ao catálogo.",
        "morfologiaDimensoes": "Uma verdadeira lilliputiana entre as orquídeas! Esta micro-orquídea forma minúsculas touceiras de folhas estreitas e carnosas, sem pseudobulbos, e produz flores de cerca de 1 cm que parecem enormes quando comparadas ao tamanho da planta. O próprio epíteto lilliputiana faz referência ao seu porte diminuto. É encontrada no Sul e Sudeste do Brasil e também na Bolívia; registros de",
        "habitatAltitudeClima": "Epífita montana · ~700–1.700 m. | Intermediário a fresco · úmido e ventilado.",
        "distribuicaoGeografica": "Sul/Sudeste do Brasil · Bolívia.",
        "cultivoPremiacao": "Cultivo confrontado com habitat/IOSPE; premiação AOS somente considerada quando dado público verificável foi localizado.",
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
        "indice": 52,
        "classificacao": "Difícil",
        "cultivoEstrelas": 2,
        "criterios": {
            "temperatura": {
                "notaDificuldade": 3,
                "peso": 15
            },
            "rega": {
                "notaDificuldade": 3,
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
                "notaDificuldade": 3,
                "peso": 10
            },
            "raizesSubstrato": {
                "notaDificuldade": 2,
                "peso": 10
            },
            "sazonalidade": {
                "notaDificuldade": 2,
                "peso": 10
            },
            "floracao": {
                "notaDificuldade": 3,
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
            "indice": 47,
            "estrelas": 3,
            "fatores": {
                "habitatNatural": {
                    "nota": 2,
                    "peso": 30
                },
                "temperatura": {
                    "nota": 2,
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
                    "nota": 3,
                    "peso": 5
                },
                "sazonalidade": {
                    "nota": 4,
                    "peso": 5
                },
                "floracao": {
                    "nota": 2,
                    "peso": 20
                }
            }
        },
        "montanhaFrio": {
            "indice": 96,
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
                    "nota": 5,
                    "peso": 20
                }
            }
        }
    },
        adaptacaoRegional: {
        litoralQuente: { texto: "O principal problema é o calor noturno prolongado. Use o ponto mais fresco e ventilado do orquidário e controle a umidade com pouca massa de substrato." },
        montanhaFrio: { texto: "Em clima intermediário a fresco, protegendo de geada e de frio excessivo associado a encharcamento." }
    },
    mesesFloracao: [6, 7, 8, 9],
    "selosCultivo": {
        "rega": { "nivel": "muito-frequente" },
        "climaFloracao": { "faixa": "intermediario", "quedaTermica": true }
    },
        avaliacoes: {
        cultivo: 2,
        floracao: 3,
        perfume: 1,
        luminosidade: 2,
        agua: 4,
        raridade: 5
    }
};
