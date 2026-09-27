// Nova ficha — Orquidário Digital V4.
export const oncidiumSummerWind = {
    id: "oncidium-summer-wind",
    nome: "Oncidium Summer Wind",
    genero: "Oncidium",
    tipo: "Híbrido hortícola",
    dificuldade: "Moderada",
    caracteristicas: ["Touceiras grandes", "Hastes acima de 1 m", "Muitas flores", "Amarelo e marrom", "Perfume suave", "Híbrido robusto"],
    fotos: ["https://orquideasjph.wordpress.com/wp-content/uploads/2018/09/oncidium-2.jpg?w=940", "https://orquideasjph.wordpress.com/wp-content/uploads/2018/09/img_20180915_143822538.jpg?w=940", "https://orquideasjph.wordpress.com/wp-content/uploads/2018/09/img_20180918_203316043.jpg?w=940", "https://orquideasjph.wordpress.com/wp-content/uploads/2018/09/oncidium-summer-wind-mnha-foto-cristiano-1.jpg?w=940"],
    descricao: "Uma orquídea que impressiona principalmente quando atinge a maturidade. Oncidium Summer Wind forma pseudobulbos robustos e touceiras que podem alcançar grandes proporções, mas é durante a floração que revela sua característica mais marcante: hastes longas e muito ramificadas, capazes de ultrapassar um metro e sustentar dezenas de flores simultaneamente. As flores combinam tons amarelos e castanhos, com um labelo amarelo vivo que se destaca no conjunto, formando uma verdadeira nuvem acima da folhagem. Em exemplares bem estabelecidos, a floração pode permanecer ornamental por várias semanas, enquanto diferentes botões continuam se abrindo ao longo das ramificações. É justamente essa combinação de porte, quantidade de flores e movimento das hastes que transforma uma planta aparentemente discreta fora da floração em um dos Oncidium de maior presença visual quando adulto.",
    origem: "Híbrido hortícola",
    regiao: "Cultivado amplamente no Brasil",
    habitat: "Sem habitat natural próprio; manejo semelhante a Oncidiinae de raízes arejadas.",
    clima: "Intermediário a quente · muito ventilado",
    climaFloracao: "A floração depende principalmente de crescimento maduro, boa luminosidade, ventilação e manejo hídrico compatível com a linhagem.",
    iluminacao: {
        sombrite: "50%",
        solDireto: "Permitido com restrição",
        horario: "Início da manhã ou final da tarde",
        observacoes: "Use luz filtrada forte, ajustando pela resposta das folhas e evitando superaquecimento."
    },
    floracao: "Fim do inverno e primavera; em cultivo pode permanecer florida por mais de dois meses.",
    adubacao: "Adubação equilibrada em baixa concentração durante crescimento e enraizamento ativos; reduza a frequência quando o crescimento amadurecer.",
    rega: "Regue abundantemente durante o crescimento, sempre preservando drenagem e oxigenação; ajuste a frequência à velocidade de secagem.",
    dica: "Ventilação constante e raízes saudáveis são mais importantes que aumentar a dose de adubo.",
    formasCultivo: {
  perfilVisual:"oncidium", destaque:"Vaso plástico",
  resumo:"O porte grande e as hastes longas tornam o vaso estável a opção mais prática.",
  metodos:[
    {nome:"Vaso plástico",asset:"vaso-plastico",estrelas:5,status:"Ideal",texto:"Acomoda touceiras grandes e facilita tutoramento."},
    {nome:"Vaso de barro",asset:"vaso-barro",estrelas:4,status:"Muito recomendado",texto:"Excelente drenagem e estabilidade."},
    {nome:"Cesto de madeira",asset:"cesto-madeira",estrelas:4,status:"Muito recomendado",texto:"Ótima aeração com maior frequência de rega."},
    {nome:"Placa / tronco",asset:"placa-tronco",estrelas:3,status:"Adequado",texto:"Biologicamente possível, mas pouco prático para o porte."}
  ]},
    substrato: ["Pinus médio + carvão vegetal.","Macadâmia + pinus + carvão.","CAC + perlita grossa + pequena fração orgânica."],
    substratoVisual: {titulo:"Substrato ideal",contexto:"Para cultivo em vaso",resumo:"Mistura aberta com retenção moderada.",justificativa:"Cultivadores brasileiros relatam pinus e carvão com drenagem forte; a receita acrescenta macadâmia e CAC para melhorar estabilidade.",receitaTexto:"35% casca de pinus média + 25% casca de macadâmia média + 20% carvão vegetal médio + 20% casca de arroz carbonizada.",perfil:["Raízes finas a médias","Alta aeração","Retenção moderada","Secagem rápida"],comportamento:{retencao:3,aeracao:5,secagem:4,compactacao:1},itens:[
{asset:"casca-pinus",nome:"Casca de pinus média",proporcao:"35%",nota:"base",finalidade:"Mantém umidade útil sem saturar."},
{asset:"macadamia",nome:"Casca de macadâmia média",proporcao:"25%",nota:"estrutura",finalidade:"Aumenta durabilidade física."},
{asset:"carvao-vegetal",nome:"Carvão vegetal médio",proporcao:"20%",nota:"aeração",finalidade:"Mantém espaços de ar."},
{asset:"casca-arroz-carbonizada",nome:"Casca de arroz carbonizada",proporcao:"20%",nota:"drenagem",finalidade:"Torna a mistura leve e drenante."}],alerta:"Não deixe água acumulada no fundo; ventilação constante é essencial."},
    errosComuns: ["Substrato compactado.", "Água acumulada nas raízes.", "Ventilação insuficiente.", "Excesso de adubo.", "Replantio fora do início de novas raízes."],
    adaptacaoRegional: {litoralQuente:'Boa adaptação com vento constante, 50% de sombra e drenagem rápida.',montanhaFrio:'Muito favorável, protegendo de geadas.'},
    mesesFloracao: [8, 9, 10, 11],
    selosCultivo: { rega: { nivel: "frequente", regime: "ajustar-estacao" }, climaFloracao: { faixa: "intermediario" } },
    avaliacoes: { cultivo: 4, floracao: 5, perfume: 2, luminosidade: 4, agua: 3, raridade: 3 }
};
