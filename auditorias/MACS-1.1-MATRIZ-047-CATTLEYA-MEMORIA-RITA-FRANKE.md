# MACS 1.1 — Matriz 047: Cattleya Memoria Rita Franke

**Data:** 2026-11-03. **Ficha:** `dados/orquideas/cattleya-schilleriana-x-cruzeiro-do-sul.js`.  
**Status:** **REVISÃO DOCUMENTAL CONCLUÍDA COM RESSALVA CIENTÍFICA**; **não homologada experimentalmente** para o híbrido. Não há pendências editoriais identificadas nesta revisão.

## Identidade botânica e genética
- [RHS International Orchid Register — registro 1058304](https://apps.rhs.org.uk/horticulturaldatabase/orchidregister/orchiddetails.asp?ID=1058304): **Cattleya Memoria Rita Franke**, registrada por **R. Martiarena em 24/07/2023**, progenitora de semente **C. schilleriana**, progenitor de pólen **C. Cruzeiro do Sul**. A direção do cruzamento importa; anúncios com ordem invertida não são prova do mesmo registro.
- [RHS — Cattleya Cruzeiro do Sul](https://apps.rhs.org.uk/horticulturaldatabase/orchidregister/orchiddetails.asp?ID=925233): C. Brabantiae × C. Keri, registro de 2010.
- [OrchidRoots](https://orchidroots.com/display/summary/orchidaceae/101058304/): confirma fórmula do grex e ancestralidade, incluindo 50% de C. schilleriana; genealogia não equivale a ensaio de substrato.
- [POWO/Kew — C. schilleriana](https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:622229-1/general-information): espécie epífita do Brasil, associada a ambiente tropical sazonalmente seco.
- [AOS — C. schilleriana](https://www.aos.org/explore-orchids/cattleya-alliance/cattleya-schilleriana-rchb-f): cultivo com secagem entre regas, substrato poroso e replante **somente no início do crescimento de raízes novas**, para reduzir risco de interrupção do crescimento.

## Evidência horticultural de grupo
- [AOS — Cattleya Culture Sheet](https://www.aos.org/orchid-care/care-sheets/cattleya-culture-sheet): casca média/grossa para plantas adultas, drenagem e ajuste ao ambiente; não determina percentuais únicos para este grex.
- [Missouri Botanical Garden — Repotting Cattleya and Other Sympodial Orchids](https://www.missouribotanicalgarden.org/gardens-gardening/your-garden/help-for-the-home-gardener/advice-tips-resources/visual-guides/repotting-cattleya-and-other-sympodial-orchids): cinco partes de **casca de abeto média** e uma de **carvão horticultural**; referência institucional **genérica**, não ensaio específico.
- [Orchid Society of Great Britain — Cattleya](https://www.osgb.org.uk/orchids/orchid-care-guides/cattleya-orchid-care): casca média/grossa com carvão horticultural ou perlita; recomenda replantar quando novas raízes começam a crescer.
- [Smithsonian Gardens — Care of Cattleya](https://gardens.si.edu/collections/plants/orchids/orchid-care-sheets/cattleya/): boa drenagem, secagem entre regas e efeito de secagem do vaso de barro.

## Produtores brasileiros: rastreabilidade e exclusões
1. [Orquidário Wolf — Cattleya Memoria Rita Franke](https://www.orquidariowolf.com.br/produtos/cattleya-memoria-rita-franke1/): **um fornecedor do grex registrado**; confirma cruzamento e comercialização, mas **não informa receita percentual**.
2. [Orquidário Aniela — Cattleya Cruzeiro do Sul × Cattleya schilleriana](https://www.orquidarioaniela.com.br/product-page/cattleya-cruzeiro-do-sul-x-cattleya-schileriana): fórmula comercial com **ordem parental invertida**; não usar como confirmação inequívoca do grex RHS, nem como receita percentual.
3. [Orquidário Santa Clara — Cattleya schilleriana](https://orquidariosantaclara.com.br/orquideas/3019-cattleya-schilleriana-t3.html): comercializa **a espécie progenitora**, não o grex; a página consultada **não publica proporções de substrato**.

**Amostra específica confirmada:** 1 fornecedor brasileiro do grex, 0 receitas quantitativas específicas verificadas. Os demais são evidência contextual ou excluídos da amostra específica. A meta de até 25 produtores independentes não foi atingida; não inventar respostas nem confundir número de anúncios com testes.

## Cenário e matriz quantitativa R0
**Cultivo:** vaso de barro pequeno e bem ventilado, raízes sensíveis ao replante, rizoma acima do substrato. A recomendação quantitativa é uma **adaptação da receita institucional de Cattleyas**:

| Ingrediente da ficha | Percentual em volume | Origem |
|---|---:|---|
| Casca de **pinus média** | 83,3% | Substituição técnica da casca de **abeto média** da fonte Missouri |
| Carvão vegetal **horticultural** | 16,7% | Uma parte em seis na referência Missouri |
| **Total** | **100,0%** | 5:1, arredondado |

**Consistência corrigida:** antes desta revisão, o campo interno `macs1_0.substrato.percentuais` apresentava 40% pinus, 25% macadâmia, 20% carvão, 15% perlita, divergindo de `substratoVisual` (83,3/16,7). Ambos foram sincronizados em 83,3/16,7, sem alteração dos índices de cultivo.

**Alternativas qualitativas (duas, sem repetir a receita principal):**
1. Casca de pinus média + perlita grossa + carvão vegetal + chips de coco preparados.
2. Casca de macadâmia média + argila expandida + carvão vegetal + casca de pinus grossa.

Estas são opções editoriais plausíveis, **não** receitas quantitativas experimentalmente testadas para este híbrido. A menção a chips de coco preparados não especifica método; não atribuir propriedades garantidas a material sem origem conhecida.

**Registro de assets:** `casca-pinus` e `carvao-vegetal` constam de `js/biblioteca-cultivo-v4.js`; a ficha já usa o registro padronizado. Esta verificação do registro não é um teste de carregamento remoto das imagens.

## Parecer final e critério de conclusão
- **Identidade do grex:** confirmada diretamente no RHS.
- **Composição principal:** coerente com recomendação de Cattleya adulta em vaso ventilado, com substituição de material **declarada**.
- **Percentuais:** soma 100%; concordância entre receita visual, itens e matriz interna após correção.
- **Produtores brasileiros com proporções específicas:** **0**; evidência horticultural genérica, não quantitativa específica.
- **Homologação experimental específica:** **NÃO DEMONSTRADA**. Não afirmar que 83,3/16,7 é a proporção ótima ou que ensaios foram realizados.
- **Estado editorial:** **CONCLUÍDO** no limite das fontes documentais acessíveis e das verificações executadas. Não há pendência editorial conhecida a transferir a auditoria posterior. Um experimento futuro seria nova pesquisa, não tarefa de revisão omitida.
- **Decisão:** manter receita R0, duas alternativas e classificação atual; não modificar estrelas/IDC/IAR por extrapolação não sustentada.

**Regra de passagem:** a matriz seguinte pode ser iniciada somente após publicação deste parecer; o encerramento documental não será apresentado como homologação experimental.

## Revisão de perfil radicular e hídrico — 2026-11-04
**Perfil de referência:** híbrido epífito da aliança Cattleya, com rizoma simpodial e raízes que requerem alta aeração e ciclos de umedecimento e secagem parcial. A sensibilidade ao replante é inferida da linhagem *C. schilleriana* e da literatura de Cattleyas; não se mediram espessura radicular nem intervalos de secagem do indivíduo. Replantar preferencialmente no início da emissão de raízes novas.

**Suporte principal:** vaso de barro pequeno, bem perfurado, rizoma acima da superfície, planta firmemente fixada. A secagem efetiva varia com tamanho do vaso, clima e rega.

**Receita principal para recipiente, 100% em volume:** 83,3% casca de pinus média, base estrutural porosa e suporte radicular; 16,7% carvão vegetal horticultural, complemento de estrutura e espaços de ar. É adaptação da proporção 5:1 de **casca de abeto** com carvão descrita para Cattleyas em geral pelo Missouri Botanical Garden; a troca por pinus e o uso neste grex não foram ensaiados experimentalmente.

**Duas alternativas qualitativas, sem percentuais:** (1) casca de pinus média + perlita grossa + carvão vegetal + chips de coco lavados; (2) casca de macadâmia média + argila expandida + carvão vegetal + casca de pinus grossa. A primeira foi padronizada na ficha quanto ao preparo dos chips; ambas são inferências de cultivo, não fórmulas quantitativas publicadas para o grex.

**Conferências documentais:** 83,3+16,7=100,0%; receita visual e itens concordam; descrição pública com 110 palavras (meta 90–120); duas alternativas distintas da principal; quatro caminhos de fotos registrados; índice IDC 38/100 com três estrelas dentro da faixa IDC 3.2. Identidade do grex fundamentada no RHS. Testes visuais de carregamento e renderização ficam para a auditoria consolidada do ZIP final, por orientação do responsável.

**Parecer:** recomendação horticultural documental concluída, com limites explícitos; **não homologada experimentalmente para Cattleya Memoria Rita Franke**. Não transformar a existência de fonte de grupo em comprovação de proporção ótima do híbrido.
