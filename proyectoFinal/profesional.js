"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, weight, height, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    ////metodos
    Professional.prototype.printProfessional = function () {
        return "Name: ".concat(this.name, "\n        Age: ").concat(this.age, "\n        Weight: ").concat(this.weight, "\n        Height: ").concat(this.height, "\n        Is Retired: ").concat(this.isRetired, "\n        Nationality: ").concat(this.nationality, "\n        Oscars Number: ").concat(this.oscarsNumber, "\n        Profession: ").concat(this.profession, "\n");
    };
    return Professional;
}());
exports.Professional = Professional;
