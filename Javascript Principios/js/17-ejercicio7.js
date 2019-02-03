'use strict'

/*
	Tabla de multiplicar de un numero introducido por pantalla
*/

var numero = parseInt(prompt("¿De que numero quieres la tabla?", 1));

document.write("<h1>Tabla del " + numero + "</h1>");
for (var cont = 1; cont <= 10; cont++) {
	document.write(cont + " x " + numero + " = " + (cont * numero) + "<br/>");
}

// Todas las tablas de multiplicar
for (var i = 1; i <= 10; i++) {	// Cantidad de tablas
	document.write("<h1>Tabla del " + i + "</h1>");
	for (var j = 1; j <= 10; j++) {	// Multiplos del 1 al 10
		document.write(j + " x " + i + " = " + (i * j) + "<br/>");
	}
}