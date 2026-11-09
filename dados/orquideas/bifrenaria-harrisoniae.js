// Ficha científica e de cultivo refinada e enriquecida.

export const bifrenariaHarrisoniae = {
    id: "bifrenaria-harrisoniae",
    nome: "Bifrenaria harrisoniae",
    genero: "Bifrenaria",
    tipo: "Espécie botânica",
    dificuldade: "Moderada",
    caracteristicas: [
        "Brasileira",
        "Epífita ou rupícola",
        "Flores grandes, geralmente uma ou duas por haste",
        "Pseudobulbos unifoliados, sulcados",
        "Perfumada",
    ],
    fotos: [
        "imagens/Bifrenaria harrisoniae/Bifrenaria harrisoniae1.webp",
        "imagens/Bifrenaria harrisoniae/Bifrenaria harrisoniae2.jpg",
        "imagens/Bifrenaria harrisoniae/Bifrenaria harrisoniae3.jpg",
        "imagens/Bifrenaria harrisoniae/Bifrenaria harrisoniae4.jpg",
    ],
    descricao: "Bifrenaria harrisoniae é uma orquídea brasileira de porte médio, com pseudobulbos robustos, angulosos e sulcados, cada um sustentando uma única folha longa e pregueada. Suas hastes florais curtas nascem na base dos crescimentos recentes e geralmente apresentam uma ou duas flores grandes, de aproximadamente sete a oito centímetros. Sépalas e pétalas claras emolduram um labelo aveludado, rosado a púrpura, que destaca o conjunto. As flores exalam perfume adocicado, por vezes lembrando frutas ou mel, especialmente à tarde. Na natureza, a espécie habita árvores e afloramentos rochosos de florestas úmidas, formando touceiras entre fendas e superfícies expostas.",
    origem: "Brasil — regiões Sudeste e Sul",
    regiao: "Regiões Sudeste e Sul, associada à Mata Atlântica, serras costeiras e ambientes rochosos.",
    habitat: "Epífita ou rupícola de florestas úmidas, encostas rochosas e paredões claros e ventilados. Ocorre em ampla variação altitudinal, com registros típicos em cotas médias e também populações rupícolas mais elevadas.",
    clima: "Quente a intermediário durante o crescimento, com boa ventilação; a exigência de noites mais frescas para indução floral não foi demonstrada especificamente nesta matriz.",
    climaFloracao: "Gosta de bastante claridade, ventilação e pseudobulbos bem maduros. Pode florescer no litoral e na montanha, desde que tenha boa circulação de ar. Um inverno mais seco ajuda a estimular as flores: reduza as regas depois da maturação e volte a regar com mais frequência quando surgirem novos brotos. Evite manter as raízes molhadas continuamente nessa fase, sem deixar os pseudobulbos murcharem.",
    iluminacao: {
        sombrite: "40% a 50%",
        solDireto: "Permitido com restrição",
        horario: "Somente início da manhã",
        observacoes: "Gosta de bastante claridade para formar pseudobulbos fortes e florescer bem. Comece com sombrite de 40% a 50%, mantendo boa ventilação e observando o aquecimento das folhas nos dias mais quentes. Quando estiver acostumada ao local, pode receber sol direto suave somente no início da manhã. Folhas firmes, de verde médio a verde-claro, indicam bom equilíbrio; folhas muito escuras e brotações alongadas podem revelar falta de luz. Uma discreta pigmentação avermelhada pode ocorrer, mas amarelecimento intenso ou manchas secas pedem mais proteção.",
        seloLuz: "vermelho"
    },
    floracao: "Floresce principalmente de setembro a novembro. As hastes curtas surgem junto aos pseudobulbos e produzem de uma a três flores grandes, com cerca de 7 a 8 cm. Sépalas e pétalas brancas ou creme contrastam com o labelo aveludado, rosado a púrpura. O perfume é doce, com notas que podem lembrar frutas, mel e especiarias, mais perceptível no fim da tarde. A floração dura aproximadamente 15 a 20 dias.",
    adubacao: "🌿 Orgânica: bokashi em pequena dose durante o crescimento ativo, protegido em porta-adubo.\n💧 Foliar/mineral: NPK equilibrado em baixa concentração enquanto houver brotação e raízes em atividade.\n🧪 Liberação lenta: Osmocote em dose reduzida no início da fase vegetativa. Após a maturação dos pseudobulbos, reduza significativamente a frequência e a concentração da adubação; retome o ritmo normal quando novas raízes e brotos surgirem.",
    rega: "Regue abundantemente durante a brotação e desenvolvimento dos pseudobulbos, permitindo secagem parcial do substrato entre irrigações. Após a maturação, aumente gradualmente o intervalo entre as regas, sem manter a planta completamente seca por longos períodos nem permitir enrugamento severo.",
    suporte: "Cachepô de madeira suspenso é a escolha principal. Vaso de barro e vaso plástico vasado também funcionam muito bem quando a mistura é extremamente drenante.",
    formasCultivo: {
        perfilVisual: "bifrenaria",
        destaque: "Cachepô de Madeira",
        resumo: "Bifrenaria brasileira de hábito epífito e rupícola, favorecida por cultivo muito drenante, raízes intensamente ventiladas e secagem rápida após as regas.",
        metodos: [
            { nome: "Cachepô de Madeira", asset: "bifrenaria-harrisoniae-cesto", estrelas: 5, status: "Ideal", texto: "É a combinação mais segura entre sustentação da touceira, drenagem rápida e ventilação intensa das raízes, especialmente em clima quente e úmido." },
            { nome: "Vaso de Barro", asset: "vaso-barro", estrelas: 4, status: "Muito recomendado", texto: "Boa estabilidade e troca gasosa, com secagem mais rápida da mistura e menor risco de umidade persistente junto aos pseudobulbos." },
            { nome: "Vaso plástico vasado", asset: "vaso-plastico-vasado", estrelas: 4, status: "Muito recomendado", texto: "As aberturas laterais favorecem forte circulação de ar e drenagem; exige acompanhamento da secagem no período quente." },
            { nome: "Placa / tronco", asset: "placa-tronco", estrelas: 4, status: "Muito recomendado", texto: "Compatível com o hábito epífito e proporciona excelente oxigenação, mas requer regas mais frequentes porque o suporte praticamente não retém água, embora os pseudobulbos armazenem reservas." }
        ]
    },
    substrato: ["Brita pequena/média + casca de macadâmia média + carvão vegetal médio","Brita pequena/média + casca de pinus média + carvão vegetal médio"],
    substratoVisual: {
        titulo: "Substrato ideal",
        contexto: "Para cultivo em cesto ou vaso",
        resumo: "Mistura de altíssima aeração e drenagem, com baixa retenção e estrutura durável.",
        justificativa: "A mistura 35/30/20/15 é proposta horticultural não homologada experimentalmente para Bifrenaria harrisoniae; o hábito rupícola não comprova que 35% de brita seja ideal. Bifrenaria harrisoniae se beneficia de substrato aberto e de cesto ou vaso bem perfurado. A brita contribui para drenagem e estabilidade, a casca de macadâmia oferece apoio, o carvão mantém espaços de ar e o pinus conserva uma pequena reserva de umidade. Como a brita aumenta o peso do conjunto, escolha um suporte firme. Ajuste as regas conforme a secagem e a ventilação do local.",
        receitaTexto: "Proposta horticultural NÃO HOMOLOGADA para a espécie: 35% brita pequena/média + 30% casca de macadâmia média + 20% carvão vegetal médio + 15% casca de pinus média. Mistura para recipiente, sem esfagno; ajustar a rega à secagem observada.",
        perfil: ["Raízes médias a robustas", "Aeração máxima", "Baixa retenção", "Secagem muito rápida", "Alta estabilidade", "Baixa compactação"],
        itens: [
            { asset: "brita-pura", nome: "Brita pequena/média", proporcao: "35%", nota: "drenagem + macroporos", finalidade: "Forma a base mineral da mistura e mantém drenagem muito rápida, oxigenação intensa e estabilidade estrutural." },
            { asset: "macadamia", nome: "Casca de macadâmia média", proporcao: "30%", nota: "estrutura + durabilidade", finalidade: "Mantém grandes espaços de ar e fornece uma fração orgânica estrutural de degradação lenta." },
            { asset: "carvao-vegetal", nome: "Carvão vegetal médio", proporcao: "20%", nota: "aeração + estabilidade", finalidade: "Ajuda a manter o substrato aberto e reduz a tendência de compactação ao longo do cultivo." },
            { asset: "casca-pinus", nome: "Casca de pinus média", proporcao: "15%", nota: "pequena reserva hídrica", finalidade: "Entra apenas como fração minoritária, oferecendo alguma retenção entre regas sem manter as raízes constantemente úmidas." }
        ],
        comportamento: [
            { nome: "Retenção", valor: 1, icone: "💧" },
            { nome: "Aeração", valor: 5, icone: "💨" },
            { nome: "Secagem", valor: 5, icone: "☀️" },
            { nome: "Compactação", valor: 1, icone: "🧱" }
        ],
        alerta: "Não mantenha as raízes permanentemente molhadas. Regue abundantemente durante o crescimento ativo e permita secagem clara entre regas. Em cestos muito ventilados, ajuste a frequência de rega sem recorrer a materiais excessivamente retentivos.",
        notaEvidencia: "MACS 1.1 — revisão documental: Bifrenaria harrisoniae, epífita/rupícola de pseudobulbos robustos, requer drenagem forte, secagem entre regas e raízes ventiladas. Suportes cachepô madeira 5 estrelas, barro, plástico vasado e placa/tronco 4; estrelas NÃO HOMOLOGADAS. Receita visual 35% brita pequena/média + 30% macadâmia média + 20% carvão médio + 15% pinus médio = 100%; receitaTexto e itens concordam, sem esfagno conforme regra Bifrenaria. A receita principal visual coincide com a textual; mantidas apenas duas alternativas qualitativas distintas, sem a terceira mistura com arroz carbonizado. Justificativa técnica coerente como hipótese, não evidência de proporções homologadas. Validar efeito de 35% brita no peso/estabilidade, retenção de 15% pinus e secagem conforme recipiente; não foram verificadas nesta passagem receitas quantitativas específicas de produtores brasileiros, e a meta de até 25 produtores não foi atingida. POWO aceita a espécie e registra ocorrência no Sudeste e Sul do Brasil; Smithsonian confirma pseudobulbos unifoliados, flores brancas com labelo púrpura, até duas por haste e 7–8 cm. Percentuais NÃO HOMOLOGADOS."
    },
    errosComuns: [
    "Cultivar em sombra excessiva e prejudicar a floração.",
    "Usar vaso muito maior que as raízes.",
    "Manter o substrato constantemente molhado.",
    "Usar mistura fina que impede a aeração.",
    "Reduzir regas antes de amadurecer o pseudobulbo.",
    "Replantar antes do surgimento de raízes novas.",
    "Impor repouso seco severo.",
    "Dividir touceiras pequenas antes de acumularem reservas."
],
    dica: "🏆 A diferença nesta espécie está em combinar claridade elevada com raízes que sequem sem ficar abafadas. Seus pseudobulbos robustos permitem alguma oscilação de umidade, mas não justificam abandono das regas durante o crescimento. Use vaso ou cesto estável, com substrato grosso e drenagem rápida, e evite replantar enquanto não houver novas raízes. Aumente a luz gradualmente, observando a folhagem para prevenir queimaduras. Preserve uma touceira madura: divisões frequentes reduzem o vigor e podem atrasar a floração.",
    adaptacaoRegional: {
        litoralQuente: "Prefira cesto de madeira, vaso de barro ou vaso plástico vasado, sempre com forte circulação de ar, 40% a 50% de sombra e regas matinais. Evite calor abafado e mantenha a mistura de secagem rápida sem impor seca prolongada.",
        montanhaFrio: "Proteja de geadas e evite que o substrato permaneça frio e encharcado por vários dias. Não há comprovação específica nesta matriz de que a queda térmica noturna seja obrigatória para florescer."
    },
    mesesFloracao: [9, 10, 11],
    avaliacoes: {
        cultivo: 3,
        floracao: 4,
        perfume: 3,
        luminosidade: 4,
        agua: 3,
        raridade: 3
    }
    selosCultivo: {
        rega: { nivel: "moderada", regime: "reduzir-inverno" },
        climaFloracao: { faixa: "intermediario" }
    },

};