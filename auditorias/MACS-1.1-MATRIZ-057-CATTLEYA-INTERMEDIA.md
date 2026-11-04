# MACS 1.1 — Matriz 057: Cattleya intermedia

**Data:** 2026-11-03  
**Ficha:** `dados/orquideas/cattleya-intermedia.js`  
**Status:** **REVISÃO DOCUMENTAL CONCLUÍDA; EVIDÊNCIA EXPERIMENTAL RESTRITA À FASE JUVENIL**.

## Identidade e habitat
*Cattleya intermedia* é uma Cattleya bifoliada epífita da América do Sul, com ampla diversidade floral e adaptação a ambientes costeiros e florestas sazonais. Não usar rusticidade da espécie como justificativa para umidade radicular permanente ou para presumir que toda mistura seja equivalente.

## Evidência quantitativa específica
1. **Lone et al. (2008)** — DOI [10.4025/actasciagron.v30i4.5299](https://doi.org/10.4025/actasciagron.v30i4.5299): experimento de aclimatização de **plântulas de Cattleya intermedia**, com fibra de coco e mistura 1:1 de pinus e coco entre alternativas promissoras. **A unidade experimental são plantas jovens, não touceiras adultas em cachepô.**
2. **Schnitzer et al. (2010)** — DOI [10.4025/actasciagron.v32i1.714](https://doi.org/10.4025/actasciagron.v32i1.714): outros substratos e tratamentos na fase juvenil, incluindo tratamento experimental com extrato pirolenhoso; **não recomendar aplicação doméstica desse extrato** nem apresentar os resultados como homologação para adultos.
3. **Dorneles e Trevelin**, citados na ficha: referência adicional sobre aclimatização em esfagno e pinus; sem extrapolação de desempenho para adultos.

## Receita R0 visual para recipiente
| Componente | Percentual | Função |
|---|---:|---|
| Casca de pinus média | 50% | Estrutura e aeração |
| Fibra de coco preparada para cultivo | 50% | Retenção hídrica |
| **Total** | **100%** | Mistura 1:1 em volume |

**Classificação da evidência:** proporção estudada experimentalmente **na aclimatização de plântulas da própria espécie**; uso dessa mesma receita em **plantas adultas é hipótese técnica/extrapolação**, não homologação experimental para adultos. Preparar fibra de coco para cultivo, sem excesso de sais, e controlar a secagem conforme recipiente, clima e tamanho radicular. A fórmula anterior com macadâmia/perlita/carvão não foi a receita testada nesses estudos.

## Duas alternativas qualitativas
1. Casca de pinus média + carvão vegetal + casca de arroz carbonizada.
2. Casca de pinus média + chips de coco médios preparados + carvão vegetal.

Ambas diferem entre si e da R0. **Não atribuir percentuais nem resultados experimentais específicos para adultos** às alternativas.

## Produtores e limite de homologação
A documentação pré-existente não demonstra consulta independente a **25 produtores brasileiros** com receitas percentuais específicas para plantas adultas de C. intermedia. **Total confirmado de receitas quantitativas de produtores para adultos nesta passagem: 0**. Não confundir artigos experimentais sobre plântulas com uma amostra de produtores comerciais. A existência de pesquisa experimental específica da espécie não elimina a distinção de fase de desenvolvimento.

## Verificações de consistência
- `substratoVisual.receitaTexto` e `substratoVisual.itens`: **50 + 50 = 100%**.
- `substrato`: **exatamente duas** alternativas qualitativas distintas.
- `macs1_0.substrato.percentuais`: campo concorrente ausente na ficha.
- `substratoVisual.resumo`, `justificativa` e `notaEvidencia` corrigidos para explicitar **plântulas versus adultas**.
- Assets de ingredientes na ficha: `casca-pinus` e `fibra-coco`. Não foi executado teste visual de carregamento de arquivos nesta passagem; não declarar validação de imagem.
- Não alterar estrelas ou índices por analogia ou por resultados limitados à fase juvenil.

## Parecer final
**Revisão documental concluída.** Receita R0 possui evidência quantitativa específica para plântulas, **não** para plantas adultas. Duas alternativas qualitativas distintas e 100% de coerência aritmética. Homologação experimental da R0 para plantas adultas: **NÃO DEMONSTRADA**. Experimentos futuros seriam pesquisa nova, não pendência editorial.
