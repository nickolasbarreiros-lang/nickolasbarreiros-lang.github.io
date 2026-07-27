const botaoTopo = document.getElementById("botao-topo");

if (botaoTopo) {
    const atualizarVisibilidade = () => {
        const deveExibir = window.scrollY > 500;
        botaoTopo.classList.toggle("visivel", deveExibir);
        botaoTopo.setAttribute("aria-hidden", String(!deveExibir));
        botaoTopo.tabIndex = deveExibir ? 0 : -1;
    };

    botaoTopo.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    window.addEventListener("scroll", atualizarVisibilidade, {
        passive: true
    });

    atualizarVisibilidade();
}
