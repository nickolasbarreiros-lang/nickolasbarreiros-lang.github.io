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
