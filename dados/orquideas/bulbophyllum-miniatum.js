// Revisão final — Lote 05.
// Identificador histórico preservado por compatibilidade do catálogo.
// POWO: Bulbophyllum miniatum é sinônimo de Bulbophyllum saltatorium var. albociliatum.

export const bulbophyllumMiniatum = {
    id: "bulbophyllum-miniatum",
    nome: "Bulbophyllum saltatorium var. albociliatum",
    sinonimo: "Bulbophyllum miniatum",
    genero: "Bulbophyllum",
    tipo: "Variedade botânica epífita africana",
    dificuldade: "Moderada",
    caracteristicas: ["Miniatura epífita", "Rizoma rastejante", "Flores alaranjadas", "Margens ciliadas claras", "Labelo móvel", "Clima quente"],
    fotos: [
        "imagens/Bulbophyllum miniatum/Bulbophyllum miniatum1.jpeg",
        "imagens/Bulbophyllum miniatum/Bulbophyllum miniatum2.jpeg",
        "imagens/Bulbophyllum miniatum/Bulbophyllum miniatum3.webp",
        "imagens/Bulbophyllum miniatum/Bulbophyllum miniatum4.webp"
    ],
    descricao: "Uma pequena africana cheia de movimento! A planta conhecida em muitas coleções como *Bulbophyllum miniatum* cresce com pseudobulbos espaçados sobre um rizoma rastejante e produz hastes pendentes com várias flores em tons de amarelo, laranja a avermelhado. Os cílios claros e o labelo articulado dão às flores um aspecto vivo e delicado, especialmente quando se movimentam com a brisa. Hoje esse nome é tratado como sinônimo de *Bulbophyllum saltatorium* var. *albociliatum*, mas continua muito presente em etiquetas e coleções. Originária de florestas tropicais úmidas africanas, é uma orquídea de clima predominantemente quente que aprecia umidade constante, raízes bem arejadas e boa circulação de ar.",
    origem: "África Tropical.",
    regiao: "África O/C · Uganda · Quênia SW · Angola.",
    habitat: "Florestas úmidas · ~750 m.",
    clima: "Quente · úmido · ventilado.",
    climaFloracao: "A espécie-base é registrada em florestas quentes abaixo de 900 m e floresce sobretudo no inverno; para a variedade albociliatum, a referência ecológica próxima de 750 m reforça preferência por calor moderado com noites ligeiramente mais amenas, não por frio intenso. No litoral quente, a indução floral tende a depender mais da maturação dos pseudobulbos, boa luminosidade filtrada e pequena sazonalidade térmica do que de qualquer repouso seco.",
    iluminacao: {
        sombrite: "60% a 70%",
        solDireto: "Evitar sol forte",
        horario: "Luz filtrada o dia todo",
        observacoes: "Meia-sombra clara é preferível à sombra profunda. Folhas firmes e verde-médio indicam bom equilíbrio. No litoral quente, ventilação constante é indispensável para que a combinação de calor, umidade e sombra não favoreça podridões."
    },
    floracao: "Predomina no período mais fresco do ciclo anual, frequentemente no inverno. Em cultivo brasileiro, junho a agosto é uma referência prática, mas clones podem deslocar a floração conforme microclima e maturação dos crescimentos.",
    adubacao: "🌿 Orgânica: Bokashi em porção pequena, de preferência em sachê e afastado do rizoma.\n💧 Foliar/mineral: NPK equilibrado em 1/4 da dose recomendada a cada 10 a 15 dias durante brotação e enraizamento.\n🧪 Liberação lenta: Osmocote somente em dose muito baixa em vasos/cestos; evite contato direto com raízes finas. Reduza quando os pseudobulbos amadurecerem e faça periodicamente regas abundantes apenas com água para lavar sais.",
    rega: "Mantenha umidade leve e relativamente constante durante o crescimento, sem permitir encharcamento permanente. Em montagem, pode exigir regas diárias no calor; em cesto ou vaso, regue novamente quando a camada superficial começar a perder umidade. Não imponha repouso seco completo.",
    suporte: "🥇 Cortiça ou galho rugoso com fina reserva de esfagno sob as raízes.\n🥈 Cesto raso e largo.\n🥉 Vaso tipo cuia muito perfurado.\nDeixe o rizoma livre e com espaço para avançar.",
    substrato: "🥇 Casca de pinus média + chips de coco + pedra-pomes + pequena fração de esfagno solto.\n🥈 Chips de coco tratados + perlita + carvão vegetal miúdo + pouco esfagno.\n🥉 Casca de macadâmia triturada média + pinus médio + pedra-pomes + esfagno em baixa proporção.\n⭐ Alternativa: Cesto raso com esfagno de fibra longa bem solto + pedra-pomes/perlita, sem compactar o rizoma.",
    errosComuns: "• Tratar Bulbophyllum miniatum como espécie atualmente aceita separada.\n• Enterrar o rizoma ou a base dos pseudobulbos.\n• Compactar esfagno.\n• Confundir alta umidade com substrato saturado.\n• Deixar a planta secar completamente por vários dias.\n• Cultivar em sombra profunda e abafada.\n• Aplicar adubo concentrado sobre raízes finas.\n• Forçar repouso seco para induzir floração.",
    dica: "🏆 O ponto central é separar umidade de encharcamento: mantenha raízes hidratadas, mas o rizoma exposto e aerado. Como a planta avança lateralmente, posicione a parte antiga junto à borda e deixe a frente de crescimento voltada para espaço livre. No litoral quente, 60% a 70% de sombra, ventilação contínua e rega frequente funcionam melhor que tentar produzir frio artificial.",
    indiceAdaptacaoRegional: {
        versao: "IAR 1.1",
        escala: "compatibilidade",
        litoralQuente: {
            indice: 72,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 5, peso: 30 },
                temperatura: { nota: 3, peso: 30 },
                aguaUmidade: { nota: 2, peso: 5 },
                ventilacao: { nota: 4, peso: 5 },
                luminosidade: { nota: 4, peso: 5 },
                sazonalidade: { nota: 2, peso: 5 },
                floracao: { nota: 3, peso: 20 }
            }
        },
        montanhaFrio: {
            indice: 63,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 3, peso: 30 },
                temperatura: { nota: 3, peso: 30 },
                aguaUmidade: { nota: 2, peso: 5 },
                ventilacao: { nota: 4, peso: 5 },
                luminosidade: { nota: 4, peso: 5 },
                sazonalidade: { nota: 5, peso: 5 },
                floracao: { nota: 3, peso: 20 }
            }
        }
    },
        adaptacaoRegional: {
        litoralQuente: { texto: "A origem tropical combina com o litoral quente; o principal cuidado é manter circulação de ar elevada e meio extremamente aerado." },
        montanhaFrio: { texto: "Boa em locais protegidos. Evite frio prolongado e reduza a frequência das regas apenas quando a evaporação cair." }
    },
    mesesFloracao: [6, 7, 8],
    "selosCultivo": {
        "rega": { "nivel": "constante" },
        "climaFloracao": { "faixa": "quente" }
    },
    indiceDificuldadeCultivo: {
        versao: "IDC 2.0",
        referenciaRegional: "Litoral de clima quente",
        indice: 41,
        nivel: "Moderada",
        fatores: {
            temperatura: { nota: 1, peso: 18 },
            agua: { nota: 1, peso: 15 },
            umidadeVentilacao: { nota: 4, peso: 12 },
            luminosidade: { nota: 2, peso: 8 },
            raizes: { nota: 1, peso: 15 },
            cicloRepouso: { nota: 1, peso: 12 },
            floracao: { nota: 4, peso: 20 }
        }
    },
    avaliacoes: { cultivo: 3, floracao: 3, perfume: 1, luminosidade: 3, agua: 5, raridade: 4 }
};
