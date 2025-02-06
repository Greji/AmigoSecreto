// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Variables

let nombres = [];



function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    if(validarNombre(nombreAmigo)==true){
        actualizarAmigo(nombreAmigo);
        limpiarCaja();
        mostrarNombres();
    }
    else{
        alert("Por favor ingresa un nombre");
    }
    console.log(nombres);
    
}

function actualizarAmigo(nombreAmigo){
    nombres.push(nombreAmigo);
}

function sortearAmigo(){
    let posicionAmigoSecreto = Math.floor(Math.random()*(nombres.length-1));
    console.log(posicionAmigoSecreto);
    console.log(nombres[posicionAmigoSecreto]);
    document.querySelector('#resultado').innerHTML = `Tu amigo secreto es ${nombres[posicionAmigoSecreto]}`;
}

function limpiarCaja(){

    document.querySelector('#amigo').value='';
}


function mostrarNombres(){
    var text='';
    document.getElementById("listaAmigos").innerHTML = '';

    for (var i = 0; i < nombres.length; i++) {
         text += '<li>'+ nombres[i] +'</li>';
    }
    
    document.getElementById("listaAmigos").innerHTML = text; 
}


function validarNombre(nombre){
    if(nombre==''|| nombre== ' '|| nombre=='  '){
        return false;
    }else{
        return true;
    }


}