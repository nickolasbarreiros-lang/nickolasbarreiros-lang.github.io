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
