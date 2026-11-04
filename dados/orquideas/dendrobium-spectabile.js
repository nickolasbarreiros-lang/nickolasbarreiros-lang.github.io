// Ficha científica e de cultivo revisada — Dendrobium spectabile.

export const dendrobiumSpectabile = {
    id: "dendrobium-spectabile",
    nome: "Dendrobium spectabile",
    genero: "Dendrobium",
    tipo: "Espécie botânica epífita da Oceania",
    dificuldade: "Moderada",
    caracteristicas: [
        "Flores esculturais",
        "Porte médio a grande",
        "Clima quente",
        "Até ~20 flores por haste",
        "Floresta tropical úmida",
        "Crescimento robusto"
    ],
    fotos: [
        "imagens/Dendrobium spectabile/Dendrobium spectabile1.webp",
        "imagens/Dendrobium spectabile/Dendrobium spectabile2.jpg",
        "imagens/Dendrobium spectabile/Dendrobium spectabile3.jpg",
        "imagens/Dendrobium spectabile/Dendrobium spectabile4.jpg"
    ],
    descricao: "Dendrobium spectabile é uma das espécies mais extravagantes do gênero. Suas flores parecem pequenas esculturas vivas: pétalas e sépalas retorcidas, onduladas e irregulares formam desenhos quase impossíveis de repetir de uma flor para outra. A planta desenvolve hastes robustas e, quando madura, produz cachos próximos ao topo com numerosas flores de aparência exótica. Apesar do visual incomum, vem de ambientes tropicais quentes e pode ser uma ótima espécie para coleções de clima litorâneo, desde que receba bastante luz, água durante o crescimento e raízes muito bem ventiladas.",
    origem: "Oceania tropical",
    regiao: "Nova Guiné · Ilhas Salomão · Vanuatu · Nova Caledônia",
    habitat: "Epífita de florestas tropicais úmidas; ocasionalmente rupícola, de baixas a altas elevações.",
    clima: "Quente a intermediário, úmido e muito ventilado.",
    climaFloracao: "Plantas maduras florescem melhor depois de uma estação de crescimento vigoroso e bem iluminado. Não exige repouso seco severo, mas uma redução moderada das regas quando as hastes amadurecem e o clima esfria pode acompanhar o ciclo natural. Em clima quente, o desenvolvimento vegetativo tende a ser favorecido.",
    iluminacao: {
        sombrite: "40% a 60%",
        solDireto: "Permitido com restrição",
        horario: "Início da manhã ou final da tarde",
        observacoes: "Precisa de boa luminosidade para amadurecer hastes fortes. Sombra profunda pode atrasar a floração. Em clima quente, proteja apenas do sol mais agressivo do meio do dia e mantenha boa circulação de ar."
    },
    floracao: "Predominantemente no inverno e início da primavera. Para o calendário do site, junho a outubro funciona como janela de referência, com variações conforme origem e condições de cultivo.",
    adubacao: "🌿 Orgânica: bokashi pode ser usado em pequena quantidade durante crescimento ativo.\n💧 Foliar/mineral: NPK equilibrado, como 20-20-20, em aproximadamente 1/4 da dose comercial a cada 10 a 15 dias enquanto novos brotos e raízes estiverem ativos.\n🧪 Liberação lenta: opcional, com poucos grânulos em vasos ou cestos.\n🚿 Lavagem: faça regas abundantes somente com água periodicamente para evitar acúmulo de sais.",
    rega: "Durante o crescimento ativo, regue abundantemente e não deixe as raízes permanecerem secas por longos períodos. O recipiente, porém, deve drenar imediatamente. Quando as hastes amadurecerem e a atividade diminuir, amplie moderadamente os intervalos sem impor uma seca extrema.",
    suporte: [
        "🥇 Cesto ou cachepô robusto, bem ventilado e capaz de acomodar a planta adulta.",
        "🥈 Vaso de barro pesado e muito perfurado, oferecendo estabilidade às hastes.",
        "🥉 Vaso plástico firme e perfurado com substrato grosso, evitando retenção excessiva."
    ],
    substrato: ["Chips de coco grossos preparados + casca de macadâmia grossa + carvão vegetal médio/grosso + argila expandida média","Casca de pinus grossa + carvão vegetal médio/grosso + brita fina/média lavada e sem pó"],
    formasCultivo: {
        perfilVisual: "dendrobium-epifita-tropical",
        destaque: "Cachepô de Madeira",
        resumo: "Espécie epífita tropical de porte médio a grande. Precisa de suporte firme, luz filtrada abundante, raízes muito aeradas e água regular durante o crescimento, sem repouso seco severo.",
        metodos: [
            { nome: "Cachepô de Madeira", asset: "cesto-madeira", estrelas: null, status: "Mais recomendado na ficha", texto: "Cachepô robusto e bem ventilado, dimensionado para a planta adulta, com amplo espaço para raízes e hastes." },
            { nome: "Vaso de Barro", asset: "vaso-barro", estrelas: null, status: "Muito recomendado", texto: "Vaso pesado e muito drenante, oferecendo estabilidade para hastes grandes e mistura grossa." },
            { nome: "Vaso plástico vasado", asset: "vaso-plastico-vasado", estrelas: null, status: "Alternativa", texto: "Modelo reforçado, firme e perfurado, com partículas grossas e secagem monitorada." },
            { nome: "Vaso plástico", asset: "vaso-plastico", estrelas: null, status: "Alternativa condicional", texto: "Somente recipiente bem perfurado e estável, evitando retenção prolongada e substrato compacto." }
        ]
    },
    substratoVisual: {
        titulo: "Substrato ideal",
        contexto: "Proposta para cachepô ou vaso robusto e muito drenante",
        resumo: "Mistura grossa de alta aeração, com retenção moderada e boa secagem entre regas.",
        justificativa: "Dendrobium spectabile é uma epífita tropical de porte médio a grande, que precisa de suporte firme, raízes bem ventiladas e umidade regular durante o crescimento. Em cachepô de madeira robusto e vazado, as cascas grossas de macadâmia e pinus dão sustentação, enquanto a perlita e o carvão ajudam a manter a mistura drenante. Dimensione o recipiente para o peso da planta adulta e evite repouso seco severo.",
        receitaTexto: "35% casca de macadâmia grossa + 30% casca de pinus grossa + 20% perlita grossa compatível com o cachepô + 15% carvão vegetal médio/grosso.",
        perfil: ["Epífita tropical", "Porte médio a grande", "Raízes aeradas", "Umidade no crescimento", "Sem repouso seco severo"],
        comportamento: [
            { nome: "Retenção", valor: 2, icone: "💧" },
            { nome: "Aeração", valor: 5, icone: "💨" },
            { nome: "Secagem", valor: 4, icone: "⚡" },
            { nome: "Compactação", valor: 1, icone: "🧱" }
        ],
        itens: [
            { asset: "casca-macadamia", nome: "Casca de macadâmia grossa", proporcao: "35%", nota: "estrutura", finalidade: "Fornece partículas firmes e amplos espaços para as raízes." },
            { asset: "casca-pinus", nome: "Casca de pinus grossa", proporcao: "30%", nota: "drenagem", finalidade: "Mantém a mistura aberta e evita compactação." },
            { asset: "perlita", nome: "Perlita grossa compatível com o cachepô", proporcao: "20%", nota: "aeração", finalidade: "Aumenta a porosidade e favorece a secagem entre regas." },
            { asset: "carvao", nome: "Carvão vegetal médio/grosso", proporcao: "15%", nota: "estabilidade", finalidade: "Acrescenta estrutura e drenagem à mistura." }
        ],
        alerta: "Durante o crescimento ativo, não deixar novos brotos secarem; evitar encharcamento permanente e não impor repouso seco severo. Dimensionar o suporte para a planta adulta.",
        notaEvidencia: "MACS 1.1 — revisão documental: Dendrobium spectabile, epífita tropical robusta, requer suporte firme, raízes ventiladas e água regular durante o crescimento, sem repouso seco severo. Cachepô de Madeira robusto e bem vazado é suporte principal; estrelas dos suportes omitidas por ausência de validação quantitativa. Receita visual e textual coincidem: 35% macadâmia grossa + 30% pinus grosso + 20% perlita grossa compatível com cachepô + 15% carvão vegetal médio/grosso = 100%. Exatamente duas outras misturas qualitativas distintas: chips de coco grossos preparados/macadamia/carvão/argila expandida e pinus grosso/carvão/brita fina-média lavada e sem pó. Não fundamentam os percentuais visuais. Monitorar secagem e peso do conjunto em plantas adultas. Sem ensaio quantitativo específico nem consulta individualizada a até 25 produtores brasileiros; percentuais NÃO HOMOLOGADOS; estrelas dos suportes omitidas. Classe D — não homologada quantitativamente."
    },
    errosComuns: [
        "Cultivar em sombra excessiva",
        "Usar substrato fino e compactado",
        "Deixar novos brotos secarem durante crescimento ativo",
        "Manter raízes permanentemente encharcadas",
        "Forçar repouso seco severo",
        "Cortar hastes antigas ainda firmes",
        "Replantar fora do início da emissão de novas raízes",
        "Subestimar o tamanho e o peso da planta adulta"
    ],
    dica: "🏆 Tenha paciência com o tamanho de floração. Dendrobium spectabile pode crescer vigorosamente antes de decidir florescer. Concentre-se em produzir hastes progressivamente maiores com muita luz filtrada, água e adubação durante o crescimento; quando a planta atingir maturidade, as flores extraordinárias compensam a espera.",
    revisaoCientificaIAR: {
        "nome": "Dendrobium spectabile",
        "statusTaxonomico": "Espécie/nome infraespecífico tratado como aceito na revisão taxonômica de referência.",
        "sinonimosPrincipais": "Verificados prioritariamente em POWO/GBIF/Tropicos; manter apenas os relevantes ao catálogo.",
        "morfologiaDimensoes": "Dendrobium spectabile é uma das espécies mais extravagantes do gênero. Suas flores parecem pequenas esculturas vivas: pétalas e sépalas retorcidas, onduladas e irregulares formam desenhos quase impossíveis de repetir de uma flor para outra. A planta desenvolve hastes robustas e, quando madura, produz cachos próximos ao topo com numerosas flores de aparência exótica. Apesar do v",
        "habitatAltitudeClima": "Epífita de florestas tropicais úmidas; ocasionalmente rupícola, de baixas a altas elevações. | Quente a intermediário, úmido e muito ventilado.",
        "distribuicaoGeografica": "Nova Guiné, Ilhas Salomão, Vanuatu e Nova Caledônia.",
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
        "indice": 50,
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
                "notaDificuldade": 2,
                "peso": 10
            },
            "sazonalidade": {
                "notaDificuldade": 3,
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
                    "nota": 3,
                    "peso": 20
                }
            }
        }
    },
        adaptacaoRegional: {
        litoralQuente: { texto: "Excelente adaptação. A origem tropical e a ocorrência frequente em baixas elevações combinam bem com clima quente, desde que haja muita ventilação e drenagem." },
        montanhaFrio: { texto: "Boa adaptação. Tolera condições intermediárias, mas deve ser protegido de frio intenso e de raízes molhadas em temperaturas baixas." }
    },
    mesesFloracao: [6, 7, 8, 9, 10],
    "selosCultivo": {
        "rega": { "nivel": "frequente" },
        "climaFloracao": { "faixa": "quente" }
    },
        avaliacoes: { cultivo: 3, floracao: 4, perfume: 2, luminosidade: 4, agua: 4, raridade: 4 }
};
