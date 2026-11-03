// Ficha V4 refinada — Jacquiniella globosa.

export const jacquiniellaGlobosa = {
    id: "jacquiniella-globosa",
    nome: "Jacquiniella globosa",
    genero: "Jacquiniella",
    sinonimo: "Epidendrum globosum",
    tipo: "Espécie botânica",
    dificuldade: "Difícil",
    caracteristicas: [
        "Miniatura epífita ou litófita",
        "Sem pseudobulbos verdadeiros",
        "Folhas carnosas subcilíndricas",
        "Flores terminais minúsculas"
    ],
    fotos: [
        "imagens/Jacquiniella globosa/Jacquiniella globosa1.jpeg",
        "imagens/Jacquiniella globosa/Jacquiniella globosa2.jpg",
        "imagens/Jacquiniella globosa/Jacquiniella globosa3.jpeg",
        "imagens/Jacquiniella globosa/Jacquiniella globosa4.jpeg"
    ],
    descricao: "Uma miniatura discreta, mas cheia de personalidade! Jacquiniella globosa forma pequenos tufos ou mantas de caules finos, com folhas carnosas quase cilíndricas e flores minúsculas de cerca de 3 mm surgindo no ápice dos ramos. Sua distribuição é enorme — do sul do México a grande parte da América tropical — e isso explica a ampla tolerância térmica observada na espécie. Em cultivo, o segredo não é buscar frio ou calor específico, mas oferecer umidade regular, muita ventilação e raízes que recebam água sem permanecer abafadas.",
    origem: "América Tropical",
    regiao: "América Central · Caribe · América do Sul (incl. Brasil)",
    habitat: "Florestas úmidas · epífita/litófita · ~200–2.400 m.",
    clima: "Quente a fresco · úmido · bem ventilado.",
    climaFloracao: "Não exige repouso seco nem choque térmico específico. A floração tende a acompanhar caules maduros sob boa luminosidade filtrada, umidade regular e ventilação constante; procedências de altitude podem responder melhor a noites mais amenas.",
    iluminacao: {
        sombrite: "50% a 60%",
        solDireto: "Não permitido",
        horario: "",
        observacoes: "Folhas firmes em verde-médio indicam equilíbrio. Folhagem muito escura e caules alongados sugerem pouca luz; avermelhamento discreto pode ocorrer com maior claridade, mas manchas secas ou aquecimento excessivo indicam excesso."
    },
    floracao: "Pode florescer em qualquer época do ano. As flores são muito pequenas, com cerca de 3 mm, surgem sucessivamente no ápice dos caules e costumam aparecer uma ou duas por vez.",
    adubacao: "🌿 Orgânica: bokashi apenas em quantidade mínima, isolado em porta-adubo e sem contato com a touceira.\n💧 Foliar: NPK equilibrado em 1/4 da dose a cada 10–15 dias durante a atividade.\n🧪 Liberação lenta: preferencialmente evitar em plantas montadas; em vaso ou cesto, usar pouquíssimos grânulos. Faça lavagem mensal com água pura para remover sais.",
    rega: "Durante o crescimento e nos dias quentes, regue com frequência, especialmente em plantas montadas. Após cada irrigação, permita que raízes e suporte arejem e sequem antes da próxima rega. No frio ou em períodos nublados, reduza conforme a evaporação, sem provocar murchamento persistente das folhas carnosas.",
    suporte: "🥇 Placa pequena de cortiça ou madeira dura.\n🥈 Galho fino de casca rugosa.\n🥉 Cesto pequeno e muito aberto. Vaso raso é apenas opção secundária.",
    substrato: ["Chips de coco pequenos + perlita de granulometria adequada a miniaturas + casca de pinus fina","Esfagno de fibra longa solto + perlita de granulometria adequada a miniaturas"],
    formasCultivo: {
        perfilVisual: "miniatura-epifita-caules-finos-sem-pseudobulbos",
        destaque: "Placa / tronco",
        resumo: "Miniatura de caules finos e folhas carnosas subcilíndricas. Precisa de umidade regular com rápida oxigenação, boa ventilação e proteção contra sol forte e seca prolongada.",
        metodos: [
            { nome: "Placa / tronco", asset: "placa-tronco", estrelas: 5, status: "Mais recomendado na ficha", texto: "Cortiça, madeira dura ou galho fino rugoso, com camada mínima de esfagno sob as raízes e regas frequentes conforme a secagem." },
            { nome: "Cachepô de Madeira", asset: "cesto-madeira", estrelas: 4, status: "Alternativa", texto: "Cesto pequeno e muito aberto, com material leve e atenção à umidade das raízes." },
            { nome: "Vaso plástico vasado", asset: "vaso-plastico-vasado", estrelas: 3, status: "Uso secundário", texto: "Vaso muito pequeno e raso, bastante perfurado, com mistura fina porém aerada." },
            { nome: "Vaso de Barro", asset: "vaso-barro", estrelas: 2, status: "Uso condicional", texto: "Apenas vaso muito raso e perfurado, com regas ajustadas à evaporação rápida." }
        ]
    },
    substratoVisual: {
        titulo: "Substrato ideal",
        contexto: "Montagem principal em placa; mistura alternativa para cesto ou vaso muito pequeno",
        resumo: "Suporte arejado com fina reserva localizada de umidade; em recipiente, usar mistura leve sem compactação.",
        justificativa: "A montagem em madeira ou cortiça com uma lâmina fina de esfagno sob as raízes permanece como forma principal. Para cesto ou vaso muito pequeno, a receita visual combina pinus fino, perlita e esfagno solto; a formulação exata é apresentada como receita principal e há apenas duas alternativas qualitativas. Os percentuais são estimativas horticulturais e NÃO foram homologados pela MACS 1.1.",
        receitaTexto: "45% casca de pinus fina + 35% perlita de granulometria adequada + 20% esfagno de fibra longa solto.",
        perfil: ["Miniatura epífita", "Caules finos", "Sem pseudobulbos verdadeiros", "Umidade regular", "Raízes ventiladas"],
        comportamento: [
            { nome: "Retenção", valor: 3, icone: "💧" },
            { nome: "Aeração", valor: 5, icone: "💨" },
            { nome: "Secagem", valor: 4, icone: "⚡" },
            { nome: "Compactação", valor: 1, icone: "🧱" }
        ],
        itens: [
            { asset: "casca-pinus", nome: "Casca de pinus fina", proporcao: "45%", nota: "estrutura", finalidade: "Oferece apoio para raízes pequenas sem compactar." },
            { asset: "perlita", nome: "Perlita de granulometria adequada", proporcao: "35%", nota: "aeração", finalidade: "Mantém espaços de ar e drenagem." },
            { asset: "esfagno", nome: "Esfagno de fibra longa solto", proporcao: "20%", nota: "retenção leve", finalidade: "Reduz desidratação sem deixar a base continuamente molhada." }
        ],
        alerta: "Evitar sol direto forte, sombra profunda, ar parado, esfagno compactado, base enterrada, encharcamento constante e seca prolongada.",
        notaEvidencia: "MACS 1.1: estudos florísticos brasileiros documentam Jacquiniella globosa como epífita de florestas, inclusive em copas de árvores, mas não testam substratos de cultivo. AOS recomenda PARA O GÊNERO Jacquiniella montagem em placas pequenas, luz clara, regas regulares e secagem das raízes entre irrigações; não é ensaio específico de J. globosa. IOSPE registra ampla distribuição altitudinal e hábito epífito, sem receita quantitativa. A mistura alternativa 45% pinus fino + 35% perlita + 20% esfagno solto é hipótese horticultural NÃO HOMOLOGADA; não há ensaio controlado localizado que valide estes percentuais ou as estrelas dos suportes. Nenhum orquidário brasileiro com composição percentual específica foi confirmado nesta passagem; meta de até 25 produtores não atingida. Os materiais visuais e textuais desta receita coincidem em nomes e proporções (45% + 35% + 20% = 100%); a confirmação da existência física dos arquivos de imagem depende de verificação separada no repositório."
    },
    errosComuns: "Expor ao sol direto forte; cultivar em sombra profunda; manter ar parado; usar vaso profundo; compactar esfagno; enterrar a base dos caules; deixar o suporte sempre molhado; submeter a seca prolongada; adubar em concentração alta; confundir necessidade de rega frequente com encharcamento constante.",
    dica: "🏆 Trate-a como uma miniatura que gosta de água com ar. Em placa de cortiça, galho rugoso ou cesto muito aberto, regue com frequência no calor, mas permita rápida oxigenação depois. Como a espécie ocorre de cerca de 200 a 2.400 m, ajuste a frequência de rega e a proteção térmica à procedência e ao microclima, em vez de aplicar uma regra única de temperatura.",
    revisaoCientificaIAR: {
        "nome": "Jacquiniella globosa",
        "statusTaxonomico": "Espécie/nome infraespecífico tratado como aceito na revisão taxonômica de referência.",
        "sinonimosPrincipais": "Verificados prioritariamente em POWO/GBIF/Tropicos; manter apenas os relevantes ao catálogo.",
        "morfologiaDimensoes": "Uma miniatura discreta, mas cheia de personalidade! Jacquiniella globosa forma pequenos tufos ou mantas de caules finos, com folhas carnosas quase cilíndricas e flores minúsculas de cerca de 3 mm surgindo no ápice dos ramos. Sua distribuição é enorme — do sul do México a grande parte da América tropical — e isso explica a ampla tolerância térmica observada na espécie. Em cultiv",
        "habitatAltitudeClima": "Florestas úmidas · epífita/litófita · ~200–2.400 m. | Quente a fresco · úmido · bem ventilado.",
        "distribuicaoGeografica": "América Central, Caribe e América do Sul; Brasil incluso.",
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
        "indice": 54,
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
                "notaDificuldade": 3,
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
                    "nota": 5,
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
        litoralQuente: { texto: "Muito boa em litoral quente quando montada em local ventilado, com luz filtrada clara e regas frequentes pela manhã. Reduza o esfagno se o ambiente já for úmido." },
        montanhaFrio: { texto: "Proteja de geadas e aumente o intervalo entre regas em semanas frias e nubladas, sem deixar as folhas murcharem por longos períodos." }
    },
    mesesFloracao: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    "selosCultivo": {
        "rega": { "nivel": "frequente" },
        "climaFloracao": { "faixa": "ameno", "quedaTermica": true }
    },
        avaliacoes: {
        cultivo: 2,
        floracao: 2,
        perfume: 1,
        luminosidade: 3,
        agua: 4,
        raridade: 3
    }
};
