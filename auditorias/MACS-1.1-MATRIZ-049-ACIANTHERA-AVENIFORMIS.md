# MACS 1.1 — Matriz 049: Acianthera aveniformis (= Pabstiella aveniformis)

**Data:** 2026-11-03  
**Ficha:** `dados/orquideas/acianthera-aveniformis.js`  
**Estado:** **REVISÃO DOCUMENTAL CONCLUÍDA COM RESSALVA QUANTITATIVA**. Não há homologação experimental de proporções específicas; nenhuma pendência editorial identificada foi reservada para outra auditoria.

## Identidade taxonômica e habitat
- [POWO/Kew — Pabstiella aveniformis](https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:77094066-1): nome **aceito**, epífita nativa do sul do Brasil, bioma tropical úmido.
- [POWO/Kew — Acianthera aveniformis](https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:60437739-2): **sinônimo** do nome aceito Pabstiella aveniformis; também Pleurothallis aveniformis e Specklinia aveniformis são sinônimos.
- [IOSPE — Pleurothallis aveniformis](https://www.orchidspecies.com/pleuraveniformis.htm): miniatura reptante, epífita, flores de aproximadamente 3 mm, registros em torno de 400 m, crescimento quente a ameno e floração de inverno. É fonte de morfologia/ecologia, **não receita percentual**.

## Produtores brasileiros e evidência de cultivo
- [Milena Orquídeas — Acianthera aveniformis](https://milenaorquideas.com.br/produtos/acianthera-aveniformis/): **1 fornecedor da espécie exata identificado**, planta enviada fixada em **ripinha de madeira cambará**; informa ambiente com umidade elevada, ventilação e sombrite geral de 70–80% em setores de diferentes luminosidades. A porcentagem de sombrite é do **orquidário em geral**, não medida específica desta espécie. O anúncio apresenta **informações comerciais internamente divergentes** sobre altura e época de floração; não usar essas afirmações contraditórias para homologar dimensões ou sazonalidade. **Não publica receita de substrato percentual para vaso**.
- [Orquidário Matsuoka — Acianthera minima](https://orquidariomatsuoka.com.br/produto/acianthera-minima/): espécie **diferente**, não conta como fonte específica para A. aveniformis.
- [Orquidário Matsuoka — Acianthera auriculata](https://orquidariomatsuoka.com.br/produto/acianthera-auriculata/): espécie **diferente**, não conta como fonte específica.

**Cobertura demonstrada:** 1 produtor da espécie exata com suporte de montagem descrito; 0 produtores com receita quantitativa específica. Meta de até 25 fontes independentes não atingida; não inventar amostra nem afirmar pesquisa exaustiva.

## Referência técnica geral brasileira
- [SENAR-PR — Cultivo de Orquídeas, edição 2026](https://www.sistemafaep.org.br/wp-content/uploads/2026/01/PR.0397-Cultivo-de-Orquideas_web.pdf): casca de árvore, casca de arroz carbonizada e carvão estão entre os componentes de substratos; escolha deve considerar hábito epífito, ambiente e recipiente. **Não valida percentuais específicos para esta espécie**.
- A ecologia epífita, o hábito reptante e a montagem comercial específica fundamentam **placa/tronco como primeira recomendação**, com umidade ambiental e ventilação. Em ambiente quente, placa exige monitoramento de secagem e regas adequadas.

## Receita R0 para cultivo em vaso — avaliação quantitativa
**Nota de escopo:** o painel `substratoVisual` descreve o cultivo **em vaso**, mesmo que o cultivo ideal principal seja **placa/tronco**. Não comparar diretamente uma receita para vaso com a montagem em madeira.

| Material | Percentual | Função proposta |
|---|---:|---|
| Casca de pinus fina/média | 40% | Estrutura e alguma retenção |
| Casca de arroz carbonizada | 25% | Macroporos e leveza |
| Carvão vegetal pequeno | 20% | Estrutura e aeração |
| Esfagno solto | 15% | Reserva hídrica moderada |
| **Total** | **100%** | Soma aritmética verificada |

**Classificação obrigatória:** composição **hipotética/editorial**, não publicada como experimento com A. aveniformis. Os percentuais 40/25/20/15 **não são validados por Kew, IOSPE, SENAR ou Milena Orquídeas**. A soma 100% não é comprovação de eficácia. A adequação depende da secagem real, da ventilação, da qualidade dos componentes e do volume radicular; raízes finas não devem ficar sufocadas nem secar excessivamente.

**Duas alternativas qualitativas do menu:**
1. Casca de pinus fina + carvão vegetal pequeno + esfagno de fibra longa solto.
2. Casca de pinus fina + perlita grossa + esfagno de fibra longa solto.

Ambas diferem da receita principal e entre si, sem percentuais inventados. Não atribuir superioridade quantitativa a elas.

## Assets, consistência e decisão
- `casca-pinus`, `casca-arroz-carbonizada`, `carvao-vegetal`, `esfagno`, `arvore-viva`, `cesto-madeira`, `vaso-plastico-vasado` e `acianthera-aveniformis-placa` estão registrados em `js/biblioteca-cultivo-v4.js`.
- Asset específico da montagem principal: `imagens/cultivo-v4/especies/acianthera-aveniformis/placa-tronco.webp`, conforme o registro. Conferência de registro **não equivale** a teste de imagem carregada.
- A receita visual e os quatro itens coincidem: 40 + 25 + 20 + 15 = 100. Não existe campo `macs1_0.substrato.percentuais` concorrente nesta ficha.
- **Cultivo ideal em placa:** sustentado por evidência comercial da espécie e hábito epífito, sem alegação de ensaio comparativo.
- **Substrato de vaso:** proposta técnica hipotética, explicitamente classificada como **NÃO homologada experimentalmente**.
- **Parecer:** **REVISÃO DOCUMENTAL CONCLUÍDA**, sem pendências editoriais identificadas; não elevar o grau de evidência nem alterar índices e estrelas sem suporte. Experimento futuro de crescimento radicular seria pesquisa nova, não auditoria editorial deixada para depois.

**Próxima ficha:** somente após este parecer publicado, mantendo o mesmo padrão de conclusão integral do trabalho documental.

## Perfil radicular e hídrico e encerramento editorial — 2026-11-04
**Identidade:** *Pabstiella aveniformis* é nome aceito no POWO/Kew; *Acianthera aveniformis* é sinônimo conservado como identificador histórico no site. Corrigido campo de status taxonômico da ficha, que antes descrevia indevidamente o nome como aceito.

**Perfil:** microepífita reptante com raízes finas, expostas a umidade frequente, ventilação e risco de desidratação rápida em suportes pequenos. Espessura exata, retenção e intervalos de rega não foram medidos para o exemplar. Montagem em placa/ripinha tem evidência específica de prática comercial em Milena Orquídeas; não implica superioridade experimental sobre vasos.

**Cultivo principal:** placa/tronco com mínima reserva de esfagno solto junto às raízes, sem enterrar o rizoma; **não se aplica receita volumétrica à placa**. A receita de 40% casca de pinus fina/média + 25% casca de arroz carbonizada + 20% carvão vegetal pequeno + 15% esfagno solto (100% por volume) destina-se exclusivamente a vaso pequeno, raso e muito perfurado. Pinus estrutura; arroz carbonizado e carvão mantêm espaços de ar; esfagno oferece reserva hídrica limitada. **Percentuais são hipótese horticultural não homologada**; soma matemática não comprova desempenho.

**Duas alternativas qualitativas sem percentuais:** (1) casca de pinus fina + carvão vegetal pequeno + esfagno de fibra longa solto; (2) casca de pinus fina + perlita grossa + esfagno de fibra longa solto. Distintas entre si e da principal; não há comprovação quantitativa específica.

**Conferência editorial:** descrição ampliada de 73 para 103 palavras (meta 90–120), mantendo identidade e hábito documentados; quatro caminhos de fotos registrados; IDC 29/100 e quatro estrelas, compatíveis com IDC 3.2; receita visual e itens somam 100%; índices e métodos de cultivo preservados. A validação visual de imagens e renderização será realizada na auditoria consolidada com ZIP final, conforme orientação do responsável.

**Parecer:** revisão científica/editorial documental atualizada e concluída dentro das evidências disponíveis, **sem homologação experimental da receita de vaso**. A busca de produtores específicos identificou um fornecedor e não satisfaz a meta metodológica de 25; não simular cobertura adicional.
