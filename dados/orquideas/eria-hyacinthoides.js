// Refinamento Final — Lote 14.

export const eriaHyacinthoides = {
    id: "eria-hyacinthoides",
    nome: "Bryobium hyacinthoides",
    genero: "Bryobium",
    sinonimo: "Eria hyacinthoides",
    tipo: "Espécie botânica — nome atualizado",
    dificuldade: "Moderada",
    caracteristicas: ["Sinônimo: Eria hyacinthoides", "Sudeste Asiático", "Inflorescência densa", "Alta umidade"],
    "fotos": [
        "imagens/Bryobium hyacinthoides/Bryobium hyacinthoides1.jpg",
        "imagens/Bryobium hyacinthoides/Bryobium hyacinthoides2.jpg",
        "imagens/Bryobium hyacinthoides/Bryobium hyacinthoides3.jpg",
        "imagens/Bryobium hyacinthoides/Bryobium hyacinthoides4.jpg"
    ],
    descricao: "Uma pequena asiática que compensa o tamanho das flores com quantidade! Bryobium hyacinthoides forma pseudobulbos agrupados e folhas estreitas próximas ao ápice, de onde surgem hastes eretas de até cerca de 25 cm com aproximadamente 20–40 flores. Cada flor pode chegar perto de 2 cm e as inflorescências têm aspecto levemente felpudo. Vive em florestas úmidas do Sudeste Asiático, entre cerca de 500 e 1.700 m, por isso aprecia umidade atmosférica alta e boa circulação de ar, mas não raízes permanentemente encharcadas.",
    origem: "Sudeste Asiático",
    regiao: "Tailândia à Malesia ocidental e meridional",
    habitat: "Florestas úmidas · epífita/rupícola · 500–1.700 m.",
    clima: "Quente a fresco · úmido e ventilado.",
    climaFloracao: "A faixa altitudinal ampla explica sua tolerância de quente a fresco. No litoral, mantenha sombra clara, umidade atmosférica e movimento de ar, evitando aquecimento abafado. Não necessita repouso seco; apenas reduza a frequência de rega quando a evaporação cair.",
    iluminacao: {
        sombrite: "60% a 70%",
        solDireto: "Não permitido",
        horario: "",
        observacoes: "Necessita de luz filtrada média. O sol direto não é recomendado, pois o aquecimento excessivo das folhas causa queimaduras rápidas e amarelamento foliar prematuro."
    },
    floracao: "Principalmente na primavera; hastes de até cerca de 25 cm com aproximadamente 20–40 flores.",
    adubacao: "💧 Foliar: NPK equilibrado, como 20-20-20, diluído a 1/4 da dose recomendada pelo fabricante, a cada 7 a 10 dias durante o crescimento ativo.\n🌿 Orgânica: Bokashi em dose muito reduzida e afastado das raízes.\n🧪 Liberação lenta: poucos grânulos de Osmocote em recipiente bem ventilado.\n⚠️ Atenção: as raízes finas são sensíveis ao acúmulo de sais; realize periodicamente regas abundantes apenas com água para lixiviar o substrato.",
    rega: "Mantenha regas regulares e frequentes durante os períodos quentes, permitindo apenas uma leve aeração na camada superficial do substrato entre as irrigações. No inverno ou em dias frios, reduza ligeiramente a frequência, mas nunca deixe o substrato secar por completo.",
    suporte: "🥇 Cesto ou cachepô bem ventilado.\n🥈 Vaso de barro.\n🥉 Montagem em tronco apenas em ambiente de alta umidade relativa.",
    formasCultivo: {
        "perfilVisual": "epifita",
        "destaque": "Cesto raso ventilado",
        "resumo": "Cesto raso que acomoda o avanço lateral dos brotos e mantém a base da planta fora de uma massa compacta. Em calor prolongado, a pequena reserva hídrica deve ser compensada por regas bem observadas.",
        "metodos": [
            {
                "nome": "Cesto raso ventilado",
                "asset": "cesto-madeira",
                "estrelas": 5,
                "status": "Ideal",
                "texto": "Acomoda a expansão dos brotos e conserva ar em torno das raízes, sem encharcar a base."
            },
            {
                "nome": "Vaso de barro baixo",
                "asset": "vaso-barro",
                "estrelas": 4,
                "status": "Muito recomendado",
                "texto": "Boa estabilidade e evaporação lateral, com substrato aberto e recipiente justo."
            },
            {
                "nome": "Vaso plástico muito perfurado",
                "asset": "vaso-plastico-vasado",
                "estrelas": 4,
                "status": "Muito recomendado",
                "texto": "Ajuda a preservar umidade em dias quentes; atenção à secagem lenta no centro."
            },
            {
                "nome": "Placa / tronco",
                "asset": "placa-tronco",
                "estrelas": 3,
                "status": "Alternativa",
                "texto": "Exige umidade ambiental alta e regas frequentes para evitar desidratação."
            }
        ]
    },
    substratoVisual: {
        "titulo": "Substrato ideal",
        "contexto": "Receita para cultivo em vaso ou recipiente",
        "resumo": "Composição proposta para equilibrar a umidade necessária com oxigenação e drenagem das raízes.",
        "justificativa": "Cesto raso que acomoda o avanço lateral dos brotos e mantém a base da planta fora de uma massa compacta. Em calor prolongado, a pequena reserva hídrica deve ser compensada por regas bem observadas. Esta receita para recipiente é uma proposta técnica de cultivo, não uma fórmula experimental validada especificamente para a espécie.",
        "receitaTexto": "35% casca de pinus média + 25% chips de coco tratados + 25% perlita grossa + 15% esfagno solto.",
        "perfil": [
            "Raízes finas",
            "Boa aeração",
            "Umidade regular",
            "Cesto raso",
            "Base livre",
            "Secagem suave"
        ],
        "comportamento": [
            {
                "nome": "Retenção",
                "valor": 3,
                "icone": "💧"
            },
            {
                "nome": "Aeração",
                "valor": 4,
                "icone": "💨"
            },
            {
                "nome": "Secagem",
                "valor": 3,
                "icone": "⚡"
            },
            {
                "nome": "Compactação",
                "valor": 2,
                "icone": "🧱"
            }
        ],
        "itens": [
            {
                "asset": "casca-pinus",
                "nome": "Casca de pinus média",
                "proporcao": "35%",
                "nota": "estrutura e umidade moderada",
                "finalidade": "Cria apoio para raízes epífitas sem enterrá-las em material fino."
            },
            {
                "asset": "chips-coco",
                "nome": "Chips de coco tratados",
                "proporcao": "25%",
                "nota": "reserva de água",
                "finalidade": "Aumentam a estabilidade hídrica entre regas; devem ser bem lavados."
            },
            {
                "asset": "perlita",
                "nome": "Perlita grossa",
                "proporcao": "25%",
                "nota": "aeração e leveza",
                "finalidade": "Mantém a mistura solta, reduzindo a compactação com o tempo."
            },
            {
                "asset": "esfagno",
                "nome": "Esfagno solto",
                "proporcao": "15%",
                "nota": "amortecimento da secagem",
                "finalidade": "Pequena fração distribuída sem pressão protege raízes novas da secagem abrupta."
            }
        ],
        "alerta": "Mantenha a base da planta e os novos brotos livres; ajuste as regas pela secagem real do recipiente e substitua o meio quando perder estrutura."
    },
    substrato: "🥇 Casca de pinus média + chips de coco + perlita grossa + pequena fração de esfagno solto.\n🥈 Cesto raso com esfagno de fibra longa bem solto + perlita grossa, sem compactar o rizoma.\n🥉 Chips de coco tratados + perlita + carvão vegetal miúdo + pouco esfagno.\n⭐ Alternativa: Casca de macadâmia triturada média + pinus médio + perlita grossa + esfagno em baixa proporção.",
    errosComuns: "Manter a planta identificada apenas sob o gênero desatualizado Eria nos registros da coleção; Permitir secura prolongada do substrato; Cultivar em ambientes com pouca ventilação; Exagerar na dosagem dos adubos e causar queima das raízes por sais; Dividir touceiras pequenas antes de a planta estar bem estabelecida.",
    dica: "Deixe a planta formar uma touceira antes de dividir. O efeito ornamental vem justamente das hastes densas e numerosas; em clima quente, combine umidade do ar com ventilação forte para que as raízes finas permaneçam hidratadas sem ficar abafadas.",
    revisaoCientificaIAR: {
        "nome": "Bryobium hyacinthoides",
        "statusTaxonomico": "Nome aceito usado na ficha: Bryobium hyacinthoides.",
        "sinonimosPrincipais": "Verificados prioritariamente em POWO/GBIF/Tropicos; manter apenas os relevantes ao catálogo.",
        "morfologiaDimensoes": "Uma pequena asiática que compensa o tamanho das flores com quantidade! Bryobium hyacinthoides forma pseudobulbos agrupados e folhas estreitas próximas ao ápice, de onde surgem hastes eretas de até cerca de 25 cm com aproximadamente 20–40 flores. Cada flor pode chegar perto de 2 cm e as inflorescências têm aspecto levemente felpudo. Vive em florestas úmidas do Sudeste Asiático, ",
        "habitatAltitudeClima": "Florestas úmidas · epífita/rupícola · 500–1.700 m. | Quente a fresco · úmido e ventilado.",
        "distribuicaoGeografica": "Tailândia à Malesia ocidental e meridional.",
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
        "indice": 45,
        "classificacao": "Moderada",
        "cultivoEstrelas": 3,
        "criterios": {
            "temperatura": {
                "notaDificuldade": 3,
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
        }
    },
        adaptacaoRegional: { litoralQuente: { texto: "Com umidade, sombra clara e circulação de ar." }, montanhaFrio: { texto: "Boa em local protegido, evitando frio intenso e substrato encharcado no inverno." } },
    mesesFloracao: [9,10,11,12,1,2],
    "selosCultivo": {
        "rega": { "nivel": "moderada", "regime": "reduzir-inverno" },
        "climaFloracao": { "faixa": "intermediario" }
    },
        avaliacoes: { cultivo: 3, floracao: 4, perfume: 2, luminosidade: 3, agua: 4, raridade: 4 }
};
