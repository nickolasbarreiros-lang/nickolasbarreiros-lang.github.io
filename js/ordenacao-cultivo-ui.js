/* =========================================================
   ORDENACAO POR CULTIVO - UI V17
========================================================= */

const CONFIGURACOES = {
    padrao: {
        icone: "▦",
        titulo: "Padrão",
        descricao: "ordem alfabética do catálogo",
        escala: "A → Z",
        menor: "nome-az",
        maior: "nome-za",
        rotuloMenor: "A → Z",
        rotuloMaior: "Z → A"
    },
    cultivo: {
        icone: "🌱",
        titulo: "Cultivo",
        descricao: "da espécie mais fácil para a mais exigente",
        escala: "★★★★★ → ★★☆☆☆",
        menor: "cultivo-maior",
        maior: "cultivo-menor",
        rotuloMenor: "Mais fácil → mais difícil",
        rotuloMaior: "Mais difícil → mais fácil"
    },
    luminosidade: {
        icone: "☀",
        titulo: "Luz",
        descricao: "da menor para a maior necessidade de luminosidade",
        escala: "★☆☆☆☆ → ★★★★★",
        menor: "luminosidade-menor",
        maior: "luminosidade-maior",
        rotuloMenor: "Menor → Maior",
        rotuloMaior: "Maior → Menor"
    },
    agua: {
        icone: "💧",
        titulo: "Água",
        descricao: "da menor para a maior necessidade de água",
        escala: "★☆☆☆☆ → ★★★★★",
        menor: "agua-menor",
        maior: "agua-maior",
        rotuloMenor: "Menor → Maior",
        rotuloMaior: "Maior → Menor"
    },
    floracao: {
        icone: "🌸",
        titulo: "Floração",
        descricao: "da menor para a maior avaliação de floração",
        escala: "★☆☆☆☆ → ★★★★★",
        menor: "floracao-menor",
        maior: "floracao-maior",
        rotuloMenor: "Menor → Maior",
        rotuloMaior: "Maior → Menor"
    },
    perfume: {
        icone: "⚗",
        titulo: "Perfume",
        descricao: "da menor para a maior intensidade de perfume",
        escala: "★☆☆☆☆ → ★★★★★",
        menor: "perfume-menor",
        maior: "perfume-maior",
        rotuloMenor: "Menor → Maior",
        rotuloMaior: "Maior → Menor"
    },
    raridade: {
        icone: "💎",
        titulo: "Raridade",
        descricao: "das espécies mais comuns para as mais raras",
        escala: "★☆☆☆☆ → ★★★★★",
        menor: "raridade-menor",
        maior: "raridade-maior",
        rotuloMenor: "Comum → rara",
        rotuloMaior: "Rara → comum"
    }
};

function dispararMudanca(select) {
    if (!select) return;
    select.dispatchEvent(new Event("change", { bubbles: true }));
}

function escaparTexto(texto) {
    return String(texto ?? "");
}

export function inicializarOrdenacaoCultivoUI() {
    const select = document.getElementById("ordenacao");
    const botoes = [...document.querySelectorAll("[data-criterio-ordenacao]")];
    const botaoMenor = document.getElementById("ordem-menor-maior-v17");
    const botaoMaior = document.getElementById("ordem-maior-menor-v17");
    const resumo = document.getElementById("resumo-ordenacao-v17");
    const alternarFiltros = document.getElementById("alternar-filtros-avancados-v17");
    const conteudoFiltros = document.getElementById("conteudo-filtros-avancados-v17");

    if (!select || !botoes.length) return null;

    let criterioAtual = "padrao";
    let direcao = "menor";

    function atualizarResumo() {
        const cfg = CONFIGURACOES[criterioAtual] || CONFIGURACOES.padrao;
        if (resumo) {
            resumo.innerHTML = `
                <span class="resumo-icone-v17">${escaparTexto(cfg.icone)}</span>
                <strong>${escaparTexto(cfg.titulo)}:</strong> ${escaparTexto(cfg.descricao)}
                <span class="escala-ordenacao-v17" aria-hidden="true">${escaparTexto(cfg.escala)}</span>
            `;
        }
        if (botaoMenor) botaoMenor.textContent = cfg.rotuloMenor;
        if (botaoMaior) botaoMaior.textContent = cfg.rotuloMaior;
    }

    function aplicarOrdenacao() {
        const cfg = CONFIGURACOES[criterioAtual] || CONFIGURACOES.padrao;
        const valor = cfg[direcao] || cfg.menor;
        if ([...select.options].some((op) => op.value === valor)) {
            select.value = valor;
            dispararMudanca(select);
        }
        botoes.forEach((botao) => {
            const ativo = botao.dataset.criterioOrdenacao === criterioAtual;
            botao.classList.toggle("ativo", ativo);
            botao.setAttribute("aria-pressed", ativo ? "true" : "false");
        });
        botaoMenor?.classList.toggle("ativo", direcao === "menor");
        botaoMaior?.classList.toggle("ativo", direcao === "maior");
        atualizarResumo();
    }

    botoes.forEach((botao) => {
        botao.addEventListener("click", () => {
            criterioAtual = botao.dataset.criterioOrdenacao || "padrao";
            // O cultivo abre no sentido solicitado: fácil -> difícil.
            direcao = "menor";
            aplicarOrdenacao();
        });
    });

    botaoMenor?.addEventListener("click", () => {
        direcao = "menor";
        aplicarOrdenacao();
    });

    botaoMaior?.addEventListener("click", () => {
        direcao = "maior";
        aplicarOrdenacao();
    });

    alternarFiltros?.addEventListener("click", () => {
        const aberto = alternarFiltros.getAttribute("aria-expanded") === "true";
        alternarFiltros.setAttribute("aria-expanded", aberto ? "false" : "true");
        if (conteudoFiltros) conteudoFiltros.hidden = aberto;
    });

    atualizarResumo();

    return {
        selecionar(criterio, novaDirecao = "menor") {
            if (!(criterio in CONFIGURACOES)) return;
            criterioAtual = criterio;
            direcao = novaDirecao === "maior" ? "maior" : "menor";
            aplicarOrdenacao();
        }
    };
}
