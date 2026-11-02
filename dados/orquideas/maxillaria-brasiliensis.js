// Ficha V4 refinada — revisão final.

export const maxillariaBrasiliensis = {
    id: "maxillaria-brasiliensis",
    nome: "Maxillaria brasiliensis",
    genero: "Maxillaria",
    sinonimo: "Heterotaxis brasiliensis",
    tipo: "Espécie botânica",
    dificuldade: "Moderada",
    caracteristicas: [
        "Espécie brasileira compacta",
        "Flores solitárias de cerca de 2,5 cm",
        "Crescimento simpodial",
        "Raízes finas e sensíveis"
    ],
    fotos: [
        "imagens/Maxillaria brasiliensis/Maxillaria brasiliensis1.jpg",
        "imagens/Maxillaria brasiliensis/Maxillaria brasiliensis2.jpeg",
        "imagens/Maxillaria brasiliensis/Maxillaria brasiliensis3.jpg",
        "imagens/Maxillaria brasiliensis/Maxillaria brasiliensis4.jpg"
    ],
    descricao: "Uma Maxillaria brasileira discreta e elegante, que recompensa o cultivo atento com flores cerosas de aproximadamente 2,5 cm. Forma touceiras compactas e prefere permanecer estável por vários ciclos, sem divisões frequentes. Apesar do aspecto robusto da planta, suas raízes são finas e pouco tolerantes a substrato velho ou abafado. Por isso, o melhor resultado vem de vaso pequeno, mistura arejada e regas regulares acompanhadas de rápida drenagem.",
    origem: "Brasil",
    regiao: "Brasil · registros em formações tropicais e subtropicais",
    habitat: "Epífita · florestas úmidas, inclusive matas ciliares.",
    clima: "Quente a fresco · umidade regular e ventilação.",
    climaFloracao: "IOSPE registra a espécie no Brasil como planta de crescimento quente a fresco e floração no outono do hemisfério sul. A emissão floral depende sobretudo de crescimento maduro, raízes funcionais e boa luminosidade filtrada. Não há indicação de repouso seco rígido: depois da maturação, uma discreta redução de água é suficiente. Touceiras estabelecidas tendem a responder melhor do que divisões pequenas recém-replantadas.",
    iluminacao: {
        sombrite: "50% a 60%",
        solDireto: "Permitido com restrição",
        horario: "Somente início da manhã",
        observacoes: "Prefere claridade filtrada abundante. Folhas firmes em verde-médio indicam bom equilíbrio. Folhagem muito escura e crescimento frouxo sugerem pouca luz; amarelecimento intenso e manchas secas indicam excesso de exposição ou aquecimento."
    },
    floracao: "Mais característica no outono, embora o calendário possa variar conforme o amadurecimento dos crescimentos. Cada haste porta uma flor de cerca de 2,5 cm. Exemplares adultos e pouco perturbados podem apresentar várias flores próximas entre si quando diferentes crescimentos amadurecem de forma sincronizada.",
    adubacao: "🌿 Orgânica: bokashi em pequena quantidade na borda ou em porta-adubo, sem contato com o rizoma.\n💧 Foliar/radicular: NPK equilibrado, como 20-20-20, em 1/4 a 1/3 da dose a cada 10 a 15 dias durante crescimento ativo. Não fertilize raízes completamente secas.\n🧪 Liberação lenta: poucos grânulos, sempre longe de raízes novas. Faça flushing mensal com água pura.",
    rega: "Durante o crescimento, regue quando a mistura estiver próxima da secagem, mantendo umidade regular sem saturação prolongada. Depois da maturação, aumente discretamente o intervalo entre regas. Em períodos frios, úmidos ou nublados, ajuste a frequência à menor evaporação. Pseudobulbos enrugando enquanto o substrato continua molhado são sinal para verificar as raízes, não para aumentar automaticamente a rega.",
    suporte: "🥇 Vaso de barro pequeno e bem furado.\n🥈 Cachepô de madeira vazado.\n🥉 Placa de madeira ou cortiça apenas em ambiente com umidade suficiente para evitar desidratação rápida. O recipiente deve acomodar poucos novos crescimentos, sem grande volume de substrato no centro.",
    substrato: ["🥇 Chips de coco + pinus médio + perlita grossa + carvão vegetal miúdo.","🥈 Pinus médio + perlita grossa + pequena fração de esfagno picado + casca de macadâmia.","🥉 Fibra de coco grossa + chips de coco + perlita grossa + pinus médio."],
    formasCultivo: {
        perfilVisual: "maxillaria-compacta-epifita-raizes-finas",
        destaque: "Vaso de Barro",
        resumo: "Epífita compacta de raízes finas e sensíveis a abafamento. Prefere vaso pequeno e bem furado, mistura aerada com umidade moderada e estabilidade da touceira.",
        metodos: [
            { nome: "Vaso de Barro", asset: "vaso-barro", estrelas: 5, status: "Mais recomendado na ficha", texto: "Vaso pequeno e muito perfurado, apenas um pouco maior que a touceira, para secagem uniforme." },
            { nome: "Cachepô de Madeira", asset: "cesto-madeira", estrelas: 4, status: "Alternativa", texto: "Cachepô vazado com mistura de partículas médias e umidade regular." },
            { nome: "Placa / tronco", asset: "placa-tronco", estrelas: 3, status: "Uso condicional", texto: "Cortiça ou madeira durável somente com umidade ambiental e regas suficientes para evitar desidratação rápida." },
            { nome: "Vaso plástico vasado", asset: "vaso-plastico-vasado", estrelas: 4, status: "Alternativa", texto: "Vaso pequeno e muito vazado, sem substrato compacto ou centro permanentemente úmido." }
        ]
    },
    substratoVisual: {
        titulo: "Substrato ideal",
        contexto: "Mistura arejada de umidade moderada para vaso pequeno",
        resumo: "Partículas médias e fibras grossas que apoiam raízes finas sem manter o centro do vaso encharcado.",
        justificativa: "A composição quantifica os quatro materiais da primeira mistura qualitativa já registrada na ficha. Percentuais estimados e ainda não homologados pela MACS 1.0.",
        receitaTexto: "30% casca de macadâmia triturada média + 30% casca de pinus média + 25% perlita grossa + 15% fibra de coco grossa.",
        perfil: ["Epífita compacta", "Raízes finas", "Umidade moderada", "Vaso justo", "Drenagem rápida"],
        comportamento: [
            { nome: "Retenção", valor: 3, icone: "💧" },
            { nome: "Aeração", valor: 5, icone: "💨" },
            { nome: "Secagem", valor: 4, icone: "⚡" },
            { nome: "Compactação", valor: 1, icone: "🧱" }
        ],
        itens: [
            { asset: "casca-macadamia", nome: "Casca de macadâmia triturada média", proporcao: "30%", nota: "estrutura", finalidade: "Oferece sustentação durável sem compactação." },
            { asset: "casca-pinus", nome: "Casca de pinus média", proporcao: "30%", nota: "apoio radicular", finalidade: "Conserva umidade moderada ao redor das raízes." },
            { asset: "perlita", nome: "Perlita grossa", proporcao: "25%", nota: "aeração", finalidade: "Mantém espaços de ar e drenagem." },
            { asset: "fibra-coco", nome: "Fibra de coco grossa", proporcao: "15%", nota: "reserva hídrica", finalidade: "Complementa a umidade sem formar massa compacta." }
        ],
        alerta: "Evitar vaso grande, substrato degradado ou encharcado, rizoma enterrado, divisões frequentes e seca prolongada. Replantar preferencialmente com novas raízes em emissão.",
        notaEvidencia: "Estrelas e percentuais são estimativas horticulturais não homologadas pela MACS 1.0. Conferência visual dos assets ainda pendente."
    },
    errosComuns: "Manter substrato constantemente encharcado; esperar a mistura virar farelo; usar vaso grande; dividir a touceira em porções pequenas; enterrar o rizoma; cultivar com pouca luz ou ventilação; aplicar excesso de nitrogênio; fertilizar raízes secas; deixar acumular sais; impor seca prolongada.",
    dica: "Preserve a touceira e priorize a saúde das raízes. A espécie prefere vasos relativamente justos, que secam de forma mais uniforme e evitam excesso de umidade ao redor das raízes. Replante somente no início da emissão de novas raízes, mantendo o rizoma sobre a superfície e escolhendo um recipiente apenas 2–4 cm maior que o volume atual da planta. Evite vasos superdimensionados, divisões frequentes e replantes desnecessários: esta espécie responde melhor à estabilidade e ao desenvolvimento de uma touceira bem estabelecida.",
    revisaoCientificaIAR: {
        "nome": "Maxillaria brasiliensis",
        "statusTaxonomico": "Espécie/nome infraespecífico tratado como aceito na revisão taxonômica de referência.",
        "sinonimosPrincipais": "Verificados prioritariamente em POWO/GBIF/Tropicos; manter apenas os relevantes ao catálogo.",
        "morfologiaDimensoes": "Uma Maxillaria brasileira discreta e elegante, que recompensa o cultivo atento com flores cerosas de aproximadamente 2,5 cm. Forma touceiras compactas e prefere permanecer estável por vários ciclos, sem divisões frequentes. Apesar do aspecto robusto da planta, suas raízes são finas e pouco tolerantes a substrato velho ou abafado. Por isso, o melhor resultado vem de vaso pequeno",
        "habitatAltitudeClima": "Epífita · florestas úmidas, inclusive matas ciliares. | Quente a fresco · umidade regular e ventilação.",
        "distribuicaoGeografica": "Brasil · registros em formações tropicais e subtropicais.",
        "cultivoPremiacao": "Cultivo confrontado com habitat/IOSPE; premiação AOS somente considerada quando dado público verificável foi localizado.",
        "confianca": "media",
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
        "indice": 40,
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
                "notaDificuldade": 2,
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
        litoralQuente: { texto: "Ao litoral quente quando cultivada com ventilação constante, vaso justo e substrato estrutural. Regue cedo e evite retenção prolongada no centro do vaso." },
        montanhaFrio: { texto: "Em regiões serranas. Em semanas frias e úmidas, aumente o intervalo entre regas, mantendo circulação de ar e sem impor seca prolongada." }
    },
    mesesFloracao: [3, 4, 5],
    "selosCultivo": {
        "rega": { "nivel": "frequente", "regime": "reduzir-repouso" },
        "climaFloracao": { "faixa": "quente", "floraNoCalor": true }
    },
        avaliacoes: {
        cultivo: 3,
        floracao: 3,
        perfume: 2,
        luminosidade: 3,
        agua: 3,
        raridade: 3
    }
};
