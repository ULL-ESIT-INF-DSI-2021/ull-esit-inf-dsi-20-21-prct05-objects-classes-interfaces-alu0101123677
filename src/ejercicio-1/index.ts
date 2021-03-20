import {Pokedex} from './class_pokedex'
import {Combat} from './class_combat'

console.log("Iniciamos el programa Pokedex");

let bulbasur =
  new Pokedex("bulbasur", 6.9, 0.7, "hierba", 49, 49, 45, 300);

let ivysaur =
  new Pokedex("ivysaur", 13.0, 1.0, "hierba", 62, 63, 60, 400);

let venusaur =
  new Pokedex("venasaur", 100.0, 2.0, "hierba", 82, 83, 80, 500);

let charmander =
  new Pokedex("charmander", 8.5, 0.6, "fuego", 52, 43, 65, 300);

let charmeleon =
  new Pokedex("charmeleon", 19.0, 1.1, "fuego", 64, 58, 80, 400);

let charizard =
  new Pokedex("charizard", 90.5, 1.7, "fuego", 84, 78, 100, 500);

let squirtle =
  new Pokedex("squirtle", 9.0, 0.5, "agua", 48, 65, 43, 300);

let wartortle =
  new Pokedex("wartortle", 22.5, 1.0, "agua", 63, 80, 58, 400);

let blastoise =
  new Pokedex("blastoise", 85.5, 1.6, "agua", 83, 100, 78, 500);

let pikachu =
  new Pokedex("pikachu", 6.0, 0.4, "electrico", 55, 40, 90, 400);

let raichu =
  new Pokedex("raichu", 30.0, 0.8, "electrico", 90, 55, 110, 500)

let pokemons = [bulbasur, ivysaur, venusaur, charmander, charmeleon, charizard, squirtle, wartortle, blastoise, pikachu, raichu];


let combat =
  new Combat("hola");

combat.start();