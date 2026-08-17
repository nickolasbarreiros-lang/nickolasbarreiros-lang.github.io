# Índice de Raridade do Orquidário Digital — V2.0 / Fase 2

## Princípio

O índice mede **raridade botânica com evidência de conservação e um componente pequeno de escassez comercial**. Ele não é uma categoria oficial da IUCN e não deve ser apresentado como probabilidade estatística de extinção.

## Fórmula V2

- 22% Restrição geográfica (EOO/AOO/distribuição nativa)
- 14% Ocorrências GBIF limpas
- 13% Endemismo e especialização de habitat
- 18% Conservação oficial
- 13% Tendência populacional e fragmentação
- 12% Ameaças documentadas
- 8% Disponibilidade comercial atual no Brasil

### Por que a disponibilidade comercial só vale 8%?

Disponibilidade no mercado e raridade natural são fenômenos diferentes. Uma orquídea extremamente rara na natureza pode ser multiplicada em laboratório e aparecer em muitos viveiros. O inverso também ocorre: uma espécie relativamente ampla pode ser pouco interessante comercialmente e quase nunca aparecer à venda. Por isso, o mercado melhora o índice como sinal complementar, mas não pode dominá-lo.

## Ocorrências GBIF

O V1 usava um proxy editorial. O V2 proíbe esse proxy. Para cada espécie devem ser armazenados:

- registros brutos;
- registros após limpeza;
- número de células de 10 × 10 km ocupadas;
- data da consulta.

### Limpeza mínima

1. confirmar o táxon aceito;
2. manter ocorrência `PRESENT`;
3. excluir `LIVING_SPECIMEN` e registros explicitamente cultivados quando identificáveis;
4. exigir coordenadas válidas para o cálculo espacial;
5. remover duplicatas espaciais/temporais evidentes;
6. excluir problemas geoespaciais graves;
7. não tratar dezenas de registros do mesmo ponto como dezenas de populações.

A pontuação prioriza **células ocupadas de 10 km**, reduzindo o efeito de esforço de coleta desigual.

## Conservação

Prioridade:

1. IUCN Red List global quando houver avaliação válida;
2. CNCFlora/JBRJ e Lista Oficial brasileira para espécies brasileiras;
3. literatura científica/planos de ação quando IUCN/CNCFlora forem ausentes ou antigos.

Conversão interna:
- CR = 100
- EN = 85
- VU = 65
- NT = 40
- LC = 10
- DD/NE = sem pontuação automática

DD significa falta de dados, não raridade.

## Tendência / fragmentação

Pontuar somente quando houver evidência publicada de:
- declínio populacional;
- poucas subpopulações/localidades;
- fragmentação severa;
- desaparecimentos locais;
- redução contínua de habitat/população.

Sem evidência: `null`.

## Ameaças

Entram perda de habitat, mineração, agricultura, urbanização, incêndios, alterações hidrológicas, coleta predatória e comércio de espécimes silvestres quando documentados.

CITES II, sozinho, não torna uma espécie rara.

## Escassez comercial

A consulta é dinâmica, com janela de 120 dias e foco no Brasil. Conta-se **vendedores independentes**, não anúncios duplicados.

Pontuação básica:
- 0 vendedores e ≥8 canais consultados: 95
- 0 vendedores com cobertura menor: 75
- 1 vendedor: 82
- 2 vendedores: 68
- 3–4: 50
- 5–7: 28
- ≥8: 10

A propagação em laboratório/por sementes reduz a escassez comercial; disponibilidade apenas por divisões de coleções pode aumentá-la discretamente.

## Confiança

O índice V2 só substitui a nota anterior quando pelo menos **60% do peso total** possui dados validados. Até lá, a ficha mantém a estrela legada e mostra internamente que a auditoria V2 está incompleta. Isso evita falsa precisão.

## Estrelas

- 0–19: ★☆☆☆☆ — Muito comum
- 20–39: ★★☆☆☆ — Comum
- 40–59: ★★★☆☆ — Pouco comum
- 60–79: ★★★★☆ — Incomum
- 80–100: ★★★★★ — Rara

**Somente ★★★★★ recebe o selo 💎 Rara.**
