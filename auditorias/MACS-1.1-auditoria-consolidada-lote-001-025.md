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

## Auditoria matemática parcial — fichas 1–5 (2026-11-04)
- Recalculado IDC 3.2 como soma de `notaDificuldade × peso / 5`, com oito critérios e pesos totais de 100: resultados 34, 48, 45, 30 e 56, todos iguais aos índices cadastrados.
- Recalculados IAR 2.0 litoral/montanha com sete fatores e pesos totais de 100: Anathallis 80/97; Aerides 97/63; Epidendrum centropetalum 49/97; Miltonia russelliana 79/96; Promenaea xanthina 32/97. Todos iguais aos índices cadastrados.
- Corrigidas cinco tabelas históricas de quatro faixas IDC para as cinco faixas do IDC 3.2: 0–25, 26–35, 36–50, 51–89, 90–100. Commits: `6affaf42`, `256da344`, `dcce98da`, `a03c5028`, `8d4d0165`.
- **Limite:** verificação aritmética não prova pertinência científica das notas, das estrelas IAR ou das receitas. Inspeção de imagens, assets, testes JS/navegador e confronto de fontes continuam pendentes; fichas 1–5 não devem ser declaradas cientificamente homologadas.

## Auditoria matemática parcial — fichas 6–10 (2026-11-04)
- Conferidos oito critérios do IDC 3.2 e sete fatores de cada região do IAR 2.0. Resultados calculados iguais aos cadastrados:

| Nº | Ficha | IDC | IAR litoral | IAR montanha |
|---|---|---:|---:|---:|
| 6 | Brassia lawrenceana | 40 | 96 | 80 |
| 7 | Laelia splendida | 36 | 81 | 79 |
| 8 | Encyclia alboxanthina | 38 | 97 | 62 |
| 9 | Phalaenopsis pulcherrima | 25 | 96 | 46 |
| 10 | Dendrobium spectabile | 50 | 96 | 64 |

- Cinco tabelas antigas IDC de quatro faixas corrigidas para as cinco faixas oficiais. Commits `85c35f45`, `e4d279dc`, `4e190fda`, `089bff9e`, `7249b536`.
- **Situação:** cálculo matemático conferido para fichas 1–10; validação científica das notas, inspeção de fotos/assets, execução JS e navegação desktop/mobile ainda pendentes. Não confundir verificação aritmética com homologação científica.

## Auditoria matemática parcial — fichas 11–15 (2026-11-04)
- Oito critérios IDC 3.2 e sete fatores para cada região IAR 2.0 recalculados. Resultados iguais aos índices cadastrados:

| Nº | Ficha | IDC | IAR litoral | IAR montanha |
|---|---|---:|---:|---:|
| 11 | Cattleya Pumpkin Festival | 20 | 79 | 63 |
| 12 | Dendrobium polysema | 56 | 47 | 96 |
| 13 | Bifrenaria verboonenii | 38 | 50 | 96 |
| 14 | Bifrenaria aureofulva | 27 | 80 | 80 |
| 15 | Cattleya wittigiana (arquivo sophronitis-wittigiana.js) | 30 | 47 | 96 |

- Tabelas IDC históricas de quatro faixas corrigidas para as cinco faixas oficiais, sem alterar notas, pesos, estrelas ou substratos. Commits `be629be8`, `c02115ab`, `e56d89ff`, `46266e3d`, `09852f8e`.
- **Progresso matemático: 15/25.** Não equivale a homologação científica; inspeção de fotos/assets, navegador e confronto das fontes permanecem pendentes.

## Auditoria matemática parcial — fichas 16–20 (2026-11-04)
- Oito critérios IDC 3.2 e sete fatores para cada região IAR 2.0 recalculados. Resultados iguais aos índices cadastrados:

| Nº | Ficha | IDC | IAR litoral | IAR montanha |
|---|---|---:|---:|---:|
| 16 | Cattleya cernua (arquivo sophronitis-cernua.js) | 47 | 96 | 52 |
| 17 | Zygolum Louisendorf | 27 | 79 | 80 |
| 18 | Dendrobium loddigesii | 58 | 45 | 97 |
| 19 | Maxillaria schunkeana | 44 | 79 | 80 |
| 20 | Mediocalcar decoratum | 52 | 47 | 96 |

