import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'cursos',
	templateUrl: './cursos.component.html',
	styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

	public nombre: string;
	public followers: number;

	// Tenemos que inyectar varios servicios (clases importadas mas arriba) en el constructor
	// como propiedades
	constructor(
		private _route: ActivatedRoute,
		private _router: Router
	) {

	}

	ngOnInit() {
		this._route.params.subscribe((params: Params) => {
			// dentro de params tengo todos los valores que le estoy pasando por la url
			// tengo 2 formas de obtener los valores:
			this.nombre = params.nombre;
			this.followers = +params['followers'];	// el + adelante convierte a tipo number
			console.log(params);
			console.log(this.nombre);
			console.log(typeof +params.followers);
			console.log(this.followers);			// si paso un string me imprimira NaN

			if(this.nombre == 'ninguno') {
				this._router.navigate(['/home']);
			}
		});
	}

	redirigir() {
		//	Me lleva a cualquier ruta de mi proyecto (NO sirve si quiero ir a google.com por ej)
		this._router.navigate(['/zapatillas']);
	}

}