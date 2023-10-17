const URL_CLUBE = "https://7ecl58ro.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22clube%22%5D%7B%0A++%22imagem%22%3A+imagem.asset-%3Eurl%2C%0A++descricao%2C%0A++faixaDeIdade%2C%0A%7D&perspective=published";
const URL_HORARIOS = "https://7ecl58ro.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22horarios%22%5D%7B%0A++turnoManha%2C%0A++++turnoTarde%2C%0A++++diasDaSemana%2C%0A++++turmas%0A%7D&perspective=published";

const caixaDiv = document.querySelectorAll(".caixa_maior_baixo");
var secondElement = caixaDiv[1];

var imgElement = document.createElement("img");
var divElement = document.createElement("div");
var titleElement = document.createElement("h3");
var textElement = document.createElement("p");
var div_2_Element = document.createElement("div");
var title_2_Element = document.createElement("h3");
var ageElement = document.createElement("h2");
var idadeDiv = document.createElement("div");
divElement.classList.add("caixa_texto_vantagens");
textElement.classList.add("desc-cl");
div_2_Element.classList.add("caixa_texto_vantagens");
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

      secondElement.appendChild(imgElement);
      secondElement.appendChild(divElement);
      divElement.appendChild(titleElement);
      divElement.appendChild(textElement);
      secondElement.appendChild(div_2_Element);
      divElement.appendChild(idadeDiv);

      ageElement.innerHTML = `${clube.faixaDeIdade.inicio}-${clube.faixaDeIdade.fim} ANOS`;

      idadeDiv.appendChild(ageElement);
      idadeDiv.style.backgroundColor = "#FF6437";
      idadeDiv.style.padding = "3px 150px";
      idadeDiv.style.borderRadius = "7px 7px 0 0";
      idadeDiv.style.fontWeight = "bold";
      idadeDiv.style.border = "0.5px #fff solid";
      idadeDiv.style.color = "#fff";
      ageElement.style.margin = "5px 0 0 0";
    });
  })
  .then(() => {
    fetch(URL_HORARIOS, {
      method: "GET",
    })
      .then(result => result.json())
      .then(result => {
        console.log(result);
        result.result.forEach(horarios => {
          var horariosDiv = document.createElement("div");
          div_2_Element.appendChild(horariosDiv);
          horariosDiv.innerHTML = `
            <table class="table_horario">
                <tr>
                    <td class="borda_td">Turno: Manhã</td>
                    <td class="borda_td">${horarios.turnoManha.inicio}H ÀS ${horarios.turnoManha.fim}H</td>
                </tr>
                <tr>
                    <td class="borda_td">Turno: Tarde</td>
                    <td class="borda_td">${horarios.turnoTarde.inicio}H ÀS ${horarios.turnoTarde.fim}H</td>
                </tr>
                <tr>
                    <td class="borda_td_bottom">${horarios.diasDaSemana[0]}</td>
                    <td class="borda_td_bottom">${horarios.turmas.turmaA}</td>
                </tr>
                <tr>
                    <td class="borda_td_bottom">${horarios.diasDaSemana[1]}</td>
                    <td class="borda_td_bottom">${horarios.turmas.turmaB}</td>
                </tr>
            </table>
          `;
          var tabelaHorario = document.querySelector(".table_horario");
          tabelaHorario.style.borderRadius = "0px 0px 7px 7px";
          tabelaHorario.style.overflow = "hidden"; 
          tabelaHorario.style.fontSize = "20px";
          tabelaHorario.style.fontWeight = "bold";
      var bordasHorario = document.querySelectorAll(".borda_td");

      bordasHorario.forEach(borda => {
        borda.style.border = "solid 1px #ffffff";
        borda.style.padding= "7px 42px 7px 42px";
        borda.style.backgroundColor = "#003675";
        borda.style.color = "#ffffff";

      });

      var bordasBottom = document.querySelectorAll(".borda_td_bottom");
      bordasBottom.forEach(borda => {
        borda.style.border = "solid 1px  #ffffff";
        borda.style.padding= "20px 42px 20px 42px";
        borda.style.backgroundColor = "#DBDBDB";
        borda.style.color = "#003675";
        
      });
        });
      });
  });
