'use strict'

// El evento load (se ejecuta cuando todos los elementos del dom y todas las etiquetas ya estan cargadas)

window.addEventListener("load", () => {

	function cambiaColor() {
		var bg = boton.style.background;
		console.log(bg);
		if(bg == "green") {
			boton.style.background = "red";
		} else {
			boton.style.background = "green";
		}
		boton.style.padding = "10px";
		boton.style.border = "1px solid #ccc";
	}

	// Estos eventos esperan como 2do arg una funcion flecha/de callback

	// Eventos de mouse

	var boton = document.querySelector("#boton");
	var boton2 = document.querySelector("#boton2");

	// Click
	boton.addEventListener("click", function(){
		cambiaColor();
		console.log(this);	// this: tengo acceso al objeto sobre el cual se esta aplicando el evento
		this.style.border = "10px solid black";
	});

	// Mouse over
	boton2.addEventListener("mouseover", function() {
		boton2.style.background = "#ccc";
	});

	// Mouse out
	boton2.addEventListener("mouseout", function() {
		boton2.style.background = "white";
	});

	// Eventos de teclado y foco

	var input = document.querySelector("#campoNombre");

	// Focus
	input.addEventListener("focus", function() {
	    console.log("[Focus] Estas dentro del input.");
	});

	// Blur
	input.addEventListener("blur", function() {
	    console.log("[Blur] Estas fuera del input.");
	});

	// Keydown
	input.addEventListener("keydown", function(event) {
	    console.log("[Keydown] Pulsando esta tecla: ", String.fromCharCode(event.keyCode));
	});

	// Keypress
	input.addEventListener("keypress", function(event) {
	    console.log("[Keypress] Tecla presionada: ", String.fromCharCode(event.keyCode));
	});

	// Keyup
	input.addEventListener("keyup", function(event) {
	    console.log("[Keyup] Tecla soltada: ", String.fromCharCode(event.keyCode));
	});

});	// end load