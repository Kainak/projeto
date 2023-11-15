function fetchDuvidas() {
    const URL = "https://7ecl58ro.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22duvidas%22%5D%0A%0A++&perspective=published";
    const duvidasDiv = document.querySelector(".frequente");

    fetch(URL, {
        method: "GET",
    })
        .then(result => result.json())
        .then(result => {
           
            result.result.forEach((duvidas, index) => {
                const p = document.createElement("p");
                var button = document.createElement("button");
                button.className = "campo-freq";
                button.setAttribute("type", "button");
                button.setAttribute("data-bs-toggle", "collapse");
                button.setAttribute("data-bs-target", `#collapseExample${index}`);
                button.setAttribute("aria-expanded", "false");
                button.setAttribute("aria-controls", `collapseExample${index}`);
                button.textContent = duvidas.pergunta;
                p.appendChild(button);
                duvidasDiv.appendChild(p);

                var resposta = document.createElement("div");
                resposta.className = "collapse";
                resposta.setAttribute("id", `collapseExample${index}`);

                var resp = document.createElement("div");
                resp.classList.add("card", "card-body");
                resp.textContent = duvidas.resposta;

                resposta.appendChild(resp);
                duvidasDiv.appendChild(resposta);
            })
        })
}

fetchDuvidas();
