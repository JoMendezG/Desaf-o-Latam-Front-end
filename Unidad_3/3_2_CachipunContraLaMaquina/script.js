// Crear usuario
let txtUsuario = document.getElementById('usuario');
txtUsuario.textContent = prompt('Ingresa nombre de usuario');

// Crear oponente
let txtOponente = document.getElementById('oponente');
txtOponente.textContent = prompt('Ingresa nombre de oponente');

function papel() {
    console.log("Eligiste papel");
    document.getElementById("tuSelect").className = "far fa-hand-paper fa-5x";
    
}

function tijera() {
    console.log("Eligiste tijera");
    document.getElementById("tuSelect").className = "far fa-hand-scissors fa-5x";
}

function piedra() {
    console.log("Eligiste piedra");
    document.getElementById("tuSelect").className = "far fa-hand-rock fa-5x";

}

