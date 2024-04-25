const botonEmpezar = document.getElementById("botonEmpezar");
const botonReglas = document.getElementById("botonReglas");
const botonVolver = document.getElementById("botonVolver");
const botonVolver2 = document.getElementById("botonVolver2");

botonEmpezar.addEventListener("click", function(event){
    mostrarMain(event.target.id);
    empezarPartida();
})

botonReglas.addEventListener("click", function(event){
    mostrarMain(event.target.id);
})

botonVolver.addEventListener("click", function(){
    mostrarMain("botonVolver");
})

botonVolver2.addEventListener("click", function(){
    mostrarMain("botonVolver");
})

function mostrarMain(botonPulsado){
    document.getElementById("menu").style.display = "none";
    document.getElementById("partida").style.display = "none";
    document.getElementById("reglas").style.display = "none";

    if(botonPulsado == "botonEmpezar"){
        document.getElementById("partida").style.display = "flex";
    }
    else if(botonPulsado == "botonReglas"){
        document.getElementById("reglas").style.display = "flex";
    }
    else if(botonPulsado == "botonVolver"){
        document.getElementById("menu").style.display = "flex";
    }
}

function empezarPartida(){
    document.getElementById("menu").style.display = "none";
    document.getElementById("reglas").style.display = "none";
    document.getElementById("partida").style.display = "flex";
}

function empezarPartida(){
    document.getElementById("menu").style.display = "none";
    document.getElementById("reglas").style.display = "none";
    document.getElementById("partida").style.display = "flex";
}