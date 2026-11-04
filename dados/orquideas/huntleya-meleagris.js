// Refinamento Final — Lote 15.

export const huntleyaMeleagris = {
    id: "huntleya-meleagris",
    nome: "Huntleya meleagris",
    genero: "Huntleya",
    sinonimo: "Batemannia meleagris",
    tipo: "Espécie botânica",
    dificuldade: "Difícil",
    caracteristicas: ["Sem pseudobulbos", "Folhas em leque", "Flor solitária grande", "Muito perfumada", "Alta umidade"],
    fotos: [
        "imagens/Huntleya meleagris/Huntleya meleagris1.webp",
        "imagens/Huntleya meleagris/Huntleya meleagris2.jpeg",
        "imagens/Huntleya meleagris/Huntleya meleagris3.webp",
        "imagens/Huntleya meleagris/Huntleya meleagris4.webp"
    ],
    descricao: "Huntleya meleagris é uma orquídea de aparência singular: suas folhas largas nascem em leques, lembrando uma pequena bromélia, sem formar pseudobulbos. Entre as bases das folhas despontam hastes que sustentam uma flor solitária, cerosa, estrelada e intensamente perfumada, podendo alcançar cerca de 12,5 cm. Sépalas e pétalas exibem desenhos variáveis em tons claros e castanhos, com um labelo destacado no centro. Conhecida por alguns orquidófilos como Estrela da República ou Flor de Couro, vive sobre árvores de florestas úmidas da América do Sul e do Caribe. Populações brasileiras foram observadas inclusive em matas de baixa altitude.",
    origem: "América do Sul tropical",
    regiao: "Trinidad · norte e centro da América do Sul (incl. Brasil)",
    habitat: "Florestas tropicais úmidas · epífita · altitude variável, inclusive 200–600 m em registros brasileiros.",
    clima: "Intermediário · úmido e muito ventilado.",
    climaFloracao: "Registros brasileiros entre 200 e 600 m e referências de outras populações entre 600 e 1.300 m mostram amplitude ecológica; a espécie tolera condições de frescas a relativamente quentes, mas não significa que suporte calor noturno abafado. No litoral, o desafio é reproduzir o frescor e a umidade do interior da floresta sem manter as raízes sem oxigênio. Crescimento contínuo, água de baixa salinidade e noites um pouco mais amenas favorecem a formação de flores. Não possui repouso seco.",
    iluminacao: {
        sombrite: "60% a 70%",
        solDireto: "Não permitido",
        horario: "Não permitido",
        observacoes: "Prefere luz semelhante à de Phalaenopsis bem iluminada, mas com muito mais circulação de ar. Folhas amareladas ou aquecidas indicam excesso; folhas muito escuras e crescimento fraco podem indicar sombra profunda demais."
    },
    floracao: "Pode florescer da primavera ao outono, conforme a maturação dos novos leques. Cada haste normalmente sustenta uma flor grande, cerosa, variável e muito perfumada.",
    adubacao: "🌿 Orgânica: bokashi somente em quantidade mínima e em porta-adubo, sem contato com raízes ou coroa.\n💧 Foliar: NPK equilibrado em 1/4 da dose a cada 7–10 dias durante o crescimento ativo.\n🧪 Liberação lenta: usar com muita cautela; adubação líquida diluída oferece maior controle.\n💦 Lavagem: mensalmente, lave o substrato com água de baixa salinidade para reduzir resíduos minerais.",
    rega: "Mantenha o substrato uniformemente úmido, mas nunca saturado. Como não possui pseudobulbos, a espécie sofre com secas prolongadas; ao mesmo tempo, as raízes também deterioram em meio quente e sem oxigênio. Regue pela manhã e garanta que água acumulada entre as folhas seque antes da noite.",
    suporte: "🥇 Vaso plástico raso, justo e bastante perfurado.\n🥈 Vaso de barro perfurado, onde a umidade ambiental seja alta.\n🥉 Cesto pequeno revestido internamente com esfagno solto, em local muito ventilado.",
    substrato: ["Casca de macadâmia média + casca de pinus média + perlita grossa + pequena fração de fibra de coco grossa preparada","Casca de pinus média + perlita grossa + argila expandida miúda + pequena fração de esfagno de fibra longa solto"],
    formasCultivo: {
        perfilVisual: "epifita-sem-pseudobulbos-folhas-leque",
        destaque: "Vaso plástico vasado",
        resumo: "Espécie sem pseudobulbos e com folhas em leque, sensível à seca completa e ao calor abafado. Requer umidade regular, sombra clara, raízes frescas e oxigenadas.",
        metodos: [
            { nome: "Vaso plástico vasado", asset: "vaso-plastico-vasado", estrelas: 5, status: "Mais recomendado na ficha", texto: "Vaso raso, justo e bastante perfurado, para manter umidade sem saturar as raízes." },
            { nome: "Vaso de Barro", asset: "vaso-barro", estrelas: 4, status: "Alternativa", texto: "Vaso pequeno e perfurado onde a umidade ambiental seja alta; acompanhar a secagem acelerada." },
            { nome: "Cachepô de Madeira", asset: "cesto-madeira", estrelas: 4, status: "Alternativa", texto: "Cesto pequeno, ventilado, com esfagno de fibra longa solto como revestimento interno, sem compactação." },
            { nome: "Placa / tronco", asset: "placa-tronco", estrelas: 2, status: "Uso condicional", texto: "Somente com umidade ambiental muito alta e irrigação frequente; a ausência de pseudobulbos aumenta o risco de desidratação." }
        ]
    },
    substratoVisual: {
        titulo: "Substrato ideal",
        contexto: "Mistura para vaso raso e bastante perfurado",
        resumo: "Mistura aberta que retém umidade moderada e fornece oxigênio continuamente às raízes delicadas.",
        justificativa: "Huntleya meleagris não forma pseudobulbos e precisa de umidade relativamente constante, sem secagem completa das raízes. Em vaso raso e bastante perfurado, a casca de pinus oferece estrutura, os chips de coco preparados ajudam a conservar umidade e a perlita e o carvão favorecem a aeração. Observe a secagem no centro do vaso e ajuste as regas à temperatura e à ventilação, evitando encharcamento.",
        receitaTexto: "35% casca de pinus média + 35% chips de coco médios preparados + 20% perlita grossa + 10% carvão vegetal.",
        perfil: ["Sem pseudobulbos", "Folhas em leque", "Alta umidade", "Raízes sensíveis", "Sombra clara"],
        comportamento: [
            { nome: "Retenção", valor: 4, icone: "💧" },
            { nome: "Aeração", valor: 4, icone: "💨" },
            { nome: "Secagem", valor: 2, icone: "⚡" },
            { nome: "Compactação", valor: 2, icone: "🧱" }
        ],
        itens: [
            { asset: "casca-pinus", nome: "Casca de pinus média", proporcao: "35%", nota: "estrutura", finalidade: "Mantém espaços de ar ao redor das raízes." },
            { asset: "chips-coco", nome: "Chips de coco médios preparados", proporcao: "35%", nota: "umidade", finalidade: "Ajuda a manter água disponível entre regas sem formar massa compacta." },
            { asset: "perlita", nome: "Perlita grossa", proporcao: "20%", nota: "aeração", finalidade: "Favorece oxigenação e drenagem." },
            { asset: "carvao-vegetal", nome: "Carvão vegetal", proporcao: "10%", nota: "estrutura", finalidade: "Complementa a porosidade da mistura." }
        ],
        alerta: "Não deixar secar completamente, impor repouso seco, expor ao sol direto ou usar água muito salina. Evitar calor abafado, substrato saturado e água parada no centro dos leques à noite.",
        notaEvidencia: "MACS 1.1 — revisão documental: Huntleya meleagris, epífita sem pseudobulbos, raízes sensíveis a seca e saturação, requer umidade uniforme e oxigenação. Suportes plástico vasado 5 estrelas, barro e cachepô madeira 4, placa/tronco 2; notas não homologadas. Receita visual 35% pinus médio + 35% chips coco + 20% perlita grossa + 10% carvão = 100%; receitaTexto e itens concordam. A receita principal textual e visual coincidem; as duas alternativas qualitativas são distintas e não equivalem à principal. Avaliar retenção de 35% chips coco e secagem em vaso raso sem pseudobulbos; meta até 25 produtores brasileiros específicos não atingida. POWO aceita Huntleya meleagris, com Batemannia meleagris e Zygopetalum meleagris como sinônimos homotípicos, e registra ocorrência brasileira no Nordeste, Sudeste e Sul. OrquidaRIO (2008) observou populações epífitas entre 200 e 600 m, contrariando restrição anterior a 600–1.300 m; relata orientação histórica de Decker (1946) de mistura de folhas semidecompostas e terra vegetal, sem proporções e não adotada como receita atual. Orquidário Paulista recomenda drenagem rápida e ventilação, sem percentuais. Um produtor brasileiro específico qualitativo, uma referência histórica de cultivo e zero receitas quantitativas específicas confirmadas nesta passagem; meta até 25 não atingida. Percentuais e estrelas NÃO HOMOLOGADOS."
    },
    errosComuns: "Deixar secar completamente; cultivar em vaso grande; manter substrato quente e saturado; usar água muito salina; aplicar fertilizante concentrado; expor ao sol direto; cultivar em ambiente abafado; deixar água parada no centro dos leques durante a noite; impor repouso seco no inverno.",
    dica: "O ponto-chave não é simplesmente ‘regar muito’, mas manter água disponível junto com oxigênio. Em dias quentes, aumente primeiro ventilação e umidade do ambiente antes de encharcar o vaso. Essa diferença é decisiva: raízes frescas e oxigenadas sustentam os leques; raízes quentes e saturadas entram em declínio rapidamente.",
    revisaoCientificaIAR: {
        "nome": "Huntleya meleagris",
        "statusTaxonomico": "Huntleya meleagris Lindl. (1837), espécie aceita em POWO; Batemannia meleagris e Zygopetalum meleagris são sinônimos homotípicos.",
        "sinonimosPrincipais": "Batemannia meleagris e Zygopetalum meleagris (homotípicos); Huntleya albidofulva (heterotípico).",
        "morfologiaDimensoes": "Epífita sem pseudobulbos, folhas lanceoladas em leques, inflorescência axilar ereta com uma flor cerosa, estrelada e perfumada, até 12,5 cm (IOSPE). OrquidaRIO registra hábito semelhante ao de bromélias.",
        "habitatAltitudeClima": "Florestas úmidas tropicais; registros de campo brasileiros entre 200 e 600 m (OrquidaRIO, 2008), além de populações de 600–1.300 m citadas no IOSPE.",
        "distribuicaoGeografica": "América do Sul tropical · Brasil incluído.",
        "cultivoPremiacao": "Orquidário Paulista indica substrato de secagem rápida e ventilação; OrquidaRIO (2008) cita recomendação histórica de Decker (1946), sem percentuais ou ensaio específico.",
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
                    "nota": 5,
                    "peso": 5
                },
                "ventilacao": {
                    "nota": 5,
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
                    "nota": 3,
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
                    "nota": 5,
                    "peso": 5
                },
                "ventilacao": {
                    "nota": 5,
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
        }
    },
        adaptacaoRegional: {
        litoralQuente: { texto: "Cultivo exigente. Reserve o local mais fresco, sombreado e ventilado do orquidário, use água de boa qualidade e evite recipientes que superaqueçam. No verão, noites abafadas são o principal gargalo." },
        montanhaFrio: { texto: "Em ambiente protegido. Mantenha umidade constante e proteja de geadas ou frio excessivo." }
    },
    mesesFloracao: [9, 10, 11, 12, 1, 2, 3, 4, 5],
    "selosCultivo": {
        "rega": { "nivel": "muito-frequente" },
        "climaFloracao": { "faixa": "intermediario" }
    },
        avaliacoes: { cultivo: 2, floracao: 3, perfume: 5, luminosidade: 2, agua: 5, raridade: 4 }
};
