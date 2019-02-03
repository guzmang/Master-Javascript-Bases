// funcion normal en JS

function getNumero(numero = 12) {
	return "El numero es: " + numero;
}

console.log(getNumero());
console.log(getNumero(55));

// funcion TS

function getNumber(numero: number = 12): string {
	return "El numero es: " + numero;
}

console.log(getNumber());
console.log(getNumber(55));