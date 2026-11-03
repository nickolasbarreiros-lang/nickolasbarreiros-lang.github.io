// Ficha V4 refinada — revisão final.

export const ludisiaDiscolor = {
    id: "ludisia-discolor",
    nome: "Ludisia discolor",
    genero: "Ludisia",
    sinonimo: "Haemaria discolor",
    tipo: "Espécie botânica — orquídea-joia",
    dificuldade: "Fácil",
    caracteristicas: [
        "Orquídea-joia",
        "Folhas aveludadas e nervuradas",
        "Terrestre de rizoma rastejante",
        "Flores brancas em hastes eretas"
    ],
    fotos: [
        "imagens/Ludisia discolor/Ludisia discolor1.webp",
        "imagens/Ludisia discolor/Ludisia discolor2.jpeg",
        "imagens/Ludisia discolor/Ludisia discolor3.webp",
        "imagens/Ludisia discolor/Ludisia discolor4.webp"
    ],
    descricao: "Uma orquídea admirada primeiro pelas folhas e só depois pelas flores. A Ludisia discolor, famosa como orquídea-joia, forma tapetes de caules rastejantes com folhas aveludadas em verde muito escuro a vinho, marcadas por nervuras claras, rosadas ou avermelhadas. É uma planta terrestre de floresta sombreada e cresce bem em vasos largos, onde seus ramos podem avançar horizontalmente. Quando madura, produz hastes eretas com numerosas flores brancas pequenas, criando um contraste delicado com a folhagem escura.",
    origem: "Sul da China e Sudeste Asiático",
    regiao: "China · Indochina · Malesia · Filipinas",
    habitat: "Chão de florestas úmidas · serapilheira e húmus.",
    clima: "Quente a intermediário · úmido e sombreado.",
    climaFloracao: "A espécie cresce sob condições relativamente estáveis, sem repouso seco. WFO descreve plantas geralmente com 10 a 25 cm de altura, folhas escuras com nervuras contrastantes e longa janela fenológica em sua área natural. Em cultivo, hastes florais costumam aparecer após o amadurecimento dos caules, frequentemente com dias mais curtos e temperaturas ligeiramente mais amenas, mas frio intenso não é necessário. Excesso de nitrogênio, sombra profunda demais e substrato sem oxigenação favorecem crescimento mole e reduzem a floração.",
    iluminacao: {
        sombrite: "70% a 80%",
        solDireto: "Não permitido",
        horario: "",
        observacoes: "Prefere luz baixa a moderada, porém não escuridão. Em interiores, mantenha próxima de janela clara sem sol direto. Folhas compactas, firmes e intensamente coloridas indicam bom equilíbrio; caules longos e espaçados sugerem pouca luz, enquanto desbotamento, manchas claras e bordas queimadas indicam excesso de exposição ou calor."
    },
    floracao: "Em cultivo, costuma florescer do fim do inverno à primavera, embora a época varie com clima e manejo. As hastes eretas carregam muitas flores brancas pequenas, abrindo progressivamente e permanecendo decorativas por várias semanas. A folhagem, entretanto, continua sendo seu principal atrativo durante todo o ano.",
    adubacao: "🌿 Orgânica: húmus bem curtido ou bokashi em quantidade mínima, aplicados na borda e afastados dos caules.\n💧 Foliar ou radicular: NPK equilibrado em cerca de 1/4 da dose a cada 15 dias durante crescimento ativo.\n🧪 Liberação lenta: poucos grânulos apenas em vasos bem drenados. Uma vez por mês, faça uma rega abundante somente com água limpa para reduzir sais, especialmente em vasos plásticos e ambientes internos.",
    rega: "Mantenha umidade regular e uniforme, regando quando a superfície começar a perder umidade. O substrato não deve secar totalmente por longos períodos nem permanecer encharcado. Como os caules caminham sobre a superfície, água parada junto aos nós favorece podridões. No inverno, apenas ajuste a frequência à menor evaporação, sem impor repouso seco.",
    suporte: "🥇 Vaso plástico largo e raso, permitindo expansão horizontal dos caules.\n🥈 Bacia ou jardineira baixa com boa drenagem.\n🥉 Terrário ventilado ou parcialmente aberto; recipientes herméticos e constantemente condensados aumentam o risco de fungos e podridões.",
    substrato: ["🥇 Chips de coco pequenos + pinus fino + perlita de granulometria fina/média + pequena fração de vermiculita (até 10%).","🥈 Fibra de coco + perlita de granulometria fina/média + esfagno picado + casca de arroz carbonizada."],
    formasCultivo: {
        perfilVisual: "orquidea-joia-terrestre-rizoma-rastejante",
        destaque: "Vaso plástico",
        resumo: "Orquídea-joia terrestre de caules rastejantes, adaptada a luz indireta e meio orgânico arejado, levemente úmido. Precisa de recipiente largo e raso, com drenagem e espaço horizontal.",
        metodos: [
            { nome: "Vaso plástico", asset: "vaso-plastico", estrelas: 5, status: "Mais recomendado na ficha", texto: "Vaso largo e raso com furos de drenagem, permitindo expansão horizontal dos caules." },
            { nome: "Vaso de Barro", asset: "vaso-barro", estrelas: 4, status: "Alternativa", texto: "Cuia larga e rasa, com umidade monitorada para evitar secagem excessiva." },
            { nome: "Vaso plástico vasado", asset: "vaso-plastico-vasado", estrelas: 3, status: "Uso condicional", texto: "Recipiente baixo e ventilado, desde que a mistura não seque rapidamente demais." },
            { nome: "Cachepô de Madeira", asset: "cesto-madeira", estrelas: 2, status: "Uso condicional", texto: "Somente com recipiente interno drenante e meio orgânico que preserve umidade; não é a opção preferencial." }
        ]
    },
    substratoVisual: {
        titulo: "Substrato ideal",
        contexto: "Mistura orgânica arejada para vaso largo e raso",
        resumo: "Meio leve e humoso, com retenção moderada e boa drenagem, sem compactar nem encharcar os caules rastejantes.",
        justificativa: "A receita quantifica os quatro componentes da primeira mistura qualitativa já registrada na ficha. Percentuais são estimativas horticulturais ainda não homologadas pela MACS 1.0.",
        receitaTexto: "40% fibra de coco + 25% casca de arroz carbonizada + 20% perlita + 15% casca de pinus fina.",
        perfil: ["Terrestre", "Rizoma rastejante", "Folhas aveludadas", "Umidade moderada", "Luz indireta"],
        comportamento: [
            { nome: "Retenção", valor: 4, icone: "💧" },
            { nome: "Aeração", valor: 4, icone: "💨" },
            { nome: "Secagem", valor: 2, icone: "⚡" },
            { nome: "Compactação", valor: 2, icone: "🧱" }
        ],
        itens: [
            { asset: "fibra-coco", nome: "Fibra de coco", proporcao: "40%", nota: "base orgânica", finalidade: "Conserva umidade moderada com textura leve." },
            { asset: "casca-arroz-carbonizada", nome: "Casca de arroz carbonizada", proporcao: "25%", nota: "estrutura", finalidade: "Melhora a porosidade e a drenagem." },
            { asset: "perlita", nome: "Perlita", proporcao: "20%", nota: "aeração", finalidade: "Evita compactação e amplia espaços de ar." },
            { asset: "casca-pinus", nome: "Casca de pinus fina", proporcao: "15%", nota: "matéria orgânica", finalidade: "Acrescenta estrutura e apoio às raízes superficiais." }
        ],
        alerta: "Evitar sol direto, vaso sem drenagem, terrário hermético, substrato pesado e caules profundamente enterrados. Manter nós e caules sobre a superfície e cobrir apenas as raízes.",
        notaEvidencia: "MACS 1.0 — revisão da primeira passagem documental: Ludisia discolor, orquídea-joia TERRESTRE de rizoma rastejante; vaso largo e raso, meio orgânico com umidade homogênea e boa drenagem. Suportes plástico 5 estrelas, barro 4, plástico vasado 3, cachepô madeira 2; notas não homologadas. Receita visual: 40% fibra de coco + 25% casca de arroz carbonizada + 20% perlita + 15% pinus fino = 100%; receitaTexto e itens concordam. DIVERGÊNCIA: justificativa afirma que a fórmula quantifica a primeira qualitativa (chips de coco pequenos + pinus fino + perlita fina/média + vermiculita até 10%), mas a visual usa fibra de coco e arroz carbonizado, omitindo chips e vermiculita. A segunda qualitativa (fibra coco + perlita + esfagno picado + arroz carbonizado) também difere por conter esfagno e não pinus. Corrigir somente esta nota de evidência, sem modificar a justificativa, receitas ou outros campos. Avaliar retenção/oxigenação para hábito terrestre, ausência de componente humoso e granulometria da perlita. Meta até 25 produtores brasileiros específicos não atingida; percentuais e estrelas NÃO HOMOLOGADOS.";
    },
    errosComuns: "Expor ao sol direto; manter em sombra total sem claridade; enterrar profundamente os caules; usar substrato pesado ou encharcado; cultivar em vaso sem drenagem; manter terrário fechado e saturado; molhar abundantemente os nós no fim do dia; usar adubo concentrado; compactar esfagno sobre os caules; permitir acúmulo de sais.",
    dica: "Deixe os caules rastejarem sobre a superfície e cubra apenas as raízes. Os nós próximos ao ar emitem novos brotos com facilidade e podem ser usados para propagação. Um vaso mais largo do que profundo combina melhor com seu crescimento natural e reduz o risco de um centro permanentemente encharcado.",
    revisaoCientificaIAR: {
        "nome": "Ludisia discolor",
        "statusTaxonomico": "Espécie/nome infraespecífico tratado como aceito na revisão taxonômica de referência.",
        "sinonimosPrincipais": "Verificados prioritariamente em POWO/GBIF/Tropicos; manter apenas os relevantes ao catálogo.",
        "morfologiaDimensoes": "Uma orquídea admirada primeiro pelas folhas e só depois pelas flores. A Ludisia discolor, famosa como orquídea-joia, forma tapetes de caules rastejantes com folhas aveludadas em verde muito escuro a vinho, marcadas por nervuras claras, rosadas ou avermelhadas. É uma planta terrestre de floresta sombreada e cresce bem em vasos largos, onde seus ramos podem avançar horizontalment",
        "habitatAltitudeClima": "Chão de florestas úmidas · serapilheira e húmus. | Quente a intermediário · úmido e sombreado.",
        "distribuicaoGeografica": "China, Indochina, Malesia e Filipinas.",
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
        "indice": 22,
        "classificacao": "Fácil",
        "cultivoEstrelas": 5,
        "criterios": {
            "temperatura": {
                "notaDificuldade": 1,
                "peso": 15
            },
            "rega": {
                "notaDificuldade": 1,
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
                "notaDificuldade": 0,
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
        }
    },
        adaptacaoRegional: {
        litoralQuente: { texto: "Ao litoral quente em local sombreado, claro e ventilado. Use vaso largo, substrato humícola porém arejado e evite ambientes abafados e saturados durante noites quentes." },
        montanhaFrio: { texto: "Em regiões serranas. Proteja de frio excessivo e reduza a rega apenas quando a evaporação cair, sem deixar o substrato secar completamente." }
    },
    mesesFloracao: [8, 9, 10, 11],
    "selosCultivo": {
        "rega": { "nivel": "sazonal" },
        "climaFloracao": { "faixa": "quente" }
    },
        avaliacoes: {
        cultivo: 5,
        floracao: 3,
        perfume: 1,
        luminosidade: 2,
        agua: 4,
        raridade: 2
    }
};
