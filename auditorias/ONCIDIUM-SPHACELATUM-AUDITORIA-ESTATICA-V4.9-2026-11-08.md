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
