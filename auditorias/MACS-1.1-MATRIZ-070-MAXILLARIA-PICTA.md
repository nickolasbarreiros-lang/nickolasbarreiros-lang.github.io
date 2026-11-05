# MACS 1.1 — Matriz 070: Maxillaria picta

**Data:** 2026-11-03  
**Ficha:** `dados/orquideas/maxillaria-picta.js`  
**Parecer:** **REVISÃO DOCUMENTAL CONCLUÍDA; RECEITA PRINCIPAL COM EVIDÊNCIA EXPERIMENTAL DIRETA PARA A ESPÉCIE, SOB CONDIÇÕES DEFINIDAS**.

## Identidade botânica
- [POWO/Kew — Maxillaria picta](https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:30156984-2): nome aceito; **Brasiliorchis picta** é sinônimo; epífita ou litófita do Sul e Sudeste do Brasil, Paraguai e nordeste da Argentina.
- [Orquídeas Gaúchas — Brasiliorchis picta](https://www.orquideasgauchas.net/P_desc_especie.php?cod_especie=87): pseudobulbos ovoides, sulcados e **bifoliados**, flores basais solitárias, perfumadas, creme-amareladas com máculas castanho-avermelhadas. Fonte morfológica, não ensaio.
- `descricao`, `caracteristicas` e `regiao` ajustados para apresentar morfologia, flores e distribuição sem manejo na apresentação.

## Ensaio científico específico — fundamento principal
**Faria, R. T.; Rego, L. V.; Bernardi, A.; Molinari, H. (2001).** [Performance of Differents Genotyps of Brazilian Orchid Cultivation in Alternatives Substrates. Brazilian Archives of Biology and Technology 44(4). DOI 10.1590/S1516-89132001000400003](https://www.scielo.br/j/babt/a/MPNPpRfqnfBshnY6ZTrSBKf/?lang=en).

- **Espécies testadas:** *Maxillaria picta* e *Oncidium baueri*; os resultados para uma espécie não são automaticamente transferíveis à outra.
- **Desenho:** 13 tratamentos; blocos ao acaso; **10 repetições**; avaliação após **8 meses**.
- **Cultivo:** vasos cerâmicos perfurados, casa de vegetação com **50% de sombreamento**, irrigação ajustada à estação; adubação controlada.
- **Misturas combinadas:** componentes **1:1 em volume**, conforme métodos publicados.
- **Resultados para M. picta:** vermiculita + carvão e vermiculita + casca de arroz carbonizada apresentaram desempenho promissor como alternativas ao xaxim, em variáveis de crescimento e enraizamento. O xaxim também esteve entre os melhores tratamentos em alguns indicadores, mas sua extração implica problemas ambientais.
- **Limite:** estudo não estabelece que a mistura seja universalmente ideal para qualquer temperatura, granulometria, regime hídrico, estágio da planta ou vaso. Não é correto alegar 25 produtores brasileiros homologando a receita.

## Receita R0 — adotada no catálogo
| Material | Percentual em volume | Asset |
|---|---:|---|
| Vermiculita | 50% | `vermiculita` |
| Carvão vegetal | 50% | `carvao-vegetal` |
| **Total** | **100%** | **Mistura 1:1 ensaiada** |

**Grau de evidência:** **experimental direto, específico da espécie e contextualizado**. Não confundir com homologação comercial multicêntrica. Monitorar secagem e evitar compactação ou saturação, porque a vermiculita retém mais água que a mistura anterior.

## Duas alternativas no menu
1. **Vermiculita + casca de arroz carbonizada (1:1 em volume)** — também ensaiada diretamente por Faria et al. (2001), com resultados favoráveis.
2. **Casca de pinus média + perlita grossa + carvão vegetal** — alternativa horticultural **sem ensaio específico da composição**; não atribuir desempenho ao artigo.

São distintas entre si e da R0. A primeira tem proporção publicada; a segunda não recebe percentuais inventados.

## Assets e coerência visual
- Criado `imagens/cultivo-v4/vermiculita.svg` como **asset específico de vermiculita**.
- Registrada a chave `vermiculita` em `js/biblioteca-cultivo-v4.js`.
- Chave de carvão utilizada: `carvao-vegetal`, já existente na biblioteca.
- A existência do arquivo SVG e da entrada na biblioteca é confirmada pelos commits; **não houve teste em navegador do carregamento renderizado**.
- `substratoVisual.receitaTexto` e `itens`: **50 + 50 = 100%**.
- `substrato`: exatamente duas alternativas; uma experimental e outra hipótese.
- `comportamento` e `perfil` ajustados para não caracterizar erroneamente vermiculita como substrato de secagem extremamente rápida.
- Campo concorrente `macs1_0.substrato.percentuais`: ausente.

## Produtores brasileiros e metodologia
**Produtores comerciais brasileiros com receitas percentuais específicas confirmadas nesta passagem: 0.** Existe **um ensaio acadêmico brasileiro diretamente aplicável à espécie**. O estudo não deve ser contado como 25 orquidários ou como consenso comercial.

## Parecer final
**Revisão documental concluída com avanço de evidência:** a receita principal agora é uma **mistura efetivamente testada na espécie**, em condições de casa de vegetação explicitadas. Uma alternativa também é experimentalmente fundamentada. Generalização climática e homologação multicêntrica **não demonstradas**.

## Perfil radicular e hídrico — revisão de 2026-11-04
**Perfil:** epífita ou litófita pseudobulbosa, com touceiras densas e pseudobulbos sulcados geralmente bifoliados. Raízes requerem aeração, umidade durante crescimento e secagem parcial entre irrigações; no frio, ajustar a rega à evaporação real, sem repouso seco severo. A vermiculita retém água e requer atenção à compactação e à oxigenação do centro do vaso. Não extrapolar o resultado do ensaio a todos os climas e granulometrias.

**Cultivo principal:** vaso de barro pequeno e perfurado, conforme condições experimentais descritas por Faria et al. (2001). **Receita em volume:** 50% vermiculita (retenção) + 50% carvão vegetal (estrutura e aeração), total 100%, proporção 1:1. Esta é uma formulação efetivamente testada em Maxillaria picta, com 13 tratamentos, 10 repetições e avaliação aos oito meses; os resultados são específicos às condições do ensaio e não homologação universal.

**Duas alternativas qualitativas no menu, sem percentuais visuais:** (1) vermiculita + casca de arroz carbonizada — combinação também ensaiada por Faria et al. (2001), com proporção experimental 1:1 documentada na matriz, sem necessidade de impor percentual no menu de alternativas; (2) casca de pinus média + perlita grossa + carvão vegetal — hipótese horticultural sem ensaio específico dessa composição. As alternativas são distintas entre si e da receita principal; apenas a primeira possui evidência experimental direta.

**Conferências editoriais:** descrição com 99 palavras, dentro da faixa 90–120. Campos internos de nome aceito, sinônimo, distribuição e morfologia atualizados, substituindo texto truncado. Corrigida a recomendação regional contraditória de mistura mais mineral, incompatível com a receita principal de vermiculita; retirada menção a cidade específica; selo de rega ajustado para moderada/reduzir-inverno, coerente com a secagem parcial e ajuste sazonal, sem impor repouso seco. Receita e itens visuais somam 50+50=100%; quatro caminhos de fotos cadastrados; IDC 42/100 e três estrelas coerentes com IDC 3.2; IAR e avaliações de suportes preservados. Testes visuais e carregamento de fotos reservados para auditoria final com ZIP, conforme decisão do responsável.

**Parecer:** revisão científica/editorial documental concluída. **Evidência experimental direta específica da espécie** para a mistura 1:1 de vermiculita e carvão, e para uma alternativa 1:1 com casca de arroz carbonizada, sob condições definidas. Zero receitas percentuais específicas de produtores comerciais brasileiros verificadas; meta de 25 não atingida. Não há demonstração de homologação multicêntrica ou universal.
