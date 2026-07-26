# Correção da iluminação — Sprint Visual 1.3

O renderizador de `iluminacao` já aceita o formato estruturado (`sombrite`, `solDireto`, `horario` e `observacoes`).

O erro persistia porque `orquidea.html` ainda carregava `ficha.js?v=111` e `estilos.css?v=111`, permitindo que o navegador/GitHub Pages reutilizasse a versão antiga em cache.

Nesta versão os identificadores foram alterados para:

- `ficha.js?v=visual-1-3`
- `estilos.css?v=visual-1-3`

Isso força o navegador a buscar os arquivos atualizados.
