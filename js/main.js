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
    } else {
        linkGroup.style.display = "none";
    }
}