// Ficha científica e de cultivo revisada — Epidendrum centropetalum.
// Conteúdo adaptado ao padrão editorial e regional do Orquidário Digital.

export const epidendrumCentropetalum = {
    id: "epidendrum-centropetalum",
    nome: "Epidendrum centropetalum",
    genero: "Epidendrum",
    tipo: "Espécie botânica epífita centro-americana",
    dificuldade: "Moderada",
    caracteristicas: [
        "Sin. Oerstedella centradenia",
        "Flores rosa intenso",
        "Forma keikis",
        "Floresta montana",
        "Alta umidade",
        "Clima fresco"
    ],
    fotos: [
        "imagens/Epidendrum centropetalum/Epidendrum centropetalum1.jpg",
        "imagens/Epidendrum centropetalum/Epidendrum centropetalum2.jpg",
        "imagens/Epidendrum centropetalum/Epidendrum centropetalum3.jpg",
        "imagens/Epidendrum centropetalum/Epidendrum centropetalum4.jpg"
    ],
    descricao: "Epidendrum centropetalum é uma espécie delicada e muito charmosa da América Central, conhecida durante décadas em coleções como Oerstedella centradenia. Seus caules finos lembram pequenas hastes e podem produzir keikis ao longo do crescimento, criando touceiras leves e ramificadas. As inflorescências surgem no topo dos caules maduros e carregam várias flores rosa-intenso, marcadas por uma área branca na base do labelo e um pequeno calo amarelo. Apesar da aparência tropical, é uma planta ligada a florestas montanas úmidas e responde melhor quando recebe muita ventilação, umidade constante e noites mais amenas.",
    origem: "México e América Central",
    regiao: "Sul do México · América Central até o Panamá",
    habitat: "Epífita de florestas montanas úmidas, geralmente entre 1.200 e 1.500 m.",
    clima: "Intermediário a fresco, úmido e muito ventilado.",
    climaFloracao: "Floresce melhor com boa luminosidade filtrada, umidade elevada e noites mais frescas. No litoral quente, o ponto crítico é reduzir o superaquecimento noturno e manter forte circulação de ar. A planta não exige seca intensa para florescer, mas aprecia uma leve redução de água quando os caules já estão maduros.",
    iluminacao: {
        sombrite: "50% a 60%",
        solDireto: "Permitido com restrição",
        horario: "Início da manhã ou final da tarde",
        observacoes: "Na natureza pode ocorrer em condições relativamente claras, mas em cultivo no litoral quente é mais seguro oferecer luz filtrada intensa. Sombra excessiva produz caules fracos e reduz a floração; sol forte nas horas quentes pode desidratar rapidamente folhas e raízes aéreas."
    },
    floracao: "Tende a florescer do fim do inverno até a primavera e o início do verão, com variação conforme clima e maturação dos caules. Para o calendário do site, agosto a janeiro funciona como janela prática de referência.",
    adubacao: "🌿 Orgânica: bokashi apenas em pequena quantidade e preferencialmente em porta-adubo, longe das raízes expostas.\n💧 Foliar/mineral: NPK equilibrado, como 20-20-20, em aproximadamente 1/4 da dose comercial a cada 10 a 15 dias durante crescimento ativo.\n🧪 Liberação lenta: opcional em vaso ou cesto, usando poucos grânulos.\n🚿 Lavagem: faça regas periódicas apenas com água pura para evitar acúmulo de sais.",
    rega: "Mantenha hidratação regular durante todo o ano, sobretudo enquanto os caules e raízes estão em crescimento. O suporte deve drenar rapidamente e nunca permanecer encharcado. Depois que os caules amadurecem, pode-se ampliar discretamente o intervalo entre regas, sem permitir desidratação prolongada.",
    suporte: [
        "🥇 Cesto ou cachepô bem ventilado, permitindo expansão dos caules e raízes aéreas.",
        "🥈 Placa de cortiça ou madeira com pequena camada de esfagno junto às raízes.",
        "🥉 Vaso pequeno e bem perfurado, usando mistura leve e de drenagem rápida."
    ],
    substrato: ["🥇 Para Cachepô de Madeira pequeno e bem vazado: 45% casca de pinus fina + 35% perlita de granulometria adequada a raízes finas + 20% esfagno de fibra longa solto (proposta NÃO homologada).", "🥈 Chips de coco pequenos preparados + perlita de granulometria adequada a raízes finas + casca de pinus fina (alternativa qualitativa sem percentuais homologados).", "🥉 Esfagno de fibra longa solto + perlita de granulometria adequada a raízes finas (alternativa qualitativa sem percentuais homologados; controlar a retenção)."],
    formasCultivo: {
        perfilVisual: "epifita-montana-caules-finos-keikis",
        destaque: "Cachepô de Madeira",
        resumo: "Epífita montana de caules finos e raízes aéreas, com tendência a formar keikis. Precisa de umidade regular, boa luz filtrada, circulação constante e noites menos abafadas.",
        metodos: [
            { nome: "Cachepô de Madeira", asset: "cesto-madeira", estrelas: 5, status: "Mais recomendado na ficha", texto: "Cachepô aberto e bem ventilado, com espaço para expansão dos caules, raízes aéreas e keikis." },
            { nome: "Placa / tronco", asset: "placa-tronco", estrelas: 5, status: "Muito recomendado", texto: "Montagem em cortiça ou madeira com camada fina de esfagno sob as raízes, exigindo umidade frequente." },
            { nome: "Vaso plástico vasado", asset: "vaso-plastico-vasado", estrelas: 4, status: "Alternativa", texto: "Vaso pequeno e muito perfurado, com mistura leve e sem água estagnada." },
            { nome: "Vaso de Barro", asset: "vaso-barro", estrelas: 3, status: "Uso condicional", texto: "Vaso pequeno e bem drenado, com atenção à secagem acelerada das raízes delicadas." }
        ]
    },
    substratoVisual: {
        titulo: "Substrato ideal",
        contexto: "Mistura principal para cachepô bem vazado; montagem em placa como método alternativo",
        resumo: "Substrato leve e arejado, mantendo umidade moderada sem saturação prolongada.",
        justificativa: "Epidendrum centropetalum (sin. Oerstedella centradenia) é epífita montana de caules finos e raízes aéreas, exigindo umidade regular, boa ventilação e noites menos abafadas. Para cachepô de madeira bem vazado, a receita visual propõe pinus fino, perlita de granulometria adequada a raízes finas e esfagno de fibra longa solto, totalizando 100%. As duas outras misturas são alternativas qualitativas distintas e não fundamentam os percentuais visuais. A montagem em placa/tronco com fina camada de esfagno é outro método, não a receita principal. MACS 1.1: inferência horticultural sem homologação quantitativa específica.",
        receitaTexto: "45% casca de pinus fina + 35% perlita de granulometria adequada a raízes finas + 20% esfagno de fibra longa solto (proposta não homologada).",
        perfil: ["Epífita montana", "Caules finos", "Raízes aéreas", "Forma keikis", "Umidade regular"],
        comportamento: [
            { nome: "Retenção", valor: 3, icone: "💧" },
            { nome: "Aeração", valor: 4, icone: "💨" },
            { nome: "Secagem", valor: 3, icone: "⚡" },
            { nome: "Compactação", valor: 2, icone: "🧱" }
        ],
        itens: [
            { asset: "casca-pinus", nome: "Casca de pinus fina", proporcao: "45%", nota: "estrutura", finalidade: "Apoia raízes delicadas sem formar massa compacta." },
            { asset: "perlita", nome: "Perlita de granulometria adequada a raízes finas", proporcao: "35%", nota: "aeração", finalidade: "Favorece circulação de ar e drenagem." },
            { asset: "esfagno", nome: "Esfagno de fibra longa solto", proporcao: "20%", nota: "retenção leve", finalidade: "Ajuda a evitar secagem prolongada sem encharcar." }
        ],
        alerta: "Evitar calor noturno abafado, sol forte do meio do dia, substrato encharcado e seca prolongada. Não retirar keikis antes de desenvolverem raízes suficientes.",
        notaEvidencia: "MACS 1.1 — revisão documental: Epidendrum centropetalum (sin. Oerstedella centradenia), epífita montana com caules finos, keikis e raízes aéreas; umidade regular, ventilação e noites menos abafadas são importantes. Cachepô de Madeira bem vazado é suporte principal; placa/tronco com esfagno fino é método alternativo, não receita principal. Receita visual e textual coincidem: 45% pinus fino + 35% perlita de granulometria adequada a raízes finas + 20% esfagno de fibra longa solto = 100%. Exatamente duas outras misturas qualitativas distintas: chips de coco pequenos preparados/perlita/pinus fino e esfagno de fibra longa solto/perlita. Não fundamentam os percentuais visuais. Sem ensaio quantitativo específico nem consulta individualizada a até 25 produtores brasileiros; percentuais e estrelas NÃO HOMOLOGADOS."
    },
    errosComuns: [
        "Cultivar em ambiente quente e sem circulação de ar",
        "Manter sombra excessivamente profunda",
        "Deixar raízes e caules jovens secarem por longos períodos",
        "Manter o substrato permanentemente encharcado",
        "Aplicar adubo concentrado sobre raízes aéreas",
        "Cortar keikis saudáveis antes de desenvolverem boas raízes",
        "Usar vaso grande e pouco aerado",
        "Expor ao sol forte do meio do dia"
    ],
    dica: "🏆 Aproveite o hábito de formar keikis: em vez de removê-los cedo, deixe que criem raízes e ajudem a formar uma touceira cheia. No litoral quente, mantenha a planta em posição muito ventilada e com luz filtrada forte; noites menos abafadas costumam fazer mais diferença do que aumentar a adubação.",
    revisaoCientificaIAR: {
        "nome": "Epidendrum centropetalum",
        "statusTaxonomico": "Espécie/nome infraespecífico tratado como aceito na revisão taxonômica de referência.",
        "sinonimosPrincipais": "Verificados prioritariamente em POWO/GBIF/Tropicos; manter apenas os relevantes ao catálogo.",
        "morfologiaDimensoes": "Epidendrum centropetalum é uma espécie delicada e muito charmosa da América Central, conhecida durante décadas em coleções como Oerstedella centradenia. Seus caules finos lembram pequenas hastes e podem produzir keikis ao longo do crescimento, criando touceiras leves e ramificadas. As inflorescências surgem no topo dos caules maduros e carregam várias flores rosa-intenso, marca",
        "habitatAltitudeClima": "Epífita de florestas montanas úmidas, geralmente entre 1.200 e 1.500 m. | Intermediário a fresco, úmido e muito ventilado.",
        "distribuicaoGeografica": "Do sul do México ao Panamá.",
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
        "indice": 45,
        "classificacao": "Moderada",
        "cultivoEstrelas": 3,
        "criterios": {
            "temperatura": {
                "notaDificuldade": 3,
                "peso": 15
            },
            "rega": {
                "notaDificuldade": 2,
                "peso": 15
            },
            "umidade": {
                "notaDificuldade": 2,
                "peso": 10
            },
            "ventilacao": {
                "notaDificuldade": 2,
                "peso": 10
            },
            "luminosidade": {
                "notaDificuldade": 2,
                "peso": 10
            },
            "raizesSubstrato": {
                "notaDificuldade": 2,
                "peso": 10
            },
            "sazonalidade": {
                "notaDificuldade": 1,
                "peso": 10
            },
            "floracao": {
                "notaDificuldade": 3,
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
            "indice": 49,
            "estrelas": 3,
            "fatores": {
                "habitatNatural": {
                    "nota": 2,
                    "peso": 30
                },
                "temperatura": {
                    "nota": 2,
                    "peso": 30
                },
                "aguaUmidade": {
                    "nota": 4,
                    "peso": 5
                },
                "ventilacao": {
                    "nota": 5,
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
                    "nota": 2,
                    "peso": 20
                }
            }
        },
        "montanhaFrio": {
            "indice": 97,
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
                    "nota": 5,
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
        litoralQuente: { texto: "Pode crescer bem com 50% a 60% de sombreamento, umidade alta e ventilação constante, mas noites muito quentes e abafadas podem reduzir vigor e floração." },
        montanhaFrio: { texto: "Noites frescas e boa umidade se aproximam bastante das condições montanas onde a espécie ocorre naturalmente." }
    },
    mesesFloracao: [8, 9, 10, 11, 12, 1],
    "selosCultivo": {
        "rega": { "nivel": "moderada", "regime": "reduzir-repouso", "evitarEncharcamento": true },
        "climaFloracao": { "faixa": "ameno", "quedaTermica": true }
    },
        avaliacoes: {
        cultivo: 3,
        floracao: 4,
        perfume: 1,
        luminosidade: 3,
        agua: 4,
        raridade: 4
    }
};