- Cinco tabelas históricas de quatro faixas IDC corrigidas para as cinco faixas oficiais. Commits `ed8c9333`, `d461a86c`, `05e41a57`, `729b3cf9`, `6ee20b8d`.
- **Progresso matemático: 20/25.** Aritmética conferida não equivale a homologação científica; fotos/assets, execução JavaScript, navegador e confronto das fontes permanecem pendentes.

## Auditoria matemática parcial — fichas 21–25 (2026-11-04)
- Oito critérios IDC 3.2 e sete fatores de cada região IAR 2.0 recalculados; índices matematicamente consistentes:

| Nº | Ficha | IDC | IAR litoral | IAR montanha |
|---|---|---:|---:|---:|
| 21 | Cattleya schilleriana | 38 | 97 | 68 |
| 22 | Bulbophyllum rothschildianum | 45 | 63 | 79 |
| 23 | Encyclia Mineirinha | 42 | 73 | 79 |
| 24 | Arpophyllum giganteum | 34 | 64 | 96 |
| 25 | Oncidium Twinkle | 18 | 47 | 96 |

- Tabelas IDC históricas de quatro faixas corrigidas para as cinco faixas oficiais. Commits `fa820b7d`, `0db39ca9`, `fb48d7fc`, `a8979cb9`, `b2dc8dd6`.
- **Etapa aritmética IDC/IAR concluída para 25/25 fichas.** Verificou-se consistência dos números armazenados com a fórmula; não se validou a adequação científica das notas e pesos ou a correspondência das estrelas IAR com evidências botânicas.
- **O lote 1–25 permanece aberto** para inspeção de fotos/assets, execução JS, testes de navegador e confronto científico de fontes e receitas; não declarar homologação integral.

## Auditoria documental MACS 1.1 — fichas 1–10 (2026-11-04)
- Foram lidos os arquivos das fichas 1–10 e os campos `substratoVisual.itens` e `substratoVisual.notaEvidencia`.
- Todas as dez receitas principais somam 100% (checagem aritmética, não validação agronômica).
- Todas as dez notas de evidência declaram explicitamente **Classe D / não homologada quantitativamente**; percentuais não validados por pesquisa comparativa individualizada de produtores ou ensaio específico.
- Nenhum dos dez arquivos contém URLs HTTP(S) para fonte individualizada, e não foi comprovado um levantamento quantitativo com até 25 produtores brasileiros por espécie. Referências genéricas a instituições não equivalem a registros rastreáveis de confronto.
- **Decisão:** preservar ingredientes e proporções enquanto não houver evidência específica; não atribuir estrelas aos suportes sem homologação. Pendência científica real, sem aprovação fictícia.
- A conferência de fotos, assets e execução fica para a etapa final acordada com o usuário.

## Auditoria documental MACS 1.1 — fichas 11–25 (2026-11-04)
- Inspecionados os quinze arquivos-fonte das fichas 11–25, inclusive variantes de sintaxe com propriedades entre aspas.
- **15/15 receitas principais**: os percentuais dos itens somam 100%. Isso comprova apenas consistência aritmética.
- **1/15** (ficha 11, Cattleya Pumpkin Festival) apresenta suportes com estrelas nulas e declaração expressa de Classe D não homologada; há cinco ocorrências de URLs no arquivo, cuja pertinência científica individual não foi aferida nesta etapa.
- **14/15** (fichas 12–25) contêm estrelas numéricas nos suportes; não considerar esses valores quantitativamente homologados sem evidência rastreável por espécie.
- **11/15** (fichas 12–20, 22 e 24) não têm campo `notaEvidencia` no arquivo. As fichas 21, 23 e 25 têm notas que reconhecem caráter provisório ou não homologado; a ficha 11 também tem nota.
- Nenhuma conclusão de homologação científica foi inferida de soma de 100%, estrelas já cadastradas, ou simples citação de instituições.
- **Ação:** registrar as lacunas sem substituir receitas nem apagar estrelas previamente publicadas nesta etapa exclusivamente documental. Antes de qualquer aprovação definitiva, exigir confronto individual com referências botânicas e produtores brasileiros, fundamentação de ingredientes/proporções e tratamento explícito das notas dos suportes.
- A conferência local de fotografias, assets e execução de JavaScript permanece reservada à etapa final combinada.

