# MACS 1.1 — Matriz 072: Macradenia multiflora

**Data:** 2026-11-03  
**Ficha:** `dados/orquideas/macradenia-multiflora.js`  
**Parecer:** **REVISÃO DOCUMENTAL CONCLUÍDA; RECEITA HORTICULTURAL NÃO HOMOLOGADA**.

## Taxonomia e morfologia
- [POWO/Kew — Macradenia multiflora](https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:148766-2): espécie aceita, sinônimo **Trichopilia multiflora Kraenzl.**, distribuição Brasil (Sul, Sudeste e Centro-Oeste) e Paraguai, epífita de bioma tropical sazonalmente seco.
- [World Flora Online](https://worldfloraonline.org/taxon/wfo-0000232465): epífita, distribuição e sinônimo concordantes com POWO.
- [IOSPE — Macradenia multiflora](https://iospe.ja.bz/macmultiflora.htm): pseudobulbos comprimidos com duas folhas, inflorescências pendentes de aproximadamente 20 cm, muitas flores perfumadas de cerca de 2 cm. A descrição foi reescrita para enfatizar esses traços, sem orientações de manejo.

## Evidência brasileira de cultivo
- [Orquídeas & Cia — Macradenia multiflora](https://www.orquideacia.com.br/macradenia-multiflora): recomenda **meia-sombra sem sol direto**, regas frequentes sem encharcamento e **casca de pinus, esfagno ou montagem em tronco**. **Não apresenta proporções quantitativas**.
- A ficha anterior mencionava Orquidário Paulista e Merten Orquídeas; essas referências **não foram reconfirmadas nesta passagem** e não foram computadas como evidência percentual.
- Produtores brasileiros com página específica e orientação qualitativa verificada nesta passagem: **1**.
- Produtores brasileiros com fórmula percentual específica verificada: **0**. Meta de até 25 não atingida.

## Receita principal R0 — cachepô pequeno suspenso
| Material | Percentual | Asset |
|---|---:|---|
| Casca de pinus média | 45% | `casca-pinus` |
| Perlita grossa | 30% | `perlita` |
| Carvão vegetal | 25% | `carvao-vegetal` |
| **Total** | **100%** | **Hipótese horticultural** |

A presença de pinus em orientação brasileira é evidência qualitativa do ingrediente, **não validação da composição 45/30/25**. Perlita e carvão também não foram homologados nesses percentuais para a espécie.

## Duas alternativas qualitativas
1. Casca de pinus + pequena fração de esfagno solto + perlita grossa.
2. Chips de coco **preparados** + carvão vegetal + perlita grossa.

Distintas entre si e da R0; sem percentuais inventados.

## Verificação editorial
- `substratoVisual.receitaTexto` e `itens`: **45 + 30 + 25 = 100%**.
- `substrato`: exatamente **duas alternativas qualitativas distintas**.
- Campo concorrente `macs1_0.substrato.percentuais`: ausente.
- `iluminacao.solDireto` = **Não permitido** e `iluminacao.horario` corrigido de string vazia para **Não permitido**, segundo o vocabulário editorial padronizado.
- Asset de carvão corrigido de `carvao` para `carvao-vegetal`; demais assets: `casca-pinus` e `perlita`.
- **Não foi realizado teste visual em navegador**, portanto não se declara validação do carregamento efetivo das imagens.
- Estrelas de suportes continuam heurísticas, não comparações experimentais.

## Parecer final
**Revisão documental concluída.** Taxonomia e morfologia conferidas; exposição solar padronizada; receita principal totaliza 100%, com duas alternativas distintas; um produtor brasileiro verificado com recomendações qualitativas. **Homologação experimental específica dos percentuais: NÃO DEMONSTRADA.**
