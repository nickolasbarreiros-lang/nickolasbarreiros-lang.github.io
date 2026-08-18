// Ficha científica e de cultivo — Refinamento Final, Lote 06.

export const catasetumMattosianum = {
    id: "catasetum-mattosianum",
    nome: "Catasetum mattosianum",
    genero: "Catasetum",
    tipo: "Espécie botânica brasileira — caducifólia",
    dificuldade: "Fácil",
    caracteristicas: [
        "Endêmica do Brasil",
        "Bahia e Espírito Santo",
        "Flores de ~3 cm",
        "Folhagem caduca",
        "Dimorfismo sexual",
        "Dormência sazonal"
    ],
    fotos: [
        "imagens/Catasetum mattosianum/Catasetum mattosianum1.jpg",
        "imagens/Catasetum mattosianum/Catasetum mattosianum2.jpg",
        "imagens/Catasetum mattosianum/Catasetum mattosianum3.jpg",
        "imagens/Catasetum mattosianum/Catasetum mattosianum4.jpg"
    ],
    descricao: "Uma espécie brasileira marcada pelas grandes mudanças que acontecem ao longo do ano. *Catasetum mattosianum* desenvolve pseudobulbos carnosos e vigorosos durante a estação de crescimento, cobertos por folhas finas e pregueadas; depois, com a chegada da dormência, as folhas amarelecem e caem, deixando os pseudobulbos armazenarem energia para o próximo ciclo. Nativa da Bahia ao Espírito Santo, produz no verão flores de aproximadamente 3 cm, com coloração bastante variável. Como é típico dos *Catasetum*, pode formar flores masculinas e femininas muito diferentes entre si — uma característica fascinante do gênero. Luz, reservas da planta e condições ambientais podem influenciar qual tipo aparece, mas não existe uma fórmula simples capaz de garantir flores de determinado sexo.",
    origem: "Brasil.",
    regiao: "Bahia ao Espírito Santo.",
    habitat: "Epífita de bioma tropical úmido.",
    clima: "Quente · verão úmido e repouso sazonal.",
    climaFloracao: "A floração está associada ao período de crescimento e ocorre principalmente no verão. O que determina a qualidade da floração é a formação de um pseudobulbo forte, sustentada por água abundante, nutrição moderada, luz alta e raízes saudáveis durante a fase ativa. A dormência não deve ser antecipada artificialmente. A influência da luz sobre o sexo das flores existe no gênero, mas não é absoluta: genética, reservas e microclima também participam.",
    iluminacao: {
        sombrite: "40% a 50%",
        solDireto: "Somente suave e após aclimatação",
        horario: "Primeiras horas da manhã",
        observacoes: "Durante crescimento ativo necessita bastante luz para formar pseudobulbos volumosos. Folhas verde-médio a verde-claro e pseudobulbos robustos são bons indicadores. Excesso súbito de sol queima folhas; sombra profunda gera crescimento mais fraco. A intensidade luminosa influencia diretamente a proporção de flores: níveis mais altos de luz favorecem o surgimento de flores femininas, enquanto condições de menor luminosidade tendem a estimular o aparecimento de flores masculinas."
    },
    floracao: "Principalmente no verão. IOSPE registra flores de aproximadamente 3 cm e grande variabilidade de cor. O momento exato pode oscilar conforme início da brotação, maturação do pseudobulbo e condições de cultivo.",
    adubacao: "🌿 Orgânica: Bokashi pode ser usado em pequena quantidade durante crescimento, somente depois de o novo sistema radicular estar funcional.\n💧 Foliar/mineral: NPK equilibrado ou levemente mais nitrogenado em 1/4 a 1/3 da dose, com maior frequência no crescimento vigoroso.\n🧪 Liberação lenta: Osmocote 14-14-14 pode ser utilizado em dose moderada quando as regas regulares já começaram. Suspenda fertilização quando as folhas amarelecerem e a dormência se instalar.",
    rega: "Divida o manejo em fases. Broto recém-surgido: mantenha o vaso predominantemente seco e evite encharcar. Quando várias raízes novas atingirem aproximadamente 5 a 8 cm, aumente a água gradualmente. Durante o crescimento explosivo e o engrossamento do pseudobulbo, regue abundantemente. Quando as folhas amarelecerem e caírem, reduza fortemente ou suspenda as regas regulares; hidrate apenas de forma mínima se os pseudobulbos entrarem em desidratação excessiva.",
    suporte: "🥇 O vaso plástico bem perfurado mas capaz de conservar a umidade necessária durante o verão, sendo também uma excelente opção para o cultivo em semi-hidroponia.\n🥈 Cachepô ou cesto de madeira para manejo com regas frequentes.\n🥉 Cesta plástica ou vaso tipo cuia, combinando ventilação e retenção moderada.",
    substrato: "🥇 Chips de coco médios + pedra-pomes + casca de arroz carbonizada + carvão vegetal: boa reserva hídrica no crescimento e secagem eficiente no repouso.\n🥈 Esfagno de fibra longa solto + pedra-pomes + carvão, apenas em vaso pequeno e muito drenado no litoral quente.\n🥉 Pinus médio + chips de coco + pedra-pomes + casca de arroz carbonizada.\n⭐ Alternativa: Argila expandida + pedra-pomes + chips de coco, com fina camada superficial de esfagno somente na fase ativa.",
    errosComuns: "• Encharcar o broto antes de as raízes novas estarem funcionais.\n• Replantar quando as raízes novas já estão longas e frágeis.\n• Economizar água durante o crescimento vigoroso.\n• Continuar regando normalmente após a queda das folhas.\n• Adubar durante dormência.\n• Remover pseudobulbos traseiros saudáveis, que funcionam como reserva.\n• Usar substrato velho e compacto.\n• Tentar forçar flores femininas com excesso de sol.",
    dica: "🏆Faça o replante no início da brotação, logo após a planta sair da dormência e antes que as novas raízes fiquem compridas. Após o replante, mantenha o vaso relativamente seco até que várias raízes atinjam de 5 a 8 cm de comprimento. Em seguida, aumente a rega para manter a umidade, porem sem encharcar o broto e adote uma adubação leve e frequente, e garanta boa iluminação e ventilação. Com a queda das folhas, suspenda a adubação e deixe o vaso predominantemente seco. Lembre-se de preservar os pseudobulbos antigos saudáveis, pois eles nutrem a próxima brotação.",
    indiceAdaptacaoRegional: {
        versao: "IAR 1.0",
        escala: "compatibilidade",
        litoralQuente: {
            indice: 65,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 3, peso: 20 },
                temperatura: { nota: 4, peso: 20 },
                aguaUmidade: { nota: 3, peso: 15 },
                ventilacao: { nota: 4, peso: 10 },
                luminosidade: { nota: 2, peso: 10 },
                sazonalidade: { nota: 4, peso: 5 },
                floracao: { nota: 3, peso: 20 }
            }
        },
        montanhaFrio: {
            indice: 63,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 3, peso: 20 },
                temperatura: { nota: 3, peso: 20 },
                aguaUmidade: { nota: 3, peso: 15 },
                ventilacao: { nota: 4, peso: 10 },
                luminosidade: { nota: 3, peso: 10 },
                sazonalidade: { nota: 4, peso: 5 },
                floracao: { nota: 3, peso: 20 }
            }
        }
    },
    adaptacaoRegional: {
        litoralQuente: { texto: "O calor favorece o crescimento ativo; o principal cuidado é proteger a planta desfolhada de chuvas repetidas durante o período de dormência." },
        montanhaFrio: { texto: "Se protegida de frio excessivo e geadas. Durante dormência fria, mantenha o vaso ainda mais seco." }
    },
    mesesFloracao: [12, 1, 2, 3],
    "selosCultivo": {
        "rega": { "nivel": "moderada", "regime": "repouso-seco" },
        "climaFloracao": { "faixa": "quente" }
    },
    indiceDificuldadeCultivo: {
        versao: "IDC 2.0",
        referenciaRegional: "Litoral de clima quente",
        indice: 22,
        nivel: "Fácil",
        fatores: {
            temperatura: { nota: 0, peso: 18 },
            agua: { nota: 1, peso: 15 },
            umidadeVentilacao: { nota: 1, peso: 12 },
            luminosidade: { nota: 2, peso: 8 },
            raizes: { nota: 3, peso: 15 },
            cicloRepouso: { nota: 0, peso: 12 },
            floracao: { nota: 1, peso: 20 }
        }
    },
    avaliacoes: {
        cultivo: 2,
        floracao: 4,
        perfume: 3,
        luminosidade: 4,
        agua: 5,
        raridade: 4
    }
};
