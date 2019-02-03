'use strict'

// setInterval: ejecuta una funcion de callback o una porcion de codigo cada x milisegundos.
// setTimeout: se ejecuta solamente una vez y nada mas.

window.addEventListener("load", function() {

	// Timers
/*	var tiempo = setInterval(function() {
		console.log("Set interval ejecutado.");

		var encabezado = document.querySelector("h1"); // elige el primer h1 que encuentra
		if(encabezado.style.fontSize == "50px") {
			encabezado.style.fontSize = "30px";
		} else {
			encabezado.style.fontSize = "50px";
		}
	}, 1000);*/

/*	var tiempo = setTimeout(function() {
		console.log("Set timeout ejecutado.");

		var encabezado = document.querySelector("h1"); // elige el primer h1 que encuentra
		if(encabezado.style.fontSize == "50px") {
			encabezado.style.fontSize = "30px";
		} else {
			encabezado.style.fontSize = "50px";
		}
	}, 3000);*/

	var frecuencia;

	function intervalo() {
		frecuencia = setInterval(function() {
			console.log("Set interval ejecutado.");

			var encabezado = document.querySelector("h1"); // elige el primer h1 que encuentra
			if(encabezado.style.fontSize == "50px") {
				encabezado.style.fontSize = "30px";
			} else {
				encabezado.style.fontSize = "50px";
			}
		}, 1000);
	}

	var tiempo = intervalo();

	var stop = document.querySelector("#stop");

	stop.addEventListener("click", function() {
		alert("Has parado el intervalo en bucle.");
		clearInterval(frecuencia);	// paso como parametro la vble que contiene setInterval
	});

	var start = document.querySelector("#start");

	start.addEventListener("click", function() {
		alert("Has iniciado el intervalo en bucle.");
		intervalo();
	});

});