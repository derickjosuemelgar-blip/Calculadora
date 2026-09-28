const pantalla = document.getElementById("pantalla");
let primerNumero = null;
let operador = null;

//NÚMEROS
const numeros = document.querySelectorAll (".numero");

numeros.forEach(function(boton) {

    boton.addEventListener("click", function() {
        if (pantalla.value === "0") {
            pantalla.value = boton.textContent;

        }else {
            pantalla.value += boton.textContent;
        }
    });

});

//OPERADORES

const operadores = document.querySelectorAll (".operador");
operadores.forEach(function(boton) {
    boton.addEventListener("click", function () {

        primerNumero = Number(pantalla.value)
        operador =boton.textContent;
        pantalla.value = "0";
    
    
    });
});

//IGUAL

const igual = document.getElementById ("igual");

igual.addEventListener("click", function() {

    const segundoNumero = Number(pantalla.value);
    let resultado;

    if (operador === "+") {
        resultado =  primerNumero + segundoNumero;
    }

    if (operador === "-") {
        resultado = primerNumero - segundoNumero;
    }

    if (operador ==="x"){
        resultado = primerNumero * segundoNumero;
    }

    if (operador === "÷"){

        if (segundoNumero === 0){
            pantalla.value = "Error";
            return;
        }
        resultado = primerNumero / segundoNumero;
    
    }
     if (operador === "^") {
        resultado = primerNumero ** segundoNumero;
     }

     pantalla.value = resultado;
});

//raiz cuadrada

const raiz = document.getElementById("raiz");
raiz.addEventListener("click", function(){
    const numero = Number(pantalla.value);

    if (numero < 0){
        pantalla.value = "Error";
        return;
    }
    pantalla.value = Math.sqrt(numero);

});


// limpiar

const limpiar = document.getElementById ("limpiar");
limpiar.addEventListener ("click", function(){

    pantalla.value = "0";

    primerNumero= null;
    operador = null;


});



















