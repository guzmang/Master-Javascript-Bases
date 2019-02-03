// string
let cadena: string = "victorroblesweb.es";

// number
let numero: number = 12;

// booleano
let verdadero_falso: boolean = true;

// any
let cualquiera: any = "hola";
cualquiera = 77;

// arrays
var lenguajes: Array<string> = ["PHP", "JS", "CSS"];
var mix: Array<any> = ["PHP", "JS", "CSS", 12];

// arrays: otra forma de definirlo
let years: number[] = [12, 13, 14];
let mix2: any[] = ["DOCE", 13, 14];

// Multiples tipos de datos
let multiple: string | number = "victorroblesweb.es";
multiple = 44;

// Crear tipos de datos personalizados
type alfanumerico = string | number;	// creo un alias (con type) y le indico que tipos de datos va a permitir
let alfanum: alfanumerico = "www.google.com";
alfanum = 45;

// let vs var
var numero1 = 10;
var numero2 = 12;

if(numero1 == 10) {
	let numero1 = 44;
	var numero2 = 55;

	console.log(numero1, numero2);
}

console.log(numero1, numero2);

console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, mix, years, mix2, multiple, alfanum);