// Ficha científica e de cultivo revisada — Refinamento Lote 09.
// ID e nome de arquivo históricos preservados para manter compatibilidade com o catálogo.

export const laeliaFournieri = {
    id: "laelia-fournieri",
    nome: "Cattleya fournieri",
    genero: "Cattleya",
    sinonimo: "Laelia fournieri",
    tipo: "Espécie botânica rara — miniatura rupícola",
    dificuldade: "Moderada",
    caracteristicas: [
        "Endêmica de Minas Gerais",
        "Miniatura rupícola",
        "Campos rupestres de altitude",
        "Flores claras",
        "Cultivo avançado",
        "Raízes sensíveis ao calor"
    ],
    fotos: [
        "imagens/Cattleya fournieri/Cattleya fournieri1.jpg",
        "imagens/Cattleya fournieri/Cattleya fournieri2.jpg",
        "imagens/Cattleya fournieri/Cattleya fournieri3.jpg",
        "imagens/Cattleya fournieri/Cattleya fournieri4.webp"
    ],
    descricao: "Uma joia minúscula dos campos rupestres de Minas Gerais! Cattleya fournieri forma pequenas touceiras compactas, com folhas rígidas e flores de aproximadamente 2,5 a 3 cm — grandes em relação ao tamanho da planta. É encontrada em afloramentos rochosos de altitude, por volta de 1.100 a 1.800 m, onde recebe muita luz, vento e noites frescas. Por isso, no litoral quente, o maior desafio não é fazê-la “passar sede”, e sim manter raízes pequenas, arejadas e relativamente frescas durante o verão.",
    origem: "Brasil.",
    regiao: "Minas Gerais.",
    habitat: "Campos rupestres · rochas · ~1.100–1.800 m.",
    clima: "Fresco a intermediário · alta luz · ventilado.",
    climaFloracao: "A floração depende de crescimento compacto, muita luz e raízes ativas sob temperaturas moderadas. O calor noturno persistente pode reduzir vigor e indução floral; no litoral, priorize o ponto mais fresco e ventilado do orquidário em vez de compensar o calor com seca severa.",
    iluminacao: {
        sombrite: "30% a 50% — cerca de 50% no verão quente",
        solDireto: "Somente muito suave",
        horario: "Primeiras horas da manhã",
        observacoes: "É uma espécie de alta luminosidade, mas em litoral quente o risco principal é superaquecer folhas, pedras e raízes. Forneça claridade muito alta com ventilação intensa e evite suportes escuros expostos ao sol forte."
    },
    floracao: "Predomina do verão ao outono. A inflorescência é curta, em torno de 1,5 cm, e pode produzir simultaneamente cerca de 3–7 flores de aproximadamente 2,5–3 cm.",
    adubacao: "🌿 Orgânica: Bokashi é dispensável como rotina; se usado, deve ser mínimo e totalmente afastado da base.\n💧 Foliar/mineral: NPK equilibrado, como 20-20-20, em cerca de 1/4 da dose a cada 10 a 15 dias enquanto houver crescimento ativo.\n🧪 Liberação lenta: não é a primeira escolha. Se utilizada, aplique pouquíssimos grânulos e considere toda a carga de fertilização para evitar salinização.",
    rega: "Durante brotação e enraizamento, regue bem e permita que o meio drene rapidamente e se aproxime da secagem antes da próxima irrigação. Rupícola não significa xerófita absoluta: uma planta pequena em vaso mineral pode secar muito rápido no verão e necessitar de água frequente. No período frio ou de menor atividade, aumente os intervalos, evitando desidratação severa dos pequenos pseudobulbos.",
    suporte: "🥇 Vaso de barro pequeno, raso e muito perfurado.\n🥈 Pedra porosa ou rocha mineral, com fixação muito firme.\n🥉 Cesto baixo e extremamente aberto.\nEscolha sempre o local mais fresco e ventilado, e não simplesmente o ponto mais alto do orquidário.",
    substrato: "🥇 Pedra-pomes + brita fina/média + casca de macadâmia triturada, com pequena fração de pinus.\n🥈 Brita + pedra-pomes + carvão vegetal, acrescentando apenas 15–25% de componente orgânico grosso.\n🥉 Macadâmia grossa + pedra-pomes + cacos de cerâmica/argila expandida, mantendo o colo totalmente aerado.\n⭐ Alternativa: Pedra-pomes + argila expandida + carvão vegetal + casca de pinus grossa em baixa proporção.",
    errosComuns: "• Cultivar em local quente e abafado.\n• Confundir hábito rupícola com necessidade de seca extrema.\n• Vaso grande, profundo ou com material compactado.\n• Deixar pedra ou vaso superaquecer ao sol.\n• Excesso de matéria orgânica decomposta no calor.\n• Replantar por conveniência quando não há novas raízes, salvo emergência.\n• Adubação concentrada e acúmulo de sais.\n• Repouso seco exagerado, levando rapidamente ao enrugamento dos pseudobulbos.",
    dica: "🏆 Replante preferencialmente quando as primeiras raízes novas começarem a surgir e use pouco volume de substrato, muita drenagem e máxima circulação de ar. No litoral quente, o objetivo é baixar a temperatura radicular e evitar abafamento; secar demais uma planta tão pequena costuma piorar o problema.",
    adaptacaoRegional: {
        litoralQuente: "Difícil, cerca de 2/5 de adaptação. O maior gargalo é o calor noturno. Use o ponto comprovadamente mais fresco e ventilado, recipiente pequeno, alta aeração e proteção contra superfícies que irradiem calor.",
        montanhaFrio: "Muito favorável em ambientes luminosos e ventilados, protegendo apenas contra geadas severas e encharcamento prolongado em períodos frios."
    },
    mesesFloracao: [12, 1, 2, 3, 4],
    "selosCultivo": {
        "rega": { "nivel": "moderada", "regime": "reduzir-inverno" },
        "climaFloracao": { "faixa": "ameno" }
    },
    indiceDificuldadeCultivo: {
        versao: "IDC 2.0",
        referenciaRegional: "Litoral de clima quente",
        indice: 58,
        nivel: "Moderada",
        fatores: {
            temperatura: { nota: 4, peso: 18 },
            agua: { nota: 1, peso: 15 },
            umidadeVentilacao: { nota: 1, peso: 12 },
            luminosidade: { nota: 3, peso: 8 },
            raizes: { nota: 3, peso: 15 },
            cicloRepouso: { nota: 5, peso: 12 },
            floracao: { nota: 3, peso: 20 }
        }
    },
    avaliacoes: {
        cultivo: 3,
        floracao: 3,
        perfume: 1,
        luminosidade: 5,
        agua: 2,
        raridade: 5
    }
};
