// Refinamento Final — Lote 14.

export const encycliaOncidioides = {
    id: "encyclia-oncidioides",
    nome: "Encyclia oncidioides",
    genero: "Encyclia",
    sinonimo: "Epidendrum oncidioides",
    tipo: "Espécie botânica",
    dificuldade: "Fácil",
    caracteristicas: ["Espécie brasileira", "Alta luminosidade", "Haste ramificada", "Flores perfumadas", "Porte médio a grande"],
    fotos: [
        "imagens/Encyclia oncidioides/Encyclia oncidioides1.jpg",
        "imagens/Encyclia oncidioides/Encyclia oncidioides2.webp",
        "imagens/Encyclia oncidioides/Encyclia oncidioides3.jpg",
        "imagens/Encyclia oncidioides/Encyclia oncidioides4.jpg"
    ],
    descricao: "Uma Encyclia de presença marcante, feita para quem gosta de hastes longas e cheias de flores! Encyclia oncidioides forma pseudobulbos robustos, normalmente com duas ou três folhas firmes, e pode produzir inflorescências ramificadas próximas de 90 cm. As flores, que podem chegar a cerca de 5 cm, variam do amarelo-esverdeado ao castanho e costumam ser doces e perfumadas. Na natureza aparece desde áreas próximas ao nível do mar até cerca de 750 m, inclusive em areia branca e afloramentos rochosos — uma pista clara de sua preferência por muita luz, ventilação e raízes que sequem rapidamente.",
    origem: "América tropical · Brasil incluído.",
    regiao: "Brasil e outros pontos da América tropical.",
    habitat: "Areia branca e afloramentos · 0–750 m.",
    clima: "Quente a intermediário · sazonal.",
    climaFloracao: "A espécie floresce melhor depois de formar pseudobulbos fortes sob luz alta. Regue e adube com regularidade enquanto houver brotos e raízes ativos; ao amadurecer o crescimento, aumente moderadamente a secagem entre regas. A faixa natural de baixa altitude mostra que frio não é requisito para florescer.",
    iluminacao: {
        sombrite: "40% a 50%; em regiões serranas, 30% a 40% após aclimatação",
        solDireto: "Sim, suave e aclimatado",
        horario: "Até aproximadamente 09:00",
        observacoes: "Folhas firmes em verde-claro indicam boa luminosidade. Folhas muito escuras e pseudobulbos alongados sugerem sombra excessiva; amarelecimento intenso, manchas secas ou aquecimento excessivo indicam sol demais."
    },
    floracao: "Principalmente primavera e verão; flores numerosas, duráveis e perfumadas em plantas bem estabelecidas.",
    adubacao: "🌿 Orgânica: bokashi em pequena quantidade, preferencialmente em porta-adubo, renovado durante a fase de crescimento ativo.\n💧 Foliar: NPK equilibrado em 1/4 a 1/2 da dose a cada 7–15 dias durante a emissão de brotos e raízes.\n🧪 Liberação lenta: poucos grânulos apenas em vaso muito drenante, sempre afastados das raízes novas. Após a maturação, reduza o excesso de nitrogênio, mas mantenha nutrição equilibrada e diluída.",
    rega: "Durante a emissão de brotos e raízes, regue abundantemente e permita que o substrato seque completamente antes da próxima irrigação. Após a maturação dos pseudobulbos, aumente gradualmente o intervalo entre as regas, sem impor desidratação severa nem seguir um número fixo de dias. Observe o clima, a ventilação, o tamanho do vaso e a firmeza dos pseudobulbos.",
    suporte: "🥇 Vaso de barro justo, com furos laterais e drenagem rápida.\n🥈 Cachepô de madeira bem vazado.\n🥉 Tronco ou placa de madeira dura para plantas adaptadas ao cultivo montado.",
    substrato: "🥇 Casca de macadâmia média + pinus médio + pedra-pomes + carvão vegetal.\n🥈 Pinus médio/grosso + pedra-pomes + carvão + chips de coco em baixa proporção.\n🥉 Casca de macadâmia + argila expandida + carvão vegetal + pinus grosso.\n⭐ Alternativa: Chips de coco grossos + pedra-pomes + carvão + pinus médio, com secagem clara entre regas.",
    errosComuns: "Usar vaso grande ou profundo; cultivar em sombra excessiva; manter raízes constantemente molhadas; usar substrato fino, velho ou compactado; enterrar o rizoma; cortar hastes ainda verdes; aplicar excesso de nitrogênio após a maturação; seguir um número fixo de dias sem água; tratar o inverno como dormência seca rigorosa.",
    dica: "Priorize luz alta filtrada e raízes muito arejadas. A ocorrência natural desde o nível do mar até cerca de 750 m explica por que ela pode ir muito bem no litoral quente: o ponto decisivo é evitar abafamento e substrato constantemente molhado, não tentar produzir frio artificial.",
    indiceAdaptacaoRegional: {
        versao: "IAR 1.1",
        escala: "compatibilidade",
        litoralQuente: {
            indice: 80,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 5, peso: 30 },
                temperatura: { nota: 4, peso: 30 },
                aguaUmidade: { nota: 3, peso: 5 },
                ventilacao: { nota: 3, peso: 5 },
                luminosidade: { nota: 4, peso: 5 },
                sazonalidade: { nota: 4, peso: 5 },
                floracao: { nota: 3, peso: 20 }
            }
        },
        montanhaFrio: {
            indice: 69,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 3, peso: 30 },
                temperatura: { nota: 4, peso: 30 },
                aguaUmidade: { nota: 3, peso: 5 },
                ventilacao: { nota: 4, peso: 5 },
                luminosidade: { nota: 4, peso: 5 },
                sazonalidade: { nota: 4, peso: 5 },
                floracao: { nota: 3, peso: 20 }
            }
        }
    },
        adaptacaoRegional: {
        litoralQuente: { texto: "Em Litoral de clima quente. Use mistura muito drenante, ventilação constante e regas pela manhã, protegendo do sol forte da tarde e de chuvas contínuas quando o crescimento estiver maduro." },
        montanhaFrio: { texto: "Mantenha luminosidade alta, proteja contra geadas e reduza proporcionalmente as regas em períodos frios, chuvosos ou de baixa evaporação." }
    },
    mesesFloracao: [9, 10, 11, 12, 1, 2, 3],
    "selosCultivo": {
        "rega": { "nivel": "moderada", "regime": "reduzir-repouso" },
        "climaFloracao": { "faixa": "quente", "floraNoCalor": true }
    },
    indiceDificuldadeCultivo: {
        versao: "IDC 2.0",
        referenciaRegional: "Litoral de clima quente",
        indice: 18,
        nivel: "Fácil",
        fatores: {
            temperatura: { nota: 0, peso: 18 },
            agua: { nota: 1, peso: 15 },
            umidadeVentilacao: { nota: 2, peso: 12 },
            luminosidade: { nota: 2, peso: 8 },
            raizes: { nota: 1, peso: 15 },
            cicloRepouso: { nota: 0, peso: 12 },
            floracao: { nota: 1, peso: 20 }
        }
    },
    avaliacoes: { cultivo: 1, floracao: 4, perfume: 4, luminosidade: 4, agua: 3, raridade: 3 }
};
