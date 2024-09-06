function clique() {
    let pesquisa = document.getElementById("resultado-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa || campoPesquisa === " ".repeat(campoPesquisa.length)) {
        pesquisa.innerHTML = '<p class="erro">Por favor, digite algo.</p>';
        return;
    }

    campoPesquisa = campoPesquisa.toUpperCase();

    let resultados = "";
    let Titulo = "";
    let sobre = "";
    let tags = "";

    for (let dado of dados) {
        Titulo = dado.Titulo.toUpperCase();
        sobre = dado.sobre.toUpperCase();
        tags = dado.tags.toUpperCase();

        if (Titulo.includes(campoPesquisa) || sobre.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
                    <div class="item-resultado">
                    <h2>${dado.Titulo}</h2>
                    <p>${dado.sobre}</p>
                    <a href=${dado.link} target="_blank" class="compra">Comprar</a>
                    <a href=${dado.info} target="_blank" class="info">Mais infos</a>
                    </div>
                `;
        }
    }

    if (!resultados) {
        resultados = '<p class="erro">Nenhum item encontrado, digite algo relacionado a HERBICIDAS, INSETICIDAS ou FUNGICIDAS</p>';
    }

    pesquisa.innerHTML = resultados;
}
