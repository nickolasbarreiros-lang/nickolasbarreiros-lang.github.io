# MACS 1.0 — protocolo de pesquisa

Este pacote **não atualiza as cinco fichas**: cria registros de pesquisa pendente, evitando apresentar inferências não verificadas como evidências.

## Procedimento

1. Pesquisar no mínimo 25 produtores/orquidários brasileiros por espécie, registrando **nome, URL/referência, data, resultado e recomendação literal resumida**; registrar também resultados negativos. A meta é de consultas, não de 25 recomendações positivas.
2. Verificar taxonomia, distribuição, hábito e habitat em fontes botânicas especializadas. Distinguir espécie exata de congêneres e híbridos.
3. Documentar oito critérios radiculares e hídricos, com grau de confiança e origem de cada avaliação; deixar `null` quando não houver evidência.
4. Comparar sete montagens oficiais: `placa-tronco`, `vaso-barro`, `vaso-plastico`, `vaso-plastico-vasado`, `cesto-madeira`, `arvore-viva`, `raizes-soltas`. Critérios ponderados: raízes 25, equilíbrio hídrico 25, aeração 20, espaço 10, calor 10, evidência 10. Não transformar pontuação em prova científica; documentar riscos eliminatórios.
5. Formular substrato para recipiente, com percentuais somando 100, material, granulometria, justificativa e comparação com recomendações brasileiras. Não usar pedra-pomes; para Bifrenaria, não usar esfagno.
6. Marcar `status: validado` somente depois de completar evidências e revisão. O verificador reprova registros marcados como validados sem cumprir requisitos.

**Escopo:** manter o layout V4.9 e IDC 3.2 / IAR 2.0 / Raridade V2 independentes. Não alterar imagens ou JS de espécies antes da revisão.

**Executar:** `python scripts/verificar_macs_1_0.py`.
