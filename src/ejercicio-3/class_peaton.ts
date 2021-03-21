import {Movable} from './interface_movable'

export class Peaton implements Movable {
  constructor(public speed: number, public desplazamiento: string = "humano", public type: string = "peaton"){}
}