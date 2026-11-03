// Ficha científica e de cultivo revisada — Laelia splendida.
// Mantém "Schomburgkia splendida" como identificação histórica relevante da coleção.

export const laeliaSplendida = {
    id: "laelia-splendida",
    nome: "Laelia splendida",
    genero: "Laelia",
    tipo: "Espécie botânica epífita ou rupícola sul-americana",
    dificuldade: "Moderada",
    caracteristicas: [
        "Sin. Schomburgkia splendida",
        "Flores grandes e vistosas",
        "Haste floral longa",
        "Alta luminosidade",
        "Clima quente a intermediário",
        "Crescimento robusto"
    ],
    fotos: [
        "imagens/Laelia splendida/Laelia splendida1.jpg",
        "imagens/Laelia splendida/Laelia splendida2.jpg",
        "imagens/Laelia splendida/Laelia splendida3.jpg",
        "imagens/Laelia splendida/Laelia splendida4.jpg"
    ],
    descricao: "Laelia splendida é uma orquídea de presença marcante, conhecida por muitos colecionadores pelo antigo nome Schomburgkia splendida. Forma pseudobulbos robustos e, quando adulta, lança hastes florais longas que elevam as flores bem acima da folhagem. As flores são grandes, vistosas e de aspecto tropical, fazendo desta uma espécie especialmente interessante para espaços claros e bem ventilados. Apesar do porte imponente, seu cultivo é relativamente direto quando recebe bastante luz, raízes arejadas e uma boa alternância entre rega abundante e secagem.",
    origem: "América do Sul",
    regiao: "Colômbia e Equador",
    habitat: "Epífita ou rupícola de ambientes tropicais claros e ventilados.",
    clima: "Quente a intermediário, luminoso e ventilado.",
    climaFloracao: "A floração depende principalmente de pseudobulbos maduros, boa reserva de energia e luminosidade elevada. No litoral quente, adapta-se bem desde que as raízes tenham excelente aeração e a planta não permaneça constantemente molhada.",
    iluminacao: {
        sombrite: "30% a 50%",
        solDireto: "Permitido com restrição",
        horario: "Início da manhã ou final da tarde",
        observacoes: "É uma espécie de alta luminosidade. Sombra excessiva produz crescimento verde e vigoroso, mas pode impedir a floração. No litoral quente, evite sol forte do meio do dia sobre folhas não aclimatadas."
    },
    floracao: "A época pode variar conforme procedência e condições de cultivo. No calendário do site, primavera e início do verão são usados como janela prática de referência, observando sempre a maturação dos pseudobulbos.",
    adubacao: "🌿 Orgânica: bokashi em pequena quantidade, preferencialmente em porta-adubo.\n💧 Foliar/mineral: NPK equilibrado, como 20-20-20, em cerca de 1/4 da dose comercial a cada 10 a 15 dias durante crescimento ativo.\n🧪 Liberação lenta: pode ser utilizada em poucos grânulos em vasos ou cestos.\n🚿 Lavagem: faça regas periódicas apenas com água para evitar acúmulo de sais.",
    rega: "Regue abundantemente enquanto novos brotos e raízes estiverem ativos, deixando o suporte secar parcialmente antes da próxima irrigação. Com pseudobulbos maduros, aumente moderadamente o intervalo entre regas. Evite raízes permanentemente molhadas.",
    suporte: [
        "🥇 Cesto ou cachepô de madeira, permitindo raízes muito arejadas.",
        "🥈 Vaso de barro largo e bem perfurado, proporcional à frente de crescimento.",
        "🥉 Placa ou tronco robusto, quando houver umidade suficiente para regas frequentes."
    ],
    substrato: ["Casca de pinus média/grossa + perlita grossa + carvão vegetal médio + pequena fração de chips de coco grossos preparados","Casca de macadâmia média + argila expandida média + carvão vegetal médio + casca de pinus grossa"],
    formasCultivo: {
        perfilVisual: "laelia-robusta-epifita-rupicola-alta-luz",
        destaque: "Cachepô de Madeira",
        resumo: "Espécie robusta, epífita ou rupícola, de hastes florais longas. Priorizar suporte amplo, estável e muito ventilado, luminosidade elevada com aclimatação e espaço para novas frentes de crescimento.",
        metodos: [
            { nome: "Cachepô de Madeira", asset: "cesto-madeira", estrelas: 5, status: "Mais recomendado na ficha", texto: "Cachepô robusto e muito vazado, com espaço para crescimento e raízes bem ventiladas." },
            { nome: "Vaso de Barro", asset: "vaso-barro", estrelas: 4, status: "Alternativa", texto: "Vaso largo, pesado e bem perfurado, proporcional ao rizoma e com mistura grossa." },
            { nome: "Placa / tronco", asset: "placa-tronco", estrelas: 4, status: "Uso condicional", texto: "Tronco robusto e bem fixado, com regas frequentes durante estabelecimento e em períodos secos." },
            { nome: "Árvore viva", asset: "arvore-viva", estrelas: 3, status: "Uso condicional", texto: "Fixação permanente em árvore adequada, com luz suficiente e suporte para o porte adulto." }
        ]
    },
    substratoVisual: {
        titulo: "Substrato ideal",
        contexto: "Mistura grosseira para cachepô de madeira bem ventilado",
        resumo: "Componentes médios e grossos para sustentação, boa drenagem e secagem perceptível entre regas.",
        justificativa: "Laelia splendida (sin. Schomburgkia splendida) é epífita ou rupícola robusta, de hastes florais longas, que precisa de alta luminosidade com aclimatação, suporte estável e raízes arejadas. Para cachepô de madeira bem vazado, a receita visual propõe macadâmia média, pinus médio, perlita grossa compatível com o cesto e carvão vegetal médio, totalizando 100%. As duas outras misturas são alternativas qualitativas distintas e não fundamentam os percentuais visuais. Manter secagem perceptível entre regas e espaço para as novas frentes de crescimento. MACS 1.1: inferência horticultural sem homologação quantitativa específica.",
        receitaTexto: "35% casca de macadâmia média + 30% casca de pinus média + 20% perlita grossa compatível com o cesto + 15% carvão vegetal médio (proposta não homologada).",
        perfil: ["Epífita ou rupícola", "Pseudobulbos robustos", "Hastes longas", "Alta luminosidade", "Raízes arejadas"],
        comportamento: [
            { nome: "Retenção", valor: 2, icone: "💧" },
            { nome: "Aeração", valor: 5, icone: "💨" },
            { nome: "Secagem", valor: 4, icone: "⚡" },
            { nome: "Compactação", valor: 1, icone: "🧱" }
        ],
        itens: [
            { asset: "casca-macadamia", nome: "Casca de macadâmia média", proporcao: "35%", nota: "estrutura", finalidade: "Oferece sustentação às raízes sem compactação." },
            { asset: "casca-pinus", nome: "Casca de pinus média", proporcao: "30%", nota: "apoio radicular", finalidade: "Favorece fixação com umidade moderada." },
            { asset: "perlita", nome: "Perlita grossa compatível com o cesto", proporcao: "20%", nota: "aeração", finalidade: "Mantém drenagem e espaços de ar." },
            { asset: "carvao", nome: "Carvão vegetal médio", proporcao: "15%", nota: "porosidade", finalidade: "Complementa a estrutura aberta do recipiente." }
        ],
        alerta: "Evitar sombra excessiva, vaso profundo, substrato encharcado e exposição abrupta ao sol forte. Reservar espaço para as novas frentes e hastes florais longas.",
        notaEvidencia: "MACS 1.1 — revisão documental: Laelia splendida (sin. Schomburgkia splendida), epífita/rupícola robusta de hastes longas; alta luminosidade com aclimatação, suporte estável e raízes arejadas. Cachepô de Madeira bem vazado é suporte principal; estrelas heurísticas. Receita visual e textual coincidem: 35% macadâmia média + 30% pinus médio + 20% perlita grossa compatível com cesto + 15% carvão vegetal médio = 100%. Exatamente duas outras misturas qualitativas distintas: pinus/perlita/carvão/pequena fração de chips de coco grossos preparados e macadâmia/argila expandida/carvão/pinus grosso. Elas não fundamentam os percentuais visuais. Monitorar secagem, estabilidade e espaço para hastes. Sem ensaio quantitativo específico nem consulta individualizada a até 25 produtores brasileiros; percentuais e estrelas NÃO HOMOLOGADOS."
    },
    errosComuns: [
        "Cultivar em sombra excessiva",
        "Usar vaso profundo e pouco ventilado",
        "Manter raízes permanentemente molhadas",
        "Dividir a planta em partes muito pequenas",
        "Replantar sem novas raízes em atividade",
        "Aplicar fertilizante concentrado",
        "Não oferecer espaço para a nova frente de crescimento",
        "Expor abruptamente ao sol forte sem aclimatação"
    ],
    dica: "🏆 Se a planta cresce bem mas não floresce, investigue primeiro a luz. Laelia splendida precisa acumular bastante energia para sustentar suas hastes longas. No litoral quente, um local muito claro, ventilado e com raízes quase expostas costuma funcionar melhor que um vaso úmido e sombreado.",
    revisaoCientificaIAR: {
        "nome": "Laelia splendida",
        "statusTaxonomico": "Espécie/nome infraespecífico tratado como aceito na revisão taxonômica de referência.",
        "sinonimosPrincipais": "Verificados prioritariamente em POWO/GBIF/Tropicos; manter apenas os relevantes ao catálogo.",
        "morfologiaDimensoes": "Laelia splendida é uma orquídea de presença marcante, conhecida por muitos colecionadores pelo antigo nome Schomburgkia splendida. Forma pseudobulbos robustos e, quando adulta, lança hastes florais longas que elevam as flores bem acima da folhagem. As flores são grandes, vistosas e de aspecto tropical, fazendo desta uma espécie especialmente interessante para espaços claros e b",
        "habitatAltitudeClima": "Epífita ou rupícola de ambientes tropicais claros e ventilados. | Quente a intermediário, luminoso e ventilado.",
        "distribuicaoGeografica": "Colômbia e Equador.",
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
        "indice": 36,
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
            "indice": 81,
            "estrelas": 5,
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
        adaptacaoRegional: {
        litoralQuente: { texto: "Muito boa Calor não costuma ser o principal problema; ofereça muita luz, circulação de ar e secagem relativamente rápida das raízes." },
        montanhaFrio: { texto: "Boa Tolera noites mais frescas, mas deve ser protegida de frio intenso e de substrato frio e constantemente saturado." }
    },
    mesesFloracao: [9, 10, 11, 12],
    "selosCultivo": {
        "rega": { "nivel": "frequente" },
        "climaFloracao": { "faixa": "quente" }
    },
        avaliacoes: { cultivo: 3, floracao: 4, perfume: 2, luminosidade: 4, agua: 3, raridade: 4 }
};
