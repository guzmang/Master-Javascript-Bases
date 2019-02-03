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
		var edad = parseInt(document.querySelector("#edad").value);

		if(nombre.trim() == null || nombre.trim().length == 0) {
			alert("El nombre no es valido.");
			estilizarYMostrar("errorNombre", "El nombre no es valido.");
			return false;
		} else {
			document.querySelector("#errorNombre").style.display = "none";
		}

		if(apellidos.trim() == null || apellidos.trim().length == 0) {
			alert("Los apellidos no son validos.");
			estilizarYMostrar("errorApellidos", "Los apellidos no son validos.");
			return false;
		} else {
			document.querySelector("#errorApellidos").style.display = "none";
		}

		if(edad == null || edad <= 0 || isNaN(edad)) {
			alert("La edad no es valida.");
			estilizarYMostrar("errorEdad", "La edad no es valida.");
			return false;
		} else {
			document.querySelector("#errorEdad").style.display = "none";
		}

		boxDashed.style.display = "block";

		var pNombre = document.querySelector("#pNombre span");
		var pApellidos = document.querySelector("#pApellidos span");
		var pEdad = document.querySelector("#pEdad span");

		pNombre.innerHTML = nombre;
		pApellidos.innerHTML = apellidos;
		pEdad.innerHTML = edad;
	});

	function estilizarYMostrar(id, mje) {
		document.querySelector("#" + id).innerHTML = mje;
		document.querySelector("#" + id).style.color = "red";
		document.querySelector("#" + id).style.fontWeight = "900";
		document.querySelector("#" + id).style.display = "block";
	}

});