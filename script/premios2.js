const URLp = "https://7ecl58ro.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D%22premios%22%5D";

const premiosDiv = document.querySelector(".quadrado3");

fetch(URLp, {
    method: "GET",
})
    .then(response => response.json())
    .then(result => {
        result.result.forEach((premios) => {
            console.log(premios)
            const tituloElement = document.createElement("p");
            tituloElement.classList.add("vant-txt");
            tituloElement.textContent = premios.descricao;

            premiosDiv.appendChild(tituloElement);
    
        });
    });
