# Correção de contagem e proteção contra regressões

**Diagnóstico:** o ZIP da Gomesa substituiu o índice de 141 espécies por outro com 140; excluiu Masdevallia infracta e Stelis cf. aprica e acrescentou Gomesa cornigera. A ficha Pinalia elata, criada em atualização separada, também não estava no índice da Gomesa.

**Índice reconstruído:** 143 importações e 143 entradas no array, usando como base o índice de 141 da correção Acianthera auriculata, acrescido de Gomesa cornigera e Pinalia elata.

**ATENÇÃO:** a cópia local do site usada na auditoria tinha apenas 138 arquivos de espécies. Recuperamos 4 fichas de ZIPs de correção (Acianthera, Masdevallia, Pinalia e Gomesa). **Não localizamos o arquivo `dados/orquideas/stelis-cf-aprica.js` no material disponível.** O índice reconstruído o importa, pois ele já fazia parte do índice de 141. Se esse arquivo já existe no repositório publicado, preserve-o. Caso contrário, recupere o arquivo original antes de publicar. **Não criamos ficha fictícia.**

## Instalação
1. Faça backup do repositório atual.
2. Copie os arquivos do ZIP sobre os mesmos caminhos no repositório; não apague outras fichas existentes.
3. Confirme a presença de `dados/orquideas/stelis-cf-aprica.js`.
4. Execute `python scripts/verificar_catalogo.py` na raiz do projeto. O comando deve exibir APROVADO antes de publicar.
5. Ao criar nova ficha: adicione o arquivo JS, a importação e o item no array do índice; execute `python scripts/verificar_catalogo.py --atualizar`; faça commit do JS, índice e manifesto juntos. O GitHub Actions verifica automaticamente as atualizações.

**O manifesto registra a lista exata de espécies**, não apenas o número, para detectar fichas trocadas mesmo quando a contagem permanece igual. O verificador bloqueia exclusões silenciosas, importações quebradas, itens duplicados e divergências de exportação.
