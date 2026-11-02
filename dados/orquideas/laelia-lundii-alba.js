// Refinamento final — Lote 17.
// Nome de coleção preservado; Kew atualmente inclui as formas alba em Cattleya lundii.

export const laeliaLundiiAlba = {
    id: "laelia-lundii-alba",
    nome: "Cattleya lundii f. alba",
    genero: "Cattleya",
    sinonimo: "Laelia lundii f. alba",
    tipo: "Forma alba horticultural",
    dificuldade: "Moderada",
    caracteristicas: [
        "Forma alba rara",
        "Miniatura epífita ou rupícola",
        "Flores claras de 3–4 cm",
        "Cultivo montado favorecido"
    ],
    fotos: [
        "imagens/Cattleya lundii f. alba/Cattleya lundii f. alba1.webp",
        "imagens/Cattleya lundii f. alba/Cattleya lundii f. alba2.webp",
        "imagens/Cattleya lundii f. alba/Cattleya lundii f. alba3.jpg",
        "imagens/Cattleya lundii f. alba/Cattleya lundii f. alba4.jpg"
    ],
    descricao: "Uma versão especialmente delicada de uma das menores Cattleyas sul-americanas. A forma alba de Cattleya lundii conserva o porte miniatura, as folhas estreitas e quase cilíndricas e o hábito de formar pequenas touceiras, mas se destaca pelas flores muito claras, brancas a branco-esverdeadas, sem a forte pigmentação púrpura típica da espécie. As flores medem cerca de 3 a 4 cm e ficam ainda mais vistosas quando várias frentes maduras florescem juntas.",
    origem: "América do Sul",
    regiao: "Forma clara de C. lundii · Brasil e região",
    habitat: "Como a espécie · 740–1.000 m · epífita/rupícola.",
    clima: "Quente a intermediário · bem ventilado.",
    climaFloracao: "O manejo é o mesmo da espécie: crescimento ativo com água regular, raízes bem oxigenadas e luz alta filtrada, seguido de redução discreta da água quando a atividade diminui. A coloração alba não significa necessidade de sombra profunda. Touceiras adultas acumulam mais reservas e podem produzir várias flores claras simultaneamente.",
    iluminacao: {
        sombrite: "50% a 60%",
        solDireto: "Permitido com restrição",
        horario: "Início da manhã ou final da tarde",
        observacoes: "Mantenha luz suficiente para produzir crescimento compacto e pseudobulbos firmes. Proteja do sol forte do litoral, mas não transforme essa proteção em sombra excessiva."
    },
    floracao: "Do meio do inverno à primavera, normalmente entre julho e outubro. A forma alba segue a fenologia de Cattleya lundii e pode apresentar duas flores perfumadas por pequena inflorescência.",
    adubacao: "🌿 Orgânica: bokashi opcional em quantidade mínima, sempre afastado do rizoma.\n💧 Foliar/Mineral: NPK equilibrado em 1/4 da dose a cada 10–15 dias durante crescimento ativo.\n🌱 Maturação: reduza a frequência quando o pseudobulbo estiver completo e a atividade diminuir.\n🧪 Liberação lenta: poucos grânulos apenas em recipiente muito drenante; em plantas montadas, é dispensável.\n🚿 Intercale regas somente com água para evitar sais.",
    rega: "Na brotação e emissão de raízes, regue bem e permita secagem rápida. Em montagem no verão, pode exigir regas diárias. Quando o crescimento desacelerar, aumente o intervalo entre irrigações, sem permitir desidratação severa dos pequenos pseudobulbos.",
    suporte: "🥇 Cortiça, galho ou madeira dura.\n🥈 Pequeno cachepô ou cesto de madeira.\n🥉 Vaso de barro pequeno, muito perfurado e preenchido com material grosseiro.",
    substrato: "🥇 Casca de macadâmia média + pinus médio + perlita grossa + carvão vegetal.\n🥈 Pinus médio/grosso + perlita grossa + carvão + chips de coco em baixa proporção.\n🥉 Casca de macadâmia + argila expandida + carvão vegetal + pinus grosso.\n⭐ Alternativa: Chips de coco grossos + perlita grossa + carvão + pinus médio, com secagem clara entre regas.",
    formasCultivo: {
        perfilVisual: "miniatura-epifita-rupicola-forma-alba",
        destaque: "Placa / tronco",
        resumo: "Forma alba miniatura de crescimento em touceira. Favorecer montagem firme em cortiça ou madeira durável, raízes arejadas, boa luz filtrada e secagem rápida entre regas.",
        metodos: [
            { nome: "Placa / tronco", asset: "placa-tronco", estrelas: 5, status: "Mais recomendado na ficha", texto: "Cortiça, galho rugoso ou madeira dura, com espaço para expansão da touceira e fixação estável." },
            { nome: "Cachepô de Madeira", asset: "cesto-madeira", estrelas: 4, status: "Alternativa", texto: "Cestinho pequeno e muito ventilado, com partículas grosseiras e regas adaptadas à secagem." },
            { nome: "Vaso de Barro", asset: "vaso-barro", estrelas: 4, status: "Alternativa", texto: "Vaso pequeno, muito perfurado, com substrato grosso e arejado." },
            { nome: "Árvore viva", asset: "arvore-viva", estrelas: 3, status: "Uso condicional", texto: "Fixação em galho rugoso com claridade filtrada e regas regulares durante o estabelecimento." }
        ]
    },
    substratoVisual: {
        titulo: "Substrato ideal",
        contexto: "Montagem principal em placa; mistura alternativa para cesto ou vaso pequeno",
        resumo: "Mistura grosseira, arejada e de secagem perceptível, sem compactar raízes ou base da touceira.",
        justificativa: "A montagem é a primeira opção de suporte original. A receita para recipiente quantifica os quatro materiais da primeira mistura qualitativa já registrada; percentuais ainda não homologados pela MACS 1.0.",
        receitaTexto: "35% casca de macadâmia média + 30% casca de pinus média + 20% perlita grossa + 15% carvão vegetal.",
        perfil: ["Forma alba", "Miniatura epífita ou rupícola", "Touceira compacta", "Raízes arejadas", "Luz filtrada abundante"],
        comportamento: [
            { nome: "Retenção", valor: 2, icone: "💧" },
            { nome: "Aeração", valor: 5, icone: "💨" },
            { nome: "Secagem", valor: 4, icone: "⚡" },
            { nome: "Compactação", valor: 1, icone: "🧱" }
        ],
        itens: [
            { asset: "casca-macadamia", nome: "Casca de macadâmia média", proporcao: "35%", nota: "estrutura", finalidade: "Sustenta raízes finas sem compactação." },
            { asset: "casca-pinus", nome: "Casca de pinus média", proporcao: "30%", nota: "apoio radicular", finalidade: "Oferece fixação e umidade moderada." },
            { asset: "perlita", nome: "Perlita grossa", proporcao: "20%", nota: "aeração", finalidade: "Mantém espaços de ar e drenagem." },
            { asset: "carvao", nome: "Carvão vegetal", proporcao: "15%", nota: "porosidade", finalidade: "Complementa a estrutura aberta." }
        ],
        alerta: "Evitar sombra excessiva, sol forte direto, vaso grande, esfagno compactado, raízes constantemente molhadas e divisões frequentes de touceiras pequenas.",
        notaEvidencia: "Estrelas e percentuais são estimativas horticulturais não homologadas pela MACS 1.0. Conferência visual dos assets ainda pendente."
    },
    errosComuns: "Dividir touceiras pequenas; cultivar em sombra excessiva por ser uma forma alba; expor ao sol forte direto; usar esfagno compactado; escolher vaso grande; manter raízes sempre molhadas; impor repouso seco exagerado; deixar a planta frouxa no suporte; adubar em excesso.",
    dica: "Preserve a planta em touceira. Quanto mais frentes ativas ela acumular, maior será o sistema radicular e a chance de uma floração mais cheia. Em litoral quente, prefira montagem, circulação de ar constante e bastante luz filtrada.",
    revisaoCientificaIAR: {
        "nome": "Cattleya lundii f. alba",
        "statusTaxonomico": "Espécie/nome infraespecífico tratado como aceito na revisão taxonômica de referência.",
        "sinonimosPrincipais": "Verificados prioritariamente em POWO/GBIF/Tropicos; manter apenas os relevantes ao catálogo.",
        "morfologiaDimensoes": "Uma versão especialmente delicada de uma das menores Cattleyas sul-americanas. A forma alba de Cattleya lundii conserva o porte miniatura, as folhas estreitas e quase cilíndricas e o hábito de formar pequenas touceiras, mas se destaca pelas flores muito claras, brancas a branco-esverdeadas, sem a forte pigmentação púrpura típica da espécie. As flores medem cerca de 3 a 4 cm e f",
        "habitatAltitudeClima": "Como a espécie · 740–1.000 m · epífita/rupícola. | Quente a intermediário · bem ventilado.",
        "distribuicaoGeografica": "Forma clara de C. lundii · Brasil e região.",
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
        "indice": 34,
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
                "notaDificuldade": 2,
                "peso": 10
            },
            "ventilacao": {
                "notaDificuldade": 1,
                "peso": 10
            },
            "luminosidade": {
                "notaDificuldade": 2,
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
            "indice": 63,
            "estrelas": 4,
            "fatores": {
                "habitatNatural": {
                    "nota": 3,
                    "peso": 30
                },
                "temperatura": {
                    "nota": 3,
                    "peso": 30
                },
                "aguaUmidade": {
                    "nota": 3,
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
                    "nota": 3,
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
                    "nota": 3,
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
                    "nota": 5,
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
        litoralQuente: { texto: "Quando montada, ventilada e protegida do sol forte da tarde. Regue conforme a secagem e reduza no inverno apenas de acordo com a atividade da planta." },
        montanhaFrio: { texto: "Excelente resposta às noites frescas. Mantenha boa luz e reduza a água em períodos frios e úmidos, evitando geadas." }
    },
    mesesFloracao: [7, 8, 9, 10],
    "selosCultivo": {
        "rega": { "nivel": "frequente", "regime": "reduzir-repouso" },
        "climaFloracao": { "faixa": "quente" }
    },
        avaliacoes: {
        cultivo: 4,
        floracao: 3,
        perfume: 2,
        luminosidade: 4,
        agua: 2,
        raridade: 5
    }
};
