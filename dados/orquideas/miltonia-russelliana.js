// Ficha científica e de cultivo revisada — Miltonia russelliana.
// Conteúdo adaptado ao padrão editorial e regional do Orquidário Digital.

export const miltoniaRusselliana = {
    id: "miltonia-russelliana",
    nome: "Miltonia russelliana",
    genero: "Miltonia",
    tipo: "Espécie botânica epífita brasileira",
    dificuldade: "Moderada",
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
    origem: "Brasil.",
    regiao: "Sudeste e Sul do Brasil.",
    habitat: "Epífita de florestas úmidas e áreas ripárias, em ambiente ventilado.",
    clima: "Intermediário a ameno, úmido e ventilado.",
    climaFloracao: "A espécie floresce principalmente no outono e inverno. No litoral quente, noites um pouco mais frescas ajudam bastante, mas o fator decisivo é manter raízes ativas, boa ventilação e luminosidade suficiente sem superaquecer as folhas.",
    iluminacao: {
        sombrite: "50% a 60%",
        solDireto: "Somente sol fraco da manhã, se aclimatada",
        horario: "Luz filtrada brilhante ao longo do dia",
        observacoes: "Prefere mais luz do que uma planta de sombra profunda, porém sem sol direto forte. Folhas excessivamente escuras e crescimento alongado sugerem falta de luz; amarelamento rápido e aquecimento das folhas indicam excesso."
    },
    floracao: "Predominantemente no outono e inverno. Em cultivo brasileiro, abril a agosto é uma boa janela de referência, podendo haver variações conforme região, temperatura e maturação dos pseudobulbos.",
    adubacao: "🌿 Orgânica: bokashi pode ser usado em pequena quantidade, de preferência em porta-adubo.\n💧 Foliar/mineral: NPK equilibrado, como 20-20-20, em aproximadamente 1/4 da dose comercial a cada 10 a 15 dias durante crescimento ativo.\n🧪 Liberação lenta: opcional, usando poucos grânulos em vaso ou cachepô.\n🚿 Lavagem: intercale regas com água pura para reduzir o acúmulo de sais no substrato.",
    rega: "Regue com frequência durante a formação de novos pseudobulbos, permitindo que o substrato fique apenas levemente úmido entre as irrigações. Não deixe as raízes permanecerem encharcadas, mas também evite seca prolongada. No inverno, ajuste a frequência pela velocidade real de secagem, sem impor repouso seco severo.",
    suporte: [
        "🥇 Cachepô ou cesto de madeira com substrato bem aerado.",
        "🥈 Vaso de barro ou plástico muito perfurado, proporcional ao tamanho da touceira.",
        "🥉 Montagem em madeira ou cortiça em ambientes com umidade alta e regas frequentes."
    ],
    substrato: ["🥇 Casca de pinus média + chips de coco + pedra-pomes + carvão vegetal.", "🥈 Casca de macadâmia triturada média + pinus médio + pedra-pomes, com pequena fração de fibra de coco.", "🥉 Chips de coco + carvão vegetal + perlita + casca de pinus média.", "⭐ Alternativa: Pinus médio + pedra-pomes + argila expandida miúda + pequena fração de esfagno solto."],
    errosComuns: [
        "Cultivar em sombra profunda",
        "Usar vaso grande demais para a touceira",
        "Manter o substrato constantemente encharcado",
        "Deixar a planta secar completamente por vários dias em crescimento",
        "Reduzir demais a ventilação para aumentar a umidade",
        "Aplicar fertilizante concentrado",
        "Dividir a touceira em partes muito pequenas",
        "Expor ao sol forte nas horas quentes"
    ],
    dica: "🏆 Não tenha pressa em dividir a Miltonia russelliana. Touceiras com vários pseudobulbos armazenam mais energia e costumam produzir hastes mais fortes. No litoral quente, mantenha-a em local claro e muito ventilado, com o vaso apenas ligeiramente apertado.",
    indiceAdaptacaoRegional: {
        versao: "IAR 1.1",
        escala: "compatibilidade",
        litoralQuente: {
            indice: 64,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 3, peso: 30 },
                temperatura: { nota: 4, peso: 30 },
                aguaUmidade: { nota: 2, peso: 5 },
                ventilacao: { nota: 3, peso: 5 },
                luminosidade: { nota: 3, peso: 5 },
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
        litoralQuente: { texto: "Boa Tolera calor melhor que muitas Miltoniopsis, mas aprecia noites menos abafadas. Use luz filtrada, umidade regular e ventilação constante." },
        montanhaFrio: { texto: "Muito boa Noites frescas favorecem vigor e floração, desde que as raízes não permaneçam frias e encharcadas por longos períodos." }
    },
    mesesFloracao: [4, 5, 6, 7, 8],
    "selosCultivo": {
        "rega": { "nivel": "frequente" },
        "climaFloracao": { "faixa": "ameno" }
    },
    indiceDificuldadeCultivo: {
        versao: "IDC 2.0",
        referenciaRegional: "Litoral de clima quente",
        indice: 37,
        nivel: "Moderada",
        fatores: {
            temperatura: { nota: 1, peso: 18 },
            agua: { nota: 3, peso: 15 },
            umidadeVentilacao: { nota: 2, peso: 12 },
            luminosidade: { nota: 2, peso: 8 },
            raizes: { nota: 1, peso: 15 },
            cicloRepouso: { nota: 4, peso: 12 },
            floracao: { nota: 1, peso: 20 }
        }
    },
    avaliacoes: {
        cultivo: 2,
        floracao: 3,
        perfume: 1,
        luminosidade: 3,
        agua: 4,
        raridade: 4
    }
};
