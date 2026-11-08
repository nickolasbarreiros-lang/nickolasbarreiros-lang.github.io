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
    climaFloracao: "Gosta de clima intermediário a fresco, umidade elevada e noites mais amenas. A montanha oferece boas condições de floração; no litoral quente, evite raízes superaquecidas e ar parado. Mantenha luz filtrada e umidade regular, deixando a água escoar bem. Não precisa de repouso seco para florescer. O desenvolvimento de uma touceira saudável é mais importante que provocar mudanças bruscas de temperatura.",
        iluminacao: {
        sombrite: "Cerca de 70%",
        solDireto: "Não permitido",
        horario: "",
        observacoes: "Prefere baixa luminosidade, com sombra clara e luz indireta constante, sem sol direto. Cerca de 70% de sombreamento é uma referência inicial, ajustável conforme a claridade disponível. Como a touceira é pequena, o excesso de radiação aquece rapidamente folhas e raízes e favorece a desidratação. Folhas compactas e firmes indicam bom equilíbrio; crescimento fraco pode sugerir sombra profunda demais. Amarelecimento, manchas secas e perda rápida de firmeza pedem mais proteção. Ajuste a exposição gradualmente.",
        seloLuz: "azul"
    },
    floracao: "Floresce principalmente de outubro a dezembro. As hastes muito curtas surgem junto à base das folhas e produzem flores solitárias, embora várias possam abrir ao mesmo tempo em touceiras maduras. Cada flor mede aproximadamente 1 cm e apresenta tons brancos ou creme, pequenas pintas arroxeadas, sépalas de pontas estreitas e labelo discretamente amarelado. Geralmente não apresenta perfume perceptível. A duração das flores ainda é pouco conhecida.",
    adubacao: "🌿 Orgânica: evite bokashi diretamente no pequeno recipiente, pois é difícil dosar sem aumentar decomposição e sais.\n💧 Mineral/Foliar: NPK equilibrado em 1/4 da dose a cada 10–15 dias durante crescimento ativo.\n🧪 Liberação lenta: não recomendada para recipientes tão pequenos.\n🚿 Lavagem: faça regas abundantes apenas com água periodicamente para remover sais.\n💧 Água: baixa condutividade é especialmente benéfica às raízes finas.",
    rega: "Mantenha umidade relativamente estável, mas nunca uma massa de substrato quente e saturada. Regue novamente quando o material ao redor das raízes estiver se aproximando da secagem. Em montagem com pouco musgo, pode exigir rega diária no verão; em vaso com esfagno, o intervalo deve ser maior. Evite tanto seca prolongada quanto encharcamento contínuo.",
    suporte: "🥇 Placa pequena de cortiça ou madeira com camada fina de esfagno — máxima aeração.\n🥈 Vaso miniatura de barro — ajuda a dissipar calor por evaporação.\n🥉 Cachepô pequeno e muito aberto — útil com mistura extremamente leve.\nMantenha a touceira íntegra e evite manipulações frequentes.",
    substrato: ["Casca de pinus fina + perlita de granulometria adequada a miniaturas + esfagno de fibra longa solto","Chips de coco pequenos lavados + casca de pinus fina + perlita de granulometria adequada a miniaturas"],
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
        resumo: "Em vaso raso, pinus fino, carvão pequeno e esfagno solto em partes iguais; manter umidade sem saturar raízes delicadas.",
        justificativa: "Dryadella lilliputiana pode ser montada em placa ou tronco com uma pequena quantidade de esfagno sob as raízes, desde que receba umidade frequente e boa ventilação. Em vaso miniatura raso, a casca de pinus fina oferece apoio, o carvão vegetal pequeno favorece a aeração e o esfagno solto conserva umidade. Evite compactação e não deixe a mistura permanecer saturada.",
        receitaTexto: "Partes iguais (1:1:1 em volume): 33,3% casca de pinus fina + 33,3% carvão vegetal pequeno + 33,4% esfagno de fibra longa solto (arredondamento para totalizar 100%).",
        perfil: ["Micro-orquídea montana", "Sem pseudobulbos", "Raízes delicadas", "Umidade frequente", "Noites amenas"],
        comportamento: [
            { nome: "Retenção", valor: 4, icone: "💧" },
            { nome: "Aeração", valor: 4, icone: "💨" },
            { nome: "Secagem", valor: 2, icone: "⚡" },
            { nome: "Compactação", valor: 2, icone: "🧱" }
        ],
        itens: [
            { asset: "casca-pinus", nome: "Casca de pinus fina", proporcao: "33,3%", nota: "estrutura", finalidade: "Oferece apoio às raízes finas sem compactação." },
            { asset: "carvao-vegetal", nome: "Carvão vegetal pequeno", proporcao: "33,3%", nota: "aeração", finalidade: "Complementa a porosidade da mistura em recipiente raso." },
            { asset: "esfagno", nome: "Esfagno de fibra longa solto", proporcao: "33,4%", nota: "reserva hídrica", finalidade: "Mantém umidade entre regas; utilizar sem compressão junto ao rizoma." }
        ],
        alerta: "Evitar noites quentes e abafadas, esfagno compactado ou encharcado, secagem por vários dias e divisão da touceira. Água em excesso não compensa temperatura elevada.",
        notaEvidencia: "MACS 1.1: POWO/Kew aceita Dryadella lilliputiana; revisão taxonômica brasileira (Rodriguésia, 2024) documenta hábito epífito, sem testar substratos. Orquidário Matsuoka recomenda montagem em toco, sem proporções. O blog Orquídeas Encanto e Paixão publica para esta espécie vaso raso com partes iguais de pinus, carvão e esfagno: https://orquideasjph.wordpress.com/2018/12/09/dryadella-liliputiana/ . Proporção volumétrica 1:1:1 (33,3/33,3/33,4 após arredondamento) é orientação específica de blog de cultivo, NÃO homologação experimental. Uma fonte comercial brasileira da espécie (Orquidário Matsuoka) e uma fonte brasileira de orientação de cultivo (blog Orquídeas Encanto e Paixão) identificadas; somente o blog apresenta receita em partes iguais. Não equivale a duas receitas de produtores nem atinge a meta de 25. Alternativas qualitativas sem percentuais publicados; estrelas provisórias."
    },
    errosComuns: [
    "Manter a planta em noites quentes e abafadas.",
    "Deixar esfagno permanentemente encharcado.",
    "Deixar raízes secarem por vários dias.",
    "Usar água muito salina.",
    "Aplicar adubação concentrada.",
    "Cultivar sem circulação de ar.",
    "Dividir touceiras diminutas.",
    "Expor o suporte ao sol direto."
],
    dica: "🏆 O porte diminuto desta espécie exige atenção especial à temperatura do suporte e à secagem das raízes. Prefira uma montagem pequena, com película fina de esfagno solto, em local sombreado, fresco e ventilado. Em dias quentes, verifique a umidade com frequência, mas não transforme o suporte em uma massa permanentemente encharcada. Evite sol direto e adubação concentrada, que podem danificar raízes delicadas. Manter condições estáveis e impedir o superaquecimento costuma ser mais importante que qualquer estímulo artificial à floração.",
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
    mesesFloracao: [10, 11, 12],
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
