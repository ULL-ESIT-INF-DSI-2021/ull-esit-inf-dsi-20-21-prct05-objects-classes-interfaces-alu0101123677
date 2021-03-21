"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bus = void 0;
class Bus {
    constructor(speed, desplazamiento = "por ruedas", type = "bus") {
        this.speed = speed;
        this.desplazamiento = desplazamiento;
        this.type = type;
    }
}
exports.Bus = Bus;
