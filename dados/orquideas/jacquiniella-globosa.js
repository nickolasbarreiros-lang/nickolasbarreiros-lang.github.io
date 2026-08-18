// Ficha V4 refinada — Jacquiniella globosa.

export const jacquiniellaGlobosa = {
    id: "jacquiniella-globosa",
    nome: "Jacquiniella globosa",
    genero: "Jacquiniella",
    sinonimo: "Epidendrum globosum",
    tipo: "Espécie botânica",
    dificuldade: "Moderada",
    caracteristicas: [
        "Miniatura epífita ou litófita",
        "Sem pseudobulbos verdadeiros",
        "Folhas carnosas subcilíndricas",
        "Flores terminais minúsculas"
    ],
    fotos: [
        "imagens/Jacquiniella globosa/Jacquiniella globosa1.jpeg",
        "imagens/Jacquiniella globosa/Jacquiniella globosa2.jpg",
        "imagens/Jacquiniella globosa/Jacquiniella globosa3.jpeg",
        "imagens/Jacquiniella globosa/Jacquiniella globosa4.jpeg"
    ],
    descricao: "Uma miniatura discreta, mas cheia de personalidade! Jacquiniella globosa forma pequenos tufos ou mantas de caules finos, com folhas carnosas quase cilíndricas e flores minúsculas de cerca de 3 mm surgindo no ápice dos ramos. Sua distribuição é enorme — do sul do México a grande parte da América tropical — e isso explica a ampla tolerância térmica observada na espécie. Em cultivo, o segredo não é buscar frio ou calor específico, mas oferecer umidade regular, muita ventilação e raízes que recebam água sem permanecer abafadas.",
    origem: "Sul do México à América Tropical.",
    regiao: "América Central, Caribe e América do Sul; Brasil incluso.",
    habitat: "Florestas úmidas · epífita/litófita · ~200–2.400 m.",
    clima: "Quente a fresco · úmido · bem ventilado.",
    climaFloracao: "Não exige repouso seco nem choque térmico específico. A floração tende a acompanhar caules maduros sob boa luminosidade filtrada, umidade regular e ventilação constante; procedências de altitude podem responder melhor a noites mais amenas.",
    iluminacao: {
        sombrite: "50% a 60%",
        solDireto: "Não recomendado",
        horario: "Luz clara e filtrada",
        observacoes: "Folhas firmes em verde-médio indicam equilíbrio. Folhagem muito escura e caules alongados sugerem pouca luz; avermelhamento discreto pode ocorrer com maior claridade, mas manchas secas ou aquecimento excessivo indicam excesso."
    },
    floracao: "Pode florescer em qualquer época do ano. As flores são muito pequenas, com cerca de 3 mm, surgem sucessivamente no ápice dos caules e costumam aparecer uma ou duas por vez.",
    adubacao: "🌿 Orgânica: bokashi apenas em quantidade mínima, isolado em porta-adubo e sem contato com a touceira.\n💧 Foliar: NPK equilibrado em 1/4 da dose a cada 10–15 dias durante a atividade.\n🧪 Liberação lenta: preferencialmente evitar em plantas montadas; em vaso ou cesto, usar pouquíssimos grânulos. Faça lavagem mensal com água pura para remover sais.",
    rega: "Durante o crescimento e nos dias quentes, regue com frequência, especialmente em plantas montadas. Após cada irrigação, permita que raízes e suporte arejem e sequem antes da próxima rega. No frio ou em períodos nublados, reduza conforme a evaporação, sem provocar murchamento persistente das folhas carnosas.",
    suporte: "🥇 Placa pequena de cortiça ou madeira dura.\n🥈 Galho fino de casca rugosa.\n🥉 Cesto pequeno e muito aberto. Vaso raso é apenas opção secundária.",
    substrato: "🥇 Montagem em nó de pinho, cortiça ou madeira com uma lâmina fina de esfagno apenas sob as raízes.\n🥈 Casca de pinus fina + perlita + pedra-pomes fina + pequena fração de esfagno solto.\n🥉 Chips de coco pequenos + perlita + casca de pinus fina, mantendo o conjunto leve e aerado.\n⭐ Alternativa: Esfagno de fibra longa usado muito solto + pedra-pomes fina; evitar compactação junto ao rizoma.",
    errosComuns: "Expor ao sol direto forte; cultivar em sombra profunda; manter ar parado; usar vaso profundo; compactar esfagno; enterrar a base dos caules; deixar o suporte sempre molhado; submeter a seca prolongada; adubar em concentração alta; confundir necessidade de rega frequente com encharcamento constante.",
    dica: "🏆 Trate-a como uma miniatura que gosta de água com ar. Em placa de cortiça, galho rugoso ou cesto muito aberto, regue com frequência no calor, mas permita rápida oxigenação depois. Como a espécie ocorre de cerca de 200 a 2.400 m, ajuste a frequência de rega e a proteção térmica à procedência e ao microclima, em vez de aplicar uma regra única de temperatura.",
    adaptacaoRegional: {
        litoralQuente: { nota: 4, texto: "Muito boa em litoral quente quando montada em local ventilado, com luz filtrada clara e regas frequentes pela manhã. Reduza o esfagno se o ambiente já for úmido." },
        montanhaFrio: { nota: 3, texto: "Proteja de geadas e aumente o intervalo entre regas em semanas frias e nubladas, sem deixar as folhas murcharem por longos períodos." }
    },
    mesesFloracao: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    "selosCultivo": {
        "rega": { "nivel": "frequente" },
        "climaFloracao": { "faixa": "ameno", "quedaTermica": true }
    },
    indiceDificuldadeCultivo: {
        versao: "IDC 2.0",
        referenciaRegional: "Litoral de clima quente",
        indice: 49,
        nivel: "Moderada",
        fatores: {
            temperatura: { nota: 3, peso: 18 },
            agua: { nota: 3, peso: 15 },
            umidadeVentilacao: { nota: 2, peso: 12 },
            luminosidade: { nota: 2, peso: 8 },
            raizes: { nota: 1, peso: 15 },
            cicloRepouso: { nota: 1, peso: 12 },
            floracao: { nota: 4, peso: 20 }
        }
    },
    avaliacoes: {
        cultivo: 3,
        floracao: 2,
        perfume: 1,
        luminosidade: 3,
        agua: 4,
        raridade: 3
    }
};
