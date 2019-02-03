// Cada vez que utilizamos jQuery lo 1ro que hay que hacer es comprobar si el documento esta listo
// Usamos el selector document que refiere a toda la pag y sus scripts cuando estan cargados
// El $ siempre refiere al objeto jQuery

$(document).ready(function() {		// evento ready
	console.log("jQuery y la web cargados...");		// jQuery y script cargados

	// Selector de ID
	var rojo = $("#rojo").css("background", "red")	// Modifico cualquier prop css con 2 args clave-valor
						 .css("color", "white");	// Puedo encadenar las llamadas a los metodos que hacen
						 							// todavia hacen referencia al elemento seleccionado
	$("#amarillo").css("background", "yellow")
				  .css("color", "gray");

	$("#verde").css("background", "green")
			   .css("color", "white");

	console.log(typeof(rojo));
	console.log(rojo);

	// Selectores de clases
	var miClase = $(".zebra");		// agarro todos los elementos con esa clase
	console.log(miClase);			// array de elementos con esa clase
	console.log(miClase[0]);		// muestra el elemento de esa posicion
	console.log(miClase.eq(1));		// seleccionado de esta forma tengo elementos jQuery adjuntos
	miClase.css("padding", "5px");	// le doy un padding a todos los elementos con clase zebra

	$(".sinBorde").click(function() {	// agrego un avento a todos los elementos de clase sinBorde
		console.log("Click dado!!");
		$(this).addClass("zebra");		// el elemento reacciona agregandose la otra clase zebra con un click
	});

	// Selectores de etiqueta
	var parrafos = $("p").css("cursor", "pointer");	// le agrego la mano cuando paso el cursor del mouse

	parrafos.click(function() {
		/*
		if($(this).hasClass("zebra")) {
			$(this).addClass("grande");
		}
		*/

		var that = $(this);	// optimizamos la carga y velocidad ya que accederiamos al dom una sola vez con $
		if(!that.hasClass("grande")) {
			that.addClass("grande");
		} else {
			that.removeClass("grande");
		}
	});

	// Selectores de atributo
	$("[title='Google']").css("background", "#ccc");
	$("[title='Facebook']").css("background", "blue");

	// Otros
	//$("a, p").addClass("margen-superior");	// selecciono enlaces y parrafos en una sola llamada jQuery

	// Metodo find
	// si no sabemos donde estan los elementos ni donde se ubican dentro del div
	var busqueda = $("#caja").find(".resaltado");	// busca elementos con esa clase en el div
	console.log(busqueda);

	// otra forma (solo para este caso porque sabemos donde estan)
	busqueda = $("#caja .resaltado");
	console.log(busqueda);

	// Metodo parent
	// si quiero moverme por arriba de donde me encuentro
	busqueda = $("#caja .resaltado").eq(0).parent()	// me paro sobre li
										  .parent()	// me paro sobre el div
										  .parent()	// me paro sobre el body
										  .find("[title='Google']");	// encuentro el elemento con ese atributo
	console.log(busqueda);

	busqueda = $("#elemento3").parent().parent().find(".resaltado");
	console.log(busqueda);

});

jQuery(document).ready(function() {		// $(selector).metodo o jQuery(selector).metodo
	console.log("jQuery y la web cargados...");		// jQuery y script cargados
});