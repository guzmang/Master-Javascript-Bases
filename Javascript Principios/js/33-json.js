'use strict'

//	JSON - JavaScript Object Notation

// propiedad: dato
// Podria tener arrays dentro de un objeto y objetos dentro de un objeto
var pelicula = {
	titulo: "Batman vs Superman",
	year: 2017,
	pais: "Estados Unidos"
};

console.log(pelicula);

pelicula.titulo = "Superman Begins";
console.log(pelicula);

var peliculas = [
	{titulo: "La verdad duele", year: 2016, pais: "Francia"},
	pelicula
];

console.log(peliculas);

var cajaPeliculas = document.querySelector("#peliculas");
for(let index in peliculas) {
	var p = document.createElement("p");
	p.append(peliculas[index].titulo + " - " + peliculas[index].year);
	cajaPeliculas.append(p);
}