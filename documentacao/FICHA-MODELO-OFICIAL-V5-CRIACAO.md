# ORQUIDÁRIO DIGITAL — FICHA MODELO OFICIAL PARA CRIAÇÃO DE NOVAS FICHAS
**Padrão editorial:** V4.9 | **Protocolo de criação:** FMO 1.0 (2026-11-04) | **Métodos:** IDC 3.2, IAR 2.0, MACS 1.1.
**Finalidade:** documento-mestre reutilizável em novos chats. É um roteiro de criação, NÃO uma espécie real nem uma ficha cientificamente homologada.
**Comando:** "Com base em documentacao/FICHA-MODELO-OFICIAL-V5-CRIACAO.md, crie e homologue integralmente a ficha de [ESPÉCIE OU HÍBRIDO], sem pular etapas; confira as metodologias originais no GitHub, registre fontes, publique somente após auditoria funcional."

## 0. Precedência e integridade
1. Antes de criar, ler este documento, `documentacao/indices/IDC-METODOLOGIA.js`, `documentacao/indices/IAR-METODOLOGIA.js`, `auditorias/MACS-1.1-METODOLOGIA-HOMOLOGACAO.md`, a ficha de referência `dados/orquideas/acianthera-auriculata.js`, `inventario_layouts_v4_9.json`, componentes reais do site e convenções de assets.
2. A metodologia original de cada índice prevalece sobre resumos deste modelo. Divergências exigem registro e decisão explícita; não alterar fórmula silenciosamente.
3. Não confundir o layout V4.9 com a versão deste documento. Preservar compatibilidade com o código atual; não inserir campos que quebrem o renderizador.
4. Não inventar fonte, medida, altitude, período de floração, porcentagem publicada, foto, produtor, teste ou aprovação. Documentar lacunas. Nunca concluir validação funcional sem execução.
5. Não citar cidades/estados brasileiros nos textos de comparação climática exibidos nas fichas; usar "litoral quente" e "regiões de montanha/noites frescas". Distribuição botânica pode citar regiões quando pertinente e verificável.
6. Uma ficha é finalizada apenas quando pesquisa, índices, substrato, assets, publicação e testes aplicáveis foram concluídos. Impedimentos reais ficam marcados como bloqueios, não como aprovações.

## 1. Esquema editorial — cada menu e conteúdo mínimo
**Contagem:** palavras separadas por espaços nos textos narrativos; nomes científicos, números, percentuais e listas não são enchimento. Faixas são metas editoriais; insuficiência de evidência prevalece sobre a meta.

