const URL = "https://7ecl58ro.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22duvidas%22%5D&perspective=published";

const EquipeDiv = document.querySelector(".equipe");

fetch(URL, {
    method: "GET",
})
    .then(result => result.json())
    
    .then(result => {
        
        result.result.forEach(Equipe => {
            console.log(result);
            var txtDiv = document.createElement("div");
            txtDiv.classList.add("txt");

            EquipeDiv.appendChild(txtDiv);

            var tituloElement = document.createElement("p");
            tituloElement.classList.add("Nome");
            tituloElement.innerText = Equipe.Nome; 
            txtDiv.appendChild(tituloElement);
            
            var tituloElement = document.createElement("p");
            tituloElement.classList.add("Cargo");
            tituloElement.innerText = Equipe.Cargo; 
            txtDiv.appendChild(tituloElement);        
     
        })
        
    });


