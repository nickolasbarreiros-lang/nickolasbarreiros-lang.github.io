# Validação técnica V4.9 — Cattleya amethystoglossa forma aurea

**Arquivo analisado:** `dados/orquideas/cattleya-amethystoglossa-var-aurea.js`
**Referências de execução:** `ficha.js`, `js/biblioteca-cultivo-v4.js` e `dados/orquideas/index.js`.
**Situação:** ficha em rascunho, não publicada.

## Testes estáticos concluídos

- [x] Objeto da ficha extraído e convertido em JSON válido (o corpo do objeto é JSON compatível)
- [x] Campos essenciais presentes: `id`, `nome`, `descricao`, `fotos`, `floracao`, `iluminacao`, `formasCultivo`, `substratoVisual`, `indiceDificuldadeCultivo`, `indiceAdaptacaoRegional`, `adaptacaoRegional`, `dica`, `errosComuns`
- [x] Texto Sobre a espécie: 99 palavras, dentro da meta de 90–120
- [x] Quatro formas de cultivo, principal `Vaso de barro`, três alternativas
- [x] Duas misturas alternativas distintas e sem percentuais
- [x] Receita principal com 40% + 25% + 20% + 15% = 100%
- [x] IDC: 42/100, conforme soma ponderada e faixa de três estrelas
- [x] IAR: litoral 93/100 e montanha 67/100, conforme soma ponderada
- [x] Identificadores dos quatro suportes e quatro componentes encontrados na biblioteca
- [x] Renderizador `ficha.js` implementa `criarFormasCultivoV4`, `criarSubstratoVisualV4`, `criarAdaptacaoRegional`
- [x] Renderizador oferece mensagem `Imagem ainda não cadastrada` para `fotos.length === 0`
- [x] Ficha não integrada ao índice público

## Pendências e bloqueios

1. **Galeria:** `fotos: []`. Nenhuma imagem foi comprovada simultaneamente como forma aurea e licenciada para reutilização. Fotografias de outras formas da espécie não são substitutos válidos. Consultas: https://commons.wikimedia.org/wiki/Category:Cattleya_amethystoglossa e https://www.flickr.com/photos/sylvio-orquideas/52314199521/ .
2. **Asset compartilhado:** `chips-coco` aponta para `imagens/cultivo-v4/fibra-coco.webp` na biblioteca. É preciso conferir a aparência real da imagem e, se necessário, obter asset próprio. **Não alterar a biblioteca global sem auditoria de impacto nas demais fichas.**
3. **Navegador:** não houve teste de renderização real do site nesta etapa; validação feita por inspeção estática de código.
4. **Evidência botânica:** perfume, duração e meses fora do inverno são inferidos de registros da espécie, não de ensaios da forma aurea. Revisar antes de homologar.
5. **Publicação:** converter a condição de galeria pendente em galeria validada, executar testes visuais e só então integrar ao índice.

## Regra de conclusão
Não marcar a ficha como homologada e não avançar para outra espécie enquanto as pendências acima não estiverem resolvidas. Não alterar layout, biblioteca compartilhada ou dados de outras fichas sem autorização.

## Checagem complementar da galeria e da publicação

- A busca de fotografias abertas no Wikimedia Commons confirmou imagens de *C. amethystoglossa* sob CC BY-SA, mas **não** uma identificação verificável da forma *aurea*. Exemplo de licença e identificação apenas da espécie: https://commons.wikimedia.org/wiki/File:Cattleya_amethystoglossa.jpg .
- O POWO/Kew reconhece a espécie e sua distribuição de Pernambuco ao Espírito Santo, mas não estabelece a forma horticultural *aurea* como táxon aceito: https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:621995-1/general-information .
- Checagem repetida dos dados: campos em arrays, 4 suportes, 2 alternativas, 100% de componentes e cálculos de 42/93/67 estão consistentes. A galeria continua com **zero fotos**, impedindo homologação editorial.
- Próxima ação decisiva: obter fotografias próprias da forma *aurea* ou autorização explícita de titular identificado; não substituir por fotos genéricas da espécie. A biblioteca global de substratos permanece inalterada.

## Atualização após autorização de publicação provisória

- A ficha foi **integrada ao índice oficial** por autorização do usuário, no commit `57a7857c4741759746fdabf9ad64c92e19b2ede3`. O antigo bloqueio de publicação do relatório acima fica superado **somente quanto à publicação sem fotos**.
- O arquivo de dados foi atualizado no commit `3c86cb8cfaca7b29932852bf9bd870332dadd388` para registrar a condição provisória.
- Verificação posterior por GitHub: importação e entrada no array presentes; `fotos: []`; fallback do renderizador confirmado; quatro suportes, duas misturas e receita de 100% mantidos.
- **Não confundir publicação com homologação integral:** fotos específicas autorizadas, aparência do asset `chips-coco` e teste visual no navegador permanecem pendentes.
- A tentativa de abrir a URL do GitHub Pages na ferramenta de navegação não retornou página acessível; portanto **não foi possível confirmar a renderização remota**. A verificação atual é estática, com base nos arquivos do repositório.

## Inspeção direta do asset de chips de coco

- Recuperado o conteúdo binário original de `imagens/cultivo-v4/fibra-coco.webp` pelo GitHub e inspecionada a imagem.
- A fotografia exibe **blocos de casca de coco (chips)** com fibras aderidas, não apenas fibra desfiada.
- Portanto o uso do identificador `chips-coco` com essa imagem é **visualmente adequado**. A divergência é somente o nome do arquivo compartilhado.
- **Pendência de adequação visual dos chips de coco resolvida**, sem alterar `js/biblioteca-cultivo-v4.js` e sem impacto nas demais fichas.
- Permanecem pendentes fotografias identificadas da forma aurea e inspeção visual integral da página renderizada.
