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

    descricao: "Macradenia multiflora é uma orquídea epífita sul-americana de pseudobulbos pequenos, comprimidos, com duas folhas estreitas e alongadas. Seu destaque aparece na floração: hastes pendentes de até cerca de 20 cm reúnem numerosas flores delicadas, com aproximadamente 2 cm, em tons castanhos, vinho e verde-amarelados. As flores podem ser perfumadas e, vistas em conjunto, formam uma cortina leve abaixo da folhagem. A espécie ocorre no Brasil e no Paraguai, associada a ambientes florestais tropicais com sazonalidade. Apesar do porte relativamente compacto, as inflorescências longas dão à planta uma aparência exuberante quando floresce.",

    origem: "América do Sul",
    regiao: "Brasil (Centro-Oeste · Sudeste · Sul) · Paraguai",
    habitat: "Epífita de ambientes florestais, incluindo matas ciliares e formações úmidas associadas ao Cerrado e florestas tropicais · de terras baixas a cerca de 1.000 m nas referências horticulturais.",
    clima: "Intermediário a quente · úmido · boa circulação de ar.",

    climaFloracao: "Não exige repouso seco pronunciado. IOSPE descreve a espécie como perenifólia, com água e adubação regulares durante todo o ano, e floração do verão ao outono. Em cultivo brasileiro há relatos de floração predominante no verão e possibilidade de repetir a floração quando a planta está bem estabelecida.",

    iluminacao: {
        sombrite: "50% a 60%",
        solDireto: "Não permitido",
        horario: "Não permitido",
        observacoes: "Prefere meia-sombra clara e luz filtrada relativamente intensa. Orquidários brasileiros recomendam cerca de 50% de sombreamento, enquanto outro produtor orienta meia-sombra sem sol direto. No litoral quente, 50% a 60% de sombreamento é um ponto inicial seguro: forneça claridade suficiente para manter crescimento compacto, mas evite radiação direta que aqueça folhas e raízes."
    },

    floracao: "No Brasil, Macradenia multiflora tem floração documentada em março, abril, maio, junho, novembro e dezembro em observações de campo no Pará. Orquidários brasileiros também relatam floração predominante no verão, por vezes repetida no mesmo ano, e a época pode variar conforme a região e o cultivo. As hastes laterais pendentes, de aproximadamente 8 a 20 cm, carregam muitas flores pequenas, geralmente 12 a 26, com cerca de 2 cm. Sépalas e pétalas são púrpura a castanho-vinho, com margens verde-amareladas; o labelo claro apresenta pintas e detalhes vináceos. Há referências internacionais que descrevem flores perfumadas, mas alguns produtores brasileiros não percebem fragrância em suas plantas; não há notas aromáticas específicas confirmadas. Também não foi encontrada documentação confiável sobre quantos dias dura cada flor ou a inflorescência completa, portanto não se atribui uma duração estimada.",

    adubacao: "🌿 Orgânica: use bokashi em pequena quantidade, preferencialmente em sachê e afastado do rizoma.\n💧 Foliar/mineral: NPK equilibrado em 1/4 a 1/3 da dose, a cada 10–15 dias no crescimento ativo.\n🌸 Pré-floração: mantenha nutrição equilibrada; a espécie não depende de seca severa para induzir flores.\n🚿 Faça lavagem periódica do substrato com água pura para reduzir acúmulo de sais.",

    rega: "Regue com frequência, mantendo disponibilidade regular de umidade durante todo o ano. O substrato pode perder parte da umidade superficial entre as regas, mas não deve permanecer seco por períodos longos. Ao mesmo tempo, as raízes precisam de drenagem e oxigenação: substrato constantemente saturado aumenta o risco de deterioração radicular. Em placas ou troncos, a frequência deve aumentar no calor e em períodos de baixa umidade.",

    suporte: [
        "🥇 Cachepô ou cesto pequeno de madeira, permitindo boa drenagem e acomodando a haste pendente.",
        "🥈 Placa de madeira, cortiça ou tronco, especialmente em ambientes onde seja possível regar com frequência.",
        "🥉 Vaso pequeno e muito perfurado, com mistura leve e de secagem moderada."
    ],

    substrato: ["Casca de pinus + pequena fração de esfagno solto + perlita grossa","Chips de coco médios lavados + carvão vegetal + perlita grossa"],

    formasCultivo: {
        perfilVisual: "epifita-compacta-inflorescencia-pendente",
        destaque: "Cachepô de Madeira",
        resumo: "Epífita compacta com inflorescência pendente multifloral. Favorecer cachepô pequeno e ventilado, com espaço livre sob a planta, luz filtrada e umidade regular sem encharcamento.",
        metodos: [
            { nome: "Cachepô de Madeira", asset: "cesto-madeira", estrelas: 5, status: "Mais recomendado na ficha", texto: "Cachepô pequeno e vazado, suspenso para permitir queda livre da haste floral e boa drenagem." },
            { nome: "Placa / tronco", asset: "placa-tronco", estrelas: 4, status: "Alternativa", texto: "Cortiça ou madeira durável, com regas mais frequentes para impedir desidratação prolongada." },
            { nome: "Vaso de Barro", asset: "vaso-barro", estrelas: 4, status: "Alternativa", texto: "Vaso pequeno e muito perfurado, com mistura leve e espaço livre para a haste pendente." },
            { nome: "Vaso plástico vasado", asset: "vaso-plastico-vasado", estrelas: 4, status: "Alternativa", texto: "Vaso pequeno e bem vazado, sem acúmulo de água e com a inflorescência desobstruída." }
        ]
    },
    substratoVisual: {
        titulo: "Substrato ideal",
        contexto: "Mistura aberta para cachepô pequeno e suspenso",
        resumo: "Substrato leve de secagem moderada, com raízes ventiladas e umidade regular durante o crescimento.",
        justificativa: "Macradenia multiflora se beneficia de cachepô pequeno e suspenso, com raízes ventiladas, sombra adequada e umidade regular. A proporção 45/30/25 é uma hipótese horticultural: a fonte brasileira consultada menciona pinus, mas não valida esta mistura nem seus percentuais. A casca de pinus média oferece apoio, enquanto a perlita grossa e o carvão mantêm a mistura aberta e drenante. Observe a secagem do recipiente para ajustar as regas e evite compactação. A montagem em tronco é outra opção quando a umidade pode ser mantida.",
        receitaTexto: "Proposta horticultural NÃO HOMOLOGADA para a espécie: 45% casca de pinus média + 30% perlita grossa + 25% carvão vegetal.",
        perfil: ["Epífita compacta", "Inflorescência pendente", "Umidade regular", "Raízes ventiladas", "Secagem moderada"],
        comportamento: [
            { nome: "Retenção", valor: 3, icone: "💧" },
            { nome: "Aeração", valor: 5, icone: "💨" },
            { nome: "Secagem", valor: 3, icone: "⚡" },
            { nome: "Compactação", valor: 1, icone: "🧱" }
        ],
        itens: [
            { asset: "casca-pinus", nome: "Casca de pinus média", proporcao: "45%", nota: "estrutura e umidade", finalidade: "Oferece apoio radicular e umidade moderada sem compactação." },
            { asset: "perlita", nome: "Perlita grossa", proporcao: "30%", nota: "aeração", finalidade: "Amplia espaços de ar e drenagem." },
            { asset: "carvao-vegetal", nome: "Carvão vegetal", proporcao: "25%", nota: "porosidade", finalidade: "Mantém estrutura aberta e drenante." }
        ],
        alerta: "Evitar sol direto forte, seca prolongada em montagem, substrato encharcado e repouso seco intenso. Deixar a haste floral pender livremente.",
        notaEvidencia: "MACS 1.1 — revisão documental: Orquídeas & Cia tem página específica com meia-sombra sem sol direto, rega frequente e opções de pinus, esfagno ou tronco (https://www.orquideacia.com.br/macradenia-multiflora). As referências anteriores a outros produtores não foram reconfirmadas nesta passagem e não são contadas como receitas verificadas. POWO aceita Macradenia multiflora e o sinônimo Trichopilia multiflora, com distribuição Brasil e Paraguai. Não há validação publicada nesta passagem para a receita visual 45% pinus médio + 30% perlita grossa + 25% carvão = 100%. Receita principal 45% pinus + 30% perlita + 25% carvão coincide com o visual; pinus, esfagno e perlita são apenas uma alternativa qualitativa sem percentuais. Cachepô suspenso 5 estrelas, placa e vasos 4: plausibilidade pela haste pendente, sem ensaio comparativo. Percentuais e estrelas NÃO HOMOLOGADOS; meta de até 25 produtores não atingida. Receita principal, duas alternativas e demais campos preservados nesta revisão documental."
    },
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

    mesesFloracao: [3, 4, 5, 6, 11, 12],

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
