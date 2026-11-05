# MACS 1.1 — Ficha 147 do catálogo — Pholidota chinensis

Data: 2026-11-04. **AUDITORIA TÉCNICA ENCERRADA — TESTES #5 E #8 APROVADOS E ARTEFATOS VISUAIS INSPECIONADOS. HOMOLOGAÇÃO CIENTÍFICA QUANTITATIVA: CLASSE D (NÃO HOMOLOGADA).** A numeração 147 identifica a posição no catálogo `dados/orquideas/index.js`, não uma nova etapa sequencial 147 homologada. Consultar `MACS-1.1-CONTROLE-SEQUENCIA-CANONICA.md`.

## Conferência estática
- Nome tradicional: *Pholidota chinensis*; a ficha registra *Coelogyne chinensis* como nome aceito segundo POWO/Kew, **sem nova verificação externa nesta etapa**.
- Mistura principal em vaso: 30% macadâmia média + 25% pinus médio + 20% casca de arroz carbonizada + 15% carvão vegetal médio + 10% esfagno solto = **100%**. Campos `receitaTexto` e `itens` coincidem na composição.
- Campo `substrato`: **duas alternativas qualitativas**, sem percentuais: pinus/carvão/esfagno e macadâmia/chips de coco/carvão. Não substituir perlita por argila; a retirada anterior de alternativas com perlita/turfa é registrada na própria `notaEvidencia`, não homologada nesta auditoria.
- Cultivo principal vaso plástico; barro, cachepô de madeira e placa/tronco como opções descritas. As estrelas comparativas de suporte são **provisórias, sem homologação quantitativa**.
- Quatro URLs de fotografias externas constam da ficha. **Quatro imagens carregaram no Chromium do GitHub Actions #5**, segundo o teste aprovado mostrado na captura fornecida pelo usuário; disponibilidade futura de hospedagens externas não é garantida.
- IDC 3.2, IAR 2.0, layout e assets preservados. Referências a municípios removidas de `climaFloracao` e `adaptacaoRegional` no commit `504350f7`.

## Evidência e limites
- O controle MACS 1.0, segunda passagem, registro 147, documenta a mesma receita e alerta para o esfagno (10%), raízes em vaso plástico/barro, altitude e falta de validação por até 25 produtores brasileiros.
- **Classe D — NÃO HOMOLOGADA quantitativamente**: os percentuais da receita e as estrelas dos suportes são propostas horticulturais, não resultados de ensaio comparativo específico ou amostra independente documentada.
- Não inferir que fontes taxonômicas validam formulações de substrato.

## Validação em navegador
Criado `.github/workflows/conferir-visual-macs-ficha-147.yml` no commit `dc1f53f3` para testar Chromium desktop/celular, fotos externas, imagens, proporções, duas alternativas qualitativas, erros JavaScript e overflow. **Execução #5 confirmada como success na captura do GitHub Actions fornecida pelo usuário (commit `e24f1f13`, 2026-11-04)**. O teste inclui quatro fotos, assets, duas misturas, percentuais, erros JS e overflow em desktop/celular. A execução #4 falhou com a foto `orchids.la.coocan.jp`; imagem substituída por URL Wikimedia Commons no commit `6e744637`, e teste ajustado em `e24f1f13`. Capturas do navegador foram produzidas como artefatos, mas ainda não inspecionadas manualmente nesta etapa.

## Pendências de encerramento
Workflow aprovado e carregamento das quatro fotos/assets verificado automaticamente. **Pendências remanescentes:** inspeção humana das capturas desktop/celular; conferir atribuição/licença da fotografia Wikimedia na ficha; manter classe D explicitamente não homologada quantitativamente. A aprovação do teste não constitui homologação científica.

