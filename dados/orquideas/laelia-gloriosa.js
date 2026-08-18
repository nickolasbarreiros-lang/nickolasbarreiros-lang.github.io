// Ficha V4 refinada — Laelia gloriosa.

export const laeliaGloriosa = {
    id: "schomburgkia",
    nome: "Laelia gloriosa",
    genero: "Laelia",
    sinonimo: "Schomburgkia gloriosa",
    tipo: "Espécie botânica",
    dificuldade: "Fácil",
    caracteristicas: [
        "Espécie epífita de grande porte",
        "Pseudobulbos fusiformes e robustos",
        "Inflorescências muito longas",
        "Flores onduladas e multiflorais",
        "Exige luminosidade muito alta"
    ],
    fotos: [
        "imagens/Laelia gloriosa/Laelia gloriosa1.jpeg",
        "imagens/Laelia gloriosa/Laelia gloriosa2.jpeg",
        "imagens/Laelia gloriosa/Laelia gloriosa3.jpeg",
        "imagens/Laelia gloriosa/Laelia gloriosa4.jpeg"
    ],
    descricao: "Uma orquídea feita para chamar atenção à distância! Laelia gloriosa forma touceiras grandes, com pseudobulbos robustos e hastes florais que podem ultrapassar 1 metro, terminando em cachos de numerosas flores onduladas e vistosas. É uma espécie tropical do norte da América do Sul e da Amazônia, encontrada geralmente entre cerca de 200 e 850 m, onde cresce em árvores bem iluminadas e ventiladas. Seu cultivo combina calor, muita claridade, água abundante durante o crescimento e secagem rápida das raízes.",
    origem: "Norte da América do Sul e Amazônia.",
    regiao: "Venezuela, Colômbia, Equador, Guianas e norte do Brasil.",
    habitat: "Florestas tropicais · epífita · ~200–850 m.",
    clima: "Quente · úmido · alta luz · ventilado.",
    climaFloracao: "Pseudobulbos maduros, luminosidade elevada e raízes saudáveis favorecem hastes fortes. Após o crescimento, aumente moderadamente o intervalo entre regas, sem provocar desidratação severa. Por ser uma espécie tropical de baixa a média altitude, não necessita de frio intenso para florescer.",
    iluminacao: {
        sombrite: "30% a 50%",
        solDireto: "Sim, quando aclimatada",
        horario: "Sol suave da manhã",
        observacoes: "Folhas firmes em verde-claro indicam boa luminosidade. Verde muito escuro costuma produzir crescimento sem floração; amarelecimento forte, manchas secas ou aquecimento foliar indicam excesso."
    },
    floracao: "Predomina do outono ao início do inverno. Hastes terminais podem ultrapassar 1,2 m e carregar aproximadamente 8–15 flores agrupadas no ápice, com flores cerosas de cerca de 5 cm.",
    adubacao: "🌿 Orgânica: bokashi em porta-adubo durante a brotação.\n💧 Foliar: NPK equilibrado em baixa concentração a cada 7–15 dias durante o crescimento ativo.\n🧪 Liberação lenta: dose baixa a moderada conforme o tamanho do recipiente, sem contato direto com raízes novas. Após a maturação, reduza a frequência e o excesso de nitrogênio, sem necessidade de suspender toda nutrição. Periodicamente lave o substrato com água pura.",
    rega: "Durante a emissão de brotos e raízes novas, regue abundantemente e permita secagem rápida antes da próxima irrigação. Após a maturação dos pseudobulbos, aumente moderadamente o intervalo, especialmente em períodos frios ou nublados, sem causar enrugamento severo.",
    suporte: "🥇 Cesto grande e robusto de madeira, firmemente suspenso ou fixado.\n🥈 Vaso de barro pesado, largo e muito furado.\n🥉 Fixação definitiva em tronco de árvore, apenas onde não haja geadas e seja possível regar durante o estabelecimento.",
    substrato: "🥇 Casca de macadâmia média + pinus médio + pedra-pomes + carvão vegetal.\n🥈 Pinus médio/grosso + pedra-pomes + carvão + chips de coco em baixa proporção.\n🥉 Casca de macadâmia + argila expandida + carvão vegetal + pinus grosso.\n⭐ Alternativa: Chips de coco grossos + pedra-pomes + carvão + pinus médio, com secagem clara entre regas.",
    errosComuns: "Cultivar em sombra; usar recipiente leve e instável; empregar substrato fino ou compactado; manter raízes constantemente molhadas; dar pouco espaço ao rizoma; não reservar espaço vertical para a haste; deixar água acumulada em brotos novos; adubar raízes secas com solução concentrada; usar Schomburgkia crispa como sinônimo; cortar haste ainda verde.",
    dica: "🏆 Planeje o cultivo para o tamanho adulto. Use cesto robusto ou vaso pesado, dê espaço ao rizoma e reserve área livre para uma haste que pode passar de 1 metro. No crescimento, forneça água e nutrição com generosidade; depois, mantenha muita luz e apenas reduza moderadamente as regas.",
    indiceAdaptacaoRegional: {
        versao: "IAR 1.1",
        escala: "compatibilidade",
        litoralQuente: {
            indice: 74,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 5, peso: 30 },
                temperatura: { nota: 3, peso: 30 },
                aguaUmidade: { nota: 3, peso: 5 },
                ventilacao: { nota: 3, peso: 5 },
                luminosidade: { nota: 4, peso: 5 },
                sazonalidade: { nota: 4, peso: 5 },
                floracao: { nota: 3, peso: 20 }
            }
        },
        montanhaFrio: {
            indice: 62,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 3, peso: 30 },
                temperatura: { nota: 3, peso: 30 },
                aguaUmidade: { nota: 3, peso: 5 },
                ventilacao: { nota: 4, peso: 5 },
                luminosidade: { nota: 3, peso: 5 },
                sazonalidade: { nota: 4, peso: 5 },
                floracao: { nota: 3, peso: 20 }
            }
        }
    },
    adaptacaoRegional: {
        litoralQuente: { texto: "Ao calor de litoral quente quando recebe luminosidade elevada, ventilação constante, rega abundante durante o crescimento e secagem rápida. Fixe firmemente o recipiente contra vento e tombamento." },
        montanhaFrio: { texto: "Tolera noites amenas, mas deve ser protegida de geadas e de períodos frios prolongados com raízes molhadas. Mantenha alta luminosidade mesmo no inverno." }
    },
    mesesFloracao: [9, 10, 11, 12, 1, 2],
    "selosCultivo": {
        "rega": { "nivel": "moderada", "regime": "reduzir-repouso" },
        "climaFloracao": { "faixa": "quente", "floraNoCalor": true }
    },
    indiceDificuldadeCultivo: {
        versao: "IDC 2.0",
        referenciaRegional: "Litoral de clima quente",
        indice: 23,
        nivel: "Fácil",
        fatores: {
            temperatura: { nota: 0, peso: 18 },
            agua: { nota: 1, peso: 15 },
            umidadeVentilacao: { nota: 2, peso: 12 },
            luminosidade: { nota: 1, peso: 8 },
            raizes: { nota: 1, peso: 15 },
            cicloRepouso: { nota: 1, peso: 12 },
            floracao: { nota: 2, peso: 20 }
        }
    },
    avaliacoes: {
        cultivo: 2,
        floracao: 4,
        perfume: 2,
        luminosidade: 5,
        agua: 3,
        raridade: 4
    }
};
