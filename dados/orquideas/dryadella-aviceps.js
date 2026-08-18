// Refinamento final — revisão consolidada com fontes botânicas e de cultivo.

export const dryadellaAviceps = {
    id: "dryadella-aviceps",
    nome: "Dryadella aviceps",
    genero: "Dryadella",
    sinonimo: "Pleurothallis aviceps",
    tipo: "Espécie botânica",
    dificuldade: "Moderada",
    indiceDificuldadeCultivo: {
        versao: "IDC 1.0",
        referenciaRegional: "Litoral de clima quente",
        indice: 48,
        nivel: "Moderada",
        fatores: {
            temperatura: { nota: 2, peso: 18 },
            agua: { nota: 3, peso: 15 },
            umidadeVentilacao: { nota: 1, peso: 12 },
            luminosidade: { nota: 1, peso: 8 },
            raizes: { nota: 3, peso: 15 },
            cicloRepouso: { nota: 3, peso: 12 },
            floracao: { nota: 3, peso: 20 }
        }
    },
    caracteristicas: [
        "Miniatura brasileira",
        "Também ocorre no Paraguai",
        "Touceira compacta",
        "Flores de cerca de 5 mm",
        "Folhas espessas",
        "Raízes finas",
        "310–1.500 m",
        "Quente a fresca conforme altitude"
    ],
    fotos: [
        "imagens/Dryadella aviceps/Dryadella aviceps1.jpg",
        "imagens/Dryadella aviceps/Dryadella aviceps2.jpg",
        "imagens/Dryadella aviceps/Dryadella aviceps3.webp",
        "imagens/Dryadella aviceps/Dryadella aviceps4.jpg"
    ],
    descricao: "Pequena no tamanho, mas cheia de detalhes! Dryadella aviceps forma tufos compactos de folhas firmes e produz minúsculas flores de cerca de 5 mm muito próximas à base da planta. O nome comum em inglês faz alusão ao formato da flor, lembrando uma pequena cabeça de ave. Ocorre no leste e sul do Brasil e chega ao Paraguai, em altitudes bastante variadas — aproximadamente 310 a 1.500 m — o que explica sua capacidade de crescer desde condições relativamente quentes até ambientes mais frescos. Em cultivo, aprecia umidade regular, raízes arejadas e pouca perturbação da touceira.",
    origem: "Brasil e Paraguai.",
    regiao: "Leste/Sul do Brasil · Paraguai.",
    habitat: "Epífita · florestas sazonais · ~310–1.500 m.",
    clima: "Quente a fresco · úmido e ventilado.",
    climaFloracao: "A amplitude altitudinal mostra que a espécie não deve ser classificada como exclusivamente fria. Plantas de procedência mais baixa toleram calor melhor, enquanto populações montanas respondem a noites amenas. Uma touceira madura, raízes saudáveis e estabilidade hídrica são mais importantes que um choque térmico intenso. No litoral quente, a prioridade é evitar abafamento e aquecimento prolongado das raízes.",
    iluminacao: {
        sombrite: "60% a 70%",
        solDireto: "Evitar",
        horario: "Luz difusa durante todo o dia",
        observacoes: "Prefere sombra clara. Folhas excessivamente amarelas ou avermelhadas sugerem luz/calor em excesso; folhas muito escuras e alongadas indicam pouca luminosidade."
    },
    floracao: "Pode produzir poucas flores sucessivamente em inflorescências muito curtas, de apenas 1–2 mm, surgindo na base do ramicaule. A época pode variar com a procedência e o cultivo; plantas bem estabelecidas podem repetir floração ao longo do ano, sem necessidade de repouso seco.",
    adubacao: "🌿 Orgânica: evite material concentrado em contato direto com as raízes.\n💧 Mineral/Foliar: NPK equilibrado em 1/4 da dose a cada 10–15 dias.\n🌱 Crescimento: pequenas doses frequentes são mais seguras que adubações fortes.\n🧪 Liberação lenta: dispensável em recipientes muito pequenos.\n🚿 Lavagem: enxágue regularmente para impedir salinização do esfagno e das raízes.",
    rega: "Mantenha umidade relativamente constante, permitindo que o excesso de água saia rapidamente. Não deixe a touceira secar por longos períodos, mas também não mantenha o centro do vaso cronicamente saturado. Em montagens, a rega pode ser diária no calor; em vasos com esfagno, espere a superfície se aproximar da secagem antes de regar novamente.",
    suporte: "🥇 Placa pequena de cortiça ou madeira com musgo fino — excelente para raízes arejadas.\n🥈 Vaso miniatura de barro — ajuda a dissipar calor e controlar umidade.\n🥉 Pequeno cachepô bem vazado — adequado com mistura leve e pouco material retentor.\nEvite dividir a planta sem necessidade.",
    substrato: "🥇 Montagem em nó de pinho, cortiça ou madeira com uma lâmina fina de esfagno apenas sob as raízes.\n🥈 Chips de coco pequenos + perlita + casca de pinus fina, mantendo o conjunto leve e aerado.\n🥉 Esfagno de fibra longa usado muito solto + pedra-pomes fina; evitar compactação junto ao rizoma.\n⭐ Alternativa: Casca de pinus fina + perlita + pedra-pomes fina + pequena fração de esfagno solto.",
    errosComuns: "Dividir touceiras pequenas; usar vaso grande; secar totalmente as raízes; manter esfagno velho e compacto; excesso de sais; sol direto; baixa ventilação; tratar a espécie como obrigatoriamente fria; encharcar durante noites quentes; adubação concentrada.",
    dica: "O melhor indicador de acerto é uma touceira compacta, firme e com raízes ativas. No litoral quente, não tente 'resfriar' a planta mantendo o vaso encharcado: ofereça sombra luminosa, ventilação contínua e umidade do ar, enquanto o substrato permanece pequeno e oxigenado.",
    adaptacaoRegional: {
        litoralQuente: "Adaptação de moderada a boa, principalmente para plantas de procedência mais baixa. Cultive em local fresco e ventilado, longe de telhas e paredes quentes.",
        montanhaFrio: "Adaptação muito boa em clima intermediário/fresco, protegendo apenas de geada e saturação prolongada do substrato."
    },
    mesesFloracao: [6, 7, 8, 9, 10, 11, 12],
    "selosCultivo": {
        "rega": { "nivel": "constante" },
        "climaFloracao": { "faixa": "ameno", "quedaTermica": true }
    },
    avaliacoes: {
        cultivo: 3,
        floracao: 3,
        perfume: 1,
        luminosidade: 2,
        agua: 4,
        raridade: 3
    }
};
