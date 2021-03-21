import {Street} from './class_street'
import {Car} from './class_car'
import {Bus} from './class_bus'
import {Bike} from './class_bike'
import {Motorbike} from './class_motorbike'
import {Peaton} from './class_peaton'
import {Scooters} from './class_scooters'
import {Train} from './class_train'

/**
 * Función main que inicializa el objeto de la clase Street y un vector de los diversos vehiculos
 */
export function main3 (){
  let vehiculos: (Car|Bus|Bike|Motorbike|Peaton|Scooters|Train)[] = []

  let calle1 =
    new Street ("Viana", "La Laguna", vehiculos);

  calle1.printStreet();
  calle1.addVehicule("coche", 200);
  calle1.addVehicule("moto", 100);
  calle1.addVehicule("tren", 1000);
  console.log(calle1.vehiculos);
  calle1.printStreet();
  calle1.sortSpeed();
  console.log(calle1.vehiculos);
  calle1.eliminateVehicule(0);
  calle1.printStreet();
  console.log(calle1.vehiculos);
}

main3();