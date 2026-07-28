/* =========================================================
   IMPORTAÇÕES
========================================================= */

import {
    criarEstrelas,
    escaparHTML,
    obterStatusFloracao
} from "./util.js";

/* =========================================================
   IMAGEM PADRÃO
========================================================= */

const IMAGEM_PADRAO = [
    "data:image/svg+xml;charset=UTF-8,",
    encodeURIComponent(`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="800"
            height="600"
            viewBox="0 0 800 600"
        >
            <rect
                width="800"
                height="600"
                fill="#eef4ee"
            />

            <text
                x="400"
                y="270"
                text-anchor="middle"
                font-size="90"
            >
                🌸
            </text>

            <text
                x="400"
                y="360"
                text-anchor="middle"
                font-family="Arial, sans-serif"
                font-size="30"
                fill="#56705a"
            >
                Imagem não disponível
            </text>
        </svg>
    `)
].join("");

/* =========================================================
   OBTENÇÃO DA FOTO PRINCIPAL
========================================================= */

export function obterFotoPrincipal(orquidea) {
    if (
        !orquidea ||
        !Array.isArray(orquidea.fotos) ||
        orquidea.fotos.length === 0
    ) {
        return IMAGEM_PADRAO;
    }

    const fotoValida = orquidea.fotos.find((foto) => {
        if (typeof foto === "string") {
            return foto.trim() !== "";
        }

        if (
            foto &&
            typeof foto === "object"
        ) {
            return Boolean(
                foto.src ||
                foto.url ||
                foto.arquivo
            );
        }

        return false;
    });

    if (!fotoValida) {
        return IMAGEM_PADRAO;
    }

    if (typeof fotoValida === "string") {
        return fotoValida;
    }

    return (
        fotoValida.src ||
        fotoValida.url ||
        fotoValida.arquivo ||
        IMAGEM_PADRAO
    );
}

/* =========================================================
   TEXTO ALTERNATIVO DA IMAGEM
========================================================= */

export function obterTextoAlternativoFoto(orquidea) {
    const nome =
        orquidea?.nome ||
        "Orquídea";

    return `Foto de ${nome}`;
}

/* =========================================================
   NOTA DE RARIDADE
========================================================= */

export function obterNotaRaridade(orquidea) {
    const nota =
        orquidea?.avaliacoes?.raridade;

    return Math.max(
        0,
        Math.min(
            5,
            Number(nota) || 0
        )
    );
}

/* =========================================================
   TEXTO DE RARIDADE
========================================================= */

export function obterTextoRaridade(nota) {
    const valor = Number(nota) || 0;

    if (valor >= 5) {
        return "Muito rara";
    }

    if (valor >= 4) {
        return "Rara";
    }

    if (valor >= 3) {
        return "Pouco comum";
    }

    if (valor >= 2) {
        return "Comum";
    }

    if (valor >= 1) {
        return "Muito comum";
    }

    return "Raridade não avaliada";
}

/* =========================================================
   CLASSE DA DIFICULDADE
========================================================= */

export function obterClasseDificuldade(dificuldade) {
    const valor =
        String(dificuldade || "")
            .toLowerCase()
            .trim();

    if (valor === "fácil" || valor === "facil") {
        return "dificuldade-facil";
    }

    if (valor === "moderada") {
        return "dificuldade-moderada";
    }

    if (valor === "difícil" || valor === "dificil") {
        return "dificuldade-dificil";
    }

    return "dificuldade-nao-informada";
}

/* =========================================================
   ETIQUETAS PRINCIPAIS
========================================================= */

export function criarEtiquetasPrincipais(orquidea) {
    const etiquetas = [];

    if (orquidea?.tipo) {
        etiquetas.push({
            texto: orquidea.tipo,
            classe: "etiqueta-tipo"
        });
    }

    if (orquidea?.dificuldade) {
        etiquetas.push({
            texto: orquidea.dificuldade,
            classe: obterClasseDificuldade(
                orquidea.dificuldade
            )
        });
    }

    return etiquetas
        .map((etiqueta) => {
            return `
                <span
                    class="etiqueta-cartao ${escaparHTML(
                        etiqueta.classe
                    )}"
                >
                    ${escaparHTML(etiqueta.texto)}
                </span>
            `;
        })
        .join("");
}

