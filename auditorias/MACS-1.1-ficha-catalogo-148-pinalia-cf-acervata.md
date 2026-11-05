# MACS 1.1 — Ficha 148 do catálogo — Pinalia cf. acervata

Data: 2026-11-04. **AUDITORIA TÉCNICA ENCERRADA — CHROMIUM #2 APROVADO E CINCO CAPTURAS INSPECIONADAS. HOMOLOGAÇÃO CIENTÍFICA QUANTITATIVA: CLASSE D (NÃO HOMOLOGADA).** Posição 148 no catálogo; arquivo histórico `dados/orquideas/pinalia-elata.js`, ID `pinalia-elata`. Não renomear ID sem avaliar compatibilidade dos links.

## Primeira conferência estática
- **Identificação provisória:** `Pinalia cf. acervata`; a ficha explicita que a confirmação depende de caracteres diagnósticos do labelo. Não converter `cf.` em identificação definitiva sem evidência morfológica.
- **Receita principal:** 50% casca de pinus média + 30% carvão vegetal médio + 20% esfagno de fibra longa solto = **100%**; texto e três itens visuais coincidem.
- **Exatamente duas misturas alternativas qualitativas, sem percentuais:** (1) pinus médio + chips de coco médios preparados + carvão vegetal médio; (2) pinus médio + carvão vegetal médio + pequena quantidade de esfagno de fibra longa solto.
- **Quatro fotos externas** cadastradas (duas de `acdn-us.mitiendanube.com`, duas de `cdnhuawei.lojavirtuolpro.com`). **Ainda não foi comprovado carregamento no navegador.** Identidade taxonômica das fotos também demanda cautela.
- **Cultivo visual:** vaso plástico vasado, placa/tronco, cachepô de madeira e vaso de barro; verificar renderização e existência dos assets.
- **Classe D — NÃO HOMOLOGADA quantitativamente:** os percentuais e estrelas são propostas horticulturais sem experimentos independentes ou amostra documental de 25 produtores. A identificação provisória aumenta a incerteza.

## Pendências antes de encerrar
1. Conferir fontes botânicas primárias e distinguir `Pinalia acervata` de espécies semelhantes, sem afirmar identificação definitiva.
2. Testar as quatro fotos externas e os assets em Chromium desktop/celular, incluindo console JavaScript e overflow.
3. Inspecionar capturas visuais do layout V4.9, cinco ingredientes quando aplicável (nesta ficha são três), duas alternativas e consistência do texto.
4. Registrar resultado do workflow e eventuais correções com evidência; só então encerrar tecnicamente e liberar ficha 149.

**Regra de fluxo:** não avançar à ficha 149 enquanto esta ficha não estiver tecnicamente encerrada.

## Complemento documental — teste e nomenclatura
- Workflow de verificação visual criado no commit aaf8f768: `.github/workflows/conferir-visual-macs-ficha-148.yml`. Resultado ainda não confirmado.
- Referências para verificação botânica: Plants of the World Online (Kew), Flora of China e Flora of Thailand. A aceitação do nome científico não comprova a identificação individual do exemplar; manter `cf.` até análise morfológica documentada.
- Diferenças entre medidas descritivas publicadas exigem atribuição precisa de cada dado à sua fonte. Não afirmar que uma única flora respalda todas as medidas da ficha.

## Encerramento técnico — evidências do Chromium #2
- Execução #2 do workflow `Conferência visual MACS 1.1 — ficha 148` aprovada conforme captura do GitHub Actions fornecida pelo usuário; commit `7ed8f5d`.
- Inspeção das cinco imagens do ZIP `macs-ficha-148-inspecao-visual.zip`: `macs-ficha-148-diagnostico-desktop.png` (1465×4815), `macs-ficha-148-ficha-desktop.png` (1465×4815), `macs-ficha-148-ficha-mobile.png` (390×10663), `macs-ficha-148-substrato-desktop.png` (1235×800), `macs-ficha-148-substrato-mobile.png` (330×1998).
- Quatro fotografias aparecem na galeria. Forma de cultivo principal e três alternativas aparecem com imagens; substrato principal apresenta os três ingredientes corretos 50% pinus + 30% carvão + 20% esfagno = 100%; exatamente duas alternativas sem percentuais. Layout desktop/mobile legível, sem defeitos visuais bloqueantes observados.
- Observação cosmética: em tela estreita, o terceiro ingrediente do substrato passa para segunda linha; mantém legibilidade e não requer alteração.
- **Resultado: auditoria técnica concluída.** A identificação continua provisória (*Pinalia cf. acervata*) e os percentuais/estrelas permanecem **classe D — não homologados quantitativamente**; aprovação técnica não constitui validação científica experimental.
- Liberada a ficha seguinte do catálogo para iniciar auditoria individual, mantendo bloqueio de avanço até encerramento de cada ficha.

## Revisão corretiva MACS e índices — 2026-11-05
- Commit `ac5e570` removeu pontuações experimentais não fundamentadas dos quatro métodos de cultivo (`estrelas:null`), mantendo descrição qualitativa e identificação *Pinalia cf. acervata*.
- IDC 3.2: soma ponderada registrada = 32,5, arredondada para **33/100**, quatro estrelas. Faixas ajustadas para 0–25 (5), 26–35 (4), 36–50 (3), 51–89 (2), 90–100 (1).
- IAR 2.0 litoral: `6×3+6×4+4+3+4+3+4×4` = **72/100**, quatro estrelas.
- IAR 2.0 montanha: `6×4+6×4+4+4+4+4+4×3` = **76/100**, quatro estrelas.
- Receita principal de 50% pinus, 30% carvão e 20% esfagno = 100%; duas alternativas qualitativas mantidas sem percentuais.
- A revisão não constitui homologação quantitativa; MACS **classe D**. Aguardam-se os testes de regressão após a alteração.
