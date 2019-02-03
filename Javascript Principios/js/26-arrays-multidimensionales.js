'use strict'

var categorias = ["Accion", "Terror", "Comedia"];
var peliculas = ["La verdad duele", "La vida es bella", "Gran torino"];

/*	Metodos vistos:
	push: agrega un elemento al final del array
	pop: elimina el ultimo elemento del array
	splice: mediante un indice elimina a partir de ese elemento en adelante (o la cantidad indicada en el 2do arg)
	join: usa los elementos de un array para hacer un string (los elementos separados por comas)
	split: usa un string para convertirlo en un array (el arg es el delimitador que separara los elementos)
	sort: ordena alfabeticamente los elementos del array (si son numeros, especificar con un callback)
	reverse: invierte el orden de los elementos del array
*/

console.log(typeof categorias);

var cine = [categorias, peliculas];

console.log(typeof cine);
console.log(cine);

console.log(cine[0]);
console.log(cine[0][1]);
console.log(cine[1][2]);
console.log(cine[1][4]);	// undefined

// Agregar y eliminar elementos al final de un array
console.log("************************");

var elemento = prompt("Introduce tu pelicula: ", "TERMINAR");
while(elemento != "TERMINAR") {
	peliculas.push(elemento);
	elemento = prompt("Introduce tu pelicula: ", "TERMINAR");
}

console.log(peliculas);
peliculas.pop();	// NO recibe argumento ya que solo elimina el elemento final del array
console.log(peliculas);

// Eliminar un elemento especifico de un array
console.log("************************");
var indice = peliculas.indexOf("Gran torino");
if(indice > -1) {
	peliculas.splice(indice, 1);	// a partir del indice borra tantos elementos como se indiquen en adelante
	peliculas.splice(indice);		// borraria todas las peliculas desde el indice indicado en adelante
}
console.log(peliculas);

// Convertir un array a string con sus elementos separados por comas
var peliculas_string = peliculas.join();
console.log(peliculas_string);	// La verdad duele,La vida es bella

// Convertir de un string en elementos de un array todo lo que este separado por un determinado argumento delimitador
var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");
console.log(cadena_array);

// Ordenar un array alfabeticamente
var masPeliculas = ["b", "c", "e", "a", "d", 2]
console.log(masPeliculas);
masPeliculas.sort();
console.log(masPeliculas);	// (6) [2, "a", "b", "c", "d", "e"]

// Orden inverso al que tiene el array
masPeliculas = ["b", "c", "e", "a", "d", 2]
console.log(masPeliculas);
masPeliculas.reverse();
console.log(masPeliculas);	// (6) [2, "d", "a", "e", "c", "b"]