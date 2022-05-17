function cogeUnValor(t) {
	document.getElementById('resultado').innerHTML += t;                 //Lo que hace esta funcion es coger un valor y retornar ese valor.  
}

function borrar() {
	document.getElementById('resultado').innerHTML = "";                        //Borra el valor de entrada. 
}

function calculaResultado() {
	var resultados = eval(document.getElementById('resultado').innerHTML);                         //Nos calcula la operación
	document.getElementById('resultado').innerHTML = resultados;
}


//Declaracion de variables

var uno = document.getElementById('uno');
var dos = document.getElementById('dos');
var tres = document.getElementById('tres');
var cuatro = document.getElementById('cuatro');
var cinco = document.getElementById('cinco');
var seis = document.getElementById('seis');
var siete = document.getElementById('siete');
var ocho = document.getElementById('ocho');
var nueve = document.getElementById('nueve');
var cero = document.getElementById('cero');
var coma = document.getElementById('coma');

var suma = document.getElementById('suma');
var multiplicacion = document.getElementById('multiplicacion');
var dividir = document.getElementById('dividir');
var borra = document.getElementById('borra');
var igual = document.getElementById('igual');
var resta = document.getElementById('resta');


coma.addEventListener("click", function(){
    cogeUnValor(",");
})

cero.addEventListener("click", function(){
    cogeUnValor(0);
})
uno.addEventListener("click", function(){      //addEventListener es un metodo que indica al navegador que esté atento de la interaccion del usuario. 
    cogeUnValor(1);
})
dos.addEventListener("click", function(){
    cogeUnValor(2);
})
tres.addEventListener("click", function(){
    cogeUnValor(3);
})
cuatro.addEventListener("click", function(){
    cogeUnValor(4);
})
cinco.addEventListener("click", function(){
    cogeUnValor(5);
})
seis.addEventListener("click", function(){
    cogeUnValor(6);
})
siete.addEventListener("click", function(){
    cogeUnValor(7);
})
ocho.addEventListener("click", function(){
    cogeUnValor(8);
})
nueve.addEventListener("click", function(){
    cogeUnValor(9);
})
suma.addEventListener("click", function(){
    cogeUnValor("+");
})
resta.addEventListener("click", function(){
    cogeUnValor("-");
})
multiplicacion.addEventListener("click", function(){
    cogeUnValor("*");
})
dividir.addEventListener("click", function(){
    cogeUnValor("/");
})


igual.addEventListener("click", function(){
    calculaResultado();
})

borra.addEventListener("click", function(){
    borrar()
})