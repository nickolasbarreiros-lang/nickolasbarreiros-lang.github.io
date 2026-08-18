// Ficha científica e de cultivo revisada — Refinamento Lote 10.
// Nome de arquivo e ID históricos preservados; o nome aceito exibido é Cattleya caulescens.

export const laeliaCaulencens = {
    id: "laelia-caulencens",
    nome: "Cattleya caulescens",
    genero: "Cattleya",
    sinonimo: "Laelia caulescens",
    tipo: "Espécie botânica litófita/rupícola",
    dificuldade: "Moderada",
    caracteristicas: [
        "Endêmica de Minas Gerais",
        "Campos rupestres",
        "Porte compacto",
        "Unifoliada",
        "Luminosidade muito alta",
        "Cultivo predominantemente mineral"
    ],
    fotos: [
        "imagens/Cattleya caulescens/Cattleya caulescens1.jpg",
        "imagens/Cattleya caulescens/Cattleya caulescens2.jpg",
        "imagens/Cattleya caulescens/Cattleya caulescens3.jpg",
        "imagens/Cattleya caulescens/Cattleya caulescens4.jpg"
    ],
    descricao: "Pequena no porte, mas muito marcante quando floresce! Cattleya caulescens é uma rupícola de Minas Gerais que vive entre pedras e areia, em encostas abertas e muito iluminadas. Seus pseudobulbos compactos sustentam uma única folha firme, enquanto hastes de cerca de 15 a 35 cm elevam de 2 a 5 flores rosadas, lilases ou púrpuras. Na natureza aparece por volta de 600 a 1.200 m; por isso, no litoral quente, o ponto decisivo é oferecer muita luz sem deixar pedras, vaso e raízes superaquecerem.",
    origem: "Brasil.",
    regiao: "Minas Gerais.",
    habitat: "Campos rupestres · rochas e areia · ~600–1.200 m.",
    clima: "Quente a fresco · sazonal · alta luz.",
    climaFloracao: "A floração é favorecida por pseudobulbos bem maduros, alta luminosidade e raízes ativas. Após o crescimento, reduza a frequência das regas conforme a atividade cair, mas sem impor seca severa. No litoral quente, controle principalmente o superaquecimento do recipiente e das raízes durante o dia e o abafamento noturno.",
    iluminacao: {
        sombrite: "30% a 50% — 40% a 50% no litoral quente",
        solDireto: "Somente suave e com aclimatação",
        horario: "Primeiras horas da manhã",
        observacoes: "Necessita muita luz, mas em litoral quente não comece com apenas 30% de sombreamento. Crescimento compacto, pseudobulbos firmes e folha rígida são melhores indicadores que pigmentação avermelhada. Evite pedra ou vaso aquecendo diretamente ao sol forte."
    },
    floracao: "Predomina no outono e inverno. As hastes geralmente medem cerca de 15 a 35 cm e carregam de 2 a 5 flores bem espaçadas, com flores em torno de 3,5–4 cm.",
    adubacao: "🌿 Orgânica: Bokashi é opcional e deve ser usado em quantidade mínima, bem afastado do rizoma.\n💧 Foliar/mineral: NPK equilibrado em aproximadamente 1/4 da dose a cada 10 a 15 dias durante crescimento ativo.\n🧪 Liberação lenta: opcional em dose muito baixa. Não é necessário usar formulações 10-30-20 ou 15-15-30 como regra para floração.",
    rega: "Durante crescimento ativo, regue abundantemente e permita drenagem imediata, forte oxigenação e secagem progressiva antes da próxima irrigação. No período de menor atividade, aumente significativamente o intervalo entre regas, sem deixar os pequenos pseudobulbos desidratarem em excesso.",
    suporte: "🥇 Vaso baixo de barro, pequeno e bem perfurado.\n🥈 Cesto raso e muito vazado.\n🥉 Pedra porosa ou montagem mineral firmemente fixada.\nO vaso pequeno é útil porque reduz o volume de material úmido, não porque as raízes precisem ficar comprimidas.",
    substrato: "🥇 Pedra-pomes + brita fina/média + casca de macadâmia triturada, com pequena fração de pinus.\n🥈 Pedra-pomes + argila expandida + carvão vegetal + casca de pinus grossa em baixa proporção.\n🥉 Brita + pedra-pomes + carvão vegetal, acrescentando apenas 15–25% de componente orgânico grosso.\n⭐ Alternativa: Macadâmia grossa + pedra-pomes + cacos de cerâmica/argila expandida, mantendo o colo totalmente aerado.",
    errosComuns: "• Substrato compacto.\n• Vaso grande e profundo.\n• Sombra excessiva e estiolamento.\n• Sol forte aquecendo pedra ou vaso.\n• Confundir rupícola com xerófita extrema.\n• Repouso seco exagerado.\n• Pouca ventilação no litoral.\n• Excesso de fertilizante e acúmulo de sais.",
    dica: "🏆 O melhor resultado vem de reproduzir a dinâmica de uma encosta rochosa: muita luz, água abundante quando a planta está ativa, drenagem imediata e ar retornando rapidamente às raízes. No litoral, prefira vaso baixo e claro ou barro bem ventilado e proteja o recipiente do sol forte da tarde.",
    indiceAdaptacaoRegional: {
        versao: "IAR 1.1",
        escala: "compatibilidade",
        litoralQuente: {
            indice: 69,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 4, peso: 30 },
                temperatura: { nota: 3, peso: 30 },
                aguaUmidade: { nota: 3, peso: 5 },
                ventilacao: { nota: 4, peso: 5 },
                luminosidade: { nota: 4, peso: 5 },
                sazonalidade: { nota: 4, peso: 5 },
                floracao: { nota: 3, peso: 20 }
            }
        },
        montanhaFrio: {
            indice: 74,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 5, peso: 30 },
                temperatura: { nota: 3, peso: 30 },
                aguaUmidade: { nota: 3, peso: 5 },
                ventilacao: { nota: 4, peso: 5 },
                luminosidade: { nota: 3, peso: 5 },
                sazonalidade: { nota: 4, peso: 5 },
                floracao: { nota: 3, peso: 20 }
            }
        }
    },
        adaptacaoRegional: {
        litoralQuente: { texto: "Difícil a moderada de adaptação. O principal desafio é calor noturno combinado com umidade residual. Priorize o ponto mais ventilado e sem superfícies quentes ao redor." },
        montanhaFrio: { texto: "Com alta luminosidade e boa ventilação. Proteja apenas de geadas e de longos períodos frios com vaso encharcado." }
    },
    mesesFloracao: [4, 5, 6, 7, 8],
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
            umidadeVentilacao: { nota: 1, peso: 12 },
            luminosidade: { nota: 2, peso: 8 },
            raizes: { nota: 1, peso: 15 },
            cicloRepouso: { nota: 5, peso: 12 },
            floracao: { nota: 4, peso: 20 }
        }
    },
    avaliacoes: {
        cultivo: 3,
        floracao: 3,
        perfume: 1,
        luminosidade: 5,
        agua: 2,
        raridade: 4
    }
};
