'use strict'

// fetch es un metodo que nos permite hacer peticiones ajax de una forma mas simple que en JS
// Peticion ajax: una llamada a un servicio REST, a una API REST o back end (be) que devuelve resultado

// Servicio rest de prueba https://jsonplaceholder.typicode.com/
// Este servicio recibe un JSON o informacion y nos devuelve otra info en JSON

// Ej: sacar resultados que hay guardados en una BD de prueba de ese servicio
// Desde JS se puede consultar unos datos (un objeto JSON que me devuelve el be por ej) y traerlos al fe con JS,
// es decir puedo consumir un servicio/api que esta en la nube o be de un programa
// API REST: servicio o backend que nos devuelve datos en JSON, recibe peticiones post, put, get, delete

// Cuando usar promesas?
// Cuando hay que leer un archivo, enviar cosas por post, enviar o recibir cosas por ajax

var divUsuarios = document.querySelector("#usuarios");
var divProfesor = document.querySelector("#profesor");
var divJanet = document.querySelector("#janet");

// Fetch (ajax) y peticiones a servicios/apis rest
fetch("https://jsonplaceholder.typicode.com/users") // URL que devuelve un objeto JSON, esto es una promesa
	.then(function(data) {			// es lo mismo que el paso siguiente que se hace con callback
		console.log(data);
		console.log(typeof(data));
		return data.json();			// recibo data y convierto objeto a JSON
	})
	.then(data => {					// la promesa queda a la espera de otro then
		console.log(data);
	});

// Patron Promise Chaining
getUsuarios()
	.then(data => data.json())
	.then(users => {
		console.log(users.data);
		listadoUsuarios(users.data);
		return getInfo();	// despues del listado de usuarios quiero que me haga esta promesa
	})	// encadeno otro then y capturo la promesa anterior (no hago callbacks ahi asi evito el callback hell)
	.then(data => {
		console.log(data);
		divProfesor.innerHTML = data;
		return getJanet();
	})
	.then(data => data.json())	// una vez que tengo el usuario capturo los datos que me devuelve la peticion
	.then(janet => {	// muestro el usuario Janet
		console.log(janet.data);
		mostrarJanet(janet.data);
	})
	.catch(error => {	// capturo errores y excepciones que ocurren en el codigo
		alert("Error en las peticiones.");	// ej: si no tengo internet, la url esta mal o el servicio esta caido
		console.log(error, "Ha ocurrido un error.");
	});

function getUsuarios() {
	// fetch accede a unos datos remotos (en un servicio remoto) con una peticion
	return fetch("https://reqres.in/api/users");
}

function getJanet() {	// el usuario se llama Janet
	return fetch("https://reqres.in/api/users/2");
}

// Crear una promesa
function getInfo() {
	var profesor = {
		nombre: "Victor",
		apellidos: "Robles",
		url: "https://victorroblesweb.es"
	}

	// si lo resuelve correctamente devuelve resolve, caso contrario reject
	return new Promise((resolve, reject) => {
		var profesorString = "";

		// tarda 3 segs en ejecutarse
		setTimeout(function() {
			profesorString = JSON.stringify(profesor);

			if(typeof(profesorString) != "string" || profesorString == "")
				return reject("error");

			return resolve(profesorString);

		}, 3000);

	});
}

function listadoUsuarios(usuarios) {
	usuarios.map((user, index) => {
		let nombre = document.createElement("h4");
		nombre.innerHTML = index + ". " + user.first_name + " " + user.last_name;
		divUsuarios.append(nombre);
		document.querySelector(".loading").style.display = "none";
	});
}

function mostrarJanet(janet) {
	let nombre = document.createElement("h5");
	let avatar = document.createElement("img");

	nombre.innerHTML = janet.first_name + " " + janet.last_name;
	avatar.src = janet.avatar;
	avatar.width = "100";
	
	divJanet.append(nombre);
	divJanet.append(avatar);
	document.querySelector("#janet .loading").style.display = "none";
}

var fetchCont = fetch("https://jsonplaceholder.typicode.com/users");
console.log(fetchCont);
console.log(fetch);