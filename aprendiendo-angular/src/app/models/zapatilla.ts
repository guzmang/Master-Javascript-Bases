export class Zapatilla {

	// Este codigo es muy redundante

	/*
	public nombre: string;
	public marca: string;
	public color: string;
	public precio: number;
	public stock: boolean;

	constructor(nombre, marca, color, precio, stock) {
		this.nombre = nombre;
		this.marca = marca;
		this.color = color;
		this.precio = precio;
		this.stock = stock;
	}
	*/

	// TypeScript detecta que queremos tener estas propiedades y las define en la clase
	// Cuando se llama al constructor las crea asignando el valor pasado como parametro

	constructor(
		public nombre: string,
		public marca: string,
		public color: string,
		public precio: number,
		public stock: boolean
	) {}

}