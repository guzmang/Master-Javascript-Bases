var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorador
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Prenda estampada con el logo de: " + logo);
        };
    };
}
// Clase (molde del objeto)
var Camiseta = /** @class */ (function () {
    // Metodos (funciones o acciones del objeto)
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta = __decorate([
        estampar("Gucci Gang")
    ], Camiseta);
    return Camiseta;
}());
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
var Buzo = /** @class */ (function (_super) {
    __extends(Buzo, _super);
    function Buzo(color, modelo, marca, talla, precio, capucha) {
        var _this = _super.call(this, color, modelo, marca, talla, precio) || this;
        _this.capucha = capucha;
        return _this;
    }
    Buzo.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Buzo.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Buzo;
}(Camiseta));
var buzo = new Buzo("Rojo", "Manga Larga", "Nike", "L", 30, false);
buzo.setCapucha(true);
buzo.setColor("Gris Jaspeado");
console.log(buzo);
buzo.estampacion();
