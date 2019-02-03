import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';

@Component({
	selector: 'app-externo',
	templateUrl: './externo.component.html',
	styleUrls: ['./externo.component.css'],
	providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {
	public user: any;
	public userId: any;
	public fecha: any;

	public newUser: any;
	public savedUser: any;

	constructor(
		private _peticionesService: PeticionesService
	) {
		this.userId = 1;
		this.newUser = {
							name: "",
							job: ""
			    	   };
	}

	ngOnInit() {
		this.fecha = new Date(2019, 5, 20);
		this.cargaUsuario();
	}

	cargaUsuario() {
		this.user = null;	// o false
		this._peticionesService.getUser(this.userId).subscribe(
			response => {
				console.log("Response:", response);
				this.user = response.data;
			},
			error => {
				console.log("Error:", <any>error);
			}
		);
	}

	onSubmit(form) {
		this._peticionesService.addUser(this.newUser).subscribe(
			response => {
				console.log(response);
				this.savedUser = response;
				form.reset();
			},
			error => {
				console.log("Error:", <any>error);
			}
		);
	}

}