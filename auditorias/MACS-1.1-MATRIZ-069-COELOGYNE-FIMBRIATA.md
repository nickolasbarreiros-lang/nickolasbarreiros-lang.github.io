# MACS 1.1 — Matriz 069: Coelogyne fimbriata

**Data:** 2026-11-03  
**Ficha:** `dados/orquideas/coelogyne-fimbriata.js`  
**Parecer:** **REVISÃO DOCUMENTAL CONCLUÍDA; ADAPTAÇÃO DE RECEITA GENÉRICA NÃO HOMOLOGADA PARA A ESPÉCIE**.

## Identidade e morfologia
- [POWO/Kew — Coelogyne fimbriata](https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:623858-1): nome aceito, `Pleione fimbriata` é sinônimo homotípico; epífita pseudobulbosa nativa do Nepal ao sul da China e à Indochina, em bioma tropical úmido.
- [India Flora Online — Coelogyne fimbriata](https://indiaflora-ces.iisc.ac.in/herbsheet.php?cat=13&id=13321): hábito epífito, pseudobulbos oblongos e flores amarelas; fonte descritiva, não experimento de substrato.
- `descricao` reescrita para destacar rizoma rastejante, pseudobulbos bifoliados, pequenas flores verde-amareladas e labelo franjado, sem misturar manejo à apresentação da espécie.

## Receita R0 — recipiente raso/cesto
A [American Orchid Society — Coelogyne Culture Sheet](https://www.aos.org/orchid-care/care-sheets/coelogyne-culture-sheet) recomenda, **para o gênero**, mistura de **3 partes de casca de abeto (fir bark) e 1 parte de perlita**. A ficha substitui **abeto por pinus**, que é **adaptação de material** e não transcrição literal da AOS nem ensaio para *C. fimbriata*.

| Material da ficha | Percentual | Função |
|---|---:|---|
| Casca de pinus média | 75% | Estrutura |
| Perlita grossa | 25% | Aeração |
| **Total** | **100%** | **3:1 em volume, adaptação não homologada** |

A mistura não deve ser aplicada como volume em placa/tronco: nesse suporte a planta é fixada com retenção localizada se necessário. Rizoma rastejante pede espaço lateral, mas não há comparação experimental entre suportes.

## Duas alternativas qualitativas
1. Casca de pinus média + chips de coco médios preparados + perlita grossa.
2. Casca de pinus média + perlita grossa + esfagno de fibra longa solto.

Alternativas distintas entre si e da R0, sem proporções específicas publicadas.

## Fonte brasileira e abrangência
[Orquidário Mantovani — Coelogyne fimbriata](https://www.orquideasmantovani.com.br/coelogyne-fimbriata-103/p): fornecedor brasileiro com página específica para a espécie, indicando local sombreado e possibilidade de replantio em madeira, vasos ou cachepô. **Não informa percentuais nem comparação de suportes**.

- Produtores brasileiros com página específica e orientação geral identificados nesta passagem: **1**.
- Produtores brasileiros com receita quantitativa específica confirmada: **0**.
- Meta de até 25 produtores com receita específica: **não atingida**.

## Conferência editorial
- `substratoVisual.receitaTexto` e `substratoVisual.itens`: **75 + 25 = 100%**.
- `substrato`: **exatamente duas alternativas qualitativas distintas**.
- Campo concorrente `macs1_0.substrato.percentuais`: ausente.
- Assets declarados: `casca-pinus`, `perlita`. **Não foi executado teste visual de carregamento dos arquivos**.
- Estrelas de suportes permanecem heurísticas, não resultados de comparação experimental.
- `descricao`, `justificativa`, `receitaTexto` e `notaEvidencia` atualizadas para explicitar adaptação **abeto → pinus** e a referência brasileira.

## Parecer final
**Revisão documental concluída.** Identidade confirmada; receita consistente em 100%; duas alternativas distintas; adaptação de casca de abeto para pinus claramente identificada; um fornecedor brasileiro localizado sem receita percentual. **Homologação experimental específica de *C. fimbriata*: NÃO DEMONSTRADA.**
