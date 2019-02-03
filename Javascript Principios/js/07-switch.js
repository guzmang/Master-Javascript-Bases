'use strict'

// Switch

var edad = 45;
var imprime = "";

switch(edad) {
	case 18:
		imprime = "Acabas de cumplir la mayoria de edad.";
		break;
	case 25:
		imprime = "Ya eres un adulto.";
		break;
	case 40:
		imprime = "Crisis de los 40.";
		break;
	case 75:
		imprime = "Eres ya un anciano.";
		break;
	default:
		imprime = "Tu edad es neutra.";
		break;
}

console.log(imprime);