## Confronto científico individual — ficha 1: Anathallis sclerophylla (2026-11-04)
**Fontes verificadas**
1. POWO/Kew, Stelis sclerophylla (nome aceito, sinônimo Anathallis sclerophylla, distribuição e hábito): https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:77142174-1
2. POWO/Kew, informações gerais: https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:77142174-1/general-information — epífita, floresta tropical úmida; para populações colombianas há registros de 1.980–3.100 m, não necessariamente limite altitudinal global.
3. Sinopse das Orchidaceae do Parque Nacional de Boa Nova (Hoehnea/Scielo), descrição morfológica e ocorrência no Brasil: https://www.scielo.br/j/hoehnea/a/3ny9LMzTztYwyQJJnmJQ5tL/?lang=pt
4. Sinopse das Orchidaceae da Serra do Urubu (Hoehnea/Scielo), ocorrência epífita e caracteres: https://www.scielo.br/j/hoehnea/a/gxrsfdjcyRQh8ck3RX8c3rg/?lang=en
5. American Orchid Society, princípios gerais de cultivo em placas e esfagno: https://www.aos.org/orchid-care/orchid-care-basics/mounting

**Constatações:**
- Taxonomia e hábito epífito confirmados por POWO; distribuição anteriormente informada como México e América Central **não é respaldada** pela distribuição da espécie no POWO. Corrigidos os campos `origem`, `regiao` e `revisaoCientificaIAR.distribuicaoGeografica` no arquivo da ficha.
- Montagem com aeração e esfagno solto é compatível com recomendações **gerais** da AOS; não é ensaio comparativo para a espécie nem prova de que placa/tronco seja superior em qualquer microclima.
- Os valores **35% pinus + 30% casca de arroz carbonizada + 20% esfagno + 15% carvão** continuam uma hipótese horticultural (soma 100%), **não** receita quantitativa homologada por pesquisa específica.
- Não foi localizada/compilada nesta passagem uma amostra documentada de produtores brasileiros para confrontar percentuais e suporte. **MACS 1.1: Classe D, não homologada quantitativamente**; estrelas permanecem nulas.
- As notas IDC 3.2 e IAR 2.0 não foram recalculadas nesta passagem, pois fontes sobre ocorrência e hábito, isoladamente, não validam as notas de adaptação regional.
**Situação:** ficha 1 em revisão científica individual, ainda **não homologada integralmente**; não iniciar homologação da ficha 2 antes de resolver as lacunas desta.

### Complemento de evidências — ficha 1 (2026-11-04)
- **Kew/POWO** confirma o nome aceito *Stelis sclerophylla*, a sinonímia *Anathallis sclerophylla*, hábito epífito e distribuição nas Antilhas venezuelanas e América do Sul tropical: https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:77142174-1
- **Pesquisa florística brasileira**, Hoehnea, Parque Nacional de Boa Nova: inflorescência longa e multiflora, sépalas caudadas, pétalas menores que as sépalas e labelo trilobado. Fonte: https://www.scielo.br/j/hoehnea/a/3ny9LMzTztYwyQJJnmJQ5tL/?lang=pt
- **Pesquisa florística brasileira**, Lankesteriana, Benedito Novo: registro de *Stelis sclerophylla* como epífita de mata ciliar, testemunho Caetano 66 (FURB). Fonte: https://www.scielo.sa.cr/scielo.php?lng=en&nrm=iso&pid=S1409-38712017000100073&script=sci_arttext&tlng=en
- **Revisão agronômica brasileira**: Faria et al. (2018), *Substrates for the cultivation of epiphytic orchids*, DOI 10.5433/1679-0359.2018v39n6p2851. Documenta relevância de propriedades físicas/químicas/biológicas e uso geral de pinus, casca de arroz carbonizada, carvão e outros materiais; **não** comprova a receita exata da espécie. https://ojs.uel.br/revistas/uel/index.php/semagrarias/article/view/31058
- **Estudo de substratos em outra espécie**: Mora et al. (2015), *Oncidium baueri*, DOI 10.5433/1679-0359.2015v36n1p39. Serve somente de evidência metodológica de avaliação comparativa de materiais, **não** pode ser extrapolado como homologação dos percentuais de *S. sclerophylla*. https://ojs.uel.br/revistas/uel/index.php/semagrarias/article/view/12221
- **Limite da homologação**: fontes sustentam taxonomia, hábito, caracteres florais e princípios gerais de substratos, mas não demonstram ensaio específico ou amostra individualizada de até 25 produtores nacionais. MACS 1.1 continua Classe D. Nenhuma nota/estrela ou proporção promovida a homologada.

