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
    descricao: "Uma das orquídeas brasileiras mais curiosas quando entra em flor! Gongora bufonia forma pseudobulbos sulcados com folhas largas e plissadas, mas o grande espetáculo aparece abaixo da planta: hastes pendentes de 40 a 80 cm carregadas de flores cerosas, perfumadas e de formato quase escultórico, com cerca de 5 cm. É uma espécie de florestas úmidas do leste do Brasil, principalmente de baixa altitude, e por isso se adapta bem ao calor quando recebe sombra clara, raízes sempre arejadas e umidade regular. Seu perfume intenso faz parte de uma estratégia de polinização ligada às abelhas-das-orquídeas.",
    origem: "Brasil",
    regiao: "Leste do Brasil · Mata Atlântica",
    habitat: "Florestas úmidas · sobretudo baixas altitudes.",
    clima: "Quente a intermediário · úmido e ventilado.",
    climaFloracao: "A espécie cresce melhor com água e nutrição regulares enquanto os novos brotos e pseudobulbos estão se formando. A combinação de baixa altitude, floresta úmida e inflorescência longa indica que calor não é problema por si só; o verdadeiro risco no litoral é o abafamento acompanhado de substrato saturado. Depois que o pseudobulbo amadurece, mantenha a umidade, mas reduza apenas o excesso de água em períodos mais frios e nublados. Não existe repouso seco rígido.",
    iluminacao: {
        sombrite: "60% a 70%",
        solDireto: "Não permitido",
        horario: "",
        observacoes: "Prefere sombra clara. Folhas muito escuras e crescimento frouxo sugerem pouca luz; amarelecimento, áreas secas ou aquecimento forte das folhas indicam excesso. Em clima quente, ventilação é tão importante quanto o sombreamento."
    },
    floracao: "Mais frequente do fim do inverno à primavera, podendo avançar para o início do verão conforme o microclima e o amadurecimento dos pseudobulbos. As hastes pendentes podem alcançar 40–80 cm e carregar numerosas flores perfumadas.",
    adubacao: "🌿 Orgânica: bokashi em pequena quantidade dentro de porta-adubo, longe dos brotos novos.\n💧 Foliar: NPK equilibrado em 1/4 a 1/3 da dose a cada 7–15 dias durante o crescimento ativo.\n🧪 Liberação lenta: somente poucos grânulos em cesto muito drenante e afastados das raízes novas.\n💦 Lavagem: uma rega abundante apenas com água limpa a cada 3–4 semanas ajuda a evitar acúmulo de sais.",
    rega: "Durante a emissão de brotos e raízes, regue abundantemente e volte a molhar antes que o conjunto fique completamente seco. As raízes gostam de umidade, mas precisam de oxigênio contínuo. Após a maturação dos pseudobulbos, aumente discretamente o intervalo conforme a evaporação, sem permitir desidratação prolongada ou enrugamento acentuado.",
    suporte: "🥇 Cesto suspenso de madeira, com fundo e laterais bem abertos.\n🥈 Cesto plástico amplamente perfurado e suspenso.\n🥉 Cachepô muito vazado, instalado alto para permitir o livre caimento das hastes.",
    substrato: ["40% Casca de macadâmia — média + 30% Fibra de coco — preparada + 20% Casca de arroz carbonizada + 10% Esfagno — fibra longa (solto)","40% Casca de pinus — média + 30% Fibra de coco — preparada + 20% Casca de arroz carbonizada + 10% Carvão vegetal — médio"],
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
        justificativa: "Gongora bufonia possui hastes florais descendentes, exigindo cesto suspenso de fundo aberto e passagem desobstruída. A receita visual para esse recipiente combina fibra de coco preparada, pinus médio, casca de arroz carbonizada e esfagno de fibra longa solto, totalizando 100%, com retenção moderada e espaços de ar. As duas alternativas são receitas editoriais distintas, 40/30/20/10 por volume, uma com macadâmia e esfagno e outra com pinus e carvão. Seus percentuais não são homologados. Não compactar esfagno nem bloquear a saída das hastes. MACS 1.1: proporções horticulturais provisórias, sem homologação quantitativa específica.",
        receitaTexto: "35% fibra de coco preparada + 30% casca de pinus média + 20% casca de arroz carbonizada + 15% esfagno de fibra longa solto.",
        perfil: ["Epífita de floresta úmida", "Pseudobulbos sulcados", "Hastes pendentes", "Umidade regular", "Fundo do cesto aberto"],
        comportamento: [
            { nome: "Retenção", valor: 4, icone: "💧" },
            { nome: "Aeração", valor: 4, icone: "💨" },
            { nome: "Secagem", valor: 2, icone: "⚡" },
            { nome: "Compactação", valor: 2, icone: "🧱" }
        ],
        itens: [
            { asset: "fibra-coco", nome: "Fibra de coco preparada", proporcao: "35%", nota: "umidade", finalidade: "Mantêm umidade moderada sem impedir a passagem das hastes." },
            { asset: "casca-pinus", nome: "Casca de pinus média", proporcao: "30%", nota: "estrutura", finalidade: "Sustenta raízes com espaços de ar." },
            { asset: "casca-arroz-carbonizada", nome: "Casca de arroz carbonizada", proporcao: "20%", nota: "aeração", finalidade: "Favorece drenagem e reduz compactação." },
            { asset: "esfagno", nome: "Esfagno de fibra longa solto", proporcao: "15%", nota: "retenção leve", finalidade: "Evita secagem completa durante o crescimento sem formar massa densa." }
        ],
        alerta: "Não bloquear o fundo do cesto, apoiar a planta onde as hastes não possam descer ou usar vaso fechado. Evitar sol forte, seca completa e calor abafado.",
        notaEvidencia: "MACS 1.1 — revisão documental: Gongora bufonia é epífita de ambiente úmido com inflorescências descendentes; priorizar cachepô de madeira suspenso, aberto no fundo e nas laterais. Receita visual e textual coincidem: 35% fibra de coco preparada + 30% pinus médio + 20% casca de arroz carbonizada + 15% esfagno de fibra longa solto = 100%. Duas alternativas quantitativas editoriais, ambas 40/30/20/10 por volume, com macadâmia/esfagno ou pinus/carvão, distintas da principal e sem validação experimental. Retenção e aeração devem ser ajustadas à secagem e o fundo jamais pode obstruir as hastes. Estrelas dos suportes são heurísticas. Não há homologação quantitativa específica nem consulta individualizada a até 25 produtores brasileiros; percentuais e estrelas NÃO HOMOLOGADOS",
    }
};
