# MACS 1.1 — Homologação por convergência de evidências
**Versão:** 1.1 (2026-11-03) · **Estado:** metodologia adotada para novas avaliações; não altera automaticamente receitas já publicadas.

## Objetivo
Permitir avaliação técnica reprodutível de receitas de cultivo quando não existem ensaios ou fórmulas publicadas para a espécie, **sem confundir plausibilidade horticultural com validação experimental**. Preservar V4.9, IDC 3.2, IAR 2.0, fotografias e assets. A metodologia MACS 1.0 permanece como histórico; MACS 1.1 complementa seu protocolo de evidência.

## Níveis de evidência (não são estrelas de cultivo)
- **A — Experimental direta:** ensaio documentado na própria espécie com tratamentos, controles/replicações ou comparação adequada, condições e resultados mensuráveis. Não presumir que um ensaio valida qualquer clima ou suporte.
- **B — Horticultural específica:** práticas publicadas para a própria espécie por cultivadores/produtores/instituições identificáveis, com detalhes suficientes de materiais e suporte; relato sem comparação não comprova superioridade nem percentual ótimo.
- **C — Convergência técnico-científica:** ecologia e morfologia da própria espécie + propriedades documentadas dos componentes + evidência transferível de táxons ecologicamente semelhantes, explicitando diferenças e incertezas. **Receita tecnicamente fundamentada**, nunca “comprovada experimentalmente”.
- **D — Provisória:** dados ausentes, insuficientes, contraditórios ou extrapolação frágil. Manter proposta como hipótese, com lacunas explícitas.
Uma ficha pode ter evidência A para um ingrediente e D para o percentual exato; **atribuir níveis separadamente** a habitat, forma de cultivo, composição, proporções e estrelas. Nível da fórmula completa = menor nível sustentado entre composição e proporções, sem elevar automaticamente por evidência de hábito epífito.

## Busca e rastreabilidade
1. Confirmar nome aceito/sinônimos (POWO/WFO/IPNI/GBIF) e identidade da planta; separar espécies, híbridos e identificações `cf.`.
2. Levantar até **25 produtores/orquidários brasileiros relevantes por espécie** (maximizar os encontrados; não exigir 25 inexistentes); registrar para cada um nome, URL, data de consulta, espécie exata, presença comercial, cultivo descrito, ingredientes, proporções e natureza da evidência. Não contar páginas duplicadas do mesmo produtor; excluir híbridos e espécies próximas da contagem específica.
3. Cruzar com fontes botânicas e horticulturais: POWO, WFO, GBIF, IOSPE, Swiss Orchid, OrchidPro, AOS e estudos científicos quando disponíveis. Uma fonte botânica de habitat não equivale a teste de substrato.
4. Documentar busca negativa com termos/sinônimos, fontes consultadas e limites da pesquisa; **ausência de receita localizada não significa inexistência**.
5. Se não houver receita específica, aplicar nível C apenas quando as três linhas de evidência (ecologia/raízes; propriedades dos materiais; comparáveis justificáveis) estiverem efetivamente documentadas. Caso contrário nível D.

## Matriz de adequação técnica — proposta inicial
Critérios e pesos para comparar receitas candidatas **sob o mesmo cenário de clima, rega e suporte**:
| Critério | Peso |
|---|---:|
| Adequação hídrica ao sistema radicular | 30% |
| Aeração / porosidade | 25% |
| Compatibilidade com suporte e volume | 20% |
| Estabilidade / decomposição / salinidade | 15% |
| Adequação ao clima de cultivo | 10% |
Cada critério recebe nota ordinal fundamentada de 0 a 5 e fonte/justificativa. Índice exploratório = soma(peso × nota/5), em 0–100. **Este índice é heurístico, não uma medição física, nem probabilidade de sucesso**. Registrar sensibilidade a mudanças de pesos e a manejo hídrico. Não converter diretamente esse índice em estrelas IDC/IAR nem estrelas dos suportes.

## Percentuais e propriedades físicas
- Percentuais são **propostas por volume**, a menos que a fonte informe massa; declarar unidade e granulometria. Conferir soma = 100%.
- Não alegar que o peso percentual revela diretamente porosidade, capacidade de retenção, condutividade, pH ou velocidade de secagem. Essas propriedades dependem de material, lote, granulometria, recipiente, compactação e manejo; exigir medições ou indicar estimativa qualitativa.
- Gerar e comparar no mínimo 2–3 receitas candidatas quando houver base, incluindo a receita vigente; registrar por que cada ingrediente entra e o risco de excesso.
- Em placa/raízes soltas, não aplicar receita percentual de vaso como se fosse o suporte principal.
- Preservar restrição editorial **sem pedra-pomes**. Não substituir por perlita ou brita sem avaliar retenção, peso e granulometria.
- Não alterar receita vigente ou estrelas só para obter nota melhor; requer justificativa comparativa e registro de revisão.

