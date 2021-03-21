import {Car} from './class_car'
import {Bus} from './class_bus'
import {Bike} from './class_bike'
import {Motorbike} from './class_motorbike'
import {Peaton} from './class_peaton'
import {Scooters} from './class_scooters'
import {Train} from './class_train'

/**
 * Clase Street que muestra la cantidad de vehiculos diferentes en la calle
 * añade vehiculos nuevos, elimina vehiculos y los ordena por velocidad.
 * 
 * Recibe un atributo de tipo string que indica el nombre de la calle, un tipo string que indica
 * la direccion de la calle y un vector de objetos de las clases Car, Bus, Bike, Peaton, Motorbike, Scooters 
 * y Train.
 * 
 * Contiene cuatro métodos, printStreet, addVehicule, eliminateVehicule y sortSpeed.
 */
export class Street {
  constructor(public name: string, public direction: string, public vehiculos: (Car|Bus|Bike|Peaton|Motorbike|Scooters|Train)[]) {
  }
  
  /**
   * Función que muestra por pantalla cuanto vehiculos hay en Street
   */
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
  
  /**
   * Función que añade vehiculos a Street
   * @param tipo es un tipo string que define que tipo de vehiculo es
   * @param velocidad es un tipo number que indica cuanta velocidad tiene el vehiculo
   */
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
  
  /**
   * Función que elimina un vehiculo de Street
   * @param position de tipo number que indica que vehiculo eliminar
   */
  eliminateVehicule(position: number){
    this.vehiculos.splice(position, 1);
  }
  
  /**
   * Función que ordena los vehiculos  en cuestión de su velocidad
   */
  sortSpeed(){
    this.vehiculos.sort(function(a, b) {
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