/* =========================================================
   GEOGRAFIA DOS CARDS
   Mantém a origem detalhada nas fichas e gera apenas
   uma versão curta para os cartões do catálogo.
========================================================= */

const PAISES = Object.freeze([
    { chaves: ["brasil", "brazil"], nome: "Brasil", bandeira: "🇧🇷", regiao: "América do Sul" },
    { chaves: ["colombia"], nome: "Colômbia", bandeira: "🇨🇴", regiao: "Andes Tropicais" },
    { chaves: ["equador", "ecuador"], nome: "Equador", bandeira: "🇪🇨", regiao: "Andes Tropicais" },
    { chaves: ["peru"], nome: "Peru", bandeira: "🇵🇪", regiao: "Andes Tropicais" },
    { chaves: ["venezuela"], nome: "Venezuela", bandeira: "🇻🇪", regiao: "Andes Tropicais" },
    { chaves: ["bolivia"], nome: "Bolívia", bandeira: "🇧🇴", regiao: "Andes Tropicais" },
    { chaves: ["paraguai", "paraguay"], nome: "Paraguai", bandeira: "🇵🇾", regiao: "América do Sul" },
    { chaves: ["argentina"], nome: "Argentina", bandeira: "🇦🇷", regiao: "América do Sul" },
    { chaves: ["uruguai", "uruguay"], nome: "Uruguai", bandeira: "🇺🇾", regiao: "América do Sul" },
    { chaves: ["chile"], nome: "Chile", bandeira: "🇨🇱", regiao: "América do Sul" },
    { chaves: ["mexico"], nome: "México", bandeira: "🇲🇽", regiao: "América Central" },
    { chaves: ["estados unidos", "eua", "united states"], nome: "Estados Unidos", bandeira: "🇺🇸", regiao: "América do Norte" },
    { chaves: ["costa rica"], nome: "Costa Rica", bandeira: "🇨🇷", regiao: "América Central" },
    { chaves: ["panama"], nome: "Panamá", bandeira: "🇵🇦", regiao: "América Central" },
    { chaves: ["japao", "japan"], nome: "Japão", bandeira: "🇯🇵", regiao: "Leste da Ásia" },
    { chaves: ["china"], nome: "China", bandeira: "🇨🇳", regiao: "Leste da Ásia" },
    { chaves: ["taiwan"], nome: "Taiwan", bandeira: "🇹🇼", regiao: "Leste da Ásia" },
    { chaves: ["india"], nome: "Índia", bandeira: "🇮🇳", regiao: "Sul da Ásia" },
    { chaves: ["nepal"], nome: "Nepal", bandeira: "🇳🇵", regiao: "Sul da Ásia" },
    { chaves: ["bangladesh"], nome: "Bangladesh", bandeira: "🇧🇩", regiao: "Sul da Ásia" },
    { chaves: ["butao", "bhutan"], nome: "Butão", bandeira: "🇧🇹", regiao: "Sul da Ásia" },
    { chaves: ["tailandia", "thailand"], nome: "Tailândia", bandeira: "🇹🇭", regiao: "Sudeste Asiático" },
    { chaves: ["vietna", "vietnam"], nome: "Vietnã", bandeira: "🇻🇳", regiao: "Sudeste Asiático" },
    { chaves: ["laos"], nome: "Laos", bandeira: "🇱🇦", regiao: "Sudeste Asiático" },
    { chaves: ["malasia", "malaysia"], nome: "Malásia", bandeira: "🇲🇾", regiao: "Sudeste Asiático" },
    { chaves: ["indonesia"], nome: "Indonésia", bandeira: "🇮🇩", regiao: "Sudeste Asiático" },
    { chaves: ["filipinas", "philippines"], nome: "Filipinas", bandeira: "🇵🇭", regiao: "Sudeste Asiático" },
    { chaves: ["madagascar"], nome: "Madagascar", bandeira: "🇲🇬", regiao: "Oceano Índico" },
    { chaves: ["australia"], nome: "Austrália", bandeira: "🇦🇺", regiao: "Oceania" }
]);

