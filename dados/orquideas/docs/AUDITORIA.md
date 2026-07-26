# Auditoria estrutural do catálogo — v1.0

Data: 23/07/2026

## Resultado

- Módulos individuais ativos: **111**
- Imports no `index.js`: **111**
- Entradas no array `orquideas`: **111**
- IDs duplicados: **0**
- Exports duplicados: **0**
- Arquivos importados inexistentes: **0**
- Módulos órfãos: **0**
- Imports ausentes no array: **0**
- Entradas desconhecidas no array: **0**
- Espécies sem meses de floração cadastrados: **109**
- Espécies sem fotos cadastradas: **109**
- Caminhos de fotos quebrados: **0**

## Correções realizadas

1. Recuperado `Dendrobium polysema` da base legada `dados/orquideas.js`.
2. Recuperada `Bifrenaria verboonenii` da base legada `dados/orquideas.js`.
3. As seis imagens já existentes dessas duas espécies foram mantidas e vinculadas aos novos módulos.
4. Removido do catálogo ativo o módulo inválido `dica-de-ouro-em-serra-es-o-segredo-e.js`.
5. Corrigidos os imports e o array exportado em `dados/orquideas/index.js`.
6. Mantida a estrutura de dados atual para preservar compatibilidade com os cartões, filtros, ficha e painel de floração.

## Integridade estrutural após a correção

- IDs duplicados: `nenhum`
- Exports duplicados: `nenhum`
- Imports quebrados: `nenhum`
- Módulos órfãos: `nenhum`
- Imports ausentes no array: `nenhum`
- Entradas desconhecidas no array: `nenhum`

## Campos vazios encontrados

- `tipo`: 109
- `dificuldade`: 109
- `descricao`: 109
- `origem`: 109
- `regiao`: 109
- `habitat`: 109
- `clima`: 109
- `iluminacao`: 109
- `floracao`: 109
- `adubacao`: 109
- `rega`: 109
- `suporte`: 109
- `substrato`: 109
- `dica`: 109

## Observação científica

Os períodos de floração recuperados das duas fichas antigas foram preservados provisoriamente. Eles ainda deverão passar pela revisão científica e pela adaptação regional para Serra/ES antes de serem considerados definitivos.

## Próxima etapa

Revisar o conteúdo em lotes, começando pelos campos de floração, origem, nomenclatura e cultivo, sem modificar a interface atual.
