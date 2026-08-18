// Refinamento final — Lote 17.
// ID histórico preservado para manter compatibilidade com links e catálogo.

export const laeliaPraestans = {
    id: "laelia-praestans",
    nome: "Cattleya praestans",
    genero: "Cattleya",
    sinonimo: "Laelia praestans",
    tipo: "Espécie botânica",
    dificuldade: "Moderada",
    caracteristicas: [
        "Espécie brasileira compacta",
        "Flores grandes de ~7,5 cm",
        "Epífita da Mata Atlântica",
        "Floração de primavera"
    ],
    fotos: [
        "imagens/Laelia praestans/Laelia praestans1.jpg",
        "imagens/Laelia praestans/Laelia praestans2.webp",
        "imagens/Laelia praestans/Laelia praestans3.jpg",
        "imagens/Laelia praestans/Laelia praestans4.jpg"
    ],
    descricao: "Compacta na planta e generosa na flor! Cattleya praestans é uma espécie brasileira de pequeno porte que surpreende com flores de cerca de 7,5 cm, muito grandes em relação aos seus pseudobulbos curtos. Os tons variam do lilás ao púrpura, geralmente com labelo mais intenso e garganta clara ou amarelada. Vive como epífita nas florestas úmidas do Sudeste e floresce na primavera; apesar da origem montana, registros entre aproximadamente 700 e 900 m mostram que ela não deve ser tratada como uma espécie estritamente fria.",
    origem: "Brasil.",
    regiao: "Espírito Santo e Minas Gerais.",
    habitat: "Mata Atlântica úmida · epífita · 700–900 m.",
    clima: "Quente a intermediário · úmido e ventilado.",
    climaFloracao: "A floração depende de pseudobulbos bem amadurecidos, luz moderada a alta e raízes saudáveis. Como cresce em floresta úmida de altitude moderada, não necessita de repouso seco forte; após a maturação, basta reduzir discretamente a frequência das regas. Em litoral quente, noites abafadas e substrato continuamente molhado são mais problemáticos que a falta de frio intenso, por isso ventilação e raízes oxigenadas são prioridades.",
    iluminacao: {
        sombrite: "40% a 60% — 50% como ponto inicial",
        solDireto: "Somente muito suave e aclimatado",
        horario: "Primeiras horas da manhã",
        observacoes: "Prefere mais luz que miniaturas de sombra profunda, mas não deve receber o mesmo sol de espécies rupícolas. Folhas verde-escuras e crescimento alongado sugerem pouca luz; amarelecimento rápido ou manchas secas indicam excesso de radiação ou calor."
    },
    floracao: "Principalmente na primavera, com maior probabilidade entre setembro e novembro. Produz normalmente uma ou duas flores grandes, de cerca de 7,5 cm, muito vistosas em relação ao porte compacto da planta.",
    adubacao: "🌿 Orgânica: bokashi em pequena quantidade, preferencialmente em sachê e sem contato direto com rizoma ou raízes novas.\n💧 Mineral/Foliar: NPK equilibrado em 1/4 a 1/3 da dose a cada 7–15 dias durante crescimento ativo.\n🌱 Maturação: mantenha nutrição leve até o pseudobulbo completar o crescimento e reduza o nitrogênio depois disso.\n🧪 Liberação lenta: poucos grânulos em vasos ou cachepôs muito drenantes.\n🚿 Faça regas periódicas apenas com água para reduzir acúmulo de sais.",
    rega: "Durante brotação e emissão de raízes, regue abundantemente e permita que a mistura perca boa parte da umidade antes da próxima irrigação. A espécie aprecia umidade atmosférica, mas precisa de oxigênio nas raízes. Após o amadurecimento do pseudobulbo, diminua discretamente a frequência sem impor seca prolongada. Em montagem, pode exigir regas muito frequentes no verão quente.",
    suporte: "🥇 Cachepô pequeno e muito vazado.\n🥈 Vaso pequeno de barro, que ajuda a dissipar calor e acelerar a secagem.\n🥉 Placa de cortiça ou madeira, ótima para aeração, porém exigindo regas mais frequentes.\nO recipiente deve ser proporcional à planta, sem grande volume de substrato sobrando.",
    substrato: "🥇 Casca de macadâmia média + pinus médio + pedra-pomes + carvão vegetal.\n🥈 Pinus médio/grosso + pedra-pomes + carvão + chips de coco em baixa proporção.\n🥉 Casca de macadâmia + argila expandida + carvão vegetal + pinus grosso.\n⭐ Alternativa: Chips de coco grossos + pedra-pomes + carvão + pinus médio, com secagem clara entre regas.",
    errosComuns: "Sombra excessiva; sol forte do litoral sem aclimatação; substrato compactado; excesso constante de água; deixar secar demais durante crescimento ativo; vaso grande; enterrar o rizoma; replantar fora da emissão de raízes novas; excesso de fertilizante; dividir touceiras pequenas; compensar calor aumentando indiscriminadamente as regas.",
    dica: "O segredo é equilibrar umidade ambiental com muita aeração nas raízes. Em clima quente, melhore primeiro ventilação e sombreamento antes de aumentar a água. Uma planta com pseudobulbos firmes, folhas compactas e raízes ativas costuma responder com flores grandes na primavera.",
    indiceAdaptacaoRegional: {
        versao: "IAR 1.0",
        escala: "compatibilidade",
        litoralQuente: {
            indice: 62,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 3, peso: 20 },
                temperatura: { nota: 4, peso: 20 },
                aguaUmidade: { nota: 2, peso: 15 },
                ventilacao: { nota: 3, peso: 10 },
                luminosidade: { nota: 4, peso: 10 },
                sazonalidade: { nota: 2, peso: 5 },
                floracao: { nota: 3, peso: 20 }
            }
        },
        montanhaFrio: {
            indice: 74,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 4, peso: 20 },
                temperatura: { nota: 4, peso: 20 },
                aguaUmidade: { nota: 3, peso: 15 },
                ventilacao: { nota: 4, peso: 10 },
                luminosidade: { nota: 4, peso: 10 },
                sazonalidade: { nota: 5, peso: 5 },
                floracao: { nota: 3, peso: 20 }
            }
        }
    },
    adaptacaoRegional: {
        litoralQuente: { texto: "Use sombra luminosa, ventilação constante, umidade atmosférica adequada e raízes muito aeradas. No verão, mantenha-a no ponto mais fresco do orquidário e evite substrato quente e saturado à noite." },
        montanhaFrio: { texto: "Excelente resposta em clima intermediário de altitude. Proteja de geadas e de longos períodos de frio úmido com substrato saturado." }
    },
    mesesFloracao: [9, 10, 11],
    "selosCultivo": {
        "rega": { "nivel": "frequente" },
        "climaFloracao": { "faixa": "quente" }
    },
    indiceDificuldadeCultivo: {
        versao: "IDC 2.0",
        referenciaRegional: "Litoral de clima quente",
        indice: 42,
        nivel: "Moderada",
        fatores: {
            temperatura: { nota: 1, peso: 18 },
            agua: { nota: 1, peso: 15 },
            umidadeVentilacao: { nota: 2, peso: 12 },
            luminosidade: { nota: 1, peso: 8 },
            raizes: { nota: 1, peso: 15 },
            cicloRepouso: { nota: 4, peso: 12 },
            floracao: { nota: 4, peso: 20 }
        }
    },
    avaliacoes: {
        cultivo: 3,
        floracao: 4,
        perfume: 2,
        luminosidade: 4,
        agua: 3,
        raridade: 4
    }
};
