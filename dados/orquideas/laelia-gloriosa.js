// Ficha V4 refinada — Laelia gloriosa.

export const laeliaGloriosa = {
    id: "schomburgkia",
    nome: "Laelia gloriosa",
    genero: "Laelia",
    sinonimo: "Schomburgkia gloriosa",
    tipo: "Espécie botânica",
    dificuldade: "Moderada",
    caracteristicas: [
        "Espécie epífita de grande porte",
        "Pseudobulbos fusiformes e robustos",
        "Inflorescências muito longas",
        "Flores onduladas e multiflorais",
        "Exige luminosidade muito alta"
    ],
    fotos: [
        "imagens/Laelia gloriosa/Laelia gloriosa1.jpeg",
        "imagens/Laelia gloriosa/Laelia gloriosa2.jpeg",
        "imagens/Laelia gloriosa/Laelia gloriosa3.jpeg",
        "imagens/Laelia gloriosa/Laelia gloriosa4.jpeg"
    ],
    descricao: "Uma orquídea feita para chamar atenção à distância! Laelia gloriosa forma touceiras grandes, com pseudobulbos robustos e hastes florais que podem ultrapassar 1 metro, terminando em cachos de numerosas flores onduladas e vistosas. É uma espécie tropical do norte da América do Sul e da Amazônia, encontrada geralmente entre cerca de 200 e 850 m, onde cresce em árvores bem iluminadas e ventiladas. Seu cultivo combina calor, muita claridade, água abundante durante o crescimento e secagem rápida das raízes.",
    origem: "Norte da América do Sul",
    regiao: "Venezuela · Colômbia · Equador · Guianas · norte do Brasil",
    habitat: "Florestas tropicais · epífita · ~200–850 m.",
    clima: "Quente · úmido · alta luz · ventilado.",
    climaFloracao: "Pseudobulbos maduros, luminosidade elevada e raízes saudáveis favorecem hastes fortes. Após o crescimento, aumente moderadamente o intervalo entre regas, sem provocar desidratação severa. Por ser uma espécie tropical de baixa a média altitude, não necessita de frio intenso para florescer.",
    iluminacao: {
        sombrite: "30% a 50%",
        solDireto: "Permitido com restrição",
        horario: "Início da manhã ou final da tarde",
        observacoes: "Folhas firmes em verde-claro indicam boa luminosidade. Verde muito escuro costuma produzir crescimento sem floração; amarelecimento forte, manchas secas ou aquecimento foliar indicam excesso."
    },
    floracao: "Predomina do outono ao início do inverno. Hastes terminais podem ultrapassar 1,2 m e carregar aproximadamente 8–15 flores agrupadas no ápice, com flores cerosas de cerca de 5 cm.",
    adubacao: "🌿 Orgânica: bokashi em porta-adubo durante a brotação.\n💧 Foliar: NPK equilibrado em baixa concentração a cada 7–15 dias durante o crescimento ativo.\n🧪 Liberação lenta: dose baixa a moderada conforme o tamanho do recipiente, sem contato direto com raízes novas. Após a maturação, reduza a frequência e o excesso de nitrogênio, sem necessidade de suspender toda nutrição. Periodicamente lave o substrato com água pura.",
    rega: "Durante a emissão de brotos e raízes novas, regue abundantemente e permita secagem rápida antes da próxima irrigação. Após a maturação dos pseudobulbos, aumente moderadamente o intervalo, especialmente em períodos frios ou nublados, sem causar enrugamento severo.",
    suporte: "🥇 Cesto grande e robusto de madeira, firmemente suspenso ou fixado.\n🥈 Vaso de barro pesado, largo e muito furado.\n🥉 Fixação definitiva em tronco de árvore, apenas onde não haja geadas e seja possível regar durante o estabelecimento.",
    substrato: ["🥇 Para cachepô grande e robusto: casca de macadâmia média 35% + casca de pinus média 30% + perlita grossa 20% + carvão vegetal 15% (mistura visual provisória, não homologada).","🥈 Pinus médio/grosso + perlita grossa + carvão vegetal + pequena fração de chips de coco.","🥉 Casca de macadâmia média + argila expandida + carvão vegetal + pinus grosso.","Alternativa adicional: chips de coco grossos + perlita grossa + carvão vegetal + pinus médio."],
    formasCultivo: {
        perfilVisual: "epifita-grande-pseudobulbos-robustos",
        destaque: "Cachepô de Madeira",
        resumo: "Epífita tropical de grande porte, pseudobulbos robustos e hastes florais muito longas. Exige suporte estável, luminosidade alta, espaço para o rizoma e secagem clara entre regas.",
        metodos: [
            { nome: "Cachepô de Madeira", asset: "cesto-madeira", estrelas: 5, status: "Mais recomendado na ficha", texto: "Cachepô grande, robusto e firmemente suspenso, com mistura grossa e espaço para a touceira crescer." },
            { nome: "Vaso de Barro", asset: "vaso-barro", estrelas: 4, status: "Alternativa", texto: "Vaso pesado, largo e muito perfurado, com estabilidade para pseudobulbos e hastes altas." },
            { nome: "Árvore viva", asset: "arvore-viva", estrelas: 4, status: "Uso condicional", texto: "Fixação definitiva em tronco bem iluminado, sem geadas e com regas de estabelecimento." },
            { nome: "Placa / tronco", asset: "placa-tronco", estrelas: 3, status: "Uso condicional", texto: "Somente tronco grande e firme, dimensionado para o porte adulto e a necessidade de água no estabelecimento." }
        ]
    },
    substratoVisual: {
        titulo: "Substrato ideal",
        contexto: "Mistura grossa para cachepô robusto e muito ventilado",
        resumo: "Partículas médias e grossas com aeração elevada, boa sustentação e secagem perceptível entre regas.",
        justificativa: "A receita visual para cachepô grande e robusto combina macadâmia média, pinus médio, perlita grossa e carvão vegetal. A primeira mistura qualitativa antiga contém pinus, perlita, carvão e chips de coco, sem macadâmia; a segunda contém macadâmia, argila expandida, carvão e pinus, sem perlita. Nenhuma reproduz integralmente a composição visual. A fórmula foi incluída como primeira alternativa para recipiente, preservando as três anteriores. A estabilidade estrutural do cachepô é importante para o porte adulto, mas não valida os percentuais, que permanecem não homologados pela MACS 1.0.",
        receitaTexto: "35% casca de macadâmia média + 30% casca de pinus média + 20% perlita grossa + 15% carvão vegetal.",
        perfil: ["Epífita de grande porte", "Pseudobulbos robustos", "Rizoma expansivo", "Alta luminosidade", "Raízes ventiladas"],
        comportamento: [
            { nome: "Retenção", valor: 2, icone: "💧" },
            { nome: "Aeração", valor: 5, icone: "💨" },
            { nome: "Secagem", valor: 4, icone: "⚡" },
            { nome: "Compactação", valor: 1, icone: "🧱" }
        ],
        itens: [
            { asset: "casca-macadamia", nome: "Casca de macadâmia média", proporcao: "35%", nota: "estrutura", finalidade: "Sustenta a touceira com boa porosidade." },
            { asset: "casca-pinus", nome: "Casca de pinus média", proporcao: "30%", nota: "apoio radicular", finalidade: "Permite fixação das raízes e umidade moderada." },
            { asset: "perlita", nome: "Perlita grossa", proporcao: "20%", nota: "aeração", finalidade: "Mantém drenagem e espaços de ar." },
            { asset: "carvao", nome: "Carvão vegetal", proporcao: "15%", nota: "porosidade", finalidade: "Complementa a estrutura aberta do cachepô." }
        ],
        alerta: "Não usar recipiente instável, substrato compacto ou sombra excessiva. Reservar espaço para haste floral longa e evitar manter as raízes permanentemente molhadas.",
        notaEvidencia: "MACS 1.0 — primeira passagem documental: Laelia gloriosa (sin. Schomburgkia gloriosa), epífita tropical de grande porte; demanda suporte estável, rizoma expansivo, raízes ventiladas e secagem perceptível. Suportes cachepô madeira 5 estrelas, barro e árvore viva 4, placa/tronco 3: ranking horticultural sem comparação específica. Receita visual 35% macadâmia média + 30% pinus médio + 20% perlita grossa + 15% carvão = 100%; receitaTexto e itens concordam. DIVERGÊNCIA: justificativa diz seguir os quatro componentes da primeira mistura qualitativa, mas esta usa pinus + perlita + carvão + chips coco (sem macadâmia); segunda usa macadâmia + argila expandida + carvão + pinus (sem perlita); nenhuma coincide integralmente. Necessidade de conferir desempenho estrutural e estabilidade de cesto grande é inferência de cultivo, não validação de percentuais. Meta até 25 produtores brasileiros específicos não atingida; percentuais e estrelas NÃO HOMOLOGADOS."
    },
    errosComuns: "Cultivar em sombra; usar recipiente leve e instável; empregar substrato fino ou compactado; manter raízes constantemente molhadas; dar pouco espaço ao rizoma; não reservar espaço vertical para a haste; deixar água acumulada em brotos novos; adubar raízes secas com solução concentrada; usar Schomburgkia crispa como sinônimo; cortar haste ainda verde.",
    dica: "🏆 Planeje o cultivo para o tamanho adulto. Use cesto robusto ou vaso pesado, dê espaço ao rizoma e reserve área livre para uma haste que pode passar de 1 metro. No crescimento, forneça água e nutrição com generosidade; depois, mantenha muita luz e apenas reduza moderadamente as regas.",
    revisaoCientificaIAR: {
        "nome": "Laelia gloriosa",
        "statusTaxonomico": "Espécie/nome infraespecífico tratado como aceito na revisão taxonômica de referência.",
        "sinonimosPrincipais": "Verificados prioritariamente em POWO/GBIF/Tropicos; manter apenas os relevantes ao catálogo.",
        "morfologiaDimensoes": "Uma orquídea feita para chamar atenção à distância! Laelia gloriosa forma touceiras grandes, com pseudobulbos robustos e hastes florais que podem ultrapassar 1 metro, terminando em cachos de numerosas flores onduladas e vistosas. É uma espécie tropical do norte da América do Sul e da Amazônia, encontrada geralmente entre cerca de 200 e 850 m, onde cresce em árvores bem iluminad",
        "habitatAltitudeClima": "Florestas tropicais · epífita · ~200–850 m. | Quente · úmido · alta luz · ventilado.",
        "distribuicaoGeografica": "Venezuela, Colômbia, Equador, Guianas e norte do Brasil.",
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
        "indice": 34,
        "classificacao": "Moderada",
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
                "notaDificuldade": 2,
                "peso": 10
            },
            "ventilacao": {
                "notaDificuldade": 1,
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
        litoralQuente: { texto: "Ao calor de litoral quente quando recebe luminosidade elevada, ventilação constante, rega abundante durante o crescimento e secagem rápida. Fixe firmemente o recipiente contra vento e tombamento." },
        montanhaFrio: { texto: "Tolera noites amenas, mas deve ser protegida de geadas e de períodos frios prolongados com raízes molhadas. Mantenha alta luminosidade mesmo no inverno." }
    },
    mesesFloracao: [9, 10, 11, 12, 1, 2],
    "selosCultivo": {
        "rega": { "nivel": "frequente", "regime": "reduzir-repouso" },
        "climaFloracao": { "faixa": "quente", "floraNoCalor": true }
    },
        avaliacoes: {
        cultivo: 4,
        floracao: 4,
        perfume: 2,
        luminosidade: 5,
        agua: 3,
        raridade: 4
    }
};
