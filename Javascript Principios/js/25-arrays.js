'use strict'

// Se muestran los 3 tipos de for para recorrer un array (for, forEach, for in)

// Arrays, Arreglos
var nombre = "Victor Robles";
var nombres = ["Victor Robles", "Juan Lopez", "Manolo Garcia", "Jose Martin", 52, true];

/*	Metodos vistos:
	length: devuelve la longitud del array
	find: recibe un argumento y regresa lo mismo si lo encuentra, caso contrario undefined
	findIndex: recibe un argumento y devuelve su indice, caso contrario devuelve -1
	some: recibe una condicion, si algun elemento del array la cumple devuelve true, caso contrario false
*/

// Defino array en forma de objeto
var lenguajes = new Array("PHP", "JS", "Go", "Java", "C#", "C", "Pascal");

// Imprimo
console.log(nombre);
console.log(nombres);
console.log(nombres[2]);
console.log(nombres.length);
console.log(lenguajes);

var elemento = parseInt(prompt("Que elemento del array quieres??", 0));
if(elemento >= nombres.length || isNaN(elemento)) {
	alert("Introduce un numero correcto menor que " + nombres.length);
} else {
	alert("El usuario seleccionado es: " + nombres[elemento]);
}

document.write("<h1>Lenguajes de programacion del 2018</h1>");
document.write("<ul>");

/*
for (var i = 0; i < lenguajes.length; i++) {
	document.write("<li>" + lenguajes[i] + "</li>");
}
*/

/*
// puedo usar una funcion de callback en el metodo forEach
// el 1er arg refiere a cada argumento
// el 2do arg (opcional) refiere al indice de ese elemento
// el 3er arg (opcional) es el array
lenguajes.forEach((elemento, indice, array) => {
	console.log(array);
	document.write("<li>" + indice + " - " + elemento + "</li>");
});
*/

for(let lenguaje in lenguajes) {
	document.write("<li>" + lenguaje + " - " + lenguajes[lenguaje] + "</li>");
}

document.write("</ul>");

// Busquedas
// Si un elemento existe dentro del array o no
// Si lo encuentra devuelve el elemento, caso contrario devuelve undefined
var busqueda = lenguajes.find(function(lenguaje) {
		return lenguaje == "PHP";
	});
console.log(busqueda);	// devuelve "PHP"

// Busqueda mas resumida
busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");
console.log(busqueda);	// devuelve "PHP"

busqueda = lenguajes.find(lenguaje => lenguaje == "Ruby");
console.log(busqueda);	// devuelve undefined

// Busqueda que devuelve el indice del objeto a buscar
busqueda = lenguajes.findIndex(lenguaje => lenguaje == "Java");
console.log(busqueda);	// devuelve el indice 3

// Busqueda que devuelve el indice del objeto a buscar
busqueda = lenguajes.findIndex(lenguaje => lenguaje == "Ruby");
console.log(busqueda);	// al no existir devuelve -1

// Pregunto si existe al menos un valor que cumpla con la condicion indicada
var precios = [10, 20, 50, 80, 12];
busqueda = precios.some(precio => precio >= 20);
console.log(busqueda);	// devuelve true