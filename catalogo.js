const catalogo = document.getElementById("catalogo");
const contador = document.getElementById("contador");
const semResultados = document.getElementById("sem-resultados");
const filtrosAtivos = document.getElementById("filtros-ativos");

const campoBusca = document.getElementById("busca");
const filtroGenero = document.getElementById("filtro-genero");
const filtroTipo = document.getElementById("filtro-tipo");
const filtroClima = document.getElementById("filtro-clima");
const filtroLuz = document.getElementById("filtro-luz");
const filtroDificuldade =
    document.getElementById("filtro-dificuldade");
const filtroFloracao =
    document.getElementById("filtro-floracao");
const botaoLimparFiltros =
    document.getElementById("limpar-filtros");

/* =========================================================
   NORMALIZAÇÃO DE TEXTO
========================================================= */

function normalizarTexto(texto) {
    return String(texto || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}

/* =========================================================
   ORDENAÇÃO ALFABÉTICA
========================================================= */

function ordenarTextos(lista) {
    return lista.sort((a, b) =>
        a.localeCompare(
            b,
            "pt-BR",
            {
                sensitivity: "base"
            }
        )
    );
}

/* =========================================================
   VALORES ÚNICOS
========================================================= */

function obterValoresUnicos(propriedade) {
    const valores = orquideas
        .map((orquidea) => orquidea[propriedade])
        .filter((valor) => {
            return (
                typeof valor === "string" &&
                valor.trim() !== ""
            );
        });

    return ordenarTextos([...new Set(valores)]);
}

/* =========================================================
   PREENCHER SELECTS AUTOMATICAMENTE
========================================================= */

function preencherSelect(
    elementoSelect,
    valores,
    textoInicial
) {
    elementoSelect.innerHTML = `
        <option value="">
            ${textoInicial}
        </option>
    `;

    valores.forEach((valor) => {
        const opcao = document.createElement("option");

        opcao.value = valor;
        opcao.textContent = valor;

        elementoSelect.appendChild(opcao);
    });
}

function configurarFiltrosAutomaticos() {
    preencherSelect(
        filtroGenero,
        obterValoresUnicos("genero"),
        "Todos os gêneros"
    );

    preencherSelect(
        filtroClima,
        obterValoresUnicos("clima"),
        "Todos os climas"
    );

    preencherSelect(
        filtroLuz,
        obterValoresUnicos("iluminacao"),
        "Todas as iluminações"
    );
}

/* =========================================================
   GALERIA DOS CARTÕES
========================================================= */

function criarGaleriaCartao(orquidea) {
    const fotos = Array.isArray(orquidea.fotos)
        ? orquidea.fotos.slice(0, 3)
        : [];

    if (fotos.length === 0) {
        return `
            <div class="galeria galeria-sem-foto">
                <div class="imagem-indisponivel">
                    🌸
                    <span>Imagem indisponível</span>
                </div>
            </div>
        `;
    }

    while (fotos.length < 3) {
        fotos.push(fotos[0]);
    }

    return `
        <div class="galeria">
            ${fotos.map((foto, indice) => `
                <img
                    src="${foto}"
                    alt="${orquidea.nome} — foto ${indice + 1}"
                    loading="lazy"
                    onerror="this.src=''; this.classList.add('imagem-com-erro');"
                >
            `).join("")}
        </div>
    `;
}

/* =========================================================
   RESUMO DO CARTÃO
========================================================= */

function criarResumo(orquidea) {
    const partes = [];

    if (orquidea.origem) {
        partes.push(`
            <p class="resumo">
                <strong>Origem:</strong>
                ${orquidea.origem}
            </p>
        `);
    }

    if (orquidea.clima) {
        partes.push(`
            <p class="resumo">
                <strong>Clima:</strong>
                ${orquidea.clima}
            </p>
        `);
    }

    if (orquidea.iluminacao) {
        partes.push(`
            <p class="resumo">
                <strong>Iluminação:</strong>
                ${orquidea.iluminacao}
            </p>
        `);
    }

    if (orquidea.floracao) {
        partes.push(`
            <p class="resumo">
                <strong>Floração:</strong>
                ${orquidea.floracao}
            </p>
        `);
    }

    return partes.join("");
}

/* =========================================================
   CARTÃO DA ORQUÍDEA
========================================================= */

function criarCartao(orquidea) {
    const artigo = document.createElement("article");

    artigo.className = "cartao";

    artigo.innerHTML = `
        ${criarGaleriaCartao(orquidea)}

        <div class="conteudo-cartao">

            <div class="etiquetas">

                ${orquidea.tipo ? `
                    <span class="etiqueta">
                        ${orquidea.tipo}
                    </span>
                ` : ""}

                ${orquidea.genero ? `
                    <span class="etiqueta">
                        ${orquidea.genero}
                    </span>
                ` : ""}

                ${orquidea.dificuldade ? `
                    <span class="etiqueta">
                        Cultivo ${orquidea.dificuldade}
                    </span>
                ` : ""}

            </div>

            <h2 class="nome-cientifico">
                ${orquidea.nome}
            </h2>

            ${criarResumo(orquidea)}

            <a
                class="botao-detalhes"
                href="orquidea.html?id=${encodeURIComponent(
                    orquidea.id
                )}"
            >
                Ver ficha completa
            </a>

        </div>
    `;

    return artigo;
}

/* =========================================================
   TEXTO COMPLETO PARA PESQUISA
========================================================= */

function criarTextoPesquisa(orquidea) {
    const campos = [
        orquidea.nome,
        orquidea.genero,
        orquidea.tipo,
        orquidea.descricao,
        orquidea.origem,
        orquidea.regiao,
        orquidea.habitat,
        orquidea.clima,
        orquidea.iluminacao,
        orquidea.floracao,
        orquidea.dificuldade,
        orquidea.suporte,
        orquidea.substrato,
        ...(orquidea.caracteristicas || [])
    ];

    return normalizarTexto(campos.join(" "));
}

/* =========================================================
   FILTRAGEM
========================================================= */

function orquideaCorrespondeAosFiltros(orquidea) {
    const busca = normalizarTexto(campoBusca.value);
    const genero = filtroGenero.value;
    const tipo = filtroTipo.value;
    const clima = filtroClima.value;
    const luz = filtroLuz.value;
    const dificuldade = filtroDificuldade.value;
    const mesFloracao = Number(filtroFloracao.value);

    const correspondeBusca =
        busca === "" ||
        criarTextoPesquisa(orquidea).includes(busca);

    const correspondeGenero =
        genero === "" ||
        orquidea.genero === genero;

    const correspondeTipo =
        tipo === "" ||
        orquidea.tipo === tipo;

    const correspondeClima =
        clima === "" ||
        orquidea.clima === clima;

    const correspondeLuz =
        luz === "" ||
        orquidea.iluminacao === luz;

    const correspondeDificuldade =
        dificuldade === "" ||
        orquidea.dificuldade === dificuldade;

    const meses = Array.isArray(orquidea.mesesFloracao)
        ? orquidea.mesesFloracao.map(Number)
        : [];

    const correspondeFloracao =
        !mesFloracao ||
        meses.includes(mesFloracao);

    return (
        correspondeBusca &&
        correspondeGenero &&
        correspondeTipo &&
        correspondeClima &&
        correspondeLuz &&
        correspondeDificuldade &&
        correspondeFloracao
    );
}

/* =========================================================
   CONTADOR DE RESULTADOS
========================================================= */

function atualizarContador(quantidade) {
    const total = orquideas.length;

    if (quantidade === total) {
        contador.textContent =
            total === 1
                ? "1 orquídea cadastrada"
                : `${total} orquídeas cadastradas`;

        return;
    }

    contador.textContent =
        quantidade === 1
            ? `Exibindo 1 resultado de ${total} orquídeas`
            : `Exibindo ${quantidade} resultados de ${total} orquídeas`;
}

/* =========================================================
   FILTROS ATIVOS
========================================================= */

function obterTextoOpcaoSelecionada(select) {
    const opcao = select.options[select.selectedIndex];

    return opcao ? opcao.textContent.trim() : "";
}

function atualizarFiltrosAtivos() {
    const ativos = [];

    if (campoBusca.value.trim()) {
        ativos.push(`Busca: “${campoBusca.value.trim()}”`);
    }

    if (filtroGenero.value) {
        ativos.push(
            `Gênero: ${obterTextoOpcaoSelecionada(
                filtroGenero
            )}`
        );
    }

    if (filtroTipo.value) {
        ativos.push(
            `Tipo: ${obterTextoOpcaoSelecionada(
                filtroTipo
            )}`
        );
    }

    if (filtroClima.value) {
        ativos.push(
            `Clima: ${obterTextoOpcaoSelecionada(
                filtroClima
            )}`
        );
    }

    if (filtroLuz.value) {
        ativos.push(
            `Luz: ${obterTextoOpcaoSelecionada(
                filtroLuz
            )}`
        );
    }

    if (filtroDificuldade.value) {
        ativos.push(
            `Dificuldade: ${obterTextoOpcaoSelecionada(
                filtroDificuldade
            )}`
        );
    }

    if (filtroFloracao.value) {
        ativos.push(
            `Floração: ${obterTextoOpcaoSelecionada(
                filtroFloracao
            )}`
        );
    }

    filtrosAtivos.textContent =
        ativos.length > 0
            ? ativos.join(" • ")
            : "";
}

/* =========================================================
   RENDERIZAÇÃO DO CATÁLOGO
========================================================= */

function renderizarCatalogo() {
    const resultado = orquideas
        .filter(orquideaCorrespondeAosFiltros)
        .sort((a, b) =>
            a.nome.localeCompare(
                b.nome,
                "pt-BR",
                {
                    sensitivity: "base"
                }
            )
        );

    catalogo.innerHTML = "";

    resultado.forEach((orquidea) => {
        catalogo.appendChild(
            criarCartao(orquidea)
        );
    });

    atualizarContador(resultado.length);
    atualizarFiltrosAtivos();

    semResultados.style.display =
        resultado.length === 0
            ? "block"
            : "none";

    catalogo.style.display =
        resultado.length === 0
            ? "none"
            : "grid";
}

/* =========================================================
   LIMPAR FILTROS
========================================================= */

function limparFiltros() {
    campoBusca.value = "";
    filtroGenero.value = "";
    filtroTipo.value = "";
    filtroClima.value = "";
    filtroLuz.value = "";
    filtroDificuldade.value = "";
    filtroFloracao.value = "";

    renderizarCatalogo();

    campoBusca.focus();
}

/* =========================================================
   EVENTOS
========================================================= */

const camposDeFiltro = [
    campoBusca,
    filtroGenero,
    filtroTipo,
    filtroClima,
    filtroLuz,
    filtroDificuldade,
    filtroFloracao
];

camposDeFiltro.forEach((campo) => {
    campo.addEventListener(
        campo.tagName === "INPUT"
            ? "input"
            : "change",
        renderizarCatalogo
    );
});

botaoLimparFiltros.addEventListener(
    "click",
    limparFiltros
);

/* =========================================================
   INICIALIZAÇÃO
========================================================= */

function iniciarCatalogo() {
    configurarFiltrosAutomaticos();

    /*
       Garante que nenhum filtro antigo fique selecionado
       quando o navegador restaurar o formulário.
    */

    campoBusca.value = "";
    filtroGenero.value = "";
    filtroTipo.value = "";
    filtroClima.value = "";
    filtroLuz.value = "";
    filtroDificuldade.value = "";
    filtroFloracao.value = "";

    renderizarCatalogo();
}

iniciarCatalogo();
