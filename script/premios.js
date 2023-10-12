const URL = "https://7ecl58ro.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22listaDePremios%22%5D%7B%0A++++%22id%22%3A_id%2C%0A++++%22imagem%22%3A+imagem.asset-%3Eurl%2C%0A++++descricao%0A%7D";

const premioDiv = document.querySelector(".div-premios");

fetch(URL, {
    method: "GET",
})
    .then(result => result.json())
    .then(result => {
        result.result.forEach(listaDePremios => {
            console.log(result);
            var premiosElement = document.createElement("div");
            premiosElement.classList.add("premios");
            premioDiv.appendChild(premiosElement);

            var imgElement = document.createElement("img");
            imgElement.src = listaDePremios.imagem;
            premiosElement.appendChild(imgElement);

            var pElement = document.createElement("p");
            pElement.textContent = listaDePremios.descricao;
            premiosElement.appendChild(pElement);
            
        });
    });
