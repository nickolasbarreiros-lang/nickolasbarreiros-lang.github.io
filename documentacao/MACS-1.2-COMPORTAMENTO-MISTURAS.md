# Modelo semiquantitativo de comportamento de misturas — MACS 1.2

Escala ordinal 1–5: baixo a alto. Ordem: retenção, aeração, secagem, compactação. Valores são hipóteses técnicas para materiais limpos, granulometria hortícola típica e sem compactação inicial; não são propriedades medidas. Média ponderada volumétrica = soma(percentual × nota)/100. Arredondar somente para exibição. Não inferir horas de secagem, porosidade física ou segurança a partir da média. Granulometria, recipiente, envelhecimento, irrigação e interações não lineares podem invalidar a previsão; registrar separadamente, sem correções numéricas arbitrárias. Calibrar com ensaios de massa úmida/seca, drenagem e volume de ar antes de homologar. Não confundir índice de adequação à espécie com propriedade da mistura.

## Tabela inicial e resultados

```json
{
  "materials": {
    "casca-pinus": [
      3,
      4,
      4,
      2
    ],
    "carvao-vegetal": [
      1,
      5,
      5,
      1
    ],
    "casca-macadamia": [
      2,
      5,
      4,
      1
    ],
    "esfagno": [
      5,
      2,
      1,
      4
    ],
    "chips-coco": [
      4,
      4,
      3,
      2
    ],
    "fibra-coco": [
      4,
      3,
      2,
      3
    ],
    "casca-arroz-carbonizada": [
      2,
      4,
      4,
      2
    ],
    "terra-vegetal": [
      4,
      1,
      2,
      5
    ],
    "composto-organico": [
      4,
      1,
      2,
      5
    ],
    "brita": [
      1,
      5,
      5,
      1
    ],
    "argila-expandida": [
      2,
      5,
      4,
      1
    ],
    "pedra-pomes": [
      3,
      5,
      4,
      1
    ],
    "perlita": [
      2,
      5,
      4,
      1
    ],
    "vermiculita": [
      5,
      2,
      2,
      4
    ],
    "areia-grossa": [
      2,
      2,
      3,
      3
    ]
  },
  "rows": [
    {
      "id": "papilionanthe-teres",
      "mix": [
        [
          "casca-pinus",
          40
        ],
        [
          "carvao-vegetal",
          35
        ],
        [
          "brita",
          25
        ]
      ],
      "raw": [
        1.8,
        4.6,
        4.6,
        1.4
      ],
      "rounded": [
        2,
        5,
        5,
        1
      ],
      "previous": [
        2,
        5,
        5,
        1
      ]
    },
    {
      "id": "dendrobium-aphyllum",
      "mix": [
        [
          "casca-pinus",
          60
        ],
        [
          "brita",
          20
        ],
        [
          "chips-coco",
          20
        ]
      ],
      "raw": [
        2.8,
        4.2,
        4,
        1.8
      ],
      "rounded": [
        3,
        4,
        4,
        2
      ],
      "previous": [
        3,
        4,
        4,
        2
      ]
    },
    {
      "id": "miltonia-flavescens",
      "mix": [
        [
          "casca-pinus",
          70
        ],
        [
          "carvao-vegetal",
          15
        ],
        [
          "perlita",
          15
        ]
      ],
      "raw": [
        2.55,
        4.3,
        4.15,
        1.7
      ],
      "rounded": [
        3,
        4,
        4,
        2
      ],
      "previous": [
        3,
        4,
        4,
        2
      ]
    },
    {
      "id": "maxillaria-imbricata",
      "mix": [
        [
          "casca-pinus",
          50
        ],
        [
          "chips-coco",
          20
        ],
        [
          "carvao-vegetal",
          20
        ],
        [
          "perlita",
          10
        ]
      ],
      "raw": [
        2.7,
        4.3,
        4,
        1.7
      ],
      "rounded": [
        3,
        4,
        4,
        2
      ],
      "previous": [
        3,
        4,
        4,
        2
      ]
    }
  ]
}
```
