const parametros = new URLSearchParams(window.location.search);
const idOrquidea = parametros.get("id");

const ficha = document.getElementById("ficha");
const fichaNaoEncontrada =
    document.getElementById("ficha-nao-encontrada");

const orquidea = orquideas.find(
    (item) => item.id === idOrquidea
);

const nomesMeses = [
    "JAN",
    "FEV",
    "MAR",
    "ABR",
    "MAI",
    "JUN",
    "JUL",
    "AGO",
    "SET",
    "OUT",
    "NOV",
    "DEZ"
];

function criarEstrelas(nota) {
    let estrelas = "";

    for (let i = 1; i <= 5; i++) {
        estrelas += i <= nota ? "★" : "☆";
    }

    return estrelas;
}

function criarAvaliacao(titulo, nota) {
    return `
        <div class="avaliacao-item">
            <span class="avaliacao-titulo">
                ${titulo}
            </span>

            <span
                class="estrelas"
                aria-label="${nota} de 5 estrelas"
            >
                ${criarEstrelas(nota)}
            </span>
        </div>
    `;
}

function criarCalendarioFloracao(mesesAtivos) {
    return nomesMeses.map((mes, indice) => {
        const numeroMes = indice + 1;

        const ativo = mesesAtivos.includes(numeroMes);

        return `
            <div class="mes-floracao ${ativo ? "mes-ativo" : ""}">
                <span>${mes}</span>

                <strong>
                    ${ativo ? "🌸" : "—"}
                </strong>
            </div>
        `;
    }).join("");
}

function criarCaracteristicas(lista) {
    return lista.map((item) => `
        <span class="caracteristica">
            ${item}
        </span>
    `).join("");
}

function criarGaleria(fotos) {
    return fotos.map((foto, indice) => `
        <button
            class="foto-galeria"
            type="button"
            data-indice="${indice}"
            aria-label="Abrir foto ${indice + 1}"
        >
            <img
                src="${foto}"
                alt="${orquidea.nome} — foto ${indice + 1}"
            >
        </button>
    `).join("");
}

