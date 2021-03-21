import {Movable} from './interface_movable'

export class Bus implements Movable {
  constructor(public speed: number, public desplazamiento: string = "por ruedas", public type: string = "bus"){}
}