# MACS 1.1 — Ficha 147 do catálogo — Pholidota chinensis

Data: 2026-11-04. **TESTE AUTOMATIZADO APROVADO — AUDITORIA TÉCNICA EM FECHAMENTO.** A numeração 147 identifica a posição no catálogo `dados/orquideas/index.js`, não uma nova etapa sequencial 147 homologada. Consultar `MACS-1.1-CONTROLE-SEQUENCIA-CANONICA.md`.

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
- **Obrigação ainda a conferir no front-end:** crédito e licença precisam ficar acessíveis ao público que vê a fotografia, não apenas neste relatório interno.
