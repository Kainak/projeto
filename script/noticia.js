const URL = "https://7ecl58ro.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22noticia%22%5D%7B%0A++%22id%22%3A_id%2C%0A++++titulo%2C%0A++++subtitulo%2C%0A++++%22conteudo%22%3A+%27No+Clube+de+Ci%C3%AAncias+do+Biopark%2C+uma+revolu%C3%A7%C3%A3o+est%C3%A1+em+curso+no+ensino+cient%C3%ADfico+para+jovens+talentos.+Com+um+ambiente+estimulante+e+recursos+de+ponta%2C+o+clube+est%C3%A1+transformando+a+maneira+como+os+jovens+exploram+o+mundo+da+ci%C3%AAncia.+Com+a+miss%C3%A3o+de+despertar+a+curiosidade+e+incentivar+a+criatividade%2C+o+clube+oferece+aos+alunos+um+espa%C3%A7o+%C3%BAnico+onde+a+curiosidade+se+transforma+em+descobertas+surpreendentes.%5Cn%0AEquipado+com+um+laborat%C3%B3rio+de+%C3%BAltima+gera%C3%A7%C3%A3o+e+uma+equipe+de+profissionais+dedicados%2C+o+Clube+de+Ci%C3%AAncias+do+Biopark+proporciona+aos+jovens+cientistas+a+liberdade+de+experimentar%2C+explorar+e+mergulhar+em+projetos+cient%C3%ADficos+desafiadores.+Aqui%2C+eles+s%C3%A3o+incentivados+a+questionar%2C+testar+hip%C3%B3teses+e+buscar+solu%C3%A7%C3%B5es+inovadoras+para+os+problemas+do+mundo+real.+Al%C3%A9m+disso%2C+o+clube+promove+a+participa%C3%A7%C3%A3o+em+competi%C3%A7%C3%B5es+cient%C3%ADficas+renomadas%2C+permitindo+que+os+alunos+demonstrem+suas+habilidades+e+conhecimentos%2C+acumulando+pr%C3%AAmios+e+reconhecimentos+ao+longo+do+caminho.%5Cn%0AO+Clube+de+Ci%C3%AAncias+do+Biopark+est%C3%A1+se+tornando+uma+refer%C3%AAncia+no+cen%C3%A1rio+cient%C3%ADfico%2C+atraindo+jovens+talentos+e+inspirando+uma+nova+gera%C3%A7%C3%A3o+de+cientistas.+Com+uma+abordagem+din%C3%A2mica+e+apaixonada+pela+ci%C3%AAncia%2C+o+Clube+de+Ci%C3%AAncias+do+Biopark+est%C3%A1+mudando+a+maneira+como+os+jovens+se+envolvem+com+a+ci%C3%AAncia.+Aqui%2C+eles+descobrem+que+a+ci%C3%AAncia+%C3%A9+muito+mais+do+que+f%C3%B3rmulas+e+teorias%2C+%C3%A9+uma+jornada+emocionante+de+explora%C3%A7%C3%A3o%2C+descoberta+e+impacto+no+mundo.+Prepare-se+para+se+surpreender+com+as+incr%C3%ADveis+realiza%C3%A7%C3%B5es+que+est%C3%A3o+surgindo+desse+clube+inovador+e+inspirador%21%5Cn%27%2C%0A++++%22imagem%22%3A+imagem.asset-%3Eurl%2C%0A++++%22imagemresponsiva%22%3A+imagemresponsiva.asset-%3Eurl%2C%0A++++data%0A%7D&perspective=published";

const noticiaDiv = document.querySelector(".noticia");

fetch(URL, {
    method: "GET",
})
    .then(result => result.json())

    .then(result => {
        
        result.result.forEach(noticia => {

            var txtDiv = document.createElement("div");
            txtDiv.classList.add("txt");
            noticiaDiv.appendChild(txtDiv);

            var tituloElement = document.createElement("p");
            tituloElement.classList.add("titulo");
            tituloElement.innerText = noticia.titulo; 
            txtDiv.appendChild(tituloElement);
            
            var tituloElement = document.createElement("p");
            tituloElement.classList.add("subtitulo");
            tituloElement.innerText = noticia.subtitulo; 
            txtDiv.appendChild(tituloElement);

            var tituloElement = document.createElement("p");
            tituloElement.classList.add("descricao");
            tituloElement.innerText = noticia.conteudo;
            txtDiv.appendChild(tituloElement);

            var PictureTag = document.createElement("picture");
            noticiaDiv.appendChild(PictureTag);
            var sourceElement = document.createElement('source');
            sourceElement.setAttribute('media', '(max-width: 500px)');
            sourceElement.setAttribute('srcset', noticia.imagemresponsiva);
            PictureTag.appendChild(sourceElement);
            var ImgElement = document.createElement("img");
            ImgElement.classList.add("img-noticia");
            ImgElement.src = noticia.imagem;
            PictureTag.appendChild(ImgElement);
          
        })
        
    });


