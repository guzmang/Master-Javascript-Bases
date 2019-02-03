import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	public title: string = 'Aplicacion con Angular';
	public descripcion: string = 'Vamos a aprender Angular juntos';
	public mostrarVideojuegos: boolean = true;
	public config;

	constructor() {
		this.config = Configuracion;
		this.title = Configuracion.titulo;
		this.descripcion = Configuracion.descripcion;
	}

	ocultarVideojuegos(value) {
		this.mostrarVideojuegos = value;
	}

}