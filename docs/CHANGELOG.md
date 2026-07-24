# Changelog

## 2.0.0-auditoria.1 — 23/07/2026

### Adicionado
- Módulo `dendrobium-polysema.js`.
- Módulo `bifrenaria-verboonenii.js`.
- Documentação da auditoria em `docs/`.

### Corrigido
- Imports e array central em `dados/orquideas/index.js`.
- Restauração dos vínculos com as seis imagens já existentes.

### Removido do catálogo ativo
- Módulo inválido `dica-de-ouro-em-serra-es-o-segredo-e.js`. Seu conteúdo foi preservado em `docs/ARQUIVO_INVALIDO_RECUPERADO.md`.

### Mantido
- Formato atual dos objetos para não quebrar `cards.js`, `ficha.js`, filtros, estatísticas e painel de floração.
## Sprint 2 — Lote 1 de revisão científica

- Preenchidas e padronizadas 10 fichas de cultivo.
- Informações adaptadas para Serra/ES.
- Mantida a estrutura plana compatível com a interface existente.
- Revisadas: Cattleya walkeriana; Cattleya nobilior var. amaliae; duas formas de Cattleya violacea; Brassavola perrinii; Rodriguezia lanceolata; Ornithophora radicans; Dendrobium loddigesii; Zygopetalum maculatum; Encyclia bracteata.
- Meses de floração representam janelas prováveis em cultivo no Sudeste e podem variar conforme clone e microclima.


## Sprint 2 — Lote 2

- Revisadas e preenchidas 25 fichas adicionais.
- Padronizados clima, iluminação, floração, adubação, rega, suporte, substrato e dica para Serra/ES.
- Registradas observações taxonômicas nos textos quando o nome comercial difere do nome aceito moderno.
- Mantida a estrutura de dados atual para preservar compatibilidade com o site.


## Sprint 2 — Lote 3

- Revisadas 25 fichas adicionais.
- Padronizados tipo, dificuldade, características, cultivo e avaliações.
- Adicionadas recomendações específicas para Serra/ES.
- Mantidos IDs e nomes de etiqueta para compatibilidade com o site.
## Sprint 2 — Lote 4 (24/07/2026)

- Revisão e preenchimento de 25 fichas adicionais.
- Cultivo adaptado para Serra/ES.
- Identificações duvidosas sinalizadas sem apagar os nomes originais do acervo.
- Mantida compatibilidade com a estrutura atual do site.
## Sprint 2 — Lote 5 — 24/07/2026

- Preenchidas as 24 fichas botânicas restantes.
- Concluída a primeira revisão de conteúdo de todo o catálogo ativo.
- Removidos dois módulos não botânicos/inválidos da base ativa.
- Corrigido o índice de módulos.
- Identificações duvidosas foram sinalizadas para conferência futura.

## Sprint 3 — Ficha visual V3

- Adicionada navegação fixa entre as seções da ficha.
- Criado selo indicando conteúdo adaptado para Serra/ES.
- Melhorados cabeçalho, galeria, cartões e interações visuais.
- Adicionado botão flutuante para voltar ao topo.
- Mantida uma única interface reutilizável para todas as orquídeas.
- Preservada a estrutura individual de dados de cada planta.

## Correção da ficha individual

- Corrigido o import de `ficha.js` para usar `dados/orquideas/index.js`.
- A página individual agora consulta a base completa do catálogo, em vez do arquivo legado com apenas duas plantas.
- Mantida a estrutura de uma ficha visual única alimentada pelos módulos individuais de cada orquídea.
