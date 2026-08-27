// Ficha criada no padrão editorial atual do Orquidário Digital.
// Taxonomia prioriza POWO/WCVP; a divergência com Flora e Funga do Brasil
// (que trata M. multiflora sob M. paraensis) é registrada na revisão científica.

export const macradeniaMultiflora = {
    id: "macradenia-multiflora",
    nome: "Macradenia multiflora",
    genero: "Macradenia",
    sinonimo: "Trichopilia multiflora",
    tipo: "Espécie botânica",
    dificuldade: "Moderada",

    caracteristicas: [
        "Epífita",
        "Porte compacto",
        "Inflorescência pendente",
        "Multiflora",
        "Flores de ~2 cm",
        "Umidade regular"
    ],

    fotos: [
        "imagens/Macradenia multiflora/Macradenia4.jpg",
        "imagens/Macradenia multiflora/Macradenia1.jpg",
        "imagens/Macradenia multiflora/Macradenia2.jpg",
        "imagens/Macradenia multiflora/Macradenia3.jpg"
    ],

    descricao: "Uma pequena brasileira que chama atenção quando a haste começa a cair carregada de flores. Macradenia multiflora forma pseudobulbos compactos e folhas lanceoladas, mas sua principal atração é a inflorescência pendente, que pode reunir muitas flores estreladas em tons de vinho, castanho, verde-amarelado e branco. É uma epífita de cultivo bastante adaptável quando recebe luz filtrada, raízes arejadas e umidade regular — sem ficar permanentemente encharcada.",

    origem: "América do Sul",
    regiao: "Brasil (Centro-Oeste · Sudeste · Sul) · Paraguai",
    habitat: "Epífita de ambientes florestais, incluindo matas ciliares e formações úmidas associadas ao Cerrado e florestas tropicais · de terras baixas a cerca de 1.000 m nas referências horticulturais.",
    clima: "Intermediário a quente · úmido · boa circulação de ar.",

    climaFloracao: "Não exige repouso seco pronunciado. IOSPE descreve a espécie como perenifólia, com água e adubação regulares durante todo o ano, e floração do verão ao outono. Em cultivo brasileiro há relatos de floração predominante no verão e possibilidade de repetir a floração quando a planta está bem estabelecida.",

    iluminacao: {
        sombrite: "50% a 60%",
        solDireto: "Não permitido",
        horario: "",
        observacoes: "Prefere meia-sombra clara e luz filtrada relativamente intensa. Orquidários brasileiros recomendam cerca de 50% de sombreamento, enquanto outro produtor orienta meia-sombra sem sol direto. No litoral quente, 50% a 60% de sombreamento é um ponto inicial seguro: forneça claridade suficiente para manter crescimento compacto, mas evite radiação direta que aqueça folhas e raízes."
    },

    floracao: "Produz racemos laterais pendentes, normalmente densos e multifloros. Estudos brasileiros descrevem plantas de cerca de 14–17 cm, inflorescências de 8–14 cm com aproximadamente 12–26 flores e flores em torno de 2 cm. IOSPE registra hastes chegando a aproximadamente 20 cm e floração do verão ao outono. O perfume é descrito em referências internacionais, embora ao menos um produtor brasileiro comercialize clones sem perfume perceptível, indicando possível variação entre plantas e condições de cultivo.",

    adubacao: "🌿 Orgânica: use bokashi em pequena quantidade, preferencialmente em sachê e afastado do rizoma.\n💧 Foliar/mineral: NPK equilibrado em 1/4 a 1/3 da dose, a cada 10–15 dias no crescimento ativo.\n🌸 Pré-floração: mantenha nutrição equilibrada; a espécie não depende de seca severa para induzir flores.\n🚿 Faça lavagem periódica do substrato com água pura para reduzir acúmulo de sais.",

    rega: "Regue com frequência, mantendo disponibilidade regular de umidade durante todo o ano. O substrato pode perder parte da umidade superficial entre as regas, mas não deve permanecer seco por períodos longos. Ao mesmo tempo, as raízes precisam de drenagem e oxigenação: substrato constantemente saturado aumenta o risco de deterioração radicular. Em placas ou troncos, a frequência deve aumentar no calor e em períodos de baixa umidade.",

    suporte: [
        "🥇 Cachepô ou cesto pequeno de madeira, permitindo boa drenagem e acomodando a haste pendente.",
        "🥈 Placa de madeira, cortiça ou tronco, especialmente em ambientes onde seja possível regar com frequência.",
        "🥉 Vaso pequeno e muito perfurado, com mistura leve e de secagem moderada."
    ],

    substrato: [
        "🥇 Casca de pinus média + carvão vegetal + pedra-pomes.",
        "🥈 Casca de pinus + pequena fração de esfagno + pedra-pomes/perlita.",
        "🥉 Chips de coco + carvão + pedra-pomes, sem compactação.",
        "⭐ Montada: fina camada de esfagno apenas junto às raízes novas."
    ],

    errosComuns: [
        "Expor ao sol direto forte porque a planta aceita boa luminosidade filtrada.",
        "Manter o substrato permanentemente encharcado por interpretar 'rega frequente' como saturação constante.",
        "Deixar uma planta montada secar por períodos prolongados em dias quentes.",
        "Cultivar em sombra profunda, produzindo crescimento fraco e menor capacidade de floração.",
        "Usar vaso grande ou substrato muito fino e pouco aerado.",
        "Aplicar repouso seco forte, contrariando a necessidade de água mais uniforme ao longo do ano.",
        "Posicionar a planta onde a haste pendente fique presa ou apoiada sobre o substrato."
    ],

    dica: "🏆 Dê espaço para a haste cair livremente. Um cesto pequeno ou montagem bem ventilada combina muito bem com a espécie: facilita a drenagem, deixa a inflorescência pendente aparecer inteira e permite manter regas frequentes sem sufocar as raízes.",

    revisaoCientificaIAR: {
        nome: "Macradenia multiflora (Kraenzl.) Cogn.",
        statusTaxonomico: "Nome aceito por POWO/WCVP, publicado em Flora Brasiliensis 3(6): 115 (1904). Há divergência taxonômica relevante: a Flora e Funga do Brasil 2020 trata M. multiflora como sinônimo heterotípico de Macradenia paraensis Barb.Rodr.; o catálogo segue POWO como referência taxonômica principal.",
        sinonimosPrincipais: "Trichopilia multiflora Kraenzl. é o basiônimo/homotípico reconhecido por POWO. A Flora e Funga do Brasil inclui M. multiflora no conceito de M. paraensis, divergindo do POWO.",
        morfologiaDimensoes: "Estudo brasileiro no Xingu descreve plantas de 14–17 cm, pseudobulbos de 3–6 × 0,7–1,7 cm, folhas de 8–13 × 1,7–3,5 cm, inflorescências de 8–14 cm com 12–26 flores e flores de aproximadamente 2 cm. Flora do Brasil, sob M. paraensis, descreve plantas de 10–25 cm, pseudobulbos de 2–7 cm, folhas de 6,5–20 × 1–3 cm e racemos multifloros.",
        habitatAltitudeClima: "Epífita. POWO associa a espécie a bioma tropical sazonalmente seco; estudos brasileiros documentam ocorrência em mata ciliar no Centro-Oeste. Referências horticulturais a tratam como planta de clima frio a quente/intermediário e indicam cultivo desde terras baixas até aproximadamente 1.000 m.",
        distribuicaoGeografica: "POWO/WCVP: Brasil (Centro-Oeste, Sudeste e Sul) e Paraguai. A Flora e Funga do Brasil, sob o conceito taxonômico de M. paraensis, registra ocorrências também no Norte e em Minas Gerais; essa diferença é mantida explicitamente na ficha em vez de fundir bases taxonômicas incompatíveis.",
        cultivoPremiacao: "Comparativo brasileiro: Orquidário Paulista recomenda 50% de sombreamento, 10–35 °C e substrato de secagem moderada com boa drenagem. Orquídeas & Cia recomenda meia-sombra sem sol direto, rega frequente e pinus/esfagno/tronco. Merten Orquídeas relata boa umidade, bom sombreamento, tolerância a até 35 °C e floração predominante no verão, podendo repetir no ano. ORCHIDS.ORG/IOSPE registra cultivares premiados e descreve flores fragrantes.",
        confianca: "alta",
        fontes: [
            "POWO/WCVP 2026",
            "World Flora Online",
            "Flora e Funga do Brasil 2020",
            "IOSPE / Orchids.org",
            "Rodriguésia / estudos florísticos brasileiros",
            "Orquidário Paulista",
            "Orquídeas & Cia",
            "Merten Orquídeas"
        ]
    },

    indiceDificuldadeCultivo: {
        versao: "IDC 3.2 — selo por facilidade",
        escala: "dificuldade",
        indice: 31,
        classificacao: "Moderada",
        cultivoEstrelas: 4,
        criterios: {
            temperatura: { notaDificuldade: 1, peso: 15 },
            rega: { notaDificuldade: 2, peso: 15 },
            umidade: { notaDificuldade: 2, peso: 10 },
            ventilacao: { notaDificuldade: 1, peso: 10 },
            luminosidade: { notaDificuldade: 2, peso: 10 },
            raizesSubstrato: { notaDificuldade: 2, peso: 10 },
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
        metodo: "notas atribuídas após confronto entre habitat, distribuição natural e cultivo documentado no Brasil",
        litoralQuente: {
            indice: 80,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 4, peso: 30 },
                temperatura: { nota: 4, peso: 30 },
                aguaUmidade: { nota: 4, peso: 5 },
                ventilacao: { nota: 4, peso: 5 },
                luminosidade: { nota: 4, peso: 5 },
                sazonalidade: { nota: 4, peso: 5 },
                floracao: { nota: 4, peso: 20 }
            }
        },
        montanhaFrio: {
            indice: 90,
            estrelas: 5,
            fatores: {
                habitatNatural: { nota: 4, peso: 30 },
                temperatura: { nota: 5, peso: 30 },
                aguaUmidade: { nota: 4, peso: 5 },
                ventilacao: { nota: 4, peso: 5 },
                luminosidade: { nota: 4, peso: 5 },
                sazonalidade: { nota: 4, peso: 5 },
                floracao: { nota: 5, peso: 20 }
            }
        }
    },

    adaptacaoRegional: {
        litoralQuente: "Boa adaptação. Produtores brasileiros relatam tolerância a temperaturas de até 35 °C, mas a combinação de calor com substrato saturado deve ser evitada. No litoral quente, use 50–60% de sombreamento, ventilação constante e rega frequente com drenagem rápida.",
        montanhaFrio: "Adaptação excelente. A amplitude térmica aceita em cultivo e a ocorrência no Centro-Oeste/Sudeste/Sul favorecem noites mais amenas. No inverno, apenas ajuste a rega à menor evaporação; não imponha repouso seco."
    },

    mesesFloracao: [1, 2, 3, 6, 7, 8, 9, 10, 11],

    selosCultivo: {
        rega: { nivel: "frequente", regime: "ano-todo" },
        climaFloracao: { faixa: "intermediario", quedaTermica: false }
    },

    avaliacoes: {
        cultivo: 4,
        floracao: 4,
        perfume: 3,
        luminosidade: 3,
        agua: 4,
        raridade: 2
    }
};
