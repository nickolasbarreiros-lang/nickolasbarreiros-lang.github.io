// Revisão final — Lote 05.

export const bulbophyllumRothschildianum = {
    id: "bulbophyllum-rothschildianum",
    nome: "Bulbophyllum rothschildianum",
    genero: "Bulbophyllum",
    sinonimo: "Cirrhopetalum rothschildianum",
    tipo: "Espécie botânica epífita asiática",
    dificuldade: "Moderada",
    caracteristicas: ["Seção Cirrhopetalum", "Umbela em leque", "Sépalas muito alongadas", "Flores perfumadas", "Primavera e outono", "Alto valor ornamental"],
    fotos: [
        "imagens/Bulbophyllum rothschildianum/Bulbophyllum rothschildianum1.jpg",
        "imagens/Bulbophyllum rothschildianum/Bulbophyllum rothschildianum2.jpeg",
        "imagens/Bulbophyllum rothschildianum/Bulbophyllum rothschildianum3.jpeg",
        "imagens/Bulbophyllum rothschildianum/Bulbophyllum rothschildianum4.jpeg"
    ],
    descricao: "Uma das flores mais extravagantes entre os *Bulbophyllum*! *Bulbophyllum rothschildianum* forma uma planta relativamente pequena, mas surpreende com inflorescências em leque e flores de sépalas extremamente alongadas, que podem alcançar cerca de **17 cm** no conjunto. A combinação de tons púrpura, vinho e creme e o desenho quase exótico das flores fazem dela uma espécie difícil de confundir. Nativa do Himalaia Oriental até o sul da China e norte de Myanmar, vive em ambientes subtropicais úmidos. Seu nome homenageia a família Rothschild, historicamente ligada ao cultivo e à coleção de orquídeas.",
    origem: "Himalaia Oriental e S da China.",
    regiao: "Assam · E Himalaia · S Yunnan · N Myanmar.",
    habitat: "Florestas subtropicais úmidas.",
    clima: "Quente a fresco · úmido.",
    climaFloracao: "IOSPE registra crescimento de quente a fresco e floradas na primavera e no outono. Essa amplitude não significa que a espécie precise alternar extremos térmicos; na prática, pseudobulbos maduros, noites um pouco mais amenas, luz filtrada clara, água regular e ventilação parecem mais importantes. No litoral quente, deve-se compensar noites quentes com circulação de ar, drenagem muito eficiente e ausência de superaquecimento radicular.",
    iluminacao: {
        sombrite: "60% a 70%",
        solDireto: "Apenas muito suave",
        horario: "Luz filtrada ao longo do dia",
        observacoes: "Prefere meia-sombra clara. Evite tanto sol forte, que aquece folhas e rizoma, quanto sombra profunda, que reduz maturação dos pseudobulbos e floração."
    },
    floracao: "Duas janelas são bem documentadas: primavera e outono. Para o calendário brasileiro, março a maio e setembro a novembro são referências úteis, com deslocamentos conforme clone e microclima.",
    adubacao: "🌿 Orgânica: Bokashi opcional em dose pequena e protegido em sachê.\n💧 Foliar/mineral: NPK equilibrado em cerca de 1/4 da dose a cada 10 a 15 dias durante crescimento ativo.\n🧪 Liberação lenta: Osmocote em dose baixa em cestos ou vasos. Reduza após maturação e lave o substrato periodicamente com água limpa para evitar acúmulo de sais.",
    rega: "Durante brotação e enraizamento, ofereça água abundante e regular, sempre com drenagem rápida. Não deixe o meio secar completamente por vários dias. Em períodos mais frios ou de crescimento lento, reduza moderadamente a frequência, mas mantenha alguma umidade.",
    suporte: "🥇 Cesto raso e largo de madeira.\n🥈 Vaso tipo cuia muito perfurado.\n🥉 Cortiça ou madeira com pequena reserva de esfagno junto às raízes.\nDirecione a frente de crescimento para espaço livre.",
    substrato: "🥇 Casca de pinus média + chips de coco + pedra-pomes + pequena fração de esfagno solto.\n🥈 Casca de macadâmia triturada média + pinus médio + pedra-pomes + esfagno em baixa proporção.\n🥉 Cesto raso com esfagno de fibra longa bem solto + pedra-pomes/perlita, sem compactar o rizoma.\n⭐ Alternativa: Chips de coco tratados + perlita + carvão vegetal miúdo + pouco esfagno.",
    errosComuns: "• Exibir vários sinônimos no campo resumido.\n• Tratar a espécie como obrigatoriamente fria.\n• Deixar o substrato secar por vários dias.\n• Compactar esfagno.\n• Usar vaso estreito para rizoma rastejante.\n• Manter calor e umidade em ambiente abafado.\n• Expor ao sol forte direto.\n• Fertilizar em concentração elevada.",
    dica: "🏆 A umbela larga e as sépalas de até cerca de 17 cm precisam de espaço livre para se desenvolver sem encostar no recipiente. Use cesto largo, deixe a nova frente voltada para fora e mantenha ventilação constante. No litoral quente, a prioridade não é produzir frio, e sim evitar noites excessivamente abafadas e raízes saturadas.",
    indiceAdaptacaoRegional: {
        versao: "IAR 1.0",
        escala: "compatibilidade",
        litoralQuente: {
            indice: 53,
            estrelas: 3,
            fatores: {
                habitatNatural: { nota: 3, peso: 20 },
                temperatura: { nota: 1, peso: 20 },
                aguaUmidade: { nota: 3, peso: 15 },
                ventilacao: { nota: 3, peso: 10 },
                luminosidade: { nota: 3, peso: 10 },
                sazonalidade: { nota: 4, peso: 5 },
                floracao: { nota: 3, peso: 20 }
            }
        },
        montanhaFrio: {
            indice: 67,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 3, peso: 20 },
                temperatura: { nota: 4, peso: 20 },
                aguaUmidade: { nota: 3, peso: 15 },
                ventilacao: { nota: 4, peso: 10 },
                luminosidade: { nota: 3, peso: 10 },
                sazonalidade: { nota: 4, peso: 5 },
                floracao: { nota: 3, peso: 20 }
            }
        }
    },
    adaptacaoRegional: {
        litoralQuente: { texto: "É possível cultivar bem, mas noites muito quentes exigem ventilação constante, sombra clara e drenagem rápida." },
        montanhaFrio: { texto: "Especialmente com noites amenas; proteja apenas de geada e de encharcamento sob frio prolongado." }
    },
    mesesFloracao: [3, 4, 5, 9, 10, 11],
    "selosCultivo": {
        "rega": { "nivel": "moderada" },
        "climaFloracao": { "faixa": "quente", "floraNoCalor": true }
    },
    indiceDificuldadeCultivo: {
        versao: "IDC 2.0",
        referenciaRegional: "Litoral de clima quente",
        indice: 35,
        nivel: "Moderada",
        fatores: {
            temperatura: { nota: 3, peso: 18 },
            agua: { nota: 1, peso: 15 },
            umidadeVentilacao: { nota: 2, peso: 12 },
            luminosidade: { nota: 2, peso: 8 },
            raizes: { nota: 1, peso: 15 },
            cicloRepouso: { nota: 1, peso: 12 },
            floracao: { nota: 2, peso: 20 }
        }
    },
    avaliacoes: { cultivo: 2, floracao: 4, perfume: 3, luminosidade: 3, agua: 4, raridade: 4 }
};
