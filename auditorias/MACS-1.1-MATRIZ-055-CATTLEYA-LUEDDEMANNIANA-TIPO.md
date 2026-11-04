# MACS 1.1 — Matriz 055: Cattleya lueddemanniana (forma tipo)

**Data:** 2026-11-03  
**Ficha:** `dados/orquideas/cattleya-lueddemanniana-tipo.js`  
**Status:** **REVISÃO DOCUMENTAL CONCLUÍDA, COM RESSALVA DE HOMOLOGAÇÃO QUANTITATIVA**.

## Taxonomia e contexto biológico
- [POWO/Kew — Cattleya lueddemanniana](https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:50260-2): espécie aceita, epífita pseudobulbosa do **norte da Venezuela**. O nome comercial **forma tipo** não define táxon distinto.
- [Orchids.org / IOSPE — Cattleya lueddemanniana](https://www.orchids.org/grexes/cattleya-lueddemanniana): epífita venezuelana de regiões costeiras baixas, unifoliada, com flores grandes perfumadas e espata; referência de descrição, **não** ensaio de substrato.
- [AOS — Cattleya Culture Sheet](https://www.aos.org/orchid-care/care-sheets/cattleya-culture-sheet): orientação **genérica para Cattleya**, com substrato de casca média/grossa em estufas, ventilação e replante na emissão de novas raízes. Não é teste de C. lueddemanniana.

## Fontes brasileiras específicas e cobertura
A ficha já cita **Orquidário Oriental, Orquidário Santa Clara e Orquidário Mogi Mirim** com materiais como pinus, carvão, musgo e pedrisco, sem receita percentual para a espécie adulta tipo. **Essas três alegações foram herdadas da ficha e não foram reconfirmadas por inspeção individual de páginas comerciais nesta passagem**; portanto, não se deve apresentá-las como três novos fornecedores independentemente auditados nesta matriz.

**Fontes quantitativas específicas da espécie adulta forma tipo confirmadas:** **0**. A meta de até 25 fornecedores com receita documentada **não foi atingida**; não criar amostra fictícia nem converter orientações genéricas em experimentos.

## Cultivo e receita R0 para recipiente
O cultivo em **cachepô ventilado ou vaso de barro** e substrato de secagem relativamente rápida é coerente com orientações de Cattleyas e com o texto específico da ficha. A receita visual representa **recipiente**, não uma montagem em placa.

**Origem do 5:1:** [Missouri Botanical Garden — Repotting Cattleya and Other Sympodial Orchids](https://www.missouribotanicalgarden.org/gardens-gardening/your-garden/help-for-the-home-gardener/advice-tips-resources/visual-guides/repotting-cattleya-and-other-sympodial-orchids). A fórmula institucional de referência usa **5 partes de casca de abeto média (fir bark) e 1 parte de carvão horticultural**. Corroboração secundária da atribuição e composição: [University of Kentucky Extension — Orchids, A Media Recipe](https://kentuckyhortnews.com/wp-content/uploads/2023/06/orchids.pdf).

| Ingrediente da ficha | Percentual | Observação |
|---|---:|---|
| Casca de **pinus média/grossa** | 83,3% | **Substituição técnica** da casca de abeto média institucional |
| Carvão vegetal horticultural | 16,7% | Componente de aeração complementar |
| **Total** | **100%** | Consistência aritmética |

**Classificação científica:** receita **adaptada de recomendação institucional genérica de grupo**, **NÃO HOMOLOGADA experimentalmente para C. lueddemanniana**. A referência institucional não publica essa formulação exata com pinus médio/grosso, e não há comparação de desempenho da espécie na proporção 5:1.

**Exatamente duas alternativas qualitativas:**
1. Casca de pinus média/grossa + carvão vegetal + esfagno de fibra longa solto.
2. Casca de pinus média/grossa + carvão vegetal + brita fina.

As duas alternativas diferem entre si e da R0; não atribuir percentuais ou resultados de ensaio inexistentes.

## Consistência editorial
- `substratoVisual.receitaTexto` e `substratoVisual.itens` usam **83,3% + 16,7% = 100%**.
- Corrigidas `justificativa`, `receitaTexto`, item de carvão e `notaEvidencia` para declarar **abeto médio original / pinus médio-grosso adaptado**.
- Duas alternativas qualitativas mantidas sem duplicar a R0.
- A ficha não possui `macs1_0.substrato.percentuais` concorrente.
- Não foi executado teste independente de carregamento de imagens; **não declarar validação visual de assets**.
- IDC, IAR e estrelas preservados: não recalcular sem dados específicos.

## Parecer final
**Revisão documental concluída.** A fórmula quantitativa tem referência genérica rastreável, mas sua aplicação à espécie e substituição por pinus são inferências técnicas. **Homologação experimental específica: NÃO DEMONSTRADA.** Nenhuma pendência editorial identificada nesta matriz; experimentos futuros constituem investigação nova, não auditoria editorial adiada.
