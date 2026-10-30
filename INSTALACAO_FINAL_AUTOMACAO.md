# Automação do Orquidário Digital — instalação final

## Uma única configuração

1. No repositório GitHub, envie os arquivos do ZIP para os mesmos caminhos, preservando pastas ocultas `.github/workflows`.
2. Abra **Settings → Pages → Build and deployment → Source** e selecione **GitHub Actions**.
3. Confirme que a branch de publicação é `main`. Se não for, altere os gatilhos do workflow para a branch correta.
4. Confira **Actions → Validar e publicar Orquidário Digital**. A primeira execução deve passar em **validar** e **publicar**. O trabalho **pacote-diferencial** só é criado a partir de uma atualização posterior que tenha um commit anterior para comparar.
5. Se já existir outro workflow de deploy do Pages, desative-o. Os quatro workflows de conferência anteriores podem permanecer, mas executam testes repetidos; é possível removê-los posteriormente para evitar duplicação. Não remova nenhum arquivo do site ou das fotografias.

## Funcionamento

- Pull requests: conferem fichas, imagens, catálogo, sintaxe e preservação de assets, sem publicar.
- Push na `main`: executa os verificadores; se aprovados, publica automaticamente no GitHub Pages.
- Atualizações posteriores: geram um artefato `orquidario-arquivos-modificados` na aba **Actions**, contendo somente os arquivos modificados e um manifesto de exclusões. Remoções são apenas listadas, nunca executadas pelo script.

## Limites

- Não foi possível executar o workflow remotamente sem autorização do GitHub.
- A automação não pesquisa orquídeas nem edita fichas sozinha.
- Não coloque senhas, tokens ou credenciais nos arquivos.
- Os testes locais da versão preparada passaram: oito scripts de validação e duas verificações de sintaxe JS.
