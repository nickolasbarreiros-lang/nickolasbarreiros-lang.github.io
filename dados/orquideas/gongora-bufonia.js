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
    substrato: "🥇 Chips de coco grossos + casca de pinus média + perlita grossa + esfagno solto, em cesto vazado.\n🥈 Casca de macadâmia média + chips de coco + perlita + esfagno em baixa proporção.\n🥉 Pinus médio + fibra de coco grossa + perlita grossa + carvão vegetal, mantendo umidade sem bloquear a haste descendente.\n⭐ Alternativa: Cesto com chips de coco + macadâmia + perlita grossa e uma fina camada de esfagno no topo, nunca compactada.",
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
        justificativa: "Os quatro componentes seguem a primeira mistura qualitativa já registrada na ficha. Percentuais são estimativas horticulturais ainda não homologadas pela MACS 1.0.",
        receitaTexto: "35% chips de coco grossos + 30% casca de pinus média + 20% perlita grossa + 15% esfagno de fibra longa solto.",
        perfil: ["Epífita de floresta úmida", "Pseudobulbos sulcados", "Hastes pendentes", "Umidade regular", "Fundo do cesto aberto"],
        comportamento: [
            { nome: "Retenção", valor: 4, icone: "💧" },
            { nome: "Aeração", valor: 4, icone: "💨" },
            { nome: "Secagem", valor: 2, icone: "⚡" },
            { nome: "Compactação", valor: 2, icone: "🧱" }
        ],
        itens: [
            { asset: "chips-coco", nome: "Chips de coco grossos", proporcao: "35%", nota: "umidade", finalidade: "Mantêm umidade moderada sem impedir a passagem das hastes." },
            { asset: "casca-pinus", nome: "Casca de pinus média", proporcao: "30%", nota: "estrutura", finalidade: "Sustenta raízes com espaços de ar." },
            { asset: "perlita", nome: "Perlita grossa", proporcao: "20%", nota: "aeração", finalidade: "Favorece drenagem e reduz compactação." },
            { asset: "esfagno", nome: "Esfagno de fibra longa solto", proporcao: "15%", nota: "retenção leve", finalidade: "Evita secagem completa durante o crescimento sem formar massa densa." }
        ],
        alerta: "Não bloquear o fundo do cesto, apoiar a planta onde as hastes não possam descer ou usar vaso fechado. Evitar sol forte, seca completa e calor abafado.",
        notaEvidencia: "Estrelas e percentuais são estimativas horticulturais não homologadas pela MACS 1.0. Conferência visual dos assets ainda pendente."
    },
    errosComuns: "Cultivar em vaso fechado; bloquear o fundo do cesto; usar substrato fino ou compactado; deixar secar completamente durante o crescimento; impor repouso seco; manter calor abafado; expor ao sol forte; adubar em excesso; dividir a touceira em fragmentos pequenos; apoiar o cesto onde as hastes pendentes não tenham passagem.",
    dica: "Pense primeiro na haste floral e depois no vaso. A inflorescência nasce na base e precisa cair livremente; por isso o cesto suspenso, vazado e sem obstáculos é parte do cultivo, não apenas uma escolha estética. Combine esse espaço livre com raízes úmidas e oxigenadas, e a espécie responde com hastes longas e floradas muito mais consistentes.",
    revisaoCientificaIAR: {
        "nome": "Gongora bufonia",
        "statusTaxonomico": "Espécie/nome infraespecífico tratado como aceito na revisão taxonômica de referência.",
        "sinonimosPrincipais": "Verificados prioritariamente em POWO/GBIF/Tropicos; manter apenas os relevantes ao catálogo.",
        "morfologiaDimensoes": "Uma das orquídeas brasileiras mais curiosas quando entra em flor! Gongora bufonia forma pseudobulbos sulcados com folhas largas e plissadas, mas o grande espetáculo aparece abaixo da planta: hastes pendentes de 40 a 80 cm carregadas de flores cerosas, perfumadas e de formato quase escultórico, com cerca de 5 cm. É uma espécie de florestas úmidas do leste do Brasil, principalmen",
        "habitatAltitudeClima": "Florestas úmidas · sobretudo baixas altitudes. | Quente a intermediário · úmido e ventilado.",
        "distribuicaoGeografica": "Leste do Brasil · Mata Atlântica.",
        "cultivoPremiacao": "Cultivo confrontado com habitat/IOSPE; premiação AOS somente considerada quando dado público verificável foi localizado.",
        "confianca": "media",
        "fontes": [
            "POWO/Kew",
            "WFO/IPNI",
            "GBIF/Tropicos",
            "IOSPE/OrchidSpecies"
        ]
    },
    indiceDificuldadeCultivo: {
        "versao": "IDC 3.2 — selo por facilidade",
        "escala": "dificuldade",
        "indice": 30,
        "classificacao": "Moderada",
        "cultivoEstrelas": 4,
        "criterios": {
            "temperatura": {
                "notaDificuldade": 2,
                "peso": 15
            },
            "rega": {
                "notaDificuldade": 2,
                "peso": 15
            },
            "umidade": {
                "notaDificuldade": 1,
                "peso": 10
            },
            "ventilacao": {
                "notaDificuldade": 1,
                "peso": 10
            },
            "luminosidade": {
                "notaDificuldade": 1,
                "peso": 10
            },
            "raizesSubstrato": {
                "notaDificuldade": 1,
                "peso": 10
            },
            "sazonalidade": {
                "notaDificuldade": 1,
                "peso": 10
            },
            "floracao": {
                "notaDificuldade": 2,
                "peso": 20
            }
        },
        "faixas": {
            "facil": "0–25",
            "moderada": "26–50",
            "dificil": "51–89",
            "extrema": "90–100"
        }
    },
    indiceAdaptacaoRegional: {
        "versao": "IAR 2.0 — revisão científica",
        "escala": "compatibilidade regional",
        "metodo": "notas atribuídas manualmente após confronto das fontes botânicas e horticulturais; não derivadas do texto da ficha",
        "litoralQuente": {
            "indice": 95,
            "estrelas": 5,
            "fatores": {
                "habitatNatural": {
                    "nota": 5,
                    "peso": 30
                },
                "temperatura": {
                    "nota": 5,
                    "peso": 30
                },
                "aguaUmidade": {
                    "nota": 4,
                    "peso": 5
                },
                "ventilacao": {
                    "nota": 4,
                    "peso": 5
                },
                "luminosidade": {
                    "nota": 3,
                    "peso": 5
                },
                "sazonalidade": {
                    "nota": 4,
                    "peso": 5
                },
                "floracao": {
                    "nota": 5,
                    "peso": 20
                }
            }
        },
        "montanhaFrio": {
            "indice": 80,
            "estrelas": 4,
            "fatores": {
                "habitatNatural": {
                    "nota": 4,
                    "peso": 30
                },
                "temperatura": {
                    "nota": 4,
                    "peso": 30
                },
                "aguaUmidade": {
                    "nota": 4,
                    "peso": 5
                },
                "ventilacao": {
                    "nota": 4,
                    "peso": 5
                },
                "luminosidade": {
                    "nota": 4,
                    "peso": 5
                },
                "sazonalidade": {
                    "nota": 4,
                    "peso": 5
                },
                "floracao": {
                    "nota": 4,
                    "peso": 20
                }
            }
        }
    },
        adaptacaoRegional: {
        litoralQuente: { texto: "Cultive em sombra clara, com cesto suspenso, ventilação constante e material que nunca permaneça quente e saturado. No verão, prefira regas matinais e alta circulação de ar." },
        montanhaFrio: { texto: "Aproveite a umidade e noites amenas, reduzindo a frequência das regas apenas quando a evaporação cair. Proteja contra frio excessivo e geadas." }
    },
    mesesFloracao: [8, 9, 10, 11, 12],
    "selosCultivo": {
        "rega": { "nivel": "frequente", "regime": "reduzir-repouso" },
        "climaFloracao": { "faixa": "quente" }
    },
        avaliacoes: { cultivo: 4, floracao: 4, perfume: 5, luminosidade: 3, agua: 4, raridade: 3 }
};
