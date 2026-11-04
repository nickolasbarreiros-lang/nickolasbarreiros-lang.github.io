# Auditoria consolidada MACS 1.1 / IDC 3.2 / IAR 2.0 / V4.9 — lote 1–25

Data: 2026-11-04. **EM ANDAMENTO — fichas 1–25 triadas estaticamente; auditoria integral e visual pendente.**

Ordem baseada em `export const orquideas` no arquivo oficial `dados/orquideas/index.js` (não na ordem dos imports).

| Nº | Ficha | Palavras em Sobre a espécie | Percentuais principais | Soma | Componentes visuais/IDC/IAR |
|---|---|---:|---|---:|---|
| 1 | Anathallis sclerophylla | 88 | 35/30/20/15 | 100% | presentes |
| 2 | Aerides odorata | 79 | 45/35/10/10 | 100% | presentes |
| 3 | Epidendrum centropetalum | 91 | 45/35/20 | 100% | presentes |
| 4 | Miltonia russelliana | 95 | 35/30/25/10 | 100% | presentes |
| 5 | Promenaea xanthina | 93 | 45/40/15 | 100% | presentes |

## Achados
- **Divergências editoriais confirmadas:** fichas 1 e 2 têm texto de descrição inferior ao mínimo V4.9 (90–120 palavras).
- **Percentuais:** todas as cinco receitas visuais examinadas somam 100%; isso não equivale a homologação científica quantitativa.
- **Componentes:** `substratoVisual`, `formasCultivo`, `indiceDificuldadeCultivo` e `indiceAdaptacaoRegional` encontrados nas cinco.
- **Fotos:** o teste estático de URLs HTTP não é suficiente para avaliar caminhos relativos, quantidade, pertinência botânica ou carregamento; avaliação ainda pendente.
- **Pendências:** concluir auditoria individual e eventuais correções fundamentadas das fichas 1–5, inspecionar as fichas 6–25, verificar duas misturas qualitativas, fotos, assets, cálculos IDC/IAR e navegador desktop/mobile. **Não declarar lote concluído antes disso.**

## Próximas fichas (6–25)
6 Brassia lawrenceana; 7 Laelia splendida; 8 Encyclia alboxanthina; 9 Phalaenopsis pulcherrima; 10 Dendrobium spectabile; 11 Cattleya Pumpkin Festival; 12 Dendrobium polysema; 13 Bifrenaria verboonenii; 14 Bifrenaria aureofulva; 15 Sophronitis wittigiana; 16 Sophronitis cernua; 17 Zygolum Louisendorf; 18 Dendrobium loddigesii; 19 Maxillaria schunkeana; 20 Mediocalcar decoratum; 21 Cattleya schilleriana; 22 Bulbophyllum rothschildianum; 23 Encyclia mineirinha; 24 Arpophyllum giganteum; 25 Oncidium Twinkle.

## Atualização — 2026-11-04
- Ficha 1 `Anathallis sclerophylla`: descrição ampliada de 88 para 108 palavras, commit `b321addc`.
- Ficha 2 `Aerides odorata`: descrição ampliada de 79 para 118 palavras, commit `c53ac0c2`.
- Fichas 6–10 conferidas estaticamente:

| Nº | Ficha | Palavras descrição | Receita principal | Soma | Alternativas | Estruturas |
|---|---|---:|---|---:|---:|---|
| 6 | Brassia lawrenceana | 81 | 35/25/20/10/10 | 100% | 2 | MACS visual, cultivo, IDC, IAR presentes |
| 7 | Laelia splendida | 80 | 35/30/20/15 | 100% | 2 | presentes |
| 8 | Encyclia alboxanthina | 73 | 35/30/20/15 | 100% | 2 | presentes |
| 9 | Phalaenopsis pulcherrima | 84 | 35/30/25/10 | 100% | 2 | presentes |
| 10 | Dendrobium spectabile | 87 | 35/30/20/15 | 100% | 2 | presentes |

- **Pendência editorial confirmada nas fichas 6–10:** descrições abaixo do mínimo V4.9 de 90 palavras. As receitas somam 100%, mas não estão cientificamente homologadas por esse teste.
- Inspeção de fotografias, assets, execução JS no navegador e validação científica individual ainda pendentes. Não declarar lote concluído.

## Atualização adicional — fichas 6–15
- Correções editoriais 6–10: Brassia lawrenceana 81→117 palavras (`092b168b`), Laelia splendida 80→117 (`f71d2971`), Encyclia alboxanthina 73→111 (`dfe5c5bf`), Phalaenopsis pulcherrima 84→117 (`ae2bf79a`), Dendrobium spectabile 87→117 (`90459d72`). Nenhuma receita alterada.
- Triagem estática 11–15:

