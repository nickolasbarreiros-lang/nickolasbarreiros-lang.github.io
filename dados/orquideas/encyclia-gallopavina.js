// Refinamento final — revisão consolidada com fontes botânicas e de cultivo.

export const encycliaGallopavina = {
    id: "encyclia-gallopavina",
    nome: "Encyclia gallopavina",
    genero: "Encyclia",
    sinonimo: "Encyclia purpurachyla",
    tipo: "Espécie botânica",
    dificuldade: "Moderada",
    caracteristicas: [
        "Espécie brasileira",
        "Sudeste do Brasil",
        "Epífita da Mata Atlântica",
        "Pseudobulbos robustos",
        "Inflorescência ereta e ramificada",
        "Flores cerosas",
        "Perfumada",
        "Boa luminosidade"
    ],
    fotos: [
        "imagens/Encyclia gallopavina/Encyclia gallopavina1.webp",
        "imagens/Encyclia gallopavina/Encyclia gallopavina2.jpeg",
        "imagens/Encyclia gallopavina/Encyclia gallopavina3.jpg",
        "imagens/Encyclia gallopavina/Encyclia gallopavina4.jpeg"
    ],
    descricao: "Uma Encyclia brasileira de presença marcante! Encyclia gallopavina forma pseudobulbos fortes, folhas firmes e hastes eretas que podem se ramificar e carregar várias flores cerosas. A combinação de tons verdes, castanhos e púrpura com o labelo mais claro dá às flores um desenho muito característico, acompanhado por perfume perceptível sobretudo nas horas mais amenas. É uma espécie do Sudeste brasileiro associada à Mata Atlântica úmida. Em cultivo, responde muito bem a alta luminosidade filtrada, circulação constante de ar e ciclos claros de molhar e secar nas raízes.",
    origem: "Brasil.",
    regiao: "Sudeste brasileiro.",
    habitat: "Mata Atlântica úmida · epífita.",
    clima: "Quente a intermediário · ventilado.",
    climaFloracao: "POWO associa a espécie ao bioma tropical úmido do Sudeste brasileiro, enquanto referências de cultivo a tratam como planta de luminosidade relativamente alta e crescimento quente. A floração tende a acompanhar a maturação completa dos pseudobulbos e pode ocorrer da primavera ao verão. Uma leve redução das regas após o amadurecimento pode ajudar, mas não deve ser transformada em repouso seco rígido.",
    iluminacao: {
        sombrite: "40% a 50%",
        solDireto: "Sim, suave",
        horario: "Até cerca de 09:00",
        observacoes: "Prefere claridade alta e filtrada. Folhas muito escuras e vegetação alongada indicam falta de luz; amarelecimento intenso ou queimaduras mostram excesso de sol/calor."
    },
    floracao: "Mais comum na primavera e no verão, aproximadamente entre outubro e fevereiro, variando conforme procedência, clima e maturação dos pseudobulbos. As inflorescências terminais podem ser eretas ou levemente arqueadas e, em plantas vigorosas, apresentar ramificações e várias flores duráveis.",
    adubacao: "🌿 Orgânica: bokashi leve na borda do vaso a cada 60–90 dias durante crescimento ativo.\n💧 Mineral/Foliar: NPK equilibrado em 1/4 a 1/3 da dose semanal ou quinzenalmente durante brotação e enraizamento.\n🌱 Maturação: reduza excesso de nitrogênio quando o pseudobulbo estiver completo.\n🧪 Liberação lenta: pode ser usada em pequena quantidade em vasos muito drenantes.\n🚿 Lavagem: faça regas periódicas somente com água para remover sais.",
    rega: "Regue abundantemente durante a formação de novos brotos e raízes, sempre permitindo drenagem completa. Após o pseudobulbo amadurecer, aumente um pouco o intervalo entre regas, sem desidratar severamente a planta. No litoral quente, ajuste a frequência pela velocidade real de secagem, não pelo calendário.",
    suporte: "🥇 Cachepô de madeira bem vazado — excelente aeração para raízes grossas.\n🥈 Vaso pequeno de barro — ajuda na evaporação e estabilidade.\n🥉 Placa de cortiça ou madeira — boa opção em ambientes úmidos e com regas frequentes.",
    substrato: "🥇 Casca de macadâmia média + pinus médio + pedra-pomes + carvão vegetal.\n🥈 Casca de macadâmia + argila expandida + carvão vegetal + pinus grosso.\n🥉 Chips de coco grossos + pedra-pomes + carvão + pinus médio, com secagem clara entre regas.\n⭐ Alternativa: Pinus médio/grosso + pedra-pomes + carvão + chips de coco em baixa proporção.",
    errosComuns: "Cultivar em sombra; vaso grande demais; substrato velho; raízes continuamente encharcadas; enterrar o rizoma; reduzir água cedo demais durante crescimento; excesso de nitrogênio após a maturação; replantar sem raízes novas; calor abafado com substrato molhado; impor seca rigorosa por longos períodos.",
    dica: "Espere o novo pseudobulbo terminar de crescer antes de diminuir discretamente a frequência das regas. O objetivo é marcar uma mudança de estação sem desidratar a planta. Em Litoral de clima quente, o melhor estímulo para florir costuma ser luz alta filtrada + pseudobulbo maduro + raízes bem aeradas, e não seca extrema.",
    adaptacaoRegional: {
        litoralQuente: { nota: 5, texto: "Desde que receba ventilação contínua, alta luminosidade filtrada e secagem rápida do substrato. Evite calor parado e noites com raízes saturadas." },
        montanhaFrio: { nota: 3, texto: "Em períodos frios e nublados, reduza a frequência das regas para acompanhar a menor evaporação." }
    },
    mesesFloracao: [10, 11, 12, 1, 2],
    "selosCultivo": {
        "rega": { "nivel": "moderada" },
        "climaFloracao": { "faixa": "quente", "floraNoCalor": true }
    },
    indiceDificuldadeCultivo: {
        versao: "IDC 2.0",
        referenciaRegional: "Litoral de clima quente",
        indice: 37,
        nivel: "Moderada",
        fatores: {
            temperatura: { nota: 0, peso: 18 },
            agua: { nota: 1, peso: 15 },
            umidadeVentilacao: { nota: 1, peso: 12 },
            luminosidade: { nota: 2, peso: 8 },
            raizes: { nota: 1, peso: 15 },
            cicloRepouso: { nota: 4, peso: 12 },
            floracao: { nota: 4, peso: 20 }
        }
    },
    avaliacoes: {
        cultivo: 2,
        floracao: 4,
        perfume: 3,
        luminosidade: 4,
        agua: 3,
        raridade: 3
    }
};
