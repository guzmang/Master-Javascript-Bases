'use strict'

// Transformacion de textos
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript de Victor Robles";
var texto2 = "es muy buen curso.";

var dato = numero.toString();
console.log(dato);
	dato = texto1.toLowerCase();
console.log(dato);
	dato = texto2.toUpperCase();
console.log(dato);

// Calcular longitud
var nombre = "";
console.log(nombre.length);
var array = ["hola", "hola"];
console.log(array.length);
console.log(typeof array);	// tipo object

// Concatenar - Unir textos
var textoTotal = texto1 + ", " + texto2;
var textoTotal2 = texto1.concat(", " + texto2);
console.log(textoTotal);
console.log(textoTotal2);