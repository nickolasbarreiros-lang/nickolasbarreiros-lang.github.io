// Refinamento Final — Lote 14.

export const encycliaOncidioides = {
    id: "encyclia-oncidioides",
    nome: "Encyclia oncidioides",
    genero: "Encyclia",
    sinonimo: "Epidendrum oncidioides",
    tipo: "Espécie botânica",
    dificuldade: "Moderada",
    caracteristicas: ["Espécie brasileira", "Alta luminosidade", "Haste ramificada", "Flores perfumadas", "Porte médio a grande"],
    fotos: [
        "imagens/Encyclia oncidioides/Encyclia oncidioides1.jpg",
        "imagens/Encyclia oncidioides/Encyclia oncidioides2.webp",
        "imagens/Encyclia oncidioides/Encyclia oncidioides3.jpg",
        "imagens/Encyclia oncidioides/Encyclia oncidioides4.jpg"
    ],
    descricao: "Uma Encyclia de presença marcante, feita para quem gosta de hastes longas e cheias de flores! Encyclia oncidioides forma pseudobulbos robustos, normalmente com duas ou três folhas firmes, e pode produzir inflorescências ramificadas próximas de 90 cm. As flores, que podem chegar a cerca de 5 cm, variam do amarelo-esverdeado ao castanho e costumam ser doces e perfumadas. Na natureza aparece desde áreas próximas ao nível do mar até cerca de 750 m, inclusive em areia branca e afloramentos rochosos — uma pista clara de sua preferência por muita luz, ventilação e raízes que sequem rapidamente.",
    origem: "América tropical · Brasil incluído",
    regiao: "Brasil e outros pontos da América tropical",
    habitat: "Areia branca e afloramentos · 0–750 m.",
    clima: "Quente a intermediário · sazonal.",
    climaFloracao: "A espécie floresce melhor depois de formar pseudobulbos fortes sob luz alta. Regue e adube com regularidade enquanto houver brotos e raízes ativos; ao amadurecer o crescimento, aumente moderadamente a secagem entre regas. A faixa natural de baixa altitude mostra que frio não é requisito para florescer.",
    iluminacao: {
        sombrite: "40% a 50%; em regiões serranas, 30% a 40% após aclimatação",
        solDireto: "Permitido com restrição",
        horario: "Início da manhã ou final da tarde",
        observacoes: "Folhas firmes em verde-claro indicam boa luminosidade. Folhas muito escuras e pseudobulbos alongados sugerem sombra excessiva; amarelecimento intenso, manchas secas ou aquecimento excessivo indicam sol demais."
    },
    floracao: "Principalmente primavera e verão; flores numerosas, duráveis e perfumadas em plantas bem estabelecidas.",
    adubacao: "🌿 Orgânica: bokashi em pequena quantidade, preferencialmente em porta-adubo, renovado durante a fase de crescimento ativo.\n💧 Foliar: NPK equilibrado em 1/4 a 1/2 da dose a cada 7–15 dias durante a emissão de brotos e raízes.\n🧪 Liberação lenta: poucos grânulos apenas em vaso muito drenante, sempre afastados das raízes novas. Após a maturação, reduza o excesso de nitrogênio, mas mantenha nutrição equilibrada e diluída.",
    rega: "Durante a emissão de brotos e raízes, regue abundantemente e permita que o substrato seque completamente antes da próxima irrigação. Após a maturação dos pseudobulbos, aumente gradualmente o intervalo entre as regas, sem impor desidratação severa nem seguir um número fixo de dias. Observe o clima, a ventilação, o tamanho do vaso e a firmeza dos pseudobulbos.",
    suporte: "🥇 Vaso de barro justo, com furos laterais e drenagem rápida.\n🥈 Cachepô de madeira bem vazado.\n🥉 Tronco ou placa de madeira dura para plantas adaptadas ao cultivo montado.",
    substrato: ["Casca de pinus média/grossa + perlita grossa + carvão vegetal médio + pequena fração de chips de coco grossos preparados","Casca de macadâmia média + argila expandida média + carvão vegetal médio + casca de pinus grossa"],
    formasCultivo: {
        perfilVisual: "encyclia-epifita-rupicola-clara",
        destaque: "Vaso de Barro",
        resumo: "Encyclia de porte médio a grande, pseudobulbos robustos e hastes longas. Prefere alta luminosidade filtrada, ventilação e secagem rápida das raízes entre regas, sem dormência seca rigorosa.",
        metodos: [
            { nome: "Vaso de Barro", asset: "vaso-barro", estrelas: null, status: "Mais recomendado na ficha", texto: "Vaso justo, com furos laterais, boa estabilidade para hastes altas e drenagem rápida." },
            { nome: "Cachepô de Madeira", asset: "cesto-madeira", estrelas: null, status: "Muito recomendado", texto: "Cachepô bem vazado, proporcional ao rizoma, para ampla aeração das raízes." },
            { nome: "Placa / tronco", asset: "placa-tronco", estrelas: null, status: "Alternativa", texto: "Tronco ou placa de madeira dura para plantas adaptadas ao cultivo montado; exige regas mais frequentes." },
            { nome: "Vaso plástico vasado", asset: "vaso-plastico-vasado", estrelas: null, status: "Alternativa", texto: "Recipiente firme e muito perfurado, com mistura grossa e sem acúmulo de água." }
        ]
    },
    substratoVisual: {
        titulo: "Substrato ideal",
        contexto: "Mistura para vaso de barro justo ou cachepô vazado",
        resumo: "Substrato médio a grosso, de alta porosidade, com secagem clara entre regas.",
        justificativa: "Encyclia oncidioides é uma orquídea epífita ou rupícola de pseudobulbos robustos, que prefere alta luminosidade filtrada e raízes bem ventiladas. Em vaso de barro justo e perfurado, as cascas de macadâmia e pinus oferecem apoio e estrutura; a perlita e o carvão favorecem a drenagem e a circulação de ar. Deixe a mistura secar perceptivelmente entre regas, evitando encharcamento, mas sem impor repouso completamente seco.",
        receitaTexto: "35% casca de macadâmia média + 30% casca de pinus média + 20% perlita grossa compatível com o vaso + 15% carvão vegetal médio.",
        perfil: ["Pseudobulbos robustos", "Porte médio a grande", "Alta luminosidade filtrada", "Raízes ventiladas", "Secagem rápida"],
        comportamento: [
            { nome: "Retenção", valor: 2, icone: "💧" },
            { nome: "Aeração", valor: 5, icone: "💨" },
            { nome: "Secagem", valor: 4, icone: "⚡" },
            { nome: "Compactação", valor: 1, icone: "🧱" }
        ],
        itens: [
            { asset: "casca-macadamia", nome: "Casca de macadâmia média", proporcao: "35%", nota: "estrutura", finalidade: "Sustenta raízes com amplos espaços de ar." },
            { asset: "casca-pinus", nome: "Casca de pinus média", proporcao: "30%", nota: "drenagem", finalidade: "Mantém a mistura aberta e de secagem regular." },
            { asset: "perlita", nome: "Perlita grossa compatível com o vaso", proporcao: "20%", nota: "aeração", finalidade: "Reduz compactação e retenção excessiva." },
            { asset: "carvao", nome: "Carvão vegetal médio", proporcao: "15%", nota: "estrutura", finalidade: "Complementa porosidade e estabilidade do substrato." }
        ],
        alerta: "Evitar vaso grande ou profundo, rizoma enterrado, sombra excessiva e substrato constantemente molhado. Não impor repouso seco rigoroso nem cortar hastes ainda verdes.",
        notaEvidencia: "MACS 1.1 — revisão documental: Encyclia oncidioides, epífita/rupícola de luz alta, pseudobulbos robustos, raízes aeradas e secagem perceptível entre regas, sem repouso seco severo. Vaso de Barro justo e perfurado é suporte principal; estrelas dos suportes omitidas por ausência de validação quantitativa. Receita visual e textual coincidem: 35% macadâmia média + 30% pinus médio + 20% perlita grossa compatível com vaso + 15% carvão vegetal médio = 100%. Exatamente duas outras misturas qualitativas distintas: pinus/perlita/carvão/pequena fração de chips de coco grossos preparados e macadâmia/argila expandida/carvão/pinus. Elas não fundamentam os percentuais visuais; justificativa anterior de equivalência foi corrigida. Monitorar secagem em barro versus cachepô, estabilidade de hastes e retenção na fase ativa. Sem ensaio quantitativo específico nem consulta individualizada a até 25 produtores brasileiros; percentuais NÃO HOMOLOGADOS; estrelas dos suportes omitidas. Classe D — não homologada quantitativamente"
    },
    errosComuns: "Usar vaso grande ou profundo; cultivar em sombra excessiva; manter raízes constantemente molhadas; usar substrato fino, velho ou compactado; enterrar o rizoma; cortar hastes ainda verdes; aplicar excesso de nitrogênio após a maturação; seguir um número fixo de dias sem água; tratar o inverno como dormência seca rigorosa.",
    dica: "Priorize luz alta filtrada e raízes muito arejadas. A ocorrência natural desde o nível do mar até cerca de 750 m explica por que ela pode ir muito bem em clima quente: o ponto decisivo é evitar abafamento e substrato constantemente molhado, não tentar produzir frio artificial.",
    revisaoCientificaIAR: {
        "nome": "Encyclia oncidioides",
        "statusTaxonomico": "Espécie/nome infraespecífico tratado como aceito na revisão taxonômica de referência.",
        "sinonimosPrincipais": "Verificados prioritariamente em POWO/GBIF/Tropicos; manter apenas os relevantes ao catálogo.",
        "morfologiaDimensoes": "Uma Encyclia de presença marcante, feita para quem gosta de hastes longas e cheias de flores! Encyclia oncidioides forma pseudobulbos robustos, normalmente com duas ou três folhas firmes, e pode produzir inflorescências ramificadas próximas de 90 cm. As flores, que podem chegar a cerca de 5 cm, variam do amarelo-esverdeado ao castanho e costumam ser doces e perfumadas. Na natur",
        "habitatAltitudeClima": "Areia branca e afloramentos · 0–750 m. | Quente a intermediário · sazonal.",
        "distribuicaoGeografica": "Brasil e outros pontos da América tropical.",
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
                    "nota": 3,
                    "peso": 5
                },
                "ventilacao": {
                    "nota": 5,
                    "peso": 5
                },
                "luminosidade": {
                    "nota": 5,
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
        adaptacaoRegional: {
        litoralQuente: { texto: "Em clima quente, use mistura muito drenante, ventilação constante e regas pela manhã, protegendo do sol forte da tarde e de chuvas contínuas quando o crescimento estiver maduro." },
        montanhaFrio: { texto: "Mantenha luminosidade alta, proteja contra geadas e reduza proporcionalmente as regas em períodos frios, chuvosos ou de baixa evaporação." }
    },
    mesesFloracao: [9, 10, 11, 12, 1, 2, 3],
    "selosCultivo": {
        "rega": { "nivel": "frequente", "regime": "reduzir-repouso" },
        "climaFloracao": { "faixa": "quente", "floraNoCalor": true }
    },
        avaliacoes: { cultivo: 3, floracao: 4, perfume: 4, luminosidade: 4, agua: 3, raridade: 3 }
};