### Confronto adicional de produtores brasileiros — ficha 1 (2026-11-04)
**Distinção metodológica:** as fontes de produtores localizadas referem-se a *Stelis sp.*, *Stelis intermedia* e *Anathallis imbricata*, **não** a *Anathallis/Stelis sclerophylla*. Portanto são apenas comparações por gênero/grupo, não observações da espécie-alvo.

| Fonte | Táxon da fonte | Informação horticultural útil | Limite |
|---|---|---|---|
| Orquidário Mogi Mirim | *Stelis* sp. | Montagem em placa ou vaso poroso, umidade frequente, luz indireta | Identificação não específica; não valida 35/30/20/15 |
| Orquidário Matsuoka | *Stelis intermedia* | Cultivo em toco/substrato de orquídeas e iluminação indireta | Espécie distinta; não valida ranking de suportes |
| Orquidário Matsuoka | *Anathallis imbricata* | Toco de madeira ou substrato e iluminação indireta | Espécie distinta; não valida percentuais |
| SOSA — dicas de cultivo | Orquídeas em geral | Misturas de pinus/carvão/coco e diferença de secagem entre vasos e montagens | Orientação geral, não ensaio comparativo da espécie |

Fontes: https://www.orquidariomogimirim.com.br/stelis-sp ; https://orquidariomatsuoka.com.br/produto/stelis-intermedia/ ; https://orquidariomatsuoka.com.br/produto/anathallis-imbricata/ ; https://www.sosa.org.br/site/dicas-de-cultivo.php

**Confronto botânico complementar:** artigo florístico de Boa Nova registra *Anathallis sclerophylla* com inflorescência longa e multiflora, sépalas caudadas, pétalas menores que as sépalas e floração observada em junho. Este é um registro fenológico pontual, não comprovação de uma janela anual de floração. https://www.scielo.br/j/hoehnea/a/3ny9LMzTztYwyQJJnmJQ5tL/?lang=pt

**Conclusão:** há convergência *qualitativa* quanto à aeração, umidade e uso possível de montagem; nenhuma fonte de produtor identificada nesta rodada é evidência direta da espécie e nenhuma publica os percentuais da receita. Não promover a Classe D, não atribuir estrelas e não mudar a receita com base em analogia taxonômica. **Ficha 1 continua aberta para homologação específica.**

### Nova evidência específica e auditoria de fenologia — ficha 1 (2026-11-04)
- **Santos, Toscano de Brito & Smidt (2019), Rodriguésia 70, DOI 10.1590/2175-7860201970031**: revisão taxonômica com material de herbário e campo, identifica *Anathallis sclerophylla* no grupo informal Acuminatae e registra floração **outubro a fevereiro no Paraná**. https://www.scielo.br/j/rod/a/zrGXXXwFgwB4vybZsJKFqYw/?lang=pt
- **Sinopse do Parque Nacional de Boa Nova, Hoehnea (2017)**: espécime coletado **em flor em junho**, evidência pontual de outra população. https://www.scielo.br/j/hoehnea/a/3ny9LMzTztYwyQJJnmJQ5tL/?lang=pt
- **Inconsistência identificada**: a ficha atual lista `mesesFloracao: [9,10,11,12,1,2,3,4,5]`, que **omite junho**, documentado em coleta brasileira, e inclui setembro, março, abril e maio sem que essas duas fontes demonstrem tais meses. A janela editorial não é uma síntese científica demonstrada pelas fontes verificadas. **Não substituir por meses extrapolados:** definir política de calendário por registros confirmados versus sazonalidade de cultivo antes de corrigir.
- **Fonte fotográfica taxonômica**: guia rápido da UFPR/Field Museum inclui imagens de *Anathallis sclerophylla* (itens 30 e 31). É referência de identificação visual, não licença automática para reutilização de fotografias. https://acervodigital.ufpr.br/xmlui/bitstream/handle/1884/69589/R%20-%20D%20-%20MILENA%20DO%20CARMO%20SANTOS.pdf?isAllowed=y&sequence=1
- **Produtores**: buscas por nome exato da espécie não forneceram receita publicada com percentuais nem amostra individualizada de cultivadores. Orientações para outras espécies não são homologação específica.
- **Resultado**: fenologia exige ajuste metodológico, MACS 1.1 continua Classe D; receita e estrelas preservadas até haver comprovação.

