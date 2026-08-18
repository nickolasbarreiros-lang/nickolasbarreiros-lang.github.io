// Ficha científica e de cultivo refinada e enriquecida.

export const aspasiaLunata = {
    id: "aspasia-lunata",
    nome: "Aspasia lunata",
    genero: "Aspasia",
    sinonimo: "Odontoglossum lunatum",
    tipo: "Espécie botânica",
    dificuldade: "Moderada",
    caracteristicas: [
        "Epífita",
        "Pseudobulbos comprimidos",
        "Flores contrastantes",
        "Crescimento vigoroso",
    ],
    fotos: [
        "imagens/Aspasia lunata/Aspasia lunata1.webp",
        "imagens/Aspasia lunata/Aspasia lunata2.webp",
        "imagens/Aspasia lunata/Aspasia lunata3.webp",
        "imagens/Aspasia lunata/Aspasia lunata4.webp",
    ],
    descricao: "Uma orquídea brasileira elegante e discreta, a Aspasia lunata chama atenção pelo contraste entre as pétalas e sépalas verde-amareladas, marcadas de castanho, e o labelo amplo em tons claros a violáceos. É uma epífita de porte relativamente compacto, encontrada em florestas úmidas da Bolívia e de várias regiões do Brasil, onde cresce apoiada em árvores sob boa luminosidade filtrada. Seus pseudobulbos achatados carregam folhas estreitas e firmes, enquanto as hastes curtas surgem junto à base dos pseudobulbos maduros e normalmente produzem poucas flores — justamente por isso, cada flor ganha bastante destaque. O nome lunata faz referência à ideia de meia-lua, associada à forma de estruturas florais da espécie.",
    origem: "Bolívia e Brasil.",
    regiao: "Bolívia; Centro-Oeste, Sudeste e Sul do Brasil.",
    habitat: "Florestas tropicais úmidas; epífita sob luz filtrada.",
    clima: "Quente a fresco · úmido e ventilado.",
    climaFloracao: "A floração é favorecida por pseudobulbos maduros, boa luminosidade filtrada, ventilação constante e crescimento vegetativo vigoroso. Não necessita de repouso seco rigoroso; após a maturação dos pseudobulbos, apenas aumente moderadamente o intervalo entre as regas conforme a evaporação diminuir.",
    iluminacao: {
        sombrite: "60% a 70%",
        solDireto: "Apenas muito suave e após aclimatação",
        horario: "Primeiras horas da manhã",
        observacoes: "Prefere luz filtrada de média intensidade. Folhas muito verde-escuras acompanhadas de baixa floração indicam sombra excessiva; amarelamento ou manchas secas sinalizam radiação forte demais. Em clima litorâneo quente, 60% a 70% de sombreamento costuma oferecer bom equilíbrio."
    },
    floracao: "A floração é registrada principalmente na primavera, podendo avançar para o início do verão conforme procedência e condições de cultivo. As inflorescências basais são curtas, eretas e normalmente carregam 1 a 3 flores relativamente grandes para o porte da planta. Após a maturação dos pseudobulbos e a floração, pode ocorrer desaceleração vegetativa; no cultivo isso deve significar apenas regas um pouco mais espaçadas, nunca repouso seco absoluto.",
    adubacao: "🌿 Orgânica: bokashi em pequena dose, protegido em saquinho e usado durante o crescimento ativo.\n💧 Foliar/mineral: NPK equilibrado, como 20-20-20, em baixa concentração a cada 10 a 15 dias enquanto houver brotação e raízes ativas.\n🧪 Liberação lenta: Osmocote 14-14-14 em dose moderada e sempre afastado de raízes novas. Após a maturação dos pseudobulbos, reduza a frequência da adubação conforme o crescimento desacelerar.",
    rega: "Durante a formação de novos brotos e raízes, regue regularmente e permita secagem parcial do substrato entre as irrigações. Após a maturação dos pseudobulbos, aumente ligeiramente o intervalo entre regas, sobretudo em períodos mais frios, sem permitir enrugamento severo.",
    suporte: "🥇 Vaso de barro ou plástico proporcional à touceira, com excelente drenagem.\n🥈 Cachepô de madeira bem ventilado.\n🥉 Cesto plástico raso e perfurado.",
    substrato: "🥇 Casca de pinus média + chips de coco + pedra-pomes + carvão vegetal.\n🥈 Casca de macadâmia triturada média + pinus médio + pedra-pomes, com pequena fração de fibra de coco.\n🥉 Chips de coco + carvão vegetal + perlita + casca de pinus média.\n⭐ Alternativa: Pinus médio + pedra-pomes + argila expandida miúda + pequena fração de esfagno solto.",
    errosComuns: "Cultivar em sombra profunda; expor ao sol direto forte; manter o substrato permanentemente encharcado; usar mistura fina e compactada; usar vaso desproporcionalmente grande; dividir a touceira em porções muito pequenas; deixar os pseudobulbos enrugarem durante o crescimento ativo; impor repouso seco severo sem necessidade.",
    dica: "Evite dividir Aspasia lunata em mudas muito pequenas. Preserve ao menos três a quatro pseudobulbos adultos por divisão para manter reservas suficientes, recuperação rápida e maior capacidade de produzir hastes florais robustas. Mais importante que 'apertar' a planta é oferecer um vaso proporcional, muita aeração e boa luminosidade filtrada.",
    adaptacaoRegional: {
        litoralQuente: { nota: 3, texto: "Adapta-se bem quando recebe ventilação forte, luz filtrada e substrato de secagem rápida. Em Litoral de clima quente, evite calor abafado, sol forte da tarde e excesso de água durante períodos nublados." },
        montanhaFrio: { nota: 3, texto: "Tolera noites frescas e pode florescer muito bem. Reduza a frequência das regas nos períodos frios, mas proteja de geadas e de substrato saturado por muitos dias." }
    },
    mesesFloracao: [9, 10, 11],
    "selosCultivo": {
        "rega": { "nivel": "moderada", "regime": "reduzir-repouso" },
        "climaFloracao": { "faixa": "intermediario" }
    },
    indiceDificuldadeCultivo: {
        versao: "IDC 2.0",
        referenciaRegional: "Litoral de clima quente",
        indice: 50,
        nivel: "Moderada",
        fatores: {
            temperatura: { nota: 3, peso: 18 },
            agua: { nota: 1, peso: 15 },
            umidadeVentilacao: { nota: 2, peso: 12 },
            luminosidade: { nota: 2, peso: 8 },
            raizes: { nota: 1, peso: 15 },
            cicloRepouso: { nota: 4, peso: 12 },
            floracao: { nota: 4, peso: 20 }
        }
    },
    avaliacoes: {
        cultivo: 3,
        floracao: 4,
        perfume: 2,
        luminosidade: 3,
        agua: 3,
        raridade: 2
    }
};