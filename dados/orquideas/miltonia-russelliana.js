// Ficha científica e de cultivo revisada — Miltonia russelliana.
// Conteúdo adaptado ao padrão editorial e regional do Orquidário Digital.

export const miltoniaRusselliana = {
    id: "miltonia-russelliana",
    nome: "Miltonia russelliana",
    genero: "Miltonia",
    tipo: "Espécie botânica epífita brasileira",
    dificuldade: "Fácil",
    caracteristicas: [
        "Espécie brasileira",
        "Mata Atlântica",
        "Flores discretas",
        "Haste longa",
        "Clima intermediário",
        "Floração outono-inverno"
    ],
    fotos: [
        "imagens/Miltonia russelliana/Miltonia russelliana1.jpg",
        "imagens/Miltonia russelliana/Miltonia russelliana2.jpg",
        "imagens/Miltonia russelliana/Miltonia russelliana3.jpg",
        "imagens/Miltonia russelliana/Miltonia russelliana4.jpg"
    ],
    descricao: "Miltonia russelliana é uma espécie brasileira de beleza mais sutil do que as Miltonia de flores muito abertas. Forma pseudobulbos compactos, verde-oliva, com duas folhas estreitas no ápice, e produz hastes arqueadas que podem chegar a cerca de 60 cm, carregando várias flores. Sépalas e pétalas permanecem relativamente fechadas ao redor da coluna, enquanto o labelo mais claro e marcado em púrpura aparece como ponto de contraste. É uma orquídea elegante para quem aprecia espécies botânicas menos óbvias, e costuma responder muito bem quando cultivada com boa umidade, luz filtrada e bastante movimento de ar.",
    origem: "Brasil",
    regiao: "Sudeste e Sul do Brasil",
    habitat: "Epífita de florestas úmidas e áreas ripárias, em ambiente ventilado.",
    clima: "Intermediário a ameno, úmido e ventilado.",
    climaFloracao: "A espécie floresce principalmente no outono e inverno. Em clima quente, noites um pouco mais frescas ajudam bastante, mas o fator decisivo é manter raízes ativas, boa ventilação e luminosidade suficiente sem superaquecer as folhas.",
    iluminacao: {
        sombrite: "50% a 60%",
        solDireto: "Permitido com restrição",
        horario: "Somente início da manhã",
        observacoes: "Prefere luminosidade moderada e filtrada, sem sombra profunda nem sol forte. Um sombrite de 50% a 60% é uma referência inicial, com boa circulação de ar. Depois de aclimatada, admite sol muito suave somente no início da manhã. Folhas firmes e crescimento compacto indicam equilíbrio; folhas muito escuras e crescimento alongado podem sugerir pouca luz. Amarelecimento rápido e aquecimento das folhas pedem mais proteção. Faça mudanças de exposição gradualmente.",
        seloLuz: "amarelo"
    },
    floracao: "Floresce principalmente de maio a julho. Cada pseudobulbo maduro pode produzir uma ou duas hastes eretas ou arqueadas, com uma a sete flores de aproximadamente 2,5 a 3 cm. As sépalas e pétalas castanho-esverdeadas permanecem pouco abertas, dando à flor um aspecto fechado, enquanto o labelo estreito, branco e marcado de roxo, se projeta para a frente. O perfume e a duração das flores ainda são pouco conhecidos.",
    adubacao: "🌿 Orgânica: bokashi pode ser usado em pequena quantidade, de preferência em porta-adubo.\n💧 Foliar/mineral: NPK equilibrado, como 20-20-20, em aproximadamente 1/4 da dose comercial a cada 10 a 15 dias durante crescimento ativo.\n🧪 Liberação lenta: opcional, usando poucos grânulos em vaso ou cachepô.\n🚿 Lavagem: intercale regas com água pura para reduzir o acúmulo de sais no substrato.",
    rega: "Regue com frequência durante a formação de novos pseudobulbos, permitindo que o substrato fique apenas levemente úmido entre as irrigações. Não deixe as raízes permanecerem encharcadas, mas também evite seca prolongada. No inverno, ajuste a frequência pela velocidade real de secagem, sem impor repouso seco severo.",
    suporte: [
        "🥇 Cachepô ou cesto de madeira com substrato bem aerado.",
        "🥈 Vaso de barro ou plástico muito perfurado, proporcional ao tamanho da touceira.",
        "🥉 Montagem em madeira ou cortiça em ambientes com umidade alta e regas frequentes."
    ],
    substrato: ["Casca de macadâmia média + casca de pinus média + perlita grossa + pequena fração de fibra de coco grossa preparada","Casca de pinus média + perlita grossa + argila expandida pequena + pequena fração de esfagno de fibra longa solto"],
    formasCultivo: {
        perfilVisual: "miltonia-epifita-touceira-pseudobulbos",
        destaque: "Cachepô de Madeira",
        resumo: "Miltonia epífita de touceira compacta e hastes arqueadas, que se beneficia de raízes ventiladas, umidade regular e espaço apenas para poucos novos crescimentos.",
        metodos: [
            { nome: "Cachepô de Madeira", asset: "cesto-madeira", estrelas: null, status: "Preferência técnica provisória", texto: "Cachepô vazado com mistura aerada, mantendo regas regulares sem encharcar." },
            { nome: "Vaso de Barro", asset: "vaso-barro", estrelas: null, status: "Alternativa provisória", texto: "Vaso pequeno e perfurado, proporcional à touceira, com boa secagem e umidade acompanhada." },
            { nome: "Vaso plástico vasado", asset: "vaso-plastico-vasado", estrelas: null, status: "Alternativa provisória", texto: "Vaso muito perfurado e proporcional, evitando excesso de substrato no centro." },
            { nome: "Placa / tronco", asset: "placa-tronco", estrelas: null, status: "Uso condicional", texto: "Madeira ou cortiça apenas em ambiente úmido e com regas frequentes." }
        ]
    },
    substratoVisual: {
        titulo: "Substrato recomendado (provisório)",
        contexto: "Mistura aerada para cachepô de madeira",
        resumo: "Equilíbrio entre umidade moderada e alta ventilação, favorecendo pseudobulbos vigorosos sem saturação prolongada.",
        justificativa: "Miltonia russelliana é uma epífita de crescimento simpodial e touceira compacta, que se beneficia de umidade regular e raízes bem ventiladas. No cachepô de madeira vazado, a casca de pinus e os chips de coco preparados sustentam a planta e conservam umidade moderada, enquanto a perlita e o carvão mantêm espaços de ar. Evite tanto o encharcamento quanto a secagem prolongada durante o crescimento e não divida a touceira em partes excessivamente pequenas.",
        receitaTexto: "35% casca de pinus média + 30% chips de coco médios preparados + 25% perlita grossa compatível com o cachepô + 10% carvão vegetal médio.",
        perfil: ["Epífita simpodial", "Touceira compacta", "Umidade regular", "Raízes arejadas", "Hastes arqueadas"],
        comportamento: [
            { nome: "Retenção", valor: 3, icone: "💧" },
            { nome: "Aeração", valor: 4, icone: "💨" },
            { nome: "Secagem", valor: 3, icone: "⚡" },
            { nome: "Compactação", valor: 1, icone: "🧱" }
        ],
        itens: [
            { asset: "casca-pinus", nome: "Casca de pinus média", proporcao: "35%", nota: "estrutura", finalidade: "Oferece suporte às raízes com umidade moderada." },
            { asset: "chips-coco", nome: "Chips de coco médios preparados", proporcao: "30%", nota: "umidade", finalidade: "Ajuda a regular a disponibilidade hídrica entre regas." },
            { asset: "perlita", nome: "Perlita grossa compatível com o cachepô", proporcao: "25%", nota: "aeração", finalidade: "Favorece drenagem e circulação de ar." },
            { asset: "carvao", nome: "Carvão vegetal médio", proporcao: "10%", nota: "porosidade", finalidade: "Contribui para a estrutura aberta da mistura." }
        ],
        alerta: "Evitar sombra profunda, vaso grande, substrato constantemente encharcado, secagem prolongada durante crescimento e divisão em porções pequenas. Preservar ventilação mesmo com umidade elevada.",
        notaEvidencia: "HOMOLOGAÇÃO DOCUMENTAL CONCLUÍDA — MACS 1.1 PROVISÓRIA (Classe D); não equivale à validação quantitativa dos percentuais ou à comparação experimental de suportes. MACS 1.1 — revisão documental: Miltonia russelliana, epífita simpodial de touceira compacta e hastes arqueadas; umidade regular, ventilação e preservação de pseudobulbos saudáveis são importantes. Cachepô de Madeira vazado é suporte principal; estrelas dos suportes omitidas por ausência de validação quantitativa. Receita visual e textual coincidem: 35% pinus médio + 30% chips de coco médios preparados + 25% perlita grossa compatível com cachepô + 10% carvão vegetal médio = 100%. Exatamente duas outras misturas qualitativas distintas: macadâmia/pinus/perlita/pequena fração de fibra de coco grossa preparada e pinus/perlita/argila expandida pequena/pouco esfagno de fibra longa solto. Elas não fundamentam os percentuais visuais. Monitorar retenção de chips de coco, secagem e ventilação em clima quente. Sem ensaio quantitativo específico nem consulta individualizada a até 25 produtores brasileiros; percentuais NÃO HOMOLOGADOS; estrelas dos suportes omitidas. Classe D — não homologada quantitativamente."
    },
    errosComuns: [
    "Cultivar em sombra profunda.",
    "Usar vaso muito maior que a touceira.",
    "Manter substrato encharcado por vários dias.",
    "Deixar secar demais durante o crescimento.",
    "Sacrificar ventilação para elevar a umidade.",
    "Aplicar adubo concentrado.",
    "Dividir touceiras com poucas reservas.",
    "Expor folhas ao sol forte nas horas quentes."
],
    dica: "🏆 Nesta Miltonia de hastes arqueadas, uma touceira madura costuma responder melhor do que divisões pequenas. Preserve pseudobulbos saudáveis e deixe espaço para os novos brotos, sem usar vaso exageradamente grande. Ofereça luz filtrada abundante, regas regulares durante o crescimento e ventilação constante para manter raízes ativas. Em clima quente, evite o aquecimento excessivo do recipiente e observe a secagem antes de regar novamente. A estabilidade da planta favorece pseudobulbos fortes e hastes florais bem desenvolvidas.",
    revisaoCientificaIAR: {
        "nome": "Miltonia russelliana (Lindl.) Lindl.",
        "statusTaxonomico": "Nome aceito em POWO/Kew, publicado em Sertum Orchidaceum, prancha 48 (1841).",
        "sinonimosPrincipais": "Basiônimo: Oncidium russellianum Lindl. (1836). Sinônimos homotípicos: Gynizodon russellianus (Lindl.) Raf. (1838) e Anneliesia russelliana (Lindl.) Senghas & Lückel (1997). Sinônimos heterotípicos: Miltonia quadrijuga Dusén & Kraenzl. (1921) e Oncidium russellianum var. pallidum Regel (1880).",
        "morfologiaDimensoes": "Epífita simpodial de porte pequeno a médio, com pseudobulbos ovais a oblongos, comprimidos lateralmente e próximos entre si, revestidos na base por bainhas foliares. Cada pseudobulbo maduro costuma portar duas folhas apicais estreitas, lineares a lanceoladas. A inflorescência ereta a arqueada pode atingir cerca de 60 cm, com aproximadamente cinco a nove flores, segundo IOSPE. As flores apresentam sépalas e pétalas relativamente fechadas, em tons pardos a púrpura, e labelo mais claro com marcas contrastantes. O diâmetro floral de cerca de 5,75 cm é uma estimativa secundária, não medição original desta revisão.",
        "habitatAltitudeClima": "POWO descreve epífita do bioma tropical sazonalmente seco, nativa do Sul e Sudeste do Brasil. Essa classificação biogeográfica não autoriza afirmar que a planta deva passar por estiagem intensa em cultivo. IOSPE a descreve como epífita de clima quente a fresco, com floração de outono a inverno; não apresenta faixa altitudinal primária verificável na página consultada. Umidade regular, drenagem e ventilação são recomendações gerais de cultivo de Miltonia na AOS, não dados experimentais específicos de M. russelliana.",
        "distribuicaoGeografica": "Endêmica do Brasil, nas regiões Sul e Sudeste, conforme POWO/Kew.",
        "cultivoPremiacao": "AOS orienta para o gênero Miltonia regas abundantes com drenagem eficiente, luz sombreada, ventilação e atenção ao acúmulo de sais; admite montagens e substratos com casca, carvão e perlita, mas não testou a receita 35/30/25/10 desta ficha. IOSPE registra inflorescências de aproximadamente cinco a nove flores e floração no outono/inverno. Catálogos secundários mencionam cultivar 'Wasen', sem comprovação de premiação primária AOS nesta revisão. Nenhum ensaio comparativo dos quatro suportes foi localizado.",
        "confianca": "Taxonomia e distribuição: alta (POWO). Morfologia e sazonalidade: moderada (IOSPE). Manejo: orientação geral de gênero (AOS). Percentuais e ranking de suportes MACS 1.1: Classe D, sem validação quantitativa.",
        "fontes": [
            "POWO/Kew, nome aceito e sinonímia — https://powo.science.kew.org/taxon/644771-1",
            "IOSPE, Miltonia russelliana — https://www.orchidspecies.com/miltrusseliana.htm",
            "American Orchid Society, Miltonia Culture Sheet — https://www.aos.org/orchid-care/care-sheets/miltonia-culture-sheet",
            "Orquídeas Gaúchas, descrição e sinônimos (fonte secundária brasileira) — https://www.orquideasgauchas.net/P_desc_especie.php?cod_especie=278"
        ]
    },
    indiceDificuldadeCultivo: {
        "versao": "IDC 3.2 — selo por facilidade",
        "escala": "dificuldade",
        "indice": 13,
        "classificacao": "Muito fácil",
        "cultivoEstrelas": 5,
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
            "muitoFacil": "0–25",
            "facil": "26–35",
            "moderada": "36–50",
            "dificil": "51–89",
            "extrema": "90–100"
        }
    },
    indiceAdaptacaoRegional: {
        "versao": "IAR 2.0 — revisão científica",
        "escala": "compatibilidade regional",
        "metodo": "notas atribuídas manualmente após confronto das fontes botânicas e horticulturais; não derivadas do texto da ficha",
        "litoralQuente": {
            "indice": 79,
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
                    "nota": 3,
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
        litoralQuente: { texto: "Boa adaptação. Tolera calor melhor que muitas Miltoniopsis, mas aprecia noites menos abafadas. Use luz filtrada, umidade regular e ventilação constante." },
        montanhaFrio: { texto: "Muito boa adaptação. Noites frescas favorecem vigor e floração, desde que as raízes não permaneçam frias e encharcadas por longos períodos." }
    },
    mesesFloracao: [5, 6, 7],
    "selosCultivo": {
        "rega": { "nivel": "sazonal" },
        "climaFloracao": { "faixa": "ameno" }
    },
        avaliacoes: {
        cultivo: 5,
        floracao: 3,
        perfume: 1,
        luminosidade: 3,
        agua: 4,
        raridade: 4
    }
};