### Correção aplicada ao calendário — ficha 1 (2026-11-04)
- Campo `mesesFloracao` corrigido de `[9,10,11,12,1,2,3,4,5]` para `[10,11,12,1,2,6]`, distinguindo registros científicos confirmados de estimativa ampla de cultivo.
- Campo `floracao` passou a indicar explicitamente outubro–fevereiro (populações do Paraná; Santos et al. 2019, Rodriguésia, DOI 10.1590/2175-7860201970031) e registro pontual em junho (sinopse de Boa Nova, Hoehnea), com ressalva de que isso não garante floração nesses meses em cultivo.
- Os meses fora desses registros não foram apresentados como confirmados; outras populações podem florescer em épocas adicionais ainda não documentadas nas fontes consultadas.
- A correção fenológica não homologa a composição percentual do substrato nem os suportes MACS 1.1; Classe D mantida.

### Revisão de consistência entre campos — ficha 1 (2026-11-04)
- A descrição morfológica principal já havia sido enriquecida com medidas de Santos, Toscano de Brito & Smidt (2019), mas `revisaoCientificaIAR.morfologiaDimensoes` permanecia com o texto editorial anterior. A duplicidade foi corrigida diretamente no arquivo da espécie; ambos os campos agora usam medidas publicadas.
- **Risco científico MACS:** o rótulo `status: "Ideal"` do suporte `Placa / tronco` expressa preferência editorial, **não** superioridade demonstrada por ensaio comparativo para esta espécie. As estrelas estão nulas e a receita 35/30/20/15 permanece sem homologação quantitativa. Não confundir status qualitativo com homologação estatística.
- **Risco de confiança:** `revisaoCientificaIAR.confianca: "alta"` não pode ser interpretado como confiança alta na receita MACS; a confiança botânica e a confiança agronômica precisam ser reportadas separadamente.
- **Próxima condição de fechamento:** registros diretos da espécie em cultivo com suporte, granulometria, mistura, clima e fonte rastreável; na ausência desses registros, manter Classe D e não declarar ficha integralmente homologada.

### Correção do status do suporte principal — ficha 1 (2026-11-04)
- O método **Placa / tronco** estava marcado `status: "Ideal"` apesar da ausência de estudo comparativo específico para a espécie. O status passou a **`Preferencial (provisório)`**; a recomendação prática permanece, mas não equivale a homologação.
- A nota de evidência exibida na própria ficha recebeu referências botânicas rastreáveis (POWO/Kew e revisão taxonômica de Santos et al., 2019) e ressalva explícita de que essas fontes **não validam** os percentuais da mistura nem a superioridade de qualquer suporte.
- Permanecem **Classe D**, estrelas nulas e receita inalterada. Próxima exigência: evidências diretas de cultivo da espécie e metodologia quantitativa replicável; não promover classificação por analogia com espécies aparentadas.

### Saneamento de fontes, sinonímia e confiança — ficha 1 (2026-11-04)
- Substituída a instrução genérica de `sinonimosPrincipais` por informação taxonômica nominal (nome aceito *Stelis sclerophylla*; nome editorial *Anathallis sclerophylla*).
- Substituída lista genérica de instituições por três referências rastreáveis efetivamente utilizadas: POWO/Kew, revisão de Santos et al. (2019) e sinopse florística de Boa Nova (Hoehnea).
- Campo `confianca` deixou de exibir `alta` isoladamente e passou a diferenciar a confiança taxonômica/morfológica da ausência de homologação quantitativa MACS 1.1.
- Nenhuma inferência nova sobre percentuais ou ranking dos suportes; ficha continua Classe D. Não há base para declarar homologação integral.

