$(document).ready(function() {

	// Mover elemento por la pagina
	$(".elemento").draggable();
	$("#elemento-movido").draggable();

	// Redimensionar elementos
	$(".elemento").resizable();

	// SOLO puedo usar el selectable o el sortable

	// Seleccionar elementos (la funcionalidad es sobre la lista y busca los li dentro)
//	$(".lista-seleccionable").selectable();

	// Ordenar elementos
	$(".lista-seleccionable").sortable({			// dentro de cada metodo tengo un JSON de propiedades
		update: function(event, ui) {				// esta prop ejecuta una funcion cada vez que cambia la lista
			console.log("Ha cambiado la lista.");
			console.log(event);
			console.log(ui);
		}
	});

	// Drop
	$("#area").droppable({
		drop: function(event, ui) {
			console.log("Has soltado algo dentro del area.");
			console.log(event);
			console.log(ui);
		}
	});

	// Efectos, puedo pasarle opciones en un JSON (propiedades de altura, tamaño, etc) y velocidad
	$("#mostrar").click(function() {

//		$(".caja-efectos").toggle("fade");
//		$(".caja-efectos").fadeToggle();

		// propios de jQuery UI
//		$(".caja-efectos").toggle("explode");
//		$(".caja-efectos").toggle("blind");		// mueve de arriba a abajo
//		$(".caja-efectos").toggle("slide");		// mueve de izq a der
//		$(".caja-efectos").toggle("drop");		// mueve de izq a der con un degradado
//		$(".caja-efectos").toggle("fold");
//		$(".caja-efectos").toggle("puff");
//		$(".caja-efectos").toggle("scale");
		$(".caja-efectos").toggle("shake", 2000);

	});

	// Tooltip (lo puedo aplicar en elementos seleccionados o todos los del documento)
	// pagina para descargar mas: http://iamceege.github.io/tooltipster/
	$(document).tooltip();

	// Dialog
	$("#lanzar-popup").click(function() {
		$("#popup").dialog();	// aparece un "close" porque la x tiene un title activado por tooltip mas arriba
	});

	// Calendario/Datepicker
	$("#calendario").datepicker({
		dateFormat: 'dd-mm-yy'			// puedo usar tambien / en vez de -
	});

	// Pestañas/Tabs
	$("#pestanas").tabs();

});