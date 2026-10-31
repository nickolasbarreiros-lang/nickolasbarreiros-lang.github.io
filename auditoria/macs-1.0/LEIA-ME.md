# MACS 1.0 — protocolo de pesquisa

O protocolo distingue pesquisa, revisão técnica e homologação. Nenhuma ficha deve ser marcada como validada apenas por possuir uma receita proposta.

## Procedimento

1. Pesquisar o maior número viável de produtores/orquidários brasileiros por espécie, tendo **25 consultas como meta flexível, não exigência absoluta**. Registrar esforço de busca, sinônimos, fontes sem resultado e justificativa de encerramento quando a meta não for alcançada. Para cada consulta, registrar **nome, URL/referência, data, resultado e recomendação literal resumida**; registrar também resultados negativos. A meta é de consultas, não de 25 recomendações positivas.
2. **Consultar obrigatoriamente fontes científicas e botânicas**, incluindo estudos experimentais, literatura acadêmica e bases taxonômicas confiáveis. Registrar a aplicabilidade de cada evidência (espécie exata, sinônimo, híbrido, congênere, plântula ou planta adulta). Verificar taxonomia, distribuição, hábito e habitat em fontes botânicas especializadas. Distinguir espécie exata de congêneres e híbridos.
3. Documentar oito critérios radiculares e hídricos, com grau de confiança e origem de cada avaliação; deixar `null` quando não houver evidência.
4. Comparar sete montagens oficiais: `placa-tronco`, `vaso-barro`, `vaso-plastico`, `vaso-plastico-vasado`, `cesto-madeira`, `arvore-viva`, `raizes-soltas`. Critérios ponderados: raízes 25, equilíbrio hídrico 25, aeração 20, espaço 10, calor 10, evidência 10. Não transformar pontuação em prova científica; documentar riscos eliminatórios.
5. Formular substrato para recipiente, com percentuais somando 100, material, granulometria, justificativa e comparação com recomendações brasileiras. Não usar pedra-pomes; para Bifrenaria, não usar esfagno.
6. Marcar `status: validado` somente após revisão científica e horticultural documentada, critérios radiculares, comparação dos sete suportes, riscos e composição de substrato. **Menos de 25 consultas não impede homologação**, desde que haja busca ampla demonstrada, justificativa de esgotamento razoável das fontes e confiança suficiente. Nunca inventar consultas ou notas. O verificador deve aceitar meta flexível e exigir evidência e justificativa para homologações com amostragem menor.

**Escopo:** manter o layout V4.9 e IDC 3.2 / IAR 2.0 / Raridade V2 independentes. Não alterar imagens ou JS de espécies antes da revisão.

**Executar:** `python scripts/verificar_macs_1_0.py`.

## Hierarquia e rastreabilidade

- Evidência científica diretamente aplicável tem maior peso que analogias genéricas; resultados de plântulas não são prova para plantas adultas.
- Produtores brasileiros fornecem evidência horticultural complementar, inclusive convergências e divergências.
- Diferenciar resultados experimentais, práticas documentadas e inferências técnicas; percentuais propostos não são resultados experimentais.
- Informar confiança (alta/moderada/baixa), lacunas e razão de encerramento da pesquisa.
- Preservar layouts V4.9 e conteúdos já aprovados até haver revisão individual suficiente.
