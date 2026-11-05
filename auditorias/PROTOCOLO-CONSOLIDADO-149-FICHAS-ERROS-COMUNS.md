# Protocolo de auditoria consolidada — 149 fichas — IDC 3.2, IAR 2.0, MACS 1.1 e Erros comuns

## Escopo e regra de encerramento
Seguir a ordem oficial de `dados/orquideas/index.js`. Concluir integralmente cada ficha antes de avançar: correções, documentação, verificadores, conferência visual e deploy aprovado. Distinguir validação técnica de homologação científica; não inventar fontes, ensaios, produtores ou estrelas.

## Índices
- IDC 3.2: recalcular `Σ[(notaDificuldade−1)/4 × peso]` com pesos 15/15/10/10/10/10/10/20; confrontar índice, classificação, estrelas, faixas e selo de cultivo.
- IAR 2.0: recalcular `6H+6T+A+V+L+S+4F` separadamente para litoral quente e montanha; conferir estrelas e textos.
- MACS 1.1: confrontar forma de cultivo, ingredientes, porcentagens (receita principal total 100%), exatamente duas misturas alternativas qualitativas, assets e evidência científica. Sem homologação quantitativa, manter classe D e estrelas comparativas não atribuídas.


## Auditoria obrigatória do calendário de floração
Para **cada ficha**, conferir o campo `mesesFloracao` e a coerência com o texto `floracao`:
1. Detectar arrays vazios (`mesesFloracao: []`), meses inválidos, duplicados e divergências entre calendário e narrativa.
2. Para calendários vazios, consultar fontes específicas da espécie, priorizando registros de cultivo brasileiros com estação ou meses explícitos; confrontar com fontes botânicas internacionais sem converter automaticamente estações entre hemisférios.
3. Converter estações brasileiras em meses **somente como janela indicativa**, documentando a fonte, a incerteza e eventuais registros divergentes. Não inventar meses quando as fontes forem insuficientes.
4. Se não houver evidência para atribuir meses, manter o array vazio **com pendência documental explícita**, em vez de preencher arbitrariamente ou classificar a ficha como integralmente homologada.
5. Confirmar que os meses exibidos no site correspondem ao array e que o texto não promete floração obrigatória ou exclusiva.
6. Registrar no relatório da ficha a decisão, fontes, correção (se houver), testes e deploy. **Não avançar à ficha seguinte enquanto a pendência de floração da atual não tiver sido resolvida ou formalmente justificada e aceita.**

## Auditoria obrigatória da descrição das flores
Além da época de floração, o texto público do menu `floracao` deve descrever, em linguagem natural e concisa: aparência das flores (cores, formato e características distintivas), perfume (se existe e qual aroma, somente quando documentado) e duração aproximada das flores ou da inflorescência (quando documentada). Distinguir longevidade de uma flor individual da duração total de hastes com abertura sucessiva. Não inventar cheiro, duração, medidas ou meses: se o dado não for verificável, não afirmá-lo. Evitar URLs, nomes de fontes e linguagem de relatório na ficha pública; registrar referências, incertezas e confrontos na documentação interna. Verificar coerência com avaliações de perfume, morfologia, demais menus e calendário.

### Aplicação retroativa
Revisitar as fichas 001 a 009, incluindo a ficha 007 já publicada, para complementar o menu floração sem mudar a estrutura visual. Concluir cada ficha com documentação e verificações antes de avançar; a ficha 010 só será iniciada após esta revisão retroativa. Para espécies com dados insuficientes, registrar a lacuna de forma transparente, sem fabricar características.

## Auditoria obrigatória do menu Erros comuns
Para **cada** item do array `errosComuns`:
1. **Vínculo com a espécie**: verificar se o erro decorre de uma característica real de seu habitat, raízes, porte, crescimento, sazonalidade ou exigências para florir.
2. **Evidência e incerteza**: distinguir exigência documentada, inferência horticultural plausível e hipótese ainda não confirmada; evitar afirmações taxativas sem fundamento.
3. **Confronto interno**: comparar com os menus de rega, temperatura, umidade, luminosidade, ventilação, adubação, floração, formas de cultivo, substrato e Dica de Ouro.
4. **Generalidade**: sinalizar frases intercambiáveis entre espécies, vagas ou sem consequência prática (ex.: “regar errado”, “adubar demais”, “dar pouca luz”). Manter apenas se forem importantes **e** contextualizadas.
5. **Especificidade operacional**: explicar qual prática é inadequada, em que condição ela prejudica a planta e, quando possível, o sinal observável para reconhecer o problema. Evitar frequências rígidas sem contexto climático.
6. **Prioridade e redundância**: eliminar repetições e contradições; dar preferência a riscos reais e distintivos da espécie, sem aumentar artificialmente a lista.
7. **Cultivo regional**: considerar diferenças de secagem, calor, noites frias e ventilação entre litoral quente e montanha, sem citar nomes de cidades/estados na ficha.
8. **Conferência editorial**: frases curtas, compreensíveis, sem recomendações perigosas, sem copiar indiscriminadamente a mesma lista para outras espécies.

### Registro por ficha
Documentar: itens originais avaliados; quais foram mantidos, reescritos ou excluídos e por quê; fundamento botânico/horticultural; eventuais conflitos corrigidos em outros menus; evidências consultadas; resultado de testes e publicação. Não classificar como concluída uma ficha com verificação pendente.

## Ordem de trabalho
Auditar IDC, IAR, MACS, calendário e descrição das flores, Erros comuns e apresentação visual como **um único ciclo por ficha**. A ficha 001, *Anathallis sclerophylla*, já teve correção matemática IDC publicada no commit `d04739a`; a auditoria específica de Erros comuns ainda deve ser executada antes de considerá-la concluída neste protocolo ampliado.
