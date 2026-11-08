// Epidendrum secundum Jacq. — ficha em revisão; páginas Commons das quatro fotos identificadas, mas URLs diretas e identidade botânica independente ainda exigem teste.
export const epidendrumSecundum = {
 id:"epidendrum-secundum", nome:"Epidendrum secundum", genero:"Epidendrum", tipo:"Espécie botânica",
 sinonimo:"", dificuldade:"Fácil",
 origem:"América tropical", regiao:"Pequenas Antilhas e norte da América do Sul; registros brasileiros requerem atenção à delimitação com espécies próximas.",
 habitat:"Terrestre ou rupícola, em áreas abertas e afloramentos rochosos; também há registros de hábito epífito.",
 descricao:"Epidendrum secundum é uma orquídea de crescimento ereto, com caules semelhantes a pequenas canas e folhas distribuídas ao longo das hastes. Na extremidade surgem inflorescências com diversas flores geralmente róseas ou lilases, marcadas pelo labelo recortado e detalhes amarelados. Em ambientes favoráveis, a planta forma touceiras vistosas e pode alcançar porte elevado. Ocorre em áreas tropicais, inclusive sobre solos rasos e superfícies rochosas, o que explica sua versatilidade no cultivo. Algumas hastes podem produzir brotações conhecidas como keikis. Seu labelo possui um calo central carnoso e recortado, característica útil para distingui-la de espécies semelhantes, como Epidendrum denticulatum.",
 caracteristicas:["Crescimento ereto","Terrestre ou rupícola","Flores róseas a lilases","Inflorescência terminal","Pode formar keikis"],
 fotos:["https://upload.wikimedia.org/wikipedia/commons/5/55/Epidendrum_secundum_-_Peru.jpg","https://upload.wikimedia.org/wikipedia/commons/9/92/Epidendrum_secundum_Winaywayna_2.jpg","https://upload.wikimedia.org/wikipedia/commons/6/68/Epidendrum_secundum_%2814327938312%29.jpg","https://upload.wikimedia.org/wikipedia/commons/e/ee/Epidendrum_secundum_%281%29.jpg"],
 selosCultivo:{rega:{nivel:"moderada"},climaFloracao:{faixa:"quente"}},
 avaliacoes:{cultivo:5,floracao:4,perfume:1,luminosidade:4,agua:3,raridade:2},
 mesesFloracao:[1,2,3,4,5,6,7,8,9,10,11,12], mesesFloracaoIndicativos:true,
 clima:"Tropical a intermediário, com boa circulação de ar e raízes bem drenadas.",
 climaFloracao:"Pode florescer em diferentes épocas do ano. Estudo de populações brasileiras registrou maior intensidade de setembro a janeiro. A luminosidade adequada favorece o desenvolvimento das inflorescências.",
 iluminacao:{sombrite:"30–50% como ponto de partida, conforme o calor local",solDireto:"Permitido com restrição",horario:"Início da manhã ou final da tarde",observacoes:"Prefere muita claridade e tolera sol suave. Em calor intenso, proteja do sol forte do meio do dia; ajuste a exposição gradualmente, observando folhas e floração.",seloLuz:"amarelo"},
 floracao:"Floresce ao longo do ano, com maior intensidade entre setembro e janeiro. As hastes terminais exibem flores róseas ou lilases que se abrem em sequência; cada flor dura cerca de sete dias. Hastes antigas ainda verdes podem, ocasionalmente, emitir novas ramificações florais. O perfume não está bem caracterizado.",
 adubacao:"Durante o crescimento ativo, aplique adubo equilibrado em dose reduzida, seguindo a resposta da planta e evitando acúmulo de sais. Diminua a frequência quando o crescimento desacelerar.",
 rega:"Regue bem e espere o substrato perder parte da umidade antes de repetir. Em vasos com terra vegetal, verifique a secagem no interior do recipiente; nunca mantenha o conjunto encharcado.",
 suporte:["Vaso de barro","Vaso plástico vasado","Vaso plástico","Cachepô de madeira"],
 formasCultivo:{perfilVisual:"terrestre-rupicola",destaque:"Vaso de barro",resumo:"Planta ereta, de raízes que precisam de firmeza, drenagem e oxigenação. O vaso de barro oferece boa estabilidade e secagem mais rápida; vasos plásticos também funcionam bem quando as regas acompanham a retenção de umidade.",metodos:[
 {nome:"Vaso de barro",asset:"vaso-barro",estrelas:5,status:"Ideal",texto:"Oferece estabilidade para caules altos e seca mais rapidamente que o plástico; ajuste as regas à secagem da mistura."},
 {nome:"Vaso plástico vasado",asset:"vaso-plastico-vasado",estrelas:4,status:"Muito recomendado",texto:"Oferece ventilação adicional às raízes; confira a secagem e fixe as hastes mais altas quando necessário."},
 {nome:"Vaso plástico",asset:"vaso-plastico",estrelas:3,status:"Alternativa",texto:"Retém umidade por mais tempo que o barro; use mistura arejada, furos de drenagem e regue conforme a secagem."},
 {nome:"Cachepô de madeira",asset:"cesto-madeira",estrelas:3,status:"Alternativa",texto:"Permite boa circulação de ar, mas seca mais rapidamente e pode exigir amarração das hastes eretas."}
 ]},
 substrato:["Casca de pínus média + perlita grossa + chips de coco lavados","Brita fina lavada + casca de pínus média + fibra de coco grossa lavada"],
 substratoVisual:{titulo:"Substrato ideal",contexto:"Mistura drenante para cultivo em recipiente",resumo:"Mistura com fração orgânica fina e componentes estruturais para evitar compactação.",justificativa:"O hábito terrestre ou rupícola permite usar terra vegetal, desde que peneirada e misturada a materiais que preservem os espaços de ar. A mistura deve permanecer solta, com drenagem rápida e secagem parcial entre regas.",receitaTexto:"40% terra vegetal peneirada + 30% casca de pínus média + 20% areia grossa lavada + 10% carvão vegetal granulado.",perfil:["Raízes terrestres ou rupícolas","Retenção moderada","Boa aeração","Secagem gradual","Sem encharcamento"],comportamento:[{nome:"Retenção",valor:3,icone:"💧"},{nome:"Aeração",valor:4,icone:"💨"},{nome:"Secagem",valor:3,icone:"⚡"},{nome:"Compactação",valor:2,icone:"🧱"}],itens:[
 {asset:"terra-vegetal",nome:"Terra vegetal peneirada",proporcao:"40%",nota:"reserva hídrica",finalidade:"Oferece umidade e sustentação, desde que seja leve e não argilosa."},
 {asset:"casca-pinus",nome:"Casca de pínus média",proporcao:"30%",nota:"estrutura",finalidade:"Ajuda a manter espaços de ar entre as partículas."},
 {asset:"areia-grossa",nome:"Areia grossa lavada",proporcao:"20%",nota:"drenagem",finalidade:"Acrescenta fração mineral; use areia grossa lavada e evite partículas finas que obstruam os espaços de ar."},
 {asset:"carvao-vegetal",nome:"Carvão vegetal granulado",proporcao:"10%",nota:"aeração",finalidade:"Contribui para a estrutura e a drenagem da mistura."}
 ],alerta:"Não utilize terra argilosa ou compactada. Observe a secagem real e evite água acumulada no fundo do vaso."},
 errosComuns:["Usar terra compacta que retém água por muitos dias.","Deixar o vaso permanentemente encharcado.","Cultivar com luminosidade insuficiente para florescer.","Expor repentinamente ao sol forte do meio do dia.","Cortar hastes verdes que ainda podem produzir ramificações florais ou keikis."],
 revisaoCientificaIAR:{
  nome:"Epidendrum secundum Jacq.",
  statusTaxonomico:"Nome aceito em POWO/Kew; a delimitação de exemplares brasileiros requer cautela devido ao complexo de espécies próximas.",
  sinonimosPrincipais:"Consultar POWO/Kew para a lista de sinônimos; não confundir automaticamente com Epidendrum denticulatum.",
  morfologiaDimensoes:"Caules eretos em forma de cana, folhas coriáceas, inflorescência terminal com flores geralmente róseas; estudo brasileiro documentou até 130 flores por inflorescência e ramificações secundárias ocasionais em pedúnculos antigos.",
  habitatAltitudeClima:"Terrestre ou rupícola em áreas abertas e rochosas, ocasionalmente epífita; registros brasileiros incluem solos ácidos em áreas perturbadas.",
  distribuicaoGeografica:"POWO/Kew delimita a distribuição nativa às Pequenas Antilhas e ao norte da América do Sul; a literatura florística brasileira emprega conceito taxonômico mais amplo.",
  cultivoPremiacao:"Floração ao longo do ano, com pico entre setembro e janeiro; cada flor permanece aberta cerca de sete dias nas populações estudadas por Pansarin e Amaral (2008).",
  confianca:"moderada",
  fontes:["POWO/Kew","World Flora Online","CNCFlora/JBRJ","Pansarin & Amaral (2008), Plant Biology 10:211–219","Pinheiro & Barros (2007), delimitação de E. secundum e E. denticulatum"]
 },
 indiceDificuldadeCultivo:{versao:"IDC 3.2 — selo por facilidade",escala:"dificuldade",indice:22,classificacao:"Fácil",cultivoEstrelas:5,criterios:{
 temperatura:{notaDificuldade:1,peso:15},rega:{notaDificuldade:1,peso:15},umidade:{notaDificuldade:1,peso:10},ventilacao:{notaDificuldade:1,peso:10},luminosidade:{notaDificuldade:2,peso:10},raizesSubstrato:{notaDificuldade:1,peso:10},sazonalidade:{notaDificuldade:1,peso:10},floracao:{notaDificuldade:1,peso:20}}},
 indiceAdaptacaoRegional:{versao:"IAR 2.0 — revisão científica",escala:"compatibilidade regional",litoralQuente:{indice:82,estrelas:5,fatores:{
 habitatNatural:{nota:4,peso:30},temperatura:{nota:4,peso:30},aguaUmidade:{nota:4,peso:5},ventilacao:{nota:5,peso:5},luminosidade:{nota:5,peso:5},sazonalidade:{nota:4,peso:5},floracao:{nota:4,peso:20}}},
 montanhaFrio:{indice:98,estrelas:5,fatores:{
 habitatNatural:{nota:5,peso:30},temperatura:{nota:5,peso:30},aguaUmidade:{nota:4,peso:5},ventilacao:{nota:5,peso:5},luminosidade:{nota:5,peso:5},sazonalidade:{nota:4,peso:5},floracao:{nota:5,peso:20}}}},
 adaptacaoRegional:{tituloMontanha:"Regiões de montanha e noites frescas",litoral:{texto:"Adapta-se à luminosidade elevada, mas no calor intenso precisa de raízes bem ventiladas e drenagem rápida."},montanha:{texto:"Pode crescer bem com boa luminosidade. Em períodos frios e úmidos, reduza as regas conforme a secagem do substrato."}},
 dica:"🏆 Não corte automaticamente a haste floral ainda verde: ela pode emitir novas ramificações com flores ou formar keikis. Remova apenas partes secas ou comprometidas."
};
