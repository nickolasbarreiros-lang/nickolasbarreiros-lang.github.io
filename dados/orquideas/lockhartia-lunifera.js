// Ficha V4 refinada — revisão final.

export const lockhartiaLunifera = {
    id: "lockhartia-lunifera",
    nome: "Lockhartia lunifera",
    genero: "Lockhartia",
    sinonimo: "Fernandezia lunifera",
    tipo: "Espécie botânica",
    dificuldade: "Moderada",
    caracteristicas: [
        "Caules em forma de trança",
        "Folhas dísticas e imbricadas",
        "Flores amarelas de longa duração",
        "Epífita sem pseudobulbos"
    ],
    fotos: [
        "imagens/Lockhartia lunifera/Lockhartia lunifera1.webp",
        "imagens/Lockhartia lunifera/Lockhartia lunifera2.webp",
        "imagens/Lockhartia lunifera/Lockhartia lunifera3.jpeg",
        "imagens/Lockhartia lunifera/Lockhartia lunifera4.jpg"
    ],
    descricao: "Uma orquídea que parece ter sido trançada à mão! A Lockhartia lunifera forma caules achatados de cerca de 10 a 30 cm, completamente revestidos por pequenas folhas sobrepostas que criam seu aspecto tão característico. As flores amarelas, com aproximadamente 2 cm, surgem na parte superior dos caules maduros e podem durar bastante tempo. Como não possui pseudobulbos, depende de regas regulares e raízes bem arejadas: o segredo é manter umidade frequente sem deixar o suporte encharcado.",
    origem: "Brasil",
    regiao: "Brasil tropical e subtropical",
    habitat: "Epífita em florestas úmidas · galhos ventilados.",
    clima: "Quente a intermediário · úmido e ventilado.",
    climaFloracao: "A floração ocorre em caules maduros sob luz filtrada clara, umidade regular e boa circulação de ar. IOSPE registra a floração principalmente na primavera e no verão, com flores sucessivas na porção apical dos caules. Não há repouso seco verdadeiro: em períodos mais frios ou de menor crescimento, apenas reduza a frequência de rega conforme a evaporação. Caules verdes devem ser preservados, pois continuam fotossintetizando e podem manter pontos florais ativos.",
    iluminacao: {
        sombrite: "50% a 60%",
        solDireto: "Permitido com restrição",
        horario: "Somente início da manhã",
        observacoes: "Prefere luminosidade média a alta filtrada. Caules muito alongados e frágeis sugerem pouca luz; amarelecimento forte, aquecimento e manchas secas indicam excesso. Em litoral quente, a luz clara deve vir sempre acompanhada de ventilação para evitar superaquecimento das folhas sobrepostas."
    },
    floracao: "Predomina na primavera e no verão. As inflorescências curtas surgem na região superior dos caules e podem carregar várias flores amarelas, sucessivas e duradouras, em torno de 2 cm. Plantas bem estabelecidas podem apresentar novas flores em ondas conforme diferentes caules amadurecem.",
    adubacao: "🌿 Orgânica: bokashi em quantidade mínima dentro de porta-adubo, sem contato com caules ou raízes.\n💧 Foliar/radicular: NPK equilibrado, como 20-20-20, em cerca de 1/4 da dose a cada 10 a 15 dias durante crescimento ativo.\n🧪 Liberação lenta: evitar em plantas montadas; em cestos ou vasos, usar poucos grânulos afastados das raízes novas. Uma vez por mês, lavar abundantemente raízes e suporte apenas com água pura para reduzir sais.",
    rega: "Regue com frequência durante crescimento e calor, sobretudo em plantas montadas. Depois de cada irrigação, permita boa aeração e perda do excesso de água antes da próxima. A espécie não tolera seca prolongada, mas raízes permanentemente saturadas também se deterioram. Regue preferencialmente pela manhã para que as bainhas foliares não permaneçam molhadas durante a noite.",
    suporte: "🥇 Placa inclinada de cortiça, galho rugoso ou madeira dura: acompanha o hábito pendente e facilita o escoamento da água.\n🥈 Cesto pequeno e suspenso, muito ventilado.\n🥉 Vaso pequeno e raso com mistura extremamente aberta, sem forçar os caules a permanecerem eretos.",
    substrato: ["🥇 Para cesto suspenso ou vaso raso: pinus médio 35% + chips de coco grossos 30% + perlita grossa 20% + carvão vegetal 15% (mistura visual provisória, não homologada).","🥈 Pinus médio + perlita grossa + argila expandida miúda + pequena fração de esfagno solto.","🥉 Casca de macadâmia média + pinus médio + perlita grossa + pequena fração de fibra de coco."],
    formasCultivo: {
        perfilVisual: "epifita-pendente-sem-pseudobulbos",
        destaque: "Placa / tronco",
        resumo: "Epífita de caules imbricados e sem pseudobulbos, dependente de umidade regular e ventilação. Montagem inclinada ou pendente favorece escoamento de água entre as folhas.",
        metodos: [
            { nome: "Placa / tronco", asset: "placa-tronco", estrelas: 5, status: "Mais recomendado na ficha", texto: "Placa inclinada de cortiça ou madeira dura, ou galho rugoso, permitindo caules pendentes e escoamento da água." },
            { nome: "Cachepô de Madeira", asset: "cesto-madeira", estrelas: 4, status: "Alternativa", texto: "Cesto pequeno, suspenso e muito ventilado, com umidade regular sem saturação." },
            { nome: "Vaso de Barro", asset: "vaso-barro", estrelas: 3, status: "Uso condicional", texto: "Vaso pequeno e raso, com mistura muito aberta e espaço para caules pendentes." },
            { nome: "Vaso plástico vasado", asset: "vaso-plastico-vasado", estrelas: 3, status: "Uso condicional", texto: "Recipiente pequeno e extremamente perfurado, sem retenção contínua nas raízes." }
        ]
    },
    substratoVisual: {
        titulo: "Substrato ideal",
        contexto: "Montagem principal em placa; mistura alternativa para cesto ou vaso raso",
        resumo: "Mistura aberta com retenção moderada, adequada a raízes que precisam de umidade frequente e ar constante.",
        justificativa: "A montagem inclinada em placa/tronco permanece como suporte principal. Para cesto suspenso ou vaso raso, a receita visual combina pinus médio, chips de coco grossos, perlita grossa e carvão vegetal; a formulação exata foi acrescentada como primeira alternativa textual, preservando as duas misturas anteriores. Os percentuais são estimativas horticulturais e ainda não foram homologados pela MACS 1.0.",
        receitaTexto: "35% casca de pinus média + 30% chips de coco grossos + 20% perlita grossa + 15% carvão vegetal.",
        perfil: ["Epífita sem pseudobulbos", "Caules pendentes", "Umidade regular", "Boa ventilação", "Secagem superficial rápida"],
        comportamento: [
            { nome: "Retenção", valor: 3, icone: "💧" },
            { nome: "Aeração", valor: 5, icone: "💨" },
            { nome: "Secagem", valor: 4, icone: "⚡" },
            { nome: "Compactação", valor: 1, icone: "🧱" }
        ],
        itens: [
            { asset: "casca-pinus", nome: "Casca de pinus média", proporcao: "35%", nota: "estrutura", finalidade: "Fornece suporte radicular e umidade moderada." },
            { asset: "chips-coco", nome: "Chips de coco grossos", proporcao: "30%", nota: "umidade", finalidade: "Ajuda a reduzir a desidratação sem compactar a mistura." },
            { asset: "perlita", nome: "Perlita grossa", proporcao: "20%", nota: "aeração", finalidade: "Mantém drenagem e espaços de ar." },
            { asset: "carvao", nome: "Carvão vegetal", proporcao: "15%", nota: "porosidade", finalidade: "Complementa a estrutura aberta." }
        ],
        alerta: "Evitar seca prolongada, raízes saturadas, sombra excessiva e água parada entre as bainhas à noite. Não cortar caules ainda verdes após a floração.",
        notaEvidencia: "MACS 1.0: POWO/Kew aceita Lockhartia lunifera como epífita brasileira; estudo florístico em Hoehnea registra plantas sobre árvores, frequentemente próximas a cursos de água. AOS recomenda para o GÊNERO Lockhartia placas pequenas, regas constantes e secagem das raízes entre irrigações; não é ensaio específico desta espécie. Dois orquidários brasileiros com recomendações específicas: Paulista (placa ou cachepô com meio de secagem rápida, sem receita) e Maripá (cascas, carvão, madeira e esfagno, sem proporções). Relato de cultivador brasileiro Orquídeas Encanto e Paixão recomenda montagem ou vaso raso com partes iguais de pinus, carvão e esfagno; não é orquidário/produtor contado na meta. Divergência: receita publicada inclui esfagno e não chips de coco/perlita. A fórmula atual 35% pinus + 30% chips de coco + 20% perlita + 15% carvão NÃO HOMOLOGADA, sem comparação controlada. Dois produtores e um relato específico encontrados, abaixo da meta de 25 produtores; estrelas provisórias. Assets não inspecionados nesta passagem."
    },
    errosComuns: "Cortar caules verdes após a floração; cultivar em sombra excessiva; deixar água retida nas bainhas durante a noite; impor seca prolongada; manter raízes continuamente saturadas; usar vaso profundo; aplicar adubo concentrado; permitir acúmulo de sais; cultivar em ambiente abafado.",
    dica: "Preserve todos os caules enquanto estiverem verdes e dê preferência ao cultivo inclinado ou pendente. Essa posição acompanha o crescimento natural, melhora o escoamento da água entre as folhas e expõe melhor as flores. A combinação de umidade regular, secagem superficial rápida e ventilação contínua é mais importante do que qualquer calendário rígido de rega.",
    revisaoCientificaIAR: {
        "nome": "Lockhartia lunifera",
        "statusTaxonomico": "Espécie/nome infraespecífico tratado como aceito na revisão taxonômica de referência.",
        "sinonimosPrincipais": "Verificados prioritariamente em POWO/GBIF/Tropicos; manter apenas os relevantes ao catálogo.",
        "morfologiaDimensoes": "Uma orquídea que parece ter sido trançada à mão! A Lockhartia lunifera forma caules achatados de cerca de 10 a 30 cm, completamente revestidos por pequenas folhas sobrepostas que criam seu aspecto tão característico. As flores amarelas, com aproximadamente 2 cm, surgem na parte superior dos caules maduros e podem durar bastante tempo. Como não possui pseudobulbos, depende de re",
        "habitatAltitudeClima": "Epífita em florestas úmidas · galhos ventilados. | Quente a intermediário · úmido e ventilado.",
        "distribuicaoGeografica": "Brasil tropical e subtropical.",
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
        "indice": 38,
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
        litoralQuente: { texto: "Ao litoral quente quando montada ou cultivada em cesto, com sombra clara e ventilação constante. Evite calor abafado, regas noturnas e esfagno em excesso." },
        montanhaFrio: { texto: "Em regiões serranas, desde que protegida de frio intenso e geadas. Ajuste a rega à menor evaporação e mantenha as bainhas secas durante noites frias." }
    },
    mesesFloracao: [9, 10, 11, 12, 1, 2],
    "selosCultivo": {
        "rega": { "nivel": "frequente" },
        "climaFloracao": { "faixa": "quente" }
    },
        avaliacoes: {
        cultivo: 3,
        floracao: 3,
        perfume: 1,
        luminosidade: 3,
        agua: 4,
        raridade: 3
    }
};
