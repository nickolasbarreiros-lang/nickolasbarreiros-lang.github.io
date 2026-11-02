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
