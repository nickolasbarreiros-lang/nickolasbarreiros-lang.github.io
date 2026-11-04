// Ficha científica e de cultivo revisada — Miltonia russelliana.
// Conteúdo adaptado ao padrão editorial e regional do Orquidário Digital.

export const miltoniaRusselliana = {
    id: "miltonia-russelliana",
    nome: "Miltonia russelliana",
    genero: "Miltonia",
    tipo: "Espécie botânica epífita brasileira",
    dificuldade: "Fácil",
    caracteristicas: [
        "Espécie brasileira",
        "Mata Atlântica",
        "Flores discretas",
        "Haste longa",
        "Clima intermediário",
        "Floração outono-inverno"
    ],
    fotos: [
        "imagens/Miltonia russelliana/Miltonia russelliana1.jpg",
        "imagens/Miltonia russelliana/Miltonia russelliana2.jpg",
        "imagens/Miltonia russelliana/Miltonia russelliana3.jpg",
        "imagens/Miltonia russelliana/Miltonia russelliana4.jpg"
    ],
    descricao: "Miltonia russelliana é uma espécie brasileira de beleza mais sutil do que as Miltonia de flores muito abertas. Forma pseudobulbos compactos, verde-oliva, com duas folhas estreitas no ápice, e produz hastes arqueadas que podem chegar a cerca de 60 cm, carregando várias flores. Sépalas e pétalas permanecem relativamente fechadas ao redor da coluna, enquanto o labelo mais claro e marcado em púrpura aparece como ponto de contraste. É uma orquídea elegante para quem aprecia espécies botânicas menos óbvias, e costuma responder muito bem quando cultivada com boa umidade, luz filtrada e bastante movimento de ar.",
    origem: "Brasil",
    regiao: "Sudeste e Sul do Brasil",
    habitat: "Epífita de florestas úmidas e áreas ripárias, em ambiente ventilado.",
    clima: "Intermediário a ameno, úmido e ventilado.",
    climaFloracao: "A espécie floresce principalmente no outono e inverno. Em clima quente, noites um pouco mais frescas ajudam bastante, mas o fator decisivo é manter raízes ativas, boa ventilação e luminosidade suficiente sem superaquecer as folhas.",
    iluminacao: {
        sombrite: "50% a 60%",
        solDireto: "Permitido com restrição",
        horario: "Somente início da manhã",
        observacoes: "Prefere mais luz do que uma planta de sombra profunda, porém sem sol direto forte. Folhas excessivamente escuras e crescimento alongado sugerem falta de luz; amarelamento rápido e aquecimento das folhas indicam excesso."
    },
    floracao: "Predominantemente no outono e inverno. Em cultivo brasileiro, abril a agosto é uma boa janela de referência, podendo haver variações conforme região, temperatura e maturação dos pseudobulbos.",
    adubacao: "🌿 Orgânica: bokashi pode ser usado em pequena quantidade, de preferência em porta-adubo.\n💧 Foliar/mineral: NPK equilibrado, como 20-20-20, em aproximadamente 1/4 da dose comercial a cada 10 a 15 dias durante crescimento ativo.\n🧪 Liberação lenta: opcional, usando poucos grânulos em vaso ou cachepô.\n🚿 Lavagem: intercale regas com água pura para reduzir o acúmulo de sais no substrato.",
    rega: "Regue com frequência durante a formação de novos pseudobulbos, permitindo que o substrato fique apenas levemente úmido entre as irrigações. Não deixe as raízes permanecerem encharcadas, mas também evite seca prolongada. No inverno, ajuste a frequência pela velocidade real de secagem, sem impor repouso seco severo.",
    suporte: [
        "🥇 Cachepô ou cesto de madeira com substrato bem aerado.",
        "🥈 Vaso de barro ou plástico muito perfurado, proporcional ao tamanho da touceira.",
        "🥉 Montagem em madeira ou cortiça em ambientes com umidade alta e regas frequentes."
    ],
    substrato: ["Casca de macadâmia média + casca de pinus média + perlita grossa + pequena fração de fibra de coco grossa preparada","Casca de pinus média + perlita grossa + argila expandida pequena + pequena fração de esfagno de fibra longa solto"],
    formasCultivo: {
        perfilVisual: "miltonia-epifita-touceira-pseudobulbos",
        destaque: "Cachepô de Madeira",
        resumo: "Miltonia epífita de touceira compacta e hastes arqueadas, que se beneficia de raízes ventiladas, umidade regular e espaço apenas para poucos novos crescimentos.",
        metodos: [
            { nome: "Cachepô de Madeira", asset: "cesto-madeira", estrelas: null, status: "Mais recomendado na ficha", texto: "Cachepô vazado com mistura aerada, mantendo regas regulares sem encharcar." },
            { nome: "Vaso de Barro", asset: "vaso-barro", estrelas: null, status: "Alternativa", texto: "Vaso pequeno e perfurado, proporcional à touceira, com boa secagem e umidade acompanhada." },
            { nome: "Vaso plástico vasado", asset: "vaso-plastico-vasado", estrelas: null, status: "Alternativa", texto: "Vaso muito perfurado e proporcional, evitando excesso de substrato no centro." },
            { nome: "Placa / tronco", asset: "placa-tronco", estrelas: null, status: "Uso condicional", texto: "Madeira ou cortiça apenas em ambiente úmido e com regas frequentes." }
        ]
    },
    substratoVisual: {
        titulo: "Substrato ideal",
        contexto: "Mistura aerada para cachepô de madeira",
        resumo: "Equilíbrio entre umidade moderada e alta ventilação, favorecendo pseudobulbos vigorosos sem saturação prolongada.",
        justificativa: "Miltonia russelliana é uma epífita de crescimento simpodial e touceira compacta, que se beneficia de umidade regular e raízes bem ventiladas. No cachepô de madeira vazado, a casca de pinus e os chips de coco preparados sustentam a planta e conservam umidade moderada, enquanto a perlita e o carvão mantêm espaços de ar. Evite tanto o encharcamento quanto a secagem prolongada durante o crescimento e não divida a touceira em partes excessivamente pequenas.",
        receitaTexto: "35% casca de pinus média + 30% chips de coco médios preparados + 25% perlita grossa compatível com o cachepô + 10% carvão vegetal médio.",
        perfil: ["Epífita simpodial", "Touceira compacta", "Umidade regular", "Raízes arejadas", "Hastes arqueadas"],
        comportamento: [
            { nome: "Retenção", valor: 3, icone: "💧" },
            { nome: "Aeração", valor: 4, icone: "💨" },
            { nome: "Secagem", valor: 3, icone: "⚡" },
            { nome: "Compactação", valor: 1, icone: "🧱" }
        ],
        itens: [
            { asset: "casca-pinus", nome: "Casca de pinus média", proporcao: "35%", nota: "estrutura", finalidade: "Oferece suporte às raízes com umidade moderada." },
            { asset: "chips-coco", nome: "Chips de coco médios preparados", proporcao: "30%", nota: "umidade", finalidade: "Ajuda a regular a disponibilidade hídrica entre regas." },
            { asset: "perlita", nome: "Perlita grossa compatível com o cachepô", proporcao: "25%", nota: "aeração", finalidade: "Favorece drenagem e circulação de ar." },
            { asset: "carvao", nome: "Carvão vegetal médio", proporcao: "10%", nota: "porosidade", finalidade: "Contribui para a estrutura aberta da mistura." }
        ],
        alerta: "Evitar sombra profunda, vaso grande, substrato constantemente encharcado, secagem prolongada durante crescimento e divisão em porções pequenas. Preservar ventilação mesmo com umidade elevada.",
        notaEvidencia: "MACS 1.1 — revisão documental: Miltonia russelliana, epífita simpodial de touceira compacta e hastes arqueadas; umidade regular, ventilação e preservação de pseudobulbos saudáveis são importantes. Cachepô de Madeira vazado é suporte principal; estrelas dos suportes omitidas por ausência de validação quantitativa. Receita visual e textual coincidem: 35% pinus médio + 30% chips de coco médios preparados + 25% perlita grossa compatível com cachepô + 10% carvão vegetal médio = 100%. Exatamente duas outras misturas qualitativas distintas: macadâmia/pinus/perlita/pequena fração de fibra de coco grossa preparada e pinus/perlita/argila expandida pequena/pouco esfagno de fibra longa solto. Elas não fundamentam os percentuais visuais. Monitorar retenção de chips de coco, secagem e ventilação em clima quente. Sem ensaio quantitativo específico nem consulta individualizada a até 25 produtores brasileiros; percentuais NÃO HOMOLOGADOS; estrelas dos suportes omitidas. Classe D — não homologada quantitativamente."
    },
    errosComuns: [
        "Cultivar em sombra profunda",
        "Usar vaso grande demais para a touceira",
        "Manter o substrato constantemente encharcado",
        "Deixar a planta secar completamente por vários dias em crescimento",
        "Reduzir demais a ventilação para aumentar a umidade",
        "Aplicar fertilizante concentrado",
        "Dividir a touceira em partes muito pequenas",
        "Expor ao sol forte nas horas quentes"
    ],
    dica: "🏆 Não tenha pressa em dividir a Miltonia russelliana. Touceiras com vários pseudobulbos armazenam mais energia e costumam produzir hastes mais fortes. Em clima quente, mantenha-a em local claro e muito ventilado, com o vaso apenas ligeiramente apertado.",
    revisaoCientificaIAR: {
        "nome": "Miltonia russelliana",
        "statusTaxonomico": "Espécie/nome infraespecífico tratado como aceito na revisão taxonômica de referência.",
        "sinonimosPrincipais": "Verificados prioritariamente em POWO/GBIF/Tropicos; manter apenas os relevantes ao catálogo.",
        "morfologiaDimensoes": "Miltonia russelliana é uma espécie brasileira de beleza mais sutil do que as Miltonia de flores muito abertas. Forma pseudobulbos compactos, verde-oliva, com duas folhas estreitas no ápice, e produz hastes arqueadas que podem chegar a cerca de 60 cm, carregando várias flores.",
        "habitatAltitudeClima": "Epífita de florestas úmidas e áreas ripárias, em ambiente ventilado. | Intermediário a ameno, úmido e ventilado.",
        "distribuicaoGeografica": "Sudeste e Sul do Brasil.",
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
        "indice": 30,
        "classificacao": "Fácil",
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
            "muitoFacil": "0–25",
            "facil": "26–35",
            "moderada": "36–50",
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
        litoralQuente: { texto: "Boa adaptação. Tolera calor melhor que muitas Miltoniopsis, mas aprecia noites menos abafadas. Use luz filtrada, umidade regular e ventilação constante." },
        montanhaFrio: { texto: "Muito boa adaptação. Noites frescas favorecem vigor e floração, desde que as raízes não permaneçam frias e encharcadas por longos períodos." }
    },
    mesesFloracao: [4, 5, 6, 7, 8],
    "selosCultivo": {
        "rega": { "nivel": "sazonal" },
        "climaFloracao": { "faixa": "ameno" }
    },
        avaliacoes: {
        cultivo: 4,
        floracao: 3,
        perfume: 1,
        luminosidade: 3,
        agua: 4,
        raridade: 4
    }
};
