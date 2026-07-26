# Módulos de orquídeas

Foram gerados **110 arquivos individuais de plantas** a partir do documento `Orquideas_ALBUM.docx`.

## Uso

No catálogo, altere a importação antiga para:

```javascript
import { orquideas } from "../dados/orquideas/index.js";
```

A ficha deve importar pelo caminho adequado à localização do arquivo controlador.

## Nova planta

1. Copie `modelo.js`.
2. Renomeie o arquivo com letras minúsculas e hífens.
3. Troque `export const modelo` por um nome de variável único.
4. Adicione o import no `index.js`.
5. Adicione a variável ao array `orquideas`.

## Observação

Os nomes foram extraídos do álbum. Campos de cultivo e imagens ainda estão vazios nesta primeira etapa. Alguns híbridos e nomes comerciais devem ser revisados posteriormente porque aparecem com grafia não padronizada no documento original.
