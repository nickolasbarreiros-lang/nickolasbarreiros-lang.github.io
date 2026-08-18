// Ficha científica e de cultivo revisada — Promenaea xanthina.
// Conteúdo adaptado ao padrão editorial e regional do Orquidário Digital.

export const promenaeaXanthina = {
    id: "promenaea-xanthina",
    nome: "Promenaea xanthina",
    genero: "Promenaea",
    tipo: "Espécie botânica epífita brasileira",
    dificuldade: "Difícil",
    caracteristicas: [
        "Miniatura brasileira",
        "Flores amarelas",
        "Perfumada",
        "Floresta montana",
        "Alta umidade",
        "Clima ameno"
    ],
    fotos: [
        "imagens/Promenaea xanthina/Promenaea xanthina1.jpg",
        "imagens/Promenaea xanthina/Promenaea xanthina2.jpg",
        "imagens/Promenaea xanthina/Promenaea xanthina3.webp",
        "imagens/Promenaea xanthina/Promenaea xanthina4.webp"
    ],
    descricao: "Promenaea xanthina é uma pequena joia brasileira: planta compacta, de pseudobulbos baixos e folhas finas, capaz de produzir flores cerosas proporcionalmente grandes, amarelas e delicadamente perfumadas. As hastes surgem junto à base dos pseudobulbos e normalmente carregam uma ou duas flores que permanecem próximas à folhagem. É uma espécie de aparência delicada, mas bastante vigorosa quando encontra o equilíbrio certo entre umidade, raízes arejadas, luz filtrada e temperaturas não excessivas. Em coleções ainda é amplamente conhecida como Promenaea xanthina, embora o tratamento taxonômico atual do Kew a inclua em Promenaea stapelioides subsp. xanthina.",
    origem: "Brasil.",
    regiao: "Leste e Sul do Brasil.",
    habitat: "Epífita de florestas montanas úmidas e protegidas, chegando a cerca de 1.700 m.",
    clima: "Intermediário a fresco, úmido e muito ventilado.",
    climaFloracao: "A floração é favorecida por planta bem estabelecida, noites amenas, umidade constante e luz filtrada. No litoral quente, evite sobretudo o superaquecimento noturno. Após a maturação dos pseudobulbos, uma breve redução nas regas pode ajudar, mas sem transformar o período em repouso seco.",
    iluminacao: {
        sombrite: "70% a 80%",
        solDireto: "Não recomendado",
        horario: "Luz difusa e filtrada ao longo do dia",
        observacoes: "As folhas finas aquecem e queimam com facilidade. No litoral quente, 70% a 80% de sombreamento é uma faixa segura, desde que o ambiente permaneça claro. Sombra excessivamente fechada reduz vigor e floração."
    },
    floracao: "Principalmente na primavera e no verão. Para o calendário do site, setembro a fevereiro funciona como janela prática de referência, podendo variar conforme procedência e condições de cultivo.",
    adubacao: "🌿 Orgânica: bokashi apenas em dose mínima e preferencialmente em porta-adubo.\n💧 Foliar/mineral: NPK equilibrado, como 20-20-20, em aproximadamente 1/4 da dose comercial a cada 10 a 15 dias durante crescimento ativo.\n🧪 Liberação lenta: opcional e com bastante parcimônia em vasos pequenos.\n🚿 Lavagem: faça regas periódicas apenas com água pura para reduzir o acúmulo de sais.",
    rega: "Durante o crescimento, mantenha o substrato levemente úmido e nunca permita secagem prolongada. Molhe bem e deixe drenar completamente. Depois que os pseudobulbos amadurecerem, reduza moderadamente a frequência por algumas semanas, acompanhando a secagem real do recipiente, sem desidratar a planta.",
    suporte: [
        "🥇 Vaso pequeno e muito perfurado, mantendo as raízes úmidas e arejadas.",
        "🥈 Pequeno cesto ou cachepô com substrato leve e drenante.",
        "🥉 Montagem em cortiça ou madeira com fina camada de esfagno, apenas em ambiente de alta umidade."
    ],
    substrato: ["🥇 Montagem em nó de pinho, cortiça ou madeira com uma lâmina fina de esfagno apenas sob as raízes.", "🥈 Casca de pinus fina + perlita + pedra-pomes fina + pequena fração de esfagno solto.", "🥉 Chips de coco pequenos + perlita + casca de pinus fina, mantendo o conjunto leve e aerado.", "⭐ Alternativa: Esfagno de fibra longa usado muito solto + pedra-pomes fina; evitar compactação junto ao rizoma."],
    errosComuns: [
        "Expor ao sol direto forte",
        "Compactar esfagno em torno das raízes",
        "Manter o substrato permanentemente encharcado",
        "Deixar a planta secar completamente durante o crescimento",
        "Cultivar em ambiente quente e abafado",
        "Usar vaso grande demais",
        "Fazer repouso seco prolongado",
        "Aplicar fertilizante concentrado"
    ],
    dica: "🏆 Promenaea xanthina gosta de raízes frescas e úmidas, não de um vaso encharcado. Use recipiente pequeno, mistura leve e bastante ventilação. No litoral quente, proteger a planta do calor acumulado à noite costuma ser mais importante do que aumentar a quantidade de água.",
    indiceAdaptacaoRegional: {
        versao: "IAR 1.1",
        escala: "compatibilidade",
        litoralQuente: {
            indice: 26,
            estrelas: 2,
            fatores: {
                habitatNatural: { nota: 1, peso: 30 },
                temperatura: { nota: 1, peso: 30 },
                aguaUmidade: { nota: 3, peso: 5 },
                ventilacao: { nota: 3, peso: 5 },
                luminosidade: { nota: 2, peso: 5 },
                sazonalidade: { nota: 2, peso: 5 },
                floracao: { nota: 1, peso: 20 }
            }
        },
        montanhaFrio: {
            indice: 90,
            estrelas: 5,
            fatores: {
                habitatNatural: { nota: 5, peso: 30 },
                temperatura: { nota: 4, peso: 30 },
                aguaUmidade: { nota: 4, peso: 5 },
                ventilacao: { nota: 4, peso: 5 },
                luminosidade: { nota: 3, peso: 5 },
                sazonalidade: { nota: 5, peso: 5 },
                floracao: { nota: 5, peso: 20 }
            }
        }
    },
    adaptacaoRegional: {
        litoralQuente: { texto: "É cultivável com 70% a 80% de sombreamento, alta ventilação e substrato pequeno e aerado, mas noites muito quentes podem reduzir vigor e floração." },
        montanhaFrio: { texto: "Noites frescas e alta umidade favorecem a espécie, desde que o substrato não permaneça frio e saturado." }
    },
    mesesFloracao: [9, 10, 11, 12, 1, 2],
    "selosCultivo": {
        "rega": { "nivel": "constante" },
        "climaFloracao": { "faixa": "ameno", "quedaTermica": true }
    },
    indiceDificuldadeCultivo: {
        versao: "IDC 2.0",
        referenciaRegional: "Litoral de clima quente",
        indice: 60,
        nivel: "Difícil",
        fatores: {
            temperatura: { nota: 3, peso: 18 },
            agua: { nota: 1, peso: 15 },
            umidadeVentilacao: { nota: 4, peso: 12 },
            luminosidade: { nota: 3, peso: 8 },
            raizes: { nota: 2, peso: 15 },
            cicloRepouso: { nota: 4, peso: 12 },
            floracao: { nota: 4, peso: 20 }
        }
    },
    avaliacoes: {
        cultivo: 3,
        floracao: 4,
        perfume: 4,
        luminosidade: 2,
        agua: 4,
        raridade: 4
    }
};