if (!orquidea) {
    ficha.style.display = "none";
    fichaNaoEncontrada.style.display = "block";
} else {
    document.title =
        `${orquidea.nome} | Catálogo de Orquídeas`;

    ficha.innerHTML = `
        <section class="cabecalho-especie">

            <div>
                <div class="etiquetas">
                    <span class="etiqueta">
                        ${orquidea.tipo}
                    </span>

                    <span class="etiqueta">
                        ${orquidea.genero}
                    </span>

                    <span class="etiqueta">
                        Cultivo ${orquidea.dificuldade}
                    </span>
                </div>

                <h2 class="titulo-ficha">
                    ${orquidea.nome}
                </h2>

                <div class="lista-caracteristicas">
                    ${criarCaracteristicas(
                        orquidea.caracteristicas
                    )}
                </div>
            </div>

        </section>

        <section class="galeria-detalhada">
            ${criarGaleria(orquidea.fotos)}
        </section>

        <section class="conteudo-ficha">

            <section class="descricao-especie">
                <h3>Sobre a espécie</h3>

                <p>
                    ${orquidea.descricao}
                </p>
            </section>

            <section class="resumo-natural">

                <div class="bloco-informacao">
                    <h3>🌎 Origem</h3>
                    <p>${orquidea.origem}</p>
                </div>

                <div class="bloco-informacao">
                    <h3>📍 Região natural</h3>
                    <p>${orquidea.regiao}</p>
                </div>

                <div class="bloco-informacao">
                    <h3>🌳 Habitat</h3>
                    <p>${orquidea.habitat}</p>
                </div>

            </section>

            <section class="painel-avaliacoes">

                <div class="avaliacoes">
                    <h3>Avaliação da espécie</h3>

                    ${criarAvaliacao(
                        "Facilidade de cultivo",
                        orquidea.avaliacoes.cultivo
                    )}

                    ${criarAvaliacao(
                        "Facilidade de floração",
                        orquidea.avaliacoes.floracao
                    )}

                    ${criarAvaliacao(
                        "Perfume",
                        orquidea.avaliacoes.perfume
                    )}

                    ${criarAvaliacao(
                        "Luminosidade",
                        orquidea.avaliacoes.luminosidade
                    )}

                    ${criarAvaliacao(
                        "Necessidade de água",
                        orquidea.avaliacoes.agua
                    )}

                    ${criarAvaliacao(
                        "Raridade",
                        orquidea.avaliacoes.raridade
                    )}
                </div>

                <div class="calendario-floracao">
                    <h3>Calendário de floração</h3>

                    <div class="meses">
                        ${criarCalendarioFloracao(
                            orquidea.mesesFloracao
                        )}
                    </div>
                </div>

            </section>

            <section class="grade-informacoes">

                <div class="bloco-informacao">
                    <h3>🌡️ Clima para floração</h3>
                    <p>${orquidea.clima}</p>
                </div>

                <div class="bloco-informacao">
                    <h3>☀️ Iluminação</h3>
                    <p>${orquidea.iluminacao}</p>
                </div>

                <div class="bloco-informacao">
                    <h3>🌸 Época de floração</h3>
                    <p>${orquidea.floracao}</p>
                </div>

                <div class="bloco-informacao">
                    <h3>🧪 Adubação</h3>
                    <p>${orquidea.adubacao}</p>
                </div>

                <div class="bloco-informacao">
                    <h3>💧 Rega</h3>
                    <p>${orquidea.rega}</p>
                </div>

                <div class="bloco-informacao">
                    <h3>🪵 Suporte ideal</h3>
                    <p>${orquidea.suporte}</p>
                </div>

                <div class="bloco-informacao bloco-largo">
                    <h3>🌱 Substrato ideal</h3>
                    <p>${orquidea.substrato}</p>
                </div>

            </section>

            <section class="dica-ouro">
                <h3>💡 Dica de ouro</h3>
                <p>${orquidea.dica}</p>
            </section>

        </section>

        <div
            id="visualizador-fotos"
            class="visualizador-fotos"
            aria-hidden="true"
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
        fotoAmpliada.src = orquidea.fotos[indiceAtual];

        fotoAmpliada.alt =
            `${orquidea.nome} — foto ${indiceAtual + 1}`;

        contadorFotos.textContent =
            `${indiceAtual + 1} de ${orquidea.fotos.length}`;
    }

    function abrirVisualizador(indice) {
        indiceAtual = indice;

        atualizarVisualizador();

        visualizador.classList.add("aberto");
        visualizador.setAttribute("aria-hidden", "false");

        document.body.classList.add("sem-rolagem");
    }

    function fecharGaleria() {
        visualizador.classList.remove("aberto");
        visualizador.setAttribute("aria-hidden", "true");

        document.body.classList.remove("sem-rolagem");
    }

    function mostrarFotoAnterior() {
        indiceAtual =
            (indiceAtual - 1 + orquidea.fotos.length) %
            orquidea.fotos.length;

        atualizarVisualizador();
    }

    function mostrarProximaFoto() {
        indiceAtual =
            (indiceAtual + 1) %
            orquidea.fotos.length;

        atualizarVisualizador();
    }

    botoesFotos.forEach((botao) => {
        botao.addEventListener("click", () => {
            abrirVisualizador(
                Number(botao.dataset.indice)
            );
        });
    });

    fecharVisualizador.addEventListener(
        "click",
        fecharGaleria
    );

    fotoAnterior.addEventListener(
        "click",
        mostrarFotoAnterior
    );

    proximaFoto.addEventListener(
        "click",
        mostrarProximaFoto
    );

    visualizador.addEventListener("click", (evento) => {
        if (evento.target === visualizador) {
            fecharGaleria();
        }
    });

    document.addEventListener("keydown", (evento) => {
        if (!visualizador.classList.contains("aberto")) {
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
    });
}