const REGIOES_EXPLICITAS = Object.freeze([
    { chaves: ["mata atlantica"], nome: "Mata Atlântica" },
    { chaves: ["campos rupestres", "campo rupestre"], nome: "Campos Rupestres" },
    { chaves: ["andes tropicais"], nome: "Andes Tropicais" },
    { chaves: ["america tropical"], nome: "América Tropical" },
    { chaves: ["america central"], nome: "América Central" },
    { chaves: ["america do sul"], nome: "América do Sul" },
    { chaves: ["america do norte"], nome: "América do Norte" },
    { chaves: ["sudeste asiatico"], nome: "Sudeste Asiático" },
    { chaves: ["sul da asia"], nome: "Sul da Ásia" },
    { chaves: ["leste da asia"], nome: "Leste da Ásia" },
    { chaves: ["africa tropical"], nome: "África Tropical" },
    { chaves: ["oceano indico"], nome: "Oceano Índico" },
    { chaves: ["oceania"], nome: "Oceania" }
]);

const MARCADORES_GEOGRAFICOS = Object.freeze([
    { chave: "sikkim", regiao: "Sul da Ásia" },
    { chave: "assam", regiao: "Sul da Ásia" },
    { chave: "himalia", regiao: "Sul da Ásia" },
    { chave: "himalaias", regiao: "Sul da Ásia" },
    { chave: "reuniao", regiao: "Oceano Índico" },
    { chave: "mauricio", regiao: "Oceano Índico" },
    { chave: "gabang", regiao: "África Tropical" },
    { chave: "gabao", regiao: "África Tropical" },
    { chave: "camaroes", regiao: "África Tropical" },
    { chave: "congo", regiao: "África Tropical" }
]);

function normalizarTexto(valor) {
    return String(valor || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/\s+/g, " ")
        .trim();
}

function contemChave(textoNormalizado, chave) {
    return textoNormalizado.includes(normalizarTexto(chave));
}

function encontrarRegiaoExplicita(textoNormalizado) {
    return REGIOES_EXPLICITAS.find((regiao) =>
        regiao.chaves.some((chave) => contemChave(textoNormalizado, chave))
    );
}

function encontrarPaises(textoNormalizado) {
    return PAISES.filter((pais) =>
        pais.chaves.some((chave) => contemChave(textoNormalizado, chave))
    );
}

function encontrarMarcadoresRegionais(textoNormalizado) {
    return MARCADORES_GEOGRAFICOS
        .filter((marcador) => contemChave(textoNormalizado, marcador.chave))
        .map((marcador) => marcador.regiao);
}

function escolherRegiaoDosPaises(paises, marcadores) {
    const regioes = [
        ...paises.map((pais) => pais.regiao),
        ...marcadores
    ].filter(Boolean);

    if (regioes.length === 0) {
        return null;
    }

    const contagem = regioes.reduce((resultado, regiao) => {
        resultado[regiao] = (resultado[regiao] || 0) + 1;
        return resultado;
    }, {});

    return Object.entries(contagem)
        .sort((a, b) => b[1] - a[1])[0][0];
}

function extrairTrechoCurto(textoOriginal, limite = 30) {
    const trecho = String(textoOriginal || "")
        .replace(/^(nativa|nativo|originária|originaria|originário|originario)\s+(de|do|da|dos|das)\s+/i, "")
        .split(/[.;]/)[0]
        .trim();

    if (!trecho) {
        return "Origem não informada";
    }

    return trecho.length > limite
        ? `${trecho.slice(0, limite).trim()}…`
        : trecho;
}

export function resumirOrigem(orquidea) {
    const textoOriginal = String(
        orquidea?.origem ||
        orquidea?.distribuicao ||
        ""
    ).trim();

    if (!textoOriginal) {
        return {
            icone: "🌍",
            texto: "Origem não informada",
            tipo: "nao-informada"
        };
    }

    const textoNormalizado = normalizarTexto(textoOriginal);
    const regiaoExplicita = encontrarRegiaoExplicita(textoNormalizado);

    if (regiaoExplicita) {
        return {
            icone: "🌍",
            texto: regiaoExplicita.nome,
            tipo: "regiao"
        };
    }

    const paises = encontrarPaises(textoNormalizado);
    const marcadores = encontrarMarcadoresRegionais(textoNormalizado);

    if (paises.length === 1 && marcadores.length === 0) {
        return {
            icone: paises[0].bandeira,
            texto: paises[0].nome,
            tipo: "pais"
        };
    }

    if (paises.length > 1 || marcadores.length > 0) {
        return {
            icone: "🌍",
            texto: escolherRegiaoDosPaises(paises, marcadores) || "Distribuição regional",
            tipo: "regiao"
        };
    }

    return {
        icone: "🌍",
        texto: extrairTrechoCurto(textoOriginal),
        tipo: "fallback"
    };
}
