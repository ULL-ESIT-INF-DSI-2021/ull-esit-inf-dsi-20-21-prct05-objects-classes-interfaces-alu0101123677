import {Movable} from './interface_movable'

export class Motorbike implements Movable {
  constructor(public speed: number, public desplazamiento: string = "por ruedas", public type: string = "moto"){}
}