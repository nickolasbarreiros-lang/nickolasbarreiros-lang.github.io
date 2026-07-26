# Sprint 2.1 — Busca Inteligente

## Implementado

- Pesquisa sem diferenciar maiúsculas, minúsculas ou acentos.
- Pesquisa por todas as palavras digitadas, em qualquer ordem.
- Correspondência parcial, permitindo consultas como `walker` para `walkeriana`.
- Tolerância a um erro de digitação em palavras com cinco ou mais caracteres.
- Suporte aos campos opcionais `nomePopular`, `nomesPopulares`, `sinonimos`, `palavrasChave` e `apelidos`.
- Pesquisa por abreviação botânica do gênero, como `C walkeriana`.
- Pesquisa também em origem, região, habitat, clima, cultivo, características e meses de floração.

## Exemplos

- `walker` → Cattleya walkeriana
- `catleya walkeriana` → encontra mesmo com erro em Cattleya
- `c walkeriana` → abreviação do gênero
- `brasileira perfumada` → combina características
- `julho 50%` → combina mês de floração e sombrite

Os campos de sinônimos e nomes populares já são reconhecidos pela busca e podem ser preenchidos progressivamente nas fichas.