## Estados independentes por ficha
`taxonomia`: confirmada | provisória | conflitante.
`ecologia`: corroborada | parcial | insuficiente.
`composicao`: A | B | C | D.
`percentuais`: A | B | C | D.
`suportesEstrelas`: A | B | C | D.
`resultado`: experimentalmente_validada | fundamentada_por_convergencia | horticultural_especifica | provisoria.
A expressão **“homologada MACS 1.1 por convergência”** exige composição e percentuais pelo menos C, fontes auditáveis e comparação registrada; sempre mostrar que não é validação experimental. Estrelas só homologadas separadamente com sua própria fundamentação.

## Formato de registro de cada ficha
- Nome da ficha / nome aceito / sinônimos e incerteza taxonômica.
- Fontes com URLs e alegação que cada uma realmente sustenta; produtores identificados / produtores com receita / limite da busca.
- Cenário: litoral quente ou montanha, suporte, granulometria, regime de rega e umidade.
- Receita vigente, alternativas candidatas, unidades, soma e justificativas; matriz de 5 critérios com notas, pesos, fontes e análise de sensibilidade.
- Níveis independentes (taxonomia, ecologia, composição, percentuais, suportes/estrelas); conflitos, limitações, decisão e data.
- Alterações de código, se houver, com commit e preservação de assets.

## Migração das três primeiras fichas (sem homologação automática)
1. **Anathallis sclerophylla**: ecologia e taxonomia corroboradas; receita 35/30/20/15 sem dados específicos de percentuais. **Composição D, percentuais D, estrelas D** até documentar propriedades dos materiais e comparáveis; 1 produtor com registro, 0 com receita específica.
2. **Aerides odorata**: fontes específicas e genéricas apoiam raízes livres e cestos, mas não 45/35/10/10. **Composição D, percentuais D, estrelas D** enquanto faltam matriz comparativa e propriedades verificadas; 1 produtor com registro, 0 com receita específica.
3. **Epidendrum centropetalum**: suporte montado/vaso descrito em referências; não comprova 45/35/20 nem estrelas. **Composição D, percentuais D, estrelas D** até concluir comparação; 0 produtores brasileiros com receita específica verificada.
Esses níveis D são **conservadores e transitórios**, não juízo de que a receita é ruim. Não modificar JS ou layout nesta adoção metodológica.

## Regra de conclusão
A ficha só pode ser encerrada como C quando tiver ecologia da espécie, propriedades dos componentes e pelo menos um comparável justificado, com matriz reproduzível e limitações. Se faltar um elo, documentar D e seguir à próxima ficha, mantendo fila de pendências. Não repetir buscas indefinidamente nem fabricar referências.


## MACS 1.1 — Fluxo integrado de conclusão por ficha (aprovado em 2026-11-03)
1. Elaborar matriz com fontes auditáveis, receitas candidatas e classificação separada de evidência para composição, percentuais e suportes.
2. Comparar quantitativamente as proporções **por volume**, verificando 100% e a coerência entre raízes, granulometria, recipiente, rega e clima. Sem medições comparativas, **não atribuir notas numéricas de desempenho** nem declarar vantagem experimental.
3. Selecionar receita de referência apenas se existir base técnica suficiente. Identificar explicitamente como **formulação quantitativa estimada por convergência**, **receita documental publicada** ou **experimentalmente validada**, conforme evidência real. Percentuais criados por inferência nunca são receitas publicadas.
4. Atualizar na mesma ficha os campos `substratoVisual.receitaTexto`, `substratoVisual.itens`, `substratoVisual.justificativa`, `substratoVisual.notaEvidencia` e `substrato` **somente quando necessário para manter coerência e registrar a decisão**; preservar fotografias, assets, demais campos e layout V4.9. Não alterar estrelas de suportes sem avaliação independente.
5. Verificar soma de percentuais, consistência de nomes/assets e sintaxe JavaScript antes de publicar; registrar commit da matriz, da ficha e do controle geral.
6. Se evidência insuficiente para uma receita recomendada C, **não forçar homologação**: manter provisória D, registrar lacunas e ainda concluir a etapa documental e a revisão de coerência da ficha.
7. Concluir ficha antes de avançar à próxima. Após a sequência futura, retornar às matrizes 001–024 para concluir sua revisão quantitativa.
**Contadores separados:** matrizes concluídas; fichas atualizadas com receita recomendada; receitas com nível C por convergência; receitas com ensaio experimental A. Não confundir esses totais.
