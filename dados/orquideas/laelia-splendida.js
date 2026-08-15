// Ficha científica e de cultivo revisada — Laelia splendida.
// Mantém "Schomburgkia splendida" como identificação histórica relevante da coleção.

export const laeliaSplendida = {
    id: "laelia-splendida",
    nome: "Laelia splendida",
    genero: "Laelia",
    tipo: "Espécie botânica epífita ou rupícola sul-americana",
    dificuldade: "Moderada",
    caracteristicas: [
        "Sin. Schomburgkia splendida",
        "Flores grandes e vistosas",
        "Haste floral longa",
        "Alta luminosidade",
        "Clima quente a intermediário",
        "Crescimento robusto"
    ],
    fotos: [
        "imagens/Laelia splendida/Laelia splendida1.jpg",
        "imagens/Laelia splendida/Laelia splendida2.jpg",
        "imagens/Laelia splendida/Laelia splendida3.jpg",
        "imagens/Laelia splendida/Laelia splendida4.jpg"
    ],
    descricao: "Laelia splendida é uma orquídea de presença marcante, conhecida por muitos colecionadores pelo antigo nome Schomburgkia splendida. Forma pseudobulbos robustos e, quando adulta, lança hastes florais longas que elevam as flores bem acima da folhagem. As flores são grandes, vistosas e de aspecto tropical, fazendo desta uma espécie especialmente interessante para espaços claros e bem ventilados. Apesar do porte imponente, seu cultivo é relativamente direto quando recebe bastante luz, raízes arejadas e uma boa alternância entre rega abundante e secagem.",
    origem: "América do Sul.",
    regiao: "Colômbia e Equador.",
    habitat: "Epífita ou rupícola de ambientes tropicais claros e ventilados.",
    clima: "Quente a intermediário, luminoso e ventilado.",
    climaFloracao: "A floração depende principalmente de pseudobulbos maduros, boa reserva de energia e luminosidade elevada. No litoral quente, adapta-se bem desde que as raízes tenham excelente aeração e a planta não permaneça constantemente molhada.",
    iluminacao: {
        sombrite: "30% a 50%",
        solDireto: "Aceita sol fraco da manhã após aclimatação",
        horario: "Luz intensa e filtrada durante grande parte do dia",
        observacoes: "É uma espécie de alta luminosidade. Sombra excessiva produz crescimento verde e vigoroso, mas pode impedir a floração. No litoral quente, evite sol forte do meio do dia sobre folhas não aclimatadas."
    },
    floracao: "A época pode variar conforme procedência e condições de cultivo. No calendário do site, primavera e início do verão são usados como janela prática de referência, observando sempre a maturação dos pseudobulbos.",
    adubacao: "🌿 Orgânica: bokashi em pequena quantidade, preferencialmente em porta-adubo.\n💧 Foliar/mineral: NPK equilibrado, como 20-20-20, em cerca de 1/4 da dose comercial a cada 10 a 15 dias durante crescimento ativo.\n🧪 Liberação lenta: pode ser utilizada em poucos grânulos em vasos ou cestos.\n🚿 Lavagem: faça regas periódicas apenas com água para evitar acúmulo de sais.",
    rega: "Regue abundantemente enquanto novos brotos e raízes estiverem ativos, deixando o suporte secar parcialmente antes da próxima irrigação. Com pseudobulbos maduros, aumente moderadamente o intervalo entre regas. Evite raízes permanentemente molhadas.",
    suporte: [
        "🥇 Cesto ou cachepô de madeira, permitindo raízes muito arejadas.",
        "🥈 Vaso de barro largo e bem perfurado, proporcional à frente de crescimento.",
        "🥉 Placa ou tronco robusto, quando houver umidade suficiente para regas frequentes."
    ],
    substrato: ["🥇 Casca de macadâmia média + pinus médio + pedra-pomes + carvão vegetal.", "🥈 Pinus médio/grosso + pedra-pomes + carvão + chips de coco em baixa proporção.", "🥉 Casca de macadâmia + argila expandida + carvão vegetal + pinus grosso.", "⭐ Alternativa: Chips de coco grossos + pedra-pomes + carvão + pinus médio, com secagem clara entre regas."],
    errosComuns: [
        "Cultivar em sombra excessiva",
        "Usar vaso profundo e pouco ventilado",
        "Manter raízes permanentemente molhadas",
        "Dividir a planta em partes muito pequenas",
        "Replantar sem novas raízes em atividade",
        "Aplicar fertilizante concentrado",
        "Não oferecer espaço para a nova frente de crescimento",
        "Expor abruptamente ao sol forte sem aclimatação"
    ],
    dica: "🏆 Se a planta cresce bem mas não floresce, investigue primeiro a luz. Laelia splendida precisa acumular bastante energia para sustentar suas hastes longas. No litoral quente, um local muito claro, ventilado e com raízes quase expostas costuma funcionar melhor que um vaso úmido e sombreado.",
    adaptacaoRegional: {
        litoralQuente: "Muito boa, cerca de 4/5. Calor não costuma ser o principal problema; ofereça muita luz, circulação de ar e secagem relativamente rápida das raízes.",
        montanhaFrio: "Boa, cerca de 4/5. Tolera noites mais frescas, mas deve ser protegida de frio intenso e de substrato frio e constantemente saturado."
    },
    mesesFloracao: [9, 10, 11, 12],
    "selosCultivo": {
        "rega": { "nivel": "moderada" },
        "climaFloracao": { "faixa": "quente" }
    },
    "raridadeIndice": {
        "versao": "2.0",
        "aplicavel": true,
        "statusAuditoria": "Fase 2 — aguardando validação externa dos campos dinâmicos",
        "distribuicao": {
            "pontuacao": 55,
            "status": "preliminar",
            "eooKm2": null,
            "aooKm2": null,
            "fonte": null
        },
        "ocorrenciasGBIF": {
            "pontuacao": null,
            "registrosBrutos": null,
            "registrosLimpos": null,
            "celulas10km": null,
            "dataConsulta": null,
            "criteriosLimpeza": "taxon aceito; ocorrência PRESENT; excluir LIVING_SPECIMEN/cultivado quando identificável; coordenadas válidas; remover duplicatas espaciais/temporais e registros com problemas geoespaciais evidentes",
            "fonte": "GBIF"
        },
        "endemismoHabitat": {
            "pontuacao": 50,
            "status": "preliminar",
            "fonte": null
        },
        "conservacao": {
            "pontuacao": null,
            "categoria": null,
            "criterio": null,
            "fonte": null
        },
        "populacaoFragmentacao": {
            "pontuacao": null,
            "tendencia": null,
            "fragmentacao": null,
            "fonte": null
        },
        "ameacas": {
            "pontuacao": null,
            "vetores": [],
            "fonte": null
        },
        "disponibilidadeComercial": {
            "pontuacao": null,
            "vendedoresAtivosIndependentes": null,
            "canaisConsultados": null,
            "propagacaoComercial": null,
            "dataConsulta": null,
            "janelaDias": 120,
            "escopo": "Brasil",
            "observacao": "A escassez comercial entra com peso baixo; disponibilidade em cultivo não é sinônimo de abundância na natureza."
        },
        "fase1Legado": {
            "indiceEstimado": 59,
            "estrelasCalculadas": 3,
            "confianca": 55
        },
        "resultadoV2": {
            "indice": null,
            "estrelas": null,
            "confianca": null,
            "usarNotaLegadaAteAuditoria": true
        }
    },
    avaliacoes: { cultivo: 3, floracao: 4, perfume: 2, luminosidade: 4, agua: 3, raridade: 3 }
};
