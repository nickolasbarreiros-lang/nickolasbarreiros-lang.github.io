# Índice de Raridade do Orquidário Digital — V1.0

## Objetivo

O Índice de Raridade é uma escala editorial de 0 a 100 para comparar a raridade botânica das espécies do catálogo. Ele não substitui avaliações oficiais da IUCN, CNCFlora ou listas nacionais e não representa uma probabilidade oficial de extinção.

## Fatores e pesos

1. **Restrição geográfica — 25%**
   - Extensão de ocorrência (EOO), área de ocupação (AOO) e amplitude da distribuição nativa.
   - POWO/WCVP é a referência principal de distribuição.
   - Quando houver EOO/AOO publicados, esses valores prevalecem.

2. **Escassez de ocorrências confiáveis — 15%**
   - Número de registros georreferenciados úteis depois de remover duplicatas, erros evidentes e registros cultivados.
   - GBIF é usado como evidência, nunca como contagem absoluta de indivíduos.
   - A pontuação deve considerar viés de coleta e subamostragem.

3. **Endemismo e especialização de habitat — 15%**
   - Microendemismo, dependência de um bioma/fitofisionomia específica, faixa altitudinal estreita, hospedeiro ou substrato muito especializado.
   - Espécies amplamente generalistas recebem pontuação baixa.

4. **Estado de conservação oficial — 20%**
   - IUCN global e, para espécies brasileiras, CNCFlora/Lista Oficial nacional.
   - Conversão interna: CR=100, EN=85, VU=65, NT=40, LC=10. DD/NE não recebem pontuação automática.

5. **Tendência populacional e fragmentação — 15%**
   - Declínio documentado, poucas localidades, populações severamente fragmentadas ou desaparecimento local.
   - Sem evidência publicada, o fator deve ficar sem nota, e não ser presumido.

6. **Ameaças e pressão de coleta — 10%**
   - Perda de habitat, mineração, incêndios, urbanização, coleta ilegal, comércio de espécimes silvestres e outras pressões documentadas.
   - CITES Appendix II, isoladamente, não aumenta a raridade porque praticamente Orchidaceae inteira está abrangida. Appendix I ou evidência específica de comércio pode reforçar este fator.

## Fórmula

Cada fator recebe valor entre 0 e 100.

Base = soma(valor_do_fator × peso) / soma_dos_pesos_disponíveis

O cálculo só é considerado confiável quando os fatores disponíveis representam pelo menos 55% do peso total.

Depois é aplicado um pequeno bônus de convergência, limitado a 12%, quando restrição geográfica, endemismo, escassez de registros e ameaça populacional apontam simultaneamente para raridade elevada.

Índice final = Base + sinergia × 0,12 × (1 − Base)

## Conversão para estrelas

- 0–19: ★☆☆☆☆ — Muito comum
- 20–39: ★★☆☆☆ — Comum
- 40–59: ★★★☆☆ — Pouco comum
- 60–79: ★★★★☆ — Incomum
- 80–100: ★★★★★ — Rara

**O selo 💎 Rara só é exibido para ★★★★★.**

## Regras de segurança metodológica

- Raridade não é sinônimo de ameaça de extinção.
- Poucos registros no GBIF não significam automaticamente raridade; podem refletir pouco esforço de coleta.
- CITES II não deve ser usado como evidência de raridade por si só.
- Híbridos horticulturais não possuem raridade botânica natural comparável a uma espécie; devem receber, futuramente, um índice separado de disponibilidade horticultural.
- Formas, variedades e clones devem ter sua raridade específica documentada separadamente da espécie típica.
- Se os dados forem insuficientes, a ficha deve manter “não avaliada” ou a nota legada até revisão, em vez de inventar precisão.

## Fontes prioritárias

- IUCN Red List — categorias, critérios, EOO/AOO, população e ameaças.
- POWO/WCVP — taxonomia e distribuição nativa.
- GBIF — ocorrências, após limpeza e avaliação de viés.
- CNCFlora/JBRJ e Lista Oficial do MMA — conservação de espécies brasileiras.
- CITES — pressão de comércio; nunca como sinônimo automático de raridade.
