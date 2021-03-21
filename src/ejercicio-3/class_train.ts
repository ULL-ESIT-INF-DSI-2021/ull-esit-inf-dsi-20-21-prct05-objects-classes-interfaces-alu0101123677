import {Movable} from './interface_movable'

/**
 * Clase Train que lleva a cabo la definición de un tren.
 * 
 * Define tres atributos: un tipo number que es la velocidad de los vehiculos, un tipo string
 * que define como se desplazan los objetos y un tipo string que define que tipo de vehiculo es
 */
export class Train implements Movable {
  constructor(public speed: number, public desplazamiento: string = "railes", public type: string = "tren"){}
}