'use strict'

window.addEventListener("load", function() {
	console.log("DOM cargado!!");

	var formulario = document.querySelector("#formulario");
	var boxDashed = document.querySelector(".dashed");
	boxDashed.style.display = "none";

	// Sobre el formulario capturo el evento submit
	formulario.addEventListener("submit", function() {
		console.log("Evento submit capturado.");

		var nombre = document.querySelector("#nombre").value;
		var apellidos = document.querySelector("#apellidos").value;
		var edad = document.querySelector("#edad").value;

		boxDashed.style.display = "block";

		// Opcion 1 (formulario.html)
		
		console.log(nombre, apellidos, edad);
		var datosUsuario = [nombre, apellidos, edad];

		var lowChild = boxDashed.lastChild;

		while(lowChild.nodeName == "P"){
			boxDashed.removeChild(lowChild);
			lowChild = boxDashed.lastChild;
		}

		for(let indice in datosUsuario) {
			var parrafo = document.createElement("p");
			parrafo.append(datosUsuario[indice]);
			boxDashed.append(parrafo);
		}
		
	});

});