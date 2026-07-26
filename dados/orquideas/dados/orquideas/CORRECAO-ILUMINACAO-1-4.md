# Correção da iluminação — versão 1.4

## Causa identificada

O arquivo enviado já continha a função nova, mas a página exibida ainda correspondia ao renderizador antigo. Para eliminar definitivamente qualquer reutilização do arquivo anterior, esta versão usa nomes físicos novos:

- `ficha-v14.js`
- `estilos-v14.css`

O `orquidea.html` aponta diretamente para esses arquivos. Assim o navegador e o GitHub Pages não podem confundi-los com versões em cache.

## Proteções adicionadas

A iluminação agora aceita:

- objeto estruturado;
- texto simples;
- objeto salvo como JSON em texto;
- campos incompletos.

Nunca há interpolação direta do objeto no HTML.
