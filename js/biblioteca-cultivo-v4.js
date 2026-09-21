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
    "micro-pleurothalidina": {
        nome: "Acianthera — micro-Pleurothallidinae",
        generosReferencia: ["Acianthera"],
        assets: {
            "placa-tronco": { nome: "Placa / tronco — Acianthera", imagem: "imagens/cultivo-v4/perfis/micro-pleurothalidina/placa-tronco.webp" },
            "arvore-viva": { nome: "Árvore viva — Acianthera", imagem: "imagens/cultivo-v4/perfis/micro-pleurothalidina/arvore-viva.webp" },
            "cesto-madeira": { nome: "Cesto de madeira — Acianthera", imagem: "imagens/cultivo-v4/perfis/micro-pleurothalidina/cesto-madeira.webp" },
            "vaso-plastico-vasado": { nome: "Vaso plástico vasado — Acianthera", imagem: "imagens/cultivo-v4/perfis/micro-pleurothalidina/vaso-plastico-vasado.webp" },
            "vaso-plastico": { nome: "Vaso plástico fechado — Acianthera", imagem: "imagens/cultivo-v4/perfis/micro-pleurothalidina/vaso-plastico.webp" },
        }
    },
    "acianthera": {
        nome: "Acianthera",
        generosReferencia: ["Acianthera"],
        assets: {
            "placa-tronco": { nome: "placa-tronco — Acianthera", imagem: "imagens/cultivo-v4/perfis/acianthera/placa-tronco.webp" },
            "arvore-viva": { nome: "arvore-viva — Acianthera", imagem: "imagens/cultivo-v4/perfis/acianthera/arvore-viva.webp" },
            "cesto-madeira": { nome: "cesto-madeira — Acianthera", imagem: "imagens/cultivo-v4/perfis/acianthera/cesto-madeira.webp" },
            "vaso-plastico-vasado": { nome: "vaso-plastico-vasado — Acianthera", imagem: "imagens/cultivo-v4/perfis/acianthera/vaso-plastico-vasado.webp" },
            "vaso-plastico": { nome: "vaso-plastico — Acianthera", imagem: "imagens/cultivo-v4/perfis/acianthera/vaso-plastico.webp" },
            "vaso-barro": { nome: "vaso-barro — Acianthera", imagem: "imagens/cultivo-v4/perfis/acianthera/vaso-barro.webp" },
        }
    },
    "aerides": {
        nome: "Aerides",
        generosReferencia: ["Aerides"],
        assets: {
            "suspensa-raizes-livres": { nome: "Suspensa, raízes livres — Aerides", imagem: "imagens/cultivo-v4/perfis/aerides/suspensa-raizes-livres.webp" },
            "arvore-viva": { nome: "Árvore viva / tronco — Aerides", imagem: "imagens/cultivo-v4/perfis/aerides/arvore-viva.webp" },
            "cesto-madeira": { nome: "Cesto extremamente vazado — Aerides", imagem: "imagens/cultivo-v4/perfis/aerides/cesto-madeira.webp" },
            "vaso-plastico-vasado": { nome: "Vaso plástico muito vazado — Aerides", imagem: "imagens/cultivo-v4/perfis/aerides/vaso-plastico-vasado.webp" },
        }
    },
    "anathallis": {
        nome: "Anathallis / Stelis",
        generosReferencia: ["Anathallis"],
        assets: {
            "placa-tronco": { nome: "placa-tronco — Anathallis / Stelis", imagem: "imagens/cultivo-v4/perfis/anathallis/placa-tronco.webp" },
            "arvore-viva": { nome: "arvore-viva — Anathallis / Stelis", imagem: "imagens/cultivo-v4/perfis/anathallis/arvore-viva.webp" },
            "cesto-madeira": { nome: "cesto-madeira — Anathallis / Stelis", imagem: "imagens/cultivo-v4/perfis/anathallis/cesto-madeira.webp" },
            "vaso-plastico-vasado": { nome: "vaso-plastico-vasado — Anathallis / Stelis", imagem: "imagens/cultivo-v4/perfis/anathallis/vaso-plastico-vasado.webp" },
        }
    },
    "arpophyllum": {
        nome: "Arpophyllum",
        generosReferencia: ["Arpophyllum"],
        assets: {
            "vaso-plastico": { nome: "vaso-plastico — Arpophyllum", imagem: "imagens/cultivo-v4/perfis/arpophyllum/vaso-plastico.webp" },
            "vaso-barro": { nome: "vaso-barro — Arpophyllum", imagem: "imagens/cultivo-v4/perfis/arpophyllum/vaso-barro.webp" },
            "cesto-madeira": { nome: "cesto-madeira — Arpophyllum", imagem: "imagens/cultivo-v4/perfis/arpophyllum/cesto-madeira.webp" },
            "placa-tronco": { nome: "placa-tronco — Arpophyllum", imagem: "imagens/cultivo-v4/perfis/arpophyllum/placa-tronco.webp" },
        }
    },
    "aspasia": {
        nome: "Aspasia",
        generosReferencia: ["Aspasia"],
        assets: {
            "vaso-plastico-vasado": { nome: "vaso-plastico-vasado — Aspasia", imagem: "imagens/cultivo-v4/perfis/aspasia/vaso-plastico-vasado.webp" },
            "vaso-barro": { nome: "vaso-barro — Aspasia", imagem: "imagens/cultivo-v4/perfis/aspasia/vaso-barro.webp" },
            "cesto-madeira": { nome: "cesto-madeira — Aspasia", imagem: "imagens/cultivo-v4/perfis/aspasia/cesto-madeira.webp" },
            "placa-tronco": { nome: "placa-tronco — Aspasia", imagem: "imagens/cultivo-v4/perfis/aspasia/placa-tronco.webp" },
        }
    },
    "bifrenaria": {
        nome: "Bifrenaria",
        generosReferencia: ["Bifrenaria"],
        assets: {
            "vaso-barro": { nome: "vaso-barro — Bifrenaria", imagem: "imagens/cultivo-v4/perfis/bifrenaria/vaso-barro.webp" },
            "vaso-plastico-vasado": { nome: "vaso-plastico-vasado — Bifrenaria", imagem: "imagens/cultivo-v4/perfis/bifrenaria/vaso-plastico-vasado.webp" },
            "cesto-madeira": { nome: "cesto-madeira — Bifrenaria", imagem: "imagens/cultivo-v4/perfis/bifrenaria/cesto-madeira.webp" },
            "placa-tronco": { nome: "placa-tronco — Bifrenaria", imagem: "imagens/cultivo-v4/perfis/bifrenaria/placa-tronco.webp" },
        }
    },
};

export function obterAssetCultivoV4(id, perfilVisual = "") {
    const perfil = perfisVisuaisCultivoV4[perfilVisual];
    const especifico = perfil?.assets?.[id];
    if (especifico) return especifico;
    return bibliotecaCultivoV4[id] || null;
}
