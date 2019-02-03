// funcion normal en JS
function getNumero(numero) {
    if (numero === void 0) { numero = 12; }
    return "El numero es: " + numero;
}
console.log(getNumero());
console.log(getNumero(55));
// funcion TS
function getNumber(numero) {
    if (numero === void 0) { numero = 12; }
    return "El numero es: " + numero;
}
console.log(getNumber());
console.log(getNumber(55));
