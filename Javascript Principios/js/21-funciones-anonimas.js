'use strict'

// Funciones anonimas
// Es una funcion que no tiene nombre

var pelicula = function(nombre) {
	return "La pelicula es: " + nombre;
}

console.log(pelicula("pelicula"));

// Callback
// Una funcion que no tiene nombre y se pasa como parametro a otra funcion

// 3er y 4to args: Funciones de callback
function sumame(numero1, numero2, sumaYMuestra, sumaPorDos) {
	var sumar = numero1 + numero2;

	sumaYMuestra(sumar);
	sumaPorDos(sumar);

	return sumar;
}

sumame(5, 7, function(dato) {
				console.log("La suma es:", dato);
			},
			function(dato) {
				console.log("La suma por dos es:", (dato * 2));
			}
);

// Funciones flecha
// Al momento de usar callbacks, podemos reemplazar la palabra function por una flecha "=>"
// Si solo tenemos un parametro, no hacen falta parentesis

sumame(5, 7, dato => {
				console.log("La suma es:", dato);
			},
			dato => {
				console.log("La suma por dos es:", (dato * 2));
			}
);