/* =========================================================
   CARACTERÍSTICAS RESUMIDAS
========================================================= */

export function criarCaracteristicasResumidas(
    orquidea,
    limite = 3
) {
    if (
        !Array.isArray(orquidea?.caracteristicas) ||
        orquidea.caracteristicas.length === 0
    ) {
        return "";
    }

    const caracteristicas =
        orquidea.caracteristicas
            .filter((item) => {
                return (
                    typeof item === "string" &&
                    item.trim() !== ""
                );
            })
            .slice(0, limite);

    if (caracteristicas.length === 0) {
        return "";
    }

    return `
        <div class="caracteristicas-cartao">

            ${caracteristicas
                .map((caracteristica) => {
                    return `
                        <span>
                            ${escaparHTML(caracteristica)}
                        </span>
                    `;
                })
                .join("")}

        </div>
    `;
}

/* =========================================================
   INFORMAÇÕES DE CULTIVO
========================================================= */

export function criarInformacoesCultivo(orquidea) {
    const informacoes = [
        {
            icone: "🌡️",
            rotulo: "Clima",
            valor: orquidea?.clima
        },
        {
            icone: "☀️",
            rotulo: "Iluminação",
            valor: orquidea?.iluminacao
        },
        {
            icone: "🌸",
            rotulo: "Floração",
            valor: orquidea?.floracao
        }
    ];

    const informacoesValidas = informacoes.filter(
        (informacao) => {
            return (
                typeof informacao.valor === "string" &&
                informacao.valor.trim() !== ""
            );
        }
    );

    if (informacoesValidas.length === 0) {
        return `
            <p class="informacao-nao-disponivel">
                Informações de cultivo ainda não cadastradas.
            </p>
        `;
    }

    return `
        <div class="informacoes-cartao">

            ${informacoesValidas
                .map((informacao) => {
                    return `
                        <div class="informacao-cartao">

                            <span class="icone-informacao-cartao">
                                ${informacao.icone}
                            </span>

                            <div>

                                <strong>
                                    ${escaparHTML(
                                        informacao.rotulo
                                    )}
                                </strong>

                                <span>
                                    ${escaparHTML(
                                        informacao.valor
                                    )}
                                </span>

                            </div>

                        </div>
                    `;
                })
                .join("")}

        </div>
    `;
}

/* =========================================================
   RARIDADE
========================================================= */

export function criarAvaliacaoRaridade(orquidea) {
    const nota =
        obterNotaRaridade(orquidea);

    const estrelas =
        criarEstrelas(nota);

    const texto =
        obterTextoRaridade(nota);

    return `
        <div
            class="raridade-cartao"
            title="${escaparHTML(texto)}"
            aria-label="${escaparHTML(
                `${texto}: ${nota} de 5`
            )}"
        >

            <span class="rotulo-raridade">
                Raridade
            </span>

            <span class="estrelas-raridade">
                ${estrelas}
            </span>

        </div>
    `;
}

/* =========================================================
   STATUS DA FLORAÇÃO
========================================================= */

export function criarStatusFloracao(
    orquidea,
    mesReferencia = new Date().getMonth() + 1
) {
    const status =
        obterStatusFloracao(
            orquidea,
            mesReferencia
        );

    const classesVisiveis = new Set([
        "status-florindo",
        "status-atual",
        "status-proxima",
        "status-proximo",
        "status-aproximando"
    ]);

    // Fora da época de floração, o card permanece sem plaqueta.
    if (!classesVisiveis.has(status.classe)) {
        return "";
    }

    return `
        <span
            class="status-floracao-cartao ${escaparHTML(
                status.classe
            )}"
            title="${escaparHTML(status.texto)}"
        >
            <span aria-hidden="true">
                ${status.icone}
            </span>

            ${escaparHTML(status.texto)}
        </span>
    `;
}


/* =========================================================
   RESUMOS VISUAIS E SELOS DO CARTÃO V4
========================================================= */