| Nº | Ficha | Descrição (palavras) | Receita | Soma | Alternativas | MACS/Cultivo/IDC/IAR |
|---|---|---:|---|---:|---:|---|
| 11 | Cattleya Pumpkin Festival | 99 | 45/25/20/10 | 100% | 2 | presentes |
| 12 | Dendrobium polysema | não detectada por expressão regular simples | 45/20/20/15 | 100% | 2 | presentes |
| 13 | Bifrenaria verboonenii | 83 | 40/25/20/15 | 100% | 2 | presentes |
| 14 | Bifrenaria aureofulva | 107 | 35/30/20/15 | 100% | 2 | presentes |
| 15 | Sophronitis wittigiana | não detectada por expressão regular simples | 45/25/20/10 | 100% | 2 | presentes |

- Pendência editorial confirmada na ficha 13 (83 palavras). Nas fichas 12 e 15, a ausência de correspondência no parser não prova ausência de descrição; requer leitura específica.
- Conferência estática não prova que imagens carregam ou que percentuais estejam quantitativamente homologados. Lote continua aberto.

## Atualização — fichas 12–20
- Revisão de parser: descrições das fichas 12 e 15 estavam em propriedades entre aspas (`"descricao"`), e não ausentes. Corrigidas para 103 palavras (`c31dfd70`) e 95 palavras (`d9af94aa`).
- Ficha 13 Bifrenaria verboonenii corrigida para 102 palavras (`9fa2af46`).
- Triagem estática 16–20:

| Nº | Ficha | Palavras | Percentuais principais | Soma | Alternativas | MACS/Cultivo/IDC/IAR |
|---|---|---:|---|---:|---:|---|
| 16 | Sophronitis cernua | 75 | 40/30/20/10 | 100% | 2 | presentes |
| 17 | Zygolum Louisendorf | 85 | 45/25/20/10 | 100% | 2 | presentes |
| 18 | Dendrobium loddigesii | 88 | 45/30/25 | 100% | 2 | presentes |
| 19 | Maxillaria schunkeana | 78 | 45/25/20/10 | 100% | 2 | presentes |
| 20 | Mediocalcar decoratum | 81 | 40/25/20/15 | 100% | 2 | presentes |

- Todas as descrições 16–20 estão abaixo do mínimo editorial de 90 palavras; correções ainda não realizadas.
- Os percentuais conferidos somam 100%, sem constituir homologação científica quantitativa. Auditoria visual e taxonômica não realizada neste lote.

## Atualização — fichas 16–25
- Descrições 16–20 ajustadas: Cattleya cernua 112 palavras (`5600b68e`); Zygolum Louisendorf 120 (`ab6f23d9`); Dendrobium loddigesii 108 (`5aad523c`); Maxillaria schunkeana 112 (`8d5d0ba`); Mediocalcar decoratum 112 (`27ba7340`).
- Descrições 21–25: Cattleya schilleriana 130→100 (`b8af55b8`); Bulbophyllum rothschildianum 91 (sem edição); Encyclia Mineirinha 87→116 (`cb6ddc27`); Arpophyllum giganteum 121→105 (`bd930c29`); Oncidium Twinkle 85→111 (`bb0006b3`).
- **Correção do verificador:** a ficha 21 usa propriedades entre aspas, por exemplo `"substratoVisual"`, `"formasCultivo"` e `"proporcao"`. O primeiro detector de texto sem aspas gerou falso negativo. Leitura direta confirmou a presença dos componentes e a receita 35/30/20/15 = 100%.

| Nº | Ficha | Palavras finais | Receita | Soma | Alternativas | Componentes |
|---|---|---:|---|---:|---:|---|
| 21 | Cattleya schilleriana | 100 | 35/30/20/15 | 100% | 2 | presentes |
| 22 | Bulbophyllum rothschildianum | 91 | 35/20/25/20 | 100% | 2 | presentes |
| 23 | Encyclia Mineirinha | 116 | 35/30/20/15 | 100% | 2 | presentes |
| 24 | Arpophyllum giganteum | 105 | 35/25/20/10/10 | 100% | 2 | presentes |
| 25 | Oncidium Twinkle | 111 | 55/25/10/10 | 100% | 2 | presentes |

**Resultado parcial:** 25/25 fichas triadas estaticamente; as descrições fora do intervalo de 90–120 palavras detectadas foram ajustadas. Não há conclusão da auditoria integral. Falta verificação de URLs/imagens reais, assets, compilação e navegador desktop/mobile, checagem matemática integral IDC/IAR, fontes e homologação científica individual. Não avançar ao lote 26–50 como se o lote 1–25 estivesse integralmente homologado.
