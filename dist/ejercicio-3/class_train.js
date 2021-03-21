"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Train = void 0;
class Train {
    constructor(speed, desplazamiento = "railes", type = "tren") {
        this.speed = speed;
        this.desplazamiento = desplazamiento;
        this.type = type;
    }
}
exports.Train = Train;
