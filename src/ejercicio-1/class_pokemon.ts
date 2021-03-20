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

  setName(name: string) {
    this.name = name;
  }

  setWeight(weight: number) {
    this.weight = weight;
  }

  setHeight(height: number) {
    this.height = height;
  }

  setType(type: string) {
    this.type = type;
  }

  setAttack(attack: number) {
    this.attack = attack;
  }

  setDefense(defense: number) {
    this.defense = defense;
  }

  setSpeed(speed: number) {
    this.speed = speed;
  }

  setHealt(healt: number) {
    this.healt = healt;
  }
}

