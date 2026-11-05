# MACS 1.1 — Matriz 075: Miltonia regnellii

**Data:** 2026-11-03  
**Ficha:** `dados/orquideas/miltonia-regnellii.js`  
**Parecer:** **REVISÃO DOCUMENTAL CONCLUÍDA; RECEITA QUANTITATIVA ESPECÍFICA DOCUMENTADA POR FONTE HORTICULTURAL BRASILEIRA, SEM ENSAIO EXPERIMENTAL DA ESPÉCIE PURA**.

## Taxonomia e morfologia
- [POWO/Kew — Miltonia regnellii](https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:644765-1): nome aceito, sinônimo homotípico **Oncidium regnellii**, epífita pseudobulbosa nativa do Sul e Sudeste do Brasil.
- [Jardineiro.net — Violetinha-das-árvores](https://www.jardineiro.net/plantas/violetinha-das-arvores-miltonia-regnellii.html), Julio Cesar Zanatta, atualizado em 27/06/2026: pseudobulbos comprimidos, inflorescências arqueadas com 3–10 flores perfumadas de 5–7,5 cm, formas típicas claras com labelo rosado/púrpura e variedades alba e citrina.
- `descricao` reescrita para destacar morfologia, flores, perfume e distribuição sem introduzir manejo na apresentação.

## Receita principal R0 — fonte quantitativa específica
**Julio Cesar Zanatta (Jardineiro.net)** recomenda explicitamente, para **Miltonia regnellii**, mistura de **partes iguais de casca de pinus, esfagno e carvão vegetal**. A fonte é orientação horticultural publicada, **não ensaio comparativo controlado**.

| Material | Proporção em volume | Asset |
|---|---:|---|
| Casca de pinus média | 1/3 | `casca-pinus` |
| Esfagno de fibra longa solto | 1/3 | `esfagno` |
| Carvão vegetal | 1/3 | `carvao-vegetal` |
| **Total** | **3/3 = 100%** | **Recomendação horticultural específica** |

**Aritmética:** 1/3 + 1/3 + 1/3 = 1. O valor aproximado de 33,3% por material não deve ser somado como 99,9% para inferir falha. Esfagno deve permanecer solto e não compactado, e a frequência de rega deve considerar sua retenção hídrica.

## Estudo acadêmico encontrado — NÃO CONFUNDIR COM A ESPÉCIE
[Yamamoto et al. (2009), Semina: Ciências Agrárias, DOI 10.5433/1679-0359.2009v30n4Sup1p1035](https://ojs.uel.br/revistas/uel/index.php/semagrarias/article/view/4639), **Substratos alternativos ao xaxim no cultivo do híbrido primário Miltonia regnellii × Oncidium concolor**:
- **Material testado:** mudas do **híbrido primário**, não exemplares de *Miltonia regnellii* pura.
- **Método:** 7 substratos, 10 plantas por tratamento, 12 meses, vasos de polipropileno, 60% sombreamento.
- **Resultados:** quase todas as alternativas estudadas, exceto bagaço de cana + esfagno, foram utilizáveis como substitutas ao xaxim **para o híbrido**.
- **Conclusão de atribuição:** não transferir resultados automaticamente à espécie pura e não afirmar que o estudo valida a receita 1:1:1 de pinus, esfagno e carvão.

## Duas alternativas qualitativas
1. Casca de pinus média + chips de coco preparados + perlita grossa.
2. Casca de macadâmia média + casca de pinus média + pequena fração de esfagno solto.

São distintas entre si e da R0; não possuem percentuais publicados para a espécie.

## Abrangência de fontes brasileiras
- Orientações brasileiras quantitativas específicas para *M. regnellii* confirmadas nesta passagem: **1 (Jardineiro.net)**.
- Ensaios quantitativos da receita 1:1:1 para *M. regnellii* pura identificados: **0**.
- Meta de até 25 produtores: **não atingida**. Jardineiro.net é portal editorial horticultural, **não deve ser contado como orquidário produtor**.

## Verificação editorial
- `substratoVisual.receitaTexto` e `itens`: **1/3 + 1/3 + 1/3 = 100%**.
- `substrato`: **duas alternativas qualitativas distintas**.
- Campo concorrente `macs1_0.substrato.percentuais`: ausente.
- Assets `casca-pinus`, `esfagno`, `carvao-vegetal` **confirmados como chaves existentes** em `js/biblioteca-cultivo-v4.js`; não foi realizado teste de carregamento de imagem no navegador.
- Indicadores de retenção, aeração e secagem revistos para considerar esfagno.
- Estrelas de recipientes permanecem heurísticas, sem experimento comparativo.

## Parecer final
**Revisão documental concluída.** A receita antes estimada foi substituída por **recomendação quantitativa horticultural específica da espécie** e alinhada ao visual. O artigo acadêmico encontrado é sobre **híbrido**, não prova da mistura na espécie pura. **Homologação experimental da receita principal: NÃO DEMONSTRADA.**

## Perfil radicular e hídrico — revisão de 2026-11-04
**Perfil:** epífita simpodial com pseudobulbos achatados e raízes relativamente finas. Durante emissão de folhas e pseudobulbos, precisa de umidade regular sem saturação contínua; folhas sanfonadas podem refletir estresse hídrico, mas devem motivar inspeção das raízes antes de aumentar a rega. Após maturação, reduzir discretamente a frequência conforme a secagem, sem impor repouso seco. Esfagno solto conserva água e exige atenção à oxigenação do centro do vaso.

**Cultivo principal:** vaso plástico vasado pequeno, proporcional à touceira. **Receita em volume:** 1/3 casca de pinus média + 1/3 esfagno de fibra longa solto + 1/3 carvão vegetal, total exato 3/3=100%. Orientação quantitativa horticultural específica para Miltonia regnellii publicada por Julio Cesar Zanatta (Jardineiro.net, 27/06/2026), mas não ensaio experimental da espécie pura. O estudo Yamamoto et al. (2009) investigou mudas do híbrido Miltonia regnellii × Oncidium concolor e não valida esta receita.

**Duas alternativas qualitativas sem percentuais:** (1) casca de pinus média + chips de coco médios lavados + perlita grossa; (2) casca de macadâmia média + casca de pinus média + pequena fração de esfagno solto. Distintas entre si e da receita principal; não se atribuem percentuais experimentais às alternativas.

**Conferências editoriais:** descrição com 92 palavras (faixa 90–120). Corrigidos campos taxonômicos, distribuição e morfologia interna truncada; chips de coco médios lavados na primeira alternativa. Receita visual agora explicita a natureza horticultural específica sem validação experimental para a espécie pura. Selo hídrico alterado de “frequente/reduzir-repouso” para “frequente/reduzir-inverno”, em concordância com a rega regular e ajuste sazonal sem repouso seco. Receita e itens visuais exibem três frações de 1/3, soma exata 100%; quatro caminhos de fotos cadastrados; IDC 30/100 e quatro estrelas coerentes com IDC 3.2; IAR e estrelas dos suportes preservados. Testes visuais e carregamento de fotos reservados para auditoria final com ZIP, conforme decisão do responsável.

**Parecer:** revisão científica/editorial documental concluída dentro das fontes disponíveis; uma orientação quantitativa horticultural específica publicada, **zero ensaios específicos da espécie pura para a receita**, e zero produtores brasileiros com fórmula percentual específica confirmados (Jardineiro.net é portal editorial, não produtor). Meta de 25 produtores não atingida; **homologação experimental não demonstrada**.
