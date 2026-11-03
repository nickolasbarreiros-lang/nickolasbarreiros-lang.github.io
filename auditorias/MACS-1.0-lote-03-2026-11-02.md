# MACS 1.0 — Lote 03 — fichas 21–30 do índice oficial

Data: 02/11/2026. **Triagem estrutural inicial, não homologação científica.**

Ordem confirmada em `dados/orquideas/index.js`, seção `export const orquideas`. Cada arquivo abaixo foi lido diretamente do repositório.

| Nº | Arquivo | `substratoVisual` detectado | Receita quantitativa visual |
|---:|---|---|---|
| 21 | cattleya-schilleriana.js | Não | Não identificada |
| 22 | bulbophyllum-rothschildianum.js | Sim | Não detectada no formato padrão `itens[].proporcao` |
| 23 | encyclia-mineirinha.js | Sim | 35% macadâmia, 30% pinus, 20% perlita, 15% carvão |
| 24 | arpophyllum-giganteum.js | Sim | 35% macadâmia, 25% pinus, 20% carvão, 10% arroz carbonizado, 10% esfagno |
| 25 | oncidium-twinkle.js | Sim | 35% pinus, 30% chips de coco, 25% perlita, 10% carvão |
| 26 | dendrobium-tenellum.js | Não | Não identificada |
| 27 | dendrobium-aggregatum.js | Não | Não identificada |
| 28 | dendrobium-moscatum.js | Não | Não identificada |
| 29 | rodriguezia-venusta.js | Sim | 35% pinus, 30% chips de coco, 25% perlita, 10% carvão |
| 30 | rodriguezia-lanceolata.js | Sim | 35% pinus, 30% chips de coco, 25% perlita, 10% carvão |

## Achados prioritários

1. **Quatro fichas sem `substratoVisual`** (21, 26, 27, 28). Isso é uma lacuna estrutural relativa às fichas V4.9 com receita visual, não prova que a ficha esteja quebrada ou que o cultivo esteja incorreto. **Não gerar automaticamente uma receita percentual sem evidências.**
2. **Bulbophyllum rothschildianum** tem `substratoVisual`, mas não foi identificada a estrutura padrão de proporções; precisa de inspeção específica antes de classificar a receita como ausente.
3. **Dendrobium aggregatum**: prioridade alta para verificar sinonímia com `D. lindleyi` e manejo sazonal. A AOS identifica `lindleyi (aggregatum)` na seção Densiflora (Callista), que tende a responder à estação mais fresca e seca: https://www.aos.org/orchids/articles/cold-tolerance-of-warm-growing-orchids . A extensão da Universidade de Wisconsin explica que `D. lindleyi` precisa de repouso de inverno relativamente seco e noites frescas para florir; o texto não deve ser extrapolado como garantia de floração em clima quente constante: https://hort.extension.wisc.edu/articles/dendrobium-lindleyi/ .
4. **Bulbophyllum**: guia geral AOS recomenda umidade frequente, aeração e evitar secagem total para muitos representantes do gênero, mas **não autoriza percentuais específicos para `B. rothschildianum`**: https://www.aos.org/orchid-care/care-sheets/bulbophyllum-culture-sheet .
5. **Rodriguezia venusta e R. lanceolata** possuem receitas visualmente idênticas. Isso **não comprova erro**, mas exige checar se houve cópia genérica indevida ou convergência fundamentada na morfologia radicular e no recipiente.
6. **Nenhuma ocorrência textual de pedra-pomes** detectada nestes dez arquivos. As seis receitas numéricas encontradas somam 100%. A detecção é estrutural, não ensaio de substrato.

## Próxima etapa
Inspecionar campos e estrutura das quatro fichas sem receita visual e a ficha `bulbophyllum-rothschildianum.js`; identificar se o conteúdo está em formato legado e estabelecer plano de migração V4.9 sem perda de fotos/assets. Depois pesquisar fontes específicas e validar ingredientes antes de propor proporções.

**Status:** 10/10 inventariadas; 0/10 homologadas quantitativamente; 0 fichas modificadas nesta passagem.

## RETIFICAÇÃO OBRIGATÓRIA DA TRIAGEM — detector corrigido

**A afirmação inicial de quatro fichas sem `substratoVisual` estava incorreta.** O primeiro detector reconhecia apenas `substratoVisual:` sem aspas e produziu falsos negativos nos arquivos escritos como `"substratoVisual":`. Da mesma forma, deixou de reconhecer `"proporcao":` no *Bulbophyllum rothschildianum*. Foi refeita a leitura dos cinco arquivos diretamente no GitHub com padrão que aceita chaves com ou sem aspas.

| Ficha | `substratoVisual` realmente existe? | Receita já existente | Soma |
|---|---|---|---:|
| *Cattleya schilleriana* | **Sim** | 35% macadâmia + 30% pinus + 20% perlita + 15% carvão | 100% |
| *Bulbophyllum rothschildianum* | **Sim** | 35% pinus + 20% carvão + 25% chips de coco + 20% esfagno | 100% |
| *Dendrobium tenellum* | **Sim** | 40% pinus + 25% chips de coco + 25% perlita + 10% carvão | 100% |
| *Dendrobium aggregatum* (nome aceito na ficha: *D. lindleyi*) | **Sim** | 45% pinus grosso + 30% brita fina + 25% carvão | 100% |
| *Dendrobium moscatum* (nome exibido: *D. moschatum*) | **Sim** | 35% pinus grosso + 30% macadâmia grossa + 20% carvão + 15% perlita | 100% |

**Correção do balanço estrutural:** **10/10 fichas do lote 03 possuem `substratoVisual` e receita numérica**, somando 100%; não há evidência de quatro fichas sem layout. **Não executar migração V4.9 nem recriar assets para essas fichas com base no detector antigo.** A triagem inicial permanece registrada como histórico, mas esta retificação a substitui expressamente.

