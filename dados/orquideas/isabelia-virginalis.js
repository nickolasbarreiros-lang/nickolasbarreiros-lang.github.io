// Refinamento Final — Lote 15.

export const isabeliaVirginalis = {
    id: "isabelia-virginalis",
    nome: "Isabelia virginalis",
    genero: "Isabelia",
    tipo: "Espécie botânica",
    dificuldade: "Moderada",
    caracteristicas: ["Miniatura brasileira", "Hábito rastejante", "Bainhas fibrosas", "Folhas finas como agulhas", "Flores claras com labelo branco"],
    fotos: [
        "imagens/Isabelia virginalis/Isabelia virginalis1.jpg",
        "imagens/Isabelia virginalis/Isabelia virginalis2.webp",
        "imagens/Isabelia virginalis/Isabelia virginalis3.webp",
        "imagens/Isabelia virginalis/Isabelia virginalis4.jpeg"
    ],
    descricao: "Isabelia virginalis é uma miniatura de crescimento rastejante que forma delicados tapetes de pseudobulbos minúsculos. Cada pseudobulbo é envolvido por bainhas de fibras entrelaçadas, semelhantes a uma pequena cesta, e sustenta uma folha fina como agulha. As flores solitárias ou em pares são discretas, geralmente branco-creme a róseo-claras, com labelo branco, medindo cerca de um centímetro. Essa arquitetura singular permite reconhecer a planta mesmo fora da floração. Nativa de florestas da Mata Atlântica e regiões vizinhas da América do Sul, cresce sobre árvores e rochas, formando colônias de aparência rendada.",
    origem: "América do Sul",
    regiao: "Sul e Sudeste do Brasil · Paraguai · Argentina (Misiones)",
    habitat: "Epífita ou rupícola · ambientes sazonais claros.",
    clima: "Intermediário · ventilado, com secagem rápida.",
    climaFloracao: "A espécie ocorre tanto sobre árvores quanto sobre rochas e aparece associada a ambientes tropicais sazonalmente secos, mas isso não significa repouso árido. Seu crescimento rastejante e as raízes pequenas funcionam melhor com ciclos rápidos de molhamento e secagem. No litoral quente, o excesso de esfagno e a pouca ventilação são mais perigosos do que a temperatura em si. No período mais frio, basta aumentar naturalmente o intervalo das regas conforme a evaporação.",
    iluminacao: {
        sombrite: "40% a 60%",
        solDireto: "Não permitido",
        horario: "",
        observacoes: "Prefere luminosidade moderada a intensa, sempre filtrada, sem sol direto sobre a folhagem delicada. Um sombrite de 40% a 60% é uma referência inicial, ajustável conforme o calor e a ventilação. Touceiras compactas e folhas firmes sugerem bom equilíbrio; folhas muito escuras, crescimento frouxo e floração escassa podem indicar pouca luz. Amarelecimento intenso e pontas secas podem sinalizar excesso de luz, calor ou desidratação. Ajuste a claridade gradualmente, sem expor a planta ao sol direto.",
        seloLuz: "amarelo"
    },
    floracao: "No Brasil, Isabelia virginalis tem floração documentada em fevereiro, maio e junho por exemplares estudados no Paraná. O outono e o início do inverno são épocas especialmente frequentes, mas produtores também relatam flores no verão e, ocasionalmente, na primavera; essas observações sazonais não justificam acrescentar meses específicos sem confirmação. As hastes muito curtas produzem geralmente uma flor, podendo ocorrer duas, de textura cerosa e aproximadamente 0,5 a 1 cm. As sépalas são branco-creme a rosa-pálidas, as pétalas são claras e o labelo branco pode mostrar discreta tonalidade lilás. Orquidários brasileiros descrevem as flores como sem perfume perceptível. A floração dura aproximadamente duas semanas: produtores relatam 14 a 15 dias, com variação conforme as condições de cultivo. Esse valor é uma observação de cultivo e não uma medição científica padronizada da longevidade individual.",
    adubacao: "🌿 Orgânica: bokashi em quantidade mínima dentro de porta-adubo, sem contato com a touceira.\n💧 Foliar: NPK equilibrado em 1/4 da dose a cada 10–15 dias durante brotação e enraizamento.\n🧪 Liberação lenta: somente poucos grânulos em cesto ou vaso raso e muito drenante.\n💦 Lavagem: passe água limpa pelo suporte periodicamente para evitar acúmulo de sais nas raízes finas.",
    rega: "No calor e durante a brotação, molhe completamente e permita secagem rápida antes da próxima rega. Plantas montadas podem precisar de água quase diária em dias secos e ventilados. No frio, aumente o intervalo, mas não deixe a colônia murchar por períodos prolongados.",
    suporte: "🥇 Placa de cortiça ou galho de casca rugosa.\n🥈 Madeira dura e durável, instalada horizontal ou levemente inclinada.\n🥉 Cesto muito raso e largo, com mistura grosseira e rizoma totalmente exposto.",
    substrato: ["Casca de macadâmia grossa + perlita grossa + carvão vegetal","Casca de pinus grossa + brita fina + carvão vegetal"],
    formasCultivo: {
        perfilVisual: "miniatura-rizoma-rastejante-fibras",
        destaque: "Placa / tronco",
        resumo: "Miniatura de crescimento rastejante, com bainhas fibrosas naturais e raízes superficiais. Favorecer suporte durável, rizoma exposto, boa luz filtrada e ciclos rápidos de molhamento e secagem.",
        metodos: [
            { nome: "Placa / tronco", asset: "placa-tronco", estrelas: 5, status: "Mais recomendado na ficha", texto: "Cortiça ou madeira dura de casca rugosa, horizontal ou levemente inclinada, para a colônia avançar livremente." },
            { nome: "Cachepô de Madeira", asset: "cesto-madeira", estrelas: 4, status: "Alternativa", texto: "Cachepô muito raso e largo, extremamente ventilado, com rizoma totalmente exposto e mistura grossa." },
            { nome: "Vaso de Barro", asset: "vaso-barro", estrelas: 2, status: "Uso condicional", texto: "Apenas recipiente muito raso, perfurado e com raízes superficiais; não enterrar o rizoma." },
            { nome: "Vaso plástico vasado", asset: "vaso-plastico-vasado", estrelas: 2, status: "Uso condicional", texto: "Somente vaso muito baixo e bem vazado, sem retenção prolongada nem cobertura do rizoma." }
        ]
    },
    substratoVisual: {
        titulo: "Substrato ideal",
        contexto: "Montagem principal sem substrato retentivo; receita alternativa para cachepô muito raso",
        resumo: "A primeira opção é a fixação direta em cortiça ou madeira durável. Em cesto, usar componentes muito grossos e secagem rápida.",
        justificativa: "A receita 45/35/20 é hipótese horticultural não ensaiada especificamente em Isabelia virginalis; a montagem principal em placa/tronco não usa mistura volumétrica. Isabelia virginalis apresenta rizoma rastejante e se beneficia de montagem em placa ou tronco, com a colônia e as bainhas fibrosas expostas. Para cesto muito raso, os chips de coco muito grossos lavados oferecem apoio e alguma retenção de umidade, enquanto a argila expandida e o carvão mantêm espaços de ar. Evite soterrar o rizoma e observe se o recipiente permanece úmido por tempo excessivo.",
        receitaTexto: "Proposta horticultural NÃO HOMOLOGADA para cachepô muito raso: 45% chips de coco muito grossos lavados + 35% argila expandida + 20% carvão vegetal. Na montagem principal em placa/tronco, não se aplicam percentuais volumétricos.",
        perfil: ["Miniatura rastejante", "Bainhas fibrosas", "Rizoma exposto", "Raízes superficiais", "Secagem rápida"],
        comportamento: [
            { nome: "Retenção", valor: 2, icone: "💧" },
            { nome: "Aeração", valor: 5, icone: "💨" },
            { nome: "Secagem", valor: 5, icone: "⚡" },
            { nome: "Compactação", valor: 1, icone: "🧱" }
        ],
        itens: [
            { asset: "chips-coco", nome: "Chips de coco muito grossos lavados", proporcao: "45%", nota: "estrutura", finalidade: "Oferecem apoio aberto sem cobrir o rizoma." },
            { asset: "argila-expandida", nome: "Argila expandida", proporcao: "35%", nota: "drenagem", finalidade: "Mantém vazios amplos e favorece secagem rápida." },
            { asset: "carvao-vegetal", nome: "Carvão vegetal", proporcao: "20%", nota: "aeração", finalidade: "Complementa a porosidade e evita massa compacta." }
        ],
        alerta: "Não retirar as bainhas fibrosas nem enterrar o rizoma. Evitar esfagno compactado, vaso profundo, sombra excessiva e longos períodos de encharcamento ou seca.",
        notaEvidencia: "MACS 1.1 — revisão documental: Isabelia virginalis, miniatura epífita/rupícola rastejante, rizoma e bainhas fibrosas expostos, raízes superficiais e secagem rápida. Suportes placa/tronco 5 estrelas, cachepô madeira 4, barro e plástico vasado 2; notas horticulturais não homologadas. Montagem principal sem substrato retentivo é coerente com suporte, mas NÃO é a primeira receita qualitativa do campo substrato. Receita visual alternativa para cesto raso: 45% chips coco muito grossos + 35% argila expandida + 20% carvão = 100%; receitaTexto e itens concordam. A receita visual para cesto raso coincide com a descrição textual; as duas alternativas qualitativas são distintas e não equivalem à principal. Verificar se 45% chips coco conserva umidade excessiva e se argila expandida mantém estabilidade para rizoma exposto; meta até 25 produtores brasileiros específicos não atingida. POWO aceita Isabelia virginalis, epífita ou rupícola do Sul e Sudeste do Brasil até Paraguai e Argentina. Flora do Brasil 2020 descreve pseudobulbos com bainhas reticuladas, folhas aciculares e flores branco-creme com labelo branco; estudo brasileiro na Rodriguésia registra flores róseo-claras com labelo alvo. AOS recomenda placas e ramos de madeira, sem ensaio quantitativo. Orquidários Matsuoka e Hang recomendam montagem em madeira, enquanto Aniela cita 70% de sombreamento, sem percentuais de substrato. Três produtores brasileiros qualitativos específicos e zero receitas quantitativas confirmadas nesta passagem; meta até 25 não atingida. Percentuais e estrelas NÃO HOMOLOGADOS."
    },
    errosComuns: "Remover as bainhas fibrosas; enterrar o rizoma; compactar esfagno ao redor da planta; cultivar em sombra profunda; manter a colônia permanentemente molhada; deixar secar por muitos dias; usar vaso grande e profundo; adubar forte; dividir em pedaços pequenos; manter ambiente abafado.",
    dica: "Preserve a colônia inteira e deixe-a caminhar pelo suporte. Quanto menos você interfere na trama fibrosa e no rizoma rastejante, melhor. Uma placa durável, boa luz e ciclos rápidos de molhamento e secagem produzem uma touceira muito mais bonita do que o cultivo apertado em vaso convencional.",
    revisaoCientificaIAR: {
        "nome": "Isabelia virginalis",
        "statusTaxonomico": "Isabelia virginalis Barb.Rodr. (1877), espécie aceita em POWO; não endêmica do Brasil.",
        "sinonimosPrincipais": "Sem sinônimo principal necessário para a apresentação; nome aceito em POWO.",
        "morfologiaDimensoes": "Rizoma rastejante, pseudobulbos ovoides unifoliados cobertos por bainhas fibrosas reticuladas; folhas aciculares; inflorescências com uma ou duas flores branco-creme a róseo-claras e labelo branco, cerca de 1 cm (Flora do Brasil 2020, Rodriguésia, IOSPE).",
        "habitatAltitudeClima": "Epífita ou rupícola · ambientes sazonais claros. | Intermediário · ventilado, com secagem rápida.",
        "distribuicaoGeografica": "Sul e Sudeste do Brasil · Paraguai · nordeste da Argentina.",
        "cultivoPremiacao": "AOS e orquidários Matsuoka e Hang indicam cultivo montado em madeira; Orquidário Aniela informa 70% de sombreamento; sem receita quantitativa específica validada.",
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
        "indice": 32,
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
                "notaDificuldade": 1,
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
                    "nota": 4,
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
        litoralQuente: { texto: "Desde que montada ou em recipiente muito raso e ventilado. Dê luz forte filtrada, regas frequentes no verão e secagem rápida entre elas." },
        montanhaFrio: { texto: "As noites amenas favorecem a espécie; apenas evite geadas e longos períodos de umidade fria sem ventilação." }
    },
    mesesFloracao: [2, 5, 6],
    "selosCultivo": {
        "rega": { "nivel": "moderada" },
        "climaFloracao": { "faixa": "intermediario" }
    },
        avaliacoes: { cultivo: 4, floracao: 3, perfume: 1, luminosidade: 4, agua: 3, raridade: 4 }
};
