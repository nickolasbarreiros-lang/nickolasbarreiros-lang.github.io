// Refinamento final — Lote 17.
// ID histórico preservado para manter compatibilidade com links e catálogo.

export const laeliaLundii = {
    id: "laelia-lundii",
    nome: "Cattleya lundii",
    genero: "Cattleya",
    sinonimo: "Laelia lundii",
    tipo: "Espécie botânica",
    dificuldade: "Moderada",
    caracteristicas: [
        "Miniatura epífita ou rupícola",
        "Duas folhas estreitas por pseudobulbo",
        "Flores perfumadas de 3–4 cm",
        "Cultivo montado favorecido"
    ],
    fotos: [
        "imagens/Cattleya lundii/Cattleya lundii1.jpg",
        "imagens/Cattleya lundii/Cattleya lundii2.webp",
        "imagens/Cattleya lundii/Cattleya lundii3.webp",
        "imagens/Cattleya lundii/Cattleya lundii4.jpg"
    ],
    descricao: "Pequena no tamanho, mas cheia de personalidade! Cattleya lundii forma touceiras compactas de pseudobulbos curtos, cada um normalmente com duas folhas estreitas e quase cilíndricas. Suas flores, de cerca de 3 a 4 cm, aparecem entre as folhas em tons claros de branco a creme, com o labelo marcado por rosa, magenta ou púrpura e perfume floral delicado. Na natureza cresce tanto sobre árvores quanto em rochas, o que ajuda a explicar sua preferência por raízes muito arejadas, boa luz e secagem rápida entre as regas.",
    origem: "América do Sul",
    regiao: "Brasil, Bolívia, Paraguai e N da Argentina",
    habitat: "Matas sazonais/montanas · 740–1.000 m.",
    clima: "Quente a intermediário · bem ventilado.",
    climaFloracao: "A floração melhora quando os novos pseudobulbos amadurecem sob luz alta filtrada, boa circulação de ar e raízes ativas. O habitat sazonal justifica uma redução natural da água quando o crescimento desacelera, mas não um repouso seco rígido. Em litoral quente, a prioridade é evitar raízes abafadas e noites excessivamente quentes e úmidas; touceiras adultas e pouco divididas acumulam mais reservas e tendem a florir com maior regularidade.",
    iluminacao: {
        sombrite: "50% a 60%",
        solDireto: "Permitido com restrição",
        horario: "Início da manhã ou final da tarde",
        observacoes: "Precisa de mais luz que muitas miniaturas. Busque folhas firmes, crescimento compacto e pseudobulbos bem formados. Folhas muito escuras e alongamento sugerem sombra excessiva; tecido amarelado ou queimado indica radiação e calor acima do ideal."
    },
    floracao: "Do meio do inverno à primavera, com maior ocorrência entre julho e outubro. As inflorescências são curtas e normalmente carregam duas flores perfumadas de aproximadamente 3–4 cm, posicionadas entre as folhas.",
    adubacao: "🌿 Orgânica: bokashi é opcional; se usado, aplique quantidade mínima em sachê e sem contato direto com rizoma ou raízes novas.\n💧 Foliar/Mineral: NPK equilibrado, como 20-20-20, em 1/4 da dose a cada 10–15 dias durante brotação e enraizamento.\n🌱 Maturação: mantenha nutrição leve até o pseudobulbo completar o crescimento e reduza quando a atividade diminuir.\n🧪 Liberação lenta: pouquíssimos grânulos apenas em vaso ou cachepô muito drenante; em plantas montadas, é dispensável.\n🚿 Faça regas periódicas somente com água para evitar acúmulo de sais.",
    rega: "Durante brotação e emissão de raízes, molhe bem e permita secagem rápida. Em montagem, uma planta ativa no verão pode exigir rega diária ou quase diária, desde que as raízes não permaneçam molhadas por longos períodos. Quando o crescimento diminuir, aumente o intervalo entre irrigações. O inverno naturalmente mais seco deve ser reproduzido como redução, não como desidratação prolongada.",
    suporte: "🥇 Placa de cortiça ou madeira dura.\n🥈 Galho natural rugoso, permitindo expansão da touceira.\n🥉 Cachepô ou cestinho pequeno e muito vazado.\nVaso de barro pequeno também funciona quando preenchido com material grosseiro e muito aerado.",
    substrato: ["🥇 Chips de coco grossos + perlita grossa + carvão vegetal + pinus médio.","🥈 Pinus médio/grosso + perlita grossa + carvão vegetal + pequena fração de chips de coco.","🥉 Casca de macadâmia + argila expandida + carvão vegetal + pinus grosso."],
    formasCultivo: {
        perfilVisual: "miniatura-epifita-rupicola-bifoliada",
        destaque: "Placa / tronco",
        resumo: "Miniatura epífita ou rupícola, com pseudobulbos curtos e raízes que preferem alta aeração. Favorecer montagem firme em cortiça ou madeira durável, luz filtrada abundante e secagem rápida entre regas.",
        metodos: [
            { nome: "Placa / tronco", asset: "placa-tronco", estrelas: 5, status: "Mais recomendado na ficha", texto: "Placa de cortiça, madeira dura ou galho rugoso, com espaço para a touceira se expandir e fixação estável." },
            { nome: "Cachepô de Madeira", asset: "cesto-madeira", estrelas: 4, status: "Alternativa", texto: "Cestinho pequeno e muito vazado, com mistura grosseira e regas adaptadas à secagem." },
            { nome: "Vaso de Barro", asset: "vaso-barro", estrelas: 4, status: "Alternativa", texto: "Vaso pequeno e perfurado, com partículas grossas e muito arejadas." },
            { nome: "Árvore viva", asset: "arvore-viva", estrelas: 3, status: "Uso condicional", texto: "Fixação em galho rugoso com luminosidade adequada e regas durante o estabelecimento." }
        ]
    },
    substratoVisual: {
        titulo: "Substrato ideal",
        contexto: "Montagem principal em placa; mistura alternativa para cesto ou vaso pequeno",
        resumo: "Mistura grosseira e ventilada, com retenção moderada e secagem perceptível entre regas.",
        justificativa: "A placa é a primeira opção de suporte já registrada. A mistura quantitativa para recipiente segue os quatro componentes da primeira receita original; percentuais ainda não homologados pela MACS 1.0.",
        receitaTexto: "35% casca de macadâmia média + 30% casca de pinus média + 20% perlita grossa + 15% carvão vegetal.",
        perfil: ["Miniatura bifoliada", "Epífita ou rupícola", "Raízes muito arejadas", "Secagem rápida", "Touceira compacta"],
        comportamento: [
            { nome: "Retenção", valor: 2, icone: "💧" },
            { nome: "Aeração", valor: 5, icone: "💨" },
            { nome: "Secagem", valor: 4, icone: "⚡" },
            { nome: "Compactação", valor: 1, icone: "🧱" }
        ],
        itens: [
            { asset: "casca-macadamia", nome: "Casca de macadâmia média", proporcao: "35%", nota: "estrutura", finalidade: "Oferece apoio radicular sem compactação." },
            { asset: "casca-pinus", nome: "Casca de pinus média", proporcao: "30%", nota: "apoio e umidade", finalidade: "Favorece enraizamento e umidade moderada." },
            { asset: "perlita", nome: "Perlita grossa", proporcao: "20%", nota: "aeração", finalidade: "Amplia espaços de ar e drenagem." },
            { asset: "carvao", nome: "Carvão vegetal", proporcao: "15%", nota: "porosidade", finalidade: "Complementa a estrutura aberta." }
        ],
        alerta: "Evitar vaso grande, esfagno compactado, sombra excessiva, repouso seco prolongado e divisão frequente de touceiras pequenas. Fixar a planta firmemente.",
        notaEvidencia: "MACS 1.0 — primeira passagem documental: Cattleya lundii (sin. Laelia lundii), miniatura epífita ou rupícola, com raízes que exigem alta aeração e secagem rápida. Suportes placa/tronco 5 estrelas, cachepô madeira e vaso barro 4, árvore viva 3; ranking horticultural sem validação comparativa específica. Receita visual para cesto/vaso 35% macadâmia média + 30% pinus médio + 20% perlita grossa + 15% carvão = 100%; receitaTexto e itens concordam. DIVERGÊNCIA: justificativa afirma que a receita visual segue os quatro componentes da primeira alternativa qualitativa, mas a primeira usa chips coco + perlita + carvão + pinus, sem macadâmia. A terceira contém macadâmia + argila expandida + carvão + pinus, sem perlita. Montagem em placa é o cultivo principal; mistura visual é alternativa para recipiente, não substrato aplicado à placa. Meta de até 25 produtores brasileiros específicos não atingida; percentuais e estrelas NÃO HOMOLOGADOS."
    },
    errosComuns: "Usar vaso grande e profundo; manter esfagno compactado; cultivar com pouca luz; confundir cultivo montado com pouca necessidade de água; impor repouso seco excessivo; manter raízes encharcadas em períodos frios ou chuvosos; dividir touceiras pequenas; deixar a planta frouxa no suporte; fertilizar em excesso.",
    dica: "Deixe a planta conquistar o suporte e formar uma touceira. Cattleya lundii responde melhor quando não é constantemente removida ou dividida: várias frentes pequenas juntas criam mais raízes, reservas e pontos de floração. Em litoral quente, ventilação e secagem rápida valem mais que simplesmente reduzir água.",
    revisaoCientificaIAR: {
        "nome": "Cattleya lundii",
        "statusTaxonomico": "Espécie/nome infraespecífico tratado como aceito na revisão taxonômica de referência.",
        "sinonimosPrincipais": "Verificados prioritariamente em POWO/GBIF/Tropicos; manter apenas os relevantes ao catálogo.",
        "morfologiaDimensoes": "Pequena no tamanho, mas cheia de personalidade! Cattleya lundii forma touceiras compactas de pseudobulbos curtos, cada um normalmente com duas folhas estreitas e quase cilíndricas. Suas flores, de cerca de 3 a 4 cm, aparecem entre as folhas em tons claros de branco a creme, com o labelo marcado por rosa, magenta ou púrpura e perfume floral delicado. Na natureza cresce tanto sob",
        "habitatAltitudeClima": "Matas sazonais/montanas · 740–1.000 m. | Quente a intermediário · bem ventilado.",
        "distribuicaoGeografica": "Brasil, Bolívia, Paraguai e N da Argentina.",
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
                    "nota": 5,
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
        litoralQuente: { texto: "Quando montada no ponto mais ventilado e luminoso do orquidário. No verão, regue conforme a secagem real; no inverno, reduza apenas se atividade e evaporação diminuírem. Evite abafamento noturno e substrato úmido por muitos dias." },
        montanhaFrio: { texto: "Adapta-se muito bem às noites frescas. Mantenha boa luz e diminua as regas em períodos frios e úmidos, protegendo contra geadas e chuva fria prolongada." }
    },
    mesesFloracao: [7, 8, 9, 10],
    "selosCultivo": {
        "rega": { "nivel": "frequente", "regime": "reduzir-repouso" },
        "climaFloracao": { "faixa": "quente" }
    },
        avaliacoes: {
        cultivo: 3,
        floracao: 3,
        perfume: 2,
        luminosidade: 4,
        agua: 2,
        raridade: 4
    }
};