### Coerência dos quatro métodos de cultivo — ficha 1 (2026-11-04)
- Padronizados os quatro rótulos qualitativos: Placa/tronco `Preferencial (provisório)`; Cachepô de Madeira `Alternativa provisória`; Vaso plástico vasado `Alternativa provisória`; Vaso plástico `Uso condicional`.
- A nota MACS 1.1 da própria ficha agora ressalva explicitamente que **não há comparação direta documentada dos quatro suportes para a espécie**. Nenhuma estrela foi atribuída; não foram modificados percentuais ou ingredientes.
- Essa correção resolve a coerência editorial do campo `formasCultivo.metodos`, mas **não resolve** a pendência científica central: falta evidência específica rastreável para homologar suporte e mistura. A ficha 1 permanece Classe D, sem conclusão integral.

### Transparência do título da receita — ficha 1 (2026-11-04)
- No componente `substratoVisual`, o título foi ajustado de `Substrato ideal` para `Substrato recomendado (provisório)` e o contexto agora informa expressamente a ausência de homologação quantitativa.
- A composição de 35% pinus + 30% casca de arroz carbonizada + 20% esfagno + 15% carvão foi **preservada**, assim como as duas alternativas qualitativas e as estrelas nulas dos suportes.
- O ajuste é de comunicação científica, não homologação. A falta de registros comparativos específicos da espécie permanece impeditiva para encerrar a ficha 1.

