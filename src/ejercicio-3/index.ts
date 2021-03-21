import {Street} from './class_street'
import {Car} from './class_car'
import {Bus} from './class_bus'
import {Bike} from './class_bike'
import {Motorbike} from './class_motorbike'
import {Peaton} from './class_peaton'
import {Scooters} from './class_scooters'
import {Train} from './class_train'

function main3 (){
  let vehiculos: (Car|Bus|Bike|Motorbike|Peaton|Scooters|Train)[] = []
  let count: number = 0;
  let exit: boolean = false;

  let calle1 =
    new Street ("Viana", "La Laguna", vehiculos);

  calle1.printStreet();
  calle1.addVehicule("coche", 200);
  calle1.addVehicule("moto", 100);
  calle1.addVehicule("tren", 1000);
  calle1.printStreet();

  /*while (exit == false) {
    console.log("¿Quiere salir del programa?");
    let salida = prompt("Introduce si si quieres salir", "");

    if (salida == "si")
      exit = true;
  }*/
}

main3();