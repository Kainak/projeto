const URL_PRE = "https://7ecl58ro.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22preClube%22%5D%7B%0A++%22id%22%3A_id%2C%0A++%22imagem%22%3A+imagem.asset-%3Eurl%2C%0A++descricao%2C%0A++faixaDeIdade%2C%0A++data%0A%7D%0A+%0A%0A%0A++&perspective=published";
const URL_HORARIOS_PRE = "https://7ecl58ro.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22horarios_pre_clube%22%5D%0A+%0A&perspective=published";
const preClubediv = document.querySelector(".caixa_maior_baixo");
var divTextoVantagens =  document.createElement('div');
divTextoVantagens.classList.add("caixa_texto_vantagens");
var idadePreDiv = document.createElement("div");

fetch(URL_PRE, {
    method: "GET",
})
    .then(result => result.json())
    
    .then(result => {
        console.log(result);
        result.result.forEach(preclube => { 

        var novaImagem = document.createElement('img');
        novaImagem.src = preclube.imagem; 
        preClubediv.appendChild(novaImagem);

        divTextoVantagens.style.paddingBottom = "15px";

        var titulo = document.createElement("h3");
        titulo.innerText = "Descrição";
        
        var descricao = document.createElement("p");
     
        descricao.classList.add("desc-cl");
        descricao.innerText = preclube.descricao;

        divTextoVantagens.appendChild(titulo);
        divTextoVantagens.appendChild(descricao);

        preClubediv.appendChild(divTextoVantagens);
      
        var divTextoVantagens2 =  document.createElement('div');
        divTextoVantagens2.classList.add("caixa_texto_vantagens");

        var titulo2 = document.createElement("h3");
        titulo2.innerText = "Horários";
    

        divTextoVantagens2.appendChild(titulo2);
     
        var ageElement = document.createElement("h2");
    
        divTextoVantagens.appendChild(idadePreDiv);

      ageElement.innerHTML = `${preclube.faixaDeIdade.inicio}-${preclube.faixaDeIdade.fim} ANOS`;

      idadePreDiv.appendChild(ageElement);
      idadePreDiv.style.backgroundColor = "#FF6437";

      idadePreDiv.style.borderRadius = "7px 7px 7px 7px";
      idadePreDiv.style.fontWeight = "bold";
      idadePreDiv.style.textAlign= "center";
      idadePreDiv.style.border = "0.5px #fff solid";
      idadePreDiv.style.color = "#fff";
      idadePreDiv.style.maxWidth = "560px";
      ageElement.style.margin = "5px 0 0 0";
      

        })  
    })
    .then(() => {
        fetch(URL_HORARIOS_PRE, {
          method: "GET",
        })
          .then(result => result.json())
          .then(result => {
            console.log(result);
            result.result.forEach(horarios => {
              var horariosDiv = document.createElement("div");
              idadePreDiv.appendChild(horariosDiv);
            
              var table = document.createElement("table");
              table.classList.add("table_horario");
            
              var tbody = document.createElement("tbody");
            
              var tr1 = document.createElement("tr");
              var td1_1 = document.createElement("td");
              var td1_2 = document.createElement("td");
              td1_1.classList.add("borda_td");
              td1_1.innerText = "Turno: Manhã";
              td1_2.classList.add("borda_td");
              td1_2.innerText = `${horarios.turnoManha.inicio} ÀS ${horarios.turnoManha.fim}`;
              tr1.appendChild(td1_1);
              tr1.appendChild(td1_2);
            
              var tr2 = document.createElement("tr");
              var td2_1 = document.createElement("td");
              var td2_2 = document.createElement("td");
              td2_1.classList.add("borda_td");
              td2_1.innerText = "Turno: Tarde";
              td2_2.classList.add("borda_td");
              td2_2.innerText = `${horarios.turnoTarde.inicio} ÀS ${horarios.turnoTarde.fim}`;
              tr2.appendChild(td2_1);
              tr2.appendChild(td2_2);
            
              var tr3 = document.createElement("tr");
              var td3_1 = document.createElement("td");
              var td3_2 = document.createElement("td");
              td3_1.classList.add("borda_td_bottom");
              td3_1.innerText = horarios.diasDaSemana[0];
              td3_2.classList.add("borda_td_bottom");
              td3_2.innerText = horarios.turma[0];
              tr3.appendChild(td3_1);
              tr3.appendChild(td3_2);
            
              var tr4 = document.createElement("tr");
              var td4_1 = document.createElement("td");
              var td4_2 = document.createElement("td");
              td4_1.classList.add("borda_td_bottom");
              td4_1.innerText = horarios.diasDaSemana[1];
              td4_2.classList.add("borda_td_bottom");
              td4_2.innerText = horarios.turma[1];
              tr4.appendChild(td4_1);
              tr4.appendChild(td4_2);
            
              tbody.appendChild(tr1);
              tbody.appendChild(tr2);
              tbody.appendChild(tr3);
              tbody.appendChild(tr4);
            
              table.appendChild(tbody);
            
              horariosDiv.appendChild(table);
            
              table.style.borderRadius = "0px 0px 7px 7px";
              table.style.overflow = "hidden";
              table.style.fontSize = "20px";
              table.style.fontWeight = "bold";
            
              var bordasHorario = table.querySelectorAll(".borda_td");
            
              bordasHorario.forEach(borda => {
                borda.style.border = "solid 1px #ffffff";
                borda.style.padding= "7px 42px 7px 42px";
                borda.style.backgroundColor = "#003675";
                borda.style.color = "#ffffff";
              });
            
              var bordasBottom = table.querySelectorAll(".borda_td_bottom");
              bordasBottom.forEach(borda => {
                borda.style.border = "solid 1px  #ffffff";
                borda.style.padding= "20px 42px 20px 42px";
                borda.style.backgroundColor = "#DBDBDB";
                borda.style.color = "#003675";
              });
            
              // Ajusta o tamanho da fonte
              td1_1.style.fontSize = "16px";
              td2_1.style.fontSize = "16px";
              td3_1.style.fontSize = "16px";
              td4_1.style.fontSize = "16px";
            });
            
          });
      });
    


