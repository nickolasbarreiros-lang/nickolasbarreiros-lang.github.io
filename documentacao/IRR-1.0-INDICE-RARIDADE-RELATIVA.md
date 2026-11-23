# IRR 1.0 — Índice de Raridade Relativa

Metodologia complementar do Orquidário Digital V4.9, aprovada em 23/11/2026. Mede raridade relativa para colecionadores, não risco oficial de extinção.

| Critério | Peso | Nota 1 | Nota 2 | Nota 3 | Nota 4 | Nota 5 |
|---|---:|---|---|---|---|---|
| Disponibilidade comercial | 35 | Muito comercializada | Fácil | Pouco comercializada | Difícil | Extremamente difícil |
| Distribuição natural | 20 | Muito ampla | Ampla | Regional | Restrita | Muito restrita |
| Abundância natural | 15 | Muito abundante | Comum | Pouco frequente | Rara | Extremamente rara |
| Conservação | 15 | LC | NT | VU | EN | CR |
| Escassez de informações | 15 | Muito completas | Suficientes | Limitadas | Escassas | Quase inexistentes |

## Procedimento obrigatório

1. Pesquisar nome aceito e sinônimos em até 25 orquidários brasileiros, buscando maximizar cobertura. Registrar data, URL, disponibilidade efetiva, anúncios esgotados e identidade; não confundir ausência em busca com ausência no mercado.
2. Consultar POWO, Flora e Funga do Brasil, WFO, GBIF e literatura para distribuição e abundância; não inferir abundância apenas de registros de herbário.
3. Consultar CNCFlora, listas oficiais e IUCN para conservação, registrando abrangência e data. DD, NE e ausência de avaliação não equivalem a LC. Avaliações regionais devem ser identificadas como tais.
4. Avaliar escassez de informações específicas sobre biologia e cultivo após busca pelos sinônimos. Não confundir escassez documental com raridade biológica.
5. Registrar evidência, justificativa e nota de cada critério. Permitir notas intermediárias justificadas. Critérios indeterminados recebem null, não zero, e são excluídos do denominador. Para híbridos, critérios naturais não aplicáveis também recebem null.
6. Calcular IRR = (Σ(peso × nota)/Σ(pesos válidos) − 1) × 25. Sem critérios válidos, não calcular. Registrar cobertura dos pesos e confiança; cobertura não é confiança. Não arredondar antes da classificação.
7. Converter: 0–20 = 1 estrela (muito comum); >20–40 = 2 (comum); >40–60 = 3 (pouco comum); >60–80 = 4 (rara); >80–100 = 5 (muito rara). Zero pontos válidos corresponde a uma estrela, nunca zero estrelas.
8. Registrar índice, critérios, cobertura, fontes e status em indiceRaridadeRelativa; publicar estrelas em avaliacoes.raridade. Avaliações preliminares devem ser explicitadas na documentação interna. Preservar layout V4.9. Não inventar evidências para preencher lacunas.

## Exemplo preliminar: Maxillaria johannis

Notas comerciais 4, distribuição 2, abundância indeterminada, conservação 1 (referência regional ainda a verificar), escassez 4. Soma ponderada 255; cobertura 85%; IRR 50; três estrelas. As notas são provisórias e precisam de auditoria das fontes; não representam homologação científica.

Aplicar a todas as novas fichas e retroativamente às existentes em auditoria. Não alterar outras avaliações sem revisão específica.
