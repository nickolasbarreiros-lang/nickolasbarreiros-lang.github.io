# Publicação consolidada do Orquidário Digital

## Menos uploads e menos comandos

Este pacote é uma **versão completa**, não uma sequência de patches. Substitua os arquivos do repositório por este conjunto **uma única vez** (preserve outros arquivos pessoais que não façam parte do projeto).

Após essa publicação, o GitHub Actions validará as fichas MACS e fará o deploy automático quando houver um commit em `main`.

**Configuração inicial do GitHub Pages:** Settings → Pages → Build and deployment → Source → **GitHub Actions**.

**Atenção:** se o repositório já tiver outro workflow de deploy para Pages, desative o anterior para evitar duas publicações simultâneas. A automação não edita o GitHub por conta própria; requer o repositório atualizado.

### Caminho sem uploads manuais de arquivos individuais
Use o **GitHub Desktop**: clone o repositório uma vez, extraia o ZIP completo na pasta local clonada, revise alterações, faça um único commit e clique Push. Em futuras revisões, basta aplicar um pacote consolidado e repetir commit/push. A publicação do site ocorre automaticamente após o push.

### Segurança
- MACS continua com status de pesquisa em andamento; pontuações são exploratórias.
- Os verificadores bloqueiam o deploy se detectarem inconsistências estruturais.
- Os testes foram executados localmente; o workflow remoto ainda depende da publicação.
- Não inclua tokens ou credenciais dentro do repositório ou ZIP.
