// Capturamos el click del boton Tirar
const botonTirar = document.getElementById("botonTirar");
botonTirar.addEventListener("click", function(){
    comprobarApuesta();
});

let saldo;      // Saldo Restante
let apuesta;    // Apuesta realizada
let numero;     // Resultado obtenido

// Mostramos el saldo por pantalla
function empezarPartida(){
    saldo = 50;
    document.getElementById("saldo").innerHTML = saldo + "€";
    document.getElementById("apuesta").value = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("dado").innerHTML = "<img src='./img/dice-01.png'>";
}

// Funcion para comprobar si se cumplen los requisitos antes de la tirada
function comprobarApuesta(){
    apuesta = parseInt(document.getElementById("apuesta").value);

    switch(true){
        case apuesta == "":
            errorMensaje(0);
            break;
        case isNaN(apuesta):
            errorMensaje(1);
            break;
        case apuesta <= 0:
            errorMensaje(2);
            break;
        case apuesta > saldo:
            errorMensaje(3);
            break;
        default:
            document.getElementById("resultado").innerHTML = "";
            tirarDado();
    }
}

// Funcion de tirar dados
function tirarDado(){
    let contador = 0;

    // Funcion para mostrar el dado a modo animacion
    function mostrarImagen(){
        numero = Math.floor(Math.random() * 6 + 1);
        document.getElementById("dado").innerHTML = "<img src='./img/dice-0" + numero + ".png'>";
        contador++;

        // Cuando el contador llegue a 15 detenemos el dado
        if(contador == 15){
            clearInterval(intervalo);
        }
    }

    // El intervalo establecido entre imagenes
    let intervalo = setInterval(mostrarImagen, 35);

    // Tiempo de espera para mostrar los dados y manejar el resultado
    setTimeout(() => {
        document.getElementById("dado").innerHTML = "<img src='./img/dice-0" + numero + ".png'>";
        resultado();
    }, 15 * 40);
}

// Funcion para trabajar con el resultado y determinar si ha ganado o perdido
function resultado(){
    if(document.getElementById("numero").value == numero){
        document.getElementById("resultado").className = "resultadoganado";
        document.getElementById("resultado").innerHTML = "HAS GANADO<br>" + (apuesta * 2) + "€";
        saldo += (apuesta * 2);
    }
    else{
        document.getElementById("resultado").className = "resultadoperdido";
        document.getElementById("resultado").innerHTML = "HAS PERDIDO<br>" + apuesta + "€";
        saldo -= apuesta;
    }
    
    document.getElementById("saldo").innerHTML = saldo + "€";
    if(saldo >= 200){
        alert("¡ENHORABUENA!\nHAS GANADO");
        mostrarMain("botonVolver");
    }
    else if(saldo == 0){
        alert("GAME OVER\nHAS PERDIDO TODO");
        mostrarMain("botonVolver");
    }
}

function errorMensaje(opcion){
    let mensajes = [
        "DEBE introducir una APUESTA",
        "La APUESTA debe ser un valor numérico",
        "La APUESTA no puede ser negativa",
        "La APUESTA no puede ser superior a tu SALDO"
    ];

    document.getElementById("resultado").className = "errores";
    document.getElementById("resultado").innerHTML = mensajes[opcion];
}