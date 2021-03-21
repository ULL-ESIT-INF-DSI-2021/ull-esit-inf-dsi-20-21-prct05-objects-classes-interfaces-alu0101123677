import {Movable} from './interface_movable'

/**
 * Clase Motorbike que lleva a cabo la definición de una moto.
 * 
 * Define tres atributos: un tipo number que es la velocidad de los vehiculos, un tipo string
 * que define como se desplazan los objetos y un tipo string que define que tipo de vehiculo es
 */
export class Motorbike implements Movable {
  constructor(public speed: number, public desplazamiento: string = "por ruedas", public type: string = "moto"){}
}