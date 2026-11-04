# Auditoria consolidada MACS 1.1 / IDC 3.2 / IAR 2.0 / V4.9 — lote 1–25

Data: 2026-11-04. **EM ANDAMENTO — fichas 1–15 triadas estaticamente; auditoria integral e visual pendente.**

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