function primeiraFrase(texto, limite = 145) {
    const valor = String(texto || "").replace(/\s+/g, " ").trim();
    if (!valor) return "Informação ainda não cadastrada.";

    const frase = valor.split(/(?<=[.!?])\s+/)[0] || valor;
    if (frase.length <= limite) return frase;

    const corte = frase.slice(0, limite + 1);
    const ultimoEspaco = corte.lastIndexOf(" ");
    return `${corte.slice(0, ultimoEspaco > 80 ? ultimoEspaco : limite).trim()}…`;
}

function resumirOrigem(orquidea) {
    const textoOriginal = String(
        orquidea?.origem ||
        orquidea?.distribuicao ||
        ""
    ).trim();

    if (!textoOriginal) {
        return {
            icone: "🌍",
            texto: "Origem não informada"
        };
    }

    const texto = textoOriginal
        .replace(/\s+/g, " ")
        .trim();

    const normalizado = texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

    const PAISES = [
        { nomes: ["brasil", "brazil"], nome: "Brasil", bandeira: "🇧🇷" },
        { nomes: ["colombia", "colômbia"], nome: "Colômbia", bandeira: "🇨🇴" },
        { nomes: ["equador", "ecuador"], nome: "Equador", bandeira: "🇪🇨" },
        { nomes: ["peru"], nome: "Peru", bandeira: "🇵🇪" },
        { nomes: ["venezuela"], nome: "Venezuela", bandeira: "🇻🇪" },
        { nomes: ["bolivia", "bolívia"], nome: "Bolívia", bandeira: "🇧🇴" },
        { nomes: ["paraguai", "paraguay"], nome: "Paraguai", bandeira: "🇵🇾" },
        { nomes: ["argentina"], nome: "Argentina", bandeira: "🇦🇷" },
        { nomes: ["uruguai", "uruguay"], nome: "Uruguai", bandeira: "🇺🇾" },
        { nomes: ["chile"], nome: "Chile", bandeira: "🇨🇱" },
        { nomes: ["mexico", "méxico"], nome: "México", bandeira: "🇲🇽" },
        { nomes: ["estados unidos", "eua", "united states"], nome: "Estados Unidos", bandeira: "🇺🇸" },
        { nomes: ["costa rica"], nome: "Costa Rica", bandeira: "🇨🇷" },
        { nomes: ["panama", "panamá"], nome: "Panamá", bandeira: "🇵🇦" },
        { nomes: ["japao", "japão", "japan"], nome: "Japão", bandeira: "🇯🇵" },
        { nomes: ["china"], nome: "China", bandeira: "🇨🇳" },
        { nomes: ["taiwan"], nome: "Taiwan", bandeira: "🇹🇼" },
        { nomes: ["india", "índia"], nome: "Índia", bandeira: "🇮🇳" },
        { nomes: ["nepal"], nome: "Nepal", bandeira: "🇳🇵" },
        { nomes: ["tailandia", "tailândia", "thailand"], nome: "Tailândia", bandeira: "🇹🇭" },
        { nomes: ["vietna", "vietnã", "vietnam"], nome: "Vietnã", bandeira: "🇻🇳" },
        { nomes: ["laos"], nome: "Laos", bandeira: "🇱🇦" },
        { nomes: ["malasia", "malásia", "malaysia"], nome: "Malásia", bandeira: "🇲🇾" },
        { nomes: ["indonesia", "indonésia"], nome: "Indonésia", bandeira: "🇮🇩" },
        { nomes: ["filipinas", "philippines"], nome: "Filipinas", bandeira: "🇵🇭" },
        { nomes: ["madagascar"], nome: "Madagascar", bandeira: "🇲🇬" },
        { nomes: ["australia", "austrália"], nome: "Austrália", bandeira: "🇦🇺" }
    ];

    const regioes = [
        { termos: ["mata atlantica"], texto: "Mata Atlântica" },
        { termos: ["campo rupestre", "campos rupestres"], texto: "Campos Rupestres" },
        { termos: ["andes tropicais"], texto: "Andes Tropicais" },
        { termos: ["america tropical"], texto: "América Tropical" },
        { termos: ["america central"], texto: "América Central" },
        { termos: ["america do sul"], texto: "América do Sul" },
        { termos: ["sudeste asiatico"], texto: "Sudeste Asiático" },
        { termos: ["sul da asia"], texto: "Sul da Ásia" },
        { termos: ["africa tropical"], texto: "África Tropical" },
        { termos: ["oceania"], texto: "Oceania" },
        { termos: ["oceano indico"], texto: "Oceano Índico" }
    ];

    const conjuntosRegionais = [
        {
            termos: ["nepal", "sikkim", "assam", "bangladesh", "butao", "butão", "india", "índia"],
            minimo: 2,
            texto: "Sul da Ásia"
        },
        {
            termos: ["tailandia", "tailândia", "laos", "camboja", "vietna", "vietnã", "malasia", "malásia", "indonesia", "indonésia", "filipinas"],
            minimo: 2,
            texto: "Sudeste Asiático"
        },
        {
            termos: ["colombia", "colômbia", "equador", "peru", "venezuela", "bolivia", "bolívia"],
            minimo: 3,
            texto: "Andes Tropicais"
        },
        {
            termos: ["brasil", "argentina", "paraguai", "uruguai", "chile", "bolivia", "bolívia"],
            minimo: 2,
            texto: "América do Sul"
        },
        {
            termos: ["mexico", "méxico", "guatemala", "honduras", "el salvador", "nicaragua", "nicarágua", "costa rica", "panama", "panamá", "belize"],
            minimo: 2,
            texto: "América Central"
        },
        {
            termos: ["gabao", "gabão", "camaroes", "camarões", "congo", "angola", "nigeria", "nigéria"],
            minimo: 2,
            texto: "África Tropical"
        },
        {
            termos: ["madagascar", "reuniao", "reunião", "mauricio", "maurício"],
            minimo: 2,
            texto: "Oceano Índico"
        }
    ];

    for (const regiao of regioes) {
        if (regiao.termos.some((termo) => normalizado.includes(termo))) {
            return {
                icone: "🌍",
                texto: regiao.texto
            };
        }
    }

    for (const grupo of conjuntosRegionais) {
        const ocorrencias = grupo.termos.filter((termo) =>
            normalizado.includes(
                termo
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
            )
        ).length;

        if (ocorrencias >= grupo.minimo) {
            return {
                icone: "🌍",
                texto: grupo.texto
            };
        }
    }

    const paisesEncontrados = PAISES.filter((pais) =>
        pais.nomes.some((nome) =>
            normalizado.includes(
                nome
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
            )
        )
    );

    if (paisesEncontrados.length === 1) {
        return {
            icone: paisesEncontrados[0].bandeira,
            texto: paisesEncontrados[0].nome
        };
    }

    if (paisesEncontrados.length > 1) {
        const nomes = paisesEncontrados.map((pais) => pais.nome);

        if (nomes.every((nome) => ["Brasil", "Argentina", "Paraguai", "Uruguai", "Chile", "Bolívia", "Peru", "Colômbia", "Equador", "Venezuela"].includes(nome))) {
            return { icone: "🌍", texto: "América do Sul" };
        }

        if (nomes.every((nome) => ["Índia", "Nepal", "Bangladesh"].includes(nome))) {
            return { icone: "🌍", texto: "Sul da Ásia" };
        }

        if (nomes.every((nome) => ["Tailândia", "Vietnã", "Laos", "Malásia", "Indonésia", "Filipinas"].includes(nome))) {
            return { icone: "🌍", texto: "Sudeste Asiático" };
        }

        return {
            icone: "🌍",
            texto: "Distribuição regional"
        };
    }

    const trechoCurto = texto
        .replace(/^(nativa|nativo|originária|originario|originário|originaria)\s+(de|do|da|dos|das)\s+/i, "")
        .split(/[.;]/)[0]
        .trim();

    return {
        icone: "🌍",
        texto: trechoCurto.length > 28
            ? `${trechoCurto.slice(0, 28).trim()}…`
            : trechoCurto
    };
}

