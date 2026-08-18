// Ficha científica e de cultivo refinada — Lote 03.

export const brassavolaPerrini = {
    id: "brassavola-perrini",
    nome: "Brassavola tuberculata",
    genero: "Brassavola",
    sinonimo: "Brassavola perrinii",
    tipo: "Espécie botânica",
    dificuldade: "Fácil",
    caracteristicas: [
        "Antigamente Brassavola perrinii",
        "Perfume noturno",
        "Epífita ou rupícola",
        "Alta luminosidade",
    ],
    fotos: [
        "imagens/Brassavola perrinii/Brassavola perrinii1.jpeg",
        "imagens/Brassavola perrinii/Brassavola perrinii2.webp",
        "imagens/Brassavola perrinii/Brassavola perrinii3.webp",
        "imagens/Brassavola perrinii/Brassavola perrinii4.webp",
    ],
    descricao: "Uma Brassavola elegante e perfumada, facilmente reconhecida pelas folhas finas e cilíndricas e pelas flores estreladas, com segmentos claros e um amplo labelo branco. O perfume se intensifica à noite, característica típica de muitas Brassavola e uma das grandes atrações dessa planta. O nome Brassavola perrinii ainda é muito encontrado em coleções, embora atualmente seja incluído em Brassavola tuberculata. Plantas identificadas historicamente como “perrinii” também foram registradas em ambientes montanos bastante elevados, por isso sua procedência pode influenciar a tolerância ao calor e a necessidade de noites mais amenas.",
    origem: "América do Sul",
    regiao: "Bolívia · Paraguai · Brasil · NE Argentina",
    habitat: "Epífita/litófita · formas históricas até ~2.580 m",
    clima: "Intermediário–fresco se de altitude · muita luz",
    climaFloracao: "A floração é favorecida por luz intensa, crescimento plenamente amadurecido, boa ventilação e diferença moderada entre as temperaturas do dia e da noite. Sombra excessiva e adubação nitrogenada contínua produzem folhas longas e verdes, mas poucas flores.",
    iluminacao: {
        sombrite: "30% a 40%",
        solDireto: "Sim, suave",
        horario: "Até aproximadamente 09:30",
        observacoes: "Exige alta luminosidade, com sombreamento de 30% a 40% ou sol filtrado intenso. Folhas firmes de coloração verde-clara indicam luminosidade ideal. O amarelamento localizado ou o aparecimento de áreas secas sinalizam queimaduras por sol excessivo."
    },
    floracao: "Primavera ao verão; a época varia conforme procedência. O conceito histórico de B. perrinii é associado a populações montanas, hoje incluídas em B. tuberculata.",
    adubacao: "🌿 Orgânica: Bokashi em pequena quantidade, devidamente protegido em saquinho, aplicado apenas durante o período de crescimento ativo.\n💧 Foliar: NPK equilibrado, como 20-20-20, em baixa dosagem a cada 10 a 15 dias. Reduza a carga de nitrogênio assim que as folhas amadurecerem para incentivar o surgimento de botões florais.\n🧪 Liberação lenta: poucos grânulos de Osmocote 14-14-14 em vasos ou cachepôs, sempre distantes das raízes novas.",
    rega: "Regue abundantemente, mas garanta que o sistema radicular seque completamente antes da próxima irrigação. Exemplares montados em troncos ou cascas podem receber água diariamente nos dias quentes de verão; em dias frios ou chuvosos, espace bastante as regas. Esta espécie tolera a seca curta muito melhor do que a umidade constante.",
    suporte: "🥇 Placa de madeira dura ou tronco: acompanha o crescimento pendente e oferece secagem rápida.\n🥈 Cachepô de madeira muito vazado.\n🥉 Vaso de barro pequeno, com grandes furos laterais.",
    substrato: "🥇 Montagem em nó de pinho, cortiça ou madeira dura, sem material retentivo no centro das raízes.\n🥈 Chips de coco muito grossos + argila expandida + carvão, em cesto extremamente ventilado.\n🥉 Casca de macadâmia grossa + pedra-pomes + carvão vegetal, com secagem muito rápida.\n⭐ Alternativa: Pinus grosso + brita/pedra-pomes + carvão vegetal; evitar esfagno no miolo do vaso.",
    errosComuns: "Cultivar em sombra excessiva; Usar substratos finos, compactos ou com acúmulo de pó; Manter as raízes molhadas continuamente; Plantar em vasos grandes e fundos; Exagerar no uso de esfagno ou materiais de alta retenção hídrica; Dividir touceiras pequenas prematuramente; Aplicar adubo com alto teor de nitrogênio de forma contínua durante todo o ano.",
    dica: "Use as folhas como termômetro: o ponto certo de luz é aquele que deixa a folhagem cilíndrica ereta, rígida e em um tom verde-claro (quase amarelado). Se ela cresce muito mas não floresce, o segredo para forçar a floração é dar mais claridade — sem medo do sol direto matinal — e cortar o adubo rico em nitrogênio.",
    indiceAdaptacaoRegional: {
        versao: "IAR 1.0",
        escala: "compatibilidade",
        litoralQuente: {
            indice: 56,
            estrelas: 3,
            fatores: {
                habitatNatural: { nota: 1, peso: 20 },
                temperatura: { nota: 3, peso: 20 },
                aguaUmidade: { nota: 4, peso: 15 },
                ventilacao: { nota: 4, peso: 10 },
                luminosidade: { nota: 2, peso: 10 },
                sazonalidade: { nota: 4, peso: 5 },
                floracao: { nota: 3, peso: 20 }
            }
        },
        montanhaFrio: {
            indice: 80,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 4, peso: 20 },
                temperatura: { nota: 4, peso: 20 },
                aguaUmidade: { nota: 4, peso: 15 },
                ventilacao: { nota: 4, peso: 10 },
                luminosidade: { nota: 2, peso: 10 },
                sazonalidade: { nota: 4, peso: 5 },
                floracao: { nota: 5, peso: 20 }
            }
        }
    },
    adaptacaoRegional: {
        litoralQuente: { texto: "É muito bem adaptada ao calor, desde que receba ventilação e secagem rápida. O cultivo montado ou em cachepô aberto reduz o risco de podridão durante períodos chuvosos." },
        montanhaFrio: { texto: "Tolera noites frescas, mas deve permanecer mais seca durante sequências frias. Proteja de geadas e mantenha alta luminosidade no inverno." }
    },
    mesesFloracao: [9, 10, 11, 12, 1, 2],
    "selosCultivo": {
        "rega": { "nivel": "constante" },
        "climaFloracao": { "faixa": "ameno", "quedaTermica": true }
    },
    indiceDificuldadeCultivo: {
        versao: "IDC 2.0",
        referenciaRegional: "Litoral de clima quente",
        indice: 26,
        nivel: "Fácil",
        fatores: {
            temperatura: { nota: 2, peso: 18 },
            agua: { nota: 2, peso: 15 },
            umidadeVentilacao: { nota: 1, peso: 12 },
            luminosidade: { nota: 2, peso: 8 },
            raizes: { nota: 1, peso: 15 },
            cicloRepouso: { nota: 0, peso: 12 },
            floracao: { nota: 1, peso: 20 }
        }
    },
    avaliacoes: {
        cultivo: 2,
        floracao: 4,
        perfume: 5,
        luminosidade: 5,
        agua: 2,
        raridade: 2
    }
};
