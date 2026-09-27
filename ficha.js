import { orquideas } from "./dados/orquideas.js";

/* =========================================================
   CONFIGURAÇÕES E ELEMENTOS
========================================================= */

const parametros = new URLSearchParams(window.location.search);
const idOrquidea = String(parametros.get("id") || "").trim();

const ficha = document.getElementById("ficha");
const fichaNaoEncontrada =
    document.getElementById("ficha-nao-encontrada");

const nomesMeses = [
    "JAN", "FEV", "MAR", "ABR", "MAI", "JUN",
    "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"
];

const IMAGEM_PADRAO = [
    "data:image/svg+xml;charset=UTF-8,",
    encodeURIComponent(`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="900"
            height="650"
            viewBox="0 0 900 650"
        >
            <rect width="900" height="650" fill="#eef4ee"/>

            <text
                x="450"
                y="285"
                text-anchor="middle"
                font-size="96"
            >
                🌸
            </text>

            <text
                x="450"
                y="380"
                text-anchor="middle"
                font-family="Arial, sans-serif"
                font-size="31"
                fill="#56705a"
            >
                Imagem não disponível
            </text>
        </svg>
    `)
].join("");

/* =========================================================
   UTILITÁRIOS
========================================================= */

function escaparHTML(valor) {
    return String(valor ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function textoSeguro(valor, textoPadrao = "Não informado.") {
    const texto = String(valor ?? "").trim();
    return texto || textoPadrao;
}

function normalizarFotos(fotos) {
    if (!Array.isArray(fotos)) {
        return [];
    }

    return fotos
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
        .filter(Boolean);
}

function criarEstrelas(nota) {
    const valor = Math.max(
        0,
        Math.min(5, Number(nota) || 0)
    );

    let estrelas = "";

    for (let indice = 1; indice <= 5; indice += 1) {
        estrelas += indice <= valor ? "★" : "☆";
    }

    return estrelas;
}

function criarAvaliacao(titulo, nota) {
    const valor = Math.max(
        0,
        Math.min(5, Number(nota) || 0)
    );

    return `
        <div class="avaliacao-item">

            <span class="avaliacao-titulo">
                ${escaparHTML(titulo)}
            </span>

            <span
                class="estrelas"
                aria-label="${valor} de 5 estrelas"
                title="${valor} de 5"
            >
                ${criarEstrelas(valor)}
            </span>

        </div>
    `;
}

function criarCalendarioFloracao(mesesAtivos) {
    const mesesValidos = Array.isArray(mesesAtivos)
        ? mesesAtivos.map(Number)
        : [];

    return nomesMeses
        .map((mes, indice) => {
            const numeroMes = indice + 1;
            const ativo = mesesValidos.includes(numeroMes);

            return `
                <div
                    class="mes-floracao ${
                        ativo ? "mes-ativo" : ""
                    }"
                    title="${
                        ativo
                            ? "Mês previsto de floração"
                            : "Fora do período cadastrado"
                    }"
                >
                    <span>${mes}</span>

                    <strong aria-hidden="true">
                        ${ativo ? "🌸" : "—"}
                    </strong>
                </div>
            `;
        })
        .join("");
}

function criarCaracteristicas(lista) {
    if (!Array.isArray(lista) || lista.length === 0) {
        return "";
    }

    return lista
        .filter((item) => String(item || "").trim())
        .map((item) => `
            <span class="caracteristica">
                ${escaparHTML(item)}
            </span>
        `)
        .join("");
}

function criarGaleria(fotos, nome) {
    const imagens =
        fotos.length > 0
            ? fotos
            : [IMAGEM_PADRAO];

    return imagens
        .map((foto, indice) => `
            <button
                class="foto-galeria"
                type="button"
                data-indice="${indice}"
                aria-label="Ampliar foto ${indice + 1} de ${escaparHTML(nome)}"
            >
                <img
                    src="${escaparHTML(foto)}"
                    alt="${escaparHTML(nome)} — foto ${indice + 1}"
                    loading="${indice === 0 ? "eager" : "lazy"}"
                    decoding="async"
                    onerror="
                        this.onerror = null;
                        this.src = '${IMAGEM_PADRAO}';
                    "
                >
            </button>
        `)
        .join("");
}

function mostrarMensagemBotao(botao, mensagem) {
    const textoOriginal = botao.innerHTML;

    botao.innerHTML = mensagem;
    botao.disabled = true;

    window.setTimeout(() => {
        botao.innerHTML = textoOriginal;
        botao.disabled = false;
    }, 1800);
}

async function copiarLinkFicha(botao) {
    const link = window.location.href;

    try {
        await navigator.clipboard.writeText(link);

        mostrarMensagemBotao(
            botao,
            "✅ Link copiado"
        );
    } catch {
        const campoTemporario =
            document.createElement("textarea");

        campoTemporario.value = link;
        campoTemporario.style.position = "fixed";
        campoTemporario.style.opacity = "0";

        document.body.appendChild(campoTemporario);

        campoTemporario.select();
        document.execCommand("copy");
        campoTemporario.remove();

        mostrarMensagemBotao(
            botao,
            "✅ Link copiado"
        );
    }
}

/* =========================================================
   LOCALIZAÇÃO DA ORQUÍDEA
========================================================= */

const orquidea = orquideas.find((item) => {
    return String(item?.id || "").trim() === idOrquidea;
});

if (!orquidea) {
    ficha.style.display = "none";
    fichaNaoEncontrada.style.display = "block";
} else {
    renderizarFicha(orquidea);
}

/* =========================================================
   RENDERIZAÇÃO
========================================================= */

function renderizarFicha(dados) {
    const nome =
        textoSeguro(
            dados.nome,
            "Orquídea sem identificação"
        );

    const fotos = normalizarFotos(dados.fotos);

    const avaliacoes =
        dados.avaliacoes &&
        typeof dados.avaliacoes === "object"
            ? dados.avaliacoes
            : {};

    document.title =
        `${nome} | Catálogo de Orquídeas`;

    ficha.innerHTML = `
        <section class="cabecalho-especie">

            <div class="linha-superior-especie">

                <div class="identificacao-especie">

                    <div class="etiquetas">

                        <span class="etiqueta">
                            ${escaparHTML(
                                textoSeguro(
                                    dados.tipo,
                                    "Classificação não informada"
                                )
                            )}
                        </span>

                        <span class="etiqueta">
                            ${escaparHTML(
                                textoSeguro(
                                    dados.genero,
                                    "Gênero não informado"
                                )
                            )}
                        </span>

                        <span class="etiqueta">
                            Cultivo ${escaparHTML(
                                textoSeguro(
                                    dados.dificuldade,
                                    "não informado"
                                )
                            )}
                        </span>

                    </div>

                    <h2 class="titulo-ficha">
                        <em>${escaparHTML(nome)}</em>
                    </h2>

                    <div class="lista-caracteristicas">
                        ${criarCaracteristicas(
                            dados.caracteristicas
                        )}
                    </div>

                </div>

                <div class="acoes-ficha">

                    <button
                        id="imprimir-ficha"
                        class="botao-acao-ficha botao-imprimir"
                        type="button"
                    >
                        🖨️ Imprimir / Salvar em PDF
                    </button>

                    <button
                        id="copiar-link"
                        class="botao-acao-ficha botao-copiar"
                        type="button"
                    >
                        🔗 Copiar link
                    </button>

                </div>

            </div>

        </section>

        <section class="galeria-detalhada">
            ${criarGaleria(fotos, nome)}
        </section>

        <section class="conteudo-ficha">

            <section class="descricao-especie">

                <h3>Sobre a espécie</h3>

                <p>
                    ${escaparHTML(
                        textoSeguro(
                            dados.descricao,
                            "Descrição ainda não cadastrada."
                        )
                    )}
                </p>

            </section>

            <section class="resumo-natural">

                <div class="bloco-informacao">
                    <h3>🌎 Origem</h3>
                    <p>
                        ${escaparHTML(
                            textoSeguro(dados.origem)
                        )}
                    </p>
                </div>

                <div class="bloco-informacao">
                    <h3>📍 Região natural</h3>
                    <p>
                        ${escaparHTML(
                            textoSeguro(dados.regiao)
                        )}
                    </p>
                </div>

                <div class="bloco-informacao">
                    <h3>🌳 Habitat</h3>
                    <p>
                        ${escaparHTML(
                            textoSeguro(dados.habitat)
                        )}
                    </p>
                </div>

            </section>

            <section class="painel-avaliacoes">

                <div class="avaliacoes">

                    <h3>Avaliação da espécie</h3>

                    ${criarAvaliacao(
                        "Facilidade de cultivo",
                        avaliacoes.cultivo
                    )}

                    ${criarAvaliacao(
                        "Facilidade de floração",
                        avaliacoes.floracao
                    )}

                    ${criarAvaliacao(
                        "Perfume",
                        avaliacoes.perfume
                    )}

                    ${criarAvaliacao(
                        "Luminosidade",
                        avaliacoes.luminosidade
                    )}

                    ${criarAvaliacao(
                        "Necessidade de água",
                        avaliacoes.agua
                    )}

                    ${criarAvaliacao(
                        "Raridade",
                        avaliacoes.raridade
                    )}

                </div>

                <div class="calendario-floracao">

                    <h3>Calendário de floração</h3>

                    <div class="meses">
                        ${criarCalendarioFloracao(
                            dados.mesesFloracao
                        )}
                    </div>

                </div>

            </section>

            <section class="grade-informacoes">

                <div class="bloco-informacao">
                    <h3>🌡️ Clima para floração</h3>
                    <p>
                        ${escaparHTML(
                            textoSeguro(dados.clima)
                        )}
                    </p>
                </div>

                <div class="bloco-informacao">
                    <h3>☀️ Iluminação</h3>
                    <p>
                        ${escaparHTML(
                            textoSeguro(dados.iluminacao)
                        )}
                    </p>
                </div>

                <div class="bloco-informacao">
                    <h3>🌸 Época de floração</h3>
                    <p>
                        ${escaparHTML(
                            textoSeguro(dados.floracao)
                        )}
                    </p>
                </div>

                <div class="bloco-informacao">
                    <h3>🧪 Adubação</h3>
                    <p>
                        ${escaparHTML(
                            textoSeguro(dados.adubacao)
                        )}
                    </p>
                </div>

                <div class="bloco-informacao">
                    <h3>💧 Rega</h3>
                    <p>
                        ${escaparHTML(
                            textoSeguro(dados.rega)
                        )}
                    </p>
                </div>

                <div class="bloco-informacao">
                    <h3>🪵 Suporte ideal</h3>
                    <p>
                        ${escaparHTML(
                            textoSeguro(dados.suporte)
                        )}
                    </p>
                </div>

                <div class="bloco-informacao bloco-largo">
                    <h3>🌱 Substrato ideal</h3>
                    <p>
                        ${escaparHTML(
                            textoSeguro(dados.substrato)
                        )}
                    </p>
                </div>

            </section>

            <section class="dica-ouro">

                <h3>💡 Dica de ouro</h3>

                <p>
                    ${escaparHTML(
                        textoSeguro(
                            dados.dica,
                            "Nenhuma dica cadastrada."
                        )
                    )}
                </p>

            </section>

            <section class="rodape-ficha-impressao">

                <p>
                    Ficha de cultivo do
                    <strong>Catálogo de Orquídeas</strong>
                </p>

                <p>
                    Coleção particular cultivada em Serra/ES
                </p>

            </section>

        </section>

        <div
            id="visualizador-fotos"
            class="visualizador-fotos"
            aria-hidden="true"
            role="dialog"
            aria-modal="true"
            aria-label="Visualizador de fotos"
        >
            <button
                id="fechar-visualizador"
                class="fechar-visualizador"
                type="button"
                aria-label="Fechar visualizador"
            >
                ×
            </button>

            <button
                id="foto-anterior"
                class="controle-foto anterior"
                type="button"
                aria-label="Foto anterior"
            >
                ‹
            </button>

            <img
                id="foto-ampliada"
                src=""
                alt=""
            >

            <button
                id="proxima-foto"
                class="controle-foto proxima"
                type="button"
                aria-label="Próxima foto"
            >
                ›
            </button>

            <span id="contador-fotos"></span>
        </div>
    `;

    configurarAcoes(fotos, nome);
}

/* =========================================================
   AÇÕES DA FICHA E GALERIA
========================================================= */

function configurarAcoes(fotosOriginais, nome) {
    const fotos =
        fotosOriginais.length > 0
            ? fotosOriginais
            : [IMAGEM_PADRAO];

    const botaoImprimir =
        document.getElementById("imprimir-ficha");

    const botaoCopiarLink =
        document.getElementById("copiar-link");

    botaoImprimir?.addEventListener("click", () => {
        window.print();
    });

    botaoCopiarLink?.addEventListener("click", () => {
        copiarLinkFicha(botaoCopiarLink);
    });

    let indiceAtual = 0;

    const visualizador =
        document.getElementById("visualizador-fotos");

    const fotoAmpliada =
        document.getElementById("foto-ampliada");

    const contadorFotos =
        document.getElementById("contador-fotos");

    const fecharVisualizador =
        document.getElementById("fechar-visualizador");

    const fotoAnterior =
        document.getElementById("foto-anterior");

    const proximaFoto =
        document.getElementById("proxima-foto");

    const botoesFotos =
        document.querySelectorAll(".foto-galeria");

    function atualizarVisualizador() {
        fotoAmpliada.src = fotos[indiceAtual];
        fotoAmpliada.alt =
            `${nome} — foto ${indiceAtual + 1}`;

        contadorFotos.textContent =
            `${indiceAtual + 1} de ${fotos.length}`;
    }

    function abrirVisualizador(indice) {
        indiceAtual = indice;

        atualizarVisualizador();

        visualizador.classList.add("aberto");
        visualizador.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add("sem-rolagem");
        fecharVisualizador.focus();
    }

    function fecharGaleria() {
        visualizador.classList.remove("aberto");
        visualizador.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove("sem-rolagem");
    }

    function mostrarFotoAnterior() {
        indiceAtual =
            (indiceAtual - 1 + fotos.length) %
            fotos.length;

        atualizarVisualizador();
    }

    function mostrarProximaFoto() {
        indiceAtual =
            (indiceAtual + 1) %
            fotos.length;

        atualizarVisualizador();
    }

    botoesFotos.forEach((botao) => {
        botao.addEventListener("click", () => {
            abrirVisualizador(
                Number(botao.dataset.indice)
            );
        });
    });

    fecharVisualizador?.addEventListener(
        "click",
        fecharGaleria
    );

    fotoAnterior?.addEventListener(
        "click",
        mostrarFotoAnterior
    );

    proximaFoto?.addEventListener(
        "click",
        mostrarProximaFoto
    );

    visualizador?.addEventListener(
        "click",
        (evento) => {
            if (evento.target === visualizador) {
                fecharGaleria();
            }
        }
    );

    document.addEventListener(
        "keydown",
        (evento) => {
            if (
                !visualizador?.classList.contains("aberto")
            ) {
                return;
            }

            if (evento.key === "Escape") {
                fecharGaleria();
            }

            if (evento.key === "ArrowLeft") {
                mostrarFotoAnterior();
            }

            if (evento.key === "ArrowRight") {
                mostrarProximaFoto();
            }
        }
    );

    if (fotos.length <= 1) {
        fotoAnterior.style.display = "none";
        proximaFoto.style.display = "none";
    }
}
