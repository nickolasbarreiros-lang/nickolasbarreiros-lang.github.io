/* =========================================================
   GEOGRAFIA DOS CARDS
   Mantém a origem detalhada nas fichas e gera apenas
   uma versão curta para os cartões do catálogo.
========================================================= */

const PAISES = Object.freeze([
    { chaves: ["brasil", "brazil"], nome: "Brasil", codigo: "br", bandeira: "🇧🇷", regiao: "América do Sul" },
    { chaves: ["colombia"], nome: "Colômbia", codigo: "co", bandeira: "🇨🇴", regiao: "Andes Tropicais" },
    { chaves: ["equador", "ecuador"], nome: "Equador", codigo: "ec", bandeira: "🇪🇨", regiao: "Andes Tropicais" },
    { chaves: ["peru"], nome: "Peru", codigo: "pe", bandeira: "🇵🇪", regiao: "Andes Tropicais" },
    { chaves: ["venezuela"], nome: "Venezuela", codigo: "ve", bandeira: "🇻🇪", regiao: "Andes Tropicais" },
    { chaves: ["bolivia"], nome: "Bolívia", codigo: "bo", bandeira: "🇧🇴", regiao: "Andes Tropicais" },
    { chaves: ["paraguai", "paraguay"], nome: "Paraguai", codigo: "py", bandeira: "🇵🇾", regiao: "América do Sul" },
    { chaves: ["argentina"], nome: "Argentina", codigo: "ar", bandeira: "🇦🇷", regiao: "América do Sul" },
    { chaves: ["uruguai", "uruguay"], nome: "Uruguai", codigo: "uy", bandeira: "🇺🇾", regiao: "América do Sul" },
    { chaves: ["chile"], nome: "Chile", codigo: "cl", bandeira: "🇨🇱", regiao: "América do Sul" },
    { chaves: ["mexico"], nome: "México", codigo: "mx", bandeira: "🇲🇽", regiao: "América Central" },
    { chaves: ["estados unidos", "eua", "united states"], nome: "Estados Unidos", codigo: "us", bandeira: "🇺🇸", regiao: "América do Norte" },
    { chaves: ["costa rica"], nome: "Costa Rica", codigo: "cr", bandeira: "🇨🇷", regiao: "América Central" },
    { chaves: ["panama"], nome: "Panamá", codigo: "pa", bandeira: "🇵🇦", regiao: "América Central" },
    { chaves: ["japao", "japan"], nome: "Japão", codigo: "jp", bandeira: "🇯🇵", regiao: "Leste da Ásia" },
    { chaves: ["china"], nome: "China", codigo: "cn", bandeira: "🇨🇳", regiao: "Leste da Ásia" },
    { chaves: ["taiwan"], nome: "Taiwan", codigo: "tw", bandeira: "🇹🇼", regiao: "Leste da Ásia" },
    { chaves: ["india"], nome: "Índia", codigo: "in", bandeira: "🇮🇳", regiao: "Sul da Ásia" },
    { chaves: ["nepal"], nome: "Nepal", codigo: "np", bandeira: "🇳🇵", regiao: "Sul da Ásia" },
    { chaves: ["bangladesh"], nome: "Bangladesh", codigo: "bd", bandeira: "🇧🇩", regiao: "Sul da Ásia" },
    { chaves: ["butao", "bhutan"], nome: "Butão", codigo: "bt", bandeira: "🇧🇹", regiao: "Sul da Ásia" },
    { chaves: ["tailandia", "thailand"], nome: "Tailândia", codigo: "th", bandeira: "🇹🇭", regiao: "Sudeste Asiático" },
    { chaves: ["vietna", "vietnam"], nome: "Vietnã", codigo: "vn", bandeira: "🇻🇳", regiao: "Sudeste Asiático" },
    { chaves: ["laos"], nome: "Laos", codigo: "la", bandeira: "🇱🇦", regiao: "Sudeste Asiático" },
    { chaves: ["malasia", "malaysia"], nome: "Malásia", codigo: "my", bandeira: "🇲🇾", regiao: "Sudeste Asiático" },
    { chaves: ["indonesia"], nome: "Indonésia", codigo: "id", bandeira: "🇮🇩", regiao: "Sudeste Asiático" },
    { chaves: ["filipinas", "philippines"], nome: "Filipinas", codigo: "ph", bandeira: "🇵🇭", regiao: "Sudeste Asiático" },
    { chaves: ["madagascar"], nome: "Madagascar", codigo: "mg", bandeira: "🇲🇬", regiao: "Oceano Índico" },
    { chaves: ["nova guine", "new guinea"], nome: "Nova Guiné", codigo: "pg", bandeira: "🇵🇬", regiao: "Oceania" },
    { chaves: ["papua nova guine", "papua-new guinea", "papua new guinea"], nome: "Papua-Nova Guiné", codigo: "pg", bandeira: "🇵🇬", regiao: "Oceania" },
    { chaves: ["australia"], nome: "Austrália", codigo: "au", bandeira: "🇦🇺", regiao: "Oceania" }
]);

