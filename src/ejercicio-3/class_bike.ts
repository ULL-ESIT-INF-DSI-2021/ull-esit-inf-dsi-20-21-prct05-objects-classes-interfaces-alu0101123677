import {Movable} from './interface_movable'

/**
 * Clase Bike que lleva a cabo la definición de una bicicleta.
 * 
 * Define tres atributos: un tipo number que es la velocidad de los vehiculos, un tipo string
 * que define como se desplazan los objetos y un tipo string que define que tipo de vehiculo es
 */
export class Bike implements Movable {
  constructor(public speed: number, public desplazamiento: string = "por ruedas", public type: string = "bicicleta"){}
}