### Verificação de fontes na retificação
- University of Wisconsin–Madison Extension, *Dendrobium lindleyi*, revisão outubro de 2026: https://hort.extension.wisc.edu/articles/dendrobium-lindleyi/ — regas generosas no crescimento, repouso mais seco e noites frescas para floração; cultivo montado ou em vaso pequeno.
- AOS, seções de Dendrobium: https://www.aos.org/orchids/articles/cold-tolerance-of-warm-growing-orchids — *D. lindleyi* (= *aggregatum*) incluído em Densiflora (Callista).
- AOS, Bulbophyllum: https://www.aos.org/orchid-care/care-sheets/bulbophyllum-culture-sheet — meios finos com retenção de umidade e rizoma não enterrado, orientação geral de gênero.
- Orchid Society of Great Britain: https://www.osgb.org.uk/orchids/orchid-care-guides/bulbophyllum-orchid-care — casca fina/média, por vezes esfagno/perlita, recipientes rasos e montagem; não comprova a porcentagem específica de *B. rothschildianum*.

**Pendências reais:** evidência específica de espécie/híbrido, adequação de recipiente, comportamento de secagem e homologação de percentuais. **Nenhum arquivo de ficha foi modificado** nesta correção de auditoria.

## Segunda passagem — Rodriguezia venusta × R. lanceolata e Dendrobium tenellum

### Rodriguezia: receitas iguais, recipientes principais diferentes
Inspeção direta de `formasCultivo`, `substratoVisual` e `rega`:

| Critério | *R. venusta* | *R. lanceolata* |
|---|---|---|
| Cultivo principal | Placa/tronco (5 estrelas) | Cachepô de madeira (5 estrelas) |
| Destino explícito da receita | Alternativa para cachepô ou vaso, **não** enchimento da placa | Cachepô pequeno |
| Receita para recipiente | 35% pinus + 30% chips de coco + 25% perlita + 10% carvão | 35% pinus + 30% chips de coco + 25% perlita + 10% carvão |
| Regas | Montagem pode requerer regas diárias no calor; vaso seca parcialmente entre regas | Regas frequentes no crescimento, leve secagem entre irrigações em vaso |

- Fonte específica de *R. venusta*: https://www.orchid.guru/content/orchids/r/rodriguezia/venusta/ — cultivo montado e em cestos, regas frequentes com drenagem, atenção à desidratação em calor. Lista casca, carvão, esfagno e perlita como materiais possíveis; **não valida chips de coco nem percentuais exatos**.
- Fonte específica de *R. lanceolata*: https://www.orchid.guru/content/orchids/r/rodriguezia/lanceolata/ — casca e perlita, mistura aberta e montagem como alternativa, rega regular; **não valida a receita de 35/30/25/10**.
- **Conclusão:** coincidência das receitas não demonstra erro porque ambas são epífitas de raízes finas e o contexto do recipiente difere. Entretanto, a identidade percentual **não está cientificamente homologada** e pode refletir uma fórmula-base editorial reutilizada. Preservar por ora; investigar produtores brasileiros específicos para cada espécie, não contar fontes genéricas duas vezes.

### Dendrobium tenellum: identidade confirmada, cautela com amplitude ecológica
- Kew POWO, espécie aceita: https://powo.science.kew.org/taxon/urn%3Alsid%3Aipni.org%3Anames%3A628738-1 — *D. tenellum* é nome aceito; *Onychium tenellum* é sinônimo, nativo de Java e epífita de bioma tropical úmido.
- IOSPE reproduzido em orchids.org: https://www.orchids.org/grexes/onychium-tenellum — relata ambientes montanos entre cerca de 1.500–2.200 m e hábito predominantemente epífito; isso **não estabelece** por si só os limites térmicos de cultivo.
- RHS, guia de gênero: https://www.rhs.org.uk/plants/dendrobium/how-to-grow-dendrobium — necessidade de luz, temperatura e repouso varia muito entre espécies e grupos.
- A ficha já indica cachepô suspenso, raízes ventiladas, retenção intermediária e noites amenas; receita de 40% pinus + 25% coco + 25% perlita + 10% carvão **permanece provisória**, sem percentuais confirmados em ensaio específico.
- **Alerta metodológico:** não transferir recomendações de *Dendrochilum tenellum* para *Dendrobium tenellum*: gêneros e espécies diferentes.

**Status desta passagem:** 3 fichas confrontadas com fontes externas; nenhuma receita ou classificação modificada; 0 homologações quantitativas. Mantidas as dez receitas visuais identificadas na retificação do detector.

## Terceira passagem — sete fichas restantes, verificação científica orientada por risco

Conferidos diretamente os arquivos de *Cattleya schilleriana*, *Bulbophyllum rothschildianum*, *Encyclia Mineirinha*, *Arpophyllum giganteum*, *Oncidium Twinkle*, *Dendrobium lindleyi* (= *D. aggregatum*) e *Dendrobium moschatum*. Receitas atuais e cultivos principais registrados abaixo. **Os percentuais não são resultados experimentais nem homologação MACS.**

