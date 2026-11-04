# MACS 1.1 — Reconciliação de numeração e sequência (2026-11-04)

## Fonte de verdade para a ordem das fichas
`dados/orquideas/index.js`, vetor exportado `orquideas`, contém **149 entradas**, cada uma com import correspondente e sem identificadores duplicados (conferência estática). A ordem do vetor, e não a ordem dos imports, determina a posição no catálogo.

## Três numerações distintas
- **Posição no catálogo:** posição **011** = Cattleya Pumpkin Festival; **146** = Oncidium Summer Wind; **147** = Pholidota chinensis; **148** = Pinalia cf. acervata (arquivo `pinalia-elata.js`); **149** = Stelis cf. aprica.
- **MACS 1.0, segunda passagem:** registros **146**, **147** e **148** do `auditorias/MACS-1.0-CONTROLE-GERAL.md` correspondem às posições acima, mas não são números de matriz MACS 1.1.
- **MACS 1.1, documentos:** `MACS-1.1-MATRIZ-011-CATTLEYA-PUMPKIN-FESTIVAL.md` é matriz comparativa 011; `MACS-1.1-matriz-146-cattleya-pumpkin-festival.md` usa **146 como etapa de encerramento técnico**, e não posição do catálogo.

## Regra de controle
Manter separados os campos **posição no catálogo** e **etapa de auditoria MACS 1.1**. Não renumerar retroativamente o encerramento técnico 146. A expressão "matriz 147" está ambígua no histórico; Pholidota chinensis é comprovadamente a **ficha 147 do catálogo**, candidata natural para a próxima revisão por ordem de catálogo, mas não se deve atribuir-lhe automaticamente o identificador de etapa MACS 1.1.

## Encerramento
Uma execução Chromium verde comprova a validação automatizada prevista, não homologação quantitativa. Classe D permanece não homologada quantitativamente quando faltam ensaios específicos ou dados independentes verificáveis. Concluir cada ficha integralmente antes de avançar, mantendo duas alternativas qualitativas sem percentuais e uma receita principal internamente consistente.
