let numero = 0;

let diapositivas = document.querySelectorAll(".diapositiva");

let siguiente = document.querySelector(".siguiente");
let anterior = document.querySelector(".anterior");

siguiente.addEventListener("click", function() {

    diapositivas[numero].style.display = "none";

    numero++;

    if (numero >= diapositivas.length) {
        numero = 0;
    }

    diapositivas[numero].style.display = "flex";
});

anterior.addEventListener("click", function() {

    diapositivas[numero].style.display = "none";

    numero--;

    if (numero < 0) {
        numero = diapositivas.length - 1;
    }

    diapositivas[numero].style.display = "flex";
});

setInterval(function() {

    diapositivas[numero].style.display = "none";

    numero++;

    if (numero >= diapositivas.length) {
        numero = 0;
    }

    diapositivas[numero].style.display = "flex";

}, 5000);

function abrirModal(id) {
    document.getElementById(id).style.display = "block";
}

function cerrarModal(id) {
    document.getElementById(id).style.display = "none";
}