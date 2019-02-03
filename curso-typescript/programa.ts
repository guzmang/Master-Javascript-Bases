// modulo interno con sus clases
// exporto las clases que yo quiera usar fuera del modulo
module Tienda {
	export class Ropa {
		constructor(public nombre: string) {
			alert(nombre);
		}
	}

	export class Informatica {
		constructor(public nombre: string) {
			alert("Tienda de tecnologia: " + nombre);
		}
	}
}

// importar clase fuera del modulo
import Informatica = Tienda.Informatica;
let cargar_informatica = new Informatica("supertienda");

// En la clase donde utilicemos el decorador arranque le vamos a añadir un nuevo
// metodo que se va a llamar lanzamiento.
function arranque(lanzar: string) {
	return function(target: Function) {
		target.prototype.lanzamiento = function(): void {
			alert(lanzar);
		}
	}
}

@arranque('Hola mundo!')
class Programa {
	public nombre: string;
	public version: number;

	getNombre() {
		return this.nombre;
	}

	setNombre(nombre: string) {
		this.nombre = nombre;
	}

	getVersion() {
		return this.version;
	}

	setVersion(version: number) {
		this.version = version;
	}
}

var prog = new Programa();
prog.lanzamiento();

class EditorVideo extends Programa {
	public timeline: number;

	getTimeline() {
		return this.timeline;
	}

	setTimeline(timeline: number) {
		this.timeline = timeline;
	}

	getAllData(): string {
		return this.getNombre() + " - " + this.getVersion() + " - " + this.getTimeline();
	}
}

var video = new EditorVideo();
video.lanzamiento();

var editor = new EditorVideo();
editor.setNombre("Camtasia Studio");
editor.setVersion(8);
editor.setTimeline(4000);

console.log(editor);
console.log(editor.getAllData());

// Logica del formulario
var programas = [];

function guardar() {
	var nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString();

	var programa = new Programa();
	programa.setNombre(nombre);
	programa.setVersion(1);

	if(nombre != undefined && nombre != null && nombre != "") {
		programas.push(programa);
	}

	var list = "";
	for(let i = 0; i < programas.length; i++) {
		list = list + "<li>" + programas[i].getNombre() + "</li>";
	}

	var listado = <HTMLElement> document.getElementById("listado");
	listado.innerHTML = list;

	(<HTMLInputElement>document.getElementById("nombre")).value = "";
}