function detectarPorte(orquidea) {
    const base = [
        ...(Array.isArray(orquidea?.caracteristicas) ? orquidea.caracteristicas : []),
        orquidea?.descricao,
        orquidea?.habitat
    ].join(" ").toLowerCase();

    if (/micro|miniatura|minúscul|muito pequena/.test(base)) return "Miniatura";
    if (/grande porte|porte grande|robusta|gigante/.test(base)) return "Grande porte";
    return "Porte médio";
}

function detectarHabito(orquidea) {
    const base = [orquidea?.descricao, orquidea?.habitat, ...(orquidea?.caracteristicas || [])]
        .join(" ").toLowerCase();
    if (base.includes("terrestre")) return "Terrestre";
    if (base.includes("litófita") || base.includes("rupícola")) return "Rupícola";
    return "Epífita";
}

function obterSinonimoPrincipal(orquidea) {
    if (typeof orquidea?.sinonimo === "string" && orquidea.sinonimo.trim()) {
        return orquidea.sinonimo.trim();
    }

    if (Array.isArray(orquidea?.sinonimos)) {
        const primeiro = orquidea.sinonimos.find((item) => {
            return typeof item === "string" && item.trim();
        });

        if (primeiro) return primeiro.trim();
    }

    return "";
}

function criarSelosEspecie(orquidea) {
    const selos = [
        { icone: "🌿", texto: detectarHabito(orquidea), classe: "" },
        { icone: "📏", texto: detectarPorte(orquidea), classe: "" },
        { icone: "🌺", texto: Number(orquidea?.avaliacoes?.perfume) >= 4 ? "Perfumada" : null, classe: "" },
        { icone: "💎", texto: Number(orquidea?.avaliacoes?.raridade) >= 4 ? "Rara" : null, classe: "" }
    ].filter((selo) => selo.texto);

    return selos.map((selo) => `
        <span class="selo-visual-cartao ${selo.classe}">
            <span aria-hidden="true">${selo.icone}</span>
            ${escaparHTML(selo.texto)}
        </span>
    `).join("");
}

