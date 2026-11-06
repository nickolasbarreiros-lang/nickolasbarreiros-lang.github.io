# Auditoria de floração — Phalaenopsis pulcherrima (Doritis pulcherrima)
Data da verificação: 2026-11-06. Estado: pesquisa documental parcial; homologação integral ainda não concluída.

## Evidências brasileiras individualizadas
1. Orquidário Oriental, ficha comercial de Doritis pulcherrima coerulea: floração normalmente no verão, sem meses individualizados. Fonte: https://www.orquidariooriental.com.br/produto/doritis-pulcherrima-coerulea%2C53516/ . Evidência de tendência sazonal de cultivo, **não** de todos os meses do verão.
2. Merten Orquídeas, Doritis pulcherrima champorensis: época indeterminada, possibilidade de floração em qualquer época do ano, haste ornamental até cerca de três meses e variedade comercializada sem perfume. Fonte: https://www.mertenorquideas.com.br/orquideas/phalaenopsis/doritis-pulcherrima-champorensis-com-haste-floral . Evidência limitada à variedade descrita; não extrapolar perfume e duração à espécie inteira.
3. Orquidário Santa Clara, Doritis pulcherrima var. alba: pode florir até três vezes ao ano quando aclimatada; flores de longa duração, sem meses específicos. Fonte: https://orquidariosantaclara.com.br/phalaenopsis-e-afins/3889-doritis-pulcherrima-var-alba-t3.html . Evidência limitada à variedade e às condições de cultivo.
4. Orquidário Roberto Martins: identificação da espécie e origem; não fornece mês específico de floração. Fonte: https://orquidariorobertomartins.com.br/phalaenopsis-doritis-pulcherrima/p .
5. Calendários genéricos brasileiros listam março para Doritis pulcherrima: https://claudia.abril.com.br/sua-vida/orquideas-principais-especies-e-segredos-para-cuidar-das-flores/ ; https://www.ecoirrigacaoejardim.com.br/blog/detalhe/cultivo-de-orquideas ; https://tuacasa.uol.com.br/orquideas/ . **Não são três observações independentes**: há forte semelhança editorial entre as listas; nenhuma apresenta exemplar, data de floração observada e local de cultivo verificáveis. Março permanece pista bibliográfica, não mês homologado.

## Referência botânica de comparação
Smithsonian Gardens: inflorescência ereta até 100 cm, 10–20 flores sucessivas, 1,25–3 cm; registra floração ao longo do ano com pico de julho a novembro **no Hemisfério Norte**. Não converter os meses ao Brasil. Fonte: https://collections.si.edu/search/detail/edanmdm%3Aofeo-sg_2007-0930A .

## Decisão de calendário
- `mesesFloracao: []` e `statusCalendarioFloracao: "indeterminado"` permanecem por falta de evidência mensal brasileira individualizada e independente.
- O texto da ficha pode mencionar verão como tendência, outras épocas possíveis e recorrência; não deve sugerir ausência de floração fora de um mês específico.
- A ausência de meses confirmados não prova ausência de floração.

## Conferências pendentes
- Encontrar observações brasileiras de plantas identificadas, com mês e ano de floração verificáveis, preferencialmente de diferentes produtores/ciclos.
- **Concluído:** estudo primário de 2019 confirmou média de **4,6 ± 2,5 dias** por flor não manipulada (n=10) e **2,8 ± 1,0 dias** após remoção das polínias (n=10). A informação anterior de aproximadamente dez dias foi corrigida na ficha. Fonte: https://pmc.ncbi.nlm.nih.gov/articles/PMC6937714/ . A rapidez do fechamento do estigma após polinização não deve ser confundida com o tempo de murcha das pétalas.
- **Conferência estática concluída:** `ficha.js`, função `criarCalendarioFloracao`, renderiza mensagem explícita quando `mesesFloracao` é `[]`; `js/util.js` identifica `statusCalendarioFloracao: "indeterminado"` como período ainda não determinado. O arquivo da espécie mantém esses campos. **Inspeção visual em navegador não executada**: a página publicada não pôde ser aberta por esta ferramenta, portanto não há aprovação visual.
- Somente declarar homologação integral após encerrar essas conferências.