| Ficha | Cultivo principal | Receita atual | Risco/questão científica |
|---|---|---|---|
| Cattleya schilleriana | Cachepô de madeira | 35 macadâmia / 30 pinus / 20 perlita / 15 carvão | Secagem rápida e enraizamento sensível; verificar frequência hídrica conforme tamanho do cachepô |
| Bulbophyllum rothschildianum | Cachepô de madeira | 35 pinus / 20 carvão / 25 coco / 20 esfagno | Conciliação de umidade constante com aeração e rizoma exposto |
| Encyclia Mineirinha (híbrido) | Vaso de barro | 35 macadâmia / 30 pinus / 20 perlita / 15 carvão | Validar em separado parentalidade e cultivo do híbrido, sem atribuir evidência de espécie pura |
| Arpophyllum giganteum | Vaso plástico | 35 macadâmia / 25 pinus / 20 carvão / 10 arroz carbonizado / 10 esfagno | Fração hídrica de 10% de esfagno depende de volume do vaso, ambiente e rega |
| Oncidium Twinkle (híbrido) | Vaso plástico | 35 pinus / 30 coco / 25 perlita / 10 carvão | Noites quentes podem prejudicar desempenho/floração mesmo com boa mistura |
| Dendrobium lindleyi | Placa/tronco | 45 pinus / 30 brita / 25 carvão **apenas em vaso/cesto** | Repouso seco e noites frias como fatores de indução floral; não aplicar mistura à placa |
| Dendrobium moschatum | Cachepô de madeira | 35 pinus / 30 macadâmia / 20 carvão / 15 perlita | Manejo sazonal deve ser específico, não copiar repouso de D. lindleyi |

### Fontes efetivamente verificadas nesta passagem

- AOS, *Why Will It Not Bloom, Part 1*: https://www.aos.org/orchids/articles/why-will-it-not-bloom-part-1-general-considerations — discute especificamente *D. lindleyi*, com dias abaixo de ~28°C, noites abaixo de ~10°C e grande amplitude diária associados à floração **em seu habitat**; isso não equivale a temperatura mínima obrigatória universal em cultivo.
- Wisconsin Horticulture, *Dendrobium lindleyi* (rev. outubro de 2026): https://hort.extension.wisc.edu/articles/dendrobium-lindleyi/ — repouso invernal mais seco e noites na faixa ~10–16°C; ausência de floração com noites acima de ~16°C durante o período de indução, nas condições descritas. A ficha já orienta repouso mais seco, mas os fatores térmicos são críticos para avaliar floração em litoral quente.
- AOS, *Bulbophyllum Culture Sheet*: https://www.aos.org/orchid-care/care-sheets/bulbophyllum-culture-sheet — gênero requer umidade regular, secagem apenas leve, substratos como esfagno e casca fina; rizoma e pseudobulbos não devem ser enterrados. **Fonte de gênero, não percentuais de B. rothschildianum.**
- RHS, *Cool growing oncidium orchids*: https://www.rhs.org.uk/plants/oncidium/cool/growing-guide — lista expressamente o híbrido **Oncidium Twinkle** e discute noites frescas, substratos drenantes e rega regular. **Não comprova que a fórmula de 35/30/25/10 seja ideal**.
- Orchid Society of Great Britain, *Oncidium Orchid Care*: https://www.osgb.org.uk/orchids/orchid-care-guides/oncidium-orchid-care — casca com perlita ou carvão e ajuste de retenção segundo ambiente, sem proporções específicas de Twinkle.
- AOS, *Dendrobium General Culture Sheet*: https://www.aos.org/orchid-care/care-sheets/dendrobium-general-culture-sheet — recomendações gerais de casca grossa, perlita e carvão, com forte variação do repouso entre seções; **não extrapolar D. lindleyi para D. moschatum**.

### Decisão desta passagem

**10/10 fichas do lote 03 tiveram ao menos triagem de composição, recipiente e água.** Três foram confrontadas na passagem anterior com fontes de espécie; as sete restantes foram conferidas nesta passagem quanto a compatibilidade e riscos, com **fontes externas gerais ou específicas para parte delas**. Isso **não significa** que as dez já atingiram o alvo de 25 produtores brasileiros por espécie.

Não alterar os percentuais sem base comparativa; não alterar estrelas IDC/IAR nesta auditoria de substrato; nenhuma ficha foi modificada. **Homologação quantitativa: 0/10.**

## Quarta passagem — confirmação específica de Oncidium Twinkle e risco de indução floral

**Fonte específica, superior à inferência por gênero:** RHS, página do próprio híbrido *Oncidium Twinkle gx*: https://www.rhs.org.uk/plants/327502/oncidium-twinkle-gx/details . O RHS recomenda mistura aberta baseada em casca com adição possível de material mineral, esfagno ou fibra de coco; luz filtrada; temperaturas ideais em torno de **12°C à noite a 25°C de dia**; rega regular com drenagem completa, reduzida no inverno. A orientação não informa porcentagens de ingredientes.

**Corroboração:** RHS, guia de oncidiums de clima mais fresco, https://www.rhs.org.uk/plants/oncidium/cool/growing-guide , lista nominalmente *Oncidium Twinkle* entre os híbridos recomendados e enfatiza queda térmica noturna na indução floral.

**Comparação com a ficha real:** o arquivo `dados/orquideas/oncidium-twinkle.js` já informa, no campo `adaptacaoRegional`, que calor noturno persistente pode reduzir vigor e floração; o campo `climaFloracao` também valoriza noites mais frescas. A receita 35% pinus + 30% chips de coco + 25% perlita + 10% carvão é **compatível em categorias de materiais** com o RHS, mas os percentuais são proposta horticultural não validada.

**Decisão:** não modificar campos já corretos, não alterar IDC 3.2 ou IAR 2.0 e **não homologar** os percentuais por extrapolação. Registrar a referência RHS do híbrido como evidência direta de qualidade superior a guias genéricos de Oncidium.

**Nota de auditoria sobre *D. lindleyi*:** AOS, https://www.aos.org/orchids/articles/why-will-it-not-bloom-part-1-general-considerations , associa floração em habitat a dias abaixo de 27,7°C, noites abaixo de 10°C e amplitude diária acima de 13,9°C, junto com luz e sazonalidade. **Esses números descrevem condições de habitat discutidas pela fonte, não limiares absolutos de sobrevivência ou floração em todo cultivo.** O repouso hídrico isolado não substitui a sazonalidade térmica.

