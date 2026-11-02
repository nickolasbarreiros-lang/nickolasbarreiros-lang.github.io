// Refinamento Final — Lote 15.

export const isabeliaVirginalis = {
    id: "isabelia-virginalis",
    nome: "Isabelia virginalis",
    genero: "Isabelia",
    tipo: "Espécie botânica",
    dificuldade: "Moderada",
    caracteristicas: ["Miniatura brasileira", "Hábito rastejante", "Bainhas fibrosas", "Folhas finas como agulhas", "Flores delicadas"],
    fotos: [
        "imagens/Isabelia virginalis/Isabelia virginalis1.jpg",
        "imagens/Isabelia virginalis/Isabelia virginalis2.webp",
        "imagens/Isabelia virginalis/Isabelia virginalis3.webp",
        "imagens/Isabelia virginalis/Isabelia virginalis4.jpeg"
    ],
    descricao: "Uma pequena joia da Mata Atlântica! Isabelia virginalis forma colônias rastejantes de pseudobulbos minúsculos envolvidos por uma trama de fibras esbranquiçadas que lembra uma renda natural. De cada pseudobulbo surge uma folha fina como agulha e, no período de floração, uma ou duas flores rosadas, cerosas e duráveis de cerca de 1 cm. Essas fibras não são material velho para ser limpo: fazem parte da própria arquitetura da planta. Seu nome de gênero homenageia a Princesa Isabel, e a espécie é nativa do Sul e Sudeste do Brasil, avançando até Paraguai e Misiones, na Argentina.",
    origem: "América do Sul",
    regiao: "Sul e Sudeste do Brasil · Paraguai · Argentina (Misiones)",
    habitat: "Epífita ou rupícola · ambientes sazonais claros.",
    clima: "Intermediário · ventilado, com secagem rápida.",
    climaFloracao: "A espécie ocorre tanto sobre árvores quanto sobre rochas e aparece associada a ambientes tropicais sazonalmente secos, mas isso não significa repouso árido. Seu crescimento rastejante e as raízes pequenas funcionam melhor com ciclos rápidos de molhamento e secagem. No litoral quente, o excesso de esfagno e a pouca ventilação são mais perigosos do que a temperatura em si. No período mais frio, basta aumentar naturalmente o intervalo das regas conforme a evaporação.",
    iluminacao: {
        sombrite: "40% a 60%",
        solDireto: "Permitido com restrição",
        horario: "Início da manhã ou final da tarde",
        observacoes: "Tolera luz relativamente alta quando bem ventilada. Folhas muito escuras e touceira frouxa indicam falta de luz; amarelecimento intenso ou pontas secas indicam excesso de sol ou desidratação."
    },
    floracao: "Predomina do fim do outono ao inverno. As flores são pequenas, cerosas, de aproximadamente 1 cm e podem surgir isoladas ou em pares sobre pseudobulbos maduros.",
    adubacao: "🌿 Orgânica: bokashi em quantidade mínima dentro de porta-adubo, sem contato com a touceira.\n💧 Foliar: NPK equilibrado em 1/4 da dose a cada 10–15 dias durante brotação e enraizamento.\n🧪 Liberação lenta: somente poucos grânulos em cesto ou vaso raso e muito drenante.\n💦 Lavagem: passe água limpa pelo suporte periodicamente para evitar acúmulo de sais nas raízes finas.",
    rega: "No calor e durante a brotação, molhe completamente e permita secagem rápida antes da próxima rega. Plantas montadas podem precisar de água quase diária em dias secos e ventilados. No frio, aumente o intervalo, mas não deixe a colônia murchar por períodos prolongados.",
    suporte: "🥇 Placa de cortiça ou galho de casca rugosa.\n🥈 Madeira dura e durável, instalada horizontal ou levemente inclinada.\n🥉 Cesto muito raso e largo, com mistura grosseira e rizoma totalmente exposto.",
    substrato: "🥇 Montagem em nó de pinho, cortiça ou madeira dura, sem material retentivo no centro das raízes.\n🥈 Chips de coco muito grossos + argila expandida + carvão, em cesto extremamente ventilado.\n🥉 Casca de macadâmia grossa + perlita grossa + carvão vegetal, com secagem muito rápida.\n⭐ Alternativa: Pinus grosso + brita fina + carvão vegetal; evitar esfagno no miolo do vaso.",
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
        justificativa: "A montagem sem material retentivo é a primeira recomendação original. A receita quantitativa adapta a segunda mistura para cesto, com percentuais estimados e ainda não homologados pela MACS 1.0.",
        receitaTexto: "45% chips de coco muito grossos + 35% argila expandida + 20% carvão vegetal.",
        perfil: ["Miniatura rastejante", "Bainhas fibrosas", "Rizoma exposto", "Raízes superficiais", "Secagem rápida"],
        comportamento: [
            { nome: "Retenção", valor: 2, icone: "💧" },
            { nome: "Aeração", valor: 5, icone: "💨" },
            { nome: "Secagem", valor: 5, icone: "⚡" },
            { nome: "Compactação", valor: 1, icone: "🧱" }
        ],
        itens: [
            { asset: "chips-coco", nome: "Chips de coco muito grossos", proporcao: "45%", nota: "estrutura", finalidade: "Oferecem apoio aberto sem cobrir o rizoma." },
            { asset: "argila-expandida", nome: "Argila expandida", proporcao: "35%", nota: "drenagem", finalidade: "Mantém vazios amplos e favorece secagem rápida." },
            { asset: "carvao", nome: "Carvão vegetal", proporcao: "20%", nota: "aeração", finalidade: "Complementa a porosidade e evita massa compacta." }
        ],
        alerta: "Não retirar as bainhas fibrosas nem enterrar o rizoma. Evitar esfagno compactado, vaso profundo, sombra excessiva e longos períodos de encharcamento ou seca.",
        notaEvidencia: "Estrelas e percentuais são estimativas horticulturais não homologadas pela MACS 1.0. Conferência visual dos assets ainda pendente."
    },
    errosComuns: "Remover as bainhas fibrosas; enterrar o rizoma; compactar esfagno ao redor da planta; cultivar em sombra profunda; manter a colônia permanentemente molhada; deixar secar por muitos dias; usar vaso grande e profundo; adubar forte; dividir em pedaços pequenos; manter ambiente abafado.",
    dica: "Preserve a colônia inteira e deixe-a caminhar pelo suporte. Quanto menos você interfere na trama fibrosa e no rizoma rastejante, melhor. Uma placa durável, boa luz e ciclos rápidos de molhamento e secagem produzem uma touceira muito mais bonita do que o cultivo apertado em vaso convencional.",
    revisaoCientificaIAR: {
        "nome": "Isabelia virginalis",
        "statusTaxonomico": "Espécie/nome infraespecífico tratado como aceito na revisão taxonômica de referência.",
        "sinonimosPrincipais": "Verificados prioritariamente em POWO/GBIF/Tropicos; manter apenas os relevantes ao catálogo.",
        "morfologiaDimensoes": "Uma pequena joia da Mata Atlântica! Isabelia virginalis forma colônias rastejantes de pseudobulbos minúsculos envolvidos por uma trama de fibras esbranquiçadas que lembra uma renda natural. De cada pseudobulbo surge uma folha fina como agulha e, no período de floração, uma ou duas flores rosadas, cerosas e duráveis de cerca de 1 cm. Essas fibras não são material velho para ser ",
        "habitatAltitudeClima": "Epífita ou rupícola · ambientes sazonais claros. | Intermediário · ventilado, com secagem rápida.",
        "distribuicaoGeografica": "Sul e Sudeste do Brasil · Misiones.",
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
    mesesFloracao: [5, 6, 7, 8],
    "selosCultivo": {
        "rega": { "nivel": "moderada" },
        "climaFloracao": { "faixa": "intermediario" }
    },
        avaliacoes: { cultivo: 4, floracao: 3, perfume: 1, luminosidade: 4, agua: 3, raridade: 4 }
};
