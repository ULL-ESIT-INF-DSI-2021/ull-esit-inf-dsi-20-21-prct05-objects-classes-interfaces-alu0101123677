import {Movable} from './interface_movable'

export class Bike implements Movable {
  constructor(public speed: number, public desplazamiento: string = "por ruedas", public type: string = "bicicleta"){}
}