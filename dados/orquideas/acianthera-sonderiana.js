// Ficha criada no padrão editorial atual do Orquidário Digital.
// Taxonomia: POWO/Kew + IPNI. Morfologia/distribuição: literatura florística.
// Habitat/cultivo: literatura, registros regionais e referências orquidológicas.
export const aciantheraSonderiana = {
    id: "acianthera-sonderiana",
    nome: "Acianthera sonderiana",
    genero: "Acianthera",
    tipo: "Espécie botânica",
    sinonimo: "Pleurothallis sonderiana",
    dificuldade: "Moderada",
    origem: "América do Sul",
    regiao: "Brasil (ES · MG · RJ · SP · PR · SC · RS) · Paraguai · Uruguai · Argentina (Misiones)",
    habitat: "Micro-orquídea principalmente epífita, ocasionalmente registrada como rupícola, associada a florestas úmidas, montanas, ombrófilas e matas ribeirinhas. Cresce sobre troncos e ramos em microambientes úmidos, ventilados e protegidos do sol forte.",
    descricao: "Acianthera sonderiana é uma miniatura epífita que forma pequenas touceiras de ramicaules curtos, cada um com uma folha estreita, carnosa e levemente sulcada. As inflorescências eretas apresentam geralmente duas a quatro flores diminutas, amarelo-alaranjadas, com sépalas parcialmente unidas e labelo trilobado. O conjunto pode passar despercebido à distância, mas revela detalhes delicados quando observado de perto. Encontrada em florestas úmidas da América do Sul, vive principalmente sobre troncos e galhos protegidos do sol intenso. Suas raízes finas e superficiais acompanham o suporte, característica que favorece montagens abertas, desde que a umidade ambiental não falte por períodos prolongados.",
    caracteristicas: [
        "Micro-orquídea",
        "Epífita cespitosa",
        "Folhas lineares e carnosas",
        "Flores de 4–7 mm",
        "Flores amarelo-alaranjadas",
        "Florestas úmidas e montanas",
        "Alta demanda de umidade radicular"
    ],
    fotos: [
        "imagens/Acianthera sonderiana/acianthera sonderiana1.jpg",
        "imagens/Acianthera sonderiana/acianthera sonderiana2.webp",
        "imagens/Acianthera sonderiana/acianthera sonderiana3.webp",
        "imagens/Acianthera sonderiana/acianthera sonderiana4.jpeg"
    ],
    selosCultivo: {
        rega: { nivel: "muito-frequente" },
        climaFloracao: { faixa: "intermediario" }
    },
    avaliacoes: {
        cultivo: 4,
        floracao: 4,
        perfume: 2,
        luminosidade: 2,
        agua: 5,
        raridade: 2
    },
    mesesFloracao: [2, 3, 4, 5],
    clima: "Intermediário a fresco, úmido e bem ventilado; evitar calor abafado prolongado.",
    climaFloracao: "A espécie é associada principalmente a ambientes úmidos e de temperaturas amenas. Há referências de cultivo que relatam floração em épocas variadas, mas a matriz não documenta observações mensais suficientes para atribuir todos os meses como floração comprovada. Para manter floração regular, noites menos quentes, boa umidade, ventilação constante e luz filtrada brilhante são mais importantes do que impor um repouso sazonal.",
    iluminacao: {
        sombrite: "60% a 70%; em locais muito quentes, comece próximo de 70%",
        solDireto: "Não permitido",
        horario: "",
        observacoes: "Prefere claridade filtrada e boa ventilação, sem sol direto sobre as folhas. Um sombrite de 60% a 70% é um ponto de partida para ambientes quentes; ajuste a proteção conforme a resposta da planta. A luz que atravessa a copa das árvores não equivale à exposição direta. Folhas firmes e crescimento regular indicam equilíbrio; folhas muito escuras e desenvolvimento fraco podem sugerir pouca luz, enquanto amarelecimento rápido ou manchas secas indicam excesso. Faça mudanças graduais.",
        seloLuz: "amarelo"
    },
    floracao: "Floresce principalmente de fevereiro a maio, podendo variar conforme o cultivo. As pequenas hastes formam cachos de flores que se abrem sucessivamente, de baixo para cima. Com pouco mais de 5 mm, apresentam tons amarelo-claros a alaranjados e sépalas laterais quase unidas. O perfume é muito suave, quando perceptível. Cada flor pode durar cerca de 15 dias, e a abertura sequencial prolonga a apresentação da haste.",
    adubacao: "🌿 Orgânica: bokashi em quantidade mínima, preferencialmente em sachê e sem contato direto prolongado com as raízes.\n💧 Foliar/mineral: adubo equilibrado em 1/4 da dose do fabricante a cada 10–15 dias durante crescimento ativo.\n🧪 Como as raízes são muito finas, faça lavagens periódicas com água de baixa salinidade e evite acúmulo de sais.",
    rega: "Manter as raízes regularmente úmidas, sem permitir secagem prolongada. Em placas ou pequenas montagens, pode exigir rega diária no período quente e seco; em vasos com esfagno, regar novamente quando o material começar a perder umidade superficial, sem deixá-lo compactado ou permanentemente encharcado. A combinação correta é muita disponibilidade de água com excelente oxigenação das raízes.",
    suporte: [
        "🥇 Pequena placa de cortiça, madeira ou nó de pinho com fina camada de esfagno.",
        "🥈 Vaso pequeno e muito ventilado com esfagno solto.",
        "🥉 Cachepô pequeno com mistura fina, leve e altamente aerada."
    ],
    substrato: ["Casca de pinus fina/média + Carvão vegetal pequeno + Esfagno de fibra longa solto", "Chips de coco pequenos lavados + Casca de arroz carbonizada + Esfagno de fibra longa solto"],
    formasCultivo: {
        perfilVisual: "micro-pleurothalidina",
        destaque: "Placa / tronco",
        resumo: "Miniatura predominantemente epífita, encontrada sobre troncos e galhos em ambientes úmidos. As raízes finas se beneficiam de muita aeração, mas a espécie não deve sofrer secagem prolongada, sobretudo no litoral quente.",
        metodos: [
            { nome: "Placa / tronco", asset: "acianthera-sonderiana-placa", estrelas: 5, status: "Ideal", texto: "Reproduz bem o hábito epífito natural, mantendo as raízes muito aeradas. No litoral quente, exige atenção à frequência de rega e à umidade para evitar desidratação excessiva." },
            { nome: "Árvore viva", asset: "arvore-viva", estrelas: 4, status: "Muito recomendado", texto: "Excelente alternativa em casca rugosa e local protegido, com umidade ambiental elevada e ventilação constante. Evite posições muito expostas ao sol e ao vento seco." },
            { nome: "Vaso plástico vasado", asset: "vaso-plastico-vasado", estrelas: 4, status: "Muito recomendado", texto: "É uma alternativa especialmente útil no litoral quente porque desacelera a perda de água. Use vaso pequeno, mistura muito aberta e controle rigoroso para que a umidade não se transforme em encharcamento." },
            { nome: "Cachepô de Madeira", asset: "cesto-madeira", estrelas: 3, status: "Adequado", texto: "Oferece excelente ventilação, mas seca mais rapidamente. Funciona melhor em ambiente úmido ou com regas frequentes e proteção contra vento quente." }
        ]
    },

    substratoVisual: {
        titulo: "Substrato ideal",
        contexto: "Para cultivo em vaso",
        resumo: "Mistura muito aerada, leve e com reserva hídrica moderada para raízes finas que não devem permanecer secas por longos períodos.",
        justificativa: "A mistura 35/30/20/15 é proposta horticultural não homologada quantitativamente para Acianthera sonderiana; as orientações de produtores são qualitativas. A montagem principal em placa/tronco não emprega percentuais volumétricos. Acianthera sonderiana é uma epífita de raízes finas que precisa de umidade regular e boa circulação de ar. A montagem principal em placa ou tronco utiliza apenas uma camada muito fina de esfagno solto, mantendo as raízes ventiladas. Em vaso pequeno e perfurado, a casca de pinus, a casca de arroz carbonizada e o carvão preservam espaços de ar, enquanto o esfagno ajuda a conservar umidade. Em dias quentes, observe a secagem e ajuste a frequência das regas, sem compactar a mistura.",
        receitaTexto: "Proposta horticultural NÃO HOMOLOGADA, somente para vaso pequeno e perfurado: 35% casca de pinus fina/média + 30% casca de arroz carbonizada + 20% esfagno de fibra longa solto + 15% carvão vegetal pequeno. Ajustar granulometria e rega conforme secagem observada.",
        perfil: ["Raízes finas", "Alta aeração", "Umidade constante", "Secagem moderada", "Baixa compactação", "Vaso pequeno"],
        comportamento: [
            { nome: "Retenção", valor: 3, icone: "💧" },
            { nome: "Aeração", valor: 5, icone: "💨" },
            { nome: "Secagem", valor: 3, icone: "⚡" },
            { nome: "Compactação", valor: 1, icone: "🧱" }
        ],
        itens: [
            { asset: "casca-pinus", nome: "Casca de pinus fina/média", proporcao: "35%", nota: "estrutura + umidade moderada", finalidade: "Mantém a estrutura principal do vaso sem formar uma massa compacta." },
            { asset: "casca-arroz-carbonizada", nome: "Casca de arroz carbonizada", proporcao: "30%", nota: "aeração + estabilidade", finalidade: "Aumenta macroporos, drenagem e estabilidade física da mistura." },
            { asset: "esfagno", nome: "Esfagno de fibra longa solto", proporcao: "20%", nota: "reserva hídrica", finalidade: "Protege as raízes finas contra secagem abrupta, especialmente em clima quente." },
            { asset: "carvao-vegetal", nome: "Carvão vegetal pequeno", proporcao: "15%", nota: "porosidade + durabilidade", finalidade: "Ajuda a preservar a estrutura aberta e a circulação de ar entre os componentes." }
        ],
        alerta: "Não compacte o esfagno. Em clima quente, mantenha umidade regular, mas permita boa oxigenação e drenagem; raízes finas sofrem tanto com secagem prolongada quanto com substrato abafado.",
        notaEvidencia: "MACS 1.1 — revisão documental: Acianthera sonderiana é miniatura epífita cespitosa de raízes finas, com necessidade de umidade regular e boa ventilação. Cultivo principal em placa/tronco com mínima lâmina de esfagno solto e rizoma exposto; mistura visual alternativa para vaso pequeno e perfurado: 35% pinus fino/médio + 30% casca de arroz carbonizada + 20% esfagno de fibra longa solto + 15% carvão vegetal pequeno = 100%. Receita textual e itens visuais correspondem. Exatamente duas alternativas qualitativas distintas, sem percentuais; estimativas antigas de 55/25/20 e 45/30/25 não integram as receitas exibidas. Em clima quente monitorar secagem e evitar esfagno compactado. Classificações de suportes são heurísticas, não resultados experimentais. Não foram documentados ensaios quantitativos específicos nem consulta individualizada a até 25 produtores brasileiros; percentuais e estrelas NÃO HOMOLOGADOS",
    }
};
