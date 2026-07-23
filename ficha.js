const parametros = new URLSearchParams(window.location.search);
const idOrquidea = parametros.get("id");

const ficha = document.getElementById("ficha");
const fichaNaoEncontrada =
    document.getElementById("ficha-nao-encontrada");

const orquidea = orquideas.find(
    (item) => item.id === idOrquidea
);

if (!orquidea) {
    ficha.style.display = "none";
    fichaNaoEncontrada.style.display = "block";
} else {
    document.title = `${orquidea.nome} | Catálogo de Orquídeas`;

    ficha.innerHTML = `
        <section class="galeria-detalhada">
            ${orquidea.fotos.map((foto, indice) => `
                <img
                    src="${foto}"
                    alt="${orquidea.nome} — foto ${indice + 1}"
                >
            `).join("")}
        </section>

        <section class="conteudo-ficha">

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

            <div class="grade-informacoes">

                <div class="bloco-informacao">
                    <h3>Origem</h3>
                    <p>${orquidea.origem}</p>
                </div>

                <div class="bloco-informacao">
                    <h3>Clima para floração</h3>
                    <p>${orquidea.clima}</p>
                </div>

                <div class="bloco-informacao">
                    <h3>Iluminação</h3>
                    <p>${orquidea.iluminacao}</p>
                </div>

                <div class="bloco-informacao">
                    <h3>Época de floração</h3>
                    <p>${orquidea.floracao}</p>
                </div>

                <div class="bloco-informacao">
                    <h3>Adubação</h3>
                    <p>${orquidea.adubacao}</p>
                </div>

                <div class="bloco-informacao">
                    <h3>Rega</h3>
                    <p>${orquidea.rega}</p>
                </div>

                <div class="bloco-informacao">
                    <h3>Suporte ideal</h3>
                    <p>${orquidea.suporte}</p>
                </div>

                <div class="bloco-informacao">
                    <h3>Substrato ideal</h3>
                    <p>${orquidea.substrato}</p>
                </div>

            </div>

            <section class="dica-ouro">
                <h3>Dica de ouro</h3>
                <p>${orquidea.dica}</p>
            </section>

        </section>
    `;
}
