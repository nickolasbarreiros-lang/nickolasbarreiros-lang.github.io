// Refinamento final — revisão consolidada com fontes botânicas e de cultivo.

export const dichaeaPendula = {
    id: "dichaea-pendula",
    nome: "Dichaea pendula",
    genero: "Dichaea",
    sinonimo: "Dichaea echinocarpa",
    tipo: "Espécie botânica",
    dificuldade: "Moderada",
    caracteristicas: [
        "Espécie neotropical",
        "Crescimento pendente",
        "Hastes ramificadas",
        "Folhas em duas fileiras",
        "Sem pseudobulbos",
        "Flores axilares de cerca de 2 cm",
        "Alta umidade ambiental",
        "Prefere noites mais amenas"
    ],
    fotos: [
        "imagens/Dichaea pendula/Dichaea pendula1.jpeg",
        "imagens/Dichaea pendula/Dichaea pendula2.webp",
        "imagens/Dichaea pendula/Dichaea pendula3.jpeg",
        "imagens/Dichaea pendula/Dichaea pendula4.webp"
    ],
    descricao: "Uma orquídea de aspecto leve e elegante, com hastes que se arqueiam e pendem como pequenas cortinas verdes. Dichaea pendula cresce sem pseudobulbos, formando ramos achatados e revestidos por folhas finas dispostas em duas fileiras. Ao longo dessas hastes surgem flores solitárias de aproximadamente 2 cm, relativamente grandes para a delicadeza da planta. Sua ampla distribuição pela América tropical inclui populações de florestas muito úmidas e montanas, por isso aprecia umidade constante e ar em movimento, mas não gosta de calor abafado. No litoral quente, o segredo é manter as raízes hidratadas sem deixar água presa entre as folhas durante a noite.",
    origem: "América tropical.",
    regiao: "Caribe, América Central e América do Sul.",
    habitat: "Florestas úmidas montanas · ~1.200–2.500 m.",
    clima: "Intermediário a fresco · muito úmido e ventilado.",
    climaFloracao: "A espécie é associada a florestas úmidas de altitude e tende a responder melhor quando recebe noites mais amenas, alta umidade atmosférica e pouca oscilação hídrica. IOSPE registra floração na primavera e no verão. No litoral quente, a indução floral pode ser favorecida pelo período mais ameno do ano, desde que a planta continue ativa e hidratada. Não possui repouso seco verdadeiro.",
    iluminacao: {
        sombrite: "60% a 70%",
        solDireto: "Não recomendado",
        horario: "Luz difusa ao longo do dia",
        observacoes: "Prefere sombra clara de sub-bosque. Luz insuficiente deixa as hastes fracas; sol direto, principalmente associado a calor, desidrata rapidamente folhas e raízes finas."
    },
    floracao: "Na natureza, é registrada principalmente na primavera e no verão. Em cultivo no Sudeste brasileiro, pode variar conforme temperatura e procedência. As flores surgem individualmente em pequenas hastes axilares ao longo dos ramos e podem aparecer sucessivamente em uma planta bem estabelecida.",
    adubacao: "🌿 Orgânica: use bokashi apenas em quantidade mínima e longe das raízes ativas.\n💧 Mineral/Foliar: NPK equilibrado em 1/4 da dose a cada 10–15 dias durante crescimento ativo.\n🌱 Crescimento: mantenha nutrição leve e contínua, pois a espécie não apresenta repouso seco marcado.\n🧪 Liberação lenta: geralmente desnecessária; em vasos, use pouquíssimos grânulos.\n🚿 Lavagem: enxágue o suporte periodicamente para evitar acúmulo de sais nas raízes finas.",
    rega: "Mantenha as raízes regularmente úmidas, sem permitir secas prolongadas. Em placas, regas diárias podem ser necessárias no verão. A frequência deve cair quando a evaporação diminuir, mas nunca ao ponto de desidratar completamente a planta. Regue preferencialmente pela manhã e garanta ventilação suficiente para que a água não permaneça acumulada entre bainhas e folhas durante a noite.",
    suporte: "🥇 Placa vertical de cortiça ou madeira com fina camada de esfagno — favorece o hábito pendente e a aeração.\n🥈 Cesto suspenso pequeno — permite que as hastes cresçam livres.\n🥉 Vaso estreito e muito ventilado — útil quando a umidade ambiental é menor.\nMantenha espaço livre abaixo da planta para o desenvolvimento natural dos ramos.",
    substrato: "🥇 Casca de pinus fina/média + chips de coco pequenos + perlita + pedra-pomes.\n🥈 Chips de coco + pedra-pomes + casca de pinus fina, mantendo umidade uniforme sem encharcar.\n🥉 Casca de macadâmia triturada média + fibra de coco grossa + pedra-pomes + pequena fração de esfagno.\n⭐ Alternativa: Pinus médio + perlita + carvão vegetal miúdo + esfagno picado em baixa proporção.",
    errosComuns: "Deixar secar completamente; cultivar em calor noturno abafado; baixa umidade do ar; água parada nas axilas; sol direto forte; esfagno velho e compacto; vaso profundo; excesso de adubo; regas noturnas frequentes; falta de espaço para as hastes pendentes.",
    dica: "Não interprete a necessidade de umidade como necessidade de encharcamento. Em litoral quente, a melhor combinação é suporte pequeno, umidade atmosférica alta, regas frequentes e muita circulação de ar. Se as hastes começarem a enrugar, aumente a frequência das regas; se houver manchas escuras e tecidos moles nas bainhas, aumente imediatamente a ventilação e reduza o tempo de molhamento.",
    indiceAdaptacaoRegional: {
        versao: "IAR 1.1",
        escala: "compatibilidade",
        litoralQuente: {
            indice: 59,
            estrelas: 3,
            fatores: {
                habitatNatural: { nota: 2, peso: 30 },
                temperatura: { nota: 3, peso: 30 },
                aguaUmidade: { nota: 4, peso: 5 },
                ventilacao: { nota: 4, peso: 5 },
                luminosidade: { nota: 3, peso: 5 },
                sazonalidade: { nota: 2, peso: 5 },
                floracao: { nota: 4, peso: 20 }
            }
        },
        montanhaFrio: {
            indice: 79,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 5, peso: 30 },
                temperatura: { nota: 3, peso: 30 },
                aguaUmidade: { nota: 3, peso: 5 },
                ventilacao: { nota: 4, peso: 5 },
                luminosidade: { nota: 3, peso: 5 },
                sazonalidade: { nota: 5, peso: 5 },
                floracao: { nota: 4, peso: 20 }
            }
        }
    },
    adaptacaoRegional: {
        litoralQuente: { texto: "Cultivo possível, porém mais exigente. Use o ponto mais fresco e ventilado do orquidário, com sombra clara e alta umidade. O calor noturno prolongado é o maior desafio." },
        montanhaFrio: { texto: "Tende a adaptar-se muito bem a condições intermediárias e frescas, desde que não haja geada, vento seco ou secagem prolongada." }
    },
    mesesFloracao: [9, 10, 11, 12, 1, 2, 3],
    "selosCultivo": {
        "rega": { "nivel": "moderada" },
        "climaFloracao": { "faixa": "ameno", "quedaTermica": true }
    },
    indiceDificuldadeCultivo: {
        versao: "IDC 2.0",
        referenciaRegional: "Litoral de clima quente",
        indice: 58,
        nivel: "Moderada",
        fatores: {
            temperatura: { nota: 3, peso: 18 },
            agua: { nota: 1, peso: 15 },
            umidadeVentilacao: { nota: 4, peso: 12 },
            luminosidade: { nota: 2, peso: 8 },
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
        agua: 5,
        raridade: 3
    }
};
