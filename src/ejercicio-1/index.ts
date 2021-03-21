import {Pokemon} from './class_pokemon'
import {Combat} from './class_combat'

/**
 * Función main del programa que inicializa los objetos de las clase pokemon y combat
 * @param pokemon1 atributo tipo number que indica cual es el primer pokemon del combate
 * @param pokemon2 atributo tipo number que indica cual es el segundo pokemon del combate
 * @returns retorna un number que indica que pokemon a ganado
 */
export function main(pokemon1: number, pokemon2:number): number {
console.log("Iniciamos el programa Pokedex");

let bulbasur =
  new Pokemon("bulbasur", 6.9, 0.7, "hierba", 49, 49, 45, 300);

let ivysaur =
  new Pokemon("ivysaur", 13.0, 1.0, "hierba", 62, 63, 60, 400);

let venusaur =
  new Pokemon("venasaur", 100.0, 2.0, "hierba", 82, 83, 80, 500);

let charmander =
  new Pokemon("charmander", 8.5, 0.6, "fuego", 52, 43, 65, 300);

let charmeleon =
  new Pokemon("charmeleon", 19.0, 1.1, "fuego", 64, 58, 80, 400);

let charizard =
  new Pokemon("charizard", 90.5, 1.7, "fuego", 84, 78, 100, 500);

let squirtle =
  new Pokemon("squirtle", 9.0, 0.5, "agua", 48, 65, 43, 300);

let wartortle =
  new Pokemon("wartortle", 22.5, 1.0, "agua", 63, 80, 58, 400);

let blastoise =
  new Pokemon("blastoise", 85.5, 1.6, "agua", 83, 100, 78, 500);

let pikachu =
  new Pokemon("pikachu", 6.0, 0.4, "electrico", 55, 40, 90, 400);

let raichu =
  new Pokemon("raichu", 30.0, 0.8, "electrico", 90, 55, 110, 500)

let pokedex = [bulbasur, ivysaur, venusaur, charmander, charmeleon, charizard, squirtle, wartortle, blastoise, pikachu, raichu];

let combat =
  new Combat(pokedex[pokemon1], pokedex[pokemon2]);

return combat.start();
}

console.log(main(5, 2));