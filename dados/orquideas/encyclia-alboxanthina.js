// Ficha científica e de cultivo revisada — Encyclia alboxanthina.

export const encycliaAlboxanthina = {
    id: "encyclia-alboxanthina",
    nome: "Encyclia alboxanthina",
    genero: "Encyclia",
    tipo: "Espécie botânica brasileira",
    dificuldade: "Moderada",
    caracteristicas: [
        "Espécie brasileira",
        "Bahia e Sergipe",
        "Flores perfumadas",
        "Branco e amarelo",
        "Alta luminosidade",
        "Tolera leve secagem"
    ],
    fotos: [
        "imagens/Encyclia alboxanthina/Encyclia alboxanthina1.webp",
        "imagens/Encyclia alboxanthina/Encyclia alboxanthina2.jpg",
        "imagens/Encyclia alboxanthina/Encyclia alboxanthina3.jpg",
        "imagens/Encyclia alboxanthina/Encyclia alboxanthina4.jpg"
    ],
    descricao: "Encyclia alboxanthina é uma brasileira de aparência luminosa e elegante. Seus pseudobulbos sustentam folhas firmes e, quando maduros, produzem uma haste longa e multifloral que exibe flores claras, combinando branco e amarelo e acompanhadas por perfume marcante. É uma Encyclia que aprecia claridade, raízes muito bem ventiladas e uma rotina de rega sem excessos. Quando bem estabelecida forma touceiras bonitas e oferece uma floração que se destaca tanto pela cor quanto pela fragrância.",
    origem: "Brasil",
    regiao: "Bahia e Sergipe",
    habitat: "Epífita e também registrada sobre rochas em ambientes tropicais sazonalmente secos.",
    clima: "Quente a intermediário, claro e ventilado.",
    climaFloracao: "A floração é favorecida por pseudobulbos bem amadurecidos, bastante luminosidade e boa diferença entre períodos de hidratação e secagem. Não necessita repouso seco rigoroso, mas o excesso constante de água prejudica raízes e maturação dos pseudobulbos.",
    iluminacao: {
        sombrite: "40% a 50%",
        solDireto: "Permitido com restrição",
        horario: "Início da manhã ou final da tarde",
        observacoes: "É uma Encyclia de alta luminosidade. Em litoral quente, 40% a 50% de sombreamento é um bom ponto de partida. Sombra profunda reduz a floração; sol forte nas horas mais quentes pode superaquecer folhas e pseudobulbos."
    },
    floracao: "Floresce principalmente no fim da primavera e início do verão. Para o calendário do site, outubro a janeiro é uma janela prática de referência.",
    adubacao: "🌿 Orgânica: bokashi em pequena quantidade, preferencialmente em porta-adubo.\n💧 Foliar/mineral: NPK equilibrado, como 20-20-20, em aproximadamente 1/4 da dose comercial a cada 10 a 15 dias enquanto houver crescimento ativo.\n🧪 Liberação lenta: opcional, com poucos grânulos.\n🚿 Lavagem: intercale periodicamente com água pura para reduzir sais.",
    rega: "Durante crescimento ativo, regue bem e deixe o substrato perder boa parte da umidade antes de molhar novamente. Após a maturação dos pseudobulbos, aumente moderadamente os intervalos. Tolera leve secagem melhor que raízes permanentemente saturadas.",
    suporte: [
        "🥇 Cesto ou cachepô muito ventilado.",
        "🥈 Vaso de barro bem perfurado e proporcional à touceira.",
        "🥉 Montagem em cortiça ou madeira, quando houver disponibilidade de regas frequentes."
    ],
    substrato: ["Casca de pinus média/grossa + perlita grossa compatível com o cachepô + carvão vegetal médio + pequena fração de chips de coco grossos preparados","Casca de macadâmia média + argila expandida média + carvão vegetal médio + casca de pinus grossa"],
    formasCultivo: {
        perfilVisual: "encyclia-epifita-rupicola-clara",
        destaque: "Cachepô de Madeira",
        resumo: "Encyclia de ambientes claros, epífita e ocasionalmente rupícola, que exige raízes muito aeradas, alta luminosidade filtrada e leve secagem entre regas, sem repouso seco prolongado.",
        metodos: [
            { nome: "Cachepô de Madeira", asset: "cesto-madeira", estrelas: 5, status: "Mais recomendado na ficha", texto: "Cachepô bem ventilado e proporcional à touceira, com mistura grossa e secagem perceptível entre regas." },
            { nome: "Vaso de Barro", asset: "vaso-barro", estrelas: 5, status: "Muito recomendado", texto: "Vaso bem perfurado e ajustado ao tamanho das raízes, favorecendo estabilidade e evaporação." },
            { nome: "Placa / tronco", asset: "placa-tronco", estrelas: 4, status: "Alternativa", texto: "Montagem em cortiça ou madeira, com regas mais frequentes para compensar a secagem rápida." },
            { nome: "Vaso plástico vasado", asset: "vaso-plastico-vasado", estrelas: 4, status: "Alternativa", texto: "Recipiente pequeno e muito vazado, com mistura grossa e controle para não acumular água junto aos pseudobulbos." }
        ]
    },
    substratoVisual: {
        titulo: "Substrato ideal",
        contexto: "Mistura para cachepô ou vaso proporcional à touceira",
        resumo: "Substrato de granulometria média a grossa, com excelente aeração e leve secagem entre regas.",
        justificativa: "Encyclia alboxanthina é epífita e ocasionalmente rupícola de ambientes claros, com raízes que exigem alta aeração e secagem perceptível entre regas. Para cachepô de madeira bem vazado, a receita visual propõe macadâmia média, pinus médio, perlita grossa compatível com o recipiente e carvão vegetal médio, totalizando 100%. As duas outras misturas são alternativas qualitativas distintas e não fundamentam os percentuais visuais. Manter a base dos pseudobulbos acima do substrato e evitar repouso seco prolongado. MACS 1.1: inferência horticultural sem homologação quantitativa específica.",
        receitaTexto: "35% casca de macadâmia média + 30% casca de pinus média + 20% perlita grossa compatível com o cachepô + 15% carvão vegetal médio (proposta não homologada).",
        perfil: ["Epífita ou rupícola", "Pseudobulbos firmes", "Alta luminosidade filtrada", "Raízes aeradas", "Leve secagem entre regas"],
        comportamento: [
            { nome: "Retenção", valor: 2, icone: "💧" },
            { nome: "Aeração", valor: 5, icone: "💨" },
            { nome: "Secagem", valor: 4, icone: "⚡" },
            { nome: "Compactação", valor: 1, icone: "🧱" }
        ],
        itens: [
            { asset: "casca-macadamia", nome: "Casca de macadâmia média", proporcao: "35%", nota: "estrutura", finalidade: "Sustenta as raízes com espaços de ar." },
            { asset: "casca-pinus", nome: "Casca de pinus média", proporcao: "30%", nota: "drenagem", finalidade: "Ajuda a manter porosidade e secagem regular." },
            { asset: "perlita", nome: "Perlita grossa compatível com o cachepô", proporcao: "20%", nota: "aeração", finalidade: "Reduz compactação e facilita a circulação de ar." },
            { asset: "carvao", nome: "Carvão vegetal médio", proporcao: "15%", nota: "estrutura", finalidade: "Complementa a drenagem e a estabilidade da mistura." }
        ],
        alerta: "Evitar sombra profunda, substrato constantemente molhado e enterramento da base dos pseudobulbos. Leve secagem não significa impor repouso seco prolongado.",
        notaEvidencia: "MACS 1.1 — revisão documental: Encyclia alboxanthina, epífita e ocasionalmente rupícola de ambientes claros e sazonalmente secos, com raízes que exigem alta aeração e secagem perceptível entre regas, sem repouso seco prolongado. Cachepô de Madeira bem vazado é suporte principal; estrelas heurísticas. Receita visual e textual coincidem: 35% macadâmia média + 30% pinus médio + 20% perlita grossa compatível com cachepô + 15% carvão vegetal médio = 100%. Exatamente duas outras misturas qualitativas distintas: pinus/perlita/carvão/pequena fração de chips de coco grossos preparados e macadâmia/argila expandida/carvão/pinus grosso. Não fundamentam os percentuais visuais. Monitorar secagem, luz e posição dos pseudobulbos. Sem ensaio quantitativo específico nem consulta individualizada a até 25 produtores brasileiros; percentuais e estrelas NÃO HOMOLOGADOS."
    },
    errosComuns: [
        "Cultivar em sombra profunda",
        "Manter o substrato permanentemente molhado",
        "Usar mistura fina e compactada",
        "Enterrar a base dos pseudobulbos",
        "Replantar fora da emissão de novas raízes",
        "Aplicar fertilizante concentrado",
        "Usar vaso grande demais",
        "Confundir tolerância à seca com necessidade de repouso seco prolongado"
    ],
    dica: "🏆 Observe os pseudobulbos: eles devem amadurecer firmes, não permanecer verdes e excessivamente tenros. Muita luz filtrada, raízes arejadas e uma leve secagem entre regas ajudam a planta a armazenar energia e preparar a haste floral.",
    revisaoCientificaIAR: {
        "nome": "Encyclia alboxanthina",
        "statusTaxonomico": "Espécie/nome infraespecífico tratado como aceito na revisão taxonômica de referência.",
        "sinonimosPrincipais": "Verificados prioritariamente em POWO/GBIF/Tropicos; manter apenas os relevantes ao catálogo.",
        "morfologiaDimensoes": "Encyclia alboxanthina é uma brasileira de aparência luminosa e elegante. Seus pseudobulbos sustentam folhas firmes e, quando maduros, produzem uma haste longa e multifloral que exibe flores claras, combinando branco e amarelo e acompanhadas por perfume marcante. É uma Encyclia que aprecia claridade, raízes muito bem ventiladas e uma rotina de rega sem excessos. Quando bem estab",
        "habitatAltitudeClima": "Epífita e também registrada sobre rochas em ambientes tropicais sazonalmente secos. | Quente a intermediário, claro e ventilado.",
        "distribuicaoGeografica": "Bahia e Sergipe.",
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
                    "nota": 2,
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
                    "nota": 5,
                    "peso": 5
                },
                "floracao": {
                    "nota": 5,
                    "peso": 20
                }
            }
        },
        "montanhaFrio": {
            "indice": 62,
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
                    "nota": 2,
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
        }
    },
        adaptacaoRegional: {
        litoralQuente: { texto: "Excelente Sua origem nordestina e preferência por condições quentes e claras tornam a espécie muito promissora, desde que as raízes tenham drenagem e ventilação." },
        montanhaFrio: { texto: "Boa Tolera noites frescas, mas reduza as regas quando a evaporação cair e proteja de frio intenso." }
    },
    mesesFloracao: [10, 11, 12, 1],
    "selosCultivo": {
        "rega": { "nivel": "moderada", "regime": "reduzir-repouso" },
        "climaFloracao": { "faixa": "quente" }
    },
        avaliacoes: { cultivo: 3, floracao: 4, perfume: 4, luminosidade: 4, agua: 2, raridade: 5 }
};
