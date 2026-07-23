/* ======================================================
   CONFIGURAÇÕES GERAIS
====================================================== */

* {
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background: #f3f6f1;
    color: #243127;
}

img {
    display: block;
    max-width: 100%;
}

/* ======================================================
   CABEÇALHO
====================================================== */

.cabecalho {
    padding: 42px 20px;
    text-align: center;
    background: linear-gradient(135deg, #244d32, #39734b);
    color: white;
}

.cabecalho h1 {
    margin: 0 0 10px;
    font-size: clamp(32px, 5vw, 50px);
}

.cabecalho p {
    margin: 0;
    font-size: 18px;
}

/* ======================================================
   CONTEÚDO GERAL
====================================================== */

.container {
    width: min(1200px, 94%);
    margin: 30px auto;
}

/* ======================================================
   FILTROS DA PÁGINA INICIAL
====================================================== */

.painel-filtros {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 12px;
    margin-bottom: 26px;
}

.campo {
    width: 100%;
    padding: 14px 16px;
    border: 1px solid #b9c9bd;
    border-radius: 10px;
    background: white;
    color: #243127;
    font-size: 16px;
    outline: none;
}

.campo:focus {
    border-color: #39734b;
    box-shadow: 0 0 0 3px rgba(57, 115, 75, 0.15);
}

.contador {
    margin: 0 0 18px;
    color: #526157;
    font-size: 15px;
}

/* ======================================================
   CATÁLOGO
====================================================== */

.catalogo {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
    gap: 24px;
}

.cartao {
    overflow: hidden;
    background: white;
    border-radius: 16px;
    box-shadow: 0 6px 20px rgba(20, 40, 25, 0.12);
    transition:
        transform 0.25s ease,
        box-shadow 0.25s ease;
}

.cartao:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 28px rgba(20, 40, 25, 0.18);
}

/* ======================================================
   GALERIA DOS CARTÕES
====================================================== */

.galeria {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 132px 132px;
    gap: 3px;
    overflow: hidden;
    background: #d8dfda;
}

.galeria img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.galeria img:first-child {
    grid-row: 1 / 3;
}

/* ======================================================
   CONTEÚDO DOS CARTÕES
====================================================== */

.conteudo-cartao {
    padding: 20px;
}

.etiquetas {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin-bottom: 12px;
}

.etiqueta {
    display: inline-block;
    padding: 5px 10px;
    border-radius: 20px;
    background: #e0efe3;
    color: #285039;
    font-size: 13px;
}

.nome-cientifico {
    margin: 0 0 14px;
    color: #245d39;
    font-size: 24px;
    font-style: italic;
}

.resumo {
    margin: 8px 0;
    line-height: 1.55;
}

.botao-detalhes {
    display: inline-block;
    margin-top: 14px;
    padding: 11px 16px;
    border-radius: 8px;
    background: #315f3e;
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition:
        background 0.2s ease,
        transform 0.2s ease;
}

.botao-detalhes:hover {
    background: #244a30;
    transform: translateY(-1px);
}

/* ======================================================
   MENSAGEM SEM RESULTADOS
====================================================== */

.sem-resultados {
    display: none;
    padding: 30px;
    text-align: center;
    background: white;
    border-radius: 12px;
    color: #5a655d;
    box-shadow: 0 5px 18px rgba(20, 40, 25, 0.08);
}

/* ======================================================
   LINK VOLTAR
====================================================== */

.voltar {
    display: inline-block;
    margin-bottom: 22px;
    color: #315f3e;
    font-weight: bold;
    text-decoration: none;
}

.voltar:hover {
    text-decoration: underline;
}

/* ======================================================
   FICHA DETALHADA
====================================================== */

.ficha-detalhada {
    overflow: hidden;
    background: white;
    border-radius: 18px;
    box-shadow: 0 8px 28px rgba(20, 40, 25, 0.14);
}

