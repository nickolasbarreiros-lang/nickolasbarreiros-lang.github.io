// Ficha científica e de cultivo refinada e enriquecida.

export const aspasiaLunata = {
    id: "aspasia-lunata",
    nome: "Aspasia lunata",
    genero: "Aspasia",
    sinonimo: "Odontoglossum lunatum",
    tipo: "Espécie botânica",
    dificuldade: "Moderada",
    caracteristicas: [
        "Epífita",
        "Pseudobulbos comprimidos",
        "Flores contrastantes",
        "Crescimento vigoroso",
    ],
    fotos: [
        "imagens/Aspasia lunata/Aspasia lunata1.webp",
        "imagens/Aspasia lunata/Aspasia lunata2.webp",
        "imagens/Aspasia lunata/Aspasia lunata3.webp",
        "imagens/Aspasia lunata/Aspasia lunata4.webp",
    ],
    descricao: "Uma orquídea brasileira elegante e discreta, a Aspasia lunata chama atenção pelo contraste entre as pétalas e sépalas verde-amareladas, marcadas de castanho, e o labelo amplo em tons claros a violáceos. É uma epífita de porte relativamente compacto, encontrada em florestas úmidas da Bolívia e de várias regiões do Brasil, onde cresce apoiada em árvores sob boa luminosidade filtrada. Seus pseudobulbos achatados carregam folhas estreitas e firmes, enquanto as hastes curtas surgem junto à base dos pseudobulbos maduros e normalmente produzem poucas flores — justamente por isso, cada flor ganha bastante destaque. O nome lunata faz referência à ideia de meia-lua, associada à forma de estruturas florais da espécie.",
    origem: "América do Sul",
    regiao: "Bolívia · Brasil (Centro-Oeste, Sudeste e Sul)",
    habitat: "Florestas tropicais úmidas; epífita sob luz filtrada.",
    clima: "Quente a fresco · úmido e ventilado.",
    climaFloracao: "A floração é favorecida por pseudobulbos maduros, boa luminosidade filtrada, ventilação constante e crescimento vegetativo vigoroso. Não necessita de repouso seco rigoroso; após a maturação dos pseudobulbos, apenas aumente moderadamente o intervalo entre as regas conforme a evaporação diminuir.",
    iluminacao: {
        sombrite: "60% a 70%",
        solDireto: "Permitido com restrição",
        horario: "Somente início da manhã",
        observacoes: "Prefere luz filtrada de média intensidade. Folhas muito verde-escuras acompanhadas de baixa floração indicam sombra excessiva; amarelamento ou manchas secas sinalizam radiação forte demais. Em clima litorâneo quente, 60% a 70% de sombreamento costuma oferecer bom equilíbrio."
    },
    floracao: "A floração é registrada principalmente na primavera, podendo avançar para o início do verão conforme procedência e condições de cultivo. As inflorescências basais são curtas, eretas e normalmente carregam 1 a 3 flores relativamente grandes para o porte da planta. Após a maturação dos pseudobulbos e a floração, pode ocorrer desaceleração vegetativa; no cultivo isso deve significar apenas regas um pouco mais espaçadas, nunca repouso seco absoluto.",
    adubacao: "🌿 Orgânica: bokashi em pequena dose, protegido em saquinho e usado durante o crescimento ativo.\n💧 Foliar/mineral: NPK equilibrado, como 20-20-20, em baixa concentração a cada 10 a 15 dias enquanto houver brotação e raízes ativas.\n🧪 Liberação lenta: Osmocote 14-14-14 em dose moderada e sempre afastado de raízes novas. Após a maturação dos pseudobulbos, reduza a frequência da adubação conforme o crescimento desacelerar.",
    rega: "Durante a formação de novos brotos e raízes, regue regularmente e permita secagem parcial do substrato entre as irrigações. Após a maturação dos pseudobulbos, aumente ligeiramente o intervalo entre regas, sobretudo em períodos mais frios, sem permitir enrugamento severo.",
    suporte: "🥇 Vaso de barro ou plástico proporcional à touceira, com excelente drenagem.\n🥈 Cachepô de madeira bem ventilado.\n🥉 Cesto plástico raso e perfurado.",
    formasCultivo: {
        perfilVisual: "aspasia",
        destaque: "Vaso plástico",
        resumo: "Epífita de florestas úmidas que forma touceiras com facilidade. No Brasil é cultivada tanto em casca de pinus quanto montada em madeira, desde que não falte umidade.",
        metodos: [
            { nome: "Vaso plástico", asset: "vaso-plastico", estrelas: 5, status: "Ideal", texto: "Conserva umidade moderada e favorece formação de touceira quando usado com mistura aerada e recipiente proporcional." },
            { nome: "Vaso de barro", asset: "vaso-barro", estrelas: 4, status: "Muito recomendado", texto: "Ajuda a acelerar a secagem em clima quente e úmido, sendo ótima opção quando as regas são frequentes." },
            { nome: "Cesto de madeira", asset: "cesto-madeira", estrelas: 4, status: "Muito recomendado", texto: "Combina boa ventilação com espaço para expansão, mas exige mistura que não seque rápido demais." },
            { nome: "Placa / tronco", asset: "placa-tronco", estrelas: 3, status: "Adequado", texto: "Orquidários brasileiros indicam placas de madeira; funciona melhor em ambiente úmido e com regas regulares." },
        ]
    },
    substrato: [
        "Para cultivo em recipiente, use a mistura-base indicada abaixo e ajuste apenas a retenção conforme o microclima.",
        "Em montagem ou cesto muito aberto, reduza o volume de substrato e use somente o necessário para estabilizar a umidade.",
        "Evite terra, misturas finas, compactadas ou materiais em decomposição."
    ],
    substratoVisual: {
        titulo: "Substrato ideal",
        contexto: "Para cultivo em recipiente",
        resumo: "Mistura-base prática definida pelo hábito da espécie, pelas fontes botânicas e pela prática de cultivo brasileira.",
        justificativa: "Produtor brasileiro recomenda casca de pinus ou placa de madeira, sem deixar faltar umidade. A mistura-base mantém pinus como componente principal e acrescenta coco, carvão e pouco esfagno para equilibrar umidade e aeração.",
        receitaTexto: "Mistura-base sugerida: 50% casca de pinus média + 25% chips de coco médios + 15% carvão vegetal + 10% esfagno solto.",
        perfil: ["Umidade moderada, sem saturação", "Boa aeração", "Drenagem eficiente", "Materiais usuais no cultivo brasileiro"],
        itens: [
            { asset: "casca-pinus", nome: "Casca de pinus média", proporcao: "50%", nota: "estrutura + drenagem", finalidade: "Mantém estrutura e espaços de ar ao redor das raízes." },
            { asset: "fibra-coco", nome: "Chips de coco médios", proporcao: "25%", nota: "retenção moderada", finalidade: "Retém umidade moderada mantendo estrutura e boa porosidade." },
            { asset: "carvao-vegetal", nome: "Carvão vegetal", proporcao: "15%", nota: "aeração + estabilidade", finalidade: "Ajuda a manter a mistura aberta, estável e de baixa compactação." },
            { asset: "esfagno", nome: "Esfagno solto", proporcao: "10%", nota: "reserva discreta de umidade", finalidade: "Acrescenta uma reserva controlada de umidade sem dominar a mistura." },
        ],
        alerta: "A espécie não gosta de sombra profunda nem de mistura encharcada. Em placa, aumente a frequência de rega; em vaso plástico, controle a secagem antes de regar novamente."
    },
    errosComuns: "Cultivar em sombra profunda; expor ao sol direto forte; manter o substrato permanentemente encharcado; usar mistura fina e compactada; usar vaso desproporcionalmente grande; dividir a touceira em porções muito pequenas; deixar os pseudobulbos enrugarem durante o crescimento ativo; impor repouso seco severo sem necessidade.",
    dica: "Evite dividir Aspasia lunata em mudas muito pequenas. Preserve ao menos três a quatro pseudobulbos adultos por divisão para manter reservas suficientes, recuperação rápida e maior capacidade de produzir hastes florais robustas. Mais importante que 'apertar' a planta é oferecer um vaso proporcional, muita aeração e boa luminosidade filtrada.",
    revisaoCientificaIAR: {
        "nome": "Aspasia lunata",
        "statusTaxonomico": "Espécie/nome infraespecífico tratado como aceito na revisão taxonômica de referência.",
        "sinonimosPrincipais": "Verificados prioritariamente em POWO/GBIF/Tropicos; manter apenas os relevantes ao catálogo.",
        "morfologiaDimensoes": "Uma orquídea brasileira elegante e discreta, a Aspasia lunata chama atenção pelo contraste entre as pétalas e sépalas verde-amareladas, marcadas de castanho, e o labelo amplo em tons claros a violáceos. É uma epífita de porte relativamente compacto, encontrada em florestas úmidas da Bolívia e de várias regiões do Brasil, onde cresce apoiada em árvores sob boa luminosidade filtr",
        "habitatAltitudeClima": "Florestas tropicais úmidas; epífita sob luz filtrada. | Quente a fresco · úmido e ventilado.",
        "distribuicaoGeografica": "Bolívia; Centro-Oeste, Sudeste e Sul do Brasil.",
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
            "indice": 79,
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
        litoralQuente: { texto: "Adapta-se bem quando recebe ventilação forte, luz filtrada e substrato de secagem rápida. Em Litoral de clima quente, evite calor abafado, sol forte da tarde e excesso de água durante períodos nublados." },
        montanhaFrio: { texto: "Tolera noites frescas e pode florescer muito bem. Reduza a frequência das regas nos períodos frios, mas proteja de geadas e de substrato saturado por muitos dias." }
    },
    mesesFloracao: [9, 10, 11],
    "selosCultivo": {
        "rega": { "nivel": "moderada", "regime": "reduzir-repouso" },
        "climaFloracao": { "faixa": "intermediario" }
    },
        avaliacoes: {
        cultivo: 3,
        floracao: 4,
        perfume: 2,
        luminosidade: 3,
        agua: 3,
        raridade: 2
    }
};