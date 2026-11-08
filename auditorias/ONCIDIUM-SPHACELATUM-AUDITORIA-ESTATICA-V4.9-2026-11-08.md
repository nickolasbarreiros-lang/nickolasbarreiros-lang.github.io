# Auditoria estática V4.9 — Oncidium sphacelatum (08/11/2026)

## Escopo
Arquivo auditado: `auditorias/ONCIDIUM-SPHACELATUM-FICHA-RASCUNHO-V4.9.js`, ainda fora do `dados/orquideas/index.js`. Comparação com o esquema da ficha V4.9 de `Cattleya amethystoglossa forma aurea` e inspeção do renderizador `ficha.js`.

## Checklist confirmado no código
- Estrutura JS exporta `oncidiumSphacelatum`; objeto parseável como JSON no corpo da exportação; 30 campos de primeiro nível, mesmos nomes de campos da ficha-modelo comparada.
- `id: oncidium-sphacelatum`; nome e tipo de espécie botânica, sem herdar o híbrido Summer Wind.
- `descricao` 98 palavras (faixa editorial 90–120); `dica` 72 palavras (faixa 60–80).
- `mesesFloracao: [10,11]` e `mesesFloracaoIndicativos: true`: outubro e novembro documentados no Brasil; outros meses não excluídos.
- `iluminacao`: sombrite de referência 50%, sol permitido com restrição, somente início da manhã; observações detalham aclimatação, sinais de excesso/falta e ventilação.
- `formasCultivo.metodos`: quatro suportes com nomes e assets; `substrato`: exatamente duas misturas qualitativas sem percentuais; `substratoVisual.itens`: quatro componentes 45+25+20+10=100%.
- `substratoVisual` não contém `notaEvidencia` e o texto público não menciona MACS, IDC ou IAR.
- `fotos: []`: intencional, porque a galeria V4.9 não exibe créditos de licença por foto de forma genérica. Não copiar imagens CC BY-SA sem atribuição.
- `revisaoCientificaIAR` mantém fontes científicas em metadados, não em parágrafos públicos.
- Não há referências a cidade/estado nos textos de região ou adaptação.

## Cálculos reexecutados
- IDC: pesos 15+15+10+10+10+10+10+20 = 100; notas 2,3,3,2,2,2,2,2. Soma ponderada 225; índice normalizado (225−100)/4 = **31,25**, arredondado **31/100**; quatro estrelas na faixa 26–35.
- IAR litoral: pesos 30+30+5+5+5+5+20 = 100; notas 4 em todos fatores; 400/5 = **80/100**, quatro estrelas.
- IAR montanha: nota de temperatura 3, demais 4; 370/5 = **74/100**, quatro estrelas.
- Estes cálculos estão corretos aritmeticamente, mas as notas e estrelas continuam avaliações editoriais preliminares, não homologação científica experimental.

## Pendências antes de publicar
1. **Verificação de existência e aparência de cada asset** da biblioteca em ambiente executável, especialmente `perlita`, e checagem de renderização da galeria vazia.
2. **Fotos**: decidir forma de crédito/atribuição compatível com V4.9 ou conseguir fotografias autorizadas com condições de uso adequadas.
3. **Validação de cultivo**: confrontar a receita percentual e as notas IDC/IAR com experiências brasileiras adicionais, distinguindo recomendações de gênero das específicas da espécie.
4. **Teste visual** em página publicada ou prévia: cabeçalho, menu iluminação, calendário, estrelas, mistura e alternativas.
5. **Substituição atômica**: quando homologada, atualizar `dados/orquideas/index.js` e dados da ficha, preservando um caminho de recuperação; não misturar fotos e informações do híbrido.

## Evidência botânica adicional
NC State Extension (https://plants.ces.ncsu.edu/plants/oncidium-sphacelatum/) descreve flores levemente perfumadas, hastes até 6 pés, meio à base de casca com boa drenagem, luz indireta intensa e alta umidade. AOS (https://www.aos.org/orchid-care/care-sheets/oncidium-culture-sheet) indica que exigências de luz e rega variam bastante entre espécies de Oncidium. A redação da ficha evita apresentar recomendações genéricas como universais.


Auditoria adicional (08/11): Orquídeas no Apê indica sol suave no início da manhã **ou final da tarde**, com proteção nas horas quentes. Corrigido horário no rascunho JavaScript; os quatro assets de substrato não tiveram existência física verificada, e a galeria continua sem imagens por falta de atribuição. Fonte: https://www.orquideasnoape.com.br/2021/01/orquidea-oncidium-sphacelatum.html

## Conferência da biblioteca de assets — 08/11/2026

Foi lido diretamente `js/biblioteca-cultivo-v4.js` e conferido o uso de `obterAssetCultivoV4` em `ficha.js`. **Todas as oito chaves usadas no rascunho existem no mapeamento oficial:**

| Chave | Arquivo declarado |
|---|---|
| vaso-barro | imagens/cultivo-v4/vaso-barro.webp |
| vaso-plastico-vasado | imagens/cultivo-v4/vaso-plastico-vasado-v2.webp |
| cesto-madeira | imagens/cultivo-v4/cesto-madeira-v3.webp |
| placa-tronco | imagens/cultivo-v4/placa-madeira-v3.webp |
| casca-pinus | imagens/cultivo-v4/casca-pinus.webp |
| chips-coco | imagens/cultivo-v4/fibra-coco.webp |
| carvao-vegetal | imagens/cultivo-v4/carvao-vegetal.webp |
| perlita | imagens/cultivo-v4/perlita.webp |

As oito tentativas de leitura dos arquivos WebP pelo conector GitHub retornaram `UnicodeDecodeError` por se tratar de conteúdo binário. **Isso não é prova de arquivo quebrado**, mas impede validar aparência, integridade e correspondência visual pela leitura textual. Registrar **8/8 chaves mapeadas, 0/8 imagens visualmente inspecionadas**, e não confundir essas métricas. Não houve troca indevida de perlita por argila.

**Conferência de renderização:** `criarSubstratoVisualV4` transforma `config.itens` via `obterAssetCultivoV4` e descarta itens sem `assetInfo.imagem`. Como as quatro chaves de substrato constam da biblioteca, a resolução textual é compatível; resta o teste no navegador. `fotos: []` permanece por ausência de atribuição genérica de licença no componente de galeria.

## Conferência incremental — 08/11/2026 (continuação)

- Verificado no repositório que o rascunho de *Oncidium sphacelatum* mantém os campos `dica`, `substratoVisual` e `adaptacaoRegional` usados no modelo publicado *Cattleya amethystoglossa* var. *aurea*.
- A ausência de `raridadeIndice` no rascunho **não é divergência** em relação ao modelo V4.9 consultado, que também não o possui.
- Foram tentadas aberturas dos três URLs `Special:FilePath` do Wikimedia Commons; o acesso externo falhou por restrição/erro de conexão neste ambiente, **sem prova de falha do endereço no navegador do usuário**. Não marcar como imagens validadas.
- Mantida a decisão de não substituir a ficha publicada *Oncidium Summer Wind* até concluir validação visual, botânica e editorial. Sem alterações nos dados públicos nesta etapa.
