"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Street = void 0;
const class_car_1 = require("./class_car");
const class_bus_1 = require("./class_bus");
const class_bike_1 = require("./class_bike");
const class_motorbike_1 = require("./class_motorbike");
const class_peaton_1 = require("./class_peaton");
const class_scooters_1 = require("./class_scooters");
const class_train_1 = require("./class_train");
class Street {
    constructor(name, direction, vehiculos) {
        this.name = name;
        this.direction = direction;
        this.vehiculos = vehiculos;
    }
    printStreet() {
        console.log(`En la calle ${this.name} hay: `);
        let countCar = 0;
        let countBus = 0;
        let countBike = 0;
        let countPeaton = 0;
        let countMotorbike = 0;
        let countScooter = 0;
        let countTrain = 0;
        this.vehiculos.forEach((vehiculo) => {
            if (vehiculo.type == "coche")
                countCar++;
            if (vehiculo.type == "bus")
                countBus++;
            if (vehiculo.type == "bicicleta")
                countBike++;
            if (vehiculo.type == "peaton")
                countPeaton++;
            if (vehiculo.type == "moto")
                countMotorbike++;
            if (vehiculo.type == "patinete")
                countScooter++;
            if (vehiculo.type == "tren")
                countTrain++;
        });
        console.log("Hay " + countCar + " coches");
        console.log("Hay " + countBus + " buses");
        console.log("Hay " + countBike + " bicicletas");
        console.log("Hay " + countPeaton + " peatones");
        console.log("Hay " + countMotorbike + " motos");
        console.log("Hay " + countScooter + " patinetes");
        console.log("Hay " + countTrain + " trenes");
        console.log("");
    }
    addVehicule(tipo, velocidad) {
        if (tipo == "coche") {
            let car = new class_car_1.Car(velocidad);
            this.vehiculos.push(car);
        }
        if (tipo == "bus") {
            let bus = new class_bus_1.Bus(velocidad);
            this.vehiculos.push(bus);
        }
        if (tipo == "bicicleta") {
            let bike = new class_bike_1.Bike(velocidad);
            this.vehiculos.push(bike);
        }
        if (tipo == "peaton") {
            let peaton = new class_peaton_1.Peaton(velocidad);
            this.vehiculos.push(peaton);
        }
        if (tipo == "moto") {
            let moto = new class_motorbike_1.Motorbike(velocidad);
            this.vehiculos.push(moto);
        }
        if (tipo == "patinete") {
            let scooter = new class_scooters_1.Scooters(velocidad);
            this.vehiculos.push(scooter);
        }
        if (tipo == "tren") {
            let tren = new class_train_1.Train(velocidad);
            this.vehiculos.push(tren);
        }
    }
    eliminateVehicule(position) {
        this.vehiculos.splice(position, 1);
    }
    sortSpeed() {
        this.vehiculos.sort(function (a, b) {
            if (a.speed > b.speed) {
                return 1;
            }
            if (a.speed < b.speed) {
                return -1;
            }
            return 0;
        });
    }
}
exports.Street = Street;
