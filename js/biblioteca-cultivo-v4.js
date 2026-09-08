export const bibliotecaCultivoV4 = {
    "arvore-viva": {
        nome: "Árvore viva",
        imagem: "imagens/cultivo-v4/arvore-viva-v3.webp"
    },
    "brita-pura": {
        nome: "Pedras / brita pura",
        imagem: "imagens/cultivo-v4/brita-v2.webp"
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
    "placa-tronco": {
        nome: "Placa / tronco",
        imagem: "imagens/cultivo-v4/placa-madeira-v3.webp"
    },
    "placa-madeira": {
        nome: "Placa de madeira",
        imagem: "imagens/cultivo-v4/placa-madeira-v3.webp"
    },
    "tronco": {
        nome: "Tronco / galho",
        imagem: "imagens/cultivo-v4/tronco-v3.webp"
    },
    "cesto-madeira": {
        nome: "Cesto de madeira",
        imagem: "imagens/cultivo-v4/cesto-madeira-v3.webp"
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
        imagem: "imagens/cultivo-v4/vaso-plastico-vasado-v2.webp"
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


// Perfis visuais por morfologia/grupo.
// A ficha tenta primeiro a imagem específica do perfil e, se ela não existir,
// cai automaticamente no asset genérico do método. Isso permite ampliar a
// biblioteca aos poucos sem quebrar fichas já existentes.
export const perfisVisuaisCultivoV4 = {
    "zygopetalinae": {
        nome: "Zygopetalinae / Zygolum",
        generosReferencia: ["Zygolum", "Zygopetalum", "Zygosepalum"],
        assets: {
            "vaso-plastico": { nome: "Vaso plástico — Zygopetalinae", imagem: "imagens/cultivo-v4/perfis/zygopetalinae/vaso-plastico.webp" },
            "vaso-barro": { nome: "Vaso de barro — Zygopetalinae", imagem: "imagens/cultivo-v4/perfis/zygopetalinae/vaso-barro.webp" },
            "vaso-plastico-vasado": { nome: "Vaso plástico bem perfurado — Zygopetalinae", imagem: "imagens/cultivo-v4/perfis/zygopetalinae/vaso-plastico-vasado.webp" },
            "cesto-madeira": { nome: "Cesto de madeira — Zygopetalinae", imagem: "imagens/cultivo-v4/perfis/zygopetalinae/cesto-madeira.webp" }
        }
    },
    "micro-pleurothalidina": {
        nome: "Micro-orquídeas Pleurothallidinae",
        generosReferencia: ["Acianthera", "Pabstiella", "Anathallis", "Pleurothallis"],
        assets: {
            "placa-tronco": { nome: "Placa / tronco — micro-orquídea", imagem: "imagens/cultivo-v4/perfis/micro-pleurothalidina/placa-tronco.webp" },
            "arvore-viva": { nome: "Árvore viva — micro-orquídea", imagem: "imagens/cultivo-v4/perfis/micro-pleurothalidina/arvore-viva.webp" },
            "cesto-madeira": { nome: "Cesto de madeira — micro-orquídea", imagem: "imagens/cultivo-v4/perfis/micro-pleurothalidina/cesto-madeira.webp" },
            "vaso-plastico-vasado": { nome: "Vaso plástico vasado — micro-orquídea", imagem: "imagens/cultivo-v4/perfis/micro-pleurothalidina/vaso-plastico-vasado.webp" }
        }
    }
};

export function obterAssetCultivoV4(id, perfilVisual = "") {
    const perfil = perfisVisuaisCultivoV4[perfilVisual];
    const especifico = perfil?.assets?.[id];
    if (especifico) return especifico;
    return bibliotecaCultivoV4[id] || null;
}
