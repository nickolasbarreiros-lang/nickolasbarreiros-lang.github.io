// Ficha refinada — Polystachya concreta
// Fontes-base: POWO/WCVP, literatura florística brasileira (Rodriguésia/Acta Botanica),
// IOSPE/Orchids.org e registros brasileiros de ocorrência/cultivo.
// A recomendação horticultural privilegia o comportamento da espécie no Brasil.

export const polystachyaConcreta = {
    id: "polystachya-concreta",
    nome: "Polystachya concreta",
    genero: "Polystachya",
    sinonimo: "Epidendrum concretum",
    tipo: "Espécie botânica",
    dificuldade: "Fácil",

    caracteristicas: [
        "Epífita",
        "Porte pequeno",
        "Cespitosa",
        "Multiflora",
        "Flores verde-amareladas"
    ],

    fotos: [
        "imagens/Polystachya concreta/Polystachya1.jpg",
        "imagens/Polystachya concreta/Polystachya2.jpg",
        "imagens/Polystachya concreta/Polystachya3.jpg",
        "imagens/Polystachya concreta/Polystachya4.jpg"
    ],

    descricao: "Polystachya concreta é uma orquídea de porte variável, capaz de formar pequenas touceiras de pseudobulbos próximos, envolvidos por bainhas, e duas a quatro folhas alongadas. No alto dos novos crescimentos surgem inflorescências eretas, simples em plantas pequenas ou ramificadas em exemplares vigorosos. Elas podem reunir dezenas de flores diminutas, verde-amareladas, com labelo mais claro, às vezes perfumadas. Uma curiosidade é que as flores não são ressupinadas: o labelo permanece voltado para cima. A espécie ocorre naturalmente em ampla faixa das Américas tropicais e subtropicais, incluindo diversas formações florestais brasileiras. Sua grande variação de tamanho contrasta com a relativa constância da forma das flores.",

    origem: "América Tropical e Subtropical",
    regiao: "Sul da Flórida · México e América Central · Caribe · norte, oeste e sul da América do Sul · Brasil (Norte, Nordeste, Centro-Oeste, Sudeste e Sul)",
    habitat: "Principalmente epífita de florestas úmidas, incluindo mata de restinga, mata ciliar, floresta ombrófila, floresta estacional e ambientes parcialmente antropizados; ocasionalmente terrícola ou rupícola · de terras baixas até cerca de 1.600–1.650 m.",
    clima: "Quente a intermediário · ampla tolerância térmica · umidade regular com boa circulação de ar.",

    climaFloracao: "Não apresenta exigência conhecida de repouso seco pronunciado. No Sudeste brasileiro, novos pseudobulbos começam a se desenvolver no início da primavera e logo produzem a inflorescência terminal. Registros brasileiros mostram floração em diferentes meses conforme a região, enquanto IOSPE indica primavera e verão em cultivo; a ampla distribuição sugere resposta mais ligada à maturação do novo crescimento do que a uma janela climática única.",

    iluminacao: {
        sombrite: "60% a 70%",
        solDireto: "Não permitido",
        horario: "Não permitido",
        observacoes: "Estudos da Mata Atlântica brasileira caracterizam a espécie como amante de sombra. Para cultivo, meia-sombra clara com aproximadamente 60% a 70% de sombreamento é um ponto inicial coerente, especialmente no litoral quente. A planta deve receber boa claridade difusa, mas não necessita de radiação solar direta; folhas excessivamente claras ou aquecidas indicam excesso."
    },

    floracao: "No Brasil, Polystachya concreta apresenta floração bastante variável conforme a região. Um estudo no litoral paulista registrou flores em janeiro e fevereiro, enquanto levantamento botânico no Paraná documentou floração de março a novembro. Por isso, o calendário reúne registros brasileiros de janeiro a novembro. Dezembro também tem confirmação direta: um levantamento da Mata Atlântica do Nordeste registra exemplar coletado nesse mês expressamente com flores e frutos. A presença dos 12 meses no calendário reúne observações de regiões diferentes e não significa floração contínua de uma mesma planta. As hastes terminais podem ser simples ou ramificadas e, em exemplares vigorosos, carregar até cerca de 150 flores minúsculas, verde-claras a verde-amareladas, com labelo mais claro e voltado para cima. As flores exalam perfume cítrico, especialmente nas horas mais quentes do dia. Um estudo brasileiro de biologia floral mediu apenas dois a três dias de duração por flor; a abertura sucessiva de numerosos botões pode prolongar a aparência florida da haste, sem que exista duração total única comprovada.",

    adubacao: "🌿 Orgânica: bokashi em pequena quantidade e longe da base dos pseudobulbos.\n💧 Mineral/foliar: NPK equilibrado em 1/4 a 1/3 da dose a cada 10–15 dias durante crescimento ativo.\n🌸 Formação da haste: mantenha nutrição regular enquanto o novo pseudobulbo amadurece; não force seca para induzir floração.\n🚿 Lave periodicamente o substrato com água pura para evitar acúmulo de sais.",

    rega: "Mantenha regas regulares durante o crescimento, permitindo que o substrato fique apenas levemente menos úmido antes da próxima irrigação. A ampla ocorrência em florestas úmidas favorece umidade disponível, mas as raízes epífitas precisam de oxigenação. No inverno ou em períodos frios e nublados, reduza a frequência conforme a evaporação, sem estabelecer repouso seco completo.",

    suporte: [
        "🥇 Vaso pequeno e bem perfurado, adequado ao hábito cespitoso e às raízes compactas.",
        "🥈 Cachepô/cesto pequeno de madeira, oferecendo excelente drenagem e ventilação.",
        "🥉 Placa de madeira ou cortiça, desde que seja possível manter regas frequentes no calor."
    ],

    substrato: ["Casca de pinus média + chips de coco médios lavados + perlita grossa","Carvão vegetal + casca de pinus grossa + pequena fração de esfagno solto"],

    formasCultivo: {
        perfilVisual: "polystachya-epifita-cespitosa-compacta",
        destaque: "Vaso plástico vasado",
        resumo: "Espécie epífita cespitosa, com raízes compactas e pseudobulbos próximos. Vaso pequeno e bem perfurado mantém o conjunto estável e a mistura arejada.",
        metodos: [
            { nome: "Vaso plástico vasado", asset: "vaso-plastico-vasado", estrelas: 5, status: "Mais recomendado na ficha", texto: "Vaso pequeno, proporcional à touceira, com muitos furos e mistura aberta para evitar saturação." },
            { nome: "Cachepô de Madeira", asset: "cesto-madeira", estrelas: 4, status: "Alternativa", texto: "Cachepô pequeno e vazado, com drenagem e circulação lateral de ar." },
            { nome: "Placa / tronco", asset: "placa-tronco", estrelas: 4, status: "Alternativa", texto: "Cortiça ou madeira rugosa com hidratação frequente no calor e esfagno mínimo, se necessário." },
            { nome: "Vaso de Barro", asset: "vaso-barro", estrelas: 3, status: "Uso condicional", texto: "Vaso pequeno e perfurado, ajustando regas à secagem mais rápida." }
        ]
    },

    substratoVisual: {
        titulo: "Substrato ideal",
        contexto: "Mistura aberta para vaso pequeno",
        resumo: "Mistura de casca de pinus, carvão e perlita que sustenta a touceira e seca sem permanecer saturada.",
        justificativa: "Polystachya concreta se beneficia de vaso pequeno e bem perfurado, com raízes ventiladas e secagem perceptível entre regas. A proporção 45/30/25 é uma hipótese horticultural não validada experimentalmente para a espécie. A casca de pinus média oferece apoio, enquanto o carvão vegetal e a perlita grossa mantêm a mistura aberta e drenante. Observe a umidade junto às raízes e ajuste as regas ao crescimento, evitando compactação e encharcamento prolongado.",
        receitaTexto: "Proposta técnica NÃO HOMOLOGADA: 45% casca de pinus média + 30% carvão vegetal + 25% perlita grossa.",
        perfil: ["Epífita cespitosa", "Raízes compactas", "Boa aeração", "Drenagem rápida", "Umidade moderada"],
        comportamento: [
            { nome: "Retenção", valor: 2, icone: "💧" },
            { nome: "Aeração", valor: 5, icone: "💨" },
            { nome: "Secagem", valor: 4, icone: "⚡" },
            { nome: "Compactação", valor: 1, icone: "🧱" }
        ],
        itens: [
            { asset: "casca-pinus", nome: "Casca de pinus média", proporcao: "45%", nota: "estrutura", finalidade: "Oferece suporte às raízes sem compactar." },
            { asset: "carvao-vegetal", nome: "Carvão vegetal", proporcao: "30%", nota: "drenagem", finalidade: "Contribui para porosidade e secagem." },
            { asset: "perlita", nome: "Perlita grossa", proporcao: "25%", nota: "aeração", finalidade: "Mantém circulação de ar entre as partículas." }
        ],
        alerta: "Evitar sol direto forte, sombra profunda, substrato fino e saturado, repouso seco rígido e desidratação prolongada de plantas montadas durante o crescimento.",
        notaEvidencia: "MACS 1.1 — revisão documental: Polystachya concreta é epífita frequentemente cespitosa, de pseudobulbos próximos; vaso pequeno bem perfurado é hipótese horticultural coerente, não resultado de comparação controlada. Receita visual 45% pinus médio + 30% carvão vegetal + 25% perlita grossa = 100%. A receita principal textual e a composição visual concordam: pinus 45%, carvão 30%, perlita 25%. A mistura com chips de coco médios lavados é uma alternativa qualitativa independente. A preferência por vaso plástico vasado 5 estrelas, cachepô/placa 4 e barro 3 não está homologada. POWO confirma nome aceito e sinonímia Epidendrum concretum; pesquisa brasileira em Acta Botanica Brasilica (2022) confirma hábito epífito cespitoso e sombra, mas não compara substratos. Estudo brasileiro de biologia reprodutiva documenta inflorescências com até 150 flores, sem ensaio de substratos. Referências florísticas e taxonômicas não demonstram estes percentuais. Nenhum conjunto de até 25 recomendações específicas de produtores brasileiros foi verificado nesta passagem. Percentuais e estrelas NÃO HOMOLOGADOS."
    },

    errosComuns: [
        "Colocar a planta sob sol direto por confundir ampla distribuição geográfica com exigência de alta luminosidade.",
        "Cultivar em sombra profunda e sem claridade suficiente para amadurecer bem os novos pseudobulbos.",
        "Manter substrato fino, velho ou permanentemente saturado.",
        "Deixar uma planta montada secar excessivamente durante crescimento ativo.",
        "Aplicar repouso seco forte sem evidência de necessidade fisiológica.",
        "Cortar a haste ou manipular o novo pseudobulbo cedo demais, pois a inflorescência é terminal e acompanha a maturação do crescimento."
    ],

    dica: "🏆 Observe o novo pseudobulbo na primavera: em condições favoráveis, a inflorescência terminal aparece logo em seguida. Como as flores individuais têm antese relativamente curta, acompanhar a formação da haste é a melhor forma de não perder a floração.",

    revisaoCientificaIAR: {
        nome: "Polystachya concreta (Jacq.) Garay & H.R.Sweet",
        statusTaxonomico: "Espécie aceita por POWO/WCVP. A combinação atual foi publicada por Garay & H.R.Sweet em Orquideología 9: 206 (1974).",
        sinonimosPrincipais: "Epidendrum concretum Jacq. é o basiônimo histórico mais importante. POWO registra múltiplos sinônimos associados à grande variabilidade morfológica e à ampla distribuição da espécie.",
        morfologiaDimensoes: "Epífita geralmente cespitosa, muito variável. Estudos brasileiros registram plantas de aproximadamente 9–40 cm; pseudobulbos ovoides a elipsoides em torno de 0,9–4,1 cm; 2–4 folhas que podem alcançar cerca de 25 cm; inflorescência terminal ereta de aproximadamente 5–36 cm, racemosa ou paniculada e multiflora. Em Carajás foram observadas 6–46 flores; estudo reprodutivo no Sudeste registrou inflorescências com até cerca de 150 flores. Flores pequenas, verde-amareladas, com labelo trilobado e tricomas/pseudopólen na região central.",
        habitatAltitudeClima: "POWO caracteriza a espécie como predominantemente epífita do bioma tropical úmido. Na Colômbia há registros de 0–1.600 m; IOSPE/Orchids.org cita ocorrências de aproximadamente 5–1.650 m. No Brasil ocorre em formações muito diversas, de restinga e mata ciliar a florestas ombrófilas e estacionais, demonstrando grande plasticidade ecológica.",
        distribuicaoGeografica: "POWO/WCVP reconhece distribuição nativa na América tropical e subtropical: sul da Flórida, México/América Central, Caribe e grande parte da América do Sul. No Brasil está registrada nas regiões Norte, Nordeste, Centro-Oeste, Sudeste e Sul.",
        cultivoPremiacao: "A literatura brasileira de campo é particularmente valiosa para esta espécie: há registros em restinga quente da Bahia, florestas amazônicas do Pará, Mata Atlântica e florestas do Paraná. Estudos brasileiros a descrevem como mesofítica/amante de sombra e documentam crescimento e floração sob ampla diversidade climática. IOSPE classifica-a como epífita de crescimento quente a intermediário. Não foi localizado dado público robusto de premiação AOS específico que justificasse pontuação adicional.",
        confianca: "alta",
        fontes: [
            "POWO/WCVP 2026",
            "IPNI",
            "Rodriguésia — Flora das cangas da Serra dos Carajás",
            "Rodriguésia — gênero Polystachya no Paraná",
            "Acta Botanica Brasilica — Mata Atlântica de terras baixas",
            "Revista Brasileira de Botânica — biologia reprodutiva de Polystachya",
            "IOSPE / Orchids.org"
        ]
    },

    indiceDificuldadeCultivo: {
        versao: "IDC 3.2 — selo por facilidade",
        escala: "dificuldade",
        indice: 23,
        classificacao: "Fácil",
        cultivoEstrelas: 5,
        criterios: {
            temperatura: { notaDificuldade: 1, peso: 15 },
            rega: { notaDificuldade: 1, peso: 15 },
            umidade: { notaDificuldade: 1, peso: 10 },
            ventilacao: { notaDificuldade: 1, peso: 10 },
            luminosidade: { notaDificuldade: 1, peso: 10 },
            raizesSubstrato: { notaDificuldade: 1, peso: 10 },
            sazonalidade: { notaDificuldade: 0, peso: 10 },
            floracao: { notaDificuldade: 2, peso: 20 }
        },
        faixas: {
            facil: "0–25",
            moderada: "26–50",
            dificil: "51–89",
            extrema: "90–100"
        }
    },

    indiceAdaptacaoRegional: {
        versao: "IAR 2.0 — revisão científica",
        escala: "compatibilidade regional",
        metodo: "confronto entre distribuição/habitat e registros brasileiros, priorizando evidências de populações cultiváveis em condições equivalentes",
        litoralQuente: {
            indice: 94,
            estrelas: 5,
            fatores: {
                habitatNatural: { nota: 5, peso: 30 },
                temperatura: { nota: 5, peso: 30 },
                aguaUmidade: { nota: 5, peso: 5 },
                ventilacao: { nota: 4, peso: 5 },
                luminosidade: { nota: 4, peso: 5 },
                sazonalidade: { nota: 5, peso: 5 },
                floracao: { nota: 5, peso: 20 }
            }
        },
        montanhaFrio: {
            indice: 88,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 5, peso: 30 },
                temperatura: { nota: 4, peso: 30 },
                aguaUmidade: { nota: 4, peso: 5 },
                ventilacao: { nota: 4, peso: 5 },
                luminosidade: { nota: 4, peso: 5 },
                sazonalidade: { nota: 4, peso: 5 },
                floracao: { nota: 5, peso: 20 }
            }
        }
    },

    adaptacaoRegional: {
        litoralQuente: "Adaptação excelente. Há registros naturais brasileiros inclusive em restinga da Bahia e florestas amazônicas de terras baixas. Use 60–70% de sombreamento, regas regulares e ventilação constante; evite sol direto e substrato permanentemente saturado.",
        montanhaFrio: "Adaptação muito boa. A espécie ocorre naturalmente até cerca de 1.600 m e está documentada no Sul/Sudeste brasileiro. Em períodos frios, reduza as regas conforme a evaporação e proteja apenas de frio excessivo e prolongado; não imponha seca completa."
    },

    mesesFloracao: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],

    selosCultivo: {
        rega: { nivel: "moderada", regime: "ano-todo" },
        climaFloracao: { faixa: "amplo", quedaTermica: false }
    },

    avaliacoes: {
        cultivo: 5,
        floracao: 3,
        perfume: 1,
        luminosidade: 2,
        agua: 3,
        raridade: 1
    }
};