function criarAvaliacaoCompacta(orquidea) {
    const itens = [
        ["🌱", "Cultivo", orquidea?.avaliacoes?.cultivo],
        ["🌸", "Floração", orquidea?.avaliacoes?.floracao],
        ["🌺", "Perfume", orquidea?.avaliacoes?.perfume],
        ["☀️", "Luz", orquidea?.avaliacoes?.luminosidade],
        ["💧", "Água", orquidea?.avaliacoes?.agua],
        ["💎", "Raridade", orquidea?.avaliacoes?.raridade]
    ];

    return `
        <section class="avaliacao-compacta-cartao" aria-label="Avaliação resumida da espécie">
            <strong class="titulo-avaliacao-compacta">
                <span aria-hidden="true">⭐</span>
                Avaliação da espécie
            </strong>
            <div class="grade-avaliacao-compacta">
                ${itens.map(([icone, rotulo, nota]) => `
                    <div class="item-avaliacao-compacta" title="${escaparHTML(`${rotulo}: ${Number(nota) || 0} de 5`)}">
                        <span class="rotulo-avaliacao-compacta">
                            <span aria-hidden="true">${icone}</span>
                            ${escaparHTML(rotulo)}
                        </span>
                        <span class="estrelas-avaliacao-compacta" aria-label="${Number(nota) || 0} de 5 estrelas">
                            ${criarEstrelas(Number(nota) || 0)}
                        </span>
                    </div>
                `).join("")}
            </div>
        </section>
    `;
}

function criarInformacoesRapidas(orquidea, origemResumida) {
    const origemTexto =
        typeof origemResumida === "object"
            ? origemResumida.texto
            : origemResumida;

    const origemIcone =
        typeof origemResumida === "object"
            ? origemResumida.icone
            : "${origemIcone}";

    const dificuldade = String(orquidea?.dificuldade || "").trim();
    const itens = [
        ["${origemIcone}", origemResumida],
        dificuldade ? ["📊", `Dificuldade: ${dificuldade}`] : null
    ].filter(Boolean);

    return `
        <div class="informacoes-rapidas-cartao" aria-label="Informações rápidas">
            ${itens.map(([icone, texto]) => `
                <span class="informacao-rapida-cartao">
                    <span aria-hidden="true">${icone}</span>
                    ${escaparHTML(texto)}
                </span>
            `).join("")}
        </div>
    `;
}

/* =========================================================
   ENDEREÇO DA FICHA
========================================================= */

