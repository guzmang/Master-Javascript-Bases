'use strict'

// Funciones
// Una funcion es una agrupacion reutilizable de un conjunto de instrucciones

// Defino la funcion

// Caso 3

function porConsola(numero1, numero2) {
	console.log("Suma: " + (numero1 + numero2));
	console.log("Resta: " + (numero1 - numero2));
	console.log("Multiplicacion: " + (numero1 * numero2));
	console.log("Division: " + (numero1 / numero2));
	console.log("**************************************");
}

function porPantalla(numero1, numero2) {
	document.write("Suma: " + (numero1 + numero2) + "<br/>");
	document.write("Resta: " + (numero1 - numero2) + "<br/>");
	document.write("Multiplicacion: " + (numero1 * numero2) + "<br/>");
	document.write("Division: " + (numero1 / numero2) + "<br/>");
	document.write("**************************************" + "<br/>");
}

// Parametros opcionales (ya vienen inicializados)
function calculadora(numero1, numero2, mostrar = false) {

	// Conjunto de instrucciones a ejecutar
	if(mostrar == false) {
		porConsola(numero1, numero2);
	} else {
		porPantalla(numero1, numero2);
	}

}

// Invocar o llamar a la funcion
calculadora(1, 4);
calculadora(2, 5, true);
calculadora(4, 5, true);
calculadora(10, 8);

/* Caso 2

function calculadora(numero1, numero2) {

	// Conjunto de instrucciones a ejecutar
	console.log("Suma: " + (numero1 + numero2));
	console.log("Resta: " + (numero1 - numero2));
	console.log("Multiplicacion: " + (numero1 * numero2));
	console.log("Division: " + (numero1 / numero2));
	console.log("**************************************");

}

// Invocar o llamar a la funcion
for (var i = 1; i <= 10; i++) {
	console.log(i);
	calculadora(i, 8);
}

// En estos 2 casos devolvera NaN para todas las operaciones
calculadora();
calculadora(8);

*/

/*

// Caso 1

function calculadora() {

	// Conjunto de instrucciones a ejecutar
	console.log("Hola soy la calculadora.");
	console.log("Si soy yo.");

	return "La calculadora.";
}

// Invocar o llamar a la funcion
calculadora();
console.log(calculadora(), calculadora(), calculadora());

var resultado = calculadora();
console.log(resultado);
*/