# MACS 1.1 — Matriz 052: Dryadella lilliputiana

**Data:** 2026-11-03  
**Ficha:** `dados/orquideas/dryadella-liliputiana.js` (ID histórico `dryadella-liliputiana` mantido por compatibilidade)  
**Resultado:** **REVISÃO DOCUMENTAL CONCLUÍDA COM RECEITA ESPECÍFICA DE CULTIVO NÃO EXPERIMENTAL**. Não declarar homologação experimental.

## Identidade e ecologia
- [POWO/Kew — Dryadella lilliputiana](https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:84214-2): nome aceito, epífita de Bolívia e regiões sul e sudeste do Brasil, em bioma tropical sazonalmente seco; sinônimos incluem `Masdevallia lilliputiana`, `D. melloi` e `D. paranaensis`. Não confundir bioma do Kew com exigência de secagem completa em cultivo.
- [World Flora Online — Dryadella lilliputiana](https://www.worldfloraonline.org/taxon/wfo-0000946269): confirma hábito epífito e dados morfológicos da Flora do Brasil.
- [Imig, de Brito & Smidt (2024), The genus Dryadella in Brazil](https://repositorio.unesp.br/entities/publication/4de384f3-3d11-4d80-9128-e8ae08fe3b69): revisão taxonômica primária confirma espécie brasileira também registrada na Bolívia; não é ensaio de substrato.
- [IOSPE via Orchids.org — Dryadella lilliputiana](https://orchids.herokuapp.com/grexes/dryadella-lilliputiana): miniatura epífita cespitosa, sem pseudobulbos, flores ~1 cm, altitudes 700–1700 m em registros descritos, floração de inverno; dados de ocorrência não comprovam uma faixa ótima universal.

## Evidência específica de cultivo brasileira
1. [Orquidário Matsuoka — Dryadella lilliputiana](https://orquidariomatsuoka.com.br/produto/dryadella-lilliputiana/): **1 produtor/fornecedor comercial da espécie exata**. Informa cultivo em substrato de orquídea ou toco e **envio em toco**; não informa proporção percentual de substrato. **A página contém texto de origem geográfica genérico e incompatível com o Kew para a espécie** (México/Caribe); descartar essa alegação e seguir Kew para distribuição.
2. [Orquídeas Encanto e Paixão — Dryadella liliputiana, 2018](https://orquideasjph.wordpress.com/2018/12/09/dryadella-liliputiana/): **1 blog brasileiro de orientação de cultivo**, não identificado como produtor comercial independente. Recomenda **placa com pouco esfagno**, ou **vaso raso com partes iguais de casca de pinus, carvão vegetal e esfagno**; enfatiza ventilação e drenagem. **É uma recomendação horticultural específica publicada, não ensaio comparativo.**

**Cobertura efetiva:** 1 fornecedor comercial da espécie e 1 blog de cultivo com receita 1:1:1; **0 produtores comerciais com proporções específicas demonstradas**. Não apresentar como 2 produtores com receitas. Meta de até 25 produtores independentes **não atingida**; não inventar consultas.

## Cultivo principal
**Placa/tronco**, com pouco esfagno junto às raízes, é coerente com hábito epífito e é apoiado tanto pelo fornecedor que envia em toco quanto pelo blog que recomenda galhos/cascas. Rega e ventilação devem equilibrar hidratação com oxigenação; calor noturno persistente aumenta o risco em região quente.

## Receita quantitativa R0 para vaso miniatura raso
O blog recomenda **1:1:1 em partes iguais**, sem especificar método experimental. Para apresentar percentuais inteiros em décimos e totalizar 100%, a ficha registra:

| Ingrediente | Percentual exibido | Parte na receita publicada |
|---|---:|---:|
| Casca de pinus fina | 33,3% | 1 |
| Carvão vegetal pequeno | 33,3% | 1 |
| Esfagno de fibra longa solto | 33,4% | 1 |
| **Total** | **100,0%** | **3 partes iguais** |

**Observação matemática:** os 33,4% do esfagno são exclusivamente **arredondamento de apresentação** para fechar 100,0%; **não** representam 0,1 ponto percentual adicional prescrito pelo autor. Na preparação, medir **volumes iguais** de cada ingrediente, sem compactar esfagno.

**Grau de evidência:** recomendação quantitativa **específica de blog de cultivo**, acima de inferência puramente editorial, porém **não homologada experimentalmente**. Não afirmar proporção ótima ou resultado comparativo de produtores.

## Exatamente duas alternativas qualitativas
1. Casca de pinus fina + perlita de granulometria adequada a miniaturas + esfagno de fibra longa solto.
2. Chips de coco pequenos preparados + casca de pinus fina + perlita de granulometria adequada a miniaturas.

Ambas são distintas da principal e entre si, sem percentuais inventados. A primeira substitui carvão por perlita; a segunda substitui carvão e esfagno por coco preparado e perlita. Não são receitas específicas comprovadas para a espécie.

## Verificação editorial e de assets
- A ficha usa `casca-pinus`, `carvao-vegetal`, `esfagno`, `placa-tronco`, `vaso-barro`, `cesto-madeira`, `vaso-plastico-vasado`; chaves de material/suporte cadastradas no registro `js/biblioteca-cultivo-v4.js`. Verificação de chaves não substitui teste de imagem carregada.
- `substratoVisual.itens` soma 33,3 + 33,3 + 33,4 = 100%, alinhado com `receitaTexto`.
- `substrato` contém exatamente duas alternativas, ambas sem proporções.
- Não existe campo `macs1_0.substrato.percentuais` concorrente nesta ficha.
- Foi corrigida a atribuição da receita: **blog de cultivo ≠ produtor comercial**. Preservados índices, estrelas e demais classificações sem evidência para recalcular.

## Parecer final
**Revisão documental concluída.** A receita principal possui referência brasileira específica, mas apenas como **recomendação de cultivo**, não como ensaio controlado. Cultivo principal em placa é apoiado por duas fontes específicas de natureza distinta. Não há pendências editoriais identificadas nesta matriz; eventuais ensaios de desempenho seriam nova pesquisa experimental, não auditoria editorial adiada.
