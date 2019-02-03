'use strict'

/*
	Calculadora:
	- Pida dos numeros por pantalla
	- Si metemos uno mal que nos los vuelva a pedir
	- En el cuerpo de la pagina, en una alerta y por la consola el resultado de
	sumar, restar, multiplicar y dividir esas dos cifras
*/

var numero1 = parseInt(prompt("Introduce el primer numero:", 1));
var numero2 = parseInt(prompt("Introduce el segundo numero:", 1));

while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) {
	numero1 = parseInt(prompt("Introduce el primer numero, mayor a 0:", 1));
	numero2 = parseInt(prompt("Introduce el segundo numero, mayor a 0:", 1));
}

var resultado = "La suma es: " + (numero1 + numero2) + "<br/>" +
				"La resta es: " + (numero1 - numero2) + "<br/>" +
				"El producto es: " + (numero1 * numero2) + "<br/>" +
				"La division es: " + (numero1 / numero2) + "<br/>";

var resultadoCMD = "La suma es: " + (numero1 + numero2) + "\n" +
				"La resta es: " + (numero1 - numero2) + "\n" +
				"El producto es: " + (numero1 * numero2) + "\n" +
				"La division es: " + (numero1 / numero2) + "\n";	// Si es sobre 0 el resultado es Infinity (tipo Number)

document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);