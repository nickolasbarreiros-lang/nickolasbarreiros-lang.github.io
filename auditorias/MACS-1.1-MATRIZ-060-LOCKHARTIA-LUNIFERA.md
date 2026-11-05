# MACS 1.1 — Matriz 060: Lockhartia lunifera

**Data:** 2026-11-03  
**Ficha:** `dados/orquideas/lockhartia-lunifera.js`  
**Parecer:** **REVISÃO DOCUMENTAL CONCLUÍDA; RECEITA QUANTITATIVA DE CULTIVADOR, SEM HOMOLOGAÇÃO EXPERIMENTAL**.

## Taxonomia e morfologia
- [POWO/Kew — Lockhartia lunifera](https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:641725-1): espécie aceita, nativa do Brasil, epífita; `Fernandezia lunifera` é sinônimo.
- [Hoehnea/Scielo — Orchidaceae em fragmento de Floresta Semidecídua](https://www.scielo.br/j/hoehnea/a/WSxwFWtMWhZMNkjBJnmCqyp/?lang=pt): caules sem pseudobulbos de 16,2–21,8 cm nos exemplares estudados; folhas dísticas e imbricadas; flores amareladas com manchas castanhas no labelo, **aproximadamente 1 cm**, inflorescências laterais geralmente unifloras; ocorrência sobre árvores, inclusive próximas a cursos de água.
- O texto anterior informava flores de 2 cm sem delimitar variação. A `descricao` foi reescrita com tamanho aproximado de 1 cm **na amostra publicada**, sem generalizar tamanho máximo da espécie.

## Cultivo principal
- [American Orchid Society — Lockhartia](https://www.aos.org/explore/lockhartia): recomenda placas pequenas, temperaturas intermediárias, luz clara e regas regulares durante o ano, permitindo que as raízes sequem entre molhamentos. **Orientação de gênero**, não ensaio da espécie.
- Placa/tronco é a opção principal da ficha. Mistura volumétrica ilustrada é **alternativa para cesto ou vaso raso ventilado**, não deve ser confundida com o suporte principal.

## Receita R0 — fonte quantitativa específica
[Orquídeas Encanto e Paixão — Lockhartia lunifera](https://orquideasjph.wordpress.com/2020/02/23/lockhartia-lunifera-2/) publica expressamente uma mistura de **partes iguais de casca de pinus, carvão vegetal e esfagno** para recipiente raso. **É relato de cultivador/blog brasileiro, não ensaio comparativo e não produtor comercial homologador**.

| Ingrediente | Percentual apresentado | Proporção real |
|---|---:|---|
| Casca de pinus média | 33,3% | 1 parte |
| Carvão vegetal | 33,3% | 1 parte |
| Esfagno de fibra longa solto | 33,4% | 1 parte |
| **Total** | **100%** | **1:1:1 em volume** |

A diferença de 0,1 ponto percentual do esfagno **decorre exclusivamente de arredondamento**, não de maior dose real. Esfagno deve permanecer solto, com ventilação, sem saturação persistente.

## Duas alternativas qualitativas
1. Casca de pinus média + carvão vegetal + fragmentos de madeira.
2. Casca de pinus média + carvão vegetal + chips de coco grossos preparados.

Ambas diferem da R0 e entre si. Não atribuir percentuais não publicados nem alegar superioridade experimental.

## Produtores e cobertura
- [Orquidário Maripá — Lockhartia lunifera](https://www.orquidariomaripa.com.br/produtos/orquidea-lockhartia-lunifera-adulta-mini-orquidea/): espécie específica, substrato qualitativo de cascas, carvão, madeira e esfagno; sem percentuais.
- [Orquídeas & Cia — Lockhartia lunifera](https://www.orquideacia.com.br/lockhartia-lunifera): espécie identificada em catálogo comercial; descrição não estabelece proporções quantitativas.
- A ficha também menciona Orquidário Paulista, mas **não houve confirmação independente da respectiva página nesta passagem**.
- **Produtores brasileiros com receita quantitativa 1:1:1 específica confirmada: 0**; **relatos de cultivadores brasileiros com receita quantitativa específica: 1** (Orquídeas Encanto e Paixão). Não somar categorias heterogêneas como 25 homologações; meta 25 não atingida.

## Consistência e assets
- `substratoVisual.receitaTexto` e `substratoVisual.itens`: **33,3 + 33,3 + 33,4 = 100%**.
- `substrato`: exatamente **duas alternativas qualitativas distintas**.
- `macs1_0.substrato.percentuais`: ausente.
- Asset do carvão alterado de `carvao` para a chave padronizada `carvao-vegetal`; ambas as chaves foram localizadas no código de `js/biblioteca-cultivo-v4.js`, mas a padronização editorial favorece a segunda.
- Assets da receita: `casca-pinus`, `carvao-vegetal`, `esfagno` localizados no registro; **não foi realizado teste de carregamento visual de imagens**.
- Estrelas e escores de métodos permanecem heurísticos, não rankings experimentais.

## Parecer final
**Revisão documental encerrada.** Taxonomia e dimensão floral verificadas; receita 1:1:1 específica rastreada até relato de cultivador, soma 100%; alternativas distintas; asset de carvão padronizado. **Homologação experimental específica: NÃO DEMONSTRADA.** Meta de 25 produtores com receitas quantitativas não atingida.

## Perfil radicular e hídrico — revisão de 2026-11-04
**Perfil:** epífita de caules imbricados, sem pseudobulbos de reserva, com raízes dependentes de umidade frequente, mas ventiladas e capazes de secar entre molhamentos. A disposição das folhas pode reter água nas bainhas; favorecer escoamento e evitar noites frias com caules persistentemente molhados. A espessura radicular e os intervalos de secagem ideais para um exemplar específico não foram medidos.

**Cultivo principal:** placa/tronco inclinado ou suspenso, com raízes expostas e regas ajustadas à secagem; **não se aplica mistura volumétrica sobre a placa**. **Receita para cesto ou vaso raso:** partes iguais em volume de casca de pinus média (estrutura), carvão vegetal (aeração) e esfagno de fibra longa solto (reserva de umidade), apresentados como 33,3% + 33,3% + 33,4% = 100%, com décimo adicional exclusivamente por arredondamento. Proporção específica de relato brasileiro de cultivador, sem ensaio comparativo.

**Duas alternativas qualitativas sem percentuais:** (1) casca de pinus média + carvão vegetal + fragmentos de madeira; (2) casca de pinus média + carvão vegetal + chips de coco grossos lavados. Padronizada nomenclatura dos chips; não confundir com esfagno da receita principal nem atribuir validação quantitativa às alternativas.

**Conferências editoriais:** descrição com 110 palavras, dentro da faixa 90–120. Corrigida divergência na seção de floração: inflorescências geralmente unifloras e flores de aproximadamente 1 cm nos exemplares publicados em Hoehnea, sem generalizar o tamanho a todos os exemplares. Corrigida frase regional incompleta 'Ao litoral quente quando...'. Nota de evidência ajustada para não apresentar Orquidário Paulista como consulta independentemente reconfirmada. Receita e itens visuais somam 100%; quatro caminhos fotográficos cadastrados; IDC 38/100 e três estrelas coerentes com IDC 3.2; IAR e suportes preservados. Carregamento de fotos e testes visuais reservados para auditoria final com ZIP, conforme decisão do responsável.

**Parecer:** revisão científica/editorial documental concluída dentro da evidência disponível; uma receita quantitativa de cultivador específico, **zero receitas quantitativas de produtores comerciais verificadas**, meta de 25 não atingida e homologação experimental não demonstrada.
