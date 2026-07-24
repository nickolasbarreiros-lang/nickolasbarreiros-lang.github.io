# Correção real da iluminação — Sprint Visual 1.5

A versão enviada pelo usuário foi analisada. O `ficha.js` novo já continha a função correta, mas a tela continuava sendo montada por uma renderização antiga em alguns acessos.

Esta versão adiciona uma correção defensiva diretamente em `orquidea.html`:

- localiza o cartão cujo título é **Iluminação**;
- identifica a espécie pelo parâmetro `?id=`;
- lê o objeto estruturado `iluminacao`;
- substitui `[object Object]` pelos campos `sombrite`, `solDireto`, `horario` e `observacoes`;
- funciona mesmo quando uma versão antiga do renderizador monta o cartão;
- usa `MutationObserver` para aguardar a ficha ser inserida no DOM.

Também foi alterada a versão de cache de `ficha.js`, `estilos.css` e do índice de dados.