### Correção de autoria nomenclatural — ficha 1 (2026-11-04)
- Conferência direta no POWO/Kew (https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:77142174-1) e no registro do sinônimo (https://colplanta.org/taxon/urn:lsid:ipni.org:names:1128536-2) revelou erro na autoria do nome aceito.
- Correto: **Stelis sclerophylla (Lindl.) Karremans**, Lankesteriana 13: 330 (2014); sinônimo homotípico **Anathallis sclerophylla (Lindl.) Pridgeon & M.W.Chase** (2001); basiônimo **Pleurothallis sclerophylla Lindl.** (1835).
- Corrigido `revisaoCientificaIAR.sinonimosPrincipais` na ficha, preservando o nome editorial Anathallis. O erro anterior confundia a autoria do nome aceito com a do sinônimo.
- Esta correção taxonômica não constitui homologação quantitativa da receita MACS 1.1; permanece Classe D.

### Confronto adicional com registros brasileiros específicos da espécie — ficha 1 (2026-11-04)
- Dissertação UFC (2024), levantamento florístico da Serra de Maranguape: https://repositorio.ufc.br/bitstream/riufc/76914/5/2024_dis_mmgomes.pdf — documenta *Anathallis sclerophylla* e sua sinonímia/morfologia. É **fonte botânica específica**, não teste de substratos.
- Sinopse de Boa Nova, Hoehnea: https://www.scielo.br/j/hoehnea/a/3ny9LMzTztYwyQJJnmJQ5tL/?lang=pt — registro epífito e floração de junho.
- SOSA: https://www.sosa.org.br/site/dicas-de-cultivo.php — orientações gerais sobre drenagem, arejamento e variação da secagem por suporte; **não específicas** para esta espécie.
- Fontes de produtores sobre *Anathallis imbricata* e *Stelis* sp. não foram convertidas em evidência direta de *A. sclerophylla*; nenhuma prova percentuais de 35/30/20/15 ou comparação entre os quatro suportes.
- Atualizado `revisaoCientificaIAR.cultivoPremiacao` e acrescentadas fontes à própria ficha. Homologação MACS permanece **Classe D**; não atribuir estrelas sem base empírica.

### Revisão do habitat e da faixa altitudinal — ficha 1 (2026-11-04)
- Confronto com a compilação Embrapa *Cerrado: Ecologia e Flora*, volume 2, capítulo 14 (https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/570911/1/CERRADO-Ecologia-e-flora-VOL-2.pdf), que registra *Anathallis sclerophylla* como erva epífita em mata de galeria associada a campo rupestre.
- Retirada de `revisaoCientificaIAR.habitatAltitudeClima` a amplitude `480–3.100 m`: sem confirmação suficiente de que represente o intervalo global conhecido da espécie. O texto agora separa ocorrência de campo documentada de inferência de manejo sobre aeração/umidade.
- Esse saneamento melhora a rastreabilidade botânica, mas não valida numericamente as notas IDC/IAR nem os percentuais e suportes MACS. Classe D preservada; ficha 1 continua aberta.

### Altitude regional comprovada sem extrapolação — ficha 1 (2026-11-04)
- Colombian Plants/POWO (https://colplanta.org/taxon/urn:lsid:ipni.org:names:77142174-1/general-information) reproduz *Useful Plants and Fungi of Colombia* e informa **1.980–3.100 m para populações da Colômbia**. Esse dado foi acrescentado ao campo `habitatAltitudeClima` com escopo explicitamente regional.
- Não se restabeleceu a antiga faixa 480–3.100 m, pois não foi demonstrada como amplitude global. A faixa colombiana não determina, isoladamente, condições térmicas ideais em cultivo no Brasil.
- AOS (https://www.aos.org/orchid-care/orchid-care-basics/mounting) recomenda montagem de orquídeas epífitas em geral, mas ressalva que vasos podem ser preferíveis em ambientes internos ou muito quentes. Portanto, **não prova superioridade universal de placa/tronco para esta espécie**.
- MACS 1.1 segue Classe D: falta evidência direta e comparativa de proporções e suportes. Sem mudança de estrelas, receita ou ficha seguinte.

### Checagem de premiações sob sinônimos — ficha 1 (2026-11-04)
- Busca adicional encontrou catálogo secundário (https://orchids.herokuapp.com/grexes/anathallis-sclerophylla) que agrega premiações de cultivares sob *Anathallis*, *Pleurothallis* e *Specklinia sclerophylla*.
- A afirmação anterior `Não há premiação AOS individualizada documentada nesta revisão` foi qualificada: **há alegações em fonte secundária**, mas **não foram conferidos os certificados/registros primários AOS**. Não converter em premiação homologada nem usar premiações para inferir receita ou suporte superior.
- Fonte secundária acrescentada ao campo de fontes da ficha com ressalva expressa. MACS permanece Classe D.

### Retificação da fonte de premiações e limite da pesquisa de substrato — ficha 1 (2026-11-04)
- Retificado link de catálogo secundário anteriormente apontado indevidamente para *Anathallis secunda*: a ficha correta é https://orchids.herokuapp.com/grexes/anathallis-sclerophylla. Erro corrigido tanto no cadastro da espécie quanto neste relatório.
- Estudo experimental de substratos e adubação em sete espécies epífitas de Chiapas (Cambridge, *Renewable Agriculture and Food Systems*, https://www.cambridge.org/core/journals/renewable-agriculture-and-food-systems/article/abs/substrates-and-fertilization-for-the-rustic-cultivation-of-in-vitro-propagated-native-orchids-in-soconusco-chiapas/8D54CA9ECC6E3FE9A081D81A1FCA9D1E) inclui *Anathallis racemiflora*, **não** *A. sclerophylla*. É evidência de que existem experimentos em congêneres, mas não autoriza transportar percentuais nem estrelas à espécie-alvo.
- AOS, orientação geral de montagem (https://www.aos.org/orchid-care/orchid-care-basics/mounting), admite vasos em ambientes quentes. Não autoriza hierarquização quantitativa para *A. sclerophylla*.
- **Bloqueio de homologação**: nenhuma das fontes verificadas compara 35/30/20/15 com alternativas nem os quatro suportes na espécie-alvo. Manter Classe D e dados de suporte nulos, sem homologação por analogia.

### Conferência de sinonímia e ponto de bloqueio da homologação — ficha 1 (2026-11-04)
- POWO/Kew (https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:77142174-1): *Stelis sclerophylla* aceita; *Anathallis sclerophylla*, *Pleurothallis sclerophylla*, *Humboltia sclerophylla* e *Specklinia sclerophylla* sinônimos homotípicos; *Anathallis secunda* sinônimo heterotípico (https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:615791-1). Relações registradas na ficha.
- A pesquisa bibliográfica com nomes aceitos e sinônimos **não identificou** ensaio ou levantamento específico com medidas comparáveis de sobrevivência, crescimento, floração e retenção hídrica para a mistura 35/30/20/15 ou os quatro suportes. As fontes encontradas descrevem taxonomia, habitat, anatomia ou recomendações gerais; não substituem ensaio MACS.
- **Bloqueio técnico explícito:** sem dados de cultivo diretamente aplicáveis, não há base honesta para converter Classe D em homologação quantitativa, nem para atribuir estrelas de suporte. Repetir ajustes de redação não elimina o bloqueio. Exige-se documentação primária de produtores para esta espécie ou ensaio comparativo replicável; não iniciar ficha 2 sob a regra de conclusão integral.

### Registro florístico independente e limite das fontes de produtores — ficha 1 (2026-11-04)
- Levantamento de maciços florestais de Santo André (https://comiteat.sp.gov.br/wp-content/uploads/2020/03/PM_SANTO_ANDRE_AT_429_produto.pdf) relaciona nominalmente *Anathallis sclerophylla* entre as Orchidaceae epífitas. Fonte adicionada à ficha para confirmação do hábito, **sem extrapolação para substrato ou manejo**.
- Orquidário Matsuoka documenta montagem e substrato para *Anathallis imbricata* (https://orquidariomatsuoka.com.br/produto/anathallis-imbricata/); Orquidário Mogi Mirim descreve montagem e substrato para *Stelis* sp. (https://www.orquidariomogimirim.com.br/stelis-sp). Ambas são **espécies distintas da ficha-alvo**, logo não contam como registros individuais de cultivo de *A. sclerophylla* no denominador MACS 1.1.
- Permanecem ausentes ensaio comparativo da mistura percentual e comparação quantitativa dos quatro suportes. Classe D mantida, estrelas nulas. Não promover a ficha 1 a homologada por volume de fontes taxonômicas.

### Auditoria da Dica de Ouro e condicionantes do recipiente — ficha 1 (2026-11-04)
- Manual SENAR-PR (2026), *Cultivo de Orquídeas*: https://www.sistemafaep.org.br/wp-content/uploads/2026/01/PR.0397-Cultivo-de-Orquideas_web.pdf — ensina que substrato depende também do clima e do recipiente, além do hábito natural. **Não é ensaio da espécie-alvo** e não homologa percentuais.
- A `dica` afirmava que placa com esfagno ou vaso aerado `costuma funcionar melhor` sem evidência comparativa específica. Foi substituída por protocolo observacional prático: comparar secagem, vigor radicular e floração antes de escolher suporte para o ambiente real.
- Não foram alterados percentuais, índices IDC/IAR, estrelas ou classe de evidência. A ficha 1 continua Classe D e bloqueada para homologação quantitativa. Para concluí-la sob a exigência atual, é necessário obter dados primários de cultivo de *A. sclerophylla* ou aceitar formalmente uma categoria de recomendação não quantitativa como conclusão documental (decisão editorial pendente do usuário).

### Divergência taxonômica em fonte secundária — ficha 1 (2026-11-04)
- A página https://orchids.herokuapp.com/grexes/anathallis-sclerophylla afirma que *Anathallis sclerophylla* é o nome atualmente aceito por Kew, mas o registro primário https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:77142174-1 aceita **Stelis sclerophylla (Lindl.) Karremans**. A afirmação secundária está desatualizada ou incorreta.
- A ficha passou a identificar a divergência no campo de cultivo/premiação e na lista de fontes. A fonte secundária fica restrita a pistas de nomes históricos e possíveis premiações, pendentes de verificação primária.
- Nenhuma fonte recuperada nesta rodada trouxe dados quantitativos de substrato ou comparação de suportes para a espécie-alvo. **MACS Classe D mantida.** A auditoria taxonômica não resolve a homologação agronômica.

### Registro primário de floração em cultivo — ficha 1 (2026-11-04)
- Estudo *A família Orchidaceae no Parque Estadual da Ilha do Cardoso, Cananeia, SP, Brasil* (texto disponibilizado em https://www.researchgate.net/publication/234102864_A_familia_Orchidaceae_no_Parque_Estadual_da_Ilha_do_Cardoso_Cananeia_SP_Brasil) descreve *Anathallis sclerophylla* e relaciona três exemplares cultivados no Instituto de Botânica: R.P. Romanini 178, fl., 27-I-2005; Romanini 183, fl., 2-III-2005; Romanini 282, fl., 6-IV-2006. O trabalho resume floração em cultivo de janeiro a abril.
- O calendário da ficha recebeu **março e abril** e agora contém `[10,11,12,1,2,3,4,6]`, separando na explicação ocorrências de campo (outubro–fevereiro e junho) de observações em cultivo (janeiro–abril).
- Evidência específica **de floração em cultivo**, não de proporções de substrato ou comparação de suportes: não autoriza atribuir estrelas nem homologar MACS 1.1. Classe D preservada.
