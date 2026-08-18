// Refinamento Final — Lote 15.

export const isochilusLinearis = {
    id: "isochilus-linearis",
    nome: "Isochilus linearis",
    genero: "Isochilus",
    sinonimo: "Epidendrum lineare",
    tipo: "Espécie botânica",
    dificuldade: "Moderada",
    caracteristicas: ["Ampla distribuição americana", "Epífita e rupícola", "Caules finos e folhosos", "Sem pseudobulbos", "Flores tubulares rosadas", "Forma grandes touceiras"],
    fotos: [
        "imagens/Isochilus linearis/isochilus linearis1.jpg",
        "imagens/Isochilus linearis/isochilus linearis2.jpg",
        "imagens/Isochilus linearis/isochilus linearis3.jpg",
        "imagens/Isochilus linearis/isochilus linearis4.jpg"
    ],
    descricao: "À primeira vista, parece quase uma pequena touceira de capim — até que as pontas dos caules se enchem de flores! Isochilus linearis forma touceiras densas, com caules finos, agrupados, eretos a arqueados e sem pseudobulbos. As folhas são estreitas, lineares a lanceoladas, distribuídas ao longo dos caules. É predominantemente epífita ou rupícola, habitando florestas tropicais úmidas; algumas referências também registram ocorrência terrestre. As inflorescências são curtas e terminais, reunindo pequenas flores tubulares, geralmente orientadas para o mesmo lado. A coloração é frequentemente rosada a violácea, mas pode variar entre populações. As flores apresentam forte tendência à autopolinização e à cleistogamia, podendo permanecer pouco abertas. A espécie possui distribuição extremamente ampla, do México a grande parte da América tropical, inclusive no Brasil, e ocorre desde altitudes relativamente baixas até montanhas elevadas, o que ajuda a explicar a grande variação de resposta à temperatura em cultivo.",
    origem: "México à América tropical.",
    regiao: "Caribe, América Central e América do Sul.",
    habitat: "Florestas tropicais úmidas · hábito principalmente epífito ou rupícola · 300–3.900 m.",
    clima: "Intermediário a quente · ampla tolerância.",
    climaFloracao: "A faixa altitudinal documentada é excepcionalmente ampla, de cerca de 300 a 3.900 m, mas muitas coletas concentram-se aproximadamente entre 600 e 1.200 m. Por isso não é correto classificar toda a espécie como fria ou quente. No litoral, trabalhe com o comportamento intermediário: luz filtrada, boa ventilação e umidade regular, especialmente porque os caules não possuem grande reserva de água. Não necessita repouso seco.",
    iluminacao: {
        sombrite: "50% a 70%",
        solDireto: "Somente muito suave",
        horario: "Primeiras horas da manhã",
        observacoes: "Prefere claridade suave e filtrada e não sombra plena. Caules excessivamente longos e moles indicam falta de luz; folhas amareladas ou secas nas pontas podem indicar excesso de sol, baixa umidade ou acúmulo de sais."
    },
    floracao: "Pode florescer em diferentes épocas do ano conforme a procedência e as condições de cultivo; no Brasil, costuma ser mais observada da primavera ao verão. As pequenas flores tubulares surgem agrupadas no ápice dos caules maduros, geralmente voltadas para o mesmo lado. As flores individuais podem ser relativamente breves, enquanto uma touceira com várias hastes pode prolongar o efeito ornamental pela emissão sucessiva de flores.",
    adubacao: "🌿 Orgânica: bokashi em dose mínima e sempre afastado das raízes.\n💧 Foliar: NPK equilibrado em 1/4 da dose a cada 10–15 dias durante o crescimento ativo.\n🧪 Liberação lenta: apenas poucos grânulos em recipiente pequeno e drenante.\n💦 Lavagem: mensalmente, faça uma rega abundante com água limpa para remover sais do substrato.",
    rega: "Mantenha umidade regular e volte a regar antes que a touceira permaneça seca por muito tempo. Ao mesmo tempo, permita a entrada de ar no substrato entre as regas. AOS recomenda que espécies do gênero não sequem completamente. No inverno, apenas acompanhe a menor evaporação e reduza proporcionalmente a frequência.",
    suporte: "🥇 Cachepô de madeira bem vazado.\n🥈 Vaso de barro pequeno e raso.\n🥉 Vaso plástico pequeno e bem perfurado.\n🏅 Placa de cortiça em ambiente de alta umidade, com regas frequentes.",
    substrato: "🥇 Montagem em nó de pinho, cortiça ou madeira com uma lâmina fina de esfagno apenas sob as raízes.\n🥈 Casca de pinus fina + perlita + pedra-pomes fina + pequena fração de esfagno solto.\n🥉 Chips de coco pequenos + perlita + casca de pinus fina, mantendo o conjunto leve e aerado.\n⭐ Alternativa: Esfagno de fibra longa usado muito solto + pedra-pomes fina; evitar compactação junto ao rizoma.",
    errosComuns: "Impor seca prolongada; cultivar em sombra excessiva; usar vaso profundo e grande; manter substrato velho ou compactado; aplicar adubo concentrado; cultivar em local abafado; deixar a touceira superaquecer; confundir umidade regular com encharcamento; dividir frequentemente uma colônia saudável.",
    dica: "A melhor forma de entender essa espécie é observar seus caules. Como não há pseudobulbos robustos para funcionar como reserva, caules enrugados e folhas perdendo firmeza indicam que a planta ficou seca demais. Mantenha água disponível sem sacrificar a aeração e preserve touceiras grandes: elas estabilizam o microclima e florescem com muito mais impacto.",
    indiceAdaptacaoRegional: {
        versao: "IAR 1.1",
        escala: "compatibilidade",
        litoralQuente: {
            indice: 81,
            estrelas: 5,
            fatores: {
                habitatNatural: { nota: 5, peso: 30 },
                temperatura: { nota: 4, peso: 30 },
                aguaUmidade: { nota: 3, peso: 5 },
                ventilacao: { nota: 2, peso: 5 },
                luminosidade: { nota: 4, peso: 5 },
                sazonalidade: { nota: 2, peso: 5 },
                floracao: { nota: 4, peso: 20 }
            }
        },
        montanhaFrio: {
            indice: 80,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 5, peso: 30 },
                temperatura: { nota: 3, peso: 30 },
                aguaUmidade: { nota: 3, peso: 5 },
                ventilacao: { nota: 4, peso: 5 },
                luminosidade: { nota: 4, peso: 5 },
                sazonalidade: { nota: 5, peso: 5 },
                floracao: { nota: 4, peso: 20 }
            }
        }
    },
    adaptacaoRegional: {
        litoralQuente: { texto: "Muito boa para procedências adaptadas a temperaturas intermediárias ou quentes. Mantenha luz filtrada, umidade regular e forte ventilação, evitando calor abafado no centro da touceira." },
        montanhaFrio: { texto: "Excelente para muitas procedências. Ajuste a água à menor evaporação e proteja contra geadas; não deixe o substrato secar completamente." }
    },
    mesesFloracao: [9, 10, 11, 12, 1, 2],
    "selosCultivo": {
        "rega": { "nivel": "constante", "regime": "reduzir-inverno" },
        "climaFloracao": { "faixa": "quente" }
    },
    indiceDificuldadeCultivo: {
        versao: "IDC 2.0",
        referenciaRegional: "Litoral de clima quente",
        indice: 39,
        nivel: "Moderada",
        fatores: {
            temperatura: { nota: 1, peso: 18 },
            agua: { nota: 1, peso: 15 },
            umidadeVentilacao: { nota: 4, peso: 12 },
            luminosidade: { nota: 1, peso: 8 },
            raizes: { nota: 1, peso: 15 },
            cicloRepouso: { nota: 1, peso: 12 },
            floracao: { nota: 4, peso: 20 }
        }
    },
    avaliacoes: { cultivo: 2, floracao: 4, perfume: 1, luminosidade: 3, agua: 4, raridade: 3 }
};
