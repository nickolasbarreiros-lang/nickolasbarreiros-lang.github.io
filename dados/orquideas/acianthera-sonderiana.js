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
    descricao: "Micro-orquídea cespitosa que forma pequenas touceiras compactas. Os ramicaules são cilíndricos e curtos, geralmente com cerca de 0,5–5 cm, portando uma única folha linear, carnosa e sulcada. As folhas medem aproximadamente 1–3 cm. As inflorescências são curtas e eretas, normalmente com 2–4 pequenas flores amarelo-alaranjadas a alaranjadas. As flores medem cerca de 4–7 mm, com sépalas laterais parcialmente unidas formando sinsépalo e labelo trilobado. O conjunto é diminuto, mas pode produzir várias inflorescências em uma touceira bem estabelecida.",
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
    mesesFloracao: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    clima: "Intermediário a fresco, úmido e bem ventilado; evitar calor abafado prolongado.",
    climaFloracao: "A espécie é associada principalmente a ambientes úmidos e de temperaturas amenas. Há registros de floração em diferentes épocas e referências de cultivo relatam floração livre ao longo do ano. Para manter floração regular, noites menos quentes, boa umidade, ventilação constante e luz filtrada brilhante são mais importantes do que impor um repouso sazonal.",
    iluminacao: {
        sombrite: "60% a 70%",
        solDireto: "Permitido com restrição",
        horario: "Somente início da manhã",
        observacoes: "Prefere luz filtrada de baixa a média intensidade. Referências de cultivo situam a espécie aproximadamente em 1.500–2.500 foot-candles e há cultivo comercial bem-sucedido sob cerca de 70% de sombreamento. Pode tolerar incidência muito suave nas primeiras horas da manhã quando aclimatada, mas o sol forte e o aquecimento das folhas devem ser evitados."
    },
    floracao: "Pode florescer em diferentes épocas do ano. Há registros florísticos e de cultivo que variam entre inverno, primavera/verão e floração livre; por isso a ficha não restringe a espécie a uma única estação. Inflorescências curtas, geralmente com 2–4 flores, surgem em plantas maduras e bem hidratadas.",
    adubacao: "🌿 Orgânica: bokashi em quantidade mínima, preferencialmente em sachê e sem contato direto prolongado com as raízes.\n💧 Foliar/mineral: adubo equilibrado em 1/4 da dose do fabricante a cada 10–15 dias durante crescimento ativo.\n🧪 Como as raízes são muito finas, faça lavagens periódicas com água de baixa salinidade e evite acúmulo de sais.",
    rega: "Manter as raízes regularmente úmidas, sem permitir secagem prolongada. Em placas ou pequenas montagens, pode exigir rega diária no período quente e seco; em vasos com esfagno, regar novamente quando o material começar a perder umidade superficial, sem deixá-lo compactado ou permanentemente encharcado. A combinação correta é muita disponibilidade de água com excelente oxigenação das raízes.",
    suporte: [
        "🥇 Pequena placa de cortiça, madeira ou nó de pinho com fina camada de esfagno.",
        "🥈 Vaso pequeno e muito ventilado com esfagno solto.",
        "🥉 Cachepô pequeno com mistura fina, leve e altamente aerada."
    ],
    formasCultivo: {
        perfilVisual: "micro-pleurothalidina",
        destaque: "Placa / tronco",
        resumo: "Miniatura predominantemente epífita, encontrada sobre troncos e galhos em ambientes úmidos. As raízes finas se beneficiam de muita aeração, mas a espécie não deve sofrer secagem prolongada, sobretudo no litoral quente.",
        metodos: [
            { nome: "Placa / tronco", asset: "acianthera-sonderiana-placa", estrelas: 5, status: "Ideal", texto: "Reproduz bem o hábito epífito natural, mantendo as raízes muito aeradas. No litoral quente, exige atenção à frequência de rega e à umidade para evitar desidratação excessiva." },
            { nome: "Árvore viva", asset: "arvore-viva", estrelas: 4, status: "Muito recomendado", texto: "Excelente alternativa em casca rugosa e local protegido, com umidade ambiental elevada e ventilação constante. Evite posições muito expostas ao sol e ao vento seco." },
            { nome: "Vaso plástico", asset: "vaso-plastico", estrelas: 4, status: "Muito recomendado", texto: "É uma alternativa especialmente útil no litoral quente porque desacelera a perda de água. Use vaso pequeno, mistura muito aberta e controle rigoroso para que a umidade não se transforme em encharcamento." },
            { nome: "Cesto de madeira", asset: "cesto-madeira", estrelas: 3, status: "Adequado", texto: "Oferece excelente ventilação, mas seca mais rapidamente. Funciona melhor em ambiente úmido ou com regas frequentes e proteção contra vento quente." }
        ]
    },

    substratoVisual: {
        titulo: "Substrato ideal",
        contexto: "Para cultivo em vaso",
        resumo: "Mistura muito aerada, leve e com reserva hídrica moderada para raízes finas que não devem permanecer secas por longos períodos.",
        justificativa: "Como epífita de ambientes úmidos, a espécie pede oxigenação elevada junto com umidade relativamente constante. No litoral quente, uma mistura excessivamente mineral pode secar depressa demais; por outro lado, esfagno compacto ou substrato fino aumentam o risco de abafamento. A combinação abaixo equilibra estrutura, aeração e pequena reserva de água.",
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
            { asset: "esfagno", nome: "Esfagno solto", proporcao: "20%", nota: "reserva hídrica", finalidade: "Protege as raízes finas contra secagem abrupta, especialmente em clima quente." },
            { asset: "carvao-vegetal", nome: "Carvão vegetal pequeno", proporcao: "15%", nota: "porosidade + durabilidade", finalidade: "Ajuda a preservar a estrutura aberta e a circulação de ar entre os componentes." }
        ],
        alerta: "Não compacte o esfagno. Em clima quente, mantenha umidade regular, mas permita boa oxigenação e drenagem; raízes finas sofrem tanto com secagem prolongada quanto com substrato abafado."
    },
    errosComuns: [
        "Deixar uma micro-orquídea montada secar completamente por muitas horas em dias quentes.",
        "Confundir necessidade de muita água com tolerância a substrato encharcado e sem ar.",
        "Cultivar em calor abafado, principalmente com noites persistentemente quentes.",
        "Usar vaso grande ou substrato compactado.",
        "Expor ao sol forte do meio do dia.",
        "Reduzir excessivamente a luz e comprometer a floração.",
        "Acumular sais de fertilizante nas raízes finas."
    ],
    revisaoCientificaIAR: {
        nome: "Acianthera sonderiana (Rchb.f.) Pridgeon & M.W.Chase",
        statusTaxonomico: "Nome aceito por POWO/Kew. Combinação publicada em Lindleyana 16: 246 (2001).",
        sinonimosPrincipais: "Pleurothallis sonderiana Rchb.f. (basiônimo); Humboltia sonderiana (Rchb.f.) Kuntze; Specklinia sonderiana (Rchb.f.) F.Barros; Pleurothallis sonderiana var. longicaulis Barb.Rodr.",
        morfologiaDimensoes: "Planta cespitosa de aproximadamente 2,5–7 cm; ramicaules 0,5–5 cm; folhas lineares, carnosas e sulcadas, aproximadamente 1–3 cm; inflorescências curtas de 1–3 cm com 2–4(5) flores; flores amarelo-alaranjadas de cerca de 4–7 mm.",
        habitatAltitudeClima: "Epífita de troncos e ramos em florestas úmidas, incluindo ambientes montanos, ombrófilos, florestas hidrófilas e matas ribeirinhas. O conjunto das fontes favorece clima intermediário a fresco, alta umidade e ventilação.",
        distribuicaoGeografica: "Sudeste e Sul do Brasil, Paraguai, Uruguai e Argentina (Misiones). Registros brasileiros incluem ES, MG, RJ, SP, PR, SC e RS.",
        cultivoPremiacao: "Cultivo confrontado com referências orquidológicas e comerciais: sombra filtrada, umidade alta, rega frequente e boa ventilação. Não foi localizada premiação AOS pública específica que justificasse afirmação adicional.",
        confianca: "alta",
        fontes: [
            "POWO/Kew",
            "IPNI/WFO",
            "Flora e Funga do Brasil",
            "literatura florística brasileira e paraguaia",
            "Orchids.org / referências de cultivo",
            "registros regionais UFSC/RS"
        ]
    },
    indiceDificuldadeCultivo: {
        versao: "IDC 3.2 — selo por facilidade",
        escala: "dificuldade",
        indice: 35,
        classificacao: "Moderada",
        cultivoEstrelas: 4,
        criterios: {
            temperatura: { notaDificuldade: 3, peso: 15 },
            rega: { notaDificuldade: 2, peso: 15 },
            umidade: { notaDificuldade: 2, peso: 10 },
            ventilacao: { notaDificuldade: 2, peso: 10 },
            luminosidade: { notaDificuldade: 1, peso: 10 },
            raizesSubstrato: { notaDificuldade: 2, peso: 10 },
            sazonalidade: { notaDificuldade: 1, peso: 10 },
            floracao: { notaDificuldade: 2, peso: 20 }
        },
        faixas: {
            facil: "0–25",
            moderada: "26–50",
            dificil: "51–89",
            extrema: "90–100"
        }
    },
    indiceAdaptacaoRegional: {
        versao: "IAR 2.0 — revisão científica",
        escala: "compatibilidade regional",
        metodo: "notas atribuídas manualmente após confronto de distribuição, habitat, clima e cultivo; não derivadas automaticamente do texto",
        litoralQuente: {
            indice: 56,
            estrelas: 3,
            fatores: {
                habitatNatural: { nota: 3, peso: 30 },
                temperatura: { nota: 2, peso: 30 },
                aguaUmidade: { nota: 4, peso: 5 },
                ventilacao: { nota: 4, peso: 5 },
                luminosidade: { nota: 4, peso: 5 },
                sazonalidade: { nota: 4, peso: 5 },
                floracao: { nota: 3, peso: 20 }
            }
        },
        montanhaFrio: {
            indice: 94,
            estrelas: 5,
            fatores: {
                habitatNatural: { nota: 5, peso: 30 },
                temperatura: { nota: 5, peso: 30 },
                aguaUmidade: { nota: 4, peso: 5 },
                ventilacao: { nota: 4, peso: 5 },
                luminosidade: { nota: 4, peso: 5 },
                sazonalidade: { nota: 4, peso: 5 },
                floracao: { nota: 5, peso: 20 }
            }
        }
    },
    adaptacaoRegional: {
        litoral: {
            texto: "Adaptação moderada. Apesar de haver registros no Sudeste, grande parte das referências ecológicas aponta ambientes úmidos e mais amenos. No litoral quente, deve ficar no setor mais fresco, sombreado e ventilado, com atenção especial às noites muito quentes e à rápida desidratação das montagens."
        },
        montanha: {
            texto: "Adaptação excelente. Temperaturas mais amenas, noites frescas e umidade elevada reproduzem melhor os ambientes florestais associados à espécie. Evite apenas excesso de água quando a evaporação cair muito no inverno."
        }
    },
    dica: "🏆 Para esta micro-orquídea, o ponto-chave é manter as raízes pequenas hidratadas sem abafá-las: montagem pequena, fina reserva de esfagno, ventilação constante e regas frequentes. No litoral quente, priorize o local mais fresco e protegido do sol forte."
};
