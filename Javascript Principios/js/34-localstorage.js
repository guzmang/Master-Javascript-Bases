'use strict'

// Local Storage: guardar informacion en el navegador web a modo de sesion y que
// la misma persista y este disponible durante la navegacion de las distintas
// paginas de la app. Es una memoria en el navegador.

// Cada pagina tiene un local storage diferente. Se puede ver en:
// Inspeccionar elemento -> Application -> Local Storage (a la izq)

// Comprobar si el local storage esta disponible
// (Si utilizamos un browser muy antiguo, no vamos a tener compatibilidad con el mismo)
if(typeof(Storage) !== "undefined") {
	console.log(Storage);
	console.log(typeof(Storage));
	console.log("Localstorage disponible.");
} else {
	console.log("Incompatible con Localstorage.");
}

console.log("Objeto localStorage");
console.log(localStorage);

// Guardar datos (key-value) en el navegador en el local storage
localStorage.setItem("titulo", "Curso de Symfony de Victor Robles");

// Recuperar elemento
console.log(localStorage.getItem("titulo"));
//document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo"); // elimina el h2
document.querySelector("#peliculas").append(localStorage.getItem("titulo"));

// Guardar un objeto JSON
// va a ser necesario convertir los datos en string, sino no se almacena bien
// ya que en string se envian los datos via http y se guardan en el local storage
var usuario = {
	nombre: "Victor Robles",
	email: "victor@victor.com",
	web: "victorroblesweb.es"
};

console.log("Objeto JSON para convertir un JSONString");
console.log(JSON);

localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar objeto
// Sera necesario convertir de JSONString a un objeto JS, sino solo obtendre un String
console.log(localStorage.getItem("usuario"));

var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);
document.querySelector("#datos").append(userjs.web + " - " + userjs.nombre);

// Eliminar un objeto del local storage
localStorage.removeItem("usuario");

// Eliminar TODO el local storage
localStorage.clear();

// NOTA: como el codigo se ejecuta de arriba a abajo, vere como la pagina carga pero el ls estara vacio