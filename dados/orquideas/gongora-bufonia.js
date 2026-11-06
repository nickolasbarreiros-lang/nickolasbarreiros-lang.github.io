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
    climaFloracao: "A espécie cresce melhor com água e nutrição regulares enquanto os novos brotos e pseudobulbos estão se formando. A combinação de baixa altitude, floresta úmida e inflorescência longa indica que calor não é problema por si só; o verdadeiro risco no litoral é o abafamento acompanhado de substrato saturado. Depois que o pseudobulbo amadurece, mantenha a umidade, mas reduza apenas o excesso de água em períodos mais frios e nublados. Não existe repouso seco rígido.",
    iluminacao: {
        sombrite: "60% a 70%",
        solDireto: "Não permitido",
        horario: "Não permitido",
        observacoes: "Prefere sombra clara. Folhas muito escuras e crescimento frouxo sugerem pouca luz; amarelecimento, áreas secas ou aquecimento forte das folhas indicam excesso. Em clima quente, ventilação é tão importante quanto o sombreamento."
    },
    mesesFloracao: [1, 2, 10, 11, 12],
    floracao: "No Brasil, Gongora bufonia floresce principalmente na primavera e no verão, com registros científicos em outubro e novembro e relatos de cultivo que estendem a janela até fevereiro. Os meses de outubro a fevereiro representam observações de diferentes plantas e locais, não floração contínua de uma mesma haste. Suas inflorescências pendentes podem chegar a cerca de 80 cm e carregar até três dezenas de flores exóticas, de aproximadamente 5 cm, em tons bege, rosados ou avermelhados com pintas mais escuras. São perfumadas: um estudo brasileiro confirmou que a fragrância aumenta de intensidade no fim da manhã, por volta das 11 horas, atraindo abelhas polinizadoras, mas não estabeleceu uma comparação sensorial segura com aromas cotidianos. No mesmo estudo, as flores permaneceram em plena atividade por cerca de dois dias e começaram a murchar entre o terceiro e o quarto dia. Um cultivador brasileiro relata aproximadamente 15 dias para o conjunto da floração, valor que não deve ser confundido com a duração de cada flor.",
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
    }
};
