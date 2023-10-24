const URL = "https://7ecl58ro.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22duvidas%22%5D&perspective=published";

const DuvidasDiv = document.querySelector(".Duvidas");

fetch(URL, {
    method: "GET",
})
    .then(result => result.json())
    .then(result => {
        result.result.forEach(QA => {
            var txtDiv = document.createElement("div");
            txtDiv.classList.add("txt");

            DuvidasDiv.appendChild(txtDiv);

            var perguntaElement = document.createElement("p");
            perguntaElement.classList.add("Pergunta");
            perguntaElement.innerText = QA.Pergunta;
            txtDiv.appendChild(perguntaElement);

            var respostaElement = document.createElement("p");
            respostaElement.classList.add("Resposta");
            respostaElement.innerText = QA.Resposta;
            txtDiv.appendChild(respostaElement);
        });
    })
    .catch(error => {
        console.error(error);
    });


