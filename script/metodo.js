function fetchMetodo() {
    const URL = "https://7ecl58ro.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D%22metodo%22%5D";
    const metodoDiv = document.querySelector(".quadrado1");

    fetch(URL, {
        method: "GET",
    })
        .then(response => response.json())
        .then(result => {
            result.result.forEach((metodo) => {

                const tituloElement = document.createElement("p");
                tituloElement.classList.add("vant-txt");
                tituloElement.textContent = metodo.descricao;

                metodoDiv.appendChild(tituloElement);
            });
        });
}

fetchMetodo();
