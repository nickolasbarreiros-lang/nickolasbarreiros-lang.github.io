// Refinamento final — Lote 17.

export const leptotesUnicolor = {
    id: "leptotes-unicolor",
    nome: "Leptotes unicolor",
    genero: "Leptotes",
    sinonimo: "Leptotes paranaensis",
    tipo: "Espécie botânica",
    dificuldade: "Fácil",
    caracteristicas: [
        "Miniatura epífita pendente",
        "Folhas cilíndricas e carnosas",
        "Flores perfumadas de 2–2,4 cm",
        "Excelente para cultivo montado"
    ],
    fotos: [
        "imagens/Leptotes unicolor/Leptotes unicolor1.webp",
        "imagens/Leptotes unicolor/Leptotes unicolor2.webp",
        "imagens/Leptotes unicolor/Leptotes unicolor3.webp",
        "imagens/Leptotes unicolor/Leptotes unicolor4.jpeg"
    ],
    descricao: "Uma pequena cascata de flores perfumadas! Leptotes unicolor é uma miniatura epífita de crescimento pendente, com folhas finas, cilíndricas e carnosas que armazenam água. As flores surgem próximas à base das folhas, geralmente uma ou duas por haste, medem cerca de 2 a 2,4 cm e aparecem em tons relativamente uniformes de rosa, lilás ou magenta. Apesar do aspecto delicado, é uma planta resistente quando recebe bastante ar nas raízes e ciclos rápidos de molhamento e secagem.",
    origem: "Sul da América do Sul.",
    regiao: "Brasil e Argentina.",
    habitat: "Ramos de árvores · luz filtrada · epífita.",
    clima: "Quente a fresco · muito ventilado.",
    climaFloracao: "A amplitude indicada para a espécie — de condições quentes a frescas — mostra que não há necessidade de classificá-la rigidamente como planta fria. O ponto mais importante é manter raízes expostas ao ar, boa luminosidade filtrada e secagem rápida. Em clima quente, umidade atmosférica e ventilação devem compensar a evaporação sem manter o suporte permanentemente molhado.",
    iluminacao: {
        sombrite: "50% a 60%",
        solDireto: "Sim, suave e aclimatado",
        horario: "Até aproximadamente 08:30",
        observacoes: "Luz média a alta filtrada. Folhas firmes e verde-oliva indicam equilíbrio; verde muito escuro sugere pouca luz, enquanto clareamento excessivo, tecido áspero ou manchas secas indicam sol e calor demais."
    },
    floracao: "No Brasil, a referência de campo/cultivo aponta principalmente maio e junho, correspondendo ao fim do outono e início do inverno. As pequenas inflorescências pendentes produzem geralmente 1–2 flores perfumadas de aproximadamente 2–2,4 cm.",
    adubacao: "🌿 Orgânica: bokashi em quantidade mínima, sempre em porta-adubo e sem contato com o rizoma.\n💧 Foliar/Mineral: NPK equilibrado em 1/4 da dose a cada 10–15 dias durante brotação e enraizamento, alternando com regas apenas de água.\n🌱 Após a maturação: reduza a frequência, sem necessidade de suspensão absoluta.\n🧪 Liberação lenta: poucos grânulos somente em cesto ou vaso pequeno, afastados das raízes novas.\n🚿 Faça lavagens periódicas com água limpa para evitar sais em raízes finas.",
    rega: "Molhe abundantemente e deixe as raízes secarem antes da próxima irrigação. Em placas de madeira, pode precisar de rega diária no verão; em vasos ou cestos pequenos, regue quando o material estiver quase seco. A espécie tolera melhor uma breve secagem do que permanecer continuamente úmida. No inverno, aumente o intervalo sem permitir enrugamento persistente das folhas.",
    suporte: "🥇 Placa de cortiça, peroba ou galho rugoso.\n🥈 Pequena cesta de madeira ou plástico vazado.\n🥉 Vaso de barro muito pequeno, apenas onde a secagem seja rápida.\nUse amarração leve, sem apertar o rizoma.",
    substrato: "🥇 Casca de macadâmia média + pinus médio + pedra-pomes + carvão vegetal.\n🥈 Chips de coco grossos + pedra-pomes + carvão + pinus médio, com secagem clara entre regas.\n🥉 Pinus médio/grosso + pedra-pomes + carvão + chips de coco em baixa proporção.\n⭐ Alternativa: Casca de macadâmia + argila expandida + carvão vegetal + pinus grosso.",
    errosComuns: "Usar vaso grande ou substrato retentor; cobrir o rizoma; compactar esfagno; cultivar em sombra excessiva; adubar em dosagem alta; molhar ao fim do dia em noites frias; replantar fora da emissão de raízes novas; apertar o rizoma com arame; confundir folhas murchas por perda de raízes com simples falta de água.",
    dica: "Replante ou fixe a planta quando surgirem raízes novas na base da brotação. As raízes antigas raramente voltam a aderir bem a um novo suporte, então a recuperação depende principalmente das raízes emitidas depois da mudança. Para essa espécie, uma boa montagem vale mais que um substrato sofisticado.",
    indiceAdaptacaoRegional: {
        versao: "IAR 1.0",
        escala: "compatibilidade",
        litoralQuente: {
            indice: 61,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 3, peso: 20 },
                temperatura: { nota: 3, peso: 20 },
                aguaUmidade: { nota: 3, peso: 15 },
                ventilacao: { nota: 3, peso: 10 },
                luminosidade: { nota: 3, peso: 10 },
                sazonalidade: { nota: 4, peso: 5 },
                floracao: { nota: 3, peso: 20 }
            }
        },
        montanhaFrio: {
            indice: 78,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 3, peso: 20 },
                temperatura: { nota: 4, peso: 20 },
                aguaUmidade: { nota: 4, peso: 15 },
                ventilacao: { nota: 4, peso: 10 },
                luminosidade: { nota: 3, peso: 10 },
                sazonalidade: { nota: 4, peso: 5 },
                floracao: { nota: 5, peso: 20 }
            }
        }
    },
    adaptacaoRegional: {
        litoralQuente: { texto: "Quando montada em local muito ventilado, com regas matinais frequentes e proteção contra sol forte após o início da manhã. Evite retenção de água junto ao rizoma e aumente a circulação de ar em noites quentes." },
        montanhaFrio: { texto: "Em noites frescas. Reduza as regas em períodos frios e úmidos, mantendo boa luminosidade e circulação de ar." }
    },
    mesesFloracao: [5, 6],
    "selosCultivo": {
        "rega": { "nivel": "moderada", "regime": "reduzir-inverno" },
        "climaFloracao": { "faixa": "intermediario" }
    },
    indiceDificuldadeCultivo: {
        versao: "IDC 2.0",
        referenciaRegional: "Litoral de clima quente",
        indice: 29,
        nivel: "Fácil",
        fatores: {
            temperatura: { nota: 3, peso: 18 },
            agua: { nota: 1, peso: 15 },
            umidadeVentilacao: { nota: 2, peso: 12 },
            luminosidade: { nota: 2, peso: 8 },
            raizes: { nota: 1, peso: 15 },
            cicloRepouso: { nota: 0, peso: 12 },
            floracao: { nota: 1, peso: 20 }
        }
    },
    avaliacoes: {
        cultivo: 2,
        floracao: 4,
        perfume: 3,
        luminosidade: 4,
        agua: 3,
        raridade: 3
    }
};
