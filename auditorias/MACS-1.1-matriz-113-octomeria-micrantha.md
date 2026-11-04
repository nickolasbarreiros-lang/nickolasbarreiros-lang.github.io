# MACS 1.1 — Matriz 113 — Octomeria micrantha
Data: 2026-11-03. Estado: revisão de código, assets e teste Chromium concluídos; homologação científica quantitativa não demonstrada.

## Identidade e ecologia
Espécie botânica epífita miniaturizada do gênero Octomeria. A ficha relata touceira cespitosa, raízes finas e crescimento em florestas sobre musgos/líquens, atribuindo a IOSPE crescimento quente a fresco. **Esses relatos não comprovam fórmula de substrato nem percentual ótimo**. Identidade taxonômica e distribuição ainda exigem conferência externa rastreável nesta matriz.

## Evidência e busca
Não foi concluída busca individualizada de até 25 produtores brasileiros, nem localizada nesta etapa receita quantitativa específica ou ensaio comparativo. Não afirmar inexistência de fontes. Referência citada pela ficha: IOSPE (consultar https://www.orchidspecies.com/ e localizar nome aceito antes de usar). Ausência de dados físicos comparáveis impede atribuir classe C à receita.

## Cenário
Suporte principal **placa/tronco**, sem mistura percentual: fina lâmina de esfagno de fibra longa solto sob raízes, com ventilação e umidade regular. As três receitas volumétricas abaixo são **somente alternativas para cuia rasa/cesto pequeno**; não transferir os percentuais para a placa.

## Candidatas quantitativas (por volume)
- A, receita visual: **40% fibra de coco preparada + 30% casca de pinus fina + 30% casca de arroz carbonizada = 100%**.
- B, alternativa: **50% esfagno fibra longa solto + 50% casca de arroz carbonizada = 100%**.
- C, alternativa: **55% casca de pinus fina + 25% casca de arroz carbonizada + 20% esfagno fibra longa solto = 100%**.
Todas são **D provisórias**, sem percentuais publicados para a espécie. A usa fibra de coco, não chips; evita erro de representação do asset. B pode reter umidade excessiva se esfagno compactado; C exige ajuste de rega para não secar raízes finas.

## Matriz qualitativa
| Critério | Peso | A | B | C |
|---|---:|---|---|---|
| Hidratação | 30% | coco pode reter umidade | esfagno 50% exige cuidado | esfagno 20% |
| Aeração | 25% | arroz e pinus | arroz, risco de compactação do esfagno | pinus e arroz |
| Suporte/volume | 20% | cuia rasa | cuia rasa | cuia rasa |
| Estabilidade/sais | 15% | lavar/condicionar coco | decomposição/compactação | decomposição do pinus |
| Clima | 10% | ajustar secagem | risco em ambiente úmido | monitorar secagem |
Não há medições que fundamentem notas 0–5 ou índice 0–100. Trocas de recipiente, granulometria, ventilação e rega podem alterar a preferência.

## Classes
Taxonomia: **confirmada por POWO/Kew**; ecologia e distribuição: **corroboradas por POWO e estudo florístico com vouchers**; composição: **D**; percentuais: **D**; suportes/estrelas: **D**, editoriais. Resultado: **provisório, não homologado quantitativamente**.

## Integração e arquivos
Ficha `dados/orquideas/octomeria-micrantha.js` atualizada no commit `c0ce6edd420275a87dff5310d5bb8618922d3fc6`. Perlita removida; asset de chips de coco incorretamente associado a fibra substituído por material efetivamente representado. Quatro fotografias verificadas em `imagens/Octomeria micrantha/`. Assets reais verificados: `fibra-coco.webp`, `casca-pinus.webp`, `casca-arroz-carbonizada.webp`, `placa-madeira-v3.webp`, `cesto-madeira-v3.webp`, `vaso-plastico-vasado-v2.webp`, `vaso-barro.webp` em `imagens/cultivo-v4/`. Teste de renderização aprovado na execução GitHub Actions 41764148678; resultado científico D provisório.

## Verificação funcional — 2026-11-03
GitHub Actions [41764148678](https://github.com/nickolasbarreiros-lang/nickolasbarreiros-lang.github.io/actions/runs/41764148678): etapa Chromium/Playwright e upload de capturas **concluídos com sucesso**. Teste automatizado da página local `orquidea.html?id=octomeria-micrantha`, duas alternativas com prefixos `50% Esfagno` e `55% Casca de pinus`, ausência de exceções JS, screenshots desktop e mobile no [artefato 13291753613](https://github.com/nickolasbarreiros-lang/nickolasbarreiros-lang.github.io/actions/runs/41764148678/artifacts/13291753613). Não é inspeção humana de pixels nem teste em produção. Auditoria técnica/funcional encerrada; identidade/distribuição confirmadas por POWO e estudo florístico; receitas e estrelas permanecem D provisórias, sem homologação quantitativa C.

## Homologação taxonômica e biogeográfica — 2026-11-03
**Fonte taxonômica primária:** Plants of the World Online, Royal Botanic Gardens, Kew: https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:646260-1 — *Octomeria micrantha* Barb.Rodr., nome aceito, primeira publicação Gen. Spec. Orchid. 1:33 (1877), hábito epífito, distribuição nativa Brasil Sudeste, Paraguai e Argentina Nordeste (Misiones). **Corroboração independente:** levantamento de Orchidaceae do Parque Nacional do Iguaçu, *Rodriguésia* (2024), https://doi.org/10.1590/2175-7860202475064, entrada 49 *O. micrantha*, exemplares examinados e diagnóstico diferencial com *O. warmingii*. Assim, identidade e distribuição passam de 'a confirmar' para **confirmadas por fontes identificadas**. Essas fontes **não** homologam as três receitas, as estrelas nem os percentuais MACS; permanecem D. Busca de produtores e validação quantitativa não realizadas integralmente, explicitadas como lacuna, sem apresentar fechamento científico quantitativo fictício.
