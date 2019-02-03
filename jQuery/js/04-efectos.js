$(document).ready(function() {

	$("#mostrar1").hide();
	$("#mostrar2").hide();
	$("#mostrar3").hide();
	$("#mostrar4").hide();

	// Efecto reducir-agrandar
	$("#mostrar1").click(function() {
		$(this).hide();
		$("#ocultar1").show();
		$("#caja1").show("fast");			// puede ser "normal", "slow" o en ms
	});

	$("#ocultar1").click(function() {
		$(this).hide();
		$("#mostrar1").show();
		$("#caja1").hide("fast");
	});

	// Efecto fundido
	$("#mostrar2").click(function() {
		$(this).hide();
		$("#ocultar2").show();
		$("#caja2").fadeIn("normal");		// puede ser "fast", "slow" o en ms
	});

	$("#ocultar2").click(function() {
		$(this).hide();
		$("#mostrar2").show();
		$("#caja2").fadeOut("normal");
	});

	// Efecto fundido con opacidad
	$("#mostrar3").click(function() {
		$(this).hide();
		$("#ocultar3").show();
		$("#caja3").fadeTo("slow", 0.8);	// 2do arg: 1 es el max para mostrar y 0 para ocultar
	});

	$("#ocultar3").click(function() {
		$(this).hide();
		$("#mostrar3").show();
		$("#caja3").fadeTo("slow", 0.2);
	});

	// Efecto desplegar
	$("#mostrar4").click(function() {
		$(this).hide();
		$("#ocultar4").show();
		$("#caja4").slideDown(2000);		// puede ser "fast", "normal" o "slow"
	});

	$("#ocultar4").click(function() {
		$(this).hide();
		$("#mostrar4").show();
		$("#caja4").slideUp(2000, function() {	// 2do arg (opc): funcion que se ejecuta cdo termina la animacion
			console.log("Cartel ocultado.");
		});
	});

	// Toggle
	$("#todoEnUno").click(function() {
//		$(this).text("Cerrar");
//		$("#caja5").toggle("fast");			// Efecto reducir-agrandar
//		$("#caja5").fadeToggle("fast");		// Efecto fundido
		$("#caja5").slideToggle("fast");	// Efecto desplegar
	});

	// Animaciones de css
	$("#animar").click(function() {
		// 1er arg: JSON, 2do arg: velocidad
		$("#caja6").animate({
								marginLeft: "500px",
								fontSize: "40px",
								height: "110px"
							}, "slow")					// puedo encadenar mas animaciones
				   .animate({
				   				borderRadius: "900px",
				   				marginTop: "80px"
				   			}, "slow")
				   .animate({
				   				borderRadius: "0px",
				   				marginLeft: "0px"
				   			}, "slow")
				   .animate({
				   				borderRadius: "100px",
				   				marginTop: "15px"
				   			}, "slow")
				   .animate({
								marginLeft: "500px",
								fontSize: "40px",
								height: "110px"
							}, "slow", function() {console.log("Ciclo completo")});		// 3er arg opcional
	});

});