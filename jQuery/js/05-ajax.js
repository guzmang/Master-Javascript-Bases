// Las peticiones AJAX nos permiten obtener resultados de manera dinamica sin necesidad de que la pagina
// actualice, solo actualizamos una porcion de ella cargando la informacion (un trozo de html o json).

$(document).ready(function() {

	// Metodo Load: permite hacer peticion AJAX por get e incrustar el resultado en un DIV u otro elemento html.

//	$("#datos").load("https://reqres.in/");
	// NOTA: al incrustar todo el html hay cosas que no va a cargar (los estilos css por ej).

	// Metodo Get

	// 2do arg: funcion de callback que le diga que hacer con la informacion obtenida anteriormente como resultado.

	$.get("https://reqres.in/api/users?page=2", function(response) {
		console.log(response);
	});

	// 2do arg: le puedo pasar un JSON con los datos que necesite la pag (nombre-valor).
	// 3er arg: funcion de callback que le diga que hacer con la informacion obtenida anteriormente como resultado.

	$.get("https://reqres.in/api/users", {page: 3}, function(response) {
		console.log(response);
		response.data.forEach((elemento, index) => {
			$("#datos").append("<p>" + elemento.first_name + " " + elemento.last_name + "</p>");
		});
	});

	// Metodo Post 
	// (creo un usuario y, al ir por post, ira por otra via almacenando y devolviendo resultado OK).

	var usuario = {
		name: "Victor Robles",
		web: "https://victorroblesweb.es"
	}

	$.post("https://reqres.in/api/users", usuario, function(response) {
		console.log(response);
	});

	$("#formulario1").submit(function(e) {
		// enviamos el evento como arg para cancelar que nos redirija de pag ni bien agregamos usuario.
		e.preventDefault();

		var user = {
			name: $("input[name='name1']").val(),
			web: $("input[name='web1']").val()
		}

		console.log("Usuario: ", user);

		$.post($(this).attr("action"), user, function(response) {
			console.log("Response: ", response);
		}).done(function() {			// si la peticion termina satisfactoriamente se ejecuta este metodo done.
			alert("Usuario añadido correctamente.");
		});

		// para que el form no haga la accion por defecto que tiene preconfigurada (redirigir).
//		return false;
	});

	// Metodo ajax
	// nos permite manipular de manera mas amplia cualquier peticion AJAX (arg JSON como configuracion del metodo)

	$("#formulario2").submit(function(e) {
		// enviamos el evento como arg para cancelar que nos redirija de pag ni bien agregamos usuario.
		e.preventDefault();

		var miembro = {
			name: $("input[name='name2']").val(),
			web: $("input[name='web2']").val()
		}

		console.log("Usuario: ", miembro);

		// dataType y contentType no siempre hacen falta

		$.ajax({
			type: "POST",						// tipo de peticion
			dataType: "json",					// tipo de dato que voy a enviar o recibir (HTML, JSON, etc)
//			contentType: "application/json",	// en que formato van a viajar los datos
			url: $(this).attr("action"),		// url a la cual le vamos a hacer la peticion AJAX
			data: miembro,						// parametros/objetos que vamos a estar enviando
			timeout: 2000,						// tiempo que le doy para ejecutarse

			// otros metodos que se ejecutan en un determinado momento (hay mas y no hacen falta usar todos)

			beforeSend: function() {							// antes de que se envie hace alguna accion
				console.log("Enviando usuario...");
			},
			complete: function() {								// se ejecuta siempre, falle o no
				console.log("Se ha completado la operacion.");
			},
			success: function(response) {						// se ejecuta en caso de exito
				console.log(response);
			},
			error: function() {									// cuando ocurre un error (si supera el timeout)
				console.log("Ha ocurrido un error.");
			}
		});

	});

});