# Integridade da publicação consolidada

Executados localmente em 30/10/2026, todos com código de saída 0:

- MACS 1.0: 5 registros, 0 erros.
- Lote MACS: 5 fichas, 0 erros.
- Comparativo sazonal: 35 métodos gerais + 7 sazonais, 0 erros.
- Fontes MACS: 5 fichas, 0 inconsistências.
- Rastreabilidade: 5 espécies, 0 inconsistências; todas preliminares.
- Catálogo: 149 fichas, 149 arquivos, 149 itens no array, aprovado.
- Fotografias de cultivo: 149 fichas examinadas, 27 fotos personalizadas, aprovado.
- Assets V4.9: 46 fichas, 0 inconsistências.

O workflow de publicação agora executa todos esses oito verificadores antes do deploy. A preservação histórica de imagens compara commits e é verificada em pull requests; não é validável em uma cópia ZIP sem histórico Git.

A configuração inicial do GitHub Pages para GitHub Actions e a conexão/autorização do repositório ainda dependem do usuário. Nenhuma publicação remota foi realizada.