**Status:** sem alteração de receitas; evidência de espécie/híbrido específica fortalecida; homologação percentual continua pendente.

## Quinta passagem — produtores brasileiros documentados, com evidência discriminada

### Bulbophyllum rothschildianum — 3 produtores independentes localizados

| Produtor | Recomendações publicadas para a espécie | Limite da evidência |
|---|---|---|
| Orquidário Maripá | Cascas, carvão, pedaços de madeira e musgo; vaso plástico, barro ou caixeta; montagem em árvore com mais regas durante o enraizamento | Não publica percentuais, nem especifica chips de coco ou granulometria |
| Orquidário Mogi Mirim | Pinus, carvão e esfagno; vaso ou tronco; umidade moderada, sem encharcar | Não publica percentuais; página também afirma origem em Papua Nova Guiné, **incompatível com Kew POWO** |
| Orquidário Oriental | Informa habitat epífito em floresta úmida bem ventilada, da região de Darjiling a Assam, até 1.200 m | Página comercial **não publica receita de substrato**; não contar como fonte de composição |

Fontes:
- https://www.orquidariomaripa.com.br/produtos/bulbophyllum-rothschildianum-pre-adulta/
- https://www.orquidariomogimirim.com.br/bulbophyllum-rothschildianum-
- https://www.orquidariooriental.com.br/produto/ibulbophyllum-rothschildianumi,2217/
- Controle taxonômico Kew POWO: https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:620046-1 — distribuição nativa de Darjiling a sul de Yunnan e norte de Myanmar, **não Papua Nova Guiné**.

**Confronto com a ficha:** 35% pinus + 20% carvão + 25% chips de coco + 20% esfagno. Pinus, carvão e musgo aparecem explicitamente nas fontes de produtores. A fração de **25% de chips de coco** é plausível, mas **não demonstrada nas duas receitas específicas encontradas**; não confundir madeira em pedaços com chips de coco. Nenhum dos três produtores comprova percentuais. O cultivo em cachepô de madeira é uma opção corroborada, não superioridade quantitativamente demonstrada.

### Arpophyllum giganteum — 3 produtores independentes localizados

| Produtor | Recomendações publicadas para a espécie | Limite da evidência |
|---|---|---|
| Orquidário Maripá | Cascas, carvão, pedaços de madeira e esfagno; vaso plástico/barro/caixeta; montagem possível | Não menciona macadâmia, arroz carbonizado ou percentuais |
| Orquidário 4 Estações | Substrato bem drenado, várias misturas possíveis; clima tropical/quente e sombreamento ~60% | Sem ingredientes ou proporções |
| Orquidário Mogi Mirim | Regas regulares no crescimento, com leve secagem; redução em época mais fria sem desidratar | O trecho consultado não comprova ingredientes/percentuais |

Fontes:
- https://www.orquidariomaripa.com.br/produtos/orquidea-arpophyllum-giganteum-especie-para-colecionar-pre-adulta/
- https://orquidario-4-estacoes.lojaintegrada.com.br/orquidea-arpophyllum-giganteum-nbs
- https://www.orquidariomogimirim.com.br/arpophyllum-giganteum

**Confronto com a ficha:** 35% macadâmia + 25% pinus + 20% carvão + 10% arroz carbonizado + 10% esfagno. Há convergência qualitativa em cascas, carvão, musgo e drenagem. **Macadâmia e casca de arroz carbonizada são escolhas técnicas ainda sem confirmação direta dessas três fontes para a espécie**. Não confundir menção genérica a cascas com confirmação específica de macadâmia.

### Achado de controle de qualidade das fontes

A página comercial do Orquidário Mogi Mirim para *B. rothschildianum* informa origem em Papua Nova Guiné; **Kew POWO não inclui Papua Nova Guiné na distribuição nativa**. Usar a página comercial apenas para recomendações de cultivo declaradas e adotar Kew como referência de distribuição. **Não transpor informação geográfica errada para a ficha.**

### Contagem e decisão

- *B. rothschildianum*: **3 produtores com páginas da própria espécie**, sendo **2 com composição de substrato** e 1 apenas com contexto ecológico.
- *A. giganteum*: **3 produtores com páginas da própria espécie**, sendo **1 com ingredientes nomeados**, 1 com drenagem genérica e 1 com manejo hídrico.
- Total: **6 páginas de produtores específicos, sem duplicar variações comerciais do mesmo produtor**.
- **0 receitas com percentuais confirmados**; **0 arquivos de fichas modificados**.
- Não se atingiu a meta de até 25 produtores por espécie. Prosseguir com as demais espécies e pesquisas complementares, sem declarar homologação numérica.

## Sexta passagem — Cattleya schilleriana: evidência de produtor e controle de identidade

**Produtor brasileiro consultado:** Orquidário Maripá, anúncio *Cattleya schilleriana × self*, https://www.orquidariomaripa.com.br/produtos/orquidea-cattleya-schilleriana-x-self-linda-pintalgada-mudas-fortes-pre-adulta/ . O produtor recomenda **mistura de cascas, carvão e pedaços de madeira** e aceita **vaso plástico, vaso de barro ou caixeta de madeira**. Informa ainda que a planta pode ser fixada em árvore, com mais regas até enraizar.

**Controle de identidade:** trata-se de um lote de **autofecundação (× self)** da espécie, não de prova sobre todos os clones ou sobre um híbrido interespecífico. O próprio anúncio usa o termo comercial “híbrido”; por isso, registrar a identificação exata do material comercial e não tratá-lo como experimento científico controlado.

