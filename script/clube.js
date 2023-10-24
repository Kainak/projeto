const URL_CLUBE =
  "https://7ecl58ro.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22clube%22%5D%7B%0A++%22imagem%22%3A+imagem.asset-%3Eurl%2C%0A++descricao%2C%0A++faixaDeIdade%2C%0A%7D&perspective=published";
const URL_HORARIOS_CLUBE =
  "https://7ecl58ro.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22horarios_clube%22%5D%7B%0A++turnoManha%2C%0A++++turnoTarde%2C%0A++++diasDaSemana%2C%0A++++turmas%0A%7D&perspective=published";

const caixaDiv = document.querySelectorAll(".caixa_maior_baixo");
var secondElement = caixaDiv[1];

var imgElement = document.createElement("img");
var divElement = document.createElement("div");
var titleElement = document.createElement("h3");
var textElement = document.createElement("p");
var title_2_Element = document.createElement("h3");
var ageElement = document.createElement("h2");
var idadeDiv = document.createElement("div");
divElement.classList.add("caixa_texto_vantagens");
textElement.classList.add("desc-cl");

titleElement.innerText = "Descrição";

fetch(URL_CLUBE, {
  method: "GET",
})
  .then((result) => result.json())
  .then((result) => {
    result.result.forEach((clube) => {
      textElement.innerText = clube.descricao;
      imgElement.src = clube.imagem;
      title_2_Element.innerText = "Horários";
      secondElement.style.paddingBottom = "15px";
      secondElement.appendChild(imgElement);
      secondElement.appendChild(divElement);
      divElement.appendChild(titleElement);
      divElement.appendChild(textElement);

      divElement.appendChild(idadeDiv);

      ageElement.innerHTML = `${clube.faixaDeIdade.inicio}-${clube.faixaDeIdade.fim} ANOS`;

      idadeDiv.appendChild(ageElement);
      idadeDiv.style.backgroundColor = "#FF6437";
      idadeDiv.style.textAlign= "center";
      idadeDiv.style.borderRadius = "7px 7px 7px 7px";
      idadeDiv.style.overflow = "hidden";
      idadeDiv.style.fontWeight = "bold";
      idadeDiv.style.border = "0.5px #fff solid";
      idadeDiv.style.color = "#fff";
      ageElement.style.margin = "5px 0 0 0";
    });
  })
  .then(() => {
    fetch(URL_HORARIOS_CLUBE, {
      method: "GET",
    })
      .then((result) => result.json())
      .then((result) => {
        console.log(result);
        result.result.forEach((horarios) => {
          var horariosDiv = document.createElement("div");
          idadeDiv.appendChild(horariosDiv);

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
          td3_2.innerText = horarios.turmas.turmaA;
          tr3.appendChild(td3_1);
          tr3.appendChild(td3_2);

          var tr4 = document.createElement("tr");
          var td4_1 = document.createElement("td");
          var td4_2 = document.createElement("td");
          td4_1.classList.add("borda_td_bottom");
          td4_1.innerText = horarios.diasDaSemana[1];
          td4_2.classList.add("borda_td_bottom");
          td4_2.innerText = horarios.turmas.turmaB;
          tr4.appendChild(td4_1);
          tr4.appendChild(td4_2);

          tbody.appendChild(tr1);
          tbody.appendChild(tr2);
          tbody.appendChild(tr3);
          tbody.appendChild(tr4);

          table.appendChild(tbody);

          horariosDiv.appendChild(table);

     
          table.style.fontSize = "20px";
          table.style.fontWeight = "bold";

          var bordasHorario = table.querySelectorAll(".borda_td");

          bordasHorario.forEach((borda) => {
            borda.style.border = "solid 1px #ffffff";
            borda.style.padding = "7px 42px 7px 42px";
            borda.style.backgroundColor = "#003675";
            borda.style.color = "#ffffff";
          });

          var bordasBottom = table.querySelectorAll(".borda_td_bottom");
          bordasBottom.forEach((borda) => {
            borda.style.border = "solid 1px  #ffffff";
            borda.style.padding = "20px 42px 20px 42px";
            borda.style.backgroundColor = "#DBDBDB";
            borda.style.color = "#003675";
          });

          // Ajusta o tamanho da fonte das células específicas
          td1_1.style.fontSize = "16px";
          td2_1.style.fontSize = "16px";
          td3_1.style.fontSize = "16px";
          td4_1.style.fontSize = "16px";
        });
      });
  });
