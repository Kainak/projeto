<<<<<<< Updated upstream
const URL = "https://7ecl58ro.api.sanity.io/v2021-10-21/data/query/production?query=+++*%5B_type%3D%3D%22equipe%22%5D%7B%0A++++%22id%22%3A_id%2C%0A++++++nome%2C%0A++++++cargo%2C%0A++++++%22imagem%22%3A+imagem.asset-%3Eurl%2C%0A++++++%22imagemresponsiva%22%3A+imagemresponsiva.asset-%3Eurl%2C%0A++%7D&perspective=published";

const profs = document.getElementById("sep");
=======
const URL = "https://7ecl58ro.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22equipe%22%5D&perspective=published";

const equipeDiv = document.querySelector(".equipe");
>>>>>>> Stashed changes

fetch(URL, {
    method: "GET",
})
<<<<<<< Updated upstream
    .then(response => response.json())
    
    .then(data => {
        console.log(data)
        data.result.forEach(element => {
    
            var profsDiv = document.createElement("div")
            profsDiv.classList.add("profs");
            profs.appendChild(profsDiv);

            var ImgTag = document.createElement("img");
            
            ImgTag.src= element.imagem;
            profsDiv.appendChild(ImgTag);

            var divNome = document.createElement('div');
            divNome.setAttribute("id", "nome");
            profsDiv.appendChild(divNome);

            var nometag = document.createElement('h3');
            nometag.textContent = element.nome;
            divNome.appendChild(nometag);

            var cargotag = document.createElement('p');
            cargotag.textContent = element.cargo;
            divNome.appendChild(cargotag);


=======
    .then(result => result.json())
    
    .then(result => {
        
        result.result.forEach(equipe => {
            console.log(result);
            var txtDiv = document.createElement("div");
            txtDiv.classList.add("txt");

            equipeDiv.appendChild(txtDiv);

            var tituloElement = document.createElement("p");
            tituloElement.classList.add("Nome");
            tituloElement.innerText = equipe.Nome; 
            txtDiv.appendChild(tituloElement);
            
            var tituloElement = document.createElement("p");
            tituloElement.classList.add("cargo");
            tituloElement.innerText = equipe.Cargo; 
            txtDiv.appendChild(tituloElement);

            var PictureTag = document.createElement("picture");
            equipeDiv.appendChild(PictureTag);
            var sourceElement = document.createElement('source');
            sourceElement.setAttribute('media', '(max-width: 500px)');
            sourceElement.setAttribute('srcset', equipe.imagemresponsiva);
            PictureTag.appendChild(sourceElement);
            var ImgElement = document.createElement("img");
            ImgElement.classList.add("img-equipe");
            ImgElement.src = equipe.imagem;
            PictureTag.appendChild(ImgElement);
          
>>>>>>> Stashed changes
        })
        
    });