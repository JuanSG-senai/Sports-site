// Fazendo com que o conteúdo sempre esteja em baixo da navbar

let header = document.getElementById("header");
let cg = document.getElementById("cg");

header.style.top = 0;

console.log(header.clientHeight);

let headerAltura = header.clientHeight;
let mtMain = headerAltura + 20;

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

window.onload = () => {
    const slides = document.querySelectorAll(".carrossel-img");

    for (let ind = 0; ind < slides.length; ind++) {
        slides[ind].style.width = "100%";
    }
}

let i = 0;

function next () {
    if (i == 4) {
        i = 0;
        document.getElementById(i).scrollIntoView();
    } else {
        i++;
        document.getElementById(i).scrollIntoView();
    }
}
function prev () {
    if (i == 0) {
        i = 4;
        document.getElementById(i).scrollIntoView();
    } else {
        i--;
        document.getElementById(i).scrollIntoView();
    }
}