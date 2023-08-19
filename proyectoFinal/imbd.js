"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Imbd = void 0;
var fs = require('fs');
var Imbd = /** @class */ (function () {
    function Imbd(peliculas) {
        this.peliculas = peliculas;
    }
    Imbd.prototype.addMovie = function (movie) {
        this.peliculas.push(movie);
    };
    Imbd.prototype.printImbd = function () {
        this.peliculas.forEach(function (pelicula, index) {
            console.log("Pelicula ".concat(index + 1, ":\n").concat(pelicula.printMovie(), "\n"));
        });
    };
    Imbd.prototype.escribirEnFicheroJSON = function (nombreFichero) {
        var data = JSON.stringify(this, null, 2);
        fs.writeFileSync(nombreFichero, data);
    };
    Imbd.prototype.obtenerInstancialIMDB = function (nombreFichero) {
        var data = fs.readFileSync(nombreFichero, 'utf-8');
        return JSON.parse(data);
    };
    return Imbd;
}());
exports.Imbd = Imbd;
