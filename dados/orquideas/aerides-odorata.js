// Ficha científica e de cultivo revisada — Aerides odorata.

export const aeridesOdorata = {
    id: "aerides-odorata",
    nome: "Aerides odorata",
    genero: "Aerides",
    tipo: "Espécie botânica epífita asiática",
    dificuldade: "Moderada",
    caracteristicas: [
        "Epífita",
        "Muito perfumada",
        "Cachos pendentes",
        "Clima quente",
        "Alta umidade",
        "Raízes aéreas"
    ],
    fotos: [
        "imagens/Aerides odorata/Aerides odorata1.jpg",
        "imagens/Aerides odorata/Aerides odorata2.jpg",
        "imagens/Aerides odorata/Aerides odorata3.jpg",
        "imagens/Aerides odorata/Aerides odorata4.jpg"
    ],
    descricao: "Aerides odorata é uma elegante orquídea asiática que combina folhagem robusta com cachos pendentes de flores delicadas e intensamente perfumadas. Suas folhas são espessas e coriáceas, enquanto as inflorescências surgem carregadas de numerosas flores claras, geralmente brancas a rosadas, com detalhes púrpura. O perfume é uma de suas grandes atrações e combina perfeitamente com o nome da espécie. Acostumada a crescer sobre árvores com as raízes expostas, aprecia calor, umidade elevada, bastante circulação de ar e luz filtrada intensa.",
    origem: "Ásia Tropical",
    regiao: "Himalaia · sul da China · Sudeste Asiático · Malesia",
    habitat: "Epífita de florestas tropicais úmidas, com raízes expostas.",
    clima: "Quente a intermediário, úmido e muito ventilado.",
    climaFloracao: "Floresce melhor quando adulta, bem iluminada e com raízes ativas. Não necessita frio intenso para indução floral. No litoral quente encontra condições muito favoráveis, desde que receba forte ventilação e as raízes sequem rapidamente após as regas.",
    iluminacao: {
        sombrite: "50% a 60%",
        solDireto: "Permitido com restrição",
        horario: "Início da manhã ou final da tarde",
        observacoes: "Aprecia luminosidade semelhante à de Vandas de exigência moderada. Sombra profunda reduz a floração; no litoral quente, evite sol forte do meio do dia e faça qualquer aumento de exposição gradualmente."
    },
    floracao: "A época varia conforme a procedência. Em cultivo, primavera e verão são uma boa referência, com possibilidade de variação conforme temperatura, luminosidade e maturidade da planta.",
    adubacao: "🌿 Orgânica: bokashi em pequena quantidade e preferencialmente em porta-adubo, sem contato direto com raízes expostas.\n💧 Foliar/mineral: NPK equilibrado, como 20-20-20, em aproximadamente 1/4 da dose comercial a cada 7 a 15 dias durante crescimento ativo.\n🧪 Liberação lenta: opcional, com poucos grânulos em cesto ou vaso.\n🚿 Lavagem: faça regas abundantes apenas com água periodicamente para reduzir o acúmulo de sais.",
    rega: "Durante períodos quentes e de crescimento ativo, regue abundantemente e com frequência, molhando completamente as raízes e permitindo secagem rápida em seguida. Plantas em cestos podem precisar de regas muito frequentes no verão. No período mais fresco, reduza conforme a evaporação diminuir, mas não imponha repouso seco.",
    suporte: [
        "🥇 Cesto vazado de madeira ou plástico, permitindo raízes livres e ótima circulação de ar.",
        "🥈 Placa de cortiça, tronco ou madeira resistente, em ambiente de alta umidade e regas frequentes.",
        "🥉 Vaso muito perfurado com substrato extremamente grosso, quando for necessário reter um pouco mais de umidade."
    ],
    formasCultivo: {
        perfilVisual: "aerides",
        destaque: "Suspensa, raízes livres",
        resumo: "Como vandácea epífita de raízes grossas e aéreas, Aerides odorata responde melhor quando as raízes ficam muito livres, recebem água abundante e secam rapidamente com forte circulação de ar.",
        metodos: [
            { nome: "Suspensa, raízes livres", asset: "aerides-odorata-cultivo-ideal", estrelas: 5, status: "Ideal", texto: "É a condição mais próxima da lógica de cultivo das vandáceas: raízes totalmente arejadas, livres para crescer e secar rapidamente após regas generosas." },
            { nome: "Árvore viva / tronco", asset: "arvore-viva", estrelas: 5, status: "Ideal", texto: "Excelente em clima quente e úmido quando a planta é firmemente presa ao tronco e as raízes podem aderir à casca e permanecer expostas ao ar." },
            { nome: "Cesto extremamente vazado", asset: "cesto-madeira", estrelas: 4, status: "Muito recomendado", texto: "Boa alternativa para sustentar a planta sem confinar as raízes; use pouco ou nenhum substrato e permita que as raízes atravessem livremente as aberturas." },
            { nome: "Vaso plástico vasado", asset: "vaso-plastico-vasado", estrelas: 3, status: "Adequado", texto: "Pode funcionar quando o recipiente tem muitas aberturas laterais e inferiores e recebe apenas material muito grosso em pequeno volume, sem comprimir as raízes." },
        ]
    },
    substrato: [
        "Casca de pinus grossa + carvão vegetal grosso",
        "Casca de pinus grossa + chips de coco grossos + carvão vegetal",
        "Carvão vegetal grosso + casca de arroz carbonizada + pequena quantidade de esfagno",
        "Casca de pinus grossa + perlita grossa + pequena quantidade de esfagno"
    ],

    substratoVisual: {
        titulo: "Substrato ideal",
        contexto: "Para cultivo em vaso ou cesto",
        resumo: "Mistura muito grossa e extremamente aerada, usada apenas para estabilizar a planta e manter pequena reserva de umidade sem enterrar as raízes aéreas.",
        justificativa: "Aerides odorata é uma vandácea monopodial epífita, com numerosas raízes aéreas grossas. O cultivo principal continua sendo suspenso com raízes livres. Quando se usa vaso ou cesto, o substrato deve ocupar pouco volume e funcionar como apoio, nunca como uma massa envolvendo todo o sistema radicular. Casca grossa e carvão mantêm grandes macroporos; uma pequena fração de esfagno fornece reserva hídrica localizada para o litoral quente.",
        perfil: ["Raízes grossas", "Aeração máxima", "Raízes expostas", "Secagem rápida", "Baixa compactação", "Pouco substrato"],
        comportamento: [
            { nome: "Retenção", valor: 2, icone: "💧" },
            { nome: "Aeração", valor: 5, icone: "💨" },
            { nome: "Secagem", valor: 4, icone: "⚡" },
            { nome: "Compactação", valor: 1, icone: "🧱" }
        ],
        itens: [
            { asset: "casca-pinus", nome: "Casca de pinus grossa", proporcao: "45%", nota: "estrutura + macroporos", finalidade: "Mantém grandes espaços de ar e serve de apoio às raízes sem formar uma massa compacta." },
            { asset: "carvao-vegetal", nome: "Carvão vegetal grosso", proporcao: "35%", nota: "aeração + durabilidade", finalidade: "Aumenta a porosidade estrutural e mantém o conjunto aberto por mais tempo." },
            { asset: "casca-arroz-carbonizada", nome: "Casca de arroz carbonizada", proporcao: "10%", nota: "leveza + drenagem", finalidade: "Complementa a estrutura sem aumentar muito o peso nem a retenção hídrica." },
            { asset: "esfagno", nome: "Esfagno solto", proporcao: "10%", nota: "reserva hídrica localizada", finalidade: "Ajuda a reduzir desidratação abrupta no calor, devendo ficar muito solto e em pequena quantidade." }
        ],
        alerta: "Não enterre nem force as raízes aéreas para dentro do recipiente. Deixe a maior parte das raízes livres. Em cesto ou vaso vasado, use somente material grosso e em pequeno volume."
    },
    errosComuns: [
        "Cultivar em sombra profunda e esperar floração abundante",
        "Enterrar ou sufocar as raízes aéreas",
        "Usar substrato fino e compactado",
        "Manter as raízes permanentemente molhadas e sem circulação de ar",
        "Deixar a planta desidratar por longos períodos durante crescimento ativo",
        "Aplicar fertilizante concentrado diretamente sobre raízes secas",
        "Usar vaso grande e pouco ventilado",
        "Cortar raízes aéreas saudáveis apenas porque saíram do recipiente"
    ],
    dica: "🏆 Pense nela mais como uma Vanda do que como uma orquídea de vaso convencional. Quanto mais livres e ventiladas estiverem as raízes, mais fácil será oferecer bastante água sem causar encharcamento. No litoral quente, cesto vazado, luz filtrada forte e regas generosas pela manhã formam uma combinação especialmente favorável.",
    revisaoCientificaIAR: {
        "nome": "Aerides odorata",
        "statusTaxonomico": "Espécie/nome infraespecífico tratado como aceito na revisão taxonômica de referência.",
        "sinonimosPrincipais": "Verificados prioritariamente em POWO/GBIF/Tropicos; manter apenas os relevantes ao catálogo.",
        "morfologiaDimensoes": "Aerides odorata é uma elegante orquídea asiática que combina folhagem robusta com cachos pendentes de flores delicadas e intensamente perfumadas. Suas folhas são espessas e coriáceas, enquanto as inflorescências surgem carregadas de numerosas flores claras, geralmente brancas a rosadas, com detalhes púrpura. O perfume é uma de suas grandes atrações e combina perfeitamente com o",
        "habitatAltitudeClima": "Epífita de florestas tropicais úmidas, com raízes expostas. | Quente a intermediário, úmido e muito ventilado.",
        "distribuicaoGeografica": "Himalaia, sul da China, Sudeste Asiático e Malesia.",
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
        "indice": 48,
        "classificacao": "Moderada",
        "cultivoEstrelas": 3,
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
                    "nota": 4,
                    "peso": 5
                },
                "ventilacao": {
                    "nota": 5,
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
            "indice": 63,
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
        litoralQuente: { texto: "Excelente A origem tropical combina muito bem com calor e umidade. Use 50% a 60% de sombreamento, raízes muito ventiladas e regas frequentes nos períodos quentes." },
        montanhaFrio: { texto: "Boa Pode crescer bem em clima intermediário, mas deve ser protegida de frio intenso e de raízes molhadas durante noites frias." }
    },
    mesesFloracao: [10, 11, 12, 1, 2],
    "selosCultivo": {
        "rega": { "nivel": "sazonal" },
        "climaFloracao": { "faixa": "quente" }
    },
        avaliacoes: {
        cultivo: 3,
        floracao: 5,
        perfume: 5,
        luminosidade: 4,
        agua: 4,
        raridade: 3
    }
};
