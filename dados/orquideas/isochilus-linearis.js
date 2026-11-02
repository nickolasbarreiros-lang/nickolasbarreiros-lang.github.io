// Refinamento Final — Lote 15.

export const isochilusLinearis = {
    id: "isochilus-linearis",
    nome: "Isochilus linearis",
    genero: "Isochilus",
    sinonimo: "Epidendrum lineare",
    tipo: "Espécie botânica",
    dificuldade: "Difícil",
    caracteristicas: ["Ampla distribuição americana", "Epífita e rupícola", "Caules finos e folhosos", "Sem pseudobulbos", "Flores tubulares rosadas", "Forma grandes touceiras"],
    fotos: [
        "imagens/Isochilus linearis/isochilus linearis1.jpg",
        "imagens/Isochilus linearis/isochilus linearis2.jpg",
        "imagens/Isochilus linearis/isochilus linearis3.jpg",
        "imagens/Isochilus linearis/isochilus linearis4.jpg"
    ],
    descricao: "À primeira vista, parece quase uma pequena touceira de capim — até que as pontas dos caules se enchem de flores! Isochilus linearis forma touceiras densas, com caules finos, agrupados, eretos a arqueados e sem pseudobulbos. As folhas são estreitas, lineares a lanceoladas, distribuídas ao longo dos caules. É predominantemente epífita ou rupícola, habitando florestas tropicais úmidas; algumas referências também registram ocorrência terrestre. As inflorescências são curtas e terminais, reunindo pequenas flores tubulares, geralmente orientadas para o mesmo lado. A coloração é frequentemente rosada a violácea, mas pode variar entre populações. As flores apresentam forte tendência à autopolinização e à cleistogamia, podendo permanecer pouco abertas. A espécie possui distribuição extremamente ampla, do México a grande parte da América tropical, inclusive no Brasil, e ocorre desde altitudes relativamente baixas até montanhas elevadas, o que ajuda a explicar a grande variação de resposta à temperatura em cultivo.",
    origem: "América Tropical",
    regiao: "Caribe · América Central · América do Sul",
    habitat: "Florestas tropicais úmidas · hábito principalmente epífito ou rupícola · 300–3.900 m.",
    clima: "Intermediário a quente · ampla tolerância.",
    climaFloracao: "A faixa altitudinal documentada é excepcionalmente ampla, de cerca de 300 a 3.900 m, mas muitas coletas concentram-se aproximadamente entre 600 e 1.200 m. Por isso não é correto classificar toda a espécie como fria ou quente. No litoral, trabalhe com o comportamento intermediário: luz filtrada, boa ventilação e umidade regular, especialmente porque os caules não possuem grande reserva de água. Não necessita repouso seco.",
    iluminacao: {
        sombrite: "50% a 70%",
        solDireto: "Permitido com restrição",
        horario: "Somente início da manhã",
        observacoes: "Prefere claridade suave e filtrada e não sombra plena. Caules excessivamente longos e moles indicam falta de luz; folhas amareladas ou secas nas pontas podem indicar excesso de sol, baixa umidade ou acúmulo de sais."
    },
    floracao: "Pode florescer em diferentes épocas do ano conforme a procedência e as condições de cultivo; no Brasil, costuma ser mais observada da primavera ao verão. As pequenas flores tubulares surgem agrupadas no ápice dos caules maduros, geralmente voltadas para o mesmo lado. As flores individuais podem ser relativamente breves, enquanto uma touceira com várias hastes pode prolongar o efeito ornamental pela emissão sucessiva de flores.",
    adubacao: "🌿 Orgânica: bokashi em dose mínima e sempre afastado das raízes.\n💧 Foliar: NPK equilibrado em 1/4 da dose a cada 10–15 dias durante o crescimento ativo.\n🧪 Liberação lenta: apenas poucos grânulos em recipiente pequeno e drenante.\n💦 Lavagem: mensalmente, faça uma rega abundante com água limpa para remover sais do substrato.",
    rega: "Mantenha umidade regular e volte a regar antes que a touceira permaneça seca por muito tempo. Ao mesmo tempo, permita a entrada de ar no substrato entre as regas. AOS recomenda que espécies do gênero não sequem completamente. No inverno, apenas acompanhe a menor evaporação e reduza proporcionalmente a frequência.",
    suporte: "🥇 Cachepô de madeira bem vazado.\n🥈 Vaso de barro pequeno e raso.\n🥉 Vaso plástico pequeno e bem perfurado.\n🏅 Placa de cortiça em ambiente de alta umidade, com regas frequentes.",
    substrato: "🥇 Montagem em nó de pinho, cortiça ou madeira com uma lâmina fina de esfagno apenas sob as raízes.\n🥈 Casca de pinus fina + perlita + perlita grossa fina + pequena fração de esfagno solto.\n🥉 Chips de coco pequenos + perlita + casca de pinus fina, mantendo o conjunto leve e aerado.\n⭐ Alternativa: Esfagno de fibra longa usado muito solto + perlita grossa fina; evitar compactação junto ao rizoma.",
    formasCultivo: {
        perfilVisual: "epifita-rupicola-caules-finos-sem-pseudobulbos",
        destaque: "Cachepô de Madeira",
        resumo: "Espécie de caules finos e sem pseudobulbos, formando touceiras densas. Requer umidade regular com raízes oxigenadas, boa ventilação e proteção contra calor excessivo e seca prolongada.",
        metodos: [
            { nome: "Cachepô de Madeira", asset: "cesto-madeira", estrelas: 5, status: "Mais recomendado na ficha", texto: "Cachepô bem vazado para a expansão da touceira, com mistura leve e atenção à umidade regular." },
            { nome: "Vaso de Barro", asset: "vaso-barro", estrelas: 4, status: "Alternativa", texto: "Vaso pequeno e raso, com mistura porosa; observar a secagem mais rápida das paredes." },
            { nome: "Vaso plástico vasado", asset: "vaso-plastico-vasado", estrelas: 4, status: "Alternativa", texto: "Vaso pequeno e muito perfurado para preservar umidade sem encharcar as raízes." },
            { nome: "Placa / tronco", asset: "placa-tronco", estrelas: 3, status: "Uso condicional", texto: "Cortiça ou madeira com lâmina fina de esfagno sob as raízes, somente com alta umidade e regas frequentes." }
        ]
    },
    substratoVisual: {
        titulo: "Substrato ideal",
        contexto: "Montagem principal citada na receita original; mistura alternativa para cachepô",
        resumo: "Raízes delicadas precisam de material leve, aeração elevada e umidade moderada, sem secagem prolongada.",
        justificativa: "A primeira indicação original é montagem em madeira com fina lâmina de esfagno. Para cachepô, a mistura quantitativa adapta a segunda indicação, reunindo as duas granulometrias de perlita; percentuais ainda não homologados pela MACS 1.0.",
        receitaTexto: "45% casca de pinus fina + 35% perlita de granulometria adequada + 20% esfagno de fibra longa solto.",
        perfil: ["Sem pseudobulbos", "Caules finos", "Touceira densa", "Umidade regular", "Raízes oxigenadas"],
        comportamento: [
            { nome: "Retenção", valor: 3, icone: "💧" },
            { nome: "Aeração", valor: 4, icone: "💨" },
            { nome: "Secagem", valor: 3, icone: "⚡" },
            { nome: "Compactação", valor: 2, icone: "🧱" }
        ],
        itens: [
            { asset: "casca-pinus", nome: "Casca de pinus fina", proporcao: "45%", nota: "estrutura", finalidade: "Mantém raízes apoiadas e a mistura porosa." },
            { asset: "perlita", nome: "Perlita de granulometria adequada", proporcao: "35%", nota: "aeração", finalidade: "Favorece drenagem sem comprimir as raízes finas." },
            { asset: "esfagno", nome: "Esfagno de fibra longa solto", proporcao: "20%", nota: "umidade moderada", finalidade: "Ajuda a evitar secagem prolongada, sem encharcar." }
        ],
        alerta: "Evitar seca prolongada, vaso grande e profundo, sombra excessiva, calor abafado e substrato compactado. Preservar touceiras saudáveis.",
        notaEvidencia: "Estrelas e percentuais são estimativas horticulturais não homologadas pela MACS 1.0. Conferência visual dos assets ainda pendente."
    },
    errosComuns: "Impor seca prolongada; cultivar em sombra excessiva; usar vaso profundo e grande; manter substrato velho ou compactado; aplicar adubo concentrado; cultivar em local abafado; deixar a touceira superaquecer; confundir umidade regular com encharcamento; dividir frequentemente uma colônia saudável.",
    dica: "A melhor forma de entender essa espécie é observar seus caules. Como não há pseudobulbos robustos para funcionar como reserva, caules enrugados e folhas perdendo firmeza indicam que a planta ficou seca demais. Mantenha água disponível sem sacrificar a aeração e preserve touceiras grandes: elas estabilizam o microclima e florescem com muito mais impacto.",
    revisaoCientificaIAR: {
        "nome": "Isochilus linearis",
        "statusTaxonomico": "Espécie/nome infraespecífico tratado como aceito na revisão taxonômica de referência.",
        "sinonimosPrincipais": "Verificados prioritariamente em POWO/GBIF/Tropicos; manter apenas os relevantes ao catálogo.",
        "morfologiaDimensoes": "À primeira vista, parece quase uma pequena touceira de capim — até que as pontas dos caules se enchem de flores! Isochilus linearis forma touceiras densas, com caules finos, agrupados, eretos a arqueados e sem pseudobulbos. As folhas são estreitas, lineares a lanceoladas, distribuídas ao longo dos caules. É predominantemente epífita ou rupícola, habitando florestas tropicais úm",
        "habitatAltitudeClima": "Florestas tropicais úmidas · hábito principalmente epífito ou rupícola · 300–3.900 m. | Intermediário a quente · ampla tolerância.",
        "distribuicaoGeografica": "Caribe, América Central e América do Sul.",
        "cultivoPremiacao": "Cultivo confrontado com habitat/IOSPE; premiação AOS somente considerada quando dado público verificável foi localizado.",
        "confianca": "alta",
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
        "indice": 57,
        "classificacao": "Difícil",
        "cultivoEstrelas": 2,
        "criterios": {
            "temperatura": {
                "notaDificuldade": 3,
                "peso": 15
            },
            "rega": {
                "notaDificuldade": 4,
                "peso": 15
            },
            "umidade": {
                "notaDificuldade": 4,
                "peso": 10
            },
            "ventilacao": {
                "notaDificuldade": 3,
                "peso": 10
            },
            "luminosidade": {
                "notaDificuldade": 3,
                "peso": 10
            },
            "raizesSubstrato": {
                "notaDificuldade": 3,
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
            "indice": 96,
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
                    "nota": 4,
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
        }
    },
        adaptacaoRegional: {
        litoralQuente: { texto: "Muito boa para procedências adaptadas a temperaturas intermediárias ou quentes. Mantenha luz filtrada, umidade regular e forte ventilação, evitando calor abafado no centro da touceira." },
        montanhaFrio: { texto: "Excelente para muitas procedências. Ajuste a água à menor evaporação e proteja contra geadas; não deixe o substrato secar completamente." }
    },
    mesesFloracao: [9, 10, 11, 12, 1, 2],
    "selosCultivo": {
        "rega": { "nivel": "frequente", "regime": "reduzir-inverno" },
        "climaFloracao": { "faixa": "quente" }
    },
        avaliacoes: { cultivo: 2, floracao: 4, perfume: 1, luminosidade: 3, agua: 4, raridade: 3 }
};
