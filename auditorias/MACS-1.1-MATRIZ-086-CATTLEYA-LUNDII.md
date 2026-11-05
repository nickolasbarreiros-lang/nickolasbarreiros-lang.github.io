# MACS 1.1 — Matriz 086: Cattleya lundii (sin. Laelia lundii)

**Data:** 2026-11-03  
**Ficha:** `dados/orquideas/laelia-lundii.js`  
**Parecer:** REVISÃO DOCUMENTAL CONCLUÍDA; RECEITA PRINCIPAL SEM HOMOLOGAÇÃO QUANTITATIVA ESPECÍFICA.

## Taxonomia, distribuição e morfologia
- [POWO/Kew — Cattleya lundii](https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:60448106-2): nome aceito, sinônimos homotípicos `Laelia lundii`, `Microlaelia lundii`, `Sophronitis lundii` e `Bletia lundii`. Epífita pseudobulbosa de bioma tropical sazonalmente seco; distribuição nativa registrada de Bolívia a Argentina, incluindo Brasil e Paraguai.
- [Flora do Brasil 2020, monografia Cattleya, p. 126](https://monografiasfloradobrasil.jbrj.gov.br/cattleya.pdf): pseudobulbos ovoides de até 5 cm, duas folhas canaliculadas quase cilíndricas, inflorescência com **1–3 flores**, sépalas/pétalas brancas e labelo branco com veios púrpura; epífita típica de Cerrado, também em florestas ciliares e estacionais; **floração na primavera**.
- **Divergência de distribuição:** a Flora do Brasil 2020 considera a espécie endêmica brasileira; POWO registra também Bolívia, Paraguai e Argentina. A ficha mantém a distribuição ampla segundo POWO, sem ocultar a divergência.
- Descrição reescrita em 90–120 palavras sem manejo, `floracao` e `mesesFloracao` corrigidos para primavera; meses 9–12 são **janela editorial aproximada**, não registro fenológico experimental.
- `revisaoCientificaIAR` corrigida: campos antes genéricos ou truncados agora descrevem nome aceito, sinônimos, morfologia e habitat.

## Pesquisas brasileiras com a espécie
1. **Basso & Faria (2002)**, *Utilização de diferentes substratos no cultivo de Laelia lundii (Orchidaceae) visando a preservação do xaxim*, resumo na 6ª Mostra Acadêmica de Trabalhos de Agronomia, UEL, p. 48. Citado em [Colombo et al. (2005), Acta Scientiarum Agronomy, PDF](https://periodicos.uem.br/ojs/index.php/ActaSciAgron/article/download/2134/1243/) e em [Sorace (2008), dissertação UEL, p. 51](https://repositorio.uel.br/handle/123456789/10648). Relatos de **bons resultados de brotação e enraizamento com esfagno misturado a fibra de coco**. **Texto primário completo e proporção volumétrica não verificados.** Não há base para atribuir 50/50 ou qualquer percentual a esse estudo.
2. **Colombo et al. (2004)**, [DOI 10.4025/actasciagron.v26i2.1893](https://periodicos.uem.br/ojs/index.php/ActaSciAgron/article/view/1893): ensaio específico de *Laelia lundii* sobre clorotalonil e enraizamento **in vitro**. Não testa substratos de vasos.
3. **Unemoto et al. (2007)**, [Propagação in vitro de orquídeas brasileiras em meio de cultura simplificado](https://periodicos.ufpel.edu.br/index.php/CAST/article/view/1372/1356): ensaio com *Laelia lundii*, *Oncidium nanum* e *Cattleya forbesii*, comparando meios de cultura **in vitro**. Não valida misturas de vaso.
4. **Sorace (2008)**, [dissertação UEL](https://repositorio.uel.br/handle/123456789/10648): experimentos de substratos para *Cattleya loddigesii*, *C. skinneri* e híbrido *C. intermedia × Hadrolaelia purpurata*, **não para C. lundii**; sua citação de Basso & Faria não transforma o experimento de Sorace em estudo desta espécie.

## Cultivadores e meta de produtores brasileiros
- [Orquídeas Soltas, Américo M. S. Pereira (2016)](https://orquideassoltas.blogspot.com/2016/02/laelia-lundii-cattleya-lundii.html): relato de cultivador **português**, não produtor brasileiro; cesta com mistura grossa de casca de pinheiro e argila expandida, sem percentuais. Não incluído na meta de produtores brasileiros.
- **Produtores brasileiros com receita quantitativa específica confirmada nesta passagem: 0**. Meta de até 25 não atingida. Evidência acadêmica de Basso & Faria não é recomendação comercial com proporção homologada.

## Receita principal R0 — exclusivamente cesto ou vaso pequeno
| Material | Percentual | Asset |
|---|---:|---|
| Casca de macadâmia média | 35% | `casca-macadamia` |
| Casca de pinus média | 30% | `casca-pinus` |
| Perlita grossa | 20% | `perlita` |
| Carvão vegetal | 15% | `carvao-vegetal` |
| **Total** | **100%** | **Hipótese horticultural, não ensaiada na espécie** |

**Importante:** a forma de cultivo mais recomendada na ficha é **placa/tronco**, para a qual **não** se aplica uma receita volumétrica. A mistura R0 serve apenas para cultivo em recipiente. O estudo de Basso & Faria sugere alternativa com **esfagno + fibra de coco**, mas não valida a receita R0 com macadâmia, pinus, perlita e carvão.

## Duas alternativas qualitativas preservadas
1. Chips de coco médios preparados + perlita grossa + carvão vegetal + casca de pinus média.
2. Casca de macadâmia média + argila expandida + carvão vegetal + casca de pinus grossa.

Distintas entre si e da receita principal, sem inventar proporções.

## Conferência técnica
- `substratoVisual.receitaTexto` e `itens`: **35 + 30 + 20 + 15 = 100%**.
- `substrato`: exatamente duas alternativas distintas.
- Campo concorrente `macs1_0.substrato.percentuais`: ausente.
- Asset corrigido de `carvao` para **`carvao-vegetal`**; chaves `casca-macadamia`, `casca-pinus`, `perlita`, `carvao-vegetal`, `placa-tronco`, `cesto-madeira`, `vaso-barro`, `arvore-viva` localizadas em `js/biblioteca-cultivo-v4.js`.
- `iluminacao.horario` já padronizado: **Início da manhã ou final da tarde**.
- Estrelas de recipientes são julgamento horticultural, não comparação experimental.
- **Não houve teste visual em navegador**, portanto o carregamento real de fotos e assets não foi comprovado.

## Parecer final
**Revisão documental concluída.** Taxonomia, descrição, fenologia, dados científicos, coerência entre cultivo montado e mistura para recipiente, assets e duas alternativas conferidos. **Existe evidência brasileira específica de esfagno + fibra de coco sem proporção verificável; os percentuais da receita principal permanecem NÃO HOMOLOGADOS.**

## Perfil radicular e hídrico — revisão de 2026-11-05
**Perfil:** miniatura epífita simpodial, pseudobulbos ovoides pequenos, duas folhas estreitas e raízes finas que exigem aeração e secagem rápida após molhar. Fixar firmemente na placa/tronco e permitir expansão da touceira. Em crescimento ativo e calor, montagem pode demandar rega diária ou quase diária conforme secagem; em frio ou menor atividade, ampliar intervalos, sem desidratação prolongada. Floração primaveril documentada pela Flora do Brasil; janela setembro–dezembro é aproximação editorial, não ensaio fenológico. POWO registra distribuição sul-americana mais ampla do que a Flora do Brasil 2020; divergência mantida.

**Cultivo principal:** placa/tronco, **sem substrato volumétrico nem percentuais**. **Receita opcional em volume para cesto ou vaso pequeno:** 35% casca de macadâmia média (estrutura) + 30% casca de pinus média (suporte e umidade moderada) + 20% perlita grossa (aeração) + 15% carvão vegetal (porosidade), total 100%. Proposta horticultural sem ensaio específico. Basso & Faria (2002), conforme citações secundárias em Colombo et al. (2005) e Sorace (2008), relataram bons resultados com esfagno e fibra de coco, **sem proporção verificável**; não sustentam a fórmula 35/30/20/15.

**Duas alternativas qualitativas sem percentuais:** (1) chips de coco médios lavados + perlita grossa + carvão vegetal + casca de pinus média; (2) casca de macadâmia média + argila expandida + carvão vegetal + casca de pinus grossa. Distintas entre si e da mistura opcional; coco lavado não dispensa eventual controle de salinidade.

**Conferências editoriais:** descrição com 93 palavras (faixa 90–120). Chips de coco médios lavados padronizados na primeira alternativa. Receita visual e justificativa agora explicitam ausência de homologação e distinção entre montagem principal e mistura opcional para recipiente. Resumo de forma de cultivo corrigido para hábito epífito documentado, sem extrapolar ocorrência rupícola. Selo de rega alterado de “frequente/reduzir-repouso” para “frequente/reduzir-inverno”, coerente com ajuste sazonal sem repouso seco rígido. Receita e itens visuais somam 35+30+20+15=100%; duas alternativas qualitativas; quatro caminhos de fotos cadastrados; IDC 36/100 e três estrelas coerentes com IDC 3.2; IAR litoral 63/4 estrelas e montanha 96/5 estrelas preservados; estrelas dos suportes preservadas como avaliações horticulturais. Testes visuais e carregamento de fotos reservados para auditoria final com ZIP, conforme decisão do responsável.

**Parecer:** revisão científica/editorial documental concluída dentro das fontes disponíveis; evidência brasileira específica para combinação qualitativa esfagno + fibra de coco, sem percentuais recuperáveis. Zero receitas quantitativas específicas de produtores brasileiros verificadas, meta de 25 não atingida e **homologação experimental da receita opcional não demonstrada**.
