import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
	selector: 'videojuego',
	templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
	public titulo: string;
	public listado: string;

	constructor() {
		this.titulo = "Componente de Videojuegos";
		this.listado = "Listado de los juegos más populares";

		console.log("Se ha cargado el componente: videojuego.componente.ts");
	}

	ngOnInit() {								// primer metodo que se ejecuta cuando cargo un componente
		console.log("OnInit ejecutado!!");		// despues del constructor
	}

	ngDoCheck() {								// se ejecuta cdo hay algun cambio en el Componente, como una
		console.log("DoCheck ejecutado!!");		// prop este o no es la view, o en la app de angular en gral.
	}

	ngOnDestroy() {								// se ejecuta antes de eliminar la instancia de un componente
		console.log("OnDestroy ejecutado!!");	// o si lo oculto (deja de ejecutarse en la app)
	}

	cambiarTitulo() {
		this.titulo = "Nuevo titulo del componente";
	}

}