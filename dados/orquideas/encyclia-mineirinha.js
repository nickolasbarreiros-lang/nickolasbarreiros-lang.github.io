// Refinamento Final — Lote 14.

export const encycliaMineirinha = {
    id: "encyclia-mineirinha",
    nome: "Encyclia ‘Mineirinha’",
    genero: "Encyclia",
    tipo: "Híbrido primário interespecífico",
    dificuldade: "Moderada",
    caracteristicas: ["Híbrido brasileiro", "Hastes multiflorais", "Flores perfumadas", "Boa adaptação"],
    fotos: [
        "imagens/encyclia-mineirinha/encyclia-mineirinha-1.jpg",
        "imagens/encyclia-mineirinha/encyclia-mineirinha-2.jpeg",
        "imagens/encyclia-mineirinha/encyclia-mineirinha-3.jpeg",
        "imagens/encyclia-mineirinha/encyclia-mineirinha-4.jpg"
    ],
    descricao: "Uma Encyclia brasileira de aparência delicada, mas cultivo bastante rústico! ‘Mineirinha’ é um híbrido primário de Encyclia patens × Encyclia oliveirana, combinação que reúne a resistência de um parental amplamente distribuído pelo leste e sul do Brasil com a influência de E. oliveirana, espécie mineira de ambientes sazonais. Forma pseudobulbos firmes, folhas coriáceas e hastes altas com várias flores em tons verde-acastanhados, geralmente acompanhadas de labelo mais claro e perfume agradável. Em cultivo, responde melhor a muita claridade, raízes bem arejadas e secagem rápida entre as regas. As flores pequenas e numerosas criam um efeito leve ao longo das hastes, especialmente quando observadas contra a folhagem. Sua arquitetura epífita favorece a exposição das raízes ao ar.",
    origem: "Híbrido horticultural",
    regiao: "Sem distribuição natural · E. patens × E. oliveirana · parentais brasileiros",
    habitat: "Sem habitat natural · parentais de florestas e ambientes sazonais.",
    clima: "Quente a intermediário · ventilado.",
    climaFloracao: "A floração depende sobretudo de pseudobulbos bem amadurecidos sob boa luminosidade. Durante a brotação, mantenha água e nutrição regulares; depois da maturação, aumente moderadamente o intervalo entre regas. Como o híbrido combina parentais de ecologias diferentes, não imponha repouso seco rígido.",
    iluminacao: { sombrite: "40% a 50%", solDireto: "Permitido com restrição", horario: "Início da manhã ou final da tarde", observacoes: "Folhas firmes, eretas e verde-claras indicam luz adequada; folhas escuras e moles sinalizam sombra excessiva." },
    floracao: "Mais comum da primavera ao verão; pode variar conforme o clone e o ciclo de maturação dos pseudobulbos.",
    adubacao: "🌿 Orgânica: bokashi leve em sachê, renovado a cada 60 a 90 dias.\n💧 Foliar: NPK equilibrado, como 20-20-20, em 1/3 a 1/2 da dose semanalmente ou a cada 15 dias durante a brotação.\n🧪 Liberação lenta: poucos grânulos de Osmocote no canto do vaso, longe das raízes novas.",
    rega: "Regue abundantemente durante a brotação e deixe o substrato secar completamente entre as regas. Após o amadurecimento dos pseudobulbos, reduza a frequência. Nunca use prato sob o vaso nem permita água acumulada no fundo.",
    suporte: "🥇 Vaso de barro com furos laterais.\n🥈 Cachepô de madeira vazado.\n🥉 Placa de madeira dura ou cortiça.",
    substrato: ["Casca de macadâmia média + argila expandida + carvão vegetal + casca de pinus grossa","Chips de coco grossos preparados + perlita grossa + carvão vegetal + casca de pinus média"],
    formasCultivo: {
        perfilVisual: "encyclia-hibrido-epifita-clara",
        destaque: "Vaso de Barro",
        resumo: "Híbrido primário de Encyclia patens × E. oliveirana, com pseudobulbos firmes e raízes que exigem aeração. Cultivar com luz alta filtrada e secagem rápida entre regas, sem enterrar o rizoma.",
        metodos: [
            { nome: "Vaso de Barro", asset: "vaso-barro", estrelas: 5, status: "Mais recomendado na ficha", texto: "Vaso proporcional à touceira, com furos laterais, boa estabilidade e drenagem rápida." },
            { nome: "Cachepô de Madeira", asset: "cesto-madeira", estrelas: 5, status: "Muito recomendado", texto: "Cachepô vazado e de tamanho justo, permitindo ampla circulação de ar junto às raízes." },
            { nome: "Placa / tronco", asset: "placa-tronco", estrelas: 4, status: "Alternativa", texto: "Montagem em madeira dura ou cortiça, com regas mais frequentes para compensar a secagem acelerada." },
            { nome: "Vaso plástico vasado", asset: "vaso-plastico-vasado", estrelas: 4, status: "Alternativa", texto: "Recipiente pequeno e muito perfurado, com substrato aberto e sem água retida no fundo." }
        ]
    },
    substratoVisual: {
        titulo: "Substrato ideal",
        contexto: "Mistura para vaso de barro com furos laterais ou cachepô vazado",
        resumo: "Partículas médias e grossas, com drenagem rápida, boa aeração e secagem clara entre regas.",
        justificativa: "Encyclia mineirinha se beneficia de recipiente pequeno, boa ventilação e secagem perceptível entre regas. As cascas de macadâmia e pinus oferecem apoio às raízes, enquanto a perlita e o carvão ajudam a manter espaços de ar e drenagem. Observe a secagem no centro do vaso e ajuste a granulometria ao tamanho das raízes, evitando compactação.",
        receitaTexto: "35% casca de macadâmia média + 30% casca de pinus média + 20% perlita grossa + 15% carvão vegetal.",
        perfil: ["Híbrido primário", "Pseudobulbos firmes", "Luz alta filtrada", "Raízes arejadas", "Secagem rápida"],
        comportamento: [
            { nome: "Retenção", valor: 2, icone: "💧" },
            { nome: "Aeração", valor: 5, icone: "💨" },
            { nome: "Secagem", valor: 4, icone: "⚡" },
            { nome: "Compactação", valor: 1, icone: "🧱" }
        ],
        itens: [
            { asset: "casca-macadamia", nome: "Casca de macadâmia média", proporcao: "35%", nota: "estrutura", finalidade: "Sustenta raízes e mantém espaços de ar." },
            { asset: "casca-pinus", nome: "Casca de pinus média", proporcao: "30%", nota: "drenagem", finalidade: "Ajuda a manter a mistura porosa." },
            { asset: "perlita", nome: "Perlita grossa", proporcao: "20%", nota: "aeração", finalidade: "Reduz compactação e acelera a drenagem." },
            { asset: "carvao", nome: "Carvão vegetal", proporcao: "15%", nota: "estabilidade", finalidade: "Complementa a estrutura aberta do substrato." }
        ],
        alerta: "Não catalogar como espécie pura: é híbrido de E. patens × E. oliveirana. Evitar sombra excessiva, rizoma enterrado, vaso grande e substrato compacto.",
        notaEvidencia: "Estrelas e percentuais são estimativas horticulturais não homologadas pela MACS 1.0. Conferência visual dos assets ainda pendente."
    },
    errosComuns: "Catalogar como espécie pura; sombra excessiva; vaso grande; substrato compacto; rizoma enterrado; água acumulada no fundo; esfagno denso.",
    dica: "Cultive em recipiente justo e muito drenante, com o rizoma livre e alta ventilação. A identificação mais informativa para a coleção é: Encyclia ‘Mineirinha’ — E. patens × E. oliveirana. Por ser híbrido, porte, cor, perfume e época exata de floração podem variar entre plantas.",
    revisaoCientificaIAR: {
        "nome": "Encyclia ‘Mineirinha’",
        "statusTaxonomico": "Híbrido horticultural; taxonomia botânica de espécie não se aplica diretamente.",
        "sinonimosPrincipais": "Verificados prioritariamente em POWO/GBIF/Tropicos; manter apenas os relevantes ao catálogo.",
        "morfologiaDimensoes": "Uma Encyclia brasileira de aparência delicada, mas cultivo bastante rústico! ‘Mineirinha’ é um híbrido primário de Encyclia patens × Encyclia oliveirana, combinação que reúne a resistência de um parental amplamente distribuído pelo leste e sul do Brasil com a influência de E. oliveirana, espécie mineira de ambientes sazonais. Forma pseudobulbos firmes, folhas coriáceas e hastes",
        "habitatAltitudeClima": "Sem habitat natural · parentais de florestas e ambientes sazonais. | Quente a intermediário · ventilado.",
        "distribuicaoGeografica": "Parentais brasileiros · E. patens × E. oliveirana.",
        "cultivoPremiacao": "Cultivo confrontado com habitat/IOSPE; premiação AOS somente considerada quando dado público verificável foi localizado.",
        "confianca": "media",
        "fontes": [
            "POWO/Kew",
            "WFO/IPNI",
            "GBIF/Tropicos",
            "IOSPE/OrchidSpecies",
            "OrchidRoots/RHS"
        ]
    },
    indiceDificuldadeCultivo: {
        "versao": "IDC 3.2 — selo por facilidade",
        "escala": "dificuldade",
        "indice": 42,
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
                "notaDificuldade": 1,
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
            "indice": 73,
            "estrelas": 4,
            "fatores": {
                "habitatNatural": {
                    "nota": 3,
                    "peso": 30
                },
                "temperatura": {
                    "nota": 4,
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
                    "nota": 4,
                    "peso": 20
                }
            }
        },
        "montanhaFrio": {
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
                    "nota": 4,
                    "peso": 20
                }
            }
        }
    },
        adaptacaoRegional: { litoralQuente: { texto: "Desde que haja ventilação constante e secagem rápida após as regas." }, montanhaFrio: { texto: "Reduza bastante as regas nos meses frios sem crescimento ativo." } },
    mesesFloracao: [9,10,11,12,1,2],
    "selosCultivo": {
        "rega": { "nivel": "frequente" },
        "climaFloracao": { "faixa": "quente" }
    },
        avaliacoes: { cultivo: 3, floracao: 4, perfume: 3, luminosidade: 4, agua: 3, raridade: 3 }
};
