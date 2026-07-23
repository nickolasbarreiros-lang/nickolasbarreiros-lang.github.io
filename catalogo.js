const catalogo = document.getElementById("catalogo");
const busca = document.getElementById("busca");
const filtroGenero = document.getElementById("filtro-genero");
const filtroTipo = document.getElementById("filtro-tipo");
const contador = document.getElementById("contador");
const semResultados = document.getElementById("sem-resultados");

function criarCartao(orquidea) {
    const cartao = document.createElement("article");
    cartao.className = "cartao";

    cartao.innerHTML = `
        <div class="galeria">
            <img
                src="${orquidea.fotos[0]}"
                alt="${orquidea.nome} — foto principal"
                loading="lazy"
            >

            <img
                src="${orquidea.fotos[1]}"
                alt="${orquidea.nome} — segunda foto"
                loading="lazy"
            >

            <img
                src="${orquidea.fotos[2]}"
                alt="${orquidea.nome} — terceira foto"
                loading="lazy"
            >
        </div>

        <div class="conteudo-cartao">

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

            <h2 class="nome-cientifico">
                ${orquidea.nome}
            </h2>

            <p class="resumo">
                <strong>Origem:</strong>
                ${orquidea.origem}
            </p>

            <p class="resumo">
                <strong>Clima:</strong>
                ${orquidea.clima}
            </p>

            <p class="resumo">
                <strong>Iluminação:</strong>
                ${orquidea.iluminacao}
            </p>

            <p class="resumo">
                <strong>Floração:</strong>
                ${orquidea.floracao}
            </p>

            <p class="resumo">
                <strong>Substrato:</strong>
                ${orquidea.substrato}
            </p>

            <a
                class="botao-detalhes"
                href="orquidea.html?id=${orquidea.id}"
            >
                Ver ficha completa
            </a>

        </div>
    `;

    return cartao;
}

function preencherFiltroGeneros() {
    const generos = [
        ...new Set(
            orquideas.map((orquidea) => orquidea.genero)
        )
    ].sort();

    generos.forEach((genero) => {
        const opcao = document.createElement("option");

        opcao.value = genero;
        opcao.textContent = genero;

        filtroGenero.appendChild(opcao);
    });
}

function filtrarOrquideas() {
    const termoBusca = busca.value
        .toLowerCase()
        .trim();

    const generoSelecionado = filtroGenero.value;
    const tipoSelecionado = filtroTipo.value;

    const resultado = orquideas.filter((orquidea) => {
        const textoPesquisavel = `
            ${orquidea.nome}
            ${orquidea.genero}
            ${orquidea.origem}
            ${orquidea.clima}
            ${orquidea.iluminacao}
            ${orquidea.floracao}
            ${orquidea.substrato}
        `.toLowerCase();

        const buscaCompativel =
            textoPesquisavel.includes(termoBusca);

        const generoCompativel =
            generoSelecionado === "" ||
            orquidea.genero === generoSelecionado;

        const tipoCompativel =
            tipoSelecionado === "" ||
            orquidea.tipo === tipoSelecionado;

        return (
            buscaCompativel &&
            generoCompativel &&
            tipoCompativel
        );
    });

    exibirOrquideas(resultado);
}

function exibirOrquideas(lista) {
    catalogo.innerHTML = "";

    lista.forEach((orquidea) => {
        const cartao = criarCartao(orquidea);
        catalogo.appendChild(cartao);
    });

    const quantidade = lista.length;

    contador.textContent =
        quantidade === 1
            ? "1 orquídea encontrada"
            : `${quantidade} orquídeas encontradas`;

    semResultados.style.display =
        quantidade === 0 ? "block" : "none";
}

busca.addEventListener("input", filtrarOrquideas);
filtroGenero.addEventListener("change", filtrarOrquideas);
filtroTipo.addEventListener("change", filtrarOrquideas);

preencherFiltroGeneros();
exibirOrquideas(orquideas);
