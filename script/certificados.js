const URLc = "https://7ecl58ro.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D%22certificados%22%5D";

const certificadoDiv = document.querySelector(".quadrado2");

fetch(URLc, {
    method: "GET",
})
    .then(response => response.json())
    .then(result => {
        result.result.forEach((certificados) => {
            console.log(certificados)
            const tituloElement = document.createElement("p");
            tituloElement.classList.add("vant-txt");
            tituloElement.textContent = certificados.descricao;

            certificadoDiv.appendChild(tituloElement);
    
        });
    });