const REGIOES_EXPLICITAS = Object.freeze([
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


function ehAutofecundacaoHorticultural(orquidea) {
    const nome = normalizarTexto(orquidea?.nome);
    const nomeCientifico = normalizarTexto(orquidea?.nomeCientifico);
    const origem = normalizarTexto(orquidea?.origem);
    const descricao = normalizarTexto(orquidea?.descricao);

    const texto = [
        nome,
        nomeCientifico,
        origem,
        descricao
    ].join(" ");

    return (
        texto.includes(" x self") ||
        texto.includes(" × self") ||
        texto.includes("autofecundacao") ||
        texto.includes("autopolinizacao") ||
        texto.includes("progenie obtida pela autofecundacao")
    );
}

function ehHibridoHorticultural(orquidea) {
    const tipo = normalizarTexto(orquidea?.tipo);
    const nome = String(orquidea?.nome || "");
    const nomeCientifico = String(orquidea?.nomeCientifico || "");
    const origem = normalizarTexto(orquidea?.origem);
    const descricao = normalizarTexto(orquidea?.descricao);

    const nomeCompleto = `${nome} ${nomeCientifico}`.trim();
    const nomeCompletoNormalizado = normalizarTexto(nomeCompleto);

    /*
     * Formas, variedades, subespécies e cultivares de espécies puras
     * não são híbridos. Aceita grafias com ou sem espaço, como
     * "f. coerulea", "f.coerulea", "f. alba" e "f.alba".
     */
    const ehFormaOuVariedadeBotanica =
        /(?:^|\s)(?:f\.?|forma|var\.?|variedade|subsp\.?|ssp\.?|subespecie|cv\.?|cultivar)\s*[a-z-]+/i.test(
            nomeCompleto
        ) ||
        /\bf\s*\.\s*(?:alba|coerulea|concolor|semi-alba|flamea|rubra)\b/i.test(
            nomeCompleto
        ) ||
        /\bforma\s+(?:alba|coerulea|concolor|semi-alba|flamea|rubra)\b/i.test(
            nomeCompletoNormalizado
        );

    if (ehFormaOuVariedadeBotanica) {
        return false;
    }

    const termosDeHibrido = [
        "hibrido",
        "horticola",
        "horticultural",
        "grex",
        "cruzamento",
        "registrado na rhs",
        "registrado pela rhs",
        "registrado no catalogo",
        "alianca cattleya",
        "hibrido classico",
        "hibrido artificial",
        "hibrido registrado"
    ];

    const textoComposto = [
        tipo,
        origem,
        descricao
    ].join(" ");

    const possuiTermoDeHibrido =
        termosDeHibrido.some((termo) =>
            textoComposto.includes(termo)
        );

    const tipoExplicitamenteHibrido =
        tipo === "hibrido" ||
        tipo.includes("hibrido") ||
        tipo.includes("notogenero") ||
        tipo.includes("nothogenero");

    const nomeComCruzamento =
        nome.includes("×") ||
        nomeCientifico.includes("×");

    return (
        tipoExplicitamenteHibrido ||
        nomeComCruzamento ||
        possuiTermoDeHibrido
    );
}

export function resumirOrigem(orquidea) {
    const textoOriginal = String(
        orquidea?.origem ||
        orquidea?.distribuicao ||
        ""
    ).trim();

    // Regra editorial do catálogo:
    // qualquer origem explicitamente horticultural deve usar o tubo de ensaio,
    // independentemente de país, macrorregião ou dados residuais da ficha.
    const origemNormalizadaDireta = normalizarTexto(textoOriginal);

    if (
        origemNormalizadaDireta.includes("hibrido horticultural") ||
        origemNormalizadaDireta.includes("hibrido horticola") ||
        origemNormalizadaDireta === "hibrido"
    ) {
        return {
            icone: "🧪",
            texto: "Híbrido Horticultural",
            tipo: "hibrido"
        };
    }

    if (
        origemNormalizadaDireta.includes("selecao horticultural")
    ) {
        return {
            icone: "🧪",
            texto: "Seleção Horticultural",
            tipo: "selecao-horticultural"
        };
    }

    /*
     * Cruzamentos “× self” são autofecundações horticulturais.
     * Não são híbridos entre plantas diferentes, mas no card devem
     * ser resumidos sem exibir a descrição extensa da origem.
     */
    if (ehAutofecundacaoHorticultural(orquidea)) {
        return {
            icone: "🧪",
            texto: "Seleção Horticultural",
            tipo: "selecao-horticultural"
        };
    }

    if (ehHibridoHorticultural(orquidea)) {
        return {
            icone: "🧪",
            texto: "Híbrido Horticultural",
            tipo: "hibrido"
        };
    }

    if (!textoOriginal) {
        return {
            icone: "🌍",
            texto: "Origem não informada",
            tipo: "nao-informada"
        };
    }

    const textoNormalizado = normalizarTexto(textoOriginal);
    const paises = encontrarPaises(textoNormalizado);
    const marcadores = encontrarMarcadoresRegionais(textoNormalizado);

    /*
     * No card, um país específico tem prioridade sobre biomas e locais
     * internos, como Mata Atlântica, Cerrado, campos rupestres ou Andes.
     */
    if (paises.length === 1 && marcadores.length === 0) {
        return {
            icone: paises[0].bandeira,
            codigoPais: paises[0].codigo,
            texto: paises[0].nome,
            tipo: "pais"
        };
    }

    /*
     * Quando há mais de um país ou marcadores de uma distribuição ampla,
     * usa uma região geográfica resumida.
     */
    if (paises.length > 1 || marcadores.length > 0) {
        return {
            icone: "🌍",
            texto: escolherRegiaoDosPaises(paises, marcadores) || "Distribuição regional",
            tipo: "regiao"
        };
    }

    /*
     * Regiões continentais explicitamente citadas continuam válidas.
     * Biomas locais não entram nesta lista.
     */
    const regiaoExplicita = encontrarRegiaoExplicita(textoNormalizado);

    if (regiaoExplicita) {
        return {
            icone: "🌍",
            texto: regiaoExplicita.nome,
            tipo: "regiao"
        };
    }

    return {
        icone: "🌍",
        texto: extrairTrechoCurto(textoOriginal),
        tipo: "fallback"
    };
}
