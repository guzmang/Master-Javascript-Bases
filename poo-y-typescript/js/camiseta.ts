// Interface
interface CamisetaBase {
	setColor(color);
	getColor();
}

// Decorador
function estampar(logo: string) {
	return function(target: Function) {
		target.prototype.estampacion = function(): void {
			console.log("Prenda estampada con el logo de: " + logo);
		}
	}
}

// Clase (molde del objeto)
@estampar("Gucci Gang")
class Camiseta implements CamisetaBase {

	// Propiedades (caracteristicas del objeto)
	private color: string;
	public modelo: string;
	public marca: string;
	public talla: string;
	public precio: number;

	// Metodos (funciones o acciones del objeto)
	constructor(color, modelo, marca, talla, precio) {
		this.color = color;
		this.modelo = modelo;
		this.marca = marca;
		this.talla = talla;
		this.precio = precio;
	}

	public setColor(color) {
		this.color = color;
	}

	public getColor() {
		return this.color;
	}

}

/*
var camiseta = new Camiseta();

camiseta.setColor("Rojo");
camiseta.modelo = "Manga Larga";
camiseta.marca = "Nike";
camiseta.talla = "L";
camiseta.precio = 10;
*/

var playera = new Camiseta("azul", "Manga Corta", "Adidas", "L", 15);
playera.setColor("Azul");

/*
console.log(camiseta);
console.log(camiseta.getColor());
*/

console.log(playera);
console.log(playera.getColor());

playera.estampacion();

// Clase hija
class Buzo extends Camiseta {
	public capucha: boolean;

	constructor(color, modelo, marca, talla, precio, capucha) {
		super(color, modelo, marca, talla, precio);
		this.capucha = capucha;
	}

	setCapucha(capucha: boolean) {
		this.capucha = capucha;
	}

	getCapucha(): boolean {
		return this.capucha;
	}

}

var buzo = new Buzo("Rojo", "Manga Larga", "Nike", "L", 30, false);
buzo.setCapucha(true);
buzo.setColor("Gris Jaspeado");

console.log(buzo);

buzo.estampacion();