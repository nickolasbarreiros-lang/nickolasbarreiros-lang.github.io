export const bibliotecaCultivoV4 = {
    "arvore-viva": {
        nome: "Árvore viva",
        imagem: "imagens/cultivo-v4/arvore-viva.webp"
    },
    "brita-pura": {
        nome: "Pedras / brita pura",
        imagem: "imagens/cultivo-v4/brita-pura.webp"
    },
    "totem-mourao": {
        nome: "Totem / mourão",
        imagem: "imagens/cultivo-v4/totem-mourao.webp"
    },
    "kokedama": {
        nome: "Kokedama",
        imagem: "imagens/cultivo-v4/kokedama.webp"
    },
    "cultivo-mineral": {
        nome: "Cultivo mineral",
        imagem: "imagens/cultivo-v4/pedra-pomes.webp"
    },
    "vaso-barro-perfurado": {
        nome: "Vaso de barro perfurado",
        imagem: "imagens/cultivo-v4/vaso-barro-perfurado.webp"
    },
    "placa-madeira": {
        nome: "Placa de madeira",
        imagem: "imagens/cultivo-v4/placa-madeira.webp"
    },
    "tronco": {
        nome: "Tronco / galho",
        imagem: "imagens/cultivo-v4/tronco.webp"
    },
    "cesto-madeira": {
        nome: "Cesto de madeira",
        imagem: "imagens/cultivo-v4/cesto-madeira.webp"
    },
    "cesto-plastico": {
        nome: "Cesto plástico",
        imagem: "imagens/cultivo-v4/cesto-plastico.webp"
    },
    "vaso-barro": {
        nome: "Vaso de barro",
        imagem: "imagens/cultivo-v4/vaso-barro.webp"
    },
    "vaso-plastico": {
        nome: "Vaso plástico",
        imagem: "imagens/cultivo-v4/vaso-plastico.webp"
    },
    "vaso-plastico-vasado": {
        nome: "Vaso plástico vasado",
        imagem: "imagens/cultivo-v4/vaso-plastico-vasado.webp"
    },
    "semi-hidro": {
        nome: "Semi-hidro",
        imagem: "imagens/cultivo-v4/semi-hidro.webp"
    },
    "casca-pinus": {
        nome: "Casca de pinus",
        imagem: "imagens/cultivo-v4/casca-pinus.webp"
    },
    "carvao-vegetal": {
        nome: "Carvão vegetal",
        imagem: "imagens/cultivo-v4/carvao-vegetal.webp"
    },
    "esfagno": {
        nome: "Esfagno",
        imagem: "imagens/cultivo-v4/esfagno.webp"
    },
    "macadamia": {
        nome: "Casca de macadâmia",
        imagem: "imagens/cultivo-v4/macadamia.webp"
    },
    "pedra-pomes": {
        nome: "Pedra-pomes",
        imagem: "imagens/cultivo-v4/pedra-pomes.webp"
    },
    "perlita": {
        nome: "Perlita",
        imagem: "imagens/cultivo-v4/perlita.webp"
    },
    "fibra-coco": {
        nome: "Fibra de coco",
        imagem: "imagens/cultivo-v4/fibra-coco.webp"
    }
};

export function obterAssetCultivoV4(id) {
    return bibliotecaCultivoV4[id] || null;
}
