
let numeroSecreto =0;
let intentos =0;
let listaNumerosSorteados=[];
let numeroMaximo =10;


//la funcion llama el tecto de html
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
  return;
}

//declarmos la funcion del botton 
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('numeroUsuario').value);
    console.log(numeroSecreto);
    console.log(intentos);

    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p', `acertaste el numero en ${intentos} ${(intentos===1)? 'vez':'veces'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'el numero secreto  es menor');
        }else{
            asignarTextoElemento('p', 'el numero secreto  es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    
    return;
}

function condicionesIniciales(){
//aqui se llaman las etiques y se les da un texto.
asignarTextoElemento('h1','juego del numero secreto');
asignarTextoElemento('p', `indica un numero entre 1 y ${numeroMaximo} `);
numeroSecreto =generarNumeroSecreto();
intentos =1;

}

//declaramos la funcion 

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //Indicar mensajes de Intervalo de numeros;
    //Generar el numero Aleatorio
    //Inicializar Numero de intentos
    condicionesIniciales();
    
    //Deshabilitar boton de nuevo juego.
    document.querySelector('#reiniciar').setAttribute('disabled','true');   

}



function limpiarCaja(){
  document.querySelector('#numeroUsuario').value='';   
}


function generarNumeroSecreto(){
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1; 
    //si el numero generado esta incluido en la lista
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');


    }else{

        if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();

        }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
         }

    }
}

condicionesIniciales();


