# MACS 1.1 — Matriz 050: Dryadella aviceps

**Data:** 2026-11-03  
**Ficha:** `dados/orquideas/dryadella-aviceps.js`  
**Status:** **REVISÃO DOCUMENTAL CONCLUÍDA COM RESSALVA QUANTITATIVA**; não há homologação experimental específica. Não deixar inconsistências editoriais identificadas para outra auditoria.

## Identificação e ecologia
- [POWO/Kew — Dryadella aviceps](https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:84203-2): nome aceito; nativa de regiões do Brasil e Paraguai, com ampla sinonímia.
- [Imig, de Brito & Smidt, 2024 — The genus Dryadella (Orchidaceae, Pleurothallidinae) in Brazil](https://www.scielo.br/scielo.php?lng=en&pid=S2175-78602024000100213&script=sci_arttext&tlng=en): revisão taxonômica primária que documenta populações esparsas de D. aviceps em florestas abertas e sazonais e restingas arbóreas; reconhece sinônimos D. espirito-santensis, D. gomes-ferreirae e D. litoralis. Não contém ensaio de substrato.
- [Imig, Engels & Smidt, 2025 — Novos sinônimos em Dryadella](https://revistas.ufpr.br/acta/article/view/98025): acrescenta D. storchiana como sinônimo de D. aviceps; não contém recomendação quantitativa de cultivo.
- [UNESP — trabalho sobre substratos e orquidário do IBB](https://repositorio.unesp.br/server/api/core/bitstreams/2779b807-fd35-44ca-a9ac-51a6a299783e/content): registra D. aviceps em coleção de orquidário, sem proporção experimental específica da espécie.

## Evidência brasileira específica
- [Orquidário Oriental — Dryadella aviceps](https://www.orquidariooriental.com.br/produto/dryadella-avicepsbr-micro-orquidea%2C53907/): **1 fornecedor identificado da espécie exata**. Recomenda **amarrar em árvores ou placas**, bastante umidade e pouca luminosidade; descreve flor uniflora de 1–1,5 cm, não receita percentual para vaso.
- Não confundir D. aviceps com D. auriculigera, D. lilliputiana ou D. simula; recomendações de espécies diferentes não contam como ensaio da espécie em questão.
- **Cobertura efetiva demonstrada:** 1 fornecedor brasileiro da espécie, **0 receitas quantitativas específicas publicadas**. Meta de até 25 produtores independentes não atingida; não inventar amostra.

## Decisão de cultivo principal
**Placa/tronco** é opção documentalmente apoiada por fornecedor da espécie e coerente com hábito epífito. Exige umidade ambiental, ventilação e observação da secagem, sem sol direto. A ficha apresenta **mistura alternativa para vaso miniatura/cachepô** no painel `substratoVisual`; não confundir esse painel com a montagem preferencial.

## Matriz quantitativa R0 — cultivo em vaso
| Ingrediente | Percentual | Justificativa proposta |
|---|---:|---|
| Chips de coco **pequenos preparados** | 40% | Reserva hídrica moderada; material previamente preparado, não coco fresco/salino |
| Casca de pinus **fina** | 35% | Estrutura e macroporos para raízes finas |
| Perlita **calibrada para miniaturas** | 25% | Aeração e drenagem |
| **Total** | **100%** | Consistência aritmética |

**Grau de evidência:** **hipótese horticultural/editorial**, não receita publicada por Kew, autores da revisão taxonômica ou Orquidário Oriental. Não há teste comparativo ou demonstração de proporção ótima para D. aviceps. A soma 100% não equivale a homologação experimental.

**Duas alternativas qualitativas, distintas da principal:**
1. Esfagno de fibra longa solto + perlita de granulometria adequada a miniaturas.
2. Casca de pinus fina + perlita de granulometria adequada a miniaturas + esfagno de fibra longa solto.

Ambas diferem entre si (a segunda contém pinus) e da principal (ambas contêm esfagno, ausente da R0). Sem percentuais inventados.

## Correções efetuadas na ficha
- Removida contradição **“montagem principal com esfagno”** do contexto do painel: a receita R0 não contém esfagno e se aplica ao vaso, não à placa.
- Corrigida a afirmação falsa de que a receita visual era idêntica à primeira alternativa textual; são três composições diferentes.
- Padronizados **chips de coco pequenos preparados** e **perlita calibrada para miniaturas** em receita, itens e nota de evidência.
- Preservados o cultivo ideal em placa/tronco, índices e estrelas, sem alegar ensaio inexistente.

## Assets e verificações
- As chaves `placa-tronco`, `vaso-barro`, `cesto-madeira`, `vaso-plastico-vasado`, `chips-coco`, `casca-pinus` e `perlita` são usadas pela ficha. Verificar chaves no registro é diferente de comprovar carregamento de arquivos.
- `substratoVisual.itens`: 40 + 35 + 25 = 100%, alinhados com `receitaTexto`.
- Esta ficha não contém campo `macs1_0.substrato.percentuais` concorrente a sincronizar.
- Os ingredientes das duas alternativas não duplicam a receita principal.

## Parecer final
**Revisão documental concluída.** Há suporte específico para montagem em placa e suporte ecológico para ambiente sombreado e ventilado; a formulação quantitativa para vaso permanece uma **hipótese técnica não homologada experimentalmente**. Não converter documentação botânica, anúncio comercial ou consistência matemática em ensaio científico. Não há pendências editoriais identificadas nesta matriz; um futuro ensaio de crescimento radicular seria pesquisa experimental nova, não auditoria adiada.