export function criarEnderecoFicha(orquidea) {
    const id =
        String(orquidea?.id || "").trim();

    if (!id) {
        return "orquidea.html";
    }

    return `orquidea.html?id=${encodeURIComponent(id)}`;
}

/* =========================================================
   CARTÃO COMPLETO
========================================================= */


/* =========================================================
   ABREVIAÇÕES DE GÊNEROS — SOMENTE QUANDO O NOME QUEBRA
========================================================= */

const ABREVIACOES_GENEROS_ORQUIDEAS = Object.freeze({
    "Rhyncholaeliocattleya": "Rlc.",
    "Brassocattleya": "Bc.",
    "Rhyncholaelia": "Rly.",
    "Paphiopedilum": "Paph.",
    "Phalaenopsis": "Phal.",
    "Bulbophyllum": "Bulb.",
    "Pleurothallis": "Pths.",
    "Acianthera": "Acian.",
    "Dendrobium": "Den.",
    "Oncidium": "Onc.",
    "Miltoniopsis": "Mps.",
    "Miltonia": "Milt.",
    "Brassavola": "B.",
    "Cattleya": "C.",
    "Laelia": "L.",
    "Sophronitis": "S.",
    "Encyclia": "Ency.",
    "Epidendrum": "Epi.",
    "Rodriguezia": "Rodr.",
    "Rodricidium": "Rdcm.",
    "Stanhopea": "Stan.",
    "Catasetum": "Ctsm.",
    "Cycnoches": "Cyc.",
    "Mormodes": "Morm.",
    "Zygopetalum": "Z.",
    "Maxillaria": "Max.",
    "Gomesa": "Gom.",
    "Vanda": "V.",
    "Coelogyne": "Coel.",
    "Cymbidium": "Cym.",
    "Lycaste": "Lyc.",
    "Masdevallia": "Masd.",
    "Dracula": "Drac.",
    "Bifrenaria": "Bif.",
    "Habenaria": "Hab.",
    "Spathoglottis": "Spa."
});

function abreviarGenerosNoNome(nomeCompleto) {
    let resultado = String(nomeCompleto || "");

    Object.keys(ABREVIACOES_GENEROS_ORQUIDEAS)
        .sort((a, b) => b.length - a.length)
        .forEach((genero) => {
            const abreviacao = ABREVIACOES_GENEROS_ORQUIDEAS[genero];
            const expressao = new RegExp(`\\b${genero}\\b`, "g");
            resultado = resultado.replace(expressao, abreviacao);
        });

    return resultado;
}

function nomeOcupaMaisDeUmaLinha(elemento) {
    const estilo = window.getComputedStyle(elemento);
    const tamanhoFonte = Number.parseFloat(estilo.fontSize) || 16;
    const alturaLinha = Number.parseFloat(estilo.lineHeight) || tamanhoFonte * 1.2;

    return elemento.scrollHeight > alturaLinha * 1.35;
}

function aplicarAbreviacaoDinamica(elemento) {
    if (!elemento) return;

    const nomeCompleto = elemento.dataset.nomeCompleto || elemento.textContent.trim();
    const nomeAbreviado = abreviarGenerosNoNome(nomeCompleto);

    elemento.textContent = nomeCompleto;
    elemento.classList.remove("nome-abreviado");
    elemento.removeAttribute("title");

    if (
        nomeAbreviado !== nomeCompleto &&
        nomeOcupaMaisDeUmaLinha(elemento)
    ) {
        elemento.textContent = nomeAbreviado;
        elemento.title = nomeCompleto;
        elemento.classList.add("nome-abreviado");
    }
}

function atualizarAbreviacoesDinamicas(raiz = document) {
    raiz
        .querySelectorAll(".nome-principal-cartao[data-nome-completo]")
        .forEach((elemento) => {
            aplicarAbreviacaoDinamica(elemento);
        });
}

let temporizadorAbreviacoes;

window.addEventListener("resize", () => {
    clearTimeout(temporizadorAbreviacoes);

    temporizadorAbreviacoes = setTimeout(() => {
        atualizarAbreviacoesDinamicas();
    }, 120);
});

