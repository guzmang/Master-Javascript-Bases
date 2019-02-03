'use strict'

// DOM - Document Object Model (API, arbol de todos los elementos que hay dentro de una pagina web a nivel HTML)
/* Wikipedia
	Document Object Model o DOM es esencialmente una interfaz de plataforma que proporciona un conjunto estándar
	de objetos para representar documentos HTML, XHTML y XML, ​ un modelo estándar sobre cómo pueden combinarse 
	dichos objetos, y una interfaz estándar para acceder a ellos y manipularlos.
*/

// puedo abrir la consola y usar esta funcion
// ej: cambiaColor("green");
function cambiaColor(color) {
	caja.style.background = color;
}

// Conseguir elementos con un ID concreto

//var caja = document.getElementById("miCaja");			// obtengo el elemento

// Query selector (el argumento funciona como en CSS)
// sin ningun prefijo en el nombre selecciono la etiqueta
// el # + nombre selecciono un id
// el . + nombre selecciono una clase
var caja = document.querySelector("#miCaja");

console.log(caja);			// <div id="miCaja">¡Hola, soy una caja!</div>
console.log(typeof caja);	// tipo object

var texto = document.getElementById("miCaja").innerHTML;		// obtengo el texto dentro del elemento
console.log(texto);			// ¡Hola, soy una caja!
console.log(typeof texto);	// tipo string

// añandiendo propiedades al elemento
caja.innerHTML = "¡TEXTO EN LA CAJA DESDE JS!";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola hola2";	// agrego 2 clases

// Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName("div");
console.log(todosLosDivs);
console.log(typeof todosLosDivs);

// la diferencia entre textContent e innerHTML es que con el primero obtengo el texto
// pero con el segundo ademas de obtenerlo tambien puedo modificarlo
var contenidoEnTexto = todosLosDivs[2].textContent;
todosLosDivs[2].style.background = "red";
console.log(contenidoEnTexto);

todosLosDivs[2].innerHTML = "Otro texto para el segundo elemento";
console.log(todosLosDivs[2].innerHTML);

// Creo elementos dentro del HTML desde JS
var seccion = document.querySelector("#miSeccion");
var hr = document.createElement("hr");

seccion.prepend(hr);

// un forEach no me serviria porque si bien aplica a arrays, no sirve para HTMLCollection
// todosLosDivs.forEach((valor, indice) => {
for(let valor in todosLosDivs) {
//	console.log("valor");
//	console.log(valor);
	if(typeof todosLosDivs[valor].textContent == "string") {
		var parrafo = document.createElement("p");	//	se pasa la etiqueta del elemento a crear
		var texto = document.createTextNode(todosLosDivs[valor].textContent);
		parrafo.appendChild(texto);
		seccion.appendChild(parrafo);
	}
}
// });

// NO puedo reutilizar hr ya que borraria la linea utilizada en prepend
seccion.append(document.createElement("hr"));

// Conseguir elementos por su clase css
var divsRojos = document.getElementsByClassName("rojo");
var divsAmarillos = document.getElementsByClassName("amarillo");

console.log(divsRojos);
console.log(divsAmarillos);

divsAmarillos[0].style.background = "yellow";

for (let div in divsRojos) {
	if(divsRojos[div].className == "rojo") {
		divsRojos[div].style.background = "red";
	}
}

// Query selector (SOLO recomendable para buscar por id, ya que si se busca por clase o etiqueta devolvera UN SOLO elemento,
// el primero que encuentre)
var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector(".rojo");
console.log(claseRojo);

var etiqueta = document.querySelector("div");
console.log(etiqueta);

// Query selector all (solventa el caso anterior en el que solo devuelve el primer elemento encontrado, ahora con query
// selector all devuelvo TODOS los elementos encontrado en una NodeList)
claseRojo = document.querySelectorAll(".rojo");
console.log(claseRojo);	// NodeList(2) [div.rojo, div.rojo]

etiqueta = document.querySelectorAll("div");
console.log(etiqueta);	// NodeList(4) [div#miCaja.hola.hola2, div.amarillo, div.rojo, div.rojo]