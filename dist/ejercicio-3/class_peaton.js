"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Peaton = void 0;
class Peaton {
    constructor(speed, desplazamiento = "humano", type = "peaton") {
        this.speed = speed;
        this.desplazamiento = desplazamiento;
        this.type = type;
    }
}
exports.Peaton = Peaton;
