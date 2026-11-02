// Ficha científica e de cultivo revisada — Refinamento Lote 09.
// ID e nome de arquivo históricos preservados para manter compatibilidade com o catálogo.

export const laeliaFournieri = {
    id: "laelia-fournieri",
    nome: "Cattleya fournieri",
    genero: "Cattleya",
    sinonimo: "Laelia fournieri",
    tipo: "Espécie botânica rara — miniatura rupícola",
    dificuldade: "Difícil",
    caracteristicas: [
        "Endêmica de Minas Gerais",
        "Miniatura rupícola",
        "Campos rupestres de altitude",
        "Flores claras",
        "Cultivo avançado",
        "Raízes sensíveis ao calor"
    ],
    fotos: [
        "imagens/Cattleya fournieri/Cattleya fournieri1.jpg",
        "imagens/Cattleya fournieri/Cattleya fournieri2.jpg",
        "imagens/Cattleya fournieri/Cattleya fournieri3.jpg",
        "imagens/Cattleya fournieri/Cattleya fournieri4.webp"
    ],
    descricao: "Uma joia minúscula dos campos rupestres de Minas Gerais! Cattleya fournieri forma pequenas touceiras compactas, com folhas rígidas e flores de aproximadamente 2,5 a 3 cm — grandes em relação ao tamanho da planta. É encontrada em afloramentos rochosos de altitude, por volta de 1.100 a 1.800 m, onde recebe muita luz, vento e noites frescas. Por isso, no litoral quente, o maior desafio não é fazê-la “passar sede”, e sim manter raízes pequenas, arejadas e relativamente frescas durante o verão.",
    origem: "Brasil",
    regiao: "Minas Gerais",
    habitat: "Campos rupestres · rochas · ~1.100–1.800 m.",
    clima: "Fresco a intermediário · alta luz · ventilado.",
    climaFloracao: "A floração depende de crescimento compacto, muita luz e raízes ativas sob temperaturas moderadas. O calor noturno persistente pode reduzir vigor e indução floral; no litoral, priorize o ponto mais fresco e ventilado do orquidário em vez de compensar o calor com seca severa.",
    iluminacao: {
        sombrite: "30% a 50% — cerca de 50% no verão quente",
        solDireto: "Permitido com restrição",
        horario: "Início da manhã ou final da tarde",
        observacoes: "É uma espécie de alta luminosidade, mas em litoral quente o risco principal é superaquecer folhas, pedras e raízes. Forneça claridade muito alta com ventilação intensa e evite suportes escuros expostos ao sol forte."
    },
    floracao: "Predomina do verão ao outono. A inflorescência é curta, em torno de 1,5 cm, e pode produzir simultaneamente cerca de 3–7 flores de aproximadamente 2,5–3 cm.",
    adubacao: "🌿 Orgânica: Bokashi é dispensável como rotina; se usado, deve ser mínimo e totalmente afastado da base.\n💧 Foliar/mineral: NPK equilibrado, como 20-20-20, em cerca de 1/4 da dose a cada 10 a 15 dias enquanto houver crescimento ativo.\n🧪 Liberação lenta: não é a primeira escolha. Se utilizada, aplique pouquíssimos grânulos e considere toda a carga de fertilização para evitar salinização.",
    rega: "Durante brotação e enraizamento, regue bem e permita que o meio drene rapidamente e se aproxime da secagem antes da próxima irrigação. Rupícola não significa xerófita absoluta: uma planta pequena em vaso mineral pode secar muito rápido no verão e necessitar de água frequente. No período frio ou de menor atividade, aumente os intervalos, evitando desidratação severa dos pequenos pseudobulbos.",
    suporte: "🥇 Vaso de barro pequeno, raso e muito perfurado.\n🥈 Pedra porosa ou rocha mineral, com fixação muito firme.\n🥉 Cesto baixo e extremamente aberto.\nEscolha sempre o local mais fresco e ventilado, e não simplesmente o ponto mais alto do orquidário.",
    substrato: "🥇 perlita grossa + brita fina/média + casca de macadâmia triturada, com pequena fração de pinus.\n🥈 Brita + perlita grossa + carvão vegetal, acrescentando apenas 15–25% de componente orgânico grosso.\n🥉 Macadâmia grossa + perlita grossa + cacos de cerâmica/argila expandida, mantendo o colo totalmente aerado.\n⭐ Alternativa: perlita grossa + argila expandida + carvão vegetal + casca de pinus grossa em baixa proporção.",
    formasCultivo: {
        perfilVisual: "cattleya-miniatura-rupicola-altitude",
        destaque: "Vaso de Barro",
        resumo: "Miniatura rupícola de altitude, com raízes sensíveis ao calor. Precisa de vaso pequeno e raso, substrato predominantemente mineral, ventilação máxima e proteção contra superaquecimento.",
        metodos: [
            { nome: "Vaso de Barro", asset: "vaso-barro", estrelas: 5, status: "Mais recomendado na ficha", texto: "Vaso pequeno, raso e muito perfurado, com pouco substrato mineral e raízes frescas." },
            { nome: "Placa / tronco", asset: "placa-tronco", estrelas: 3, status: "Uso condicional", texto: "Por ser rupícola, preferir fixação firme em pedra porosa, protegida contra aquecimento excessivo; não é montagem convencional em madeira." },
            { nome: "Cachepô de Madeira", asset: "cesto-madeira", estrelas: 4, status: "Alternativa", texto: "Cesto baixo e extremamente aberto, com mistura mineral estável e regas ajustadas à secagem." },
            { nome: "Vaso plástico vasado", asset: "vaso-plastico-vasado", estrelas: 3, status: "Alternativa", texto: "Recipiente pequeno e muito vazado, desde que não acumule calor e umidade no centro." }
        ]
    },
    substratoVisual: {
        titulo: "Substrato ideal",
        contexto: "Mistura mineral para vaso baixo e muito perfurado",
        resumo: "Mistura de drenagem imediata, com fração orgânica reduzida, evitando calor e compactação nas raízes sensíveis.",
        justificativa: "A receita quantifica os quatro componentes da primeira mistura qualitativa já registrada na ficha. Os percentuais são estimativas horticulturais ainda não homologadas pela MACS 1.0.",
        receitaTexto: "40% brita fina/média + 30% perlita grossa + 20% casca de macadâmia triturada + 10% casca de pinus grossa.",
        perfil: ["Miniatura rupícola", "Raízes sensíveis ao calor", "Alta aeração", "Drenagem imediata", "Pouco volume de substrato"],
        comportamento: [
            { nome: "Retenção", valor: 1, icone: "💧" },
            { nome: "Aeração", valor: 5, icone: "💨" },
            { nome: "Secagem", valor: 5, icone: "⚡" },
            { nome: "Compactação", valor: 1, icone: "🧱" }
        ],
        itens: [
            { asset: "brita-fina", nome: "Brita fina/média", proporcao: "40%", nota: "base mineral", finalidade: "Garante drenagem rápida e estabilidade em recipiente raso." },
            { asset: "perlita", nome: "Perlita grossa", proporcao: "30%", nota: "aeração", finalidade: "Amplia os espaços de ar ao redor das raízes." },
            { asset: "casca-macadamia", nome: "Casca de macadâmia triturada", proporcao: "20%", nota: "fração orgânica", finalidade: "Fornece apoio e pequena reserva de umidade." },
            { asset: "casca-pinus", nome: "Casca de pinus grossa", proporcao: "10%", nota: "fração orgânica", finalidade: "Complementa a estrutura sem reter água em excesso." }
        ],
        alerta: "Evitar calor abafado, vaso grande ou profundo, pedras superaquecidas, substrato decomposto e repouso seco exagerado. Replantar preferencialmente no início de novas raízes.",
        notaEvidencia: "Estrelas e percentuais são estimativas horticulturais não homologadas pela MACS 1.0. Conferência visual dos assets ainda pendente."
    },
    errosComuns: "• Cultivar em local quente e abafado.\n• Confundir hábito rupícola com necessidade de seca extrema.\n• Vaso grande, profundo ou com material compactado.\n• Deixar pedra ou vaso superaquecer ao sol.\n• Excesso de matéria orgânica decomposta no calor.\n• Replantar por conveniência quando não há novas raízes, salvo emergência.\n• Adubação concentrada e acúmulo de sais.\n• Repouso seco exagerado, levando rapidamente ao enrugamento dos pseudobulbos.",
    dica: "🏆 Replante preferencialmente quando as primeiras raízes novas começarem a surgir e use pouco volume de substrato, muita drenagem e máxima circulação de ar. No litoral quente, o objetivo é baixar a temperatura radicular e evitar abafamento; secar demais uma planta tão pequena costuma piorar o problema.",
    revisaoCientificaIAR: {
        "nome": "Cattleya fournieri",
        "statusTaxonomico": "Espécie/nome infraespecífico tratado como aceito na revisão taxonômica de referência.",
        "sinonimosPrincipais": "Verificados prioritariamente em POWO/GBIF/Tropicos; manter apenas os relevantes ao catálogo.",
        "morfologiaDimensoes": "Uma joia minúscula dos campos rupestres de Minas Gerais! Cattleya fournieri forma pequenas touceiras compactas, com folhas rígidas e flores de aproximadamente 2,5 a 3 cm — grandes em relação ao tamanho da planta. É encontrada em afloramentos rochosos de altitude, por volta de 1.100 a 1.800 m, onde recebe muita luz, vento e noites frescas. Por isso, no litoral quente, o maior de",
        "habitatAltitudeClima": "Campos rupestres · rochas · ~1.100–1.800 m. | Fresco a intermediário · alta luz · ventilado.",
        "distribuicaoGeografica": "Minas Gerais.",
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
            "indice": 49,
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
                    "nota": 3,
                    "peso": 5
                },
                "ventilacao": {
                    "nota": 5,
                    "peso": 5
                },
                "luminosidade": {
                    "nota": 5,
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
            "indice": 97,
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
                    "nota": 5,
                    "peso": 5
                },
                "luminosidade": {
                    "nota": 5,
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
        litoralQuente: { texto: "Difícil de adaptação. O maior gargalo é o calor noturno. Use o ponto comprovadamente mais fresco e ventilado, recipiente pequeno, alta aeração e proteção contra superfícies que irradiem calor." },
        montanhaFrio: { texto: "Em ambientes luminosos e ventilados, protegendo apenas contra geadas severas e encharcamento prolongado em períodos frios." }
    },
    mesesFloracao: [12, 1, 2, 3, 4],
    "selosCultivo": {
        "rega": { "nivel": "moderada", "regime": "reduzir-inverno" },
        "climaFloracao": { "faixa": "ameno" }
    },
        avaliacoes: {
        cultivo: 2,
        floracao: 3,
        perfume: 1,
        luminosidade: 5,
        agua: 2,
        raridade: 5
    }
};