export function criarCartaoOrquidea(
    orquidea,
    opcoes = {}
) {
    if (!orquidea) return "";

    const mesReferencia = Number(opcoes.mesReferencia) || new Date().getMonth() + 1;
    const nome = orquidea.nome || "Orquídea sem identificação";
    const genero = orquidea.genero || "Gênero não informado";
    const origemResumida = resumirOrigem(orquidea);
    const descricaoResumida = primeiraFrase(orquidea.descricao, 145);
    const foto = obterFotoPrincipal(orquidea);
    const textoAlternativo = obterTextoAlternativoFoto(orquidea);
    const enderecoFicha = criarEnderecoFicha(orquidea);
    const statusFloracao = criarStatusFloracao(orquidea, mesReferencia);
    const selos = criarSelosEspecie(orquidea);
    const avaliacao = criarAvaliacaoCompacta(orquidea);
    const informacoesRapidas = criarInformacoesRapidas(orquidea, origemResumida);
    const sinonimo = obterSinonimoPrincipal(orquidea);

    return `
        <article class="cartao-orquidea cartao-orquidea-v4" data-orquidea-id="${escaparHTML(orquidea.id || "")}">
            <div class="bloco-imagem-cartao">
                <a class="link-imagem-cartao" href="${escaparHTML(enderecoFicha)}" aria-label="${escaparHTML(`Abrir ficha de ${nome}`)}">
                    <div class="area-imagem-cartao">
                        <img class="imagem-cartao" src="${escaparHTML(foto)}" alt="${escaparHTML(textoAlternativo)}" loading="lazy" decoding="async"
                            onerror="this.onerror = null; this.src = '${IMAGEM_PADRAO}';">
                        <div class="status-sobre-imagem">${statusFloracao}</div>
                    </div>
                </a>
                ${selos ? `<div class="selos-abaixo-imagem-cartao" aria-label="Características da orquídea">${selos}</div>` : ""}
            </div>

            <div class="conteudo-cartao">
                <div class="identificacao-cartao">
                    <div class="linha-genero-cartao">
                        <span class="rotulo-genero-cartao">Gênero:</span>
                        <span class="genero-cartao">${escaparHTML(genero)}</span>
                    </div>
                    <h3>
                        <a href="${escaparHTML(enderecoFicha)}">
                            <em
                                class="nome-principal-cartao"
                                data-nome-completo="${escaparHTML(nome)}"
                            >${escaparHTML(nome)}</em>
                        </a>
                    </h3>
                    ${informacoesRapidas}
                </div>

                <p class="descricao-cartao descricao-cartao-v4">${escaparHTML(descricaoResumida)}</p>
                ${avaliacao}

                <div class="rodape-cartao ${sinonimo ? "rodape-cartao-com-sinonimo" : "rodape-cartao-sem-sinonimo"}">
                    <div class="espaco-sinonimo-rodape">
                        ${sinonimo ? `
                            <div class="selo-sinonimo-rodape" title="${escaparHTML(`Sinônimo: ${sinonimo}`)}">
                                <span class="icone-sinonimo-rodape" aria-hidden="true">🏷️</span>
                                <span class="texto-sinonimo-rodape">
                                    <span class="rotulo-sinonimo-rodape">Sinônimo</span>
                                    <em>${escaparHTML(sinonimo)}</em>
                                </span>
                            </div>
                        ` : ""}
                    </div>

                    <a class="botao-ficha-completa" href="${escaparHTML(enderecoFicha)}">
                        FICHA COMPLETA <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </article>
    `;
}

/* =========================================================
   LISTA DE CARTÕES
========================================================= */

export function criarCartoesOrquideas(
    orquideas,
    opcoes = {}
) {
    if (
        !Array.isArray(orquideas) ||
        orquideas.length === 0
    ) {
        return "";
    }

    return orquideas
        .map((orquidea) => {
            return criarCartaoOrquidea(
                orquidea,
                opcoes
            );
        })
        .join("");
}

/* =========================================================
   RENDERIZAÇÃO DOS CARTÕES
========================================================= */

export function renderizarCartoes(
    elemento,
    orquideas,
    opcoes = {}
) {
    if (!elemento) {
        return;
    }

    elemento.innerHTML =
        criarCartoesOrquideas(
            orquideas,
            opcoes
        );

    requestAnimationFrame(() => {
        atualizarAbreviacoesDinamicas(elemento);
    });
}
