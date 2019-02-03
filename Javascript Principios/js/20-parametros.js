'use strict'

// Parametros REST y SPREAD

// REST: Capturo un numero indefinido de parametros en un array
function listadoDeFrutas(fruta1, fruta2, ...restoDeFrutas) {
	console.log("Fruta 1: ", fruta1);
	console.log("Fruta 2: ", fruta2);
	console.log(restoDeFrutas);
}

console.log("Usando REST");
listadoDeFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");

// SPREAD: Envio los parametros en un array
console.log("Usando SPREAD");
var frutas = ["Naranja", "Manzana"];
listadoDeFrutas(...frutas, "Sandia", "Pera", "Melon", "Coco");

// MAL USO DE SPREAD: Envio el parametro sin los "..."
console.log("Error en SPREAD, parametro sin '...'");
var frutas = ["Naranja", "Manzana"];
listadoDeFrutas(frutas, "Sandia", "Pera", "Melon", "Coco");