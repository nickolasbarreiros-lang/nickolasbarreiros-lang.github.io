// Ficha científica e de cultivo revisada — Epidendrum centropetalum.
// Conteúdo adaptado ao padrão editorial e regional do Orquidário Digital.

export const epidendrumCentropetalum = {
    id: "epidendrum-centropetalum",
    nome: "Epidendrum centropetalum",
    genero: "Epidendrum",
    tipo: "Espécie botânica epífita centro-americana",
    dificuldade: "Moderada",
    caracteristicas: [
        "Sin. Oerstedella centradenia",
        "Flores rosa intenso",
        "Forma keikis",
        "Floresta montana",
        "Alta umidade",
        "Clima fresco"
    ],
    fotos: [
        "imagens/Epidendrum centropetalum/Epidendrum centropetalum1.jpg",
        "imagens/Epidendrum centropetalum/Epidendrum centropetalum2.jpg",
        "imagens/Epidendrum centropetalum/Epidendrum centropetalum3.jpg",
        "imagens/Epidendrum centropetalum/Epidendrum centropetalum4.jpg"
    ],
    descricao: "Epidendrum centropetalum é uma espécie delicada e muito charmosa da América Central, conhecida durante décadas em coleções como Oerstedella centradenia. Seus caules finos lembram pequenas hastes e podem produzir keikis ao longo do crescimento, criando touceiras leves e ramificadas. As inflorescências surgem no topo dos caules maduros e carregam várias flores rosa-intenso, marcadas por uma área branca na base do labelo e um pequeno calo amarelo. Apesar da aparência tropical, é uma planta ligada a florestas montanas úmidas e responde melhor quando recebe muita ventilação, umidade constante e noites mais amenas.",
    origem: "México e América Central.",
    regiao: "Do sul do México ao Panamá.",
    habitat: "Epífita de florestas montanas úmidas, geralmente entre 1.200 e 1.500 m.",
    clima: "Intermediário a fresco, úmido e muito ventilado.",
    climaFloracao: "Floresce melhor com boa luminosidade filtrada, umidade elevada e noites mais frescas. No litoral quente, o ponto crítico é reduzir o superaquecimento noturno e manter forte circulação de ar. A planta não exige seca intensa para florescer, mas aprecia uma leve redução de água quando os caules já estão maduros.",
    iluminacao: {
        sombrite: "50% a 60%",
        solDireto: "Apenas sol fraco, se bem aclimatada",
        horario: "Luz filtrada intensa ao longo do dia",
        observacoes: "Na natureza pode ocorrer em condições relativamente claras, mas em cultivo no litoral quente é mais seguro oferecer luz filtrada intensa. Sombra excessiva produz caules fracos e reduz a floração; sol forte nas horas quentes pode desidratar rapidamente folhas e raízes aéreas."
    },
    floracao: "Tende a florescer do fim do inverno até a primavera e o início do verão, com variação conforme clima e maturação dos caules. Para o calendário do site, agosto a janeiro funciona como janela prática de referência.",
    adubacao: "🌿 Orgânica: bokashi apenas em pequena quantidade e preferencialmente em porta-adubo, longe das raízes expostas.\n💧 Foliar/mineral: NPK equilibrado, como 20-20-20, em aproximadamente 1/4 da dose comercial a cada 10 a 15 dias durante crescimento ativo.\n🧪 Liberação lenta: opcional em vaso ou cesto, usando poucos grânulos.\n🚿 Lavagem: faça regas periódicas apenas com água pura para evitar acúmulo de sais.",
    rega: "Mantenha hidratação regular durante todo o ano, sobretudo enquanto os caules e raízes estão em crescimento. O suporte deve drenar rapidamente e nunca permanecer encharcado. Depois que os caules amadurecem, pode-se ampliar discretamente o intervalo entre regas, sem permitir desidratação prolongada.",
    suporte: [
        "🥇 Cesto ou cachepô bem ventilado, permitindo expansão dos caules e raízes aéreas.",
        "🥈 Placa de cortiça ou madeira com pequena camada de esfagno junto às raízes.",
        "🥉 Vaso pequeno e bem perfurado, usando mistura leve e de drenagem rápida."
    ],
    substrato: ["🥇 Montagem em nó de pinho, cortiça ou madeira com uma lâmina fina de esfagno apenas sob as raízes.", "🥈 Casca de pinus fina + perlita + pedra-pomes fina + pequena fração de esfagno solto.", "🥉 Chips de coco pequenos + perlita + casca de pinus fina, mantendo o conjunto leve e aerado.", "⭐ Alternativa: Esfagno de fibra longa usado muito solto + pedra-pomes fina; evitar compactação junto ao rizoma."],
    errosComuns: [
        "Cultivar em ambiente quente e sem circulação de ar",
        "Manter sombra excessivamente profunda",
        "Deixar raízes e caules jovens secarem por longos períodos",
        "Manter o substrato permanentemente encharcado",
        "Aplicar adubo concentrado sobre raízes aéreas",
        "Cortar keikis saudáveis antes de desenvolverem boas raízes",
        "Usar vaso grande e pouco aerado",
        "Expor ao sol forte do meio do dia"
    ],
    dica: "🏆 Aproveite o hábito de formar keikis: em vez de removê-los cedo, deixe que criem raízes e ajudem a formar uma touceira cheia. No litoral quente, mantenha a planta em posição muito ventilada e com luz filtrada forte; noites menos abafadas costumam fazer mais diferença do que aumentar a adubação.",
    indiceAdaptacaoRegional: {
        versao: "IAR 1.0",
        escala: "compatibilidade",
        litoralQuente: {
            indice: 41,
            estrelas: 3,
            fatores: {
                habitatNatural: { nota: 2, peso: 20 },
                temperatura: { nota: 1, peso: 20 },
                aguaUmidade: { nota: 3, peso: 15 },
                ventilacao: { nota: 3, peso: 10 },
                luminosidade: { nota: 3, peso: 10 },
                sazonalidade: { nota: 4, peso: 5 },
                floracao: { nota: 1, peso: 20 }
            }
        },
        montanhaFrio: {
            indice: 79,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 5, peso: 20 },
                temperatura: { nota: 3, peso: 20 },
                aguaUmidade: { nota: 3, peso: 15 },
                ventilacao: { nota: 4, peso: 10 },
                luminosidade: { nota: 3, peso: 10 },
                sazonalidade: { nota: 4, peso: 5 },
                floracao: { nota: 5, peso: 20 }
            }
        }
    },
    adaptacaoRegional: {
        litoralQuente: { texto: "Pode crescer bem com 50% a 60% de sombreamento, umidade alta e ventilação constante, mas noites muito quentes e abafadas podem reduzir vigor e floração." },
        montanhaFrio: { texto: "Noites frescas e boa umidade se aproximam bastante das condições montanas onde a espécie ocorre naturalmente." }
    },
    mesesFloracao: [8, 9, 10, 11, 12, 1],
    "selosCultivo": {
        "rega": { "nivel": "moderada", "regime": "reduzir-repouso", "evitarEncharcamento": true },
        "climaFloracao": { "faixa": "ameno", "quedaTermica": true }
    },
    indiceDificuldadeCultivo: {
        versao: "IDC 2.0",
        referenciaRegional: "Litoral de clima quente",
        indice: 51,
        nivel: "Moderada",
        fatores: {
            temperatura: { nota: 3, peso: 18 },
            agua: { nota: 1, peso: 15 },
            umidadeVentilacao: { nota: 4, peso: 12 },
            luminosidade: { nota: 2, peso: 8 },
            raizes: { nota: 2, peso: 15 },
            cicloRepouso: { nota: 1, peso: 12 },
            floracao: { nota: 4, peso: 20 }
        }
    },
    avaliacoes: {
        cultivo: 3,
        floracao: 4,
        perfume: 1,
        luminosidade: 3,
        agua: 4,
        raridade: 4
    }
};
