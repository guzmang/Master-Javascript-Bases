var bicicleta = {
	color: "Rojo",
	modelo: "BMX",
	frenos: "De disco",
	velocidadMaxima: "60km",
	cambiaColor: function(nuevoColor) {
		//	bicicleta.color = nuevo.color;
		this.color = nuevoColor;
		console.log(this);
	}
}

console.log(bicicleta);
bicicleta.cambiaColor("Azul");