**Comparação com a receita cadastrada:** 35% casca de macadâmia + 30% pinus + 20% perlita + 15% carvão. O produtor corrobora **categorias gerais de cascas e carvão**, além da viabilidade de caixeta, mas **não cita explicitamente casca de macadâmia nem perlita** e não fornece percentuais. Pedaços de madeira **não são equivalentes automaticamente** a casca de macadâmia ou perlita. Não alterar receita por essa única referência.

**Situação da amostra:** +1 página de produtor brasileiro com recomendação de substrato para material identificado como *C. schilleriana × self*; nenhum percentual homologado; ficha preservada. Outros resultados localizados nesta busca foram listagens de produtos, não recomendações técnicas específicas, e **não foram contados** como fontes de composição.

## Sexta passagem — confronto com três páginas adicionais de produtores brasileiros (02/11/2026)

**Critério de contagem:** contar produtor independente uma única vez por espécie, independentemente de quantos anúncios da mesma planta possua. Página de venda sem composição não é fonte para ingredientes. Cruzamentos autofecundados (x self) não são tratados como híbridos interespecíficos.

| Espécie | Produtor e página | Evidência diretamente publicada | Confronto com receita visual |
|---|---|---|---|
| *Cattleya schilleriana* (lote comercial x self) | Orquidário Maripá — https://www.orquidariomaripa.com.br/produtos/orquidea-cattleya-schilleriana-x-self-linda-pintalgada-mudas-fortes-pre-adulta/ | Mistura de cascas, carvão, pedaços de madeira; vasos de plástico/barro/caixetas, ou árvore com irrigação maior durante enraizamento; sombreamento 50–70% | Corrobora cascas e carvão, e o uso de recipiente aberto. **Não cita macadâmia especificamente, perlita ou proporções**. A descrição comercial usa o termo genérico 'híbrido', mas x self é autofecundação e não prova hibridação interespecífica. |
| *Dendrobium aggregatum* (= *D. lindleyi*) | Orquidário Maripá — https://www.orquidariomaripa.com.br/produtos/orquidea-dendrobium-aggregatum-variedade-gigante-adulta/ | Cascas, carvão, pedaços de madeira **e esfagno**; vasos de plástico/barro/caixetas ou montagem em árvore; sombreamento 50% | A receita visual do projeto, **45% pinus + 30% brita fina + 25% carvão**, tem casca/carvão, mas diverge ao usar brita e omitir esfagno. Não significa erro: a ficha indica montagem principal sem mistura e a receita é alternativa para vaso/cesto de secagem rápida. **Diferença deve ser testada no contexto de repouso mais seco e ambiente.** |
| *Oncidium Twinkle* cultivar 'Red Fantasy' | Orquidário Oriental — https://www.orquidariooriental.com.br/produto/ioncidiumi-twinkle-red-fantasy%2C624/ | Sombreamento 60%, faixa de temperatura informada **10–35°C**, floração outono–inverno; **não informa substrato** | Fonte útil para tolerância comercial e época floral, **não** para validar a mistura 35% pinus / 30% coco / 25% perlita / 10% carvão. A faixa anunciada não prova indução floral sob calor noturno persistente. |

### Regras de interpretação reforçadas
1. *D. lindleyi*: registrar **divergência real** entre a recomendação comercial com esfagno e a alternativa muito drenante da ficha, sem substituir brita por esfagno por inferência. Investigar se o produtor recomenda esfagno apenas como fração superficial/pequena ou no enchimento do vaso, e o manejo de repouso.
2. *C. schilleriana*: 'cascas' não prova casca de macadâmia, tampouco percentuais.
3. *Oncidium Twinkle*: distinguir **tolerância térmica anunciada** de temperaturas ideais e de temperaturas para indução floral; evitar equivalência entre elas.
4. Não multiplicar a mesma receita de Orquidário Maripá em diferentes anúncios de *D. aggregatum* como produtores distintos.

**Resultado:** 3 páginas específicas adicionais, de 2 produtores independentes (Maripá e Oriental), cobrindo 3 táxons/cultivares. **0 percentuais homologados; 0 fichas alteradas.** Prosseguir buscando produtores adicionais independentes para cumprir o objetivo MACS 1.0.

## Sétima passagem — evidência independente sobre as duas Rodriguezia e Dendrobium moschatum

**Achado prioritário:** o Orquidário 4 Estações publica fichas comerciais **separadas** de *Rodriguezia venusta* e *R. lanceolata* e recomenda **troncos ou leques de madeira para ambas**, com umidade ambiental média/alta e sombreamento de cerca de 70%. Isso fortalece o cultivo montado como alternativa principal para *R. lanceolata*, cujo destaque atual no site é cachepô de madeira. Não comprova que o cachepô esteja errado: as duas formas podem funcionar, e o próprio produtor não publica ensaio comparativo.
- *R. lanceolata*: https://www.orquidario4e.com.br/orquidea-rodriguezia-lanceolata-7cm
- *R. venusta*: https://www.orquidario4e.com.br/orquidea-rodriguezia-venusta-8cm

**Segunda fonte para R. lanceolata:** Orquidário Mantovani, https://www.orquideasmantovani.com.br/rodriguezia-lanceolata-704/p , informa planta adulta **enraizada em bolacha de madeira**. É observação direta do suporte comercial usado, não ensaio de superioridade.

**Terceira fonte para R. lanceolata:** Orquidário Matsuoka, https://orquidariomatsuoka.com.br/produto/epidendrum-porpax-colecao/ , apesar do slug de URL não correspondente, tem título da página **Rodriguezia lanceolata** e descreve cultivo em **toco de madeira** ou substrato para orquídeas. O URL inconsistente exige identificação pelo conteúdo da página, não pelo slug.