## Atribuição da quarta fotografia (Wikimedia Commons)
- Obra: *Pholidota chinensis - Flickr 003 (1).jpg*, autoria **Elena Gaillard** (Flickr/orchidgalore), fotografia de 26/03/2011.
- Fonte: https://commons.wikimedia.org/wiki/File:Pholidota_chinensis_-_Flickr_003_(1).jpg
- Licença: **Creative Commons Attribution 2.0 Generic (CC BY 2.0)** — https://creativecommons.org/licenses/by/2.0/
- Modificações: nenhuma alteração editorial da imagem documentada nesta substituição; apenas a URL de exibição foi trocada.
- **Crédito implementado no front-end:** a galeria da ficha exibe autoria, link da obra no Wikimedia Commons, licença CC BY 2.0 e indicação de ausência de alterações, no commit `c8482958`. **Ainda falta confirmar a renderização final no navegador e inspecionar as capturas de tela.**

## Resultado final do teste automatizado #8 — 2026-11-04
- Captura fornecida pelo usuário mostra job `conferir` com resultado **succeeded** em 57 segundos, incluindo `Conferir ficha em navegador real` e `actions/upload-artifact@v4` concluídos.
- Workflow `conferir-visual-macs-ficha-147.yml`, commit `011ed2da`, verifica também a presença, links, visibilidade e enquadramento do crédito CC BY 2.0 em celular.
- O aviso sobre Node.js 20 é de depreciação das actions e não impediu o resultado aprovado.
- **Inspeção humana das imagens dos artefatos ainda não realizada**: aprovação do Chromium não substitui revisão visual das capturas desktop e celular.
- **Classe D — não homologada quantitativamente**: permanece sem amostra/ensaios suficientes para validar percentuais e estrelas.

## Encerramento técnico — inspeção dos artefatos do teste #8
- Inspecionados os cinco arquivos enviados pelo usuário: `macs-ficha-147-ficha-desktop.png` (1465×4729), `macs-ficha-147-ficha-mobile.png` (390×10793), `macs-ficha-147-diagnostico-desktop.png` (1465×4729), `macs-ficha-147-substrato-desktop.png` (1235×826) e `macs-ficha-147-substrato-mobile.png` (330×2321).
- Verificados visualmente: quatro fotografias na galeria, crédito público CC BY 2.0 da quarta foto, formas de cultivo, assets dos cinco ingredientes, proporções 30+25+20+15+10=100%, duas alternativas qualitativas sem percentuais e legibilidade do layout em desktop e celular.
- Observação cosmética não bloqueante: no arranjo móvel da receita principal, o símbolo `+` junto ao quinto ingrediente fica deslocado à esquerda; composição e leitura permanecem íntegras. Não alterar layout sem revisão de regressão global.
- **Encerramento técnico aprovado**: não restam pendências bloqueantes de funcionalidade, imagem ou apresentação na ficha 147 conforme evidências disponíveis. A aprovação não equivale a validação experimental de percentuais/estrelas; **classe D** mantida e explicitamente documentada.


## Revisão matemática e de evidência — 2026-11-05
- Correção na ficha `dados/orquideas/pholidota-chinensis.js`, commit `739203b`: estrelas dos quatro métodos de cultivo agora `null`, com status provisório, pois a comparação não foi homologada quantitativamente. A classe MACS 1.1 continua **D**.
- **IAR 2.0 litoral:** fatores habitat/temperatura/água/ventilação/luz/sazonalidade/floração = 3/2/4/5/4/3/2. Pela fórmula `6H+6T+A+V+L+S+4F`: 18+12+4+5+4+3+8 = **54/100** (antes 48); três estrelas mantidas.
- **IAR 2.0 montanha:** fatores 5/5/4/4/4/5/5: 30+30+4+4+4+5+20 = **97/100** (antes 92); cinco estrelas mantidas.
- **IDC 3.2:** índice documental 47/100, três estrelas; faixas atualizadas para 0–25 (5 estrelas), 26–35 (4), 36–50 (3), 51–89 (2), 90–100 (1). Não foi reconstruída independentemente a fórmula de conversão das notas individuais para 47/100.
- Esta revisão é **correção de dados da ficha 147 do catálogo**, não atribuição de número 147 à sequência de matrizes MACS 1.1. A revisão técnica requer confirmação de testes após a alteração.