/* ======================================================
   GALERIA DA FICHA DETALHADA

   FOTO 1: grande à esquerda
   FOTO 2: superior direita
   FOTO 3: inferior direita
====================================================== */

.galeria-detalhada {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 250px 250px;
    gap: 4px;
    width: 100%;
    height: 504px;
    overflow: hidden;
    background: #d8dfda;
}

.galeria-detalhada img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: zoom-in;
    transition:
        transform 0.25s ease,
        filter 0.25s ease;
}

/* Primeira foto ocupa toda a coluna esquerda */

.galeria-detalhada img:first-child {
    grid-row: 1 / 3;
}

/* Efeito ao passar o mouse */

.galeria-detalhada img:hover {
    transform: scale(1.015);
    filter: brightness(1.04);
}

/* ======================================================
   CONTEÚDO DA FICHA
====================================================== */

.conteudo-ficha {
    padding: 30px;
}

.titulo-ficha {
    margin: 0 0 25px;
    color: #245d39;
    font-size: clamp(30px, 5vw, 46px);
    font-style: italic;
}

.grade-informacoes {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
}

.bloco-informacao {
    padding: 18px;
    border: 1px solid #dce5de;
    border-radius: 12px;
    background: #f8faf8;
}

.bloco-informacao h3 {
    margin: 0 0 9px;
    color: #315f3e;
    font-size: 18px;
}

.bloco-informacao p {
    margin: 0;
    line-height: 1.65;
}

/* ======================================================
   DICA DE OURO
====================================================== */

.dica-ouro {
    margin-top: 22px;
    padding: 22px;
    border-left: 5px solid #c99b27;
    border-radius: 10px;
    background: #fff8df;
}

.dica-ouro h3 {
    margin: 0 0 8px;
    color: #775500;
}

.dica-ouro p {
    margin: 0;
    line-height: 1.65;
}

/* ======================================================
   RODAPÉ
====================================================== */

.rodape {
    margin-top: 45px;
    padding: 28px 20px;
    text-align: center;
    background: #203429;
    color: white;
}

/* ======================================================
   TABLETS
====================================================== */

@media (max-width: 900px) {
    .painel-filtros {
        grid-template-columns: 1fr;
    }

    .catalogo {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }

    .galeria-detalhada {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 360px 220px;
        height: auto;
    }

    .galeria-detalhada img:first-child {
        grid-column: 1 / 3;
        grid-row: 1;
    }

    .galeria-detalhada img:nth-child(2) {
        grid-column: 1;
        grid-row: 2;
    }

    .galeria-detalhada img:nth-child(3) {
        grid-column: 2;
        grid-row: 2;
    }

    .grade-informacoes {
        grid-template-columns: 1fr;
    }

    .conteudo-ficha {
        padding: 24px;
    }
}

/* ======================================================
   CELULARES
====================================================== */

@media (max-width: 600px) {
    .cabecalho {
        padding: 32px 16px;
    }

    .cabecalho p {
        font-size: 16px;
    }

    .container {
        width: 94%;
        margin: 22px auto;
    }

    .catalogo {
        grid-template-columns: 1fr;
    }

    .galeria {
        grid-template-rows: 110px 110px;
    }

    .conteudo-cartao {
        padding: 17px;
    }

    .nome-cientifico {
        font-size: 22px;
    }

    .galeria-detalhada {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 280px 150px;
        gap: 3px;
    }

    .galeria-detalhada img:first-child {
        grid-column: 1 / 3;
        grid-row: 1;
    }

    .galeria-detalhada img:nth-child(2) {
        grid-column: 1;
        grid-row: 2;
    }

    .galeria-detalhada img:nth-child(3) {
        grid-column: 2;
        grid-row: 2;
    }

    .conteudo-ficha {
        padding: 18px;
    }

    .titulo-ficha {
        font-size: 30px;
    }

    .bloco-informacao {
        padding: 15px;
    }

    .dica-ouro {
        padding: 18px;
    }
}
