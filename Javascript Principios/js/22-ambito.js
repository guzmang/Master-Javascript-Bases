'use strict'

function holaMundo(texto) {
	var hola_mundo = "Texto dentro de funcion.";

	console.log(texto);
	console.log(numero.toString());
	console.log(typeof numero.toString());
	console.log(numero);
	console.log(typeof numero);
	console.log(hola_mundo);
}

var numero = 12;
var texto = "Hola mundo soy una variable global.";
holaMundo(texto);

// Esto no funciona ya que la vble hola_mundo es local y no tiene alcance aca
// console.log(hola_mundo);