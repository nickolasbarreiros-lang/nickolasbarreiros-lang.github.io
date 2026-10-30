// Ficha científica e de cultivo — Refinamento Final, Lote 06.

export const catasetumMattosianum = {
    id: "catasetum-mattosianum",
    nome: "Catasetum mattosianum",
    genero: "Catasetum",
    tipo: "Espécie botânica brasileira — caducifólia",
    dificuldade: "Difícil",
    caracteristicas: [
        "Endêmica do Brasil",
        "Bahia e Espírito Santo",
        "Flores de ~3 cm",
        "Folhagem caduca",
        "Dimorfismo sexual",
        "Dormência sazonal"
    ],
    fotos: [
        "imagens/Catasetum mattosianum/Catasetum mattosianum1.jpg",
        "imagens/Catasetum mattosianum/Catasetum mattosianum2.jpg",
        "imagens/Catasetum mattosianum/Catasetum mattosianum3.jpg",
        "imagens/Catasetum mattosianum/Catasetum mattosianum4.jpg"
    ],
    descricao: "Uma espécie brasileira marcada pelas grandes mudanças que acontecem ao longo do ano. *Catasetum mattosianum* desenvolve pseudobulbos carnosos e vigorosos durante a estação de crescimento, cobertos por folhas finas e pregueadas; depois, com a chegada da dormência, as folhas amarelecem e caem, deixando os pseudobulbos armazenarem energia para o próximo ciclo. Nativa da Bahia ao Espírito Santo, produz no verão flores de aproximadamente 3 cm, com coloração bastante variável. Como é típico dos *Catasetum*, pode formar flores masculinas e femininas muito diferentes entre si — uma característica fascinante do gênero. Luz, reservas da planta e condições ambientais podem influenciar qual tipo aparece, mas não existe uma fórmula simples capaz de garantir flores de determinado sexo.",
    origem: "Brasil",
    regiao: "Bahia ao Espírito Santo",
    habitat: "Epífita de bioma tropical úmido.",
    clima: "Quente · verão úmido e repouso sazonal.",
    climaFloracao: "A floração está associada ao período de crescimento e ocorre principalmente no verão. O que determina a qualidade da floração é a formação de um pseudobulbo forte, sustentada por água abundante, nutrição moderada, luz alta e raízes saudáveis durante a fase ativa. A dormência não deve ser antecipada artificialmente. A influência da luz sobre o sexo das flores existe no gênero, mas não é absoluta: genética, reservas e microclima também participam.",
    iluminacao: {
        sombrite: "40% a 50%",
        solDireto: "Permitido com restrição",
        horario: "Início da manhã ou final da tarde",
        observacoes: "Durante crescimento ativo necessita bastante luz para formar pseudobulbos volumosos. Folhas verde-médio a verde-claro e pseudobulbos robustos são bons indicadores. Excesso súbito de sol queima folhas; sombra profunda gera crescimento mais fraco. A intensidade luminosa influencia diretamente a proporção de flores: níveis mais altos de luz favorecem o surgimento de flores femininas, enquanto condições de menor luminosidade tendem a estimular o aparecimento de flores masculinas."
    },
    floracao: "Principalmente no verão. IOSPE registra flores de aproximadamente 3 cm e grande variabilidade de cor. O momento exato pode oscilar conforme início da brotação, maturação do pseudobulbo e condições de cultivo.",
    adubacao: "🌿 Orgânica: Bokashi pode ser usado em pequena quantidade durante crescimento, somente depois de o novo sistema radicular estar funcional.\n💧 Foliar/mineral: NPK equilibrado ou levemente mais nitrogenado em 1/4 a 1/3 da dose, com maior frequência no crescimento vigoroso.\n🧪 Liberação lenta: Osmocote 14-14-14 pode ser utilizado em dose moderada quando as regas regulares já começaram. Suspenda fertilização quando as folhas amarelecerem e a dormência se instalar.",
    rega: "Divida o manejo em fases. Broto recém-surgido: mantenha o vaso predominantemente seco e evite encharcar. Quando várias raízes novas atingirem aproximadamente 5 a 8 cm, aumente a água gradualmente. Durante o crescimento explosivo e o engrossamento do pseudobulbo, regue abundantemente. Quando as folhas amarelecerem e caírem, reduza fortemente ou suspenda as regas regulares; hidrate apenas de forma mínima se os pseudobulbos entrarem em desidratação excessiva.",
    suporte: "🥇 O vaso plástico bem perfurado mas capaz de conservar a umidade necessária durante o verão, sendo também uma excelente opção para o cultivo em semi-hidroponia.\n🥈 Cachepô ou cesto de madeira para manejo com regas frequentes.\n🥉 Cesta plástica ou vaso tipo cuia, combinando ventilação e retenção moderada.",
    formasCultivo: {
        "perfilVisual": "catasetum",
        "destaque": "Vaso plástico vasado",
        "resumo": "Vaso plástico vasado favorece raízes vigorosas e regas intensas no crescimento, mas permite manter o meio quase seco na dormência; iniciar regas fortes apenas com raízes novas desenvolvidas.",
        "metodos": [
            {
                "nome": "Vaso plástico vasado",
                "asset": "vaso-plastico-vasado",
                "estrelas": 5,
                "status": "Ideal",
                "texto": "Permite hidratação intensa no crescimento e secagem controlada durante dormência."
            },
            {
                "nome": "Cachepô de Madeira",
                "asset": "cesto-madeira",
                "estrelas": 4,
                "status": "Muito recomendado",
                "texto": "Boa aeração; em crescimento pode secar depressa demais no calor."
            },
            {
                "nome": "Placa / tronco",
                "asset": "placa-tronco",
                "estrelas": 4,
                "status": "Muito recomendado",
                "texto": "Facilita repouso seco, mas requer irrigação frequente quando há folhas e raízes ativas."
            },
            {
                "nome": "Vaso de Barro",
                "asset": "vaso-barro",
                "estrelas": 3,
                "status": "Alternativa",
                "texto": "Secagem acelerada pode dificultar hidratação durante crescimento."
            }
        ]
    },
    substratoVisual: {
        "titulo": "Substrato ideal",
        "contexto": "Receita para cultivo em vaso ou recipiente",
        "resumo": "Composição técnica provisória para recipiente; ajustar granulometria, rega e ventilação.",
        "justificativa": "A espécie é epífita pseudobulbosa de ambiente tropical úmido; a orientação sazonal é baseada no gênero Catasetum. Mistura leve com reserva hídrica favorece crescimento e deve secar no repouso. Proporções são hipótese, não receita testada na espécie.",
        "receitaTexto": "35% chips de coco + 30% pinus médio + 20% perlita grossa + 15% casca de arroz carbonizada.",
        "perfil": ["Raízes vigorosas", "Bulbos de reserva", "Ciclo sazonal", "Crescimento úmido", "Repouso seco", "Boa drenagem"],
        "comportamento": [
            {
                "nome": "Retenção",
                "valor": 3,
                "icone": "💧"
            },
            {
                "nome": "Aeração",
                "valor": 4,
                "icone": "💨"
            },
            {
                "nome": "Secagem",
                "valor": 3,
                "icone": "⚡"
            },
            {
                "nome": "Compactação",
                "valor": 2,
                "icone": "🧱"
            }
        ],
        "itens": [
            {
                            "asset": "chips-coco",
                            "nome": "Chips de coco",
                            "proporcao": "35%",
                            "nota": "umidade",
                            "finalidade": "Reserva água durante crescimento ativo."
            },
            {
                            "asset": "casca-pinus",
                            "nome": "Pinus médio",
                            "proporcao": "30%",
                            "nota": "estrutura",
                            "finalidade": "Mantém espaços de ar e drenagem."
            },
            {
                            "asset": "perlita",
                            "nome": "Perlita grossa",
                            "proporcao": "20%",
                            "nota": "aeração",
                            "finalidade": "Evita adensamento do meio."
            },
            {
                            "asset": "casca-arroz-carbonizada",
                            "nome": "Casca de arroz carbonizada",
                            "proporcao": "15%",
                            "nota": "leveza",
                            "finalidade": "Contribui para porosidade e secagem no repouso."
            }
        ],
        "alerta": "Proposta preliminar MACS 1.0; ajuste conforme resposta das raízes, fase de crescimento e condições de cultivo."
    },
    substrato: "🥇 Chips de coco médios (35%) + pinus médio (30%) + perlita grossa (20%) + casca de arroz carbonizada (15%): composição técnica provisória do Substrato Ideal visual, com boa aeração e reserva hídrica durante o crescimento.\n🥈 Esfagno de fibra longa solto + perlita grossa + carvão, apenas em vaso pequeno e muito drenado no litoral quente.\n🥉 Pinus médio + chips de coco + perlita grossa + casca de arroz carbonizada: alternativa com os mesmos materiais, ajustando as proporções à secagem observada.\n⭐ Alternativa: Argila expandida + perlita grossa + chips de coco, com fina camada superficial de esfagno somente na fase ativa.",
    errosComuns: "• Encharcar o broto antes de as raízes novas estarem funcionais.\n• Replantar quando as raízes novas já estão longas e frágeis.\n• Economizar água durante o crescimento vigoroso.\n• Continuar regando normalmente após a queda das folhas.\n• Adubar durante dormência.\n• Remover pseudobulbos traseiros saudáveis, que funcionam como reserva.\n• Usar substrato velho e compacto.\n• Tentar forçar flores femininas com excesso de sol.",
    dica: "🏆Faça o replante no início da brotação, logo após a planta sair da dormência e antes que as novas raízes fiquem compridas. Após o replante, mantenha o vaso relativamente seco até que várias raízes atinjam de 5 a 8 cm de comprimento. Em seguida, aumente a rega para manter a umidade, porem sem encharcar o broto e adote uma adubação leve e frequente, e garanta boa iluminação e ventilação. Com a queda das folhas, suspenda a adubação e deixe o vaso predominantemente seco. Lembre-se de preservar os pseudobulbos antigos saudáveis, pois eles nutrem a próxima brotação.",
    revisaoCientificaIAR: {
        "nome": "Catasetum mattosianum",
        "statusTaxonomico": "Espécie/nome infraespecífico tratado como aceito na revisão taxonômica de referência.",
        "sinonimosPrincipais": "Verificados prioritariamente em POWO/GBIF/Tropicos; manter apenas os relevantes ao catálogo.",
        "morfologiaDimensoes": "Uma espécie brasileira marcada pelas grandes mudanças que acontecem ao longo do ano. *Catasetum mattosianum* desenvolve pseudobulbos carnosos e vigorosos durante a estação de crescimento, cobertos por folhas finas e pregueadas; depois, com a chegada da dormência, as folhas amarelecem e caem, deixando os pseudobulbos armazenarem energia para o próximo ciclo. Nativa da Bahia ao E",
        "habitatAltitudeClima": "Epífita de bioma tropical úmido. | Quente · verão úmido e repouso sazonal.",
        "distribuicaoGeografica": "Bahia ao Espírito Santo.",
        "cultivoPremiacao": "Cultivo confrontado com habitat/IOSPE; premiação AOS somente considerada quando dado público verificável foi localizado.",
        "confianca": "media",
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
        "indice": 58,
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
                "notaDificuldade": 2,
                "peso": 10
            },
            "raizesSubstrato": {
                "notaDificuldade": 2,
                "peso": 10
            },
            "sazonalidade": {
                "notaDificuldade": 4,
                "peso": 10
            },
            "floracao": {
                "notaDificuldade": 4,
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
            "indice": 98,
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
                    "nota": 5,
                    "peso": 5
                },
                "floracao": {
                    "nota": 5,
                    "peso": 20
                }
            }
        },
        "montanhaFrio": {
            "indice": 64,
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
                    "nota": 5,
                    "peso": 5
                },
                "floracao": {
                    "nota": 3,
                    "peso": 20
                }
            }
        }
    },
        adaptacaoRegional: {
        litoralQuente: { texto: "O calor favorece o crescimento ativo; o principal cuidado é proteger a planta desfolhada de chuvas repetidas durante o período de dormência." },
        montanhaFrio: { texto: "Se protegida de frio excessivo e geadas. Durante dormência fria, mantenha o vaso ainda mais seco." }
    },
    mesesFloracao: [12, 1, 2, 3],
    "selosCultivo": {
        "rega": { "nivel": "sazonal", "regime": "repouso-seco" },
        "climaFloracao": { "faixa": "quente" }
    },
        avaliacoes: {
        cultivo: 2,
        floracao: 4,
        perfume: 3,
        luminosidade: 4,
        agua: 5,
        raridade: 4
    }
};
