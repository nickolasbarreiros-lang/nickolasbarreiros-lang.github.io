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

## Decisão de calendário — histórico anterior (substituído pela decisão final abaixo)
- Inicialmente foram usados `mesesFloracao: []` e `statusCalendarioFloracao: "indeterminado"`, antes da confirmação de fevereiro e maio no calendário brasileiro. Essa decisão **não está mais vigente**.
- O texto da ficha pode mencionar verão como tendência, outras épocas possíveis e recorrência; não deve sugerir ausência de floração fora de um mês específico.
- A ausência de meses confirmados não prova ausência de floração.

## Conferências pendentes
- Encontrar observações brasileiras de plantas identificadas, com mês e ano de floração verificáveis, preferencialmente de diferentes produtores/ciclos.
- **Concluído:** estudo primário de 2019 confirmou média de **4,6 ± 2,5 dias** por flor não manipulada (n=10) e **2,8 ± 1,0 dias** após remoção das polínias (n=10). A informação anterior de aproximadamente dez dias foi corrigida na ficha. Fonte: https://pmc.ncbi.nlm.nih.gov/articles/PMC6937714/ . A rapidez do fechamento do estigma após polinização não deve ser confundida com o tempo de murcha das pétalas.
- **Conferência estática concluída:** `ficha.js`, função `criarCalendarioFloracao`, renderiza mensagem explícita quando `mesesFloracao` é `[]`; `js/util.js` identifica `statusCalendarioFloracao: "indeterminado"` como período ainda não determinado. Na época dessa conferência, o arquivo mantinha esses campos; a decisão editorial posterior substituiu-os por `mesesFloracao: [2, 5]`. **Inspeção visual em navegador não executada**: a página publicada não pôde ser aberta por esta ferramenta, portanto não há aprovação visual.
- Somente declarar homologação integral após encerrar essas conferências.

## Conferência adicional de assets e estrutura
- Verificação de 2026-11-06: listagem da pasta `imagens/Phalaenopsis pulcherrima` na API de conteúdos do GitHub confirma a existência dos quatro arquivos referenciados em `fotos` na ficha: `Phalaenopsis pulcherrima1.jpg`, `Phalaenopsis pulcherrima2.webp`, `Phalaenopsis pulcherrima3.jpg` e `Phalaenopsis pulcherrima4.png`.
- Conferência histórica: a ficha tinha `mesesFloracao: []` e `statusCalendarioFloracao: "indeterminado"`. Após a decisão editorial revisada, o estado vigente é `mesesFloracao: [2, 5]`, sem status indeterminado. Os arquivos existem no repositório, mas carregamento visual e identidade botânica das fotos não foram testados.

## Integração ao catálogo
- Verificado em `dados/orquideas/index.js`: importação de `phalaenopsisPulcherrima` de `./phalaenopsis-pulcherrima.js` e inclusão da mesma variável no array exportado `orquideas`. A ficha está registrada na fonte do catálogo.
- Esta conferência estática não substitui a abertura da página no navegador, nem garante ausência de falhas em tempo de execução.

## Pesquisa complementar: relato brasileiro de cultivador
- **Clube do Orquidófilo, publicação de 18/02/2015, 'Doritis pulcherrima'**: identifica foto e cultivo da forma `alba aquinii` por **André Merez** e descreve pico de floração no verão, com abertura sequencial até o início do outono. Fonte: https://clube273.rssing.com/chan-44705061/all_p1.html . A data da publicação não prova que a fotografia foi tirada em fevereiro de 2015; portanto não autoriza marcar fevereiro como mês confirmado. Trata-se de observação brasileira independente e mais específica do que calendários genéricos copiados.
- **Orchidsweb, 07/03/2015** inclui `Phalaenopsis esmeralda` (sinônimo citado de `P. pulcherrima`) em lista de orquídeas que florescem em março, mas a fotografia utilizada é de Wikimedia Commons e não constitui registro brasileiro datado de cultivo. Fonte: https://orchidsweb.wordpress.com/2015/03/07/orquideas-que-florescem-em-marco-iii/ . Não marcar março com base apenas nessa listagem.
- **Delfina de Araújo, calendário brasileiro** lista `Doritis pulcherrima` em fevereiro e maio; a posição foi confirmada posteriormente na estrutura da página. Fonte: https://www.delfinadearaujo.com/floracao/florabr.htm .
- Resultado naquela etapa: reforçada a tendência **verão até começo do outono**. A conclusão de calendário indeterminado foi posteriormente substituída por fevereiro e maio como meses indicativos.

## Conferência da estrutura do calendário de Delfina de Araújo (06/11/2026)
- A página organiza 12 blocos mensais em ordem de janeiro a dezembro. O nome histórico `Doritis pulcherrima` aparece **no segundo bloco (fevereiro)** e **no quinto bloco (maio)**. A atribuição foi confirmada pela sequência dos blocos e seus limites, e não inferida da data de publicação. Fonte: https://www.delfinadearaujo.com/floracao/florabr.htm .
- **Natureza da evidência:** calendário brasileiro horticultural, sem exemplar individual, local ou data/ano de observação para cada ocorrência. Portanto, fevereiro e maio são **meses indicados por fonte brasileira**, mas não equivalem a registros fenológicos individualmente documentados. Não misturar esses níveis de certeza.
- A afirmação anterior de que a posição mensal nessa fonte estava por confirmar fica resolvida: **fevereiro e maio**. Naquela etapa ainda se exigia evidência individualizada para marcar meses. A decisão editorial posterior passou a admitir meses **indicativos** de calendário brasileiro identificado, com a limitação descrita na ficha.

## Decisão editorial revisada — 06/11/2026
- Após conferir diretamente a organização mensal da fonte de Delfina de Araújo, o calendário visual foi atualizado para `mesesFloracao: [2, 5]` (fevereiro e maio). A indicação é **horticultural brasileira, não confirmação fenológica individualizada**; o texto da ficha comunica expressamente esse limite.
- A exigência anterior de fotografia datada para qualquer mês foi considerada restritiva demais: um calendário brasileiro identificado e rastreável pode fundamentar **mês indicativo**, desde que o texto diferencie essa indicação de observação individual comprovada.
- `statusCalendarioFloracao: "indeterminado"` foi retirado porque há agora meses indicados e o componente atual não diferencia graus de certeza nos quadrinhos. Essa limitação visual permanece registrada; os quadrinhos não devem ser interpretados como garantia de floração.
- Revisão de código e publicação no repositório concluídas; inspeção visual do site em navegador ainda não executada.

## Estado consolidado vigente — 06/11/2026
- Ficha publicada: `mesesFloracao: [2, 5]`, sem `statusCalendarioFloracao: "indeterminado"`. Fevereiro e maio são indicações horticulturais brasileiras, não datas individuais de observação.
- Texto floral revisado com distinção entre duração da flor e duração da haste, perfume restrito à variedade relatada e sazonalidade variável.
- Importação no catálogo e existência dos quatro arquivos de fotografia verificadas no GitHub; calendário inspecionado estaticamente no código.
- **Não homologado visualmente:** falta teste da página renderizada em navegador. Não afirmar homologação integral com base somente em inspeção de código.
- As decisões históricas acima permanecem identificadas como substituídas, não como estado atual da ficha.
