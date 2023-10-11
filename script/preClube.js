const URL = "https://7ecl58ro.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22preClube%22%5D%7B%0A++%22id%22%3A_id%2C%0A++%22imagem%22%3Aimagem.asset-%3Eurl%2C%0A++descricao%2C%0A++faixaDeIdade%2C%0A%7D%0A%0A%0A++";

const preClubediv = document.querySelector(".caixa_fundo1");

fetch(URL, {
    method: "GET",
})
    .then(result => result.json())
    
    .then(result => {
        console.log(result);
        result.result.forEach(preClubediv => { 
            var txtDiv = document.createElement("div");
            txtDiv.classList.add("descricao");
            txtDiv.innerText = preClube.descricao; 
            preClube.appendChild(txtDiv);
        })  

    });


