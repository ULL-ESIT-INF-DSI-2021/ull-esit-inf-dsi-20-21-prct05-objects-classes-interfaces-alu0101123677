/**
 * Interface Movable que define los atributos comunes de todos los objetos moviles
 * 
 * Define tres atributos: un tipo number que es la velocidad de los vehiculos, un tipo string
 * que define como se desplazan los objetos y un tipo string que define que tipo de vehiculo es
 */
export interface Movable {
  speed: number;
  desplazamiento: string;
  type: string;
}