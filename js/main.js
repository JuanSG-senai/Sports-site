let header = document.getElementById("header");
let cg = document.getElementById("cg");

header.style.top = 0;

console.log(header.clientHeight);

let headerAltura = header.clientHeight;
let mtMain = headerAltura + 20;

cg.style.marginTop = headerAltura + "px";