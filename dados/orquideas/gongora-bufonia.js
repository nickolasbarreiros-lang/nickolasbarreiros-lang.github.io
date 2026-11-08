// Refinamento Final — Lote 15.

export const gongoraBufonia = {
    id: "gongora-bufonia",
    nome: "Gongora bufonia",
    genero: "Gongora",
    sinonimo: "Gongora irrorata",
    tipo: "Espécie botânica",
    dificuldade: "Moderada",
    caracteristicas: ["Espécie brasileira", "Hastes pendentes", "Flores esculturais", "Perfume intenso", "Cultivo em cesto"],
    fotos: [
        "imagens/Gongora bufonia/Gongora bufonia1.jpeg",
        "imagens/Gongora bufonia/Gongora bufonia2.jpg",
        "imagens/Gongora bufonia/Gongora bufonia3.webp",
        "imagens/Gongora bufonia/Gongora bufonia4.webp"
    ],
    descricao: "Gongora bufonia é uma orquídea epífita brasileira que chama atenção pelas inflorescências longas e pendentes. Seus pseudobulbos sulcados sustentam folhas largas e plissadas, enquanto hastes que podem alcançar dezenas de centímetros exibem numerosas flores cerosas, de formato escultural e perfume marcante. As flores, descritas em referências orquidológicas com cerca de cinco centímetros, apresentam estruturas complexas associadas à polinização por abelhas das orquídeas. Nativa de florestas tropicais úmidas do Brasil, a espécie cresce apoiada em árvores, com raízes expostas à circulação de ar. O hábito floral descendente é uma característica especialmente importante de sua arquitetura natural.",
    origem: "Brasil",
    regiao: "Leste do Brasil · Mata Atlântica",
    habitat: "Florestas úmidas · sobretudo baixas altitudes.",
    clima: "Quente a intermediário · úmido e ventilado.",
    climaFloracao: "Gosta de clima quente a intermediário, umidade elevada e boa ventilação, sendo adequada ao litoral. Na montanha, proteja do frio prolongado. Regue bem durante a formação dos pseudobulbos e mantenha umidade equilibrada depois da maturação. Não precisa de repouso seco para florescer. Deixe espaço livre abaixo da planta, pois suas hastes florais são longas e pendentes.",
    iluminacao: {
        sombrite: "60% a 70%",
        solDireto: "Não permitido",
        horario: "",
        observacoes: "Prefere luminosidade moderada e filtrada, em sombra clara, sem incidência direta de sol. Um sombrite de 60% a 70% é uma referência inicial, com ventilação constante para reduzir o aquecimento das folhas. Folhas firmes e crescimento regular indicam bom equilíbrio; folhas muito escuras, crescimento frouxo e floração escassa podem sugerir sombra excessiva. Amarelecimento rápido, manchas secas e folhas muito quentes pedem maior proteção. Ajuste a claridade gradualmente, sem expor a planta ao sol direto.",
        seloLuz: "amarelo"
    },
    mesesFloracao: [1, 2, 10, 11, 12],
    floracao: "Floresce principalmente da primavera ao verão, entre outubro e fevereiro. As hastes pendentes podem alcançar cerca de 80 cm e produzir até 30 flores exóticas, de aproximadamente 5 cm, em tons bege, rosados ou avermelhados com pintas escuras. O perfume é perceptível e costuma se intensificar no fim da manhã. Cada flor permanece vistosa por cerca de dois dias e começa a murchar entre o terceiro e o quarto; o conjunto da floração pode durar aproximadamente 15 dias.",
    adubacao: "🌿 Orgânica: bokashi em pequena quantidade dentro de porta-adubo, longe dos brotos novos.\n💧 Foliar: NPK equilibrado em 1/4 a 1/3 da dose a cada 7–15 dias durante o crescimento ativo.\n🧪 Liberação lenta: somente poucos grânulos em cesto muito drenante e afastados das raízes novas.\n💦 Lavagem: uma rega abundante apenas com água limpa a cada 3–4 semanas ajuda a evitar acúmulo de sais.",
    rega: "Durante a emissão de brotos e raízes, regue abundantemente e volte a molhar antes que o conjunto fique completamente seco. As raízes gostam de umidade, mas precisam de oxigênio contínuo. Após a maturação dos pseudobulbos, aumente discretamente o intervalo conforme a evaporação, sem permitir desidratação prolongada ou enrugamento acentuado.",
    suporte: "🥇 Cesto suspenso de madeira, com fundo e laterais bem abertos.\n🥈 Cesto plástico amplamente perfurado e suspenso.\n🥉 Cachepô muito vazado, instalado alto para permitir o livre caimento das hastes.",
    substrato: ["Casca de macadâmia média + Fibra de coco lavada + Casca de arroz carbonizada + Esfagno de fibra longa solto","Casca de pinus média + Fibra de coco lavada + Casca de arroz carbonizada + Carvão vegetal médio"],
    formasCultivo: {
        perfilVisual: "gongora-epifita-hastes-pendentes",
        destaque: "Cachepô de Madeira",
        resumo: "Epífita de florestas úmidas com hastes florais longas e descendentes. Precisa de cesto suspenso e aberto, sombra clara, raízes úmidas e ventiladas, sem bloqueio da saída das inflorescências.",
        metodos: [
            { nome: "Cachepô de Madeira", asset: "cesto-madeira", estrelas: 5, status: "Mais recomendado na ficha", texto: "Cesto suspenso, com fundo e laterais abertos, para que as hastes florais atravessem livremente a estrutura." },
            { nome: "Vaso plástico vasado", asset: "vaso-plastico-vasado", estrelas: 4, status: "Alternativa suspensa", texto: "Usar cesto plástico amplamente perfurado e suspenso, sem obstruir o fundo nem a passagem das hastes." },
            { nome: "Placa / tronco", asset: "placa-tronco", estrelas: 2, status: "Uso condicional", texto: "Montagem apenas onde seja possível garantir umidade frequente e espaço livre para hastes longas." },
            { nome: "Vaso de Barro", asset: "vaso-barro", estrelas: 1, status: "Pouco indicado", texto: "Vasos convencionais podem bloquear as hastes descendentes; preferir cesto suspenso com fundo aberto." }
        ]
    },
    substratoVisual: {
        titulo: "Substrato ideal",
        contexto: "Mistura para cesto suspenso com fundo aberto",
        resumo: "Substrato grosso e arejado, com reserva moderada de umidade para raízes ativas, sem compactação ou bloqueio das hastes.",
        justificativa: "A receita 35/30/20/15 é uma proposta horticultural não homologada quantitativamente para Gongora bufonia; as fontes consultadas não demonstram superioridade experimental desta combinação. Gongora bufonia produz hastes florais descendentes e precisa de cesto suspenso com fundo livre para a passagem das flores. A fibra de coco lavada e o esfagno solto ajudam a conservar umidade, enquanto a casca de pinus e a casca de arroz carbonizada mantêm a mistura estruturada e ventilada. Não compacte o esfagno nem bloqueie a saída das hastes; ajuste as regas à secagem observada.",
        receitaTexto: "Proposta horticultural NÃO HOMOLOGADA para cesto suspenso aberto: 35% fibra de coco lavada + 30% casca de pinus média + 20% casca de arroz carbonizada + 15% esfagno de fibra longa solto.",
        perfil: ["Epífita de floresta úmida", "Pseudobulbos sulcados", "Hastes pendentes", "Umidade regular", "Fundo do cesto aberto"],
        comportamento: [
            { nome: "Retenção", valor: 4, icone: "💧" },
            { nome: "Aeração", valor: 4, icone: "💨" },
            { nome: "Secagem", valor: 2, icone: "⚡" },
            { nome: "Compactação", valor: 2, icone: "🧱" }
        ],
        itens: [
            { asset: "fibra-coco", nome: "Fibra de coco lavada", proporcao: "35%", nota: "umidade", finalidade: "Mantêm umidade moderada sem impedir a passagem das hastes." },
            { asset: "casca-pinus", nome: "Casca de pinus média", proporcao: "30%", nota: "estrutura", finalidade: "Sustenta raízes com espaços de ar." },
            { asset: "casca-arroz-carbonizada", nome: "Casca de arroz carbonizada", proporcao: "20%", nota: "aeração", finalidade: "Favorece drenagem e reduz compactação." },
            { asset: "esfagno", nome: "Esfagno de fibra longa solto", proporcao: "15%", nota: "retenção leve", finalidade: "Evita secagem completa durante o crescimento sem formar massa densa." }
        ],
        alerta: "Não bloquear o fundo do cesto, apoiar a planta onde as hastes não possam descer ou usar vaso fechado. Evitar sol forte, seca completa e calor abafado.",
        notaEvidencia: "MACS 1.1 — revisão documental: Gongora bufonia é epífita de ambiente úmido com inflorescências descendentes; priorizar cachepô de madeira suspenso, aberto no fundo e nas laterais. Receita visual e textual coincidem: 35% fibra de coco lavada + 30% pinus médio + 20% casca de arroz carbonizada + 15% esfagno de fibra longa solto = 100%. Duas alternativas qualitativas editoriais, sem percentuais, com macadâmia/esfagno ou pinus/carvão, distintas da principal; antigas proporções 40/30/20/10 constam somente do histórico da matriz, sem validação experimental. Retenção e aeração devem ser ajustadas à secagem e o fundo jamais pode obstruir as hastes. Estrelas dos suportes são heurísticas. Não há homologação quantitativa específica nem consulta individualizada a até 25 produtores brasileiros; percentuais e estrelas NÃO HOMOLOGADOS",
    },
    errosComuns: [
    "Usar vaso que bloqueia as hastes pendentes.",
    "Deixar raízes secarem por vários dias.",
    "Manter substrato constantemente encharcado.",
    "Cultivar em sombra profunda.",
    "Expor folhas ao sol direto forte.",
    "Deixar pseudobulbos abafados por substrato compacto.",
    "Movimentar a planta durante a formação das hastes.",
    "Dividir touceiras com poucas reservas."
],

    dica: "🏆 O segredo desta Gongora é deixar espaço livre abaixo da planta para suas longas inflorescências pendentes. Prefira cesto suspenso ou recipiente elevado, verificando se as hastes poderão atravessar a borda sem dobrar ou quebrar. Mantenha raízes úmidas e bem ventiladas, com luz filtrada e regas regulares durante o crescimento. Não deixe o substrato compactar nem acumular água junto aos pseudobulbos. Evite movimentar a planta quando os botões estiverem se formando, pois as hastes são delicadas.",
};
