const URL = "https://7ecl58ro.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22noticia%22%5D%7B%0A++%22id%22%3A_id%2C%0A++titulo%2C%0A++subtitulo%2C%0A++conteudo%2C%0A++%22imagem%22%3A+imagem.asset-%3Eurl%2C%0A++data%2C%0A%7D";

const noticiaDiv = document.querySelector(".noticia");

fetch(URL, {
    method: "GET",
})
    .then(result=> result.json())
    .then(result => {
        console.log (result)
        result.result.forEach(noticia => {
        
            var tituloElement = document.createElement("p");
            tituloElement.innerText = "noticiasanity core add.titulo";
            noticiaDiv.appendChild(tituloElement);
        })
    })

