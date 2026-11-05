# MACS 1.1 — Matriz 111 — Acianthera sonderiana
Data: 2026-11-03. Estado: revisão botânica, horticultural e quantitativa documental concluída; verificação de navegador ainda a executar.

## Identidade, ecologia e fontes
- Nome aceito: **Acianthera sonderiana (Rchb.f.) Pridgeon & M.W.Chase**; basiônimo *Pleurothallis sonderiana*. POWO: https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:1215862-2 — confirma nome, sinonímia, hábito epífito e ocorrência no sul/sudeste do Brasil, Paraguai, Uruguai e Argentina (Misiones). Não informa receita de substrato.
- GBIF: https://www.gbif.org/taxon/99ZV — corroboração nomenclatural, não de cultivo.
- Costa, dissertação botânica: https://tede.unicentro.br/jspui/bitstream/jspui/1262/2/Disserta%C3%A7%C3%A3o%20-%20Alan%20Cezar%20Costa.pdf — descrição da miniatura cespitosa, ramicaules, folhas e 2–4 flores; não ensaio de substrato.
- IOSPE: https://www.orchidspecies.com/pleurosonderana.htm — relato de cultivo específico em vaso com esfagno, sombra e água suficiente para manter umidade; registro individual, não teste comparativo.
- Orquidário Aparecida: https://orquidarioaparecida.com.br/produtos/acianthera-sonderiana/ — produtor brasileiro, planta comercializada em ripinha de cambará; sombrite 70%, umidade e ventilação; sem mistura percentual.
- Orquidário Oriental: https://www.orquidariooriental.com.br/produto/pleurothallis-sonderana%2C53478/ — produtor brasileiro, descreve esfagno ou substrato misto de fibra de coco, pinus e carvão; vasos plástico/barro; sem proporções.
- AOS (montagem geral, não específica): https://www.aos.org/orchid-care/orchid-care-basics/mounting — esfagno em montagem e risco de compactação/sais em coco.

**Busca de produtores:** 2 produtores brasileiros identificados com orientação específica (Aparecida e Oriental); 0 receitas com percentuais específicos documentados; 1 cultivador internacional (IOSPE) com relato de esfagno em vaso. Meta de até 25 produtores não atingida; resultados não autorizam afirmar inexistência de outras fontes. Termos de busca: Acianthera sonderiana, Pleurothallis sonderiana, Pleurothallis sonderana, cultivo, substrato, produtor.

## Cenário e suporte
Cultivo preferencial em placa/tronco em local sombreado e ventilado, raízes finas com umidade regular; em litoral quente observar secagem acelerada. A fórmula volumétrica refere-se **somente a vaso pequeno e ventilado**, não à placa. Esfagno de fibra longa solto, nunca compactado. Chips de coco pequenos devem ser preparados e ter salinidade controlada; não confundir com fibra de coco.

## Candidatas e verificação quantitativa
- **A — vigente visual:** 35% casca de pinus fina/média + 30% casca de arroz carbonizada + 20% esfagno fibra longa solto + 15% carvão vegetal pequeno = **100% em volume**.
- **B — alternativa editorial:** 55% casca de pinus fina/média + 25% carvão vegetal pequeno + 20% esfagno fibra longa solto = **100% em volume**.
- **C — alternativa editorial:** 45% chips de coco pequenos + 30% casca de arroz carbonizada + 25% esfagno fibra longa solto = **100% em volume**.
Nenhuma das três porcentagens foi publicada como ótima ou experimentalmente demonstrada para a espécie. A e B oferecem estrutura de casca/carvão e reserva hídrica minoritária; C substitui a casca por coco e exige maior cautela com sais e retenção. Não inferir porosidade ou condutividade numérica dos percentuais.

## Matriz comparativa MACS 1.1
| Critério | Peso | A | B | C |
|---|---:|---|---|---|
| Adequação hídrica | 30% | esfagno 20%, resposta não medida | esfagno 20%, resposta não medida | esfagno 25% e coco, retenção não medida |
| Aeração | 25% | casca/arroz/carvão; granulometria decisiva | casca/carvão; granulometria decisiva | arroz/chips; risco de compactação |
| Suporte e volume | 20% | microvaso, não placa | microvaso, não placa | microvaso, não placa |
| Estabilidade/sais | 15% | sem dados comparativos | sem dados comparativos | salinidade do coco depende do preparo |
| Clima | 10% | monitorar secagem | monitorar secagem | monitorar excesso de umidade |
**Notas 0–5 e índice 0–100 não atribuídos**: faltam medições comparáveis. Alterações de clima, rega, volume e granulometria podem inverter preferências. Nenhuma superioridade experimental declarada.

## Classificações independentes
- Taxonomia: **confirmada** pelo POWO.
- Ecologia: **corroborada** como epífita, com microclima e rega dependentes de cultivo.
- Composição: **B qualitativa parcial** para esfagno, pinus/fibra de coco/carvão e montagem (fontes específicas); **D para receita completa A/B/C** devido a ingredientes adicionais e combinações não publicadas.
- Percentuais: **D**, propostas editoriais sem medição/receita específica.
- Suportes/estrelas: **D**, ordenação editorial plausível, sem ensaio comparativo.
- Resultado da fórmula: **provisória (D)**; não homologada quantitativamente por convergência C nem experimentalmente.

