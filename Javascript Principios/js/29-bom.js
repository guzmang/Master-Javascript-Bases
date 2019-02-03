'use strict'

// BOM - Browser Object Model
/* Wikipedia
	El Modelo de objetos del navegador es una convención específica del navegador que hace referencia a todos
	los objetos expuestos por el navegador web.
*/

// estas son algunas funciones del bom, se pueden hacer muchas mas (todo lo que hace un navegador)

// Tamaño que tiene la ventana del navegador
function getBom() {
	// me dicen tamaño actual de la pantalla (reducido si la consola esta abierta o si la ventana esta sin maximizar)
	console.log(window.innerWidth);
	console.log(window.innerHeight);	// si la consola del browser esta abierta, la altura sera mas pequeña

	// propiedades del browser que conocen el tamaño de la pantalla al maximo
	console.log(screen.width);
	console.log(screen.height);

	// url actual en la que estamos, la que el browser tiene cargada
	console.log(window.location);	// devuelve un vector
	console.log(window.location.href);
}

// creamos funcion para redirigir
// si en la consola escribimos: redirect("https://www.google.com");
// iremos a la pagina indicada en el string dejando atras la pagina donde estabamos (usa la misma pestaña)
function redirect(url) {
	window.location.href = url;
}

// creamos funcion para abrir un pop up
// si en la consola escribimos: abrirPopUp("https://www.google.com");
// iremos a la pagina indicada en el string abriendola en un pop up
function abrirPestania(url) {
	window.open(url);
}

function abrirPopUp(url) {
	window.open(url, "", "width=400, height=300");
}

getBom();
