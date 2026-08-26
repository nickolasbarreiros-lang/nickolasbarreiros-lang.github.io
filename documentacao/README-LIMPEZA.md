# Limpeza estrutural do Orquidário Digital

## Estrutura ativa preservada
- `index.html`
- `orquidea.html`
- `estilos.css`
- `favicon.ico`
- `ficha.js`
- `.nojekyll`
- `js/` — módulos usados pelo frontend
- `dados/orquideas/index.js`
- `dados/orquideas/` — **131 fichas ativas**
- `imagens/` — somente imagens realmente referenciadas pelo site

## Documentação preservada
A documentação técnica atual foi concentrada nesta pasta para não ficar misturada aos arquivos de produção.

## Itens removidos
- relatórios e auditorias antigos ou substituídos por versões mais novas;
- notas temporárias de integração/correção;
- cópia duplicada `dados/ficha.js`;
- fichas `.js` não importadas pelo `dados/orquideas/index.js`;
- arquivos de metodologia que estavam misturados às fichas (movidos para `documentacao/`);
- imagens sem qualquer referência no site ativo;
- relatórios de dados que não participam do carregamento do site, salvo os preservados nesta pasta.

## Validação
- fichas importadas pelo índice: **131**
- referências de imagem verificadas: **529**
- imagens referenciadas ausentes: **0**
- IDs duplicados nas fichas ativas: **0**

Esta limpeza não altera o conteúdo das 131 fichas ativas; apenas reorganiza documentação e remove arquivos órfãos/obsoletos.
