# MACS 1.1 — Ficha 147 do catálogo — Pholidota chinensis

Data: 2026-11-04. **EM AUDITORIA TÉCNICA — NÃO ENCERRADA.** A numeração 147 identifica a posição no catálogo `dados/orquideas/index.js`, não uma nova etapa sequencial 147 homologada. Consultar `MACS-1.1-CONTROLE-SEQUENCIA-CANONICA.md`.

## Conferência estática
- Nome tradicional: *Pholidota chinensis*; a ficha registra *Coelogyne chinensis* como nome aceito segundo POWO/Kew, **sem nova verificação externa nesta etapa**.
- Mistura principal em vaso: 30% macadâmia média + 25% pinus médio + 20% casca de arroz carbonizada + 15% carvão vegetal médio + 10% esfagno solto = **100%**. Campos `receitaTexto` e `itens` coincidem na composição.
- Campo `substrato`: **duas alternativas qualitativas**, sem percentuais: pinus/carvão/esfagno e macadâmia/chips de coco/carvão. Não substituir perlita por argila; a retirada anterior de alternativas com perlita/turfa é registrada na própria `notaEvidencia`, não homologada nesta auditoria.
- Cultivo principal vaso plástico; barro, cachepô de madeira e placa/tronco como opções descritas. As estrelas comparativas de suporte são **provisórias, sem homologação quantitativa**.
- Quatro URLs de fotografias externas constam da ficha. **Carregamento real e disponibilidade das URLs não confirmados** nesta conferência.
- IDC 3.2, IAR 2.0, layout e assets preservados. Referências a municípios removidas de `climaFloracao` e `adaptacaoRegional` no commit `504350f7`.

## Evidência e limites
- O controle MACS 1.0, segunda passagem, registro 147, documenta a mesma receita e alerta para o esfagno (10%), raízes em vaso plástico/barro, altitude e falta de validação por até 25 produtores brasileiros.
- **Classe D — NÃO HOMOLOGADA quantitativamente**: os percentuais da receita e as estrelas dos suportes são propostas horticulturais, não resultados de ensaio comparativo específico ou amostra independente documentada.
- Não inferir que fontes taxonômicas validam formulações de substrato.

## Validação em navegador
Criado `.github/workflows/conferir-visual-macs-ficha-147.yml` no commit `dc1f53f3` para testar Chromium desktop/celular, fotos externas, imagens, proporções, duas alternativas qualitativas, erros JavaScript e overflow. **Execução ainda não confirmada como success**. Falha de imagem externa deve ser diagnosticada, nunca simplesmente ignorada.

## Pendências de encerramento
Confirmar workflow aprovado e inspecionar artefatos de capturas; verificar especificamente carregamento das quatro fotografias externas e integridade dos assets; registrar evidência botânica/horticultural específica e limites da classe D. **Não avançar à próxima ficha enquanto esses critérios técnicos não forem concluídos.**