**Segunda fonte para R. venusta:** Orquidário Nhá Mercedes, https://www.sitionhamercedes.com.br/rodriguezia-venusta , recomenda para vaso **pinus, carvão e fibra de coco** e, para plantas montadas, **esfagno ao redor das raízes**. Essa fonte confirma três dos quatro materiais da receita visual do projeto (35% pinus + 30% chips de coco + 25% perlita + 10% carvão), **não confirma perlita ou qualquer percentual**. O produtor também menciona secagem leve entre regas.

**Dendrobium moschatum:** Orquidário 4 Estações, https://www.orquidario4e.com.br/orquidea-dendrobium-moschatum-4050-cm , recomenda **substrato bem drenado**, aceita vários tipos, e cita **vaso de barro** ou vaso plástico com boa drenagem; não publica componentes ou percentuais. Orquidário Mantovani, https://www.orquideasmantovani.com.br/dendrobium-moschatum-149/p , descreve replante em madeira, plástico, barro ou cachepô, mas **não valida a composição**. Assim, há evidência brasileira de flexibilidade do recipiente, sem homologação da receita 35% pinus / 30% macadâmia / 20% carvão / 15% perlita.

### Implicações e ações

1. *R. lanceolata*: **abrir pendência editorial de reavaliação do método com 5 estrelas**: montagem em madeira está corroborada por três produtores independentes; cachepô de madeira continua plausível, mas sua superioridade atual não está demonstrada. Não alterar estrelas sem confronto adicional do manejo hídrico e clima.
2. *R. venusta*: manter placa/tronco como método principal; concordância com produtor específico. Receita para vaso é **alternativa**, não mistura para preencher placa.
3. *D. moschatum*: não converter orientação genérica de drenagem em porcentagens de macadâmia ou perlita.
4. Contagem desta passagem: **7 páginas de produtores**, de **5 estabelecimentos distintos**, distribuídas por espécie (*R. lanceolata* 3, *R. venusta* 2, *D. moschatum* 2). Não confundir páginas com validações quantitativas. Sem modificações de fichas nesta passagem.

**Status:** MACS 1.0 quantitativa ainda não homologada; evidência para suporte montado de *R. lanceolata* reforçada.

## Oitava passagem — Cattleya schilleriana: quatro produtores adicionais e controle experimental para Encyclia

### Cattleya schilleriana: evidências específicas de produtores independentes

| Produtor | Prática publicada | Força/limitação |
|---|---|---|
| Orquidário Matsuoka | Substrato para orquídeas, toco de madeira ou brita; regar após secagem | **Brita** pode ser meio ou suporte alternativo, mas não comprova 20% perlita nem 35% macadâmia. https://orquidariomatsuoka.com.br/produto/cattleya-schilleriana-beltrame-x-c-schilleriana-alberto-basile-n2/ |
| Orquidário Santa Clara | Vaso com **pinus, carvão triturado e pedrisco no fundo**; placa com pouco material junto às raízes | Corrobora pinus e carvão; **pedrisco no fundo não equivale a brita como 30% de mistura**. https://orquidariosantaclara.com.br/cattleyas-e-afins/4790-cattleya-schilleriana-coerulea-ad.html |
| Orquidário Paulista | Cachepô, barro ou placa de madeira; meio de **secagem rápida e drenagem boa** | Corrobora o recipiente principal atual, sem validar ingredientes ou percentuais. https://www.orquidariopaulista.com.br/produtos/cattleya-schilleriana-v-tipo/ |
| Orquidário Aparecida | Planta de *C. schilleriana* enviada em **casca de peroba com musgo na base**; madeira, cachepôs e vasos no cultivo do produtor | Evidência específica de montagem com retenção localizada; não equivale a enchimento com 10–20% esfagno. https://orquidarioaparecida.com.br/produtos/cattleya-schilleriana-semi-alba-lacre-185405/ |

**Confronto com a ficha:** 35% macadâmia média + 30% pinus + 20% perlita + 15% carvão, em cachepô de madeira. O **recipiente e a necessidade de secagem rápida estão bem corroborados**; pinus e carvão possuem evidência específica; macadâmia e perlita, e especialmente as porcentagens, **não foram validadas por estes quatro produtores**. Não converter a menção de pedrisco de fundo em comprovação da fração mineral da receita.

### Encyclia Mineirinha — estudo brasileiro com outro híbrido (evidência indireta, não homologação)

Menegusso et al. (2021), *Vegetative development and flowering of Encyclia hybrid based on fertilization and substrate*, Ornamental Horticulture 27(3):391–397, DOI https://doi.org/10.1590/2447-536X.v27i3.2233 , comparou substratos e adubação no híbrido **Encyclia “Kropp” × E. atropurpurea** em experimento com blocos casualizados, quatro substratos, cinco intervalos de fertilização, quatro repetições e quatro vasos por repetição. **Substratos à base de esfagno tiveram melhor resultado de floração no híbrido estudado**, em associação ao manejo de adubação. Artigo: https://ornamentalhorticulture.com.br/rbho/article/view/2233 .

**Não extrapolar o resultado** para *Encyclia Mineirinha* (*E. patens × E. oliveirana*): híbrido diferente, ambiente e manejo distintos. O artigo reforça que a retenção hídrica e a floração merecem comparação, mas **não demonstra que a mistura atual 35% macadâmia / 30% pinus / 20% perlita / 15% carvão esteja errada** nem autoriza inserir esfagno automaticamente.

**Referência metodológica complementar:** SENAR-PR, *Cultivo de Orquídeas* (2026), https://www.sistemafaep.org.br/wp-content/uploads/2026/01/PR.0397-Cultivo-de-Orquideas_web.pdf — escolha do substrato depende de ambiente e recipiente, além do material. Documento geral, não prova proporções por espécie.

