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
        "Flores grandes e cerosas",
        "Perfumada",
    ],
    fotos: [
        "imagens/Bifrenaria harrisoniae/Bifrenaria harrisoniae1.webp",
        "imagens/Bifrenaria harrisoniae/Bifrenaria harrisoniae2.jpg",
        "imagens/Bifrenaria harrisoniae/Bifrenaria harrisoniae3.jpg",
        "imagens/Bifrenaria harrisoniae/Bifrenaria harrisoniae4.jpg",
    ],
    descricao: "Bifrenaria harrisoniae (Hook.) Rchb.f. é uma espécie botânica brasileira de porte médio a grande, nativa principalmente das regiões Sudeste e Sul. Forma pseudobulbos robustos e agrupados, sustentando folhas firmes e coriáceas. As inflorescências são basais, curtas e normalmente carregam poucas flores grandes, carnosas e cerosas, em geral claras, com labelo contrastante rosa a arroxeado. As flores podem atingir aproximadamente 7 a 8 cm e apresentar perfume agradável, por vezes com notas frutadas.",
    origem: "Endêmica do Brasil.",
    regiao: "Regiões Sudeste e Sul, associada à Mata Atlântica, serras costeiras e ambientes rochosos.",
    habitat: "Epífita ou rupícola de florestas úmidas, encostas rochosas e paredões claros e ventilados. Ocorre em ampla variação altitudinal, com registros típicos em cotas médias e também populações rupícolas mais elevadas.",
    clima: "Quente a intermediário durante o crescimento, com boa ventilação e noites mais frescas favorecendo a maturação e a floração.",
    climaFloracao: "A floração depende de pseudobulbos completamente maduros, alta luminosidade filtrada, raízes bem ventiladas e leve redução da frequência de rega após o crescimento. Não necessita de repouso seco rigoroso; a planta deve permanecer hidratada sem substrato constantemente molhado.",
    iluminacao: {
        sombrite: "40% a 50%",
        solDireto: "Sim, suave e com aclimatação",
        horario: "Primeiras horas da manhã",
        observacoes: "Necessita luminosidade alta. Folhas muito escuras e pseudobulbos alongados sugerem excesso de sombra; uma leve pigmentação avermelhada pode ser normal, enquanto manchas secas e amareladas indicam queimadura."
    },
    floracao: "Floresce principalmente do final da primavera ao verão, com referência prática entre novembro e fevereiro.",
    adubacao: "🌿 Orgânica: bokashi em pequena dose durante o crescimento ativo, protegido em porta-adubo.\n💧 Foliar/mineral: NPK equilibrado em baixa concentração enquanto houver brotação e raízes em atividade.\n🧪 Liberação lenta: Osmocote em dose reduzida no início da fase vegetativa. Após a maturação dos pseudobulbos, reduza significativamente a frequência e a concentração da adubação; retome o ritmo normal quando novas raízes e brotos surgirem.",
    rega: "Regue abundantemente durante a brotação e desenvolvimento dos pseudobulbos, permitindo secagem parcial do substrato entre irrigações. Após a maturação, aumente gradualmente o intervalo entre as regas, sem manter a planta completamente seca por longos períodos nem permitir enrugamento severo.",
    suporte: "Cesto de madeira suspenso é a escolha principal. Vaso de barro e vaso plástico vasado também funcionam muito bem quando a mistura é extremamente drenante.",
    formasCultivo: {
        perfilVisual: "bifrenaria",
        destaque: "Cesto de madeira",
        resumo: "Bifrenaria brasileira de hábito epífito e rupícola, favorecida por cultivo muito drenante, raízes intensamente ventiladas e secagem rápida após as regas.",
        metodos: [
            { nome: "Cesto de madeira", asset: "bifrenaria-harrisoniae-cesto", estrelas: 5, status: "Ideal", texto: "É a combinação mais segura entre sustentação da touceira, drenagem rápida e ventilação intensa das raízes, especialmente em clima quente e úmido." },
            { nome: "Vaso de barro", asset: "vaso-barro", estrelas: 4, status: "Muito recomendado", texto: "Boa estabilidade e troca gasosa, com secagem mais rápida da mistura e menor risco de umidade persistente junto aos pseudobulbos." },
            { nome: "Vaso plástico vasado", asset: "vaso-plastico-vasado", estrelas: 4, status: "Muito recomendado", texto: "As aberturas laterais favorecem forte circulação de ar e drenagem; exige acompanhamento da secagem no período quente." },
            { nome: "Placa / tronco", asset: "placa-tronco", estrelas: 4, status: "Muito recomendado", texto: "Compatível com o hábito epífito e proporciona excelente oxigenação, mas requer regas mais frequentes porque praticamente não existe reserva hídrica." }
        ]
    },
    substrato: [
        "Brita pequena/média + casca de macadâmia média + carvão vegetal médio.",
        "Brita pequena/média + casca de pinus média + carvão vegetal médio.",
        "Brita pequena/média + casca de arroz carbonizada + carvão vegetal médio + casca de macadâmia média.",
        "Brita pura, com rega e adubação ajustadas ao cultivo mineral de baixíssima retenção."
    ],
    substratoVisual: {
        titulo: "Substrato ideal",
        contexto: "Para cultivo em cesto ou vaso",
        resumo: "Mistura de altíssima aeração e drenagem, com baixa retenção e estrutura durável.",
        justificativa: "Bifrenaria harrisoniae exige excelente oxigenação radicular e não deve permanecer com as raízes molhadas por longos períodos. A brita mantém drenagem e macroporos permanentes; a macadâmia acrescenta estrutura orgânica durável; o carvão ajuda a conservar a mistura aberta; e o pinus entra apenas como fração minoritária para oferecer pequena reserva de umidade sem comprometer a aeração.",
        receitaTexto: "35% brita pequena/média + 30% casca de macadâmia média + 20% carvão vegetal médio + 15% casca de pinus média.",
        perfil: ["Raízes finas a médias", "Aeração máxima", "Baixa retenção", "Secagem muito rápida", "Alta estabilidade", "Baixa compactação"],
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
        alerta: "Não mantenha as raízes permanentemente molhadas. Regue abundantemente durante o crescimento ativo e permita secagem clara entre regas. Em cestos muito ventilados, ajuste a frequência de rega sem recorrer a materiais excessivamente retentivos."
    },
    errosComuns: "Cultivar em sombra excessiva; usar vaso muito maior que a massa radicular; manter o substrato constantemente molhado; empregar misturas finas ou compactadas; reduzir as regas antes da maturação dos pseudobulbos; replantar sem início de novas raízes; impor repouso seco severo; suspender nutrientes de forma abrupta enquanto ainda houver crescimento ativo.",
    dica: "Priorize cesto ou recipiente proporcional, estável e de secagem previsível. O ponto decisivo é evitar excesso de substrato úmido ao redor das raízes. Combine alta luminosidade filtrada, drenagem excelente, estabilidade radicular e preservação de touceiras adultas.",
    adaptacaoRegional: {
        litoralQuente: "Prefira cesto de madeira, vaso de barro ou vaso plástico vasado, sempre com forte circulação de ar, 40% a 50% de sombra e regas matinais. Em Serra/ES, evite calor abafado e mantenha a mistura de secagem rápida sem impor seca prolongada.",
        montanhaFrio: "A queda natural da temperatura noturna favorece a floração. Proteja de geadas e evite que o substrato permaneça frio e encharcado por vários dias."
    },
    mesesFloracao: [11, 12, 1, 2],
    avaliacoes: {
        cultivo: 3,
        floracao: 4,
        perfume: 3,
        luminosidade: 4,
        agua: 3,
        raridade: 3
    }
};