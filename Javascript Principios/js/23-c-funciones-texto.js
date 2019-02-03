'use strict'

var texto1 = "Bienvenido al curso de JavaScript de Victor Robles";
var texto2 = "	Bienvenido al curso de JavaScript de Victor Robles  ";

/*	Metodos vistos:
	replace
	slice
	split
	trim
*/

// reemplaza una cadena de texto por otra indicada, si la cadena no existe no tiene efecto
var busqueda = texto1.replace("JavaScript", "Symfony");
console.log(busqueda);

busqueda = texto1.replace("javascript", "Symfony");
console.log(busqueda);

// corta una cadena, eliminando los primeros caracteres y mostrando desde el indice indicado en adelante (1 arg)
busqueda = texto1.slice(14);
console.log(busqueda);

// devuelve una cadena que empieza con el 1er indice indicado hasta el 2do indice indicado (2 args)
busqueda = texto1.slice(14, 22);
console.log(busqueda);

// recorta todas las palabras de un string separadas por un argumento indicado y los mete en un array
// si no se indica un argumento, mete todo el string en un array
busqueda = texto1.split();
console.log(busqueda);	// ["Bienvenido al curso de JavaScript de Victor Robles"]

busqueda = texto1.split(" ");	// devolvera un array con palabras separadas con un espacio
console.log(busqueda);			// (8) ["Bienvenido", "al", "curso", "de", "JavaScript", "de", "Victor", "Robles"]

// elimina los espacios al principio y al final del string (tambien las tabulaciones)
busqueda = texto2.trim();
console.log(busqueda);