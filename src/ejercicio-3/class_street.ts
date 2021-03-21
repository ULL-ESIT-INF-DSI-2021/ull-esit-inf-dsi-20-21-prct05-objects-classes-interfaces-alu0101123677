import {Car} from './class_car'
import {Bus} from './class_bus'
import {Bike} from './class_bike'
import {Motorbike} from './class_motorbike'
import {Peaton} from './class_peaton'
import {Scooters} from './class_scooters'
import {Train} from './class_train'

export class Street {
  constructor(public name: string, public direction: string, public vehiculos: (Car|Bus|Bike|Peaton|Motorbike|Scooters|Train)[]) {
  }

  printStreet(){
    console.log(`En la calle ${this.name} hay: `);
    let countCar:number = 0;
    let countBus:number = 0;
    let countBike:number = 0;
    let countPeaton:number = 0;
    let countMotorbike:number = 0;
    let countScooter:number = 0;
    let countTrain:number = 0;

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

  addVehicule(tipo: string, velocidad: number){
    if (tipo == "coche") {
      let car =
        new Car(velocidad);
      this.vehiculos.push(car);
    }
    if (tipo == "bus") {
      let bus =
        new Bus(velocidad);
      this.vehiculos.push(bus);
    }
    if (tipo == "bicicleta") {
      let bike =
        new Bike(velocidad);
      this.vehiculos.push(bike);
    }
    if (tipo == "peaton") {
      let peaton =
        new Peaton(velocidad);
      this.vehiculos.push(peaton);
    }
    if (tipo == "moto") {
      let moto =
        new Motorbike(velocidad);
      this.vehiculos.push(moto);
    }
    if (tipo == "patinete") {
      let scooter =
        new Scooters(velocidad); 
      this.vehiculos.push(scooter);
    }
    if (tipo == "tren") {
      let tren =
        new Train(velocidad);
      this.vehiculos.push(tren);
    }
  }

  eliminateVehicule(position: number){
    this.vehiculos.splice(position, 1);
  }

  sortSpeed(){}
}