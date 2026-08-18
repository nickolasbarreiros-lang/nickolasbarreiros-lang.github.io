// Refinamento Final — Lote 14.

export const encycliaMineirinha = {
    id: "encyclia-mineirinha",
    nome: "Encyclia ‘Mineirinha’",
    genero: "Encyclia",
    tipo: "Híbrido primário interespecífico",
    dificuldade: "Moderada",
    caracteristicas: ["Híbrido brasileiro", "Hastes multiflorais", "Flores perfumadas", "Boa adaptação"],
    fotos: [
        "imagens/encyclia-mineirinha/encyclia-mineirinha-1.jpg",
        "imagens/encyclia-mineirinha/encyclia-mineirinha-2.jpeg",
        "imagens/encyclia-mineirinha/encyclia-mineirinha-3.jpeg",
        "imagens/encyclia-mineirinha/encyclia-mineirinha-4.jpg"
    ],
    descricao: "Uma Encyclia brasileira de aparência delicada, mas cultivo bastante rústico! ‘Mineirinha’ é um híbrido primário de Encyclia patens × Encyclia oliveirana, combinação que reúne a resistência de um parental amplamente distribuído pelo leste e sul do Brasil com a influência de E. oliveirana, espécie mineira de ambientes sazonais. Forma pseudobulbos firmes, folhas coriáceas e hastes altas com várias flores em tons verde-acastanhados, geralmente acompanhadas de labelo mais claro e perfume agradável. Em cultivo, responde melhor a muita claridade, raízes bem arejadas e secagem rápida entre as regas.",
    origem: "Híbrido brasileiro.",
    regiao: "Parentais brasileiros · E. patens × E. oliveirana.",
    habitat: "Sem habitat natural · parentais de florestas e ambientes sazonais.",
    clima: "Quente a intermediário · ventilado.",
    climaFloracao: "A floração depende sobretudo de pseudobulbos bem amadurecidos sob boa luminosidade. Durante a brotação, mantenha água e nutrição regulares; depois da maturação, aumente moderadamente o intervalo entre regas. Como o híbrido combina parentais de ecologias diferentes, não imponha repouso seco rígido.",
    iluminacao: { sombrite: "40% a 50%", solDireto: "Sim, suave", horario: "Até 09:00", observacoes: "Folhas firmes, eretas e verde-claras indicam luz adequada; folhas escuras e moles sinalizam sombra excessiva." },
    floracao: "Mais comum da primavera ao verão; pode variar conforme o clone e o ciclo de maturação dos pseudobulbos.",
    adubacao: "🌿 Orgânica: bokashi leve em sachê, renovado a cada 60 a 90 dias.\n💧 Foliar: NPK equilibrado, como 20-20-20, em 1/3 a 1/2 da dose semanalmente ou a cada 15 dias durante a brotação.\n🧪 Liberação lenta: poucos grânulos de Osmocote no canto do vaso, longe das raízes novas.",
    rega: "Regue abundantemente durante a brotação e deixe o substrato secar completamente entre as regas. Após o amadurecimento dos pseudobulbos, reduza a frequência. Nunca use prato sob o vaso nem permita água acumulada no fundo.",
    suporte: "🥇 Vaso de barro com furos laterais.\n🥈 Cachepô de madeira vazado.\n🥉 Placa de madeira dura ou cortiça.",
    substrato: "🥇 Casca de macadâmia média + pinus médio + pedra-pomes + carvão vegetal.\n🥈 Casca de macadâmia + argila expandida + carvão vegetal + pinus grosso.\n🥉 Chips de coco grossos + pedra-pomes + carvão + pinus médio, com secagem clara entre regas.\n⭐ Alternativa: Pinus médio/grosso + pedra-pomes + carvão + chips de coco em baixa proporção.",
    errosComuns: "Catalogar como espécie pura; sombra excessiva; vaso grande; substrato compacto; rizoma enterrado; água acumulada no fundo; esfagno denso.",
    dica: "Cultive em recipiente justo e muito drenante, com o rizoma livre e alta ventilação. A identificação mais informativa para a coleção é: Encyclia ‘Mineirinha’ — E. patens × E. oliveirana. Por ser híbrido, porte, cor, perfume e época exata de floração podem variar entre plantas.",
    indiceAdaptacaoRegional: {
        versao: "IAR 1.0",
        escala: "compatibilidade",
        litoralQuente: {
            indice: 67,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 3, peso: 20 },
                temperatura: { nota: 5, peso: 20 },
                aguaUmidade: { nota: 3, peso: 15 },
                ventilacao: { nota: 3, peso: 10 },
                luminosidade: { nota: 3, peso: 10 },
                sazonalidade: { nota: 2, peso: 5 },
                floracao: { nota: 3, peso: 20 }
            }
        },
        montanhaFrio: {
            indice: 68,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 3, peso: 20 },
                temperatura: { nota: 4, peso: 20 },
                aguaUmidade: { nota: 3, peso: 15 },
                ventilacao: { nota: 4, peso: 10 },
                luminosidade: { nota: 3, peso: 10 },
                sazonalidade: { nota: 5, peso: 5 },
                floracao: { nota: 3, peso: 20 }
            }
        }
    },
    adaptacaoRegional: { litoralQuente: { texto: "Desde que haja ventilação constante e secagem rápida após as regas." }, montanhaFrio: { texto: "Reduza bastante as regas nos meses frios sem crescimento ativo." } },
    mesesFloracao: [9,10,11,12,1,2],
    "selosCultivo": {
        "rega": { "nivel": "moderada" },
        "climaFloracao": { "faixa": "quente" }
    },
    indiceDificuldadeCultivo: {
        versao: "IDC 2.0",
        referenciaRegional: "Litoral de clima quente",
        indice: 32,
        nivel: "Moderada",
        fatores: {
            temperatura: { nota: 0, peso: 18 },
            agua: { nota: 1, peso: 15 },
            umidadeVentilacao: { nota: 2, peso: 12 },
            luminosidade: { nota: 2, peso: 8 },
            raizes: { nota: 1, peso: 15 },
            cicloRepouso: { nota: 1, peso: 12 },
            floracao: { nota: 4, peso: 20 }
        }
    },
    avaliacoes: { cultivo: 2, floracao: 4, perfume: 3, luminosidade: 4, agua: 3, raridade: 3 }
};
