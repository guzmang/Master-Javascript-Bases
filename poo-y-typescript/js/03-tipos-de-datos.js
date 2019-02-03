// string
var cadena = "victorroblesweb.es";
// number
var numero = 12;
// booleano
var verdadero_falso = true;
// any
var cualquiera = "hola";
cualquiera = 77;
// arrays
var lenguajes = ["PHP", "JS", "CSS"];
var mix = ["PHP", "JS", "CSS", 12];
// arrays: otra forma de definirlo
var years = [12, 13, 14];
var mix2 = ["DOCE", 13, 14];
// Multiples tipos de datos
var multiple = "victorroblesweb.es";
multiple = 44;
var alfanum = "www.google.com";
alfanum = 45;
// let vs var
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44;
    var numero2 = 55;
    console.log(numero1_1, numero2);
}
console.log(numero1, numero2);
console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, mix, years, mix2, multiple, alfanum);
