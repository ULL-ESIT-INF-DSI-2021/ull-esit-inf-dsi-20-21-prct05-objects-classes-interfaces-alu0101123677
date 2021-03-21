"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motorbike = void 0;
class Motorbike {
    constructor(speed, desplazamiento = "por ruedas", type = "moto") {
        this.speed = speed;
        this.desplazamiento = desplazamiento;
        this.type = type;
    }
}
exports.Motorbike = Motorbike;
