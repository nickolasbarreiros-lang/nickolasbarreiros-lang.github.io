# Auditoria do Índice de Raridade — Fase 1

- Fichas processadas: **139**
- Espécies/formas botânicas avaliadas: **130**
- Híbridos/grexes marcados como índice botânico não aplicável: **9**
- Distribuição das notas calculadas: {2: 17, 3: 68, 4: 34, 5: 11}
- Fichas que atingiram ★★★★★: **11**

## Plantas que atingiram ★★★★★

- Bifrenaria tyrianthina — índice 85/100
- Catasetum mattosianum — índice 81/100
- Cattleya schilleriana — índice 88/100
- Dendrobium tenellum — índice 85/100
- Cattleya caulescens — índice 83/100
- Cattleya fournieri — índice 90/100
- Cattleya praestans — índice 81/100
- Maxillaria schunkeana — índice 86/100
- Polystachya neobenthamia — índice 82/100
- Acianthera modestissima — índice 81/100
- Cattleya wittigiana — índice 90/100

## Nota metodológica
Esta implementação é a **Fase 1** do índice. Todas as espécies receberam os três fatores que podem ser obtidos de forma consistente a partir do conteúdo já consolidado das fichas: restrição de distribuição, escassez observacional editorial e endemismo/especialização de habitat. Isso totaliza 55% do peso e, portanto, atinge o limiar mínimo do motor V1.

O campo `ocorrencias` nesta fase é explicitamente um **proxy da auditoria editorial anterior**, não uma contagem GBIF. Os campos conservação, população/fragmentação e ameaças ficaram `null` quando não havia dado estruturado confiável no pacote. Eles devem ser preenchidos em uma Fase 2 com IUCN/CNCFlora, GBIF limpo e literatura científica. Isso evita inventar números de conservação.

Somente espécies com resultado calculado de 80–100 (★★★★★) devem receber o selo Rara.