# MACS 1.1 — Ficha 149 — Stelis cf. aprica

Data: 2026-11-04. **AUDITORIA TÉCNICA E VISUAL ENCERRADA — CINCO CAPTURAS INSPECIONADAS. HOMOLOGAÇÃO CIENTÍFICA QUANTITATIVA: CLASSE D (NÃO HOMOLOGADA).**

Arquivo: `dados/orquideas/stelis-cf-aprica.js`; ID: `stelis-cf-aprica`.

## Verificação estática inicial
- Identificação **provisória**: manter *Stelis cf. aprica* até comprovação morfológica; o nome aceito da espécie não identifica automaticamente o exemplar.
- Receita principal para vaso plástico vasado: **35% casca de pinus fina/média + 25% casca de arroz carbonizada + 20% carvão vegetal pequeno + 20% esfagno solto = 100%**. Os quatro itens visuais correspondem ao texto.
- Duas alternativas **qualitativas, sem percentuais**: (1) pinus/carvão/esfagno; (2) chips de coco pequenos preparados/carvão/perlita de granulometria apropriada. Não substituir perlita sem fundamentação científica.
- Quatro fotografias externas cadastradas: `orchidspecies.com`, `orquideasmantovani.com.br`, `fieldmuseum.org` e `awsli.com.br`; carregamento e correspondência botânica ainda não confirmados.
- Cultivo principal em vaso plástico vasado; alternativas incluem placa/tronco e cachepô de madeira. Conferir todos os assets na renderização.
- **Classe D: percentuais e estrelas NÃO homologados quantitativamente**. Não há ensaio comparativo específico nem levantamento individualizado suficiente de produtores.

## Teste técnico
Workflow `.github/workflows/conferir-visual-macs-ficha-149.yml` publicado no commit `28169b2f`, com Chromium desktop/mobile, quatro fotografias, receita 35/25/20/20, duas alternativas sem porcentagens, console e imagens. **Execução e artefatos ainda não verificados.**

## Bloqueios de encerramento
1. Confirmar fontes taxonômicas e limites da identificação `cf.`.
2. Verificar execução Chromium e corrigir imagens/assets/JavaScript se necessário.
3. Inspecionar as cinco capturas do teste e registrar resultado final.
4. Encerrar tecnicamente apenas após evidência suficiente; manter classe D separada da aprovação técnica.

**Não avançar para ficha 150 até concluir a 149.**

## Revisão editorial V4.9 — 2026-11-04
- Campo `descricao` (Sobre a espécie) revisado de 185 para 101 palavras, dentro da faixa editorial de 90–120; removida referência a estado específico, preservada identificação `cf.` e informações gerais de arquitetura, flores e habitat.
- Alteração publicada no commit `32e913a6`, sem mudança de substrato, fotos, estrelas ou cultivo.
- O teste Chromium deve ser reavaliado no commit mais recente; não considerar execução anterior suficiente para homologar esta revisão. Inspeção de artefatos permanece pendente.

## Conferência adicional de assets — 2026-11-04
- Conferidos os identificadores na biblioteca `js/biblioteca-cultivo-v4.js`: `stelis-aprica-vaso-plastico`, `placa-madeira`, `cesto-madeira`, `arvore-viva`.
- Arquivos WebP consultados para vaso específico, placa e árvore: o acesso encontrou conteúdo binário, mas o leitor textual não o decodifica; isso não é prova de carregamento correto no navegador.
- Descrição editorial V4.9 conferida com 101 palavras; substrato principal 35+25+20+20=100 e duas alternativas sem percentuais.
- A execução atual do GitHub Actions e as capturas desktop/mobile continuam pendentes de comprovação; **não encerrar a ficha sem essas evidências**.

## Correção da tabela IDC 3.2
- Detectada tabela histórica de faixas agrupadas (`26–50`) no objeto `indiceDificuldadeCultivo.faixas`.
- Corrigida para 0–25 (5 estrelas), 26–35 (4), 36–50 (3), 51–89 (2), 90–100 (1), commit `535542bc`.
- Índice 29/100 e classificação 4/5 preservados; pesos dos oito critérios e dados MACS não alterados.
- A edição da ficha aciona nova execução do workflow da ficha 149; aguardar aprovação e inspeção de artefatos da versão atualizada.

## Encerramento visual — pacote recebido em 2026-11-04
- ZIP fornecido pelo usuário: `macs-ficha-149-inspecao-visual (1).zip`, contendo cinco capturas: diagnóstico desktop, ficha desktop, ficha mobile, substrato desktop e substrato mobile.
- Inspeção visual: quatro fotografias na galeria, vaso plástico vasado principal e três modalidades alternativas, quatro imagens de ingredientes (35% pinus, 25% arroz carbonizado, 20% carvão, 20% esfagno), exatamente duas misturas alternativas sem percentuais, layout legível no desktop e no celular.
- Em telas estreitas, ingredientes da receita organizados em duas linhas; comportamento responsivo aceitável, sem defeito bloqueante observado.
- Falha da execução Chromium #2 (contagem incorreta de métodos) foi diagnosticada como erro de seletor; `ficha.js` usa `.forma-principal-v4` e `.alternativa-forma-v41`, não quatro `.forma-cultivo-v4`. Seletor corrigido no commit `89333ebe`.
- **Resultado: inspeção técnica visual concluída**, sem necessidade de mudar receita, fotos ou layout. As capturas não demonstram, isoladamente, o status verde do workflow mais recente; não afirmar aprovação do job sem log correspondente.
- **Identificação botânica provisória (`cf.`) e classe D mantidas.** Esta aprovação técnica não constitui homologação científica quantitativa dos percentuais e estrelas.

## Evidência de execução GitHub Actions
- Captura de GitHub Actions enviada pelo usuário confirma **sucesso (verde) da execução #3** do workflow `Conferência visual MACS 1.1 — ficha 149`, commit `89333ebe`, após correção do seletor de quatro métodos.
- A captura mostra execução posterior relativa ao commit `535542bc` ainda **em andamento**; não registrar aprovação desta execução sem confirmação posterior.
- A inspeção das cinco capturas do pacote da ficha 149 já foi concluída sem defeitos bloqueantes; encerramento técnico/visual documentado, **classe D** científica e identificação `cf.` preservadas.