## Decisão e integração
Preservar suporte principal placa/tronco, V4.9, IDC 3.2, IAR 2.0, fotos, estrelas e quatro métodos. Receita visual A mantida; exatamente duas alternativas B/C agora quantitativas, sempre com ressalva D. Atualização de `dados/orquideas/acianthera-sonderiana.js` commit `665bb9b42e69bd9570b1e88178a3f05ab716360d`. Falta validar a renderização automatizada da matriz 111 antes de encerrá-la.

## Verificação funcional final — 2026-11-03
Execução [41763792791](https://github.com/nickolasbarreiros-lang/nickolasbarreiros-lang.github.io/actions/runs/41763792791) do GitHub Actions **concluída com sucesso**. Playwright/Chromium abriu `orquidea.html?id=acianthera-sonderiana` em servidor HTTP local, aguardou `.substrato-visual-v4`, verificou duas alternativas `.substratos-recomendados-v4 li` com prefixos `55% Casca de pinus` e `45% Chips de coco`, sem erros JavaScript `pageerror`. Capturas desktop e mobile geradas como artefato da execução. Teste funcional automatizado aprovado; não equivale a inspeção humana de pixels nem teste da URL pública. **Matriz 111 encerrada quanto à auditoria técnica/documental e teste funcional disponível. Classificação da receita permanece D provisória, sem homologação quantitativa C.**

## Errata de padronização MACS 1.1 — 2026-11-04
A conferência posterior identificou percentuais nas duas misturas alternativas da ficha, em desacordo com a regra editorial atual (somente a mistura principal recebe percentuais). **Correção publicada no commit `46c3841e898672c5a797b8f37a2e5ba397025095`**: exatamente duas alternativas mantidas, ingredientes preservados e percentuais removidos exclusivamente das alternativas. A mistura principal permanece com soma de 100%. Conferência estática posterior: estrutura das duas alternativas e sintaxe do módulo JavaScript aprovadas.

**Limite de validação:** o sucesso do workflow antigo antecede esta correção e **não valida o código atual**. Nova execução Chromium/Playwright e inspeção visual pós-commit ainda não confirmadas; portanto, a errata editorial está aplicada, mas sua revalidação funcional permanece aberta. A classificação científica continua **D, não homologada quantitativamente**.

## Perfil radicular e fechamento editorial — 2026-11-05
**Perfil radicular e hídrico:** miniatura epífita cespitosa, de raízes finas e superficiais, com ramicaules curtos e folhas carnosas. A montagem em placa/tronco, com mínima camada de esfagno solto, permite aeração e fixação, mas exige regas conforme secagem observada; não deixar o suporte completamente seco por longos períodos. Em vaso, utilizar recipiente pequeno e perfurado, mantendo umidade regular sem compactar o esfagno.

**Cultivo principal:** placa/tronco, sem receita volumétrica. **Receita opcional para vaso em volume:** 35% casca de pinus fina/média + 30% casca de arroz carbonizada + 20% esfagno de fibra longa solto + 15% carvão vegetal pequeno = 100%. Hipótese horticultural de evidência **D**, não homologada experimentalmente. **Duas alternativas qualitativas sem percentuais:** (1) casca de pinus fina/média + carvão vegetal pequeno + esfagno de fibra longa solto; (2) chips de coco pequenos lavados + casca de arroz carbonizada + esfagno de fibra longa solto. Estimativas B/C com percentuais 55/25/20 e 45/30/25, descritas anteriormente na matriz, são histórico de comparação editorial, **não receitas percentuais a exibir**. Coco lavado exige atenção à origem e à salinidade.

**Conferências editoriais:** descrição reescrita com 97 palavras, sem manejo e sem cidades/estados na narrativa; flores geralmente 2–4, pequenas e amarelo-alaranjadas, conforme literatura botânica registrada. Receita e justificativa explicitam que a mistura não é homologada para a espécie e não se aplica à montagem principal. Nota de evidência atualizada para distinguir alternativas qualitativas de hipóteses percentuais históricas. Calendário de todos os 12 meses removido, pois relatos de floração em diferentes épocas não comprovam fenologia mensal brasileira completa. Quatro caminhos de fotos e quatro métodos de cultivo preservados; soma visual 35+30+20+15=100%; duas alternativas qualitativas. Esta ficha não apresenta campos IDC 3.2 e IAR 2.0 estruturados, portanto não foram atribuídos índices ou estrelas novos; estrelas dos métodos preservadas como julgamento horticultural. Exposição ao sol restrita ao início da manhã, sem evidência de tolerância ao sol forte.

**Evidências:** POWO confirma o nome aceito e basiônimo; dissertação de Costa sustenta morfologia; IOSPE relata cultivo com esfagno em vaso; Orquidário Aparecida e Orquidário Oriental fornecem duas orientações brasileiras específicas, **sem receitas percentuais**. Meta de 25 produtores não atingida. A classificação quantitativa permanece **D**.

**Limite de validação:** o teste Playwright/Chromium registrado em 2026-11-03 ocorreu antes da errata das alternativas e antes desta revisão. Não houve nova execução de navegador, carregamento de fotos ou inspeção visual da versão atual; a auditoria visual fica reservada para o ZIP final, conforme orientação do responsável.

**Parecer:** revisão científica/editorial documental concluída dentro das fontes disponíveis; homologação quantitativa **não demonstrada**.
