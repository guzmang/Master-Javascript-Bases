// Interpolacion de variables: ${variable}
// Nota: mes empieza a contar desde cero (enero)

var fecha = new Date();

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();

var hora = (fecha.getHours() < 9) ? "0" + fecha.getHours() : fecha.getHours();
var minutos = (fecha.getMinutes() < 9) ? "0" + fecha.getMinutes() : fecha.getMinutes();
var segundos = (fecha.getSeconds() < 9) ? "0" + fecha.getSeconds() : fecha.getSeconds();
var milisegundos = fecha.getMilliseconds();

var textoFecha = `
	El año es: ${year}
	El mes es: ${mes + 1}
	El dia es: ${dia}
	La hora es: ${hora + ":" + minutos + ":" + segundos}
	Milisegundos: ${milisegundos}
`;

console.log("Tipo fecha: " + typeof(fecha));
console.log(fecha);
console.log(textoFecha);

console.log("Metodo ceil", 5.01, Math.ceil(5.01));		// El mas minimo decimal lo hace redondear hacia arriba
console.log("Metodo round", 5.49, Math.round(5.49));	// Redondea recien hacia arriba a partir de 0.5
console.log("Metodo round", 5.5, Math.round(5.5));