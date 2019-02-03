interface CocheBase {
	getModelo(): string;
	getVelocidad(): number;
}

class Coche implements CocheBase {
	private color: string;
	private modelo: string;
	private velocidad: number;

	constructor(modelo: string = null) {	// modelo opcional con valor null por defecto
		this.color = "BLANCO";
		this.velocidad = 0;

		if(modelo == null) {
			this.modelo = "BMW Generico";
		} else {
			this.modelo = modelo;
		}
	}

	public getColor() {
		return this.color;
	}

	public setColor(color: string) {
		this.color = color;
	}

	public getModelo(): string {
		return this.modelo;
	}

	public setModelo(modelo: string) {
		this.modelo = modelo;
	}

	public getVelocidad(): number {
		return this.velocidad;
	}

	public acelerar() {
		this.velocidad++;
	}

	public frenar() {
		this.velocidad--;
	}
}

var coche1 = new Coche();
var coche2 = new Coche("Renault Clio");
var coche3 = new Coche();

coche1.setColor("ROJO");
coche1.acelerar();
coche1.acelerar();
coche1.acelerar();
coche2.setColor("AZUL");
//coche3.setColor("VERDE");

console.log("El color del coche 1 es: " + coche1.getColor());
console.log("El modelo del coche 1 es: " + coche1.getModelo());
console.log("La velocidad del coche 1 es: " + coche1.getVelocidad());
coche1.frenar();
console.log("La velocidad despues de frenar del coche 1 es: " + coche1.getVelocidad());

console.log("El color del coche 2 es: " + coche2.getColor());
console.log("El modelo del coche 2 es: " + coche2.getModelo());

console.log("El color del coche 3 es: " + coche3.getColor());