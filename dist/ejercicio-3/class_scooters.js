"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scooters = void 0;
class Scooters {
    constructor(speed, desplazamiento = "por ruedas", type = "patinete") {
        this.speed = speed;
        this.desplazamiento = desplazamiento;
        this.type = type;
    }
}
exports.Scooters = Scooters;
