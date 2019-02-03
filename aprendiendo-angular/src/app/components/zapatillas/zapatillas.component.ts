import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../../models/zapatilla';
import { ZapatillaService } from '../../services/zapatilla.service';

@Component({
	selector: 'zapatillas',
	templateUrl: './zapatillas.component.html',
	providers: [ZapatillaService]
})
export class ZapatillasComponent implements OnInit {
	public titulo: string = "Componente de zapatillas";
	public zapatillas: Array<Zapatilla>;
	public marcas: string[];
	public color: string;
	public miMarca: string;

	constructor(
		// Inyecto el servicio en una propiedad, el nombre de los servicios suele llevar _
		private _zapatillaService: ZapatillaService
	) {
		this.miMarca = "Fila";
		this.color = "blue";
		this.marcas = new Array();
	}

	ngOnInit() {
		console.log(this.zapatillas);
		this.zapatillas = this._zapatillaService.getZapatillas();
		this.getMarcas();
	}

	getMarcas() {
		this.zapatillas.forEach((zapatilla, index) => {
			if(this.marcas.indexOf(zapatilla.marca) < 0) {
				this.marcas.push(zapatilla.marca);
			}
		});
		console.log(this.marcas);
	}

	getMarca() {
		alert(this.miMarca);
	}

	addMarca() {
		if(this.marcas.indexOf(this.miMarca) < 0) {
			this.marcas.push(this.miMarca);
		}
	}

	removeMarca(index) {
		//	delete this.marcas[index];
		this.marcas.splice(index, 1);
	}

	onBlur() {
		console.log("Has salido del input.");
	}

	mostrarPalabra() {
		alert(this.miMarca);
	}

}