// Refinamento Final — Lote 14.

export const eriaHyacinthoides = {
    id: "eria-hyacinthoides",
    nome: "Bryobium hyacinthoides",
    genero: "Bryobium",
    sinonimo: "Eria hyacinthoides",
    tipo: "Espécie botânica — nome atualizado",
    dificuldade: "Moderada",
    indiceDificuldadeCultivo: {
        versao: "IDC 1.0",
        referenciaRegional: "Litoral de clima quente",
        indice: 46,
        nivel: "Moderada",
        fatores: {
            temperatura: { nota: 2, peso: 18 },
            agua: { nota: 3, peso: 15 },
            umidadeVentilacao: { nota: 1, peso: 12 },
            luminosidade: { nota: 1, peso: 8 },
            raizes: { nota: 3, peso: 15 },
            cicloRepouso: { nota: 2, peso: 12 },
            floracao: { nota: 3, peso: 20 }
        }
    },
    caracteristicas: ["Sinônimo: Eria hyacinthoides", "Sudeste Asiático", "Inflorescência densa", "Alta umidade"],
    "fotos": [
        "imagens/Bryobium hyacinthoides/Bryobium hyacinthoides1.jpg",
        "imagens/Bryobium hyacinthoides/Bryobium hyacinthoides2.jpg",
        "imagens/Bryobium hyacinthoides/Bryobium hyacinthoides3.jpg",
        "imagens/Bryobium hyacinthoides/Bryobium hyacinthoides4.jpg"
    ],
    descricao: "Uma pequena asiática que compensa o tamanho das flores com quantidade! Bryobium hyacinthoides forma pseudobulbos agrupados e folhas estreitas próximas ao ápice, de onde surgem hastes eretas de até cerca de 25 cm com aproximadamente 20–40 flores. Cada flor pode chegar perto de 2 cm e as inflorescências têm aspecto levemente felpudo. Vive em florestas úmidas do Sudeste Asiático, entre cerca de 500 e 1.700 m, por isso aprecia umidade atmosférica alta e boa circulação de ar, mas não raízes permanentemente encharcadas.",
    origem: "Sudeste Asiático.",
    regiao: "Tailândia à Malesia ocidental e meridional.",
    habitat: "Florestas úmidas · epífita/rupícola · 500–1.700 m.",
    clima: "Quente a fresco · úmido e ventilado.",
    climaFloracao: "A faixa altitudinal ampla explica sua tolerância de quente a fresco. No litoral, mantenha sombra clara, umidade atmosférica e movimento de ar, evitando aquecimento abafado. Não necessita repouso seco; apenas reduza a frequência de rega quando a evaporação cair.",
    iluminacao: {
        sombrite: "60% a 70%",
        solDireto: "Não",
        horario: "Luz indireta durante todo o dia",
        observacoes: "Necessita de luz filtrada média. O sol direto não é recomendado, pois o aquecimento excessivo das folhas causa queimaduras rápidas e amarelamento foliar prematuro."
    },
    floracao: "Principalmente na primavera; hastes de até cerca de 25 cm com aproximadamente 20–40 flores.",
    adubacao: "💧 Foliar: NPK equilibrado, como 20-20-20, diluído a 1/4 da dose recomendada pelo fabricante, a cada 7 a 10 dias durante o crescimento ativo.\n🌿 Orgânica: Bokashi em dose muito reduzida e afastado das raízes.\n🧪 Liberação lenta: poucos grânulos de Osmocote em recipiente bem ventilado.\n⚠️ Atenção: as raízes finas são sensíveis ao acúmulo de sais; realize periodicamente regas abundantes apenas com água para lixiviar o substrato.",
    rega: "Mantenha regas regulares e frequentes durante os períodos quentes, permitindo apenas uma leve aeração na camada superficial do substrato entre as irrigações. No inverno ou em dias frios, reduza ligeiramente a frequência, mas nunca deixe o substrato secar por completo.",
    suporte: "🥇 Cesto ou cachepô bem ventilado.\n🥈 Vaso de barro.\n🥉 Montagem em tronco apenas em ambiente de alta umidade relativa.",
    substrato: "🥇 Casca de pinus média + chips de coco + pedra-pomes + pequena fração de esfagno solto.\n🥈 Cesto raso com esfagno de fibra longa bem solto + pedra-pomes/perlita, sem compactar o rizoma.\n🥉 Chips de coco tratados + perlita + carvão vegetal miúdo + pouco esfagno.\n⭐ Alternativa: Casca de macadâmia triturada média + pinus médio + pedra-pomes + esfagno em baixa proporção.",
    errosComuns: "Manter a planta identificada apenas sob o gênero desatualizado Eria nos registros da coleção; Permitir secura prolongada do substrato; Cultivar em ambientes com pouca ventilação; Exagerar na dosagem dos adubos e causar queima das raízes por sais; Dividir touceiras pequenas antes de a planta estar bem estabelecida.",
    dica: "Deixe a planta formar uma touceira antes de dividir. O efeito ornamental vem justamente das hastes densas e numerosas; em clima quente, combine umidade do ar com ventilação forte para que as raízes finas permaneçam hidratadas sem ficar abafadas.",
    adaptacaoRegional: { litoralQuente: "Boa, com umidade, sombra clara e circulação de ar.", montanhaFrio: "Boa em local protegido, evitando frio intenso e substrato encharcado no inverno." },
    mesesFloracao: [9,10,11,12,1,2],
    "selosCultivo": {
        "rega": { "nivel": "moderada", "regime": "reduzir-inverno" },
        "climaFloracao": { "faixa": "intermediario" }
    },
    avaliacoes: { cultivo: 3, floracao: 4, perfume: 2, luminosidade: 3, agua: 4, raridade: 4 }
};
