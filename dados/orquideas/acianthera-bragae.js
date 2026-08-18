// Revisão final — conteúdo preservado, confrontado e consolidado com fontes botânicas e de cultivo.
export const aciantheraBragae = {
    id: "acianthera-bragae",
    nome: "Acianthera bragae",
    genero: "Acianthera",
    tipo: "Espécie botânica",
    sinonimo: "Pleurothallis sarracenia",
    dificuldade: "Fácil",
    origem: "Brasil — regiões Sudeste e Sul.",
    regiao: "Mata Atlântica do Sudeste e Sul do Brasil.",
    habitat: "Epífita ou litófita de floresta tropical úmida.",
    descricao: "Pequena no tamanho, mas cheia de personalidade! A Acianthera bragae é uma miniatura brasileira de crescimento rastejante, capaz de formar delicados tapetes sobre troncos, placas ou outros suportes. Suas folhas são pequenas, espessas e suculentas, enquanto as flores, com cerca de 1,5 a 2 cm, parecem surpreendentemente grandes em comparação com a planta e chamam atenção pelo formato tubular e ereto. Nativa do Sul e Sudeste do Brasil, ocorre em ambientes sombreados e úmidos, inclusive como epífita ou sobre rochas. Seu hábito horizontal é uma das características mais importantes no cultivo: ela gosta de espaço para o rizoma avançar livremente, com umidade constante sem perder a circulação de ar.",
    caracteristicas: ["Endêmica do Brasil", "Sudeste e Sul", "Epífita ou litófita", "700–1.000 m", "Crescimento reptante", "Flores ~1,5–2 cm", "Forma tapetes"],
    fotos: [
        "imagens/Acianthera bragae/Acianthera bragae1.jpg",
        "imagens/Acianthera bragae/Acianthera bragae2.jpg",
        "imagens/Acianthera bragae/Acianthera bragae3.jpg",
        "imagens/Acianthera bragae/Acianthera bragae4.jpg"
    ],
    "selosCultivo": {
        "rega": { "nivel": "frequente" },
        "climaFloracao": { "faixa": "quente", "floraNoCalor": true }
    },
    indiceDificuldadeCultivo: {
        versao: "IDC 2.0",
        referenciaRegional: "Litoral de clima quente",
        indice: 24,
        nivel: "Fácil",
        fatores: {
            temperatura: { nota: 1, peso: 18 },
            agua: { nota: 3, peso: 15 },
            umidadeVentilacao: { nota: 1, peso: 12 },
            luminosidade: { nota: 1, peso: 8 },
            raizes: { nota: 1, peso: 15 },
            cicloRepouso: { nota: 0, peso: 12 },
            floracao: { nota: 1, peso: 20 }
        }
    },
    avaliacoes: { cultivo: 2, floracao: 3, perfume: 1, luminosidade: 2, agua: 4, raridade: 4 },
    mesesFloracao: [8, 9, 10],
    clima: "Quente a intermediário, úmido, sombreado e ventilado.",
    climaFloracao: "A faixa altitudinal aproximada de 700–1.000 m indica noites naturalmente mais amenas que as do litoral, mas a espécie é descrita em referência de cultivo como de crescimento quente. Portanto, não exige frio intenso. No litoral quente, priorize redução do calor acumulado noturno, sombra luminosa e ventilação contínua, sobretudo durante a maturação dos novos crescimentos.",
    iluminacao: {
        sombrite: "70% como referência no litoral quente",
        solDireto: "Evitar; somente luz solar muito suave após aclimatação",
        horario: "Primeiras horas da manhã",
        observacoes: "O habitat é sombreado e úmido. Prefira claridade difusa uniforme em vez de sombra escura. Folhas suculentas e firmes devem permanecer sem aquecimento excessivo. Se os entrenós alongarem e o crescimento enfraquecer, aumente gradualmente a claridade; se houver amarelecimento rápido ou manchas secas, reduza a exposição."
    },
    floracao: "Principalmente do fim do inverno ao início da primavera. Para cultivo no Brasil, agosto a outubro é uma janela de referência mais coerente que uma faixa primavera–verão muito ampla; clones e microclimas podem deslocar essa época.",
    adubacao: "🌿 Orgânica: bokashi em dose mínima, sempre isolado em sachê ou porta-adubo e afastado do rizoma.\n💧 Foliar/mineral: NPK equilibrado em baixa concentração, cerca de 1/4 da dose do fabricante, a cada 10 a 15 dias durante emissão de folhas e raízes.\n🧪 Liberação lenta: se utilizada, aplicar pouquíssimo adubo de liberação lenta apenas em recipiente, nunca acumulado junto às raízes finas. Lave periodicamente o suporte/substrato para evitar acúmulo de sais.",
    rega: "Regue com frequência suficiente para manter as raízes ativas e impedir desidratação prolongada, mas permita troca de ar entre irrigações. Em montagem, a frequência tende a ser alta no calor; em vaso raso, deixe apenas a superfície perder parte da umidade. Água estagnada entre folhas e junto ao rizoma é mais perigosa que uma breve secagem superficial.",
    suporte: ["🥇 Placa larga de madeira, cortiça ou material fibroso durável, permitindo que o rizoma avance lateralmente.", "🥈 Cachepô pequeno, raso e muito ripado.", "🥉 Vaso baixo e largo, muito perfurado, para acomodar o crescimento em tapete."],
    substrato: ["🥇 Pedra-pomes fina + casca de pinus fina + pequena fração de esfagno, combinando umidade com muito ar.", "🥈 Montagem em rocha porosa/cortiça com fina reserva de esfagno somente sob as raízes.", "🥉 Perlita + pedra-pomes fina + chips de coco pequenos, sem compactar.", "⭐ Alternativa: Casca de pinus fina + carvão miúdo + perlita + esfagno picado em baixa proporção."],
    errosComuns: ["Usar vaso profundo para uma planta de crescimento rastejante.", "Enterrar ou cobrir o rizoma.", "Manter água parada entre folhas e ramicaules.", "Deixar a montagem secar por vários dias no calor.", "Cultivar em sombra profunda e sem circulação de ar.", "Aplicar adubação forte em raízes finas.", "Interpretar a altitude como necessidade de clima frio rígido."],
    indiceAdaptacaoRegional: {
        versao: "IAR 1.1",
        escala: "compatibilidade",
        litoralQuente: {
            indice: 69,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 3, peso: 30 },
                temperatura: { nota: 4, peso: 30 },
                aguaUmidade: { nota: 3, peso: 5 },
                ventilacao: { nota: 4, peso: 5 },
                luminosidade: { nota: 4, peso: 5 },
                sazonalidade: { nota: 4, peso: 5 },
                floracao: { nota: 3, peso: 20 }
            }
        },
        montanhaFrio: {
            indice: 78,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 3, peso: 30 },
                temperatura: { nota: 4, peso: 30 },
                aguaUmidade: { nota: 4, peso: 5 },
                ventilacao: { nota: 4, peso: 5 },
                luminosidade: { nota: 4, peso: 5 },
                sazonalidade: { nota: 4, peso: 5 },
                floracao: { nota: 5, peso: 20 }
            }
        }
    },
    adaptacaoRegional: {
        litoral: { texto: "Quando recebe sombra clara, ventilação máxima e suporte raso/aberto. A indicação de crescimento quente ajuda, mas a origem a 700–1.000 m recomenda atenção especial às noites muito abafadas do verão." },
        montanha: { texto: "Condições geralmente favoráveis, sobretudo pela amplitude térmica. Em períodos frios e úmidos, reduza as regas conforme o suporte permanecer molhado por mais tempo, sem impor seca prolongada." }
    },
    dica: "🏆 Prefira placa de madeira ou vasos largos e rasos para dar espaço ao crescimento rasteiro da planta, mantenha o rizoma exposto e garanta alta circulação de ar com raízes sempre úmidas."
};
