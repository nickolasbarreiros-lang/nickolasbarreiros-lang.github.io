// Refinamento final — revisão consolidada com fontes botânicas e de cultivo.

export const encycliaGallopavina = {
    id: "encyclia-gallopavina",
    nome: "Encyclia gallopavina",
    genero: "Encyclia",
    sinonimo: "Encyclia purpurachyla",
    tipo: "Espécie botânica",
    dificuldade: "Moderada",
    caracteristicas: [
        "Espécie brasileira",
        "Sudeste do Brasil",
        "Epífita da Mata Atlântica",
        "Pseudobulbos arredondados e bifoliados",
        "Inflorescência ereta e ramificada",
        "Flores de aproximadamente 3 cm",
        "Perfumada",
        "Boa luminosidade"
    ],
    fotos: [
        "imagens/Encyclia gallopavina/Encyclia gallopavina1.webp",
        "imagens/Encyclia gallopavina/Encyclia gallopavina2.jpeg",
        "imagens/Encyclia gallopavina/Encyclia gallopavina3.jpg",
        "imagens/Encyclia gallopavina/Encyclia gallopavina4.jpeg"
    ],
    descricao: "Encyclia gallopavina é uma orquídea epífita brasileira de pseudobulbos arredondados, geralmente com duas folhas firmes no ápice. De cada pseudobulbo maduro pode surgir uma haste ereta e ramificada, que alcança cerca de 90 cm e reúne numerosas flores de aproximadamente 3 cm. As sépalas e pétalas têm tons verde-oliva, enquanto o labelo exibe um pequeno lobo central rosado com bordas claras, lembrando um desenho delicado. O perfume das flores é descrito como semelhante ao chá. Nativa de florestas úmidas da Mata Atlântica, chama atenção pela abundância floral e pelo contraste entre o verde das pétalas e o rosa do labelo.",
    origem: "Brasil",
    regiao: "Sudeste brasileiro",
    habitat: "Mata Atlântica úmida · epífita.",
    clima: "Quente a intermediário · ventilado.",
    climaFloracao: "POWO associa a espécie ao bioma tropical úmido do Sudeste brasileiro, enquanto referências de cultivo a tratam como planta de luminosidade relativamente alta e crescimento quente. A floração tende a acompanhar a maturação completa dos pseudobulbos e pode ocorrer da primavera ao verão. Uma leve redução das regas após o amadurecimento pode ajudar, mas não deve ser transformada em repouso seco rígido.",
    iluminacao: {
        sombrite: "40% a 50%",
        solDireto: "Permitido com restrição",
        horario: "Início da manhã ou final da tarde",
        observacoes: "Prefere claridade alta e filtrada. Folhas muito escuras e vegetação alongada indicam falta de luz; amarelecimento intenso ou queimaduras mostram excesso de sol/calor."
    },
    floracao: "No Brasil, Encyclia gallopavina floresce principalmente na primavera e no verão, embora ainda faltem registros mensais suficientes para marcar um calendário preciso. As hastes florais surgem de pseudobulbos maduros, são eretas ou levemente arqueadas e podem alcançar cerca de 90 cm, com ramificações e dezenas de flores; em exemplares vigorosos, uma haste pode reunir até aproximadamente 50. As flores medem em torno de 3 cm, com sépalas e pétalas verde-oliva, por vezes tingidas de castanho, e labelo de centro rosado com margem branca, contraste característico descrito na Flora do Brasil. São perfumadas, com fragrância descrita como semelhante à de chá. Apesar de relatos de flores persistentes, não foi possível confirmar quantos dias dura cada flor ou o conjunto da floração especificamente nesta espécie.",
    adubacao: "🌿 Orgânica: bokashi leve na borda do vaso a cada 60–90 dias durante crescimento ativo.\n💧 Mineral/Foliar: NPK equilibrado em 1/4 a 1/3 da dose semanal ou quinzenalmente durante brotação e enraizamento.\n🌱 Maturação: reduza excesso de nitrogênio quando o pseudobulbo estiver completo.\n🧪 Liberação lenta: pode ser usada em pequena quantidade em vasos muito drenantes.\n🚿 Lavagem: faça regas periódicas somente com água para remover sais.",
    rega: "Regue abundantemente durante a formação de novos brotos e raízes, sempre permitindo drenagem completa. Após o pseudobulbo amadurecer, aumente um pouco o intervalo entre regas, sem desidratar severamente a planta. No litoral quente, ajuste a frequência pela velocidade real de secagem, não pelo calendário.",
    suporte: "🥇 Cachepô de madeira bem vazado — excelente aeração para raízes grossas.\n🥈 Vaso pequeno de barro — ajuda na evaporação e estabilidade.\n🥉 Placa de cortiça ou madeira — boa opção em ambientes úmidos e com regas frequentes.",
    substrato: ["Casca de pinus média/grossa + perlita grossa + carvão vegetal + pequena fração de chips de coco médios lavados","Casca de macadâmia média + argila expandida + carvão vegetal + casca de pinus grossa"],
    formasCultivo: {
        perfilVisual: "encyclia-epifita-raizes-grossas",
        destaque: "Cachepô de Madeira",
        resumo: "Epífita de pseudobulbos robustos e raízes que exigem excelente aeração. Prefere luz alta filtrada, umidade durante o crescimento e leve redução das regas após a maturação, sem seca rigorosa.",
        metodos: [
            { nome: "Cachepô de Madeira", asset: "cesto-madeira", estrelas: 5, status: "Mais recomendado na ficha", texto: "Cachepô bem vazado e proporcional à touceira, oferecendo ventilação às raízes grossas e drenagem rápida." },
            { nome: "Vaso de Barro", asset: "vaso-barro", estrelas: 5, status: "Muito recomendado", texto: "Vaso pequeno, drenante e estável, com mistura grossa e rizoma mantido acima da superfície." },
            { nome: "Placa / tronco", asset: "placa-tronco", estrelas: 4, status: "Alternativa em ambiente úmido", texto: "Montagem em cortiça ou madeira, exigindo regas mais frequentes durante o crescimento ativo." },
            { nome: "Vaso plástico vasado", asset: "vaso-plastico-vasado", estrelas: 4, status: "Alternativa", texto: "Recipiente proporcional e muito perfurado, sem retenção contínua de água ao redor das raízes." }
        ]
    },
    substratoVisual: {
        titulo: "Substrato ideal",
        contexto: "Proposta para cachepô bem vazado ou vaso pequeno",
        resumo: "Mistura de granulometria média a grossa, arejada e de secagem perceptível entre regas.",
        justificativa: "A receita 35/30/20/15 é uma proposta horticultural sem ensaio quantitativo específico da espécie; estudos de substrato com híbridos de Encyclia não a homologam. Encyclia gallopavina se beneficia de raízes ventiladas e secagem perceptível entre regas. Em cachepô vazado ou vaso de barro, as cascas de macadâmia e pinus dão apoio, enquanto a perlita e o carvão mantêm a mistura aberta e drenante. Como os recipientes secam em velocidades diferentes, observe a umidade junto às raízes e ajuste a frequência das regas sem compactar o substrato.",
        receitaTexto: "Proposta horticultural NÃO HOMOLOGADA para a espécie: 35% casca de macadâmia média + 30% casca de pinus média + 20% perlita grossa + 15% carvão vegetal.",
        perfil: ["Epífita de raízes grossas", "Pseudobulbos robustos", "Luz alta filtrada", "Crescimento úmido", "Redução discreta após maturação"],
        comportamento: [
            { nome: "Retenção", valor: 2, icone: "💧" },
            { nome: "Aeração", valor: 5, icone: "💨" },
            { nome: "Secagem", valor: 4, icone: "⚡" },
            { nome: "Compactação", valor: 1, icone: "🧱" }
        ],
        itens: [
            { asset: "casca-macadamia", nome: "Casca de macadâmia média", proporcao: "35%", nota: "estrutura", finalidade: "Mantém espaço para raízes grossas e boa circulação de ar." },
            { asset: "casca-pinus", nome: "Casca de pinus média", proporcao: "30%", nota: "drenagem", finalidade: "Ajuda na fixação das raízes sem compactação." },
            { asset: "perlita", nome: "Perlita grossa", proporcao: "20%", nota: "aeração", finalidade: "Favorece drenagem e reduz retenção excessiva." },
            { asset: "carvao-vegetal", nome: "Carvão vegetal", proporcao: "15%", nota: "estabilidade", finalidade: "Complementa a estrutura aberta da mistura." }
        ],
        alerta: "Não enterrar o rizoma, usar vaso grande ou reduzir água antes da maturação dos pseudobulbos. Evitar sombra profunda e seca prolongada.",
        notaEvidencia: "MACS 1.1 — revisão documental: Encyclia gallopavina, epífita de raízes grossas e pseudobulbos robustos, exige boa aeração e secagem entre regas sem repouso seco rígido. Suportes cachepô madeira e vaso barro 5 estrelas, placa/tronco e plástico vasado 4; notas horticulturais não homologadas. Receita visual 35% macadâmia média + 30% pinus médio + 20% perlita grossa + 15% carvão = 100%; receitaTexto e itens concordam. Receita principal textual e visual coincidem; duas alternativas qualitativas distintas são apresentadas separadamente. Granulometria e secagem em cachepô versus barro carecem de validação por evidências específicas; meta até 25 produtores brasileiros específicos não atingida. POWO aceita E. gallopavina e registra E. purpurachyla como sinônimo heterotípico, além do basiônimo Epidendrum gallopavinum. Flora do Brasil 2020 descreve sépalas/pétalas verde-oliva e lobo mediano rosado de margem branca, com ocorrências confirmadas no Sudeste. IOSPE registra pseudobulbos esféricos bifoliados, inflorescência paniculada de até 90 cm, até 50 flores de 3 cm e fragrância de chá. Estudo brasileiro em Ornamental Horticulture sobre adubação e substrato examinou híbrido de Encyclia, não a espécie; não constitui homologação. Zero produtores brasileiros com receita quantitativa específica verificados nesta passagem; meta até 25 não atingida. Percentuais e estrelas NÃO HOMOLOGADOS."
    },
    errosComuns: "Cultivar em sombra; vaso grande demais; substrato velho; raízes continuamente encharcadas; enterrar o rizoma; reduzir água cedo demais durante crescimento; excesso de nitrogênio após a maturação; replantar sem raízes novas; calor abafado com substrato molhado; impor seca rigorosa por longos períodos.",
    dica: "Espere o novo pseudobulbo terminar de crescer antes de diminuir discretamente a frequência das regas. O objetivo é marcar uma mudança de estação sem desidratar a planta. Em clima quente, o melhor estímulo para florir costuma ser luz alta filtrada + pseudobulbo maduro + raízes bem aeradas, e não seca extrema.",
    revisaoCientificaIAR: {
        "nome": "Encyclia gallopavina",
        "statusTaxonomico": "Encyclia gallopavina (Rchb.f.) Porto & Brade (1935), espécie aceita em POWO; basiônimo Epidendrum gallopavinum Rchb.f. (1855).",
        "sinonimosPrincipais": "Epidendrum gallopavinum (basiônimo homotípico); Encyclia purpurachyla e Epidendrum purpurachylum (sinônimos heterotípicos).",
        "morfologiaDimensoes": "Pseudobulbos esféricos bifoliados, inflorescência terminal paniculada até cerca de 90 cm, com numerosas flores de 3 cm; segmentos verde-oliva e lobo mediano do labelo rosado de margem branca (Flora do Brasil 2020; IOSPE).",
        "habitatAltitudeClima": "Mata Atlântica úmida · epífita. | Quente a intermediário · ventilado.",
        "distribuicaoGeografica": "Sudeste brasileiro.",
        "cultivoPremiacao": "Estudo brasileiro sobre substrato e adubação em híbrido de Encyclia não valida receitas de E. gallopavina; ausência de ensaio específico identificado.",
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
        "indice": 40,
        "classificacao": "Moderada",
        "cultivoEstrelas": 3,
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
                "notaDificuldade": 1,
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
        },
        "montanhaFrio": {
            "indice": 64,
            "estrelas": 4,
            "fatores": {
                "habitatNatural": {
                    "nota": 3,
                    "peso": 30
                },
                "temperatura": {
                    "nota": 3,
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
                    "nota": 3,
                    "peso": 20
                }
            }
        }
    },
        adaptacaoRegional: {
        litoralQuente: { texto: "Desde que receba ventilação contínua, alta luminosidade filtrada e secagem rápida do substrato. Evite calor parado e noites com raízes saturadas." },
        montanhaFrio: { texto: "Em períodos frios e nublados, reduza a frequência das regas para acompanhar a menor evaporação." }
    },
    mesesFloracao: [],
    "selosCultivo": {
        "rega": { "nivel": "frequente" },
        "climaFloracao": { "faixa": "quente" }
    },
        avaliacoes: {
        cultivo: 3,
        floracao: 4,
        perfume: 3,
        luminosidade: 4,
        agua: 3,
        raridade: 3
    }
};
