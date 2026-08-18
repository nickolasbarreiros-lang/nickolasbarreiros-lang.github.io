// Ficha científica e de cultivo revisada — Dendrobium spectabile.

export const dendrobiumSpectabile = {
    id: "dendrobium-spectabile",
    nome: "Dendrobium spectabile",
    genero: "Dendrobium",
    tipo: "Espécie botânica epífita da Oceania",
    dificuldade: "Moderada",
    caracteristicas: [
        "Flores esculturais",
        "Porte médio a grande",
        "Clima quente",
        "Até ~20 flores por haste",
        "Floresta tropical úmida",
        "Crescimento robusto"
    ],
    fotos: [
        "imagens/Dendrobium spectabile/Dendrobium spectabile1.webp",
        "imagens/Dendrobium spectabile/Dendrobium spectabile2.jpg",
        "imagens/Dendrobium spectabile/Dendrobium spectabile3.jpg",
        "imagens/Dendrobium spectabile/Dendrobium spectabile4.jpg"
    ],
    descricao: "Dendrobium spectabile é uma das espécies mais extravagantes do gênero. Suas flores parecem pequenas esculturas vivas: pétalas e sépalas retorcidas, onduladas e irregulares formam desenhos quase impossíveis de repetir de uma flor para outra. A planta desenvolve hastes robustas e, quando madura, produz cachos próximos ao topo com numerosas flores de aparência exótica. Apesar do visual incomum, vem de ambientes tropicais quentes e pode ser uma ótima espécie para coleções de clima litorâneo, desde que receba bastante luz, água durante o crescimento e raízes muito bem ventiladas.",
    origem: "Oceania tropical.",
    regiao: "Nova Guiné, Ilhas Salomão, Vanuatu e Nova Caledônia.",
    habitat: "Epífita de florestas tropicais úmidas; ocasionalmente rupícola, de baixas a altas elevações.",
    clima: "Quente a intermediário, úmido e muito ventilado.",
    climaFloracao: "Plantas maduras florescem melhor depois de uma estação de crescimento vigoroso e bem iluminado. Não exige repouso seco severo, mas uma redução moderada das regas quando as hastes amadurecem e o clima esfria pode acompanhar o ciclo natural. No litoral quente, o desenvolvimento vegetativo tende a ser favorecido.",
    iluminacao: {
        sombrite: "40% a 60%",
        solDireto: "Sol fraco da manhã após aclimatação",
        horario: "Luz filtrada intensa durante grande parte do dia",
        observacoes: "Precisa de boa luminosidade para amadurecer hastes fortes. Sombra profunda pode atrasar a floração. No litoral quente, proteja apenas do sol mais agressivo do meio do dia e mantenha boa circulação de ar."
    },
    floracao: "Predominantemente no inverno e início da primavera. Para o calendário do site, junho a outubro funciona como janela de referência, com variações conforme origem e condições de cultivo.",
    adubacao: "🌿 Orgânica: bokashi pode ser usado em pequena quantidade durante crescimento ativo.\n💧 Foliar/mineral: NPK equilibrado, como 20-20-20, em aproximadamente 1/4 da dose comercial a cada 10 a 15 dias enquanto novos brotos e raízes estiverem ativos.\n🧪 Liberação lenta: opcional, com poucos grânulos em vasos ou cestos.\n🚿 Lavagem: faça regas abundantes somente com água periodicamente para evitar acúmulo de sais.",
    rega: "Durante o crescimento ativo, regue abundantemente e não deixe as raízes permanecerem secas por longos períodos. O recipiente, porém, deve drenar imediatamente. Quando as hastes amadurecerem e a atividade diminuir, amplie moderadamente os intervalos sem impor uma seca extrema.",
    suporte: [
        "🥇 Cesto ou cachepô robusto, bem ventilado e capaz de acomodar a planta adulta.",
        "🥈 Vaso de barro pesado e muito perfurado, oferecendo estabilidade às hastes.",
        "🥉 Vaso plástico firme e perfurado com substrato grosso, evitando retenção excessiva."
    ],
    substrato: ["🥇 Casca de macadâmia triturada grossa + casca de pinus grossa + pedra-pomes + carvão vegetal.", "🥈 Chips de coco grossos + casca de macadâmia + carvão vegetal + argila expandida.", "🥉 Cachepô/cesto com pinus grosso + macadâmia grossa + pedra-pomes, deixando grandes espaços de ar.", "⭐ Alternativa: Casca de pinus grossa + carvão vegetal + pedra-pomes/brita, com quase nenhuma fração fina."],
    errosComuns: [
        "Cultivar em sombra excessiva",
        "Usar substrato fino e compactado",
        "Deixar novos brotos secarem durante crescimento ativo",
        "Manter raízes permanentemente encharcadas",
        "Forçar repouso seco severo",
        "Cortar hastes antigas ainda firmes",
        "Replantar fora do início da emissão de novas raízes",
        "Subestimar o tamanho e o peso da planta adulta"
    ],
    dica: "🏆 Tenha paciência com o tamanho de floração. Dendrobium spectabile pode crescer vigorosamente antes de decidir florescer. Concentre-se em produzir hastes progressivamente maiores com muita luz filtrada, água e adubação durante o crescimento; quando a planta atingir maturidade, as flores extraordinárias compensam a espera.",
    indiceAdaptacaoRegional: {
        versao: "IAR 1.1",
        escala: "compatibilidade",
        litoralQuente: {
            indice: 72,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 3, peso: 30 },
                temperatura: { nota: 5, peso: 30 },
                aguaUmidade: { nota: 3, peso: 5 },
                ventilacao: { nota: 3, peso: 5 },
                luminosidade: { nota: 4, peso: 5 },
                sazonalidade: { nota: 2, peso: 5 },
                floracao: { nota: 3, peso: 20 }
            }
        },
        montanhaFrio: {
            indice: 64,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 3, peso: 30 },
                temperatura: { nota: 3, peso: 30 },
                aguaUmidade: { nota: 3, peso: 5 },
                ventilacao: { nota: 4, peso: 5 },
                luminosidade: { nota: 4, peso: 5 },
                sazonalidade: { nota: 5, peso: 5 },
                floracao: { nota: 3, peso: 20 }
            }
        }
    },
        adaptacaoRegional: {
        litoralQuente: { texto: "Excelente A origem tropical e a ocorrência frequente em baixas elevações combinam bem com clima quente, desde que haja muita ventilação e drenagem." },
        montanhaFrio: { texto: "Boa Tolera condições intermediárias, mas deve ser protegido de frio intenso e de raízes molhadas em temperaturas baixas." }
    },
    mesesFloracao: [6, 7, 8, 9, 10],
    "selosCultivo": {
        "rega": { "nivel": "moderada" },
        "climaFloracao": { "faixa": "quente" }
    },
    indiceDificuldadeCultivo: {
        versao: "IDC 2.0",
        referenciaRegional: "Litoral de clima quente",
        indice: 37,
        nivel: "Moderada",
        fatores: {
            temperatura: { nota: 0, peso: 18 },
            agua: { nota: 1, peso: 15 },
            umidadeVentilacao: { nota: 2, peso: 12 },
            luminosidade: { nota: 1, peso: 8 },
            raizes: { nota: 3, peso: 15 },
            cicloRepouso: { nota: 1, peso: 12 },
            floracao: { nota: 4, peso: 20 }
        }
    },
    avaliacoes: { cultivo: 2, floracao: 4, perfume: 2, luminosidade: 4, agua: 4, raridade: 4 }
};
