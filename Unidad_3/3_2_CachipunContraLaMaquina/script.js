// Crear usuario
let txtUsuario = document.getElementById('usuario');
txtUsuario.textContent = prompt('Ingresa nombre de usuario');

// Crear oponente
let txtOponente = document.getElementById('oponente');
txtOponente.textContent = prompt('Ingresa nombre de oponente');

let tuJugada;
let resultado = document.getElementById('resultado');


// Posibilidades del oponente
function jugadaOponente() {
    // Condicional random de 3 opciones para oponente
    let oponente = Math.floor(Math.random() * (3 - 1 + 1) + 1); 
    
    if (oponente == 1) {
        document.getElementById("selectOponente").className = "far fa-hand-paper fa-5x";
    } else if (oponente == 2) {
        document.getElementById("selectOponente").className = "far fa-hand-scissors fa-5x";
    } else if (oponente == 3) {
        document.getElementById("selectOponente").className = "far fa-hand-rock fa-5x";
    }

    ganar(oponente);
}

function papel() {
    document.getElementById("tuSelect").className = "far fa-hand-paper fa-5x";
    tuJugada = 1;
    jugadaOponente(); 
}

function tijera() {
    document.getElementById("tuSelect").className = "far fa-hand-scissors fa-5x";
    tuJugada = 2;
    jugadaOponente(); 
}

function piedra() {
    document.getElementById("tuSelect").className = "far fa-hand-rock fa-5x";
    tuJugada = 3;
    jugadaOponente(); 
}

// Ver quien gana
function ganar(opJugada) {
    if (opJugada == 1 && tuJugada == 1 || opJugada == 2 && tuJugada == 2 || opJugada == 3 && tuJugada == 3) {
        resultado.textContent = "Empate";
        console.log("empate")
    } else if (opJugada == 1 && tuJugada == 3 || opJugada == 2 && tuJugada == 1 || opJugada == 3 && tuJugada == 2) {
        resultado.textContent = "Pierdes";
    } else {
        resultado.textContent = "Ganas";
    }
}