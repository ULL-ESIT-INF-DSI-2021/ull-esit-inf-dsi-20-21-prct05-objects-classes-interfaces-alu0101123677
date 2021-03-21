"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike = void 0;
class Bike {
    constructor(speed, desplazamiento = "por ruedas", type = "bicicleta") {
        this.speed = speed;
        this.desplazamiento = desplazamiento;
        this.type = type;
    }
}
exports.Bike = Bike;
