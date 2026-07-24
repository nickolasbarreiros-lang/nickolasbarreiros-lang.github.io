import { orquideas } from "./dados/orquideas.js";

const parametros = new URLSearchParams(window.location.search);
const id = parametros.get("id");

const ficha = document.getElementById("ficha");
const fichaNaoEncontrada = document.getElementById("ficha-nao-encontrada");

const orquidea = orquideas.find(item => item.id === id);

if (!orquidea) {

    ficha.style.display = "none";
    fichaNaoEncontrada.style.display = "block";

} else {

    document.title = `${orquidea.nome} | Catálogo`;

    ficha.innerHTML = `

        <h2>${orquidea.nome}</h2>

        <p>
            <strong>Gênero:</strong>
            ${orquidea.genero}
        </p>

        <p>
            <strong>Tipo:</strong>
            ${orquidea.tipo}
        </p>

        <p>
            <strong>Origem:</strong>
            ${orquidea.origem}
        </p>

    `;

}
