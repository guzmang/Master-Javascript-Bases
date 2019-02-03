$(document).ready(function() {

	// MouseOver (mouse encima de un elemento) y MouseOut (mouse saliendo del elemento)
	var caja = $("#caja");

	/*
	caja.mouseover(function() {
		$(this).css("background", "red");
	});

	caja.mouseout(function() {
		$(this).css("background", "green");
	});
	*/

	function cambiaRojo() {
		$(this).css("background", "red");
	}

	function cambiaVerde() {
		$(this).css("background", "green");
	}

	// Hover (evento mas optimo para hacer lo anterior)
	caja.hover(cambiaRojo, cambiaVerde);

	// Click, Doble Click
	caja.click(function() {
		$(this).css("background", "blue")
			   .css("color", "white");
	});

	caja.dblclick(function() {
		$(this).css("background", "pink")
			   .css("color", "yellow");
	});

	// Focus y Blur
	var nombre = $("#nombre");
	var datos = $("#datos");

	nombre.focus(function() {
		$(this).css("border", "2px solid green");
		datos.hide();								// Es lo mismo que hacer $("#datos").css("display", "none");
	});

	nombre.blur(function() {
	//	$(this).css("border", "2px solid transparent");
	//	$(this).css("border", "1px solid #ccc");
		$(this).css("border", "");				// Vuelve al valor por default
		datos.text($(this).val()).show();		// El metodo val toma el valor y text lo pega
	});

	// MouseDown y MouseUp
	datos.mousedown(function() {				// Al presionar el boton del mouse
		$(this).css("border-color", "gray");
	});

	datos.mouseup(function() {					// Al soltar el boton del mouse
		$(this).css("border-color", "black");
	});

	// MouseMove (captura el evento de movimiento del raton)
	$(document).mousemove(function() {
		// Coordenadas del cursor del mouse
		console.log("(X, Y): (" + event.clientX + ", " + event.clientY + ")");
		// Circulo que sigue al cursor
		$("#sigueme").css("left", event.clientX)
					 .css("top", event.clientY);
		// Ocultar el cursor del mouse
		$("body").css("cursor", "none");
	});

});