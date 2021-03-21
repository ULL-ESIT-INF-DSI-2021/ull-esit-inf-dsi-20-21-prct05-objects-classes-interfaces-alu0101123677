"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_street_1 = require("./class_street");
function main3() {
    let vehiculos = [];
    let count = 0;
    let exit = false;
    let calle1 = new class_street_1.Street("Viana", "La Laguna", vehiculos);
    calle1.printStreet();
    calle1.addVehicule("coche", 200);
    calle1.addVehicule("moto", 100);
    calle1.addVehicule("tren", 1000);
    console.log(calle1.vehiculos);
    calle1.printStreet();
    calle1.sortSpeed();
    console.log(calle1.vehiculos);
    calle1.eliminateVehicule(0);
    calle1.printStreet();
    console.log(calle1.vehiculos);
}
main3();
