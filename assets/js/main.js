// Fazendo com que o conteúdo sempre esteja em baixo da navbar

let header = document.getElementById("header");
let cg = document.getElementById("cg");

header.style.top = 0;

let headerAltura = header.clientHeight;

cg.style.marginTop = headerAltura + "px";

// Criando menu hamburguer

let menu = document.getElementById("menu");
let linkGroup = document.getElementById("nav-link-group");

function abrirOuFecharMenu () {
    if (linkGroup.style.display == "none") {
        linkGroup.style.display = "flex";
        linkGroup.style.flexDirection = "column";
        linkGroup.style.marginLeft = "initial";
        linkGroup.style.marginTop = "30px";
        menu.innerHTML = "close";
    } else {
        linkGroup.style.display = "none";
        menu.innerHTML = "menu";
    }
}

// CRIANDO AS FUNCIONALIDADES DO CARROSSEL E DE SEUS ELEMENTOS

let i = 0;
const imagensCarrossel = document.querySelectorAll(".carrossel-img");

const imagemSelecionada = () => {
    imagensCarrossel.forEach(imagem => {
        imagem.style.opacity = "30%";
        imagem.style.border = "5px solid rgb(32,178,170,0)";
    })
    document.getElementById(i).style.opacity = "100%";
    document.getElementById(i).style.border = "5px solid rgb(32,178,170,1)";
}

window.onload = () => {
    imagemSelecionada();
}

function next () {
    if (i == 4) {
        i = 0;
        document.getElementById(i).scrollIntoView({inline: "center", block: "center"});
    } else {
        i++;
        document.getElementById(i).scrollIntoView({inline: "center", block: "center"});
    }

    imagemSelecionada();
}
function prev () {
    if (i == 0) {
        i = 4;
        document.getElementById(i).scrollIntoView({inline: "center", block: "center"});
    } else {
        i--;
        document.getElementById(i).scrollIntoView({inline: "center", block: "center"});
    }

    imagemSelecionada();
}