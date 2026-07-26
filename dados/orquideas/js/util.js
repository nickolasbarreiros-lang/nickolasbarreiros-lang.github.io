/* =========================================================
   NOMES DOS MESES
========================================================= */

export const nomesMeses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];

/* =========================================================
   NORMALIZAÇÃO DE TEXTO
========================================================= */

export function normalizarTexto(texto) {
    return String(texto || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}

/* =========================================================
   COMPARAÇÃO E ORDENAÇÃO DE TEXTO
========================================================= */

export function compararTextos(textoA, textoB) {
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

export function obterValoresUnicos(
    lista,
    propriedade
) {
    if (!Array.isArray(lista)) {
        return [];
    }

    const valores = lista
        .map((item) => item?.[propriedade])
        .filter((valor) => {
            return (
                typeof valor === "string" &&
                valor.trim() !== ""
            );
        });

    return [...new Set(valores)].sort(compararTextos);
}

/* =========================================================
   MESES DE FLORAÇÃO
========================================================= */

export function normalizarMesesFloracao(orquidea) {
    if (!Array.isArray(orquidea?.mesesFloracao)) {
        return [];
    }

    return [
        ...new Set(
            orquidea.mesesFloracao
                .map(Number)
                .filter((mes) => {
                    return (
                        Number.isInteger(mes) &&
                        mes >= 1 &&
                        mes <= 12
                    );
                })
        )
    ].sort((a, b) => a - b);
}

/* =========================================================
   DISTÂNCIA ENTRE MESES
========================================================= */

export function calcularDistanciaEntreMeses(
    mesInicial,
    mesDestino
) {
    return (
        Number(mesDestino) -
        Number(mesInicial) +
        12
    ) % 12;
}

/* =========================================================
   STATUS DE FLORAÇÃO
========================================================= */

export function obterStatusFloracao(
    orquidea,
    mesReferencia = new Date().getMonth() + 1
) {
    const meses =
        normalizarMesesFloracao(orquidea);

    if (meses.length === 0) {
        return {
            texto: "Período não informado",
            icone: "📅",
            classe: "status-sem-periodo",
            prioridade: 5,
            distancia: null
        };
    }

    const mesAtual =
        Math.min(
            12,
            Math.max(
                1,
                Number(mesReferencia) || 1
            )
        );

    if (meses.includes(mesAtual)) {
        return {
            texto: "Florescendo agora",
            icone: "🌸",
            classe: "status-florindo",
            prioridade: 1,
            distancia: 0
        };
    }

    const distanciasFuturas = meses
        .map((mes) => {
            return calcularDistanciaEntreMeses(
                mesAtual,
                mes
            );
        })
        .filter((distancia) => distancia > 0);

    const menorDistancia =
        distanciasFuturas.length > 0
            ? Math.min(...distanciasFuturas)
            : null;

    if (menorDistancia === 1) {
        return {
            texto: "Floração no próximo mês",
            icone: "🟡",
            classe: "status-proxima",
            prioridade: 2,
            distancia: 1
        };
    }

    if (menorDistancia === 2) {
        return {
            texto: "Floração se aproximando",
            icone: "🌱",
            classe: "status-aproximando",
            prioridade: 3,
            distancia: 2
        };
    }

    return {
        texto: "Fora da época",
        icone: "🌿",
        classe: "status-fora-epoca",
        prioridade: 4,
        distancia: menorDistancia
    };
}

/* =========================================================
   ESTRELAS
========================================================= */

export function criarEstrelas(nota) {
    const valor = Math.max(
        0,
        Math.min(
            5,
            Number(nota) || 0
        )
    );

    let estrelas = "";

    for (
        let indice = 1;
        indice <= 5;
        indice++
    ) {
        estrelas +=
            indice <= valor
                ? "★"
                : "☆";
    }

    return estrelas;
}

/* =========================================================
   NÍVEL DE DIFICULDADE
========================================================= */

export function obterNivelDificuldade(dificuldade) {
    const niveis = {
        "Fácil": 1,
        "Moderada": 2,
        "Difícil": 3
    };

    return niveis[dificuldade] || 99;
}

/* =========================================================
   TEXTO DA OPÇÃO SELECIONADA
========================================================= */

export function obterTextoOpcaoSelecionada(select) {
    if (!select) {
        return "";
    }

    const opcao =
        select.options[select.selectedIndex];

    return opcao
        ? opcao.textContent.trim()
        : "";
}

/* =========================================================
   FORMATAÇÃO DA DATA
========================================================= */

export function formatarDataCompleta(
    data = new Date()
) {
    return new Intl.DateTimeFormat(
        "pt-BR",
        {
            day: "2-digit",
            month: "long",
            year: "numeric"
        }
    ).format(data);
}

/* =========================================================
   ESCAPE DE TEXTO PARA HTML
========================================================= */

export function escaparHTML(valor) {
    return String(valor ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}
