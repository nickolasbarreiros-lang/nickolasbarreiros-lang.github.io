# MACS 1.1 — Matriz 053: Leptotes unicolor

**Data:** 2026-11-03  
**Ficha:** `dados/orquideas/leptotes-unicolor.js`  
**Parecer:** **REVISÃO DOCUMENTAL CONCLUÍDA COM RESSALVA QUANTITATIVA**. A mistura percentual para recipiente é hipótese técnica, não homologação experimental.

## Taxonomia, morfologia e habitat
- [POWO/Kew — Leptotes unicolor](https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:640441-1): nome aceito de Barb.Rodr. (1877); epífita rizomatosa do Brasil, Paraguai e nordeste da Argentina, com sinônimo `Leptotes paranaensis`.
- [Orchidaceae in Iguaçu National Park (2024)](https://doi.org/10.1590/2175-7860202475064): registro florístico de `L. unicolor` em Mata Atlântica, com folhas aciculares suculentas e flores rosa-pálidas; sem receita de substrato.
- [American Orchid Society — Leptotes](https://www.aos.org/explore/leptotes): para o gênero, recomenda **placas pequenas**, regas frequentes e secagem das raízes entre regas; orientação de grupo, não proporção específica.
- [Orchids.org / IOSPE — Leptotes unicolor](https://orchids.herokuapp.com/grexes/leptotes-unicolor): miniatura epífita, folhas subcilíndricas, inflorescências pendentes com uma ou duas flores perfumadas, em torno de 2–2,4 cm. Dados de flor e estação podem variar com a procedência.

## Evidência de três produtores brasileiros da espécie exata
1. [Orquidário 4 Estações — Leptotes unicolor](https://www.orquidario4e.com.br/orquidea-leptotes-unicolor-adulta): prefere **placas de madeira**; registra sombreamento em torno de 70%, sem proporção de substrato. O sombreamento é orientação daquele fornecedor, não ensaio de lux.
2. [Orquidário Matsuoka — Leptotes unicolor](https://orquidariomatsuoka.com.br/produto/leptotes-unicolor-2/): recomenda substrato de orquídeas ou **toco de madeira**, informa envio em toco; sem receita quantitativa.
3. [Orquidário Hang — Leptotes unicolor](https://www.orquidariohang.com.br/especies/micro-orquidea/leptotes-unicolor): substrato **bem drenado**, sem fórmula; envio em **leque de madeira**. Informa flores médias de 4 cm, discrepantes das descrições botânicas de ~2–2,4 cm; **não utilizar esse tamanho comercial isolado para alterar morfologia**.

**Amostra comprovada:** **3 fornecedores brasileiros** da espécie exata com informações de cultivo, **0 receitas percentuais específicas**. A meta de até 25 produtores com receitas documentadas não foi atingida. Não simular 25 consultas nem alegar consenso quantitativo.

## Decisão de cultivo e receita R0
**Cultivo principal:** placa/tronco com boa ventilação, regas frequentes conforme secagem e luz alta filtrada; a recomendação de montagem tem suporte da AOS e de fornecedores específicos. A receita visual é **apenas para cestinho ou vaso mínimo**, não para cobrir raízes na placa.

| Ingrediente R0 para recipiente | Percentual | Função proposta |
|---|---:|---|
| Casca de macadâmia média | 35% | Estrutura e macroporos |
| Casca de pinus média | 30% | Fixação e alguma reserva hídrica |
| Perlita grossa | 20% | Aeração e drenagem |
| Carvão vegetal | 15% | Porosidade complementar |
| **Total** | **100%** | Coerência aritmética |

**Grau de evidência:** **hipótese técnica editorial**. Nenhum dos três produtores publica a combinação 35/30/20/15, nem há ensaio de desempenho específico da espécie. A soma de 100% **não demonstra eficácia nem superioridade**. Adaptar tamanho de recipiente e regas à secagem observada.

**Exatamente duas alternativas qualitativas:**
1. Casca de pinus média + carvão vegetal + perlita grossa.
2. Casca de pinus média + chips de coco grossos preparados + carvão vegetal.

A primeira exclui macadâmia; a segunda exclui macadâmia e perlita, incluindo coco preparado. São distintas entre si e da R0, sem percentuais inventados.

## Verificação de consistência e assets
- `substratoVisual.receitaTexto` e `substratoVisual.itens`: 35 + 30 + 20 + 15 = **100%**.
- A ficha não contém `macs1_0.substrato.percentuais` concorrente.
- Chaves presentes no registro `js/biblioteca-cultivo-v4.js`: `placa-tronco`, `cesto-madeira`, `vaso-plastico-vasado`, `vaso-barro`, `casca-macadamia`, `casca-pinus`, `perlita`, `carvao`. O registro também possui `carvao-vegetal`; `carvao` é uma chave válida e não precisa ser trocada apenas por nomenclatura. Chave cadastrada não comprova carregamento físico de imagem.
- A ficha foi atualizada para explicitar que Matsuoka envia em toco e Hang em leque de madeira; mantida a ressalva de que nenhuma dessas fontes homologa os percentuais da R0.
- Não recalcular IDC/IAR ou estrelas sem dados adicionais.

## Parecer final
**Revisão documental concluída**, com três produtores da espécie exata verificados, cultivo principal montado apoiado por fontes, receita alternativa de vaso coerente e duas misturas qualitativas distintas. **Homologação quantitativa experimental da R0: NÃO DEMONSTRADA.** Não foram identificadas pendências editoriais nesta revisão; um ensaio futuro seria pesquisa nova, não correção editorial adiada.