### Balanço
- Quatro páginas adicionais, de **quatro produtores independentes**, específicas para *Cattleya schilleriana*.
- Um estudo brasileiro experimental **indireto** para *Encyclia Mineirinha*.
- **0 percentuais homologados; 0 fichas alteradas**.
- Prosseguir busca de produtores independentes e estudos diretos, sem contar artigo sobre híbrido distinto como ensaio de *Encyclia Mineirinha*.

## Nona passagem — revisão direta de Dendrobium tenellum e Encyclia Mineirinha

### Dendrobium tenellum — divergência de amplitude térmica e correção editorial efetiva

- **Kew POWO:** nome aceito *Dendrobium tenellum* (Blume) Lindl., nativo de Java, epífita do bioma tropical úmido. https://powo.science.kew.org/taxon/urn%3Alsid%3Aipni.org%3Anames%3A628738-1
- **IOSPE (Jay Pfahl):** ocorrência em florestas montanas entre 1.500 e 2.200 m, cultivo fresco a frio, redução moderada de água e adubo no inverno; não recomenda seca absoluta. https://www.orchidspecies.com/dentennelum.htm
- **OrchidWeb (produtor especializado internacional):** classifica cultivo **intermediário a quente**, relata êxito em vasos com esfagno neozelandês ou cascas e montado em madeira/cortiça; regar quando o meio estiver começando a secar. https://www.orchidweb.com/p/dendrobium-tenellum
- **orchid.guru:** cita cultivo em cascas/mistura drenante ou montado e sugere proporção genérica aproximada de 70% orgânicos/30% inorgânicos, mas a página contém números de clima internamente inconsistentes; **não usar seus valores de temperatura, precipitação ou percentuais como comprovação experimental**. https://www.orchid.guru/content/orchids/d/dendrobium/tenellum/

**Achado:** altitude natural não autoriza afirmar que todo cultivo quente é inviável. O produtor especializado descreve cultivo intermediário a quente, em contraste com o IOSPE. É evidência de plasticidade sob condições de cultivo, **não prova de floração confiável em noites quentes permanentes**.

**Alteração implementada em `dados/orquideas/dendrobium-tenellum.js`:** a descrição passou a registrar origem montana e risco de calor noturno, **qualificando** a afirmação anterior de preferência estrita por frio com o relato de cultivo intermediário/quente. **Commit `1fb9c1e9e6ee1e1efa0f3e53abb1fe471b5be187`.** Não foram alterados substrato visual (40% pinus / 25% coco / 25% perlita / 10% carvão), estrelas, índices IDC/IAR, fotos ou assets. Esfagno é alternativa documentada por produtor, não obrigação de substituir a mistura.

### Encyclia Mineirinha — primeira evidência comercial direta sobre recipiente

**Orquidário Wolf:** https://www.orquidariowolf.com.br/produtos/encyclia-mineirinha-xb68w/ — confirma explicitamente cruzamento primário **Encyclia patens × E. oliveirana** e comercializa plantas adultas **em cestinho**, com envio envasado. O anúncio não especifica os componentes do substrato.

**Comparação com a ficha:** `Encyclia ‘Mineirinha’` é corretamente tratada como híbrido primário. A ficha destaca **vaso de barro**, mas o uso de cestinho por um produtor específico demonstra que recipiente aberto também é praticado. **Não é prova de que o vaso de barro seja inferior** e não valida a receita 35% macadâmia / 30% pinus / 20% perlita / 15% carvão. Não alterar método principal ou percentuais sem mais evidência.

### Estado e lacunas

- *D. tenellum*: **1 produtor internacional específico** com relato de substrato, mais Kew/IOSPE; nenhum produtor brasileiro específico encontrado nesta passagem.
- *Encyclia Mineirinha*: **1 produtor brasileiro específico**, evidência direta de recipiente, **sem receita**.
- **1 ficha corrigida cientificamente** (*D. tenellum*), sem alterar classificações, fotos ou receitas.
- **0 homologações de percentuais**. O alvo de até 25 produtores brasileiros por espécie permanece pendente, sem preencher lacunas com fontes de outros táxons.

## Décima passagem — auditoria da transferibilidade de evidências (02/11/2026)

### Encyclia ‘Mineirinha’
1. **Evidência direta de identidade e recipiente:** Orquidário Wolf, https://www.orquidariowolf.com.br/produtos/encyclia-mineirinha-xb68w/ : cruzamento *E. patens × E. oliveirana*; plantas adultas em cestinho, envio envasado. Não informa receita nem proporções.
2. **Evidência do parental, não do híbrido:** relato de cultivo de *Encyclia patens* publicado por orquidófilo da SBO, https://amigaorquidea.wordpress.com/2010/03/13/encyclia-patens/ : vaso de barro, substrato vegetal, irrigação moderada sem encharcar ou secar completamente. **Não é recomendação específica para ‘Mineirinha’**; aponta potencial conflito com a instrução de deixar o substrato secar completamente na ficha do híbrido, mas não autoriza corrigi-la sem evidência direta.
3. **Evidência experimental em híbrido diferente:** Menegusso et al. (2021), https://ornamentalhorticulture.com.br/rbho/article/view/2233 : híbrido *Encyclia* ‘Kropp’ × *E. atropurpurea*, quatro substratos × cinco intervalos de adubação, melhor floração com meios à base de esfagno no ensaio. **Não valida uso de esfagno em ‘Mineirinha’**, nem invalida a mistura atual. Não contar como produtor da ‘Mineirinha’.
4. **Outro táxon, não evidência direta:** Orquidário Santa Clara, https://orquidariosantaclara.com.br/orquideas-diversas/5746-encyclia-oncidioides-dark-pre-adulta.html : *E. oncidioides*, pinus/carvão/pedrisco no fundo. Não contar para ‘Mineirinha’.

