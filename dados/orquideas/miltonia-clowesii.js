// Ficha refinada e enriquecida — padrão editorial V4.

export const miltoniaClowesii = {
    "id": "miltonia-clowesii",
    "nome": "Miltonia clowesii",
    "genero": "Miltonia",
    "sinonimo": "Odontoglossum clowesii",
    "tipo": "Espécie botânica",
    "dificuldade": "Fácil",
    "caracteristicas": [
        "Hastes longas e arqueadas",
        "Flores amarelas com manchas castanhas",
        "Labelo violáceo e branco",
        "Raízes finas sensíveis à compactação",
        "Miltonia brasileira da Mata Atlântica"
    ],
    "fotos": [
        "imagens/Miltonia clowesii/Miltonia clowesii1.jpg",
        "imagens/Miltonia clowesii/Miltonia clowesii2.jpg",
        "imagens/Miltonia clowesii/Miltonia clowesii3.jpg",
        "imagens/Miltonia clowesii/Miltonia clowesii4.jpg"
    ],
    "descricao": "Uma Miltonia brasileira de aparência marcante, com flores amarelas fortemente pintadas de castanho e um labelo claro com tons violáceos. As hastes altas e arqueadas se elevam acima da folhagem e dão à planta um aspecto muito ornamental quando vários botões abrem em sequência. Nativa do Sudeste do Brasil, é mais tolerante ao calor que as Miltoniopsis andinas, mas responde melhor quando recebe boa ventilação, raízes frescas e uma pequena queda de temperatura à noite.",
    "origem": "Brasil.",
    "regiao": "Sudeste brasileiro.",
    "habitat": "Mata Atlântica · epífita.",
    "clima": "Intermediário a quente · noites amenas.",
    "climaFloracao": "A haste surge após a maturação completa do pseudobulbo. Luz filtrada abundante, diferença moderada entre dia e noite e crescimento sem interrupções favorecem a indução. Não exige seca rigorosa. O novo pseudobulbo precisa amadurecer cheio e firme, pois suas reservas sustentam a haste longa e a abertura simultânea de várias flores.",
    "iluminacao": {
        "sombrite": "50% a 70%",
        "solDireto": "Somente sol muito suave",
        "horario": "Até aproximadamente 08:30",
        "observacoes": "Luz filtrada média a forte. Folhas verde-claro e firmes indicam bom nível; folhas muito escuras, compridas e moles sugerem sombra excessiva. Evite calor foliar no meio do dia, especialmente em regiões litorâneas."
    },
    "floracao": "A floração concentra-se sobretudo no outono, embora o calendário possa variar conforme clima e procedência. As hastes eretas a arqueadas ultrapassam a folhagem e carregam várias flores cerosas, amarelas com grandes manchas castanhas e labelo contrastante. Touceiras maduras e bem iluminadas tendem a produzir apresentações mais cheias.",
    "adubacao": "🌿 Orgânica: bokashi em pequena quantidade, dentro de porta-adubo na borda do vaso e longe dos brotos.\n💧 Foliar/mineral: NPK equilibrado em 1/4 da dose a cada 10–15 dias durante a formação de brotos, folhas e pseudobulbos. Reduza após o amadurecimento.\n🧪 Liberação lenta: poucos grânulos em vasos extremamente drenantes e sem contato com raízes novas.\n🚿 Flushing: uma vez por mês, lave o vaso somente com água limpa para remover sais. Não fertilize raízes completamente secas nem plantas paralisadas por calor excessivo.",
    "rega": "Durante a expansão do broto, mantenha umidade regular e deixe apenas a superfície começar a secar antes de regar novamente. Irregularidade hídrica nessa fase causa folhas sanfonadas, mas aumentar a rega não resolve se as raízes já estiverem danificadas. Examine-as: raízes claras e firmes sugerem seca ou baixa umidade; raízes castanhas, moles ou ocas indicam perda radicular por substrato velho ou excesso de retenção. Após a maturação, aumente discretamente o intervalo sem murchar fortemente os pseudobulbos.",
    "suporte": "🥇 Vaso plástico pequeno e muito perfurado: mantém umidade relativamente uniforme sem grande massa de substrato.\n🥈 Vaso de barro: favorece evaporação e resfriamento radicular em ambientes úmidos.\n🥉 Cesto de madeira: indicado para touceiras grandes, com excelente ventilação e regas mais frequentes.",
    "substrato": "🥇 Casca de pinus média + chips de coco + pedra-pomes + carvão vegetal.\n🥈 Casca de macadâmia triturada média + pinus médio + pedra-pomes, com pequena fração de fibra de coco.\n🥉 Chips de coco + carvão vegetal + perlita + casca de pinus média.\n⭐ Alternativa: Pinus médio + pedra-pomes + argila expandida miúda + pequena fração de esfagno solto.",
    "errosComuns": "❌ Substrato velho ou compactado: elimina rapidamente as raízes finas.\n❌ Vaso grande: mantém o centro saturado e favorece podridão.\n❌ Secagem durante expansão foliar: produz folhas sanfonadas permanentes.\n❌ Sombra excessiva: enfraquece o pseudobulbo e reduz hastes.\n❌ Calor abafado e água nas bainhas à noite: favorecem fungos e podridão dos brotos.\n❌ Replantio fora da emissão de raízes: pode comprometer o pseudobulbo e a floração seguinte.",
    "dica": "O pseudobulbo novo é o reservatório que financiará a próxima haste. Durante sua formação, forneça água regular, luz filtrada forte, nutrição diluída e raízes muito aeradas. Uma folha sanfonada registra uma interrupção ocorrida durante a expansão e não voltará ao normal. Antes de aumentar a água, confira as raízes. Replante somente quando novas pontas radiculares aparecerem na base do broto; isso reduz o choque e permite que a planta se fixe antes de amadurecer o pseudobulbo.",
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
                ventilacao: { nota: 4, peso: 5 },
                luminosidade: { nota: 4, peso: 5 },
                sazonalidade: { nota: 4, peso: 5 },
                floracao: { nota: 3, peso: 20 }
            }
        },
        montanhaFrio: {
            indice: 63,
            estrelas: 4,
            fatores: {
                habitatNatural: { nota: 3, peso: 30 },
                temperatura: { nota: 3, peso: 30 },
                aguaUmidade: { nota: 3, peso: 5 },
                ventilacao: { nota: 4, peso: 5 },
                luminosidade: { nota: 4, peso: 5 },
                sazonalidade: { nota: 4, peso: 5 },
                floracao: { nota: 3, peso: 20 }
            }
        }
    },
    "adaptacaoRegional": {
        "litoralQuente": { texto: "Boa adaptação no litoral quente sob 60–70% de sombra, ventilação forte e substrato estrutural. O maior risco é calor associado a noites abafadas e raízes permanentemente molhadas." },
        "montanhaFrio": { texto: "Excelente adaptação. Ofereça mais luz no inverno e aumente o intervalo entre regas nas semanas frias e chuvosas, sem impor seca total." }
    },
    "mesesFloracao": [3, 4, 5, 6],
    "selosCultivo": {
        "rega": { "nivel": "constante", "regime": "reduzir-repouso" },
        "climaFloracao": { "faixa": "quente" }
    },
    indiceDificuldadeCultivo: {
        versao: "IDC 2.0",
        referenciaRegional: "Litoral de clima quente",
        indice: 28,
        nivel: "Fácil",
        fatores: {
            temperatura: { nota: 1, peso: 18 },
            agua: { nota: 1, peso: 15 },
            umidadeVentilacao: { nota: 1, peso: 12 },
            luminosidade: { nota: 1, peso: 8 },
            raizes: { nota: 3, peso: 15 },
            cicloRepouso: { nota: 0, peso: 12 },
            floracao: { nota: 2, peso: 20 }
        }
    },
    "avaliacoes": {
        "cultivo": 2,
        "floracao": 4,
        "perfume": 3,
        "luminosidade": 3,
        "agua": 4,
        "raridade": 3
    }
};