| Menu/campo real | Meta de palavras | Conteúdo obrigatório |
|---|---:|---|
| `nome`, `genero`, `tipo`, `sinonimo` | campos estruturados | Nome aceito, autoria/sinônimos principais quando comprovados, espécie x híbrido x cf.; para híbridos confirmar registro RHS/OrchidRoots |
| `descricao` — Sobre a espécie | **90–120** | Porte/arquitetura; hábito; número/tamanho/cor das flores e perfume quando comprovados; distribuição/habitat; ligação leve com cultivo; narrativa acessível, sem receita/adubação |
| `caracteristicas` | **6–9 itens**, 2–8 palavras cada | Traços distintivos verificáveis; evitar repetição de adjetivos |
| `origem`, `regiao`, `habitat` | habitat **25–60** | Distribuição, bioma, altitude apenas se documentada; epífita/terrestre/rupícola e microhabitat |
| `clima` | **12–30** | Faixa térmica descritiva, amplitude diurna/noturna, umidade/ventilação conforme evidência |
| `climaFloracao` | **75–120** | Maturação, estação, luz, noites, repouso e limites das inferências; não inventar gatilho de floração |
| `iluminacao.observacoes` | **70–110** | Intensidade, sombreamento como faixa inicial e não garantia, sinais de excesso/falta, segurança de sol direto |
| `iluminacao.horario` | campo padronizado | Apenas: "Somente início da manhã"; "Início da manhã ou final da tarde"; "Não permitido". Se `solDireto` = "Não permitido", horário também deve ser "Não permitido" |
| `floracao` e `mesesFloracao` | **55–90** | Estação e meses sustentados por fonte e hemisfério; haste, duração e recorrência se documentadas; meses numéricos consistentes |
| `rega` | **90–140** | Regra de secagem por suporte, crescimento/repouso, risco de saturação, sintomas e manejo em clima quente/frio |
| `adubacao` | **90–140** | Orgânica, mineral/foliar, liberação lenta se adequada, concentração conservadora, sazonalidade, lavagem e cautelas; não prescrever dose específica sem base |
| `suporte` | **35–80** ou lista | Formas principais e condicionais, motivos físicos e restrições |
| `formasCultivo.resumo` | **35–65** | Perfil radicular e hídrico + justificativa da forma principal |
| `formasCultivo.metodos[].texto` | **35–65 por método** | Vantagem, limitação e condições de uso; método ideal + alternativas relevantes; estrelas apenas quando justificadas independentemente |
| `substratoVisual.contexto` e `resumo` | **12–25 / 25–50** | Tipo de suporte, aeração/retenção, situação de uso |
| `substratoVisual.justificativa` | **75–120** | Papel de cada material, granulometria, raízes, umidade, drenagem, riscos e recipiente; sem discurso interno sobre homologação |
| `substratoVisual.receitaTexto` | fórmula concisa | Receita principal por volume totalizando 100%, salvo montagem/raízes livres, quando a mistura para vaso deve ser explicitamente opcional |
| `substratoVisual.itens[].finalidade` | **15–35 por ingrediente** | Função física, limite e preparo quando necessário; nomes e percentuais coincidem com receita |
| `substratoVisual.alerta` | **35–70** | Erros críticos, degradação, calor, compactação, manejo do suporte |
| `substrato` — Outras misturas | **2 alternativas**, sem % no site | Alternativas realmente distintas, não duplicar principal; fundamento e limitações na matriz científica |
| `errosComuns` | **5–8 itens**, 10–25 palavras | Erros específicos, não conselhos genéricos |
| `adaptacaoRegional.litoral.texto` | **80–120** | Dificuldades e ajustes em litoral quente; evitar nomes de cidades/estados |
| `adaptacaoRegional.montanha.texto` | **80–120** | Benefícios/risco de frio e umidade; ventilação, secagem e floração |
| `dica` — Dica de Ouro | **65–100** | Uma orientação diferenciada e operacional, com motivo fisiológico; não repetir rega/substrato |
| `revisaoCientificaIAR` | campos técnicos, sem mínimo | Taxonomia, sinônimos, morfologia, habitat/altitude, distribuição, confiança, fontes e incertezas |
| `substratoVisual.notaEvidencia` | **120–250**, ou documento externo mais extenso | Estado MACS, origem de percentuais, níveis A–D separados, limitações, fontes, número real de produtores, decisão e rastreabilidade |
| `fotos` | **4 imagens verificadas** | Identificação segura, origem, licença/permissão, crédito, URL original, arquivo local e conferência visual |

Os limites são **metas de padronização novas**, não regras que já estavam implantadas em todas as fichas anteriores.

## 2. Índices matemáticos — definições oficiais
### IDC 3.2 — dificuldade (0–100)
Ler `documentacao/indices/IDC-METODOLOGIA.js`. Pesos: temperatura 15, rega 15, umidade 10, ventilação 10, luminosidade 10, raízes/substrato 10, sazonalidade/repouso 10, exigência para florescer 20. A soma é 100.
Registrar **notaDificuldade** por critério e escala utilizada, justificando cada nota com evidência; calcular o índice segundo a implementação vigente, sem inferir a fórmula exclusivamente de uma ficha-exemplo.
Faixas de dificuldade: 0–25 Fácil; 26–50 Moderada; 51–89 Difícil; 90–100 Extrema.
**Estrelas de facilidade de cultivo (inversas ao IDC):** 0–25 ★★★★★; 26–35 ★★★★☆; 36–50 ★★★☆☆; 51–89 ★★☆☆☆; 90–100 ★☆☆☆☆.
Não confundir dificuldade e facilidade, nem converter estrelas MACS em IDC.

### IAR 2.0 — adaptação regional (dois cenários independentes)
Ler `documentacao/indices/IAR-METODOLOGIA.js`. Para litoral quente e montanha/noites frescas atribuir notas de compatibilidade de **0 a 5** para cada fator: habitat/altitude 30, temperatura 30, água/umidade 5, ventilação 5, luminosidade 5, sazonalidade 5, probabilidade de floração 20.
**IAR = Σ[(nota/5) × peso]**, de 0 a 100. Selos: 0–20 ★☆☆☆☆; 21–40 ★★☆☆☆; 41–60 ★★★☆☆; 61–80 ★★★★☆; 81–100 ★★★★★.
Notas fundamentadas por fontes, não por palavras do texto da ficha. IDC e IAR são independentes.