**Decisão:** conservar 35% macadâmia / 30% pinus / 20% perlita / 15% carvão e método principal em vaso de barro como propostas, com pendência de testar regime hídrico contra a prática do parental *E. patens*. Sem homologação quantitativa.

### Dendrobium tenellum
1. **AOS — orientação de gênero, não específica:** https://www.aos.org/orchid-care/care-sheets/dendrobium-general-culture-sheet : casca média/grossa + perlita + carvão para estufa, com rega e repouso dependentes do grupo. Não fornece receita específica para *D. tenellum*.
2. **Estudo brasileiro de espécie diferente:** Assis et al., https://www.periodicos.uem.br/ojs/index.php/ActaSciAgron/article/view/1843 : testa coco desfibrado, pó e cubos em *D. nobile*; alguns tratamentos com coco viáveis para **essa espécie**. Não comprova 25% chips de coco em *D. tenellum*.
3. **Fonte terciária específica, baixa confiança numérica:** https://www.orchid.guru/content/orchids/d/dendrobium/tenellum/ : recomenda mistura drenante ou montagem e sugere 70% orgânicos/30% inorgânicos, mas o mesmo texto contém inconsistências graves de temperatura e precipitação; não homologar proporções com essa fonte.
4. **Fonte homônima enganosa:** https://www.orchid.guru/content/orchids/d/dendrochilum/tenellum/ é *Dendrochilum tenellum*, gênero diferente; **excluir** de evidências para *Dendrobium tenellum*.

**Decisão:** manter receita 40% pinus / 25% coco / 25% perlita / 10% carvão e nota de estimativa. A correção de tolerância térmica da passagem anterior permanece. Sem evidência de 25 produtores brasileiros da espécie.

### Critério MACS reforçado
Separar em cada ficha: (A) produtor brasileiro da mesma espécie/híbrido, (B) fonte científica da mesma espécie/híbrido, (C) evidência de parental, gênero ou híbrido diferente, (D) inferência horticultural. Só A/B podem corroborar diretamente uma recomendação; nenhum deles, isoladamente, homologa percentuais sem medição/comparação. **Nesta passagem: 0 fichas alteradas; 0 receitas homologadas.**

## Décima primeira passagem — Oncidium Twinkle: quatro produtores brasileiros com substrato específico (02/11/2026)

A busca direcionada identificou **quatro estabelecimentos brasileiros independentes**, cada um com página comercial específica de *Oncidium Twinkle*, incluindo cultivares de cores diferentes:

| Produtor | Ingredientes/suporte publicados | Diferença frente à ficha |
|---|---|---|
| **Flora Kadoguchi** — https://florakadoguchi.com.br/product/oncidium-twinkle/ | Pinus pequeno/médio, carvão e **chips de coco**; esfagno **somente como cobertura fina opcional**. Vaso plástico furado, barro ou tronco. Recomenda quase secar entre regas. | Confirma **3 dos 4 materiais** da receita; não menciona perlita, não valida percentuais. |
| **Orquídeas & Cia** — https://www.orquideacia.com.br/oncidium-twinckle | Pinus, carvão e **esfagno**; manter levemente úmido, sem encharcar. | Confirma pinus/carvão; oferece alternativa mais retentiva, não inclui chips de coco nem perlita. |
| **Merten Orquídeas** — https://www.mertenorquideas.com.br/orquideas/oncidium/oncidium-twinkle-mesclado-com-haste-floral | Casca de madeira, carvão, chips de coco, pedrinhas, musgo/esfagno como materiais possíveis; vaso plástico, cachepô, tronco, árvore. Regar após secar. | Confirma casca/carvão/coco; **lista de opções não é uma receita com todos os ingredientes juntos**. Não prova perlita. |
| **Orquidário Santa Clara** — https://orquidariosantaclara.com.br/saldos/2908-oncidium-twinkle-red-fantasy-saldao.html | Substrato **à base de casca de pinus**, sombreamento 60%, clima úmido/meia-sombra. | Confirma pinus, sem evidência sobre demais materiais ou percentuais. |

**Receita atual:** 35% pinus + 30% chips de coco + 25% perlita grossa + 10% carvão, ideal em vaso plástico.

**Síntese quantitativa estritamente documental (n=4 produtores):**
- **Pinus/casca de madeira:** 4/4, com 3 explicitamente nomeando pinus e 1 citando casca de madeira genérica.
- **Carvão:** 3/4.
- **Chips de coco:** 2/4.
- **Esfagno como ingrediente ou cobertura opcional:** 3/4; as práticas variam entre mistura e cobertura.
- **Perlita:** 0/4.
- **Percentuais volumétricos para ingredientes:** 0/4.

**Atenção:** as frações acima são **frequências de menção**, não frequências de uso real nem taxas de sucesso, e a ausência de menção não demonstra rejeição do ingrediente. As quatro páginas descrevem o híbrido comercial em geral ou cultivares distintos; diferenças de cultivar, recipiente e microclima não foram controladas.

**Decisão MACS:** há convergência razoável para pinus + carvão, apoio específico para coco, e **lacuna para perlita a 25%**. A mistura atual é horticulturalmente plausível, mas **não homologada**. Esfagno merece aparecer como alternativa contextual de retenção hídrica, sem adição automática à receita. **Nenhuma alteração de ficha nesta passagem**, pois não há demonstração comparativa de superioridade.

**Próxima verificação:** procurar evidência independente para perlita no cultivo do híbrido e examinar se o manejo hídrico da ficha descreve secagem total ou parcial, visto que as recomendações de produtores divergem.
