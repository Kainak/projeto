const URL = "https://7ecl58ro.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22equipe%22%5D&perspective=published";

const dataApiElement = document.getElementById("dataApi");

fetch(URL, {
    method: "GET",
})
    .then(response => response.json())
    
    .then(data => {
        console.log(data)
        data.result.forEach(element => {
            console.log(element);
            var txtDiv = document.createElement("div");
            txtDiv.classList.add("txt");

            dataApiElement.appendChild(txtDiv);

            var tituloElement = document.createElement("p");
            tituloElement.classList.add("nome");
            tituloElement.innerText = element.nome; 
            txtDiv.appendChild(tituloElement);

            var tituloElement = document.createElement("p");
            tituloElement.classList.add("cargo");
            tituloElement.innerText = element.cargo; 
            txtDiv.appendChild(tituloElement);

            var pictureTag = document.createElement("picture");
            dataApiElement.appendChild(pictureTag);
            var sourceElement = document.createElement('source');
            sourceElement.setAttribute('media', '(max-width: 500px)');
            if(element.imagem){
                sourceElement.setAttribute('srcset', element.imagem.asset._ref);
            }
            pictureTag.appendChild(sourceElement);

            var imgElement = document.createElement("img");
            imgElement.classList.add("img-Equipe");
            if(element.imagem){
                imgElement.src = element.imagem.asset._ref;
            }
            pictureTag.appendChild(imgElement);
          
        })
        
    });