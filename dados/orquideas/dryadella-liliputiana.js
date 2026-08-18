// Refinamento final — revisão consolidada com fontes botânicas e de cultivo.
// ID histórico mantido para preservar links do site; grafia científica exibida como Dryadella lilliputiana.

export const dryadellaLiliputiana = {
    id: "dryadella-liliputiana",
    nome: "Dryadella lilliputiana",
    genero: "Dryadella",
    sinonimo: "Masdevallia lilliputiana",
    tipo: "Espécie botânica",
    dificuldade: "Moderada",
    caracteristicas: [
        "Micro-orquídea",
        "Brasil e Bolívia",
        "Touceira minúscula",
        "Sem pseudobulbos",
        "Folhas carnosas",
        "Flores de cerca de 1 cm",
        "700–1.700 m",
        "Floração de inverno"
    ],
    fotos: [
        "imagens/Dryadella lilliputiana/Dryadella lilliputiana1.jpg",
        "imagens/Dryadella lilliputiana/Dryadella lilliputiana2.jpg",
        "imagens/Dryadella lilliputiana/Dryadella lilliputiana3.webp",
        "imagens/Dryadella lilliputiana/Dryadella lilliputiana4.webp"
    ],
    descricao: "Uma verdadeira lilliputiana entre as orquídeas! Esta micro-orquídea forma minúsculas touceiras de folhas estreitas e carnosas, sem pseudobulbos, e produz flores de cerca de 1 cm que parecem enormes quando comparadas ao tamanho da planta. O próprio epíteto lilliputiana faz referência ao seu porte diminuto. É encontrada no Sul e Sudeste do Brasil e também na Bolívia; registros de cultivo e habitat indicam populações em torno de 700 a 1.700 m. Por isso, gosta de ambiente úmido, bem ventilado e de temperaturas intermediárias a frescas, sendo o calor noturno prolongado um dos maiores desafios no litoral.",
    origem: "Brasil e Bolívia.",
    regiao: "Sul/Sudeste do Brasil · Bolívia.",
    habitat: "Epífita montana · ~700–1.700 m.",
    clima: "Intermediário a fresco · úmido e ventilado.",
    climaFloracao: "IOSPE registra floração no inverno e crescimento quente a fresco ao longo de sua faixa altitudinal. Em cultivo, a combinação mais favorável é touceira madura, umidade do ar alta, raízes oxigenadas e noites mais amenas. Não necessita de repouso seco. No litoral, o verão deve ser manejado reduzindo temperatura radicular e aumentando circulação de ar, não mantendo o substrato permanentemente saturado.",
    iluminacao: {
        sombrite: "Cerca de 70%",
        solDireto: "Evitar",
        horario: "Luz indireta ou muito filtrada",
        observacoes: "Prefere sombra clara. Luz suficiente mantém folhas compactas, mas o excesso de radiação aquece rapidamente a pequena touceira e aumenta a desidratação."
    },
    floracao: "Mais característica no inverno. As numerosas inflorescências são muito curtas, cerca de 1,2–1,6 cm, e carregam flores solitárias posicionadas pouco abaixo da altura das folhas. Uma touceira adulta pode produzir várias flores ao mesmo tempo.",
    adubacao: "🌿 Orgânica: evite bokashi diretamente no pequeno recipiente, pois é difícil dosar sem aumentar decomposição e sais.\n💧 Mineral/Foliar: NPK equilibrado em 1/4 da dose a cada 10–15 dias durante crescimento ativo.\n🧪 Liberação lenta: não recomendada para recipientes tão pequenos.\n🚿 Lavagem: faça regas abundantes apenas com água periodicamente para remover sais.\n💧 Água: baixa condutividade é especialmente benéfica às raízes finas.",
    rega: "Mantenha umidade relativamente estável, mas nunca uma massa de substrato quente e saturada. Regue novamente quando o material ao redor das raízes estiver se aproximando da secagem. Em montagem com pouco musgo, pode exigir rega diária no verão; em vaso com esfagno, o intervalo deve ser maior. Evite tanto seca prolongada quanto encharcamento contínuo.",
    suporte: "🥇 Placa pequena de cortiça ou madeira com camada fina de esfagno — máxima aeração.\n🥈 Vaso miniatura de barro — ajuda a dissipar calor por evaporação.\n🥉 Cachepô pequeno e muito aberto — útil com mistura extremamente leve.\nMantenha a touceira íntegra e evite manipulações frequentes.",
    substrato: "🥇 Montagem em nó de pinho, cortiça ou madeira com uma lâmina fina de esfagno apenas sob as raízes.\n🥈 Casca de pinus fina + perlita + pedra-pomes fina + pequena fração de esfagno solto.\n🥉 Chips de coco pequenos + perlita + casca de pinus fina, mantendo o conjunto leve e aerado.\n⭐ Alternativa: Esfagno de fibra longa usado muito solto + pedra-pomes fina; evitar compactação junto ao rizoma.",
    errosComuns: "Calor noturno acumulado; esfagno permanentemente encharcado; deixar secar por vários dias; água muito salina; adubação forte; pouca circulação de ar; dividir a touceira; vaso grande; exposição ao sol; tentar compensar calor com excesso de água no substrato.",
    dica: "O porte minúsculo exige estabilidade, não excesso. Em Litoral de clima quente, cultive em um ponto fresco, luminoso sem sol, com ar sempre em movimento. Uma montagem levemente úmida e regada com frequência costuma ser mais segura no verão do que uma bola de esfagno quente e saturada.",
    indiceAdaptacaoRegional: {
        versao: "IAR 1.0",
        escala: "compatibilidade",
        litoralQuente: {
            indice: 60,
            estrelas: 3,
            fatores: {
                habitatNatural: { nota: 3, peso: 20 },
                temperatura: { nota: 3, peso: 20 },
                aguaUmidade: { nota: 2, peso: 15 },
                ventilacao: { nota: 4, peso: 10 },
                luminosidade: { nota: 4, peso: 10 },
                sazonalidade: { nota: 2, peso: 5 },
                floracao: { nota: 3, peso: 20 }
            }
        },
        montanhaFrio: {
            indice: 78,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 5, peso: 20 },
                temperatura: { nota: 4, peso: 20 },
                aguaUmidade: { nota: 3, peso: 15 },
                ventilacao: { nota: 4, peso: 10 },
                luminosidade: { nota: 4, peso: 10 },
                sazonalidade: { nota: 5, peso: 5 },
                floracao: { nota: 3, peso: 20 }
            }
        }
    },
    adaptacaoRegional: {
        litoralQuente: { texto: "O principal problema é o calor noturno prolongado. Use o ponto mais fresco e ventilado do orquidário e controle a umidade com pouca massa de substrato." },
        montanhaFrio: { texto: "Em clima intermediário a fresco, protegendo de geada e de frio excessivo associado a encharcamento." }
    },
    mesesFloracao: [6, 7, 8, 9],
    "selosCultivo": {
        "rega": { "nivel": "constante" },
        "climaFloracao": { "faixa": "intermediario", "quedaTermica": true }
    },
    indiceDificuldadeCultivo: {
        versao: "IDC 2.0",
        referenciaRegional: "Litoral de clima quente",
        indice: 53,
        nivel: "Moderada",
        fatores: {
            temperatura: { nota: 4, peso: 18 },
            agua: { nota: 1, peso: 15 },
            umidadeVentilacao: { nota: 1, peso: 12 },
            luminosidade: { nota: 1, peso: 8 },
            raizes: { nota: 2, peso: 15 },
            cicloRepouso: { nota: 4, peso: 12 },
            floracao: { nota: 4, peso: 20 }
        }
    },
    avaliacoes: {
        cultivo: 3,
        floracao: 3,
        perfume: 1,
        luminosidade: 2,
        agua: 4,
        raridade: 5
    }
};
