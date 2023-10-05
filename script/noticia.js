const URL = "https://7ecl58ro.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22noticia%22%5D%7B%0A++%22id%22%3A_id%2C%0A++titulo%2C%0A++subtitulo%2C%0A++conteudo%2C%0A++%22imagem%22%3A+imagem.asset-%3Eurl%2C%0A++data%2C%0A%7D";

const noticiaDiv = document.querySelector(".noticia");

fetch(URL, {
    method: "GET",
})
    .then(response => response.json())
    .then(result => {
        result.result.forEach(noticia => {
            var tituloElement = document.createElement("p");
            tituloElement.classList.add("titulo"); 
            tituloElement.textContent = noticia.titulo;
            
            var subtituloElement = document.createElement("p");
            subtituloElement.classList.add("subtitulo"); 
            subtituloElement.textContent = noticia.subtitulo;
            
            var conteudoElement = document.createElement("p");
            conteudoElement.classList.add("descricao"); 
            conteudoElement.textContent = noticia.conteudo;

            var imagemElement = document.createElement("img");
            imagemElement.classList.add("img-noticia"); 
            imagemElement.src = noticia.imagem; 
            imagemElement.alt = noticia.titulo;
            
            noticiaDiv.appendChild(tituloElement);
            noticiaDiv.appendChild(subtituloElement);
            noticiaDiv.appendChild(conteudoElement);
            noticiaDiv.appendChild(imagemElement);
        })
    })

