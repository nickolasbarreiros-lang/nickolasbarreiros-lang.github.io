# MACS 1.1 — Matriz 062: Maxillaria imbricata (sin. Camaridium carinatum)

**Data:** 2026-11-03  
**Ficha:** `dados/orquideas/camaridium-carinatum.js`  
**Parecer:** **REVISÃO DOCUMENTAL CONCLUÍDA; RECEITA HORTICULTURAL NÃO HOMOLOGADA**.

## Taxonomia e evidência morfológica
- [POWO/Kew — Maxillaria imbricata](https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:155104-2): nome aceito; espécie epífita do bioma tropical úmido, distribuída na América do Sul tropical.
- [POWO/Kew — Camaridium carinatum](https://powo.science.kew.org/taxon/43679-2): sinônimo heterotípico de *Maxillaria imbricata*.
- [Farias (2024), dissertação UFC, Maxillaria imbricata, p. 78–79](https://repositorio.ufc.br/bitstream/riufc/76253/5/2024_dis_dcfarias.pdf): rizoma **pendente**, pseudobulbos **numerosos e imbricados**, folhas oblongas e coriáceas, flores creme a amarelas com labelo trilobado, inflorescências basais unifloras.
- [Hoehnea — Sinopse das Orchidaceae do Parque Nacional de Boa Nova](https://www.scielo.br/j/hoehnea/a/3ny9LMzTztYwyQJJnmJQ5tL/?lang=pt): descreve a espécie sob *Camaridium carinatum*, como epífita com flores amarelas e labelo trilobado. A fonte não constitui ensaio de cultivo.

**Correção executada:** `descricao` reescrita e `caracteristicas` ajustadas. Substituídas afirmações de pseudobulbos espaçados/crescimento exclusivamente horizontal pela arquitetura documentada de rizoma alongado por vezes pendente e pseudobulbos imbricados. Arquivo e ID históricos preservados para compatibilidade.

## Cultivo principal
A ficha destaca **cachepô de madeira** como proposta para acomodar crescimento alongado e facilitar aeração. A arquitetura pendente também torna a montagem em placa/tronco uma alternativa plausível; **não existe ensaio comparativo localizado que prove superioridade do cachepô sobre outros suportes**. A diversidade do gênero *Maxillaria* impede extrapolar automaticamente um único método a todas as espécies.

## Receita R0 para recipiente
| Material | Percentual | Finalidade |
|---|---:|---|
| Casca de pinus | 35% | Estrutura |
| Chips de coco grossos preparados | 25% | Retenção moderada |
| Perlita grossa | 25% | Aeração |
| Carvão vegetal | 15% | Porosidade |
| **Total** | **100%** | Proposta técnica |

**Classificação:** **hipótese horticultural não homologada**, sem experimento quantitativo específico de *M. imbricata* localizado. A soma 100% é consistência aritmética, não validação experimental. Chips de coco devem ser preparados para cultivo, com controle de sais e de retenção hídrica.

## Duas alternativas qualitativas
1. Casca de pinus média + carvão vegetal médio + perlita grossa.
2. Casca de macadâmia média + chips de coco grossos preparados + carvão vegetal médio.

Diferentes entre si e da R0; sem percentuais publicados e sem evidência experimental de superioridade.

## Produtores brasileiros
**Receitas quantitativas específicas da espécie verificadas nesta passagem: 0**. Meta de até 25 produtores brasileiros não atingida. Fontes taxonômicas, descrições florísticas e recomendações gerais de gênero não são receitas homologadas de orquidários.

## Conferência editorial
- `substratoVisual.receitaTexto` e `substratoVisual.itens`: **35 + 25 + 25 + 15 = 100%**.
- `substrato`: **duas alternativas qualitativas distintas**.
- `macs1_0.substrato.percentuais`: ausente.
- `formasCultivo` mantém suportes como hipóteses e estrelas nulas, sem ranking experimental fictício.
- Assets declarados: `casca-pinus`, `chips-coco`, `perlita`, `carvao-vegetal`. **Não houve teste visual de carregamento de imagens** nesta passagem.
- Atualizadas `descricao`, `caracteristicas`, `substratoVisual.justificativa` e `substratoVisual.notaEvidencia` para refletir arquitetura real.

## Parecer final
**Revisão documental concluída.** Identidade taxonômica e arquitetura vegetativa corrigidas com fontes botânicas; receita visual consistente em 100%; duas alternativas distintas; evidência quantitativa específica de cultivo **NÃO DEMONSTRADA**. Novos ensaios seriam pesquisa futura, não pendência editorial.

## Perfil radicular e hídrico — revisão de 2026-11-04
**Perfil:** epífita simpodial de rizoma alongado, por vezes pendente, com pseudobulbos numerosos e imbricados e inflorescências basais unifloras. Raízes necessitam de ar e umidade moderada, sem saturação prolongada; manter a base dos pseudobulbos descoberta. Não há ensaio comparativo específico de suportes nem medição de intervalo de secagem para a espécie.

**Cultivo principal:** cachepô de madeira largo e ventilado, com espaço para alongamento e possível pendência do rizoma; montagem em placa/tronco é alternativa plausível, com regas compatíveis. **Receita para recipiente por volume:** 35% casca de pinus (estrutura), 25% chips de coco grossos lavados (reserva hídrica), 25% perlita grossa (aeração) e 15% carvão vegetal (porosidade), total 100%. A composição é hipótese técnica e não homologação experimental. Chips lavados não equivalem a comprovação analítica de baixa salinidade do lote.

**Duas alternativas qualitativas sem percentuais:** (1) casca de pinus média + carvão vegetal médio + perlita grossa; (2) casca de macadâmia média + chips de coco grossos lavados + carvão vegetal médio. Diferem entre si e da receita principal.

**Correção estrutural relevante:** o arquivo continha **duas chaves de primeiro nível substrato**, sendo a primeira uma string antiga com receita e duas alternativas e a segunda o array padronizado. Em JavaScript, a segunda sobrescrevia a primeira. Removida a chave antiga, preservado exclusivamente o array de duas alternativas. Isso elimina ambiguidade e risco de regressão editorial. Também corrigidos climaFloracao e dica, que descreviam crescimento exclusivamente horizontal; substratoVisual.justificativa e revisaoCientificaIAR.morfologiaDimensoes atualizados para nome aceito e arquitetura documentada.

**Conferências editoriais:** descrição com 96 palavras, dentro da faixa 90–120; receita e itens visuais somam 35+25+25+15=100%; quatro caminhos de fotos cadastrados; IDC 30/100 e quatro estrelas coerentes com IDC 3.2; IAR e avaliações dos suportes preservados. Carregamento de fotos e testes visuais reservados para auditoria final com ZIP, conforme decisão do responsável.

**Parecer:** revisão científica/editorial documental concluída dentro das evidências disponíveis; zero receitas quantitativas específicas de produtores brasileiros verificadas, meta de 25 não atingida e **homologação experimental não demonstrada**.
