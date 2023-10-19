const URL = "https://7ecl58ro.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22preClube%22%5D%7B%0A++%22id%22%3A_id%2C%0A++%22imagem%22%3A+imagem.asset-%3Eurl%2C%0A++descricao%2C%0A++faixaDeIdade%2C%0A++data%0A%7D%0A+%0A%0A%0A++&perspective=published";

const preClubediv = document.querySelector(".caixa_maior_baixo");

fetch(URL, {
    method: "GET",
})
    .then(result => result.json())
    
    .then(result => {
        
        console.log(result);

        result.result.forEach(preclube => { 

        var novaImagem = document.createElement('img');
        novaImagem.src = preclube.imagem; 
        preClubediv.appendChild(novaImagem);

        var divTextoVantagens =  document.createElement('div');
        divTextoVantagens.classList.add("caixa_texto_vantagens");
        

        var titulo = document.createElement("h3");
        titulo.innerText = "Descrição";
        
        var descricao = document.createElement("p");
        //descricao.className = 'desc-cl';
        descricao.classList.add("desc-cl");
        descricao.innerText = preclube.descricao;

        divTextoVantagens.appendChild(titulo);
        divTextoVantagens.appendChild(descricao);

        preClubediv.appendChild(divTextoVantagens);
      
        var divTextoVantagens2 =  document.createElement('div');
        divTextoVantagens2.classList.add("caixa_texto_vantagens");

        var titulo2 = document.createElement("h3");
        titulo2.innerText = "Horários";
        

        var novaImagem = document.createElement('img');
        novaImagem.src = preclube.imagem; 

        divTextoVantagens2.appendChild(titulo2);
        divTextoVantagens2.appendChild(novaImagem);


        preClubediv.appendChild(divTextoVantagens2);

        })  
    });


