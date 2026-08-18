// Refinamento Final — Lote 14.

export const gomesaRecurva = {
    id: "gomesa-recurva",
    nome: "Gomesa recurva",
    genero: "Gomesa",
    sinonimo: "Rodriguezia recurva",
    tipo: "Espécie botânica",
    dificuldade: "Moderada",
    caracteristicas: ["Espécie-tipo de Gomesa", "Hastes arqueadas", "Floração abundante", "Clima sazonal", "Brasil a Argentina"],
    fotos: [
        "imagens/Gomesa recurva/Gomesa recurva1.jpg",
        "imagens/Gomesa recurva/Gomesa recurva2.jpg",
        "imagens/Gomesa recurva/Gomesa recurva3.jpeg",
        "imagens/Gomesa recurva/Gomesa recurva4.webp"
    ],
    descricao: "Uma espécie brasileira que vira uma pequena cascata quando floresce! Gomesa recurva produz hastes arqueadas de aproximadamente 10–35 cm carregadas de muitas flores perfumadas, cada uma com cerca de 2 cm. Seus pseudobulbos são comprimidos e sustentam duas folhas firmes, enquanto as inflorescências se curvam naturalmente para baixo. Ocorre do leste do Brasil até o nordeste da Argentina, entre cerca de 50 e 1.400 m, o que explica sua capacidade de viver em diferentes condições — embora floresça com mais facilidade quando recebe boa luz, ventilação e noites mais amenas no fim do ciclo.",
    origem: "Leste do Brasil ao NE da Argentina.",
    regiao: "ES ao Sul do Brasil · Paraguai · Misiones.",
    habitat: "Florestas sazonais · epífita/terrestre · 50–1.400 m.",
    clima: "Intermediário a fresco · sazonal.",
    climaFloracao: "A amplitude de 50–1.400 m mostra que a espécie não deve ser tratada como estritamente fria. No litoral quente, a floração tende a melhorar no ponto mais fresco e ventilado do cultivo, com luz alta filtrada e redução moderada das regas depois da maturação dos pseudobulbos — sem seca severa.",
    iluminacao: {
        sombrite: "Cerca de 50%; até 60% em locais muito quentes",
        solDireto: "Sim, somente suave",
        horario: "Até aproximadamente 08:30",
        observacoes: "Folhas verde-claras e firmes indicam boa luminosidade. Folhas muito escuras sugerem sombra excessiva; amarelecimento intenso e aquecimento foliar indicam excesso de sol."
    },
    floracao: "Predominantemente no outono e inverno; flores pequenas, numerosas e perfumadas em hastes arqueadas.",
    adubacao: "🌿 Orgânica: bokashi leve em porta-adubo no início da brotação.\n💧 Foliar: NPK equilibrado em 1/4 da dose, semanalmente ou a cada 10–15 dias durante o crescimento ativo.\n🧪 Liberação lenta: poucos grânulos no perímetro de vaso drenante, sempre afastados das raízes novas.\n💦 Lavagem: faça periodicamente uma rega abundante apenas com água limpa para reduzir o acúmulo de sais.",
    rega: "Durante a brotação, regue quando o substrato estiver próximo da secagem, mantendo umidade regular sem saturação. Após a maturação dos pseudobulbos, aumente gradualmente o intervalo entre as irrigações, sem permitir enrugamento intenso. No final do inverno, ajuste a água à menor atividade vegetativa, mas não imponha dormência seca.",
    suporte: "🥇 Placa de madeira dura ou cortiça, valorizando o hábito pendente.\n🥈 Cachepô pequeno de madeira.\n🥉 Vaso de barro baixo e perfurado, instalado em posição elevada.",
    substrato: "🥇 Casca de pinus média + chips de coco + pedra-pomes + carvão vegetal.\n🥈 Casca de macadâmia triturada média + pinus médio + pedra-pomes, com pequena fração de fibra de coco.\n🥉 Chips de coco + carvão vegetal + perlita + casca de pinus média.\n⭐ Alternativa: Pinus médio + pedra-pomes + argila expandida miúda + pequena fração de esfagno solto.",
    errosComuns: "Cultivar em sombra excessiva; manter calor noturno abafado e sem vento; usar vaso grande; deixar o substrato velho ou compactado; utilizar esfagno em excesso no clima quente e úmido; impor seca severa; retirar hastes antes de secarem completamente; instalar a planta sem espaço para o desenvolvimento das inflorescências arqueadas.",
    dica: "Cultive em posição elevada ou suspensa para deixar as hastes de 10–35 cm arquearem livremente. No litoral, aproveite o resfriamento natural do outono em vez de tentar impor frio: boa ventilação, luz adequada e pseudobulbos maduros são os gatilhos mais coerentes para a floração.",
    indiceAdaptacaoRegional: {
        versao: "IAR 1.1",
        escala: "compatibilidade",
        litoralQuente: {
            indice: 75,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 5, peso: 30 },
                temperatura: { nota: 3, peso: 30 },
                aguaUmidade: { nota: 3, peso: 5 },
                ventilacao: { nota: 4, peso: 5 },
                luminosidade: { nota: 4, peso: 5 },
                sazonalidade: { nota: 4, peso: 5 },
                floracao: { nota: 3, peso: 20 }
            }
        },
        montanhaFrio: {
            indice: 63,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 3, peso: 30 },
                temperatura: { nota: 3, peso: 30 },
                aguaUmidade: { nota: 3, peso: 5 },
                ventilacao: { nota: 4, peso: 5 },
                luminosidade: { nota: 4, peso: 5 },
                sazonalidade: { nota: 4, peso: 5 },
                floracao: { nota: 3, peso: 20 }
            }
        }
    },
        adaptacaoRegional: {
        litoralQuente: { texto: "Adapta-se bem em Litoral de clima quente quando cultivada no ponto mais fresco, claro e ventilado. Evite calor parado, vaso grande e excesso de esfagno." },
        montanhaFrio: { texto: "Proteja apenas contra geadas e excesso de água no inverno; as noites naturalmente frescas favorecem a indução floral." }
    },
    mesesFloracao: [4, 5, 6, 7, 8],
    "selosCultivo": {
        "rega": { "nivel": "moderada", "regime": "reduzir-repouso" },
        "climaFloracao": { "faixa": "ameno" }
    },
    indiceDificuldadeCultivo: {
        versao: "IDC 2.0",
        referenciaRegional: "Litoral de clima quente",
        indice: 38,
        nivel: "Moderada",
        fatores: {
            temperatura: { nota: 3, peso: 18 },
            agua: { nota: 1, peso: 15 },
            umidadeVentilacao: { nota: 1, peso: 12 },
            luminosidade: { nota: 2, peso: 8 },
            raizes: { nota: 1, peso: 15 },
            cicloRepouso: { nota: 5, peso: 12 },
            floracao: { nota: 1, peso: 20 }
        }
    },
    avaliacoes: { cultivo: 2, floracao: 4, perfume: 2, luminosidade: 4, agua: 3, raridade: 3 }
};
