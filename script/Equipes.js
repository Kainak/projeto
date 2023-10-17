const URL = "https://7ecl58ro.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22equipe%22%5D&perspective=published";

const profs = document.getElementById("sep");

fetch(URL, {
    method: "GET",
})
    .then(response => response.json())
    
    .then(data => {
        console.log(data)
        data.result.forEach(element => {
            console.log(element);
            var profsDiv = document.createElement("div")
            profsDiv.classList.add("profs");
            profs.appendChild(profsDiv);

            var ImgTag = document.createElement("img");
            profs.appendChild(ImgTag);
            var sourceElement = document.createElement('source');
            sourceElement.setAttribute('media', '(max-width: 500px)');
            if(element.imagem){
                sourceElement.setAttribute('srcset', element.imagem.asset._ref);
            }
            ImgTag.appendChild(sourceElement);

            var imgElement = document.createElement("img");
            imgElement.classList.add("img-Equipe");
            if(element.imagem){
                imgElement.src = element.imagem.asset._ref;
            }
            pictureTag.appendChild(imgElement);

            var tituloElement = document.createElement("p");
            tituloElement.classList.add("nome");
            tituloElement.innerText = element.nome; 
            profsDiv.appendChild(tituloElement);

            var tituloElement = document.createElement("p");
            tituloElement.classList.add("cargo");
            tituloElement.innerText = element.cargo; 
            profsDiv.appendChild(tituloElement);

          
        })
        
    });