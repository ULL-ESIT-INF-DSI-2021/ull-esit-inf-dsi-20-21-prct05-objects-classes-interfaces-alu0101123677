"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(speed, desplazamiento = "por ruedas", type = "coche") {
        this.speed = speed;
        this.desplazamiento = desplazamiento;
        this.type = type;
    }
}
exports.Car = Car;
