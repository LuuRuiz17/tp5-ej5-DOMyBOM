// 5- Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.

function iniciarCronometro() {
    idCentesimas = setInterval(contar, 10);
    contenedorCronometro.classList.remove("d-none");
    btnIniciar.disabled = true;
    btnPausar.disabled = false;
}

function pausarCronometro() {
    clearInterval(idCentesimas);
    clearInterval(idMinutosSegundos);
    console.log(contenedorCronometro);
    btnIniciar.disabled = false;
    btnPausar.disabled = true;
    btnIniciar.textContent = "Reanudar";
}

function reiniciarCronometro() {
    centesimas = 0;
    segundos = 0;
    minutos = 0;
    btnIniciar.textContent = "Iniciar";
    clearInterval(idCentesimas);
    clearInterval(idMinutosSegundos);
    actualizarCronometro();
    btnIniciar.disabled = false;
    btnPausar.disabled = true;
    console.log(contenedorCronometro);
}

function actualizarCronometro() {
    contenedorCronometro.textContent = `${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}:${centesimas.toString().padStart(2, "0")}`;
}

function contar() {
    centesimas += 1;
    // console.log(centesimas);
    if (centesimas === 100) {
        centesimas = 0;
        segundos += 1;
        if (segundos === 60) {
            segundos = 0;
            minutos += 1;
        }
    }
    actualizarCronometro();
}

let centesimas = 0;
let minutos = 0;
let segundos = 0;
let idCentesimas;
let idMinutosSegundos;
const contenedorCronometro = document.querySelector(".cronometro");
const btnIniciar = document.querySelector(".btn-success");
const btnPausar = document.querySelector(".btn-danger");
const btnReiniciar = document.querySelector(".btn-warning");

btnPausar.disabled = true;
btnIniciar.addEventListener('click', iniciarCronometro);
btnPausar.addEventListener('click', pausarCronometro);
btnReiniciar.addEventListener('click', reiniciarCronometro);