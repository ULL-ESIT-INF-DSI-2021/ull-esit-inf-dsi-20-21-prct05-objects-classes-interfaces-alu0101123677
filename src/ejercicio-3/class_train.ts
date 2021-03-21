import {Movable} from './interface_movable'

export class Train implements Movable {
  constructor(public speed: number, public desplazamiento: string = "railes", public type: string = "tren"){}
}