// Ficha científica e de cultivo revisada — Brassia lawrenceana.
// Conteúdo adaptado ao padrão editorial e regional do Orquidário Digital.

export const brassiaLawrenceana = {
    id: "brassia-lawrenceana",
    nome: "Brassia lawrenceana",
    genero: "Brassia",
    tipo: "Espécie botânica epífita sul-americana",
    dificuldade: "Moderada",
    caracteristicas: [
        "Orquídea-aranha",
        "Flores pintalgadas",
        "Haste multifloral",
        "Floresta úmida",
        "Clima quente a ameno",
        "Perfume suave"
    ],
    fotos: [
        "imagens/Brassia lawrenceana/Brassia lawrenceana1.jpg",
        "imagens/Brassia lawrenceana/Brassia lawrenceana2.webp",
        "imagens/Brassia lawrenceana/Brassia lawrenceana3.jpg",
        "imagens/Brassia lawrenceana/Brassia lawrenceana4.webp"
    ],
    descricao: "Brassia lawrenceana é uma clássica orquídea-aranha, valorizada pelas hastes arqueadas e pelas flores elegantes de segmentos estreitos, amarelo-esverdeados e salpicados de castanho a vinho. Cada pseudobulbo maduro pode produzir uma inflorescência com numerosas flores, criando um conjunto leve e muito ornamental. É uma planta vigorosa, de raízes ativas e crescimento relativamente rápido quando recebe boa luminosidade filtrada, bastante ventilação e água regular. O nome Brassia lawrenceana continua comum no cultivo, embora o Kew atualmente o trate como sinônimo de Brassia cochleata.",
    origem: "Norte da América do Sul.",
    regiao: "Amazônia e países do norte e oeste sul-americano.",
    habitat: "Epífita de florestas úmidas, aproximadamente entre 265 e 1.200 m.",
    clima: "Quente a intermediário, úmido e ventilado.",
    climaFloracao: "A espécie responde bem a temperaturas quentes a intermediárias, com boa luz filtrada e raízes ativas. No litoral quente, adapta-se bem desde que o substrato drene rapidamente e haja circulação de ar. Uma pequena redução de água após a maturação dos pseudobulbos pode acompanhar a menor atividade, sem impor seca severa.",
    iluminacao: {
        sombrite: "50% a 60%",
        solDireto: "Somente sol fraco da manhã, se aclimatada",
        horario: "Luz filtrada brilhante ao longo do dia",
        observacoes: "Precisa de boa luminosidade para formar pseudobulbos fortes e florescer bem. Sombra profunda reduz a floração; sol direto forte pode queimar as folhas e aquecer excessivamente o vaso."
    },
    floracao: "Pode florescer em mais de uma época conforme o cultivo. Referências registram floração na primavera em cultivo e também no outono em condições naturais. Para o calendário do site, setembro a novembro e março a maio funcionam como janelas práticas de referência.",
    adubacao: "🌿 Orgânica: bokashi pode ser usado em pequena quantidade e preferencialmente em porta-adubo.\n💧 Foliar/mineral: NPK equilibrado, como 20-20-20, em aproximadamente 1/4 da dose comercial a cada 10 a 15 dias durante crescimento ativo.\n🧪 Liberação lenta: opcional, usando poucos grânulos em vasos ou cestos.\n🚿 Lavagem: faça regas abundantes com água pura periodicamente para evitar acúmulo de sais.",
    rega: "Regue com frequência enquanto novos brotos e raízes estão ativos, deixando o substrato drenar rapidamente. Entre as irrigações, permita leve redução de umidade, sem manter o vaso permanentemente molhado. Quando os pseudobulbos estiverem maduros e a evaporação cair, aumente moderadamente o intervalo entre regas.",
    suporte: [
        "🥇 Cachepô ou cesto de madeira, ótimo para raízes vigorosas e hastes arqueadas.",
        "🥈 Vaso de barro bem perfurado com substrato grosso e aerado.",
        "🥉 Vaso plástico baixo e muito perfurado, controlando cuidadosamente a retenção de água."
    ],
    substrato: ["🥇 Casca de pinus média + chips de coco + pedra-pomes + carvão vegetal.", "🥈 Chips de coco + carvão vegetal + perlita + casca de pinus média.", "🥉 Pinus médio + pedra-pomes + argila expandida miúda + pequena fração de esfagno solto.", "⭐ Alternativa: Casca de macadâmia triturada média + pinus médio + pedra-pomes, com pequena fração de fibra de coco."],
    errosComuns: [
        "Cultivar em sombra profunda",
        "Manter o substrato permanentemente encharcado",
        "Usar vaso grande demais",
        "Deixar novos brotos e raízes secarem por longos períodos",
        "Reduzir demais a ventilação",
        "Aplicar fertilizante concentrado",
        "Replantar durante o repouso, sem novas raízes ativas",
        "Expor ao sol forte do meio do dia"
    ],
    dica: "🏆 Replante apenas quando um novo broto estiver começando a emitir raízes. Brassia reage muito melhor quando essas raízes novas entram diretamente no substrato fresco. No litoral quente, cesto ou vaso de barro com mistura grossa costuma oferecer excelente equilíbrio entre umidade e oxigenação.",
    indiceAdaptacaoRegional: {
        versao: "IAR 1.0",
        escala: "compatibilidade",
        litoralQuente: {
            indice: 61,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 2, peso: 20 },
                temperatura: { nota: 5, peso: 20 },
                aguaUmidade: { nota: 3, peso: 15 },
                ventilacao: { nota: 3, peso: 10 },
                luminosidade: { nota: 2, peso: 10 },
                sazonalidade: { nota: 2, peso: 5 },
                floracao: { nota: 3, peso: 20 }
            }
        },
        montanhaFrio: {
            indice: 85,
            estrelas: 5,
            fatores: {
                habitatNatural: { nota: 5, peso: 20 },
                temperatura: { nota: 4, peso: 20 },
                aguaUmidade: { nota: 4, peso: 15 },
                ventilacao: { nota: 3, peso: 10 },
                luminosidade: { nota: 3, peso: 10 },
                sazonalidade: { nota: 5, peso: 5 },
                floracao: { nota: 5, peso: 20 }
            }
        }
    },
    adaptacaoRegional: {
        litoralQuente: { texto: "Muito boa A espécie tolera calor e se adapta bem com 50% a 60% de sombreamento, regas regulares e ventilação constante." },
        montanhaFrio: { texto: "Boa Tolera noites frescas, mas deve ser protegida de frio intenso e de substrato permanentemente úmido em períodos de baixa evaporação." }
    },
    mesesFloracao: [3, 4, 5, 9, 10, 11],
    "selosCultivo": {
        "rega": { "nivel": "frequente" },
        "climaFloracao": { "faixa": "quente" }
    },
    indiceDificuldadeCultivo: {
        versao: "IDC 2.0",
        referenciaRegional: "Litoral de clima quente",
        indice: 40,
        nivel: "Moderada",
        fatores: {
            temperatura: { nota: 1, peso: 18 },
            agua: { nota: 3, peso: 15 },
            umidadeVentilacao: { nota: 2, peso: 12 },
            luminosidade: { nota: 2, peso: 8 },
            raizes: { nota: 1, peso: 15 },
            cicloRepouso: { nota: 5, peso: 12 },
            floracao: { nota: 1, peso: 20 }
        }
    },
    avaliacoes: {
        cultivo: 2,
        floracao: 4,
        perfume: 3,
        luminosidade: 3,
        agua: 4,
        raridade: 3
    }
};
