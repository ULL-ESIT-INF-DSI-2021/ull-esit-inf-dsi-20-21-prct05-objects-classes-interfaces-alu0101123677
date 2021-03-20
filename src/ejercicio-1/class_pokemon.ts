export class Pokemon {
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

  getType() {
    return this.type;
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

