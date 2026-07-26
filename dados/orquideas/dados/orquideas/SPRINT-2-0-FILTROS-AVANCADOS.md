# Sprint 2.0 — Filtros avançados

Implementado sobre a versão com Fotos1 integrada.

## Novos filtros
- Sombrite: 50% ou 70%
- Sol direto: Sim ou Não
- Raridade: níveis 1 a 5

## Correção importante
O filtro antigo de iluminação tentava comparar o objeto `iluminacao` como texto. Agora os campos estruturados `iluminacao.sombrite` e `iluminacao.solDireto` são consultados corretamente.

## Mantidos
- Busca textual
- Gênero
- Classificação
- Clima
- Dificuldade
- Mês de floração
- Filtro mensal e origem geográfica
