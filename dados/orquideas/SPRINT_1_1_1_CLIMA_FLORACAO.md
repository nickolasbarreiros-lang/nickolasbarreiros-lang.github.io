# Sprint 1.1.1 — Clima para floração

## Entrega

- Adicionado o campo `climaFloracao` aos 113 módulos de orquídeas presentes nesta versão do projeto.
- Mantido o campo `floracao`, que continua indicando a época em que a planta normalmente floresce.
- Inserido o novo cartão **🌡️ Clima para floração** entre **Rega** e **Época de floração**.
- Adicionado fallback para fichas antigas: se `climaFloracao` não existir, a ficha usa o campo geral `clima`.
- Ajustado o grid para sete cartões, mantendo três colunas no desktop, duas no tablet e uma no celular. O último cartão ocupa a linha inteira para equilibrar o conjunto.

## Diferença entre os campos

- `floracao`: responde **quando a orquídea floresce**.
- `climaFloracao`: responde **quais condições ajudam ou são necessárias para ela florescer**.

## Critério editorial

Os textos de `climaFloracao` foram escritos como recomendações práticas de cultivo. Eles destacam, quando aplicável:

- noites frias ou frescas;
- quebra térmica;
- período seco ou repouso;
- calor e umidade;
- ventilação;
- maturação dos pseudobulbos;
- luminosidade necessária para indução floral.

Essas recomendações não substituem os dados botânicos de habitat e distribuição.
