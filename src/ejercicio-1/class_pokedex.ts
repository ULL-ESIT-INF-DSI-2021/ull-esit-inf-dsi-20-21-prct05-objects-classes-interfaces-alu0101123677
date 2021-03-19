class Pokedex {
  constructor(private name: string, private weight: number, private height: number, 
    private type: string, private attack: number, private defense: number, 
    private speed: number, private healt: number){
    }
  
  getName() {
    return this.name;
  }

  getWeight() {
    return this.weight;
  }

  getHeight() {
    return this.height;
  }

  getAttack() {
    return this.attack;
  }

  getDefense() {
    return this.defense;
  }

  getSpeed() {
    return this.speed;
  }

  getHealt() {
    return this.healt;
  }
}

let bulbasur =
  new Pokedex("bulbasur", 100, 2, "hierba", 80, 83, 80, 80);

let pokemon = [bulbasur];

pokemon.forEach((pokemons) => {
  console.log(` el pokemon es ${pokemons.getName()}`);
});

