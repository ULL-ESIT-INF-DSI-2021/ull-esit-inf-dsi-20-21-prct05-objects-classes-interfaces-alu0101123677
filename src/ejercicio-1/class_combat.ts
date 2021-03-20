import { Pokemon } from "./class_pokemon";

export class Combat {
  constructor(public pokemon1: Pokemon, public pokemon2: Pokemon){
    }
      
  start() {
    console.log("El COMBATE TERMINA");
    console.log(`Los combatientes son: ${this.pokemon1.getName()} y ${this.pokemon2.getName()}`);
    let healt_zero: boolean = false;
    while (healt_zero == false) {
      let first: number = 1;
      let second: number = 2;
      if (this.pokemon1.getSpeed() <= this.pokemon2.getSpeed()) {
        first = 2;
        second = 1;
        console.log(`El pokemon ${this.pokemon2.getName()} ataca primero`);
      }
      else {
        console.log(`El pokemon ${this.pokemon1.getName()} ataca primero`);
      }

      if (first == 1) {
       let damage: number = this.damage(this.pokemon1.getType(), this.pokemon2.getType(), this.pokemon1.getAttack(), this.pokemon2.getDefense());
       console.log(`El pokemon ${this.pokemon1.getName()} hace ${damage} puntos de daño`);
      }
      else {
        let damage: number = this.damage(this.pokemon2.getType(), this.pokemon1.getType(), this.pokemon2.getAttack(), this.pokemon1.getDefense());
        console.log(`${this.pokemon2.getName()} hace ${damage} puntos de daño`);
      }

      if (second == 2) {
        let damage: number = this.damage(this.pokemon2.getType(), this.pokemon1.getType(), this.pokemon2.getAttack(), this.pokemon1.getDefense());
        console.log(`El pokemon ${this.pokemon2.getName()} hace ${damage} puntos de daño`);
      }
      else {
        let damage: number = this.damage(this.pokemon1.getType(), this.pokemon2.getType(), this.pokemon1.getAttack(), this.pokemon2.getDefense());
        console.log(`${this.pokemon1.getName()} hace ${damage} puntos de daño`);
      }
      healt_zero = true;
    }
  }

  damage(type: string, type_oponent: string, attack: number, defense: number): number {
    if (type == type_oponent)
      return 50 * (attack / defense) * 0.5;

    if (type == 'fuego') {
      if (type_oponent == 'agua')
        return 50 * (attack / defense) * 0.5;
      if (type_oponent == 'hierba')
        return 50 * (attack / defense) * 2; 
      if (type_oponent == 'electrico')
        return 50 * (attack / defense) * 1;         
    }

   if (type == 'agua') {
      if (type_oponent == 'fuego')
        return 50 * (attack / defense) * 2;
      if (type_oponent == 'hierba')
        return 50 * (attack / defense) * 0.5; 
      if (type_oponent == 'electrico')
        return 50 * (attack / defense) * 0.5;         
    }

    if (type == 'hierba') {
      if (type_oponent == 'fuego')
        return 50 * (attack / defense) * 0.5;
      if (type_oponent == 'agua')
        return 50 * (attack / defense) * 2; 
      if (type_oponent == 'electrico')
        return 50 * (attack / defense) * 1;         
    }

    if (type == 'electrico') {
      if (type_oponent == 'fuego')
        return 50 * (attack / defense) * 1;
      if (type_oponent == 'agua')
        return 50 * (attack / defense) * 2; 
      if (type_oponent == 'hierba')
        return 50 * (attack / defense) * 1;         
    }
  }
}