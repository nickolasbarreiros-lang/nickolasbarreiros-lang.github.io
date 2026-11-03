// Ficha refinada — Padrão Editorial V3.

export const ornithophoraRadicans = {
    id: "ornithophora-radicans",
    nome: "Gomesa radicans",
    genero: "Gomesa",
    sinonimo: "Ornithophora radicans",
    tipo: "Espécie botânica",
    dificuldade: "Moderada",
    caracteristicas: [
        "Miniatura brasileira",
        "Touceira pendente",
        "Raízes filiformes e delicadas",
        "Hastes ramificadas com muitas flores"
    ],
    fotos: [
        "imagens/Ornithophora radicans/Ornithophora radicans1.webp",
        "imagens/Ornithophora radicans/Ornithophora radicans2.webp",
        "imagens/Ornithophora radicans/Ornithophora radicans3.webp",
        "imagens/Ornithophora radicans/Ornithophora radicans4.jpeg"
    ],
    descricao: "Uma miniatura brasileira de visual delicado e movimento pendente. A Gomesa radicans forma touceiras com pseudobulbos pequenos e folhas finas, quase como capim, de onde surgem hastes arqueadas de cerca de 18 cm com pequenas flores perfumadas de 5 mm a 1 cm. O aroma pode lembrar mel. É típica do Sul e Sudeste do Brasil, inclusive áreas próximas ao litoral, em torno de 400 m, o que explica sua boa tolerância ao calor quando recebe sombra moderada, umidade regular e principalmente bastante circulação de ar.",
    origem: "Brasil",
    regiao: "Sul e Sudeste do Brasil",
    habitat: "Mata Atlântica costeira · ~400 m.",
    clima: "Quente a intermediário · muito ventilado.",
    climaFloracao: "A espécie não exige repouso seco severo. A floração é favorecida por crescimento contínuo, luminosidade filtrada moderada, noites ligeiramente mais amenas e touceiras bem estabelecidas. No litoral quente, o maior inimigo não é o calor isoladamente, mas o calor parado associado ao excesso de umidade. Raízes bem oxigenadas produzem crescimento constante e mais hastes florais.",
    iluminacao: {
        sombrite: "50% a 70%",
        solDireto: "Permitido com restrição",
        horario: "Início da manhã ou final da tarde",
        observacoes: "Prefere meia-sombra clara. Folhas muito escuras indicam sombra excessiva; amarelecimento ou aquecimento foliar indicam excesso de sol."
    },
    floracao: "Principalmente no verão e outono, aproximadamente de dezembro a maio. As hastes arqueadas, finas e soltas chegam a cerca de 18 cm e carregam pequenas flores de 5 mm a 1 cm, frequentemente com perfume adocicado lembrando mel. Touceiras maduras podem emitir várias hastes e produzir um efeito muito delicado.",
    adubacao: "🌿 Orgânica: bokashi em saquinho minúsculo suspenso acima da planta, permitindo dissolução suave durante as regas.\n💧 Foliar: NPK equilibrado a 1/4 ou até 1/6 da dose a cada 10–15 dias.\n🧪 Liberação lenta: Osmocote apenas em dose mínima e somente em cachepô, sempre afastado das raízes.\n🚿 Lavagem: uma vez por mês, lave abundantemente a montagem ou o substrato apenas com água pura para remover sais acumulados.",
    rega: "Mantenha umidade regular durante o crescimento, mas com secagem superficial rápida e alta oxigenação. Plantas montadas podem necessitar de rega diária nos dias quentes. Regue preferencialmente pela manhã e evite que folhas e raízes permaneçam molhadas durante toda a noite. Reduza no frio sem deixar a touceira ressecar por vários dias.",
    suporte: "🥇 Placa de madeira dura, cortiça ou tronco fino.\n🥈 Cachepô pequeno de madeira muito vazado.\n🥉 Vaso raso e pequeno apenas com drenagem extrema.",
    substrato: ["🥇 Para cachepô ou vaso raso: casca de pinus média + chips de coco + perlita grossa + carvão vegetal (mistura visual provisória; placa/tronco permanece principal).","🥈 Pinus médio + perlita grossa + argila expandida miúda + pequena fração de esfagno solto.","🥉 Casca de macadâmia média + pinus médio + perlita grossa + pequena fração de fibra de coco."],
    formasCultivo: {
        perfilVisual: "gomesa-radicans-miniatura-epifita-pendente",
        destaque: "Placa / tronco",
        resumo: "Miniatura epífita de raízes filiformes, touceira pendente e hastes arqueadas. Montagem em madeira ou cortiça mantém aeração elevada e deixa as inflorescências livres.",
        metodos: [
            { nome: "Placa / tronco", asset: "placa-tronco", estrelas: 5, status: "Mais recomendado na ficha", texto: "Madeira dura, cortiça ou tronco fino, suspenso para deixar as hastes livres e facilitar ventilação das raízes." },
            { nome: "Cachepô de Madeira", asset: "cesto-madeira", estrelas: 4, status: "Alternativa", texto: "Cachepô pequeno e muito vazado, elevado, sem impedir a queda das hastes." },
            { nome: "Vaso plástico vasado", asset: "vaso-plastico-vasado", estrelas: 3, status: "Uso condicional", texto: "Vaso pequeno, raso e extremamente perfurado, com substrato aberto e secagem monitorada." },
            { nome: "Vaso de Barro", asset: "vaso-barro", estrelas: 3, status: "Uso condicional", texto: "Somente recipiente pequeno e raso, com drenagem extrema e regas ajustadas." }
        ]
    },
    substratoVisual: {
        titulo: "Substrato ideal",
        contexto: "Mistura aberta para cachepô ou vaso raso; placa sem substrato volumoso",
        resumo: "A montagem principal em placa prioriza raízes expostas e umidade regular. Em recipientes, mistura leve de pinus, coco, perlita e carvão preserva aeração.",
        justificativa: "A receita visual para recipientes combina pinus médio, chips de coco, perlita grossa e carvão vegetal, agora descritos na primeira alternativa textual. As duas misturas anteriores continham materiais diferentes e foram preservadas; a montagem principal continua em placa/tronco. Percentuais estimados e ainda não homologados pela MACS 1.0.",
        receitaTexto: "35% casca de pinus média + 30% chips de coco + 25% perlita grossa + 10% carvão vegetal.",
        perfil: ["Miniatura epífita", "Raízes filiformes", "Touceira pendente", "Alta ventilação", "Umidade regular"],
        comportamento: [
            { nome: "Retenção", valor: 3, icone: "💧" },
            { nome: "Aeração", valor: 5, icone: "💨" },
            { nome: "Secagem", valor: 4, icone: "⚡" },
            { nome: "Compactação", valor: 1, icone: "🧱" }
        ],
        itens: [
            { asset: "casca-pinus", nome: "Casca de pinus média", proporcao: "35%", nota: "estrutura", finalidade: "Oferece fixação às raízes em recipientes pequenos." },
            { asset: "chips-coco", nome: "Chips de coco", proporcao: "30%", nota: "umidade", finalidade: "Ajuda a evitar desidratação prolongada." },
            { asset: "perlita", nome: "Perlita grossa", proporcao: "25%", nota: "aeração", finalidade: "Favorece drenagem e oxigenação." },
            { asset: "carvao", nome: "Carvão vegetal", proporcao: "10%", nota: "porosidade", finalidade: "Contribui para manter o substrato aberto." }
        ],
        alerta: "Evitar adubo concentrado, excesso de fertilizante de liberação lenta, esfagno compactado, pouca ventilação e bloqueio das hastes pendentes. Não cortar raízes finas saudáveis.",
        notaEvidencia: "MACS 1.0: Ornithophora radicans é sinônimo de Gomesa radicans segundo POWO/Kew; espécie epífita. Orquidário Oriental recomenda especificamente placa de madeira, esfagno ou mistura de fibra de coco, pinus e carvão em vasos, sem percentuais; informa regas com intervalo para secagem. Relato da Canberra Orchid Society documenta sucesso em cortiça e xaxim e alerta para excesso de água em vasos, sem ensaio comparativo. A receita de recipiente 35% pinus + 30% chips de coco + 25% perlita + 10% carvão permanece hipótese horticultural NÃO homologada; a perlita e seus 25% não foram corroborados por receita quantitativa específica. Estrelas de cultivo não validadas experimentalmente."
    },
    errosComuns: "Aplicar adubo químico concentrado; usar vaso grande; compactar esfagno; manter a touceira molhada durante toda a noite; cultivar sem circulação de ar; cortar raízes finas saudáveis; deixar o substrato secar completamente por longos períodos; impedir que as hastes pendam livremente; usar Osmocote em excesso ou encostado no rizoma.",
    dica: "Use adubação homeopática, lavagem mensal de sais e muito ar. A Gomesa radicans prefere pequenas quantidades de nutrientes de forma contínua a doses fortes de fertilizante. Aplique apenas 1/4 ou 1/6 da dose foliar, faça uma lavagem completa com água pura uma vez por mês e cultive, sempre que possível, montada em cortiça, madeira dura ou cachepô muito ventilado. Para esta espécie, boa circulação de ar é mais importante do que simplesmente aumentar a quantidade de água.",
    revisaoCientificaIAR: {
        "nome": "Gomesa radicans",
        "statusTaxonomico": "Nome aceito usado na ficha: Gomesa radicans.",
        "sinonimosPrincipais": "Verificados prioritariamente em POWO/GBIF/Tropicos; manter apenas os relevantes ao catálogo.",
        "morfologiaDimensoes": "Uma miniatura brasileira de visual delicado e movimento pendente. A Gomesa radicans forma touceiras com pseudobulbos pequenos e folhas finas, quase como capim, de onde surgem hastes arqueadas de cerca de 18 cm com pequenas flores perfumadas de 5 mm a 1 cm. O aroma pode lembrar mel. É típica do Sul e Sudeste do Brasil, inclusive áreas próximas ao litoral, em torno de 400 m, o qu",
        "habitatAltitudeClima": "Mata Atlântica costeira · ~400 m. | Quente a intermediário · muito ventilado.",
        "distribuicaoGeografica": "Sul e Sudeste do Brasil.",
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
        litoralQuente: { texto: "Ao litoral quente quando cultivada em meia-sombra clara, posição elevada e ventilação constante. Como há registros naturais próximos da costa em torno de 400 m, o problema maior não é o calor em si, e sim calor abafado somado a raízes permanentemente molhadas." },
        montanhaFrio: { texto: "Desenvolve-se com vigor em clima intermediário e serrano. Proteja de geadas, reduza a rega quando o frio diminuir a atividade radicular e evite noites frias com a touceira encharcada." }
    },
    mesesFloracao: [12, 1, 2, 3, 4, 5],
    "selosCultivo": {
        "rega": { "nivel": "muito-frequente" },
        "climaFloracao": { "faixa": "quente" }
    },
        avaliacoes: {
        cultivo: 3,
        floracao: 4,
        perfume: 1,
        luminosidade: 3,
        agua: 4,
        raridade: 3
    }
};
