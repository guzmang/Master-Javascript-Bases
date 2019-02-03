'use strict'

// ALERTA
alert("Esta es mi alerta!!");
alert("Esta es mi alerta!!");

// CONFIRMACION
var mi_resultado = confirm("¿Estas seguro de querer continuar?");
console.log(mi_resultado);	// aceptar -> true, cancelar -> false

// INGRESO DATOS
var mi_resultado = prompt("¿Que edad tienes?", 18);	// 1er arg: pregunta, 2do arg: valor por defecto
console.log(typeof mi_resultado);	// lo ingresado es un string, se debe usar parseInt para operaciones mat.