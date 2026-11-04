# MACS 1.1 — Matriz 063: Acianthera pubescens

**Data:** 2026-11-03  
**Ficha:** `dados/orquideas/acianthera-pubescens.js`  
**Status:** **REVISÃO DOCUMENTAL CONCLUÍDA; RECEITA DE VASO NÃO HOMOLOGADA**.

## Taxonomia e morfologia
- [POWO/Kew — Acianthera pubescens](https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:1112900-2): nome aceito; `Pleurothallis pubescens` é sinônimo homotípico. Epífita de bioma tropical úmido, do México à América tropical, inclusive Brasil.
- [Zampin, estudo florístico UNESP, p. 113](https://repositorio.unesp.br/bitstreams/76845c65-5a55-4d78-a02f-c7d2584ee623/download): planta holoepífita, simpodial e reptante, sem pseudobulbos; caules unifoliados, folhas carnosas; flores creme-translúcidas com riscos e máculas vinosas, sépalas externamente pubérulas. **O estudo descreve morfologia, não testa substratos.**
- `descricao` ampliada para retratar arquitetura, inflorescências, pilosidade, variabilidade e habitat, sem transformar a apresentação em manual de manejo.

## Fonte brasileira de prática de cultivo
[Orquidário Aparecida — Acianthera pubescens](https://orquidarioaparecida.com.br/produtos/acianthera-pubescens/): produto específico informado como enviado montado em **ripinha de cambará**, com orientações gerais de umidade, ventilação e regas conforme necessidade. É **evidência de uso de suporte por um produtor**, não estudo comparativo nem receita percentual para vaso. O anúncio também descreve sombreamento de estufa como prática geral do produtor, não faixa ótima experimental da espécie.

## Receita principal R0 — vaso pequeno e drenante
| Material | Percentual | Função |
|---|---:|---|
| Casca de pinus fina/média | 35% | Estrutura |
| Casca de arroz carbonizada | 30% | Porosidade e drenagem |
| Carvão vegetal pequeno | 20% | Porosidade |
| Esfagno de fibra longa solto | 15% | Reserva hídrica |
| **Total** | **100%** | **Hipótese horticultural** |

**Grau de evidência:** formulação técnica, **sem ensaio quantitativo específico da espécie**. A existência de cultivo montado por produtor brasileiro não comprova a mistura 35/30/20/15 em vaso. A expressão `receitaTexto` foi ajustada para explicitar **não homologada**.

## Duas alternativas qualitativas
1. Casca de pinus fina + casca de arroz carbonizada + carvão vegetal pequeno.
2. Casca de pinus fina + perlita grossa + esfagno de fibra longa solto.

Alternativas distintas entre si e da R0, sem percentuais publicados e sem ranking experimental.

## Produtores brasileiros
- **Produtor com orientação de suporte específica e URL confirmada:** 1, Orquidário Aparecida.
- **Produtores com receita percentual para esta espécie confirmados nesta passagem:** **0**.
- Meta de até 25 produtores com receitas quantitativas **não atingida**; não atribuir percentuais ao anúncio do produtor.

## Consistência e limites
- `substratoVisual.receitaTexto` e `substratoVisual.itens`: **35 + 30 + 20 + 15 = 100%**.
- `substrato`: **duas alternativas qualitativas distintas**.
- Campo concorrente `macs1_0.substrato.percentuais`: ausente.
- Assets declarados: `casca-pinus`, `casca-arroz-carbonizada`, `carvao-vegetal`, `esfagno`. **Não foi executado teste visual de carregamento dos arquivos**; não declarar homologação de assets.
- Estrelas e índices não são prova experimental; não recalcular por analogia.

## Parecer
**Revisão documental encerrada.** Identidade, morfologia e prática de montagem sustentadas por fontes identificadas; R0 soma 100% e é **hipótese não homologada**; duas alternativas qualitativas distintas. Homologação experimental da mistura para esta espécie: **NÃO DEMONSTRADA**.
