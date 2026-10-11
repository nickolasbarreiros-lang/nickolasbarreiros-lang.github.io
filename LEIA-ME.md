# Verificador permanente de fotografias de cultivo ideal

Instale os três arquivos nas pastas correspondentes da RAIZ do repositório. **Não substitui nenhuma ficha, fotografia ou biblioteca**.

1. Ao cadastrar uma nova foto de cultivo ideal, salve-a em `imagens/cultivo-v4/`.
2. Adicione sua chave personalizada em `js/biblioteca-cultivo-v4.js`.
3. Na ficha da espécie, use essa chave no `asset` do **primeiro método** (`formasCultivo.metodos[0]`).
4. Execute `python scripts/verificar_fotos_cultivo.py --atualizar` e inclua o manifesto atualizado no mesmo commit.
5. Execute `python scripts/verificar_fotos_cultivo.py` para conferir. O GitHub Actions repetirá automaticamente a verificação em cada alteração relevante.

O verificador detecta: foto ausente/vazia, chave não cadastrada, caminho divergente, ficha com fallback genérico, e novas fotos personalizadas ainda não registradas. O manifesto **não é sobrescrito** por uma versão antiga: só adiciona entradas depois de validar.

**Importante:** os dois registros iniciais são Acianthera auriculata e Gomesa cornigera. Se alguma fotografia não estiver realmente no GitHub, o verificador reprovará a publicação até que ela seja enviada. A verificação é estática do repositório; não substitui um teste visual da página publicada. Fichas que usam apenas imagens genéricas não exigem entrada no manifesto.
