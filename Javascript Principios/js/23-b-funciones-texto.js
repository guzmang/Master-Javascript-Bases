'use strict'

var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript curso de Victor Robles";
var texto2 = "es muy buen curso.";

/*	Metodos vistos:
	indexOf
	search
	match
	lastIndexOf
	substr
	charAt
	startsWith
	endsWith
	includes
*/

// me devuelve el indice de donde empieza la primer ocurrencia de la palabra en el texto, de no existir devuelve -1
var busqueda = texto1.indexOf("curso");
console.log(busqueda);	// devuelve 14 (posicion de "c")

// idem indexOf
busqueda = texto1.search("curso");
console.log(busqueda);

// devuelve un array con la primera coincidencia
busqueda = texto1.match("curso");
console.log(busqueda);

// devuelve un array con todas las coincidencias (ingreso como param una exp regular para que haga una busqueda global)
busqueda = texto1.match(/curso/g);
console.log(busqueda);	// devolvera un array con 2 "curso"

busqueda = texto1.match(/a/g);
console.log(busqueda);	// devolvera un array con 3 "a"

// me devuelve el indice de donde empieza la ultima ocurrencia de la palabra en el texto, de no existir devuelve -1
busqueda = texto1.lastIndexOf("curso");
console.log(busqueda);	// devuelve 34

// me devuelve un texto, siendo el 1er arg el indice donde empieza y el 2do los caracteres que quiero a partir de ahi
busqueda = texto1.substr(14, 5);
console.log(busqueda);	// devuelve "curso"

busqueda = texto1.substr(14);
console.log(busqueda);	// si no especifico el 2do arg me devuelve hasta el final del string

// me devuelve una letra del string indicandole un indice
busqueda = texto1.charAt(44);
console.log(busqueda);	// devuelve "i"

// me devuelve true si el string empieza con la cadena indicada, caso contrario false
busqueda = texto1.startsWith("Bienvenido al");
console.log(busqueda);	// true

busqueda = texto1.startsWith("bienvenido");
console.log(busqueda);	// devuelve false, lo puse con minuscula

busqueda = texto1.startsWith("victor");
console.log(busqueda);	// devuelve false

// me devuelve true si el string termina con la cadena indicada, caso contrario false
busqueda = texto1.endsWith("Victor Robles");
console.log(busqueda);	// devuelve true

// me devuelve true si encuentra una ocurrencia del string en el texto (es case sensitive), caso contrario false
busqueda = texto1.includes("JavaScript");
console.log(busqueda);	// devuelve true

busqueda = texto1.includes("javascript");
console.log(busqueda);	// devuelve false