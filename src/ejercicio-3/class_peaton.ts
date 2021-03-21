import {Movable} from './interface_movable'

/**
 * Clase Peaton que lleva a cabo la definición de un peaton.
 * 
 * Define tres atributos: un tipo number que es la velocidad de los vehiculos, un tipo string
 * que define como se desplazan los objetos y un tipo string que define que tipo de vehiculo es
 */
export class Peaton implements Movable {
  constructor(public speed: number, public desplazamiento: string = "humano", public type: string = "peaton"){}
}