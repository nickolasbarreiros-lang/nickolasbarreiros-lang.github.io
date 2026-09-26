// Ficha científica e de cultivo refinada e enriquecida.

export const bifrenariaAureofulva = {
    id: "bifrenaria-aureofulva",
    nome: "Bifrenaria aureofulva",
    genero: "Bifrenaria",
    sinonimo: "Maxillaria aureofulva",
    tipo: "Espécie botânica",
    dificuldade: "Moderada",
    caracteristicas: [
        "Brasileira",
        "Flores amarelo-alaranjadas",
        "Perfumada",
        "Epífita",
    ],
    fotos: [
        "imagens/Bifrenaria aureofulva/Bifrenaria aureofulva1.jpg",
        "imagens/Bifrenaria aureofulva/Bifrenaria aureofulva2.webp",
        "imagens/Bifrenaria aureofulva/Bifrenaria aureofulva3.jpg",
        "imagens/Bifrenaria aureofulva/Bifrenaria aureofulva4.jpg"
    ],
    descricao: "Uma pequena explosão de tons dourados da flora brasileira! A Bifrenaria aureofulva produz hastes com várias flores amarelo-douradas a alaranjadas, geralmente perfumadas, que se destacam sobre a folhagem verde e plicada. É uma epífita de florestas úmidas do leste e sul do Brasil, formando pseudobulbos compactos com uma única folha no ápice. As flores têm cerca de 2,5 cm e podem aparecer em grupos numerosos para o porte da planta, criando uma floração bastante alegre. Na natureza ocorre desde áreas relativamente baixas até regiões montanas, o que ajuda a explicar sua boa capacidade de adaptação, embora plantas de procedências mais elevadas apreciem noites amenas e excelente ventilação.",
    origem: "Brasil",
    regiao: "Leste e Sul do Brasil · Mata Atlântica",
    habitat: "Florestas úmidas · epífita · ~200–1.500 m.",
    clima: "Quente a fresco · úmido e ventilado.",
    climaFloracao: "A floração é favorecida pela maturação completa dos pseudobulbos, boa luminosidade filtrada e noites mais amenas. Após o amadurecimento do crescimento, reduza moderadamente as regas acompanhando a menor atividade da planta, sem impor seca absoluta.",
    iluminacao: {
        sombrite: "50% a 60%",
        solDireto: "Permitido com restrição",
        horario: "Início da manhã ou final da tarde",
        observacoes: "Prefere luz filtrada de média a alta intensidade. Folhas muito escuras podem indicar sombra excessiva; manchas secas e amarelecimento localizado sugerem sol forte. Em clima quente, 50% a 60% de sombreamento é mais seguro que exposição muito intensa."
    },
    floracao: "Floresce principalmente no verão. A haste basal, ereta a pendente, surge no pseudobulbo recém-maduro e pode portar de poucas a numerosas flores, geralmente 3–15. Em clima litorâneo quente a época pode deslocar algumas semanas conforme o ciclo do novo crescimento; por isso o amadurecimento do pseudobulbo é indicador mais confiável que uma data fixa.",
    adubacao: "🌿 Orgânica: bokashi em pequena dose durante o crescimento ativo, sempre protegido em porta-adubo.\n💧 Foliar/mineral: NPK equilibrado, como 20-20-20, em baixa concentração a cada 10 a 15 dias enquanto houver brotos e raízes ativas.\n🧪 Liberação lenta: Osmocote 14-14-14 em dose reduzida e afastado das raízes novas. Após a maturação dos pseudobulbos, reduza gradualmente a frequência da adubação em vez de suspendê-la abruptamente.",
    rega: "Regue bem durante a brotação e formação dos pseudobulbos, permitindo que o substrato perca parte da umidade entre as irrigações. Após a maturação, reduza moderadamente a frequência, sobretudo no inverno. Não mantenha a planta totalmente seca por períodos prolongados e não permita enrugamento acentuado dos pseudobulbos.",
    suporte: "🥇 Vaso de barro pequeno a médio e bem drenado.\n🥈 Cachepô de madeira muito ventilado.\n🥉 Placa de madeira ou tronco em ambientes com alta umidade relativa e regas frequentes.",
    formasCultivo: {
        perfilVisual: "bifrenaria",
        destaque: "Vaso de barro",
        resumo: "Espécie pseudobulbosa brasileira, epífita e também registrada como rupícola; responde melhor a cultivo firme, muito drenante e arejado, sem permanecer encharcada junto à base dos pseudobulbos.",
        metodos: [
            { nome: "Vaso de barro", asset: "bifrenaria-aureofulva-vaso-barro", estrelas: 5, status: "Ideal", texto: "Combina estabilidade para a touceira com maior troca gasosa e secagem mais segura da mistura, reduzindo o risco de umidade persistente junto aos pseudobulbos." },
            { nome: "Vaso plástico vasado", asset: "vaso-plastico-vasado", estrelas: 4, status: "Muito recomendado", texto: "Oferece excelente ventilação lateral e drenagem; exige atenção para não secar rápido demais durante o crescimento ativo." },
            { nome: "Vaso plástico", asset: "vaso-plastico", estrelas: 4, status: "Muito recomendado", texto: "Funciona bem com vaso proporcional à touceira e mistura estrutural muito drenante, controlando a frequência de rega por reter umidade por mais tempo." },
            { nome: "Cesto de madeira", asset: "cesto-madeira", estrelas: 3, status: "Adequado", texto: "Mantém alta aeração e drenagem, mas acelera bastante a secagem e aumenta a necessidade de regas no período quente." }
        ]
    },
    substrato: [
        "Brita pequena/média + casca de macadâmia média + carvão vegetal médio.",
        "Brita pequena/média + casca de pinus média + carvão vegetal médio.",
        "Brita pequena/média + casca de arroz carbonizada + carvão vegetal médio + casca de macadâmia média.",
        "Brita pura, com rega e adubação ajustadas ao cultivo mineral de baixíssima retenção."
    ],
    substratoVisual: {
        titulo: "Substrato ideal",
        contexto: "Para cultivo em vaso",
        resumo: "Mistura de altíssima aeração e drenagem, com baixa retenção e estrutura durável.",
        justificativa: "Bifrenarias exigem excelente oxigenação das raízes e não toleram substrato permanecendo molhado por longos períodos. A brita domina a drenagem e mantém macroporos permanentes; a macadâmia acrescenta estrutura orgânica durável; o carvão mantém a mistura aberta; e o pinus entra apenas como fração minoritária para oferecer pequena reserva de umidade sem reduzir excessivamente a aeração.",
        receitaTexto: "35% brita pequena/média + 30% casca de macadâmia média + 20% carvão vegetal médio + 15% casca de pinus média.",
        perfil: ["Raízes finas a médias", "Aeração máxima", "Baixa retenção", "Secagem muito rápida", "Alta estabilidade", "Baixa compactação"],
        itens: [
            { asset: "brita-pura", nome: "Brita pequena/média", proporcao: "35%", nota: "drenagem + macroporos", finalidade: "Forma a base mineral da mistura, favorecendo drenagem muito rápida, oxigenação intensa e estabilidade estrutural." },
            { asset: "macadamia", nome: "Casca de macadâmia média", proporcao: "30%", nota: "estrutura + durabilidade", finalidade: "Mantém grandes espaços de ar e acrescenta uma fração orgânica estrutural de degradação lenta." },
            { asset: "carvao-vegetal", nome: "Carvão vegetal médio", proporcao: "20%", nota: "aeração + estabilidade", finalidade: "Ajuda a conservar a mistura aberta e reduz a tendência de compactação ao longo do cultivo." },
            { asset: "casca-pinus", nome: "Casca de pinus média", proporcao: "15%", nota: "pequena reserva hídrica", finalidade: "Entra apenas como fração minoritária, fornecendo alguma retenção entre regas sem transformar a mistura em um substrato úmido." }
        ],
        comportamento: [
            { nome: "Retenção", valor: 1, icone: "💧" },
            { nome: "Aeração", valor: 5, icone: "💨" },
            { nome: "Secagem", valor: 5, icone: "☀️" },
            { nome: "Compactação", valor: 1, icone: "🧱" }
        ],
        alerta: "Não mantenha as raízes permanentemente molhadas. Regue abundantemente no crescimento ativo, mas permita secagem clara entre regas. Em clima quente, ajuste a frequência pela velocidade de secagem do vaso, sem compensar com materiais excessivamente retentivos."
    },
    errosComuns: "Tratar a espécie como planta de repouso totalmente seco; cultivar em sombra profunda; expor a sol forte; usar vasos muito grandes; manter substrato compacto ou degradado; reduzir a água antes do pseudobulbo amadurecer; replantar sem raízes novas iniciando; aplicar fertilizante concentrado em raízes sensíveis.",
    dica: "Trate-a como uma verdadeira orquídea do sol. Ela exige alta luminosidade (claridade intensa, mas sem sol direto) e vasos bem apertados com drenagem perfeita. O grande segredo para conseguir hastes repletas de flores laranjas é mantê-la com raízes restritas, boa ventilação e regas fartas apenas no período de crescimento ativo.",
    revisaoCientificaIAR: {
        "nome": "Bifrenaria aureofulva",
        "statusTaxonomico": "Espécie/nome infraespecífico tratado como aceito na revisão taxonômica de referência.",
        "sinonimosPrincipais": "Verificados prioritariamente em POWO/GBIF/Tropicos; manter apenas os relevantes ao catálogo.",
        "morfologiaDimensoes": "Uma pequena explosão de tons dourados da flora brasileira! A Bifrenaria aureofulva produz hastes com várias flores amarelo-douradas a alaranjadas, geralmente perfumadas, que se destacam sobre a folhagem verde e plicada. É uma epífita de florestas úmidas do leste e sul do Brasil, formando pseudobulbos compactos com uma única folha no ápice. As flores têm cerca de 2,5 cm e podem ",
        "habitatAltitudeClima": "Florestas úmidas · epífita · ~200–1.500 m. | Quente a fresco · úmido e ventilado.",
        "distribuicaoGeografica": "Leste e Sul do Brasil · Mata Atlântica.",
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
        "indice": 27,
        "classificacao": "Moderada",
        "cultivoEstrelas": 4,
        "criterios": {
            "temperatura": {
                "notaDificuldade": 2,
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
        litoralQuente: { texto: "Cultivo moderadamente exigente. Em Litoral de clima quente, use vaso de barro, substrato aberto, 50% a 60% de sombra e forte ventilação. Evite aquecimento excessivo das raízes e seca prolongada." },
        montanhaFrio: { texto: "Condições muito favoráveis. Noites frescas ajudam a maturação e a floração; no inverno, apenas reduza as regas conforme a evaporação cair." }
    },
    mesesFloracao: [1, 2, 3],
    "selosCultivo": {
        "rega": { "nivel": "moderada", "regime": "reduzir-inverno" },
        "climaFloracao": { "faixa": "ameno", "quedaTermica": true }
    },
        avaliacoes: {
        cultivo: 4,
        floracao: 3,
        perfume: 3,
        luminosidade: 3,
        agua: 3,
        raridade: 4
    }
};