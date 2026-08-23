import { obterNotaRaridadeCalculada, obterTextoRaridadePorEstrelas } from "./raridade.js";
/* =========================================================
   IMPORTAÇÕES
========================================================= */

import {
    criarEstrelas,
    escaparHTML,
    obterStatusFloracao
} from "./util.js";

import { resumirOrigem } from "./geografia.js";

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
    return obterNotaRaridadeCalculada(orquidea);
}

/* =========================================================
   TEXTO DE RARIDADE
========================================================= */

export function obterTextoRaridade(nota) {
    return obterTextoRaridadePorEstrelas(nota);
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
        "status-proximo"
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
        { icone: "💎", texto: obterNotaRaridade(orquidea) === 5 ? "Rara" : null, classe: "" }
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

export function criarInformacoesRapidas(orquidea, origemResumida) {
    const dificuldade =
        orquidea?.dificuldade ||
        "Não informada";

    const origemTexto =
        origemResumida &&
        typeof origemResumida === "object"
            ? origemResumida.texto
            : String(origemResumida || "Origem não informada");

    const origemIcone =
        origemResumida &&
        typeof origemResumida === "object"
            ? origemResumida.icone
            : "🌍";

    const codigoPais =
        origemResumida &&
        typeof origemResumida === "object"
            ? origemResumida.codigoPais
            : "";

    const iconeOrigemHTML = codigoPais
        ? `<img
                class="bandeira-pais-cartao"
                src="https://flagcdn.com/20x15/${escaparHTML(codigoPais)}.png"
                srcset="https://flagcdn.com/40x30/${escaparHTML(codigoPais)}.png 2x"
                width="20"
                height="15"
                alt=""
                aria-hidden="true"
                loading="lazy"
            >`
        : `<span aria-hidden="true">${escaparHTML(origemIcone)}</span>`;

    return `
        <div class="informacoes-rapidas-cartao">
            <span class="informacao-rapida-cartao origem-resumida-cartao">
                ${iconeOrigemHTML}
                <span>${escaparHTML(origemTexto)}</span>
            </span>

            <span class="separador-informacoes-rapidas" aria-hidden="true">•</span>

            <span class="informacao-rapida-cartao dificuldade-resumida-cartao">
                <span aria-hidden="true">📊</span>
                <span>${escaparHTML(`Dificuldade: ${dificuldade}`)}</span>
            </span>
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


function obterFotosDoCartao(orquidea, limite = 4) {
    if (!Array.isArray(orquidea?.fotos)) {
        return [];
    }

    return orquidea.fotos
        .map((foto) => {
            if (typeof foto === "string") {
                return foto.trim();
            }

            if (foto && typeof foto === "object") {
                return String(
                    foto.src ||
                    foto.url ||
                    foto.arquivo ||
                    ""
                ).trim();
            }

            return "";
        })
        .filter(Boolean)
        .slice(0, limite);
}

function ativarGaleriasLaterais(raiz = document) {
    raiz
        .querySelectorAll(".galeria-lateral-lista")
        .forEach((galeria) => {
            if (galeria.dataset.galeriaAtiva === "true") {
                return;
            }

            galeria.dataset.galeriaAtiva = "true";

            const cartao = galeria.closest(".cartao-orquidea-v4");
            const imagemPrincipal = cartao?.querySelector(".imagem-cartao");
            const miniaturas = galeria.querySelectorAll(".miniatura-lateral-lista");

            if (!imagemPrincipal || miniaturas.length === 0) {
                return;
            }

            const fotoOriginal = imagemPrincipal.getAttribute("src");
            let fotoFixada = fotoOriginal;
            let miniaturaFixada = null;

            const trocarImagem = (novaFoto) => {
                if (!novaFoto || imagemPrincipal.getAttribute("src") === novaFoto) {
                    return;
                }

                imagemPrincipal.classList.add("imagem-cartao-trocando");

                window.setTimeout(() => {
                    imagemPrincipal.setAttribute("src", novaFoto);
                    imagemPrincipal.classList.remove("imagem-cartao-trocando");
                }, 90);
            };

            const atualizarMiniaturaAtiva = () => {
                miniaturas.forEach((item) => {
                    const ativa = item === miniaturaFixada;
                    item.classList.toggle("ativa", ativa);
                    item.setAttribute("aria-pressed", ativa ? "true" : "false");
                });
            };

            miniaturas.forEach((botao) => {
                botao.addEventListener("mouseenter", () => {
                    trocarImagem(botao.dataset.foto);
                });

                botao.addEventListener("focus", () => {
                    trocarImagem(botao.dataset.foto);
                });

                botao.addEventListener("click", (evento) => {
                    evento.preventDefault();
                    fotoFixada = botao.dataset.foto || fotoOriginal;
                    miniaturaFixada = botao;
                    trocarImagem(fotoFixada);
                    atualizarMiniaturaAtiva();
                });
            });

            galeria.addEventListener("mouseleave", () => {
                trocarImagem(fotoFixada);
            });

            galeria.addEventListener("focusout", (evento) => {
                if (!galeria.contains(evento.relatedTarget)) {
                    trocarImagem(fotoFixada);
                }
            });
        });
}

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
    const fotosCartao = obterFotosDoCartao(orquidea);
    const fotosSecundarias = fotosCartao.slice(1, 4);
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
                <div class="conjunto-imagens-cartao">
                    <a class="link-imagem-cartao" href="${escaparHTML(enderecoFicha)}" aria-label="${escaparHTML(`Abrir ficha de ${nome}`)}">
                        <div class="area-imagem-cartao">
                            <img class="imagem-cartao" src="${escaparHTML(foto)}" alt="${escaparHTML(textoAlternativo)}" loading="lazy" decoding="async"
                                onerror="this.onerror = null; this.src = '${IMAGEM_PADRAO}';">
                            <div class="status-sobre-imagem">${statusFloracao}</div>
                        </div>
                    </a>

                    ${fotosSecundarias.length > 0 ? `
                        <div class="galeria-lateral-lista" aria-label="Fotos adicionais de ${escaparHTML(nome)}">
                            ${fotosSecundarias
                                .map((fotoSecundaria, indice) => `
                                    <button
                                        class="miniatura-lateral-lista"
                                        type="button"
                                        data-foto="${escaparHTML(fotoSecundaria)}"
                                        aria-label="${escaparHTML(`Mostrar foto ${indice + 2} de ${nome}`)}"
                                        aria-pressed="false"
                                    >
                                        <img
                                            src="${escaparHTML(fotoSecundaria)}"
                                            alt=""
                                            loading="lazy"
                                            decoding="async"
                                        >
                                    </button>
                                `)
                                .join("")}
                        </div>
                    ` : ""}
                </div>

                ${selos ? `<div class="selos-abaixo-imagem-cartao" aria-label="Características da orquídea">${selos}</div>` : ""}
            </div>

            <div class="conteudo-cartao">
                <div class="identificacao-cartao">
                    <div
                        class="faixa-identidade-cartao"
                        data-esboco-src="${escaparHTML(foto)}"
                    >
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
                    </div>
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
   ESBOÇO BOTÂNICO DERIVADO DA FOTO
   Gera no navegador uma versão em traço da foto real de cada
   espécie. O resultado é usado apenas como ornamento visual
   da faixa de identificação; a fotografia original permanece
   intacta.
========================================================= */

function criarEsbocoBotanicoDaImagem(src) {
    return new Promise((resolve) => {
        const imagem = new Image();
        imagem.decoding = "async";

        imagem.onload = () => {
            try {
                const maxLado = 420;
                const escala = Math.min(1, maxLado / Math.max(imagem.naturalWidth, imagem.naturalHeight));
                const largura = Math.max(1, Math.round(imagem.naturalWidth * escala));
                const altura = Math.max(1, Math.round(imagem.naturalHeight * escala));
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d", { willReadFrequently: true });

                if (!ctx) {
                    resolve("");
                    return;
                }

                canvas.width = largura;
                canvas.height = altura;
                ctx.drawImage(imagem, 0, 0, largura, altura);

                const dados = ctx.getImageData(0, 0, largura, altura);
                const origem = dados.data;
                const cinza = new Float32Array(largura * altura);

                for (let i = 0, p = 0; i < origem.length; i += 4, p += 1) {
                    cinza[p] = origem[i] * 0.299 + origem[i + 1] * 0.587 + origem[i + 2] * 0.114;
                }

                const saida = ctx.createImageData(largura, altura);
                const dst = saida.data;
                const sx = [-1, 0, 1, -2, 0, 2, -1, 0, 1];
                const sy = [-1, -2, -1, 0, 0, 0, 1, 2, 1];

                for (let y = 1; y < altura - 1; y += 1) {
                    for (let x = 1; x < largura - 1; x += 1) {
                        let gx = 0;
                        let gy = 0;
                        let k = 0;

                        for (let yy = -1; yy <= 1; yy += 1) {
                            for (let xx = -1; xx <= 1; xx += 1) {
                                const valor = cinza[(y + yy) * largura + (x + xx)];
                                gx += valor * sx[k];
                                gy += valor * sy[k];
                                k += 1;
                            }
                        }

                        const mag = Math.min(255, Math.hypot(gx, gy));
                        const intensidade = mag > 32 ? Math.min(225, 55 + mag * 0.92) : 0;
                        const i = (y * largura + x) * 4;

                        // Traço creme/dourado suave para funcionar sobre o verde profundo.
                        dst[i] = 232;
                        dst[i + 1] = 216;
                        dst[i + 2] = 166;
                        dst[i + 3] = intensidade;
                    }
                }

                ctx.clearRect(0, 0, largura, altura);
                ctx.putImageData(saida, 0, 0);
                resolve(canvas.toDataURL("image/png"));
            } catch (erro) {
                console.warn("Não foi possível gerar o esboço botânico:", erro);
                resolve("");
            }
        };

        imagem.onerror = () => resolve("");
        imagem.src = src;
    });
}

function ativarEsbocosBotanicosCartoes(raiz = document) {
    const alvos = Array.from(raiz.querySelectorAll(".faixa-identidade-cartao[data-esboco-src]"));
    if (!alvos.length) return;

    const processar = async (alvo) => {
        if (alvo.dataset.esbocoProcessado === "1") return;
        alvo.dataset.esbocoProcessado = "1";
        const src = alvo.dataset.esbocoSrc;
        if (!src || src.startsWith("data:image/svg")) return;

        const esboco = await criarEsbocoBotanicoDaImagem(src);
        if (esboco) {
            alvo.style.setProperty("--esboco-botanico", `url("${esboco}")`);
            alvo.classList.add("tem-esboco-botanico");
        }
    };

    if (!("IntersectionObserver" in window)) {
        alvos.forEach(processar);
        return;
    }

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (!entrada.isIntersecting) return;
            observador.unobserve(entrada.target);
            processar(entrada.target);
        });
    }, { rootMargin: "260px 0px" });

    alvos.forEach((alvo) => observador.observe(alvo));
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
        ativarGaleriasLaterais(elemento);
        ativarEsbocosBotanicosCartoes(elemento);
    });
}
