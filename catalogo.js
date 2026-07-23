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

const campoOrdenacao =
    document.getElementById("ordenacao");

const botaoModoGaleria =
    document.getElementById("modo-galeria");

const botaoModoLista =
    document.getElementById("modo-lista");

const totalOrquideas =
    document.getElementById("total-orquideas");

const totalGeneros =
    document.getElementById("total-generos");

const totalOrigens =
    document.getElementById("total-origens");

const totalRaras =
    document.getElementById("total-raras");

let modoVisualizacao = "galeria";

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
   ORDENAÇÃO DE TEXTO
========================================================= */

function compararTextos(textoA, textoB) {
    return String(textoA || "").localeCompare(
        String(textoB || ""),
        "pt-BR",
        {
            sensitivity: "base"
        }
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

    return [...new Set(valores)].sort(compararTextos);
}

/* =========================================================
   PREENCHIMENTO AUTOMÁTICO DOS FILTROS
========================================================= */

function preencherSelect(
    elementoSelect,
    valores,
    textoInicial
) {
    elementoSelect.innerHTML = "";

    const opcaoInicial =
        document.createElement("option");

    opcaoInicial.value = "";
    opcaoInicial.textContent = textoInicial;

    elementoSelect.appendChild(opcaoInicial);

    valores.forEach((valor) => {
        const opcao =
            document.createElement("option");

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
   ESTATÍSTICAS
========================================================= */

function calcularEstatisticas() {
    const generos = new Set();
    const origens = new Set();

    let quantidadeRaras = 0;

    orquideas.forEach((orquidea) => {
        if (orquidea.genero) {
            generos.add(
                normalizarTexto(orquidea.genero)
            );
        }

        if (orquidea.origem) {
            origens.add(
                normalizarTexto(orquidea.origem)
            );
        }

        const raridade =
            Number(orquidea.avaliacoes?.raridade) || 0;

        if (raridade >= 4) {
            quantidadeRaras++;
        }
    });

    totalOrquideas.textContent =
        orquideas.length;

    totalGeneros.textContent =
        generos.size;

    totalOrigens.textContent =
        origens.size;

    totalRaras.textContent =
        quantidadeRaras;
}

/* =========================================================
   GALERIA DOS CARTÕES
========================================================= */

function criarGaleriaCartao(orquidea) {
    const fotos = Array.isArray(orquidea.fotos)
        ? orquidea.fotos
            .filter((foto) => Boolean(foto))
            .slice(0, 3)
        : [];

    if (fotos.length === 0) {
        return `
            <div class="galeria galeria-sem-foto">

                <div class="imagem-indisponivel">

                    <span class="icone-imagem-indisponivel">
                        🌸
                    </span>

                    <span>
                        Imagem indisponível
                    </span>

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
                >
            `).join("")}

        </div>
    `;
}

/* =========================================================
   RESUMO
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
   ESTRELAS
========================================================= */

function criarEstrelas(nota) {
    const valor =
        Math.max(0, Math.min(5, Number(nota) || 0));

    let estrelas = "";

    for (let indice = 1; indice <= 5; indice++) {
        estrelas +=
            indice <= valor
                ? "★"
                : "☆";
    }

    return estrelas;
}

/* =========================================================
   CARTÃO
========================================================= */

function criarCartao(orquidea) {
    const artigo =
        document.createElement("article");

    artigo.className = "cartao";

    const raridade =
        Number(orquidea.avaliacoes?.raridade) || 0;

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

            <div class="cabecalho-cartao">

                <h2 class="nome-cientifico">
                    ${orquidea.nome}
                </h2>

                <span
                    class="raridade-cartao"
                    title="Raridade: ${raridade} de 5"
                    aria-label="Raridade: ${raridade} de 5"
                >
                    ${criarEstrelas(raridade)}
                </span>

            </div>

            <div class="resumo-cartao">
                ${criarResumo(orquidea)}
            </div>

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
   TEXTO PARA PESQUISA
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

    return normalizarTexto(
        campos
            .filter((campo) => Boolean(campo))
            .join(" ")
    );
}

/* =========================================================
   FILTRAGEM
========================================================= */

function orquideaCorrespondeAosFiltros(orquidea) {
    const busca =
        normalizarTexto(campoBusca.value);

    const genero =
        filtroGenero.value;

    const tipo =
        filtroTipo.value;

    const clima =
        filtroClima.value;

    const luz =
        filtroLuz.value;

    const dificuldade =
        filtroDificuldade.value;

    const mesFloracao =
        Number(filtroFloracao.value);

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

    const meses = Array.isArray(
        orquidea.mesesFloracao
    )
        ? orquidea.mesesFloracao.map(Number)
        : [];

    const correspondeFloracao =
        mesFloracao === 0 ||
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
   NÍVEL DE DIFICULDADE
========================================================= */

function obterNivelDificuldade(dificuldade) {
    const niveis = {
        "Fácil": 1,
        "Moderada": 2,
        "Difícil": 3
    };

    return niveis[dificuldade] || 99;
}

/* =========================================================
   ORDENAÇÃO DOS RESULTADOS
========================================================= */

function ordenarResultados(lista) {
    const tipoOrdenacao =
        campoOrdenacao.value;

    const resultado = [...lista];

    resultado.sort((orquideaA, orquideaB) => {
        const nomeA =
            orquideaA.nome || "";

        const nomeB =
            orquideaB.nome || "";

        const raridadeA =
            Number(
                orquideaA.avaliacoes?.raridade
            ) || 0;

        const raridadeB =
            Number(
                orquideaB.avaliacoes?.raridade
            ) || 0;

        const cultivoA =
            obterNivelDificuldade(
                orquideaA.dificuldade
            );

        const cultivoB =
            obterNivelDificuldade(
                orquideaB.dificuldade
            );

        switch (tipoOrdenacao) {
            case "nome-za":
                return compararTextos(
                    nomeB,
                    nomeA
                );

            case "raridade-maior":
                return (
                    raridadeB - raridadeA ||
                    compararTextos(nomeA, nomeB)
                );

            case "raridade-menor":
                return (
                    raridadeA - raridadeB ||
                    compararTextos(nomeA, nomeB)
                );

            case "cultivo-facil":
                return (
                    cultivoA - cultivoB ||
                    compararTextos(nomeA, nomeB)
                );

            case "cultivo-dificil":
                return (
                    cultivoB - cultivoA ||
                    compararTextos(nomeA, nomeB)
                );

            case "nome-az":
            default:
                return compararTextos(
                    nomeA,
                    nomeB
                );
        }
    });

    return resultado;
}

/* =========================================================
   CONTADOR
========================================================= */

function atualizarContador(quantidade) {
    const total =
        orquideas.length;

    if (quantidade === total) {
        contador.textContent =
            total === 1
                ? "1 orquídea encontrada"
                : `${total} orquídeas encontradas`;

        return;
    }

    if (quantidade === 0) {
        contador.textContent =
            `Nenhum resultado entre ${total} orquídeas`;

        return;
    }

    contador.textContent =
        quantidade === 1
            ? `1 resultado entre ${total} orquídeas`
            : `${quantidade} resultados entre ${total} orquídeas`;
}

/* =========================================================
   FILTROS ATIVOS
========================================================= */

function obterTextoOpcaoSelecionada(select) {
    const opcao =
        select.options[select.selectedIndex];

    return opcao
        ? opcao.textContent.trim()
        : "";
}

function atualizarFiltrosAtivos() {
    const ativos = [];

    if (campoBusca.value.trim()) {
        ativos.push(
            `Busca: “${campoBusca.value.trim()}”`
        );
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
            `Classificação: ${obterTextoOpcaoSelecionada(
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
            `Iluminação: ${obterTextoOpcaoSelecionada(
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
   MODO DE VISUALIZAÇÃO
========================================================= */

function atualizarModoVisualizacao() {
    const modoLista =
        modoVisualizacao === "lista";

    catalogo.classList.toggle(
        "catalogo-lista",
        modoLista
    );

    botaoModoGaleria.classList.toggle(
        "ativo",
        !modoLista
    );

    botaoModoLista.classList.toggle(
        "ativo",
        modoLista
    );

    botaoModoGaleria.setAttribute(
        "aria-pressed",
        String(!modoLista)
    );

    botaoModoLista.setAttribute(
        "aria-pressed",
        String(modoLista)
    );
}

function selecionarModoGaleria() {
    modoVisualizacao = "galeria";

    atualizarModoVisualizacao();

    try {
        localStorage.setItem(
            "modoCatalogoOrquideas",
            modoVisualizacao
        );
    } catch (erro) {
        console.warn(
            "Não foi possível salvar o modo de visualização."
        );
    }
}

function selecionarModoLista() {
    modoVisualizacao = "lista";

    atualizarModoVisualizacao();

    try {
        localStorage.setItem(
            "modoCatalogoOrquideas",
            modoVisualizacao
        );
    } catch (erro) {
        console.warn(
            "Não foi possível salvar o modo de visualização."
        );
    }
}

/* =========================================================
   RENDERIZAÇÃO
========================================================= */

function renderizarCatalogo() {
    const filtradas =
        orquideas.filter(
            orquideaCorrespondeAosFiltros
        );

    const resultado =
        ordenarResultados(filtradas);

    catalogo.innerHTML = "";

    resultado.forEach((orquidea) => {
        catalogo.appendChild(
            criarCartao(orquidea)
        );
    });

    atualizarContador(resultado.length);
    atualizarFiltrosAtivos();
    atualizarModoVisualizacao();

    const possuiResultados =
        resultado.length > 0;

    semResultados.style.display =
        possuiResultados
            ? "none"
            : "block";

    catalogo.style.display =
        possuiResultados
            ? "grid"
            : "none";
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
   RECUPERAR PREFERÊNCIA DE VISUALIZAÇÃO
========================================================= */

function recuperarModoVisualizacao() {
    try {
        const modoSalvo =
            localStorage.getItem(
                "modoCatalogoOrquideas"
            );

        if (
            modoSalvo === "galeria" ||
            modoSalvo === "lista"
        ) {
            modoVisualizacao = modoSalvo;
        }
    } catch (erro) {
        modoVisualizacao = "galeria";
    }
}

/* =========================================================
   EVENTOS
========================================================= */

campoBusca.addEventListener(
    "input",
    renderizarCatalogo
);

[
    filtroGenero,
    filtroTipo,
    filtroClima,
    filtroLuz,
    filtroDificuldade,
    filtroFloracao,
    campoOrdenacao
].forEach((campo) => {
    campo.addEventListener(
        "change",
        renderizarCatalogo
    );
});

botaoLimparFiltros.addEventListener(
    "click",
    limparFiltros
);

botaoModoGaleria.addEventListener(
    "click",
    selecionarModoGaleria
);

botaoModoLista.addEventListener(
    "click",
    selecionarModoLista
);

/* =========================================================
   INICIALIZAÇÃO
========================================================= */

function iniciarCatalogo() {
    configurarFiltrosAutomaticos();
    recuperarModoVisualizacao();

    campoBusca.value = "";
    filtroGenero.value = "";
    filtroTipo.value = "";
    filtroClima.value = "";
    filtroLuz.value = "";
    filtroDificuldade.value = "";
    filtroFloracao.value = "";
    campoOrdenacao.value = "nome-az";

    calcularEstatisticas();
    renderizarCatalogo();
}

iniciarCatalogo();