### MACS 1.1 — matriz de adequação de substrato
Ler `auditorias/MACS-1.1-METODOLOGIA-HOMOLOGACAO.md`. Pesos: adequação hídrica 30, aeração 25, suporte/volume 20, estabilidade/decomposição/salinidade 15, clima 10.
Quando há fundamento para notas ordinais 0–5, **índice exploratório = Σ[(nota/5) × peso]**, 0–100; **não é medição física nem probabilidade de sucesso**. Sem evidências comparativas suficientes, não atribuir desempenho numérico inventado.
Separar evidência para ecologia, composição, proporções e estrelas de suporte: **A experimental direta, B horticultural específica, C convergência técnico-científica, D provisória**. Percentuais por volume, soma 100%. Se não houver proporção publicada, identificar claramente como formulação estimada e não atribuí-la a fonte externa. Nível final da receita não supera o pior nível fundamentado entre composição e percentuais. Comparar 2–3 candidatas quando houver base.
**As duas alternativas são qualitativas na interface**, sem percentuais. Documentar comparações internas sem inventar validação quantitativa.

## 3. Hierarquia de fontes obrigatória (verificar espécie e relevância, não citar por formalidade)
**Taxonomia e distribuição:** https://powo.science.kew.org/ ; https://www.worldfloraonline.org/ ; https://www.ipni.org/ ; https://www.gbif.org/ ; https://floradobrasil.jbrj.gov.br/ ; https://ferramentasreflora.jbrj.gov.br/ .
**Ecologia/morfologia:** espécimes de herbário, descrições originais, literatura revisada por pares, https://www.biodiversitylibrary.org/ , https://www.orchidspecies.com/ (IOSPE), https://www.orchidroots.com/ para genealogia de híbridos e registro RHS quando disponível.
**Cultivo:** https://www.aos.org/ , publicações técnicas universitárias e institucionais, trabalhos experimentais, documentação de cultivadores com espécie identificada.
**Pesquisa bibliográfica:** https://scholar.google.com/ ; https://www.scielo.br/ ; https://www.crossref.org/ ; https://www.biodiversitylibrary.org/ .
**Imagens:** https://commons.wikimedia.org/ ; https://www.inaturalist.org/ ; https://www.gbif.org/ ; https://ferramentasreflora.jbrj.gov.br/ ; herbários e fotógrafos com licença ou autorização verificável. Página com foto NÃO é automaticamente licença de republicação.
Regra: registrar fonte exata, URL, autor, data de acesso, alegação suportada, grau de correspondência com espécie e limites.

## 4. Protocolo brasileiro — até 25 produtores/orquidários
Pesquisar a espécie e sinônimos, em português e com nome aceito. Começar pelos produtores efetivamente documentados nas matrizes anteriores: **Orquidário Oriental, Orquivitro, Orquidário Nhá Mercedes, Orquídeas Encanto e Paixão, Orquídeas no Apê**; ampliar a lista por pesquisa verificável e pertinente à espécie até 25 produtores independentes quando possível.
**Não é lista de 25 produtores previamente verificados**. Cada fonte só conta após confirmação de identidade, página/registro específico, URL e conteúdo aproveitável. Diferenciar anúncio de venda, recomendação de cultivo, receita qualitativa e proporção quantitativa. Não contar duplicatas nem híbridos diferentes como evidência da espécie. Registrar busca negativa e quantidades: identificados, relevantes, com cultivo, com receita, com percentuais, ensaios.

## 5. Fotografias — origem, licença, verificação e armazenamento
1. Buscar nome aceito + sinônimos em Wikimedia Commons, iNaturalist, GBIF, Reflora, herbários, fontes botânicas e acervo autorizado.
2. Selecionar **4 fotografias distintas da mesma espécie/cultivar**: flor frontal, flor lateral/detalhe, planta inteira/hábito e inflorescência ou outro ângulo; adaptar conforme disponibilidade, sem substituir por espécie parecida.
3. Registrar **URL da página de origem, URL do arquivo, autor, licença exata, atribuição exigida e data de acesso**; confirmar que a licença permite o uso pretendido e modificações necessárias. Se não houver autorização, não copiar a imagem.
4. Priorizar cópias locais otimizadas (WebP/JPG) na pasta `imagens/[Nome científico]/`, preservando crédito em registro associado; se usar URL externa, testar disponibilidade e política de hotlink. Não usar URL de miniatura temporária como fonte permanente.
5. Inspecionar identidade da flor, resolução, duplicatas, enquadramento, cor e carregamento. Não declarar 4 fotos aprovadas se apenas 2 forem verificadas. Foto ausente/licença incerta bloqueia publicação completa ou exige autorização.
6. Imagem de cultivo ideal é **asset ilustrativo separado** da fotografia botânica; nunca usar imagem de outra espécie como prova de identificação.

