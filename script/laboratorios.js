const URL = "https://7ecl58ro.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22laboratorios%22%5D%7B%0A++++titulo%2C%0A++++descricao%2C%0A++++%22imagemGrande%22%3A+imgGrande.asset-%3Eurl%2C%0A++++%22imagemGrandeResponsiva1%22%3A+imgGrandeResponsiva1.asset-%3Eurl%2C%0A++++%22imagemGrandeResponsiva2%22%3A+imgGrandeResponsiva2.asset-%3Eurl%2C%0A++++%22imagemPequena1%22%3A+imgPequena1.asset-%3Eurl%2C%0A++++%22imagemPequena2%22%3A+imgPequena2.asset-%3Eurl%0A%7D%0A%0A";

const cardsDiv = document.querySelector(".cards");

fetch(URL, {
    method: "GET",
})
    .then(response => response.json())
    .then(result => {
        result.result.forEach((laboratorio, contador) => {
            const cardElement = document.createElement("div");
            cardElement.classList.add(contador % 2 === 0 ? "card" : "card-reverse");

            const txtElement = document.createElement("div");
            txtElement.classList.add("txt");

            const labElement = document.createElement("p");
            labElement.classList.add("lab");
            labElement.textContent = laboratorio.titulo;

            const descLabElement = document.createElement("p");
            descLabElement.classList.add("desc-lab");
            descLabElement.textContent = laboratorio.descricao;

            txtElement.appendChild(labElement);
            txtElement.appendChild(descLabElement);

            const cardImgElement = document.createElement("div");
            cardImgElement.classList.add(contador % 2 === 0 ? "card-img" : "card-img-reverse");

            const pictureElement = document.createElement("picture");

            const sourceElement1 = document.createElement("source");
            sourceElement1.media = "(max-width: 388px)";
            sourceElement1.srcset = laboratorio.imagemGrandeResponsiva1;

            const sourceElement2 = document.createElement("source");
            sourceElement2.media = "(max-width: 630px)";
            sourceElement2.srcset = laboratorio.imagemGrandeResponsiva2;

            const imgElement = document.createElement("img");
            imgElement.src = laboratorio.imagemGrande;

            pictureElement.appendChild(sourceElement1);
            pictureElement.appendChild(sourceElement2);
            pictureElement.appendChild(imgElement);

            const cardImgNoneElement = document.createElement("div");
            cardImgNoneElement.classList.add("card-img-none");

            const img1Element = document.createElement("img");
            img1Element.src = laboratorio.imagemPequena1;

            const img2Element = document.createElement("img");
            img2Element.src = laboratorio.imagemPequena2;

            cardImgNoneElement.appendChild(img1Element);
            cardImgNoneElement.appendChild(img2Element);

            cardImgElement.appendChild(pictureElement);
            cardImgElement.appendChild(cardImgNoneElement);

            cardElement.appendChild(txtElement);
            cardElement.appendChild(cardImgElement);

            cardsDiv.appendChild(cardElement);
        });
    });
