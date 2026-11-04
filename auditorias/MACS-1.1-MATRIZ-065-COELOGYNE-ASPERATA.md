# MACS 1.1 — Matriz 065: Coelogyne asperata

**Data:** 2026-11-03  
**Ficha:** `dados/orquideas/coelogyne-asperata.js`  
**Parecer:** **REVISÃO DOCUMENTAL CONCLUÍDA; RECEITA TÉCNICA NÃO HOMOLOGADA**.

## Taxonomia, habitat e morfologia
- [POWO/Kew — Coelogyne asperata](https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:623770-1): nome aceito; `Pleione asperata` é sinônimo homotípico. Epífita pseudobulbosa nativa da Malésia à região das ilhas Santa Cruz, em floresta tropical úmida.
- [Flora Malesiana / Naturalis — Coelogyne asperata](https://orchids.naturalis.nl/linnaeus_ng/app/views/species/taxon.php?id=11572): rizoma rastejante; pseudobulbos separados, de 7–25 cm; folhas grandes, plissadas; inflorescências proterantas ou sinantas com **6–35 flores**. Fonte taxonômica, não estudo de substratos.
- [Orchids.org — Coelogyne asperata](https://www.orchids.org/grexes/5784): relato descritivo de espécie grande, epífita ou ocasionalmente litófita, de florestas próximas a rios; inflorescências arqueadas com muitas flores perfumadas. Fonte secundária.
- `descricao` reescrita em narrativa botânica para retratar pseudobulbos, folhas, inflorescências, flores e habitat, sem regras de manejo.

## Fontes de cultivo e limites de extrapolação
- [American Orchid Society — Coelogyne Culture Sheet](https://www.aos.org/orchid-care/care-sheets/coelogyne-culture-sheet): orientação **para o gênero**, com um exemplo de mistura de **casca de abeto e perlita 3:1**, além de variações com esfagno. Não testa *C. asperata* nem a receita da ficha.
- [Orchid Species Society — Coelogyne](https://orchidspeciessoc.org.au/coelogyne-culture/): orienta umidade constante com drenagem, usando misturas de casca, esfagno ou fibra de coco. Orientação genérica.
- Recipiente largo, estável e drenante é proposta coerente com o porte e rizoma expansivo, **não preferência comprovada por experimento comparativo**. Estrelas da ficha são avaliações heurísticas.

## Receita R0 — recipiente amplo e drenante
| Ingrediente | Percentual | Função |
|---|---:|---|
| Chips de coco médios preparados | 35% | Reserva de umidade |
| Casca de pinus média | 30% | Estrutura |
| Perlita grossa | 25% | Aeração |
| Esfagno de fibra longa solto | 10% | Retenção complementar |
| **Total** | **100%** | **Hipótese horticultural** |

A mistura tem 75% de componentes orgânicos (coco, pinus, esfagno) e 25% de perlita. Não equivale à receita genérica 3:1 de casca de abeto e perlita da AOS. Chips de coco devem ser preparados e verificados quanto a sais; esfagno solto, sem compactação. Ajustar regas ao tempo real de secagem.

## Duas alternativas qualitativas
1. Casca de pinus média + perlita grossa + esfagno de fibra longa solto.
2. Chips de coco médios preparados + casca de pinus média + carvão vegetal.

Alternativas distintas entre si e da receita principal. Sem proporções específicas publicadas ou ranking experimental.

## Produtores brasileiros
**Produtores brasileiros com receita percentual específica da espécie verificados nesta passagem: 0.** Meta de até 25 produtores não atingida. Não contar orientações gerais da AOS ou de associações estrangeiras como validações quantitativas brasileiras.

## Consistência editorial
- `substratoVisual.receitaTexto` e `substratoVisual.itens`: **35 + 30 + 25 + 10 = 100%**.
- `substrato`: exatamente **duas alternativas qualitativas distintas**.
- Campo `macs1_0.substrato.percentuais`: ausente.
- Assets declarados: `chips-coco`, `casca-pinus`, `perlita`, `esfagno`. **Não foi executado teste de carregamento visual dos arquivos**.
- A classificação **NÃO HOMOLOGADA** foi mantida no texto; dados botânicos não foram usados como prova de percentuais.

## Parecer final
**Revisão documental concluída.** Taxonomia, morfologia e distribuição conferidas; receita 100% consistente, duas alternativas distintas e distinção explícita entre orientação de gênero e hipótese de espécie. **Homologação experimental específica da mistura: NÃO DEMONSTRADA.**