## 6. Regras de suporte e materiais
Usar nomes canônicos: Casca de pinus, Chips de coco, Carvão vegetal, Esfagno, Perlita, Casca de macadâmia, Casca de arroz carbonizada, Brita, Argila expandida, Fibra de coco, Cacos de cerâmica. Não confundir chips com fibra. Tratamento (lavagem/condicionamento) é instrução, não nome de novo ingrediente.
Suportes existentes: Placa / tronco, Vaso de Barro, Vaso plástico, Vaso plástico vasado, Cachepô de Madeira, Árvore viva, Raízes soltas. Usar IDs de assets efetivamente cadastrados; conferir nomes/caminhos antes de salvar. Não introduzir pedra-pomes. Não trocar perlita por brita ou argila sem fundamentação física. Estrelas de suporte são independentes do IDC/IAR e exigem evidência; se não houver, usar `null`, não inventar.

## 7. Fluxo de criação obrigatória
**A. Inventário:** conferir se a espécie já existe por nome aceito/sinônimos, evitar duplicação, definir slug e arquivo JS, registro em índice/importações.
**B. Pesquisa:** montar matriz de fontes e produtores, taxonomia, ecologia, morfologia, flores, clima, fenologia, imagens e licenças.
**C. Redação:** preencher cada menu conforme seção 1, conferir metas, precisão, tom claro e ausência de cidades/estados nas comparações regionais.
**D. Índices:** calcular IDC 3.2 e IAR 2.0 em ambos os cenários, justificar notas e testar faixas/estrelas.
**E. MACS:** comparar receita principal e candidatas, classificar ingredientes/percentuais separadamente, conferir soma e coerência visual, selecionar exatamente duas alternativas sem percentuais.
**F. Implementação:** seguir a estrutura JS real do site e layout V4.9, cadastrar fotos/assets e índices; preservar padrões de export/import.
**G. Auditoria estática:** validar sintaxe JS, imports, campos, contagem de palavras, somas, assets, URLs, foto/licença, taxonomia, índices, fonte de cada afirmação e ausência de contradições.
**H. Auditoria funcional:** executar testes no Chromium/Playwright desktop/mobile; abrir card, ficha, galeria, menus, cultivo ideal, substrato, outras misturas, índices e navegação; verificar console, rede, imagens, responsividade e regressões. Capturas e execução precisam ser registradas; não declarar sucesso sem evidência.
**I. Encerramento:** gravar ficha, matriz de evidências, controle e commits no GitHub; informar status separado: pesquisa documental, MACS, integração, licença de imagens, testes funcionais e pendências. Só declarar **FICHA COMPLETA** se todos os itens obrigatórios estiverem aprovados; nível MACS D pode ser documentalmente concluído, mas não chamado de homologação científica quantitativa.

## 8. Checklist de aceite para qualquer conversa futura
- [ ] Nome aceito e sinônimos confirmados; híbrido/cf. tratado corretamente.
- [ ] Todos os menus e mínimos editoriais revisados, sem preenchimento artificial.
- [ ] Fontes rastreáveis para alegações botânicas e recomendações.
- [ ] Até 25 produtores brasileiros procurados, contagem real documentada.
- [ ] IDC 3.2 calculado, faixa e estrelas conferidas.
- [ ] IAR 2.0 calculado separadamente para litoral e montanha.
- [ ] MACS 1.1 com evidências independentes de ingredientes e percentuais.
- [ ] Receita principal 100% por volume quando aplicável; montagem principal respeitada.
- [ ] Exatamente 2 alternativas sem percentuais na interface.
- [ ] Quatro fotografias identificadas, licenciadas e carregando.
- [ ] Assets existentes e adequados; cultivo ideal não reduzido a miniatura indevida.
- [ ] Sintaxe/importações, renderização desktop/mobile e regressão aprovadas.
- [ ] Matriz, ficha, fontes, créditos, commits e testes documentados.
- [ ] Nenhuma pendência oculta ou homologação alegada sem evidência.

## 9. Saída obrigatória ao usuário
Informar nome da espécie, arquivo criado, classificação taxonômica, fontes e produtores efetivamente consultados, foto/crédito/licença, IDC, IAR litoral/montanha, MACS composição/percentuais, receita principal, duas alternativas, resultados dos testes, commits e pendências. Quando um recurso estiver indisponível, explicitar bloqueio e não substituir por afirmação de sucesso.
