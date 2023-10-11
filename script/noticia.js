const URL = "https://7ecl58ro.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22noticia%22%5D%7B%0A++%22id%22%3A_id%2C%0A++++titulo%2C%0A++++subtitulo%2C%0A++++conteudo%2C%0A++++%22imagem%22%3A+imagem.asset-%3Eurl%2C%0A++++%22imagemresponsiva%22%3A+imagemresponsiva.asset-%3Eurl%2C%0A++++data%0A%7D&perspective=published";

const noticiaDiv = document.querySelector(".noticia");

fetch(URL, {
    method: "GET",
})
    .then(result => result.json())

    .then(result => {
        
        result.result.forEach(noticia => {
            console.log(result);

            var txtDiv = document.createElement("div");
            txtDiv.classList.add("txt");
            noticiaDiv.appendChild(txtDiv);

            var tituloElement = document.createElement("p");
            tituloElement.classList.add("titulo");
            tituloElement.innerText = noticia.titulo; 
            txtDiv.appendChild(tituloElement);
            
            var tituloElement = document.createElement("p");
            tituloElement.classList.add("subtitulo");
            tituloElement.innerText = noticia.subtitulo; 
            txtDiv.appendChild(tituloElement);

            var tituloElement = document.createElement("p");
            tituloElement.classList.add("descricao");
            tituloElement.innerText = noticia.conteudo;
            txtDiv.appendChild(tituloElement);

        

            var PictureTag = document.createElement("picture");
            noticiaDiv.appendChild(PictureTag);
            var sourceElement = document.createElement('source');
            sourceElement.setAttribute('media', '(max-width: 500px)');
            sourceElement.setAttribute('srcset', noticia.imagemresponsiva);
            PictureTag.appendChild(sourceElement);
            var ImgElement = document.createElement("img");
            ImgElement.classList.add("img-noticia");
            ImgElement.src = noticia.imagem;
            PictureTag.appendChild(ImgElement);
          
        })
        
    });


