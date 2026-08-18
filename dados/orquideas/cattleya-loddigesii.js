// Refinamento Final — Lote 07. Conteúdo preservado, confrontado e consolidado com fontes taxonômicas e ecológicas.
// Ficha científica e de cultivo revisada — Refinamento Lote 08.

export const cattleyaLoddigesii = {
    id: "cattleya-loddigesii",
    nome: "Cattleya loddigesii",
    genero: "Cattleya",
    sinonimo: "Cattleya arembergii",
    tipo: "Espécie botânica",
    dificuldade: "Moderada",
    caracteristicas: [
        "Bifoliada clássica",
        "Espécie brasileira",
        "Flores lilás-rosadas",
        "Touceiras vigorosas"
    ],
    fotos: [
        "imagens/Cattleya loddigesii/Cattleya loddigesii1.webp",
        "imagens/Cattleya loddigesii/Cattleya loddigesii2.webp",
        "imagens/Cattleya loddigesii/Cattleya loddigesii3.jpg",
        "imagens/Cattleya loddigesii/Cattleya loddigesii4.jpg"
    ],
    descricao: "Clássica, vigorosa e muito florífera, Cattleya loddigesii é uma das grandes representantes das Cattleyas bifoliadas brasileiras. Seus pseudobulbos alongados sustentam normalmente duas folhas firmes e, quando maduros, produzem flores cerosas em delicados tons de rosa a lilás, com labelo mais intenso e um belo toque amarelado na região central. Com o tempo, pode formar grandes touceiras e oferecer várias hastes simultaneamente, criando uma floração cheia e elegante. É uma espécie bastante adaptável e recompensadora, especialmente quando cultivada com boa luminosidade, ventilação constante e raízes livres para respirar.",
    origem: "Brasil",
    regiao: "Sudeste ao Paraná",
    habitat: "Florestas sazonais · epífita ou rupícola",
    clima: "Quente a intermediário · sazonal",
    climaFloracao: "A floração depende principalmente da maturação completa de pseudobulbos robustos sob boa luminosidade. No período mais frio ou de menor atividade, a frequência das regas pode ser reduzida, mas sem impor repouso seco rigoroso. Touceiras adultas com várias frentes produzem florações mais volumosas por concentrarem vários pseudobulbos maduros no mesmo ciclo.",
    iluminacao: {
        sombrite: "40% a 60% — 50% como referência inicial",
        solDireto: "Apenas sol suave",
        horario: "Primeiras horas da manhã",
        observacoes: "O melhor indicador é o conjunto formado por pseudobulbos robustos, folhas firmes e crescimento compacto. Folhas muito escuras e pseudobulbos finos ou alongados sugerem falta de luz e costumam acompanhar floração irregular."
    },
    floracao: "Predominantemente do inverno ao início da primavera, mais comum entre junho e setembro, podendo avançar até outubro conforme clone e clima.",
    adubacao: "🌿 Orgânica: bokashi em pequena quantidade a cada 60 a 90 dias durante o crescimento ativo.\n💧 Foliar: NPK equilibrado, como 20-20-20, em 1/4 a 1/3 da dose semanal ou quinzenalmente enquanto houver brotos e raízes em crescimento. Próximo à maturação dos pseudobulbos, pode-se reduzir a frequência ou o nitrogênio, sem necessidade de adubos excessivamente ricos em fósforo.\n🧪 Liberação lenta: Osmocote 14-14-14 ou equivalente em dose moderada, sem encostar diretamente nas raízes novas e evitando sobreposição com adubação líquida intensa.",
    rega: "Durante brotação e enraizamento, regue abundantemente e permita que o substrato perca boa parte da umidade antes da próxima irrigação. No outono e inverno, reduza a frequência conforme temperatura, chuva, atividade radicular e velocidade de secagem, sem deixar os pseudobulbos desidratarem em excesso. Cattleya loddigesii não exige repouso seco rigoroso.",
    suporte: "🥇 Vaso de barro pequeno ou médio, apenas do tamanho necessário.\n🥈 Cachepô de madeira, excelente para formar touceiras com várias frentes.\n🥉 Placa ou tronco, especialmente em ambientes de alta umidade, lembrando que plantas adultas ficam pesadas e exigem regas mais frequentes.",
    substrato: "🥇 Casca de macadâmia média + pinus médio + pedra-pomes + carvão vegetal.\n🥈 Pinus médio/grosso + pedra-pomes + carvão + chips de coco em baixa proporção.\n🥉 Casca de macadâmia + argila expandida + carvão vegetal + pinus grosso.\n⭐ Alternativa: Chips de coco grossos + pedra-pomes + carvão + pinus médio, com secagem clara entre regas.",
    errosComuns: "Cultivar sob sombra excessiva; secar demais durante crescimento ativo; manter substrato velho, compactado ou constantemente molhado; usar vaso muito grande; enterrar o rizoma; replantar sem novas raízes em emissão; quebrar raízes novas durante o replante; dividir touceiras pequenas; aplicar fertilizante em excesso.",
    dica: "Replante apenas quando as primeiras pontas de raízes novas surgirem na base do crescimento mais recente. Esse é o momento em que a planta coloniza rapidamente o novo recipiente. Evite dividir apenas para organizar a touceira: várias frentes significam mais reservas, mais raízes e vários pseudobulbos capazes de florir simultaneamente.",
    indiceAdaptacaoRegional: {
        versao: "IAR 1.0",
        escala: "compatibilidade",
        litoralQuente: {
            indice: 65,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 3, peso: 20 },
                temperatura: { nota: 4, peso: 20 },
                aguaUmidade: { nota: 3, peso: 15 },
                ventilacao: { nota: 3, peso: 10 },
                luminosidade: { nota: 4, peso: 10 },
                sazonalidade: { nota: 2, peso: 5 },
                floracao: { nota: 3, peso: 20 }
            }
        },
        montanhaFrio: {
            indice: 78,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 3, peso: 20 },
                temperatura: { nota: 4, peso: 20 },
                aguaUmidade: { nota: 3, peso: 15 },
                ventilacao: { nota: 4, peso: 10 },
                luminosidade: { nota: 4, peso: 10 },
                sazonalidade: { nota: 5, peso: 5 },
                floracao: { nota: 5, peso: 20 }
            }
        }
    },
    adaptacaoRegional: {
        litoralQuente: { texto: "Adapta-se muito bem à Litoral de clima quente. Mantenha luminosidade alta filtrada, substrato aberto e ventilação constante. No verão, uma planta em vaso muito aerado pode exigir bastante água; no inverno, ajuste a frequência pela secagem real, não apenas pelo calendário." },
        montanhaFrio: { texto: "Desenvolve-se muito bem com noites frescas. Mantenha boa claridade, reduza as regas durante sequências frias e úmidas e proteja apenas contra geadas diretas." }
    },
    mesesFloracao: [6, 7, 8, 9, 10],
    "selosCultivo": {
        "rega": { "nivel": "moderada", "regime": "reduzir-inverno" },
        "climaFloracao": { "faixa": "quente" }
    },
    indiceDificuldadeCultivo: {
        versao: "IDC 2.0",
        referenciaRegional: "Litoral de clima quente",
        indice: 49,
        nivel: "Moderada",
        fatores: {
            temperatura: { nota: 1, peso: 18 },
            agua: { nota: 1, peso: 15 },
            umidadeVentilacao: { nota: 4, peso: 12 },
            luminosidade: { nota: 1, peso: 8 },
            raizes: { nota: 3, peso: 15 },
            cicloRepouso: { nota: 1, peso: 12 },
            floracao: { nota: 5, peso: 20 }
        }
    },
    avaliacoes: {
        cultivo: 3,
        floracao: 4,
        perfume: 3,
        luminosidade: 4,
        agua: 3,
        raridade: 2
    }
};
