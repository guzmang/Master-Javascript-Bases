$(document).ready(function() {

	var link = $("#addLink");

	reloadLinks();

	$("#addButton")
		// Remover un atributo
		.removeAttr("disabled")
		.click(function() {

		// Incrusto contenido html en el elemento borrando todo su interior (mal usado aca)
//		$("#menu").html("<li><a href='" + $("#addLink").val() + "'></a></li>");

		// Agrega antes del propio elemento que estoy seleccionando (fuera del menu)
//		$("#menu").before("<li><a href='" + $("#addLink").val() + "'></a></li>");

		// Añade al principio de la lista
//		$("#menu").prepend("<li><a href='" + link.val() + "'></a></li>");

		// Añade al final de la lista
		$("#menu").append("<li><a href='" + $("#addLink").val() + "'></a></li>");

		// Agrega despues del propio elemento que estoy seleccionando (fuera del menu)
//		$("#menu").after("<li><a href='" + $("#addLink").val() + "'></a></li>");

		// Borrar el contenido del input una vez hecho click
		link.val("");

		reloadLinks();
	});

});

function reloadLinks() {

	// Cantidad de enlaces en la web
	var links = $("a");
	console.log(links.length);

	links.each(function(index) {
		var that = $(this);
		var enlace = that.attr("href");		// Conseguir el texto de un atributo

		console.log(that);

		// Los enlaces que hay en la web
		console.log(enlace);

		// Copio los enlaces en la web
		that.text(enlace);

		// Agrego un atributo a un enlace
		that.attr("target", "_blank");
	});

}