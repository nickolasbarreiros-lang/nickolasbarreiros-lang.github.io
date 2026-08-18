// Ficha V4 refinada — revisão final.

export const maxillariaLeucaimata = {
    id: "maxillaria-leucaimata",
    nome: "Maxillaria leucaimata",
    genero: "Maxillaria",
    sinonimo: "Maxillaria leucaimata var. longifolia",
    tipo: "Espécie botânica",
    dificuldade: "Moderada",
    caracteristicas: [
        "Epífita ou rupícola brasileira",
        "Flores solitárias de 3 a 4 cm",
        "Pseudobulbos comprimidos e unifoliados",
        "Boa amplitude térmica"
    ],
    fotos: [
        "imagens/Maxillaria leucaimata/Maxillaria leucaimata1.jpg",
        "imagens/Maxillaria leucaimata/Maxillaria leucaimata2.jpeg",
        "imagens/Maxillaria leucaimata/Maxillaria leucaimata3.jpg",
        "imagens/Maxillaria leucaimata/Maxillaria leucaimata4.jpg"
    ],
    descricao: "Uma Maxillaria brasileira versátil, encontrada tanto sobre árvores quanto em rochas abertas da Mata Atlântica. Forma touceiras compactas de pseudobulbos comprimidos, cada um normalmente com uma folha, e produz flores solitárias de 3 a 4 cm em hastes basais que podem chegar a cerca de 20 cm. Sua amplitude natural, do quente ao fresco, ajuda a explicar a boa adaptação em diferentes regiões; o ponto crítico continua sendo manter as raízes finas arejadas e livres de substrato degradado.",
    origem: "Brasil.",
    regiao: "CE, MG e costa Sudeste do Brasil.",
    habitat: "Mata Atlântica · epífita/rupícola · áreas abertas.",
    clima: "Quente a fresco · úmido e ventilado.",
    climaFloracao: "IOSPE registra crescimento quente a fresco, ocorrência em espaços abertos da Mata Atlântica e floração no verão e outono. Como também aparece sobre rochas, a planta está acostumada a raízes muito oxigenadas e alternância rápida entre molhamento e aeração. Não exige repouso seco rigoroso: depois da maturação, apenas reduza discretamente a frequência de rega. Touceiras maduras e não divididas tendem a emitir várias hastes basais.",
    iluminacao: {
        sombrite: "50% a 70%",
        solDireto: "Somente sol muito suave",
        horario: "Início da manhã ou fim da tarde",
        observacoes: "Prefere claridade filtrada abundante. Folhas verde-médio a verde-claro e pseudobulbos firmes indicam bom equilíbrio. Folhas muito escuras e crescimento frouxo sugerem pouca luz; amarelecimento intenso, manchas secas ou aquecimento indicam excesso. No litoral quente, 60% a 70% costuma ser mais seguro."
    },
    floracao: "Mais comum do verão ao outono. Cada inflorescência ereta pode atingir cerca de 20 cm e porta uma única flor de aproximadamente 3 a 4 cm. Plantas adultas podem produzir várias hastes quase simultaneamente, formando uma floração mais cheia sem que cada haste deixe de ser uniflora.",
    adubacao: "🌿 Orgânica: pequena quantidade de bokashi em porta-adubo, afastada do rizoma e brotações.\n💧 Foliar/radicular: NPK equilibrado, como 20-20-20, em 1/4 da dose a cada 10 a 15 dias durante brotação e enraizamento.\n🧪 Liberação lenta: poucos grânulos apenas em vaso muito drenante e longe das pontas novas.\n🚿 Lavagem de sais: uma vez por mês, regue abundantemente apenas com água pura.",
    rega: "Na fase de crescimento, molhe abundantemente e deixe o excesso escorrer. Ajuste vaso, substrato e ventilação para que a mistura perca rapidamente a água livre e volte a receber oxigênio. Após a maturação, amplie levemente o intervalo entre regas, sem impor seca severa. Pseudobulbos enrugados com substrato ainda molhado geralmente indicam perda radicular, abafamento ou substrato degradado — não simples falta de água.",
    suporte: "🥇 Vaso pequeno e muito perfurado: melhor equilíbrio entre retenção e oxigenação.\n🥈 Vaso de barro: excelente em locais úmidos ou para quem rega com frequência.\n🥉 Cesto de madeira ou placa: bons quando a umidade relativa permanece alta e é possível regar regularmente. O recipiente deve acomodar apenas poucos crescimentos futuros.",
    substrato: "🥇 Pedra-pomes + brita fina/média + casca de macadâmia triturada, com pequena fração de pinus.\n🥈 Macadâmia grossa + pedra-pomes + cacos de cerâmica/argila expandida, mantendo o colo totalmente aerado.\n🥉 Pedra-pomes + argila expandida + carvão vegetal + casca de pinus grossa em baixa proporção.\n⭐ Alternativa: Brita + pedra-pomes + carvão vegetal, acrescentando apenas 15–25% de componente orgânico grosso.",
    errosComuns: "Usar vaso grande; enterrar o rizoma ou base dos brotos; manter substrato velho, triturado ou permanentemente saturado; cultivar em sombra profunda; impor seca prolongada; adubar em concentração alta; não fazer lavagem periódica; replantar fora do início do enraizamento.",
    dica: "Observe o tempo de secagem real do vaso. A espécie gosta de receber bastante água quando regada, mas também precisa recuperar rapidamente o oxigênio em torno das raízes. Se a mistura continua molhada por muitos dias, corrija o vaso, a granulometria ou a ventilação em vez de simplesmente reduzir o volume de água aplicado.",
    indiceAdaptacaoRegional: {
        versao: "IAR 1.1",
        escala: "compatibilidade",
        litoralQuente: {
            indice: 61,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 3, peso: 30 },
                temperatura: { nota: 3, peso: 30 },
                aguaUmidade: { nota: 3, peso: 5 },
                ventilacao: { nota: 4, peso: 5 },
                luminosidade: { nota: 4, peso: 5 },
                sazonalidade: { nota: 2, peso: 5 },
                floracao: { nota: 3, peso: 20 }
            }
        },
        montanhaFrio: {
            indice: 72,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 3, peso: 30 },
                temperatura: { nota: 3, peso: 30 },
                aguaUmidade: { nota: 3, peso: 5 },
                ventilacao: { nota: 4, peso: 5 },
                luminosidade: { nota: 4, peso: 5 },
                sazonalidade: { nota: 5, peso: 5 },
                floracao: { nota: 5, peso: 20 }
            }
        }
    },
    adaptacaoRegional: {
        litoralQuente: { texto: "Ao litoral quente. Use 60% a 70% de sombra, vaso justo, mistura predominantemente mineral e ventilação contínua. Regue cedo e acompanhe a secagem real do vaso." },
        montanhaFrio: { texto: "Em regiões serranas. As noites frescas favorecem o ciclo; em semanas frias, nubladas ou chuvosas, aumente o intervalo entre regas sem deixar a planta desidratar." }
    },
    mesesFloracao: [12, 1, 2, 3, 4, 5],
    "selosCultivo": {
        "rega": { "nivel": "moderada" },
        "climaFloracao": { "faixa": "quente", "floraNoCalor": true }
    },
    indiceDificuldadeCultivo: {
        versao: "IDC 2.0",
        referenciaRegional: "Litoral de clima quente",
        indice: 39,
        nivel: "Moderada",
        fatores: {
            temperatura: { nota: 3, peso: 18 },
            agua: { nota: 1, peso: 15 },
            umidadeVentilacao: { nota: 1, peso: 12 },
            luminosidade: { nota: 1, peso: 8 },
            raizes: { nota: 1, peso: 15 },
            cicloRepouso: { nota: 1, peso: 12 },
            floracao: { nota: 4, peso: 20 }
        }
    },
    avaliacoes: {
        cultivo: 2,
        floracao: 3,
        perfume: 2,
        luminosidade: 4,
        agua: 4,
        raridade: 4
    }
};
