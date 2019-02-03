import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../../models/contacto.usuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
	public contactoUsuario: ContactoUsuario;

	constructor() {
		this.contactoUsuario = new ContactoUsuario("", "", "", "", "");
	}

	ngOnInit() {

	}

	onSubmit(form) {
		console.log("Evento submit lanzado!!");
		console.log(this.contactoUsuario);
		console.log(typeof form);
		console.log(form);
		form.reset();
		console.log(this.contactoUsuario);
	}

}