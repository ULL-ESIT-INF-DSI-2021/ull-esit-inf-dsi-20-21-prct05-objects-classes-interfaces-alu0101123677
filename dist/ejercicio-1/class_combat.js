"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Combat = void 0;
/**
 * Clase Combat que lleva acabo todo el combate entre los pokemon.
 * Recibe dos objetos de la clase Pokemon
 */
class Combat {
    constructor(pokemon1, pokemon2) {
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
    }
    /**
     * Función que lleva a cabo el combate entre los dos pokemon
     * @returns retorna un number que indica que pokemon ha sido el vencedor
     */
    start() {
        console.log("¡¡¡El COMBATE EMPIEZA!!!");
        console.log(`Los combatientes son: ${this.pokemon1.getName()} y ${this.pokemon2.getName()}`);
        let healt_zero = false;
        console.log("");
        let turn = 1;
        let winner = 0;
        while (healt_zero == false) {
            let first = 1;
            let second = 2;
            console.log(`Es el turno ${turn}`);
            if (this.pokemon1.getSpeed() <= this.pokemon2.getSpeed()) {
                first = 2;
                second = 1;
                console.log(`El pokemon ${this.pokemon2.getName()} ataca primero`);
            }
            else {
                console.log(`El pokemon ${this.pokemon1.getName()} ataca primero`);
            }
            if (first == 1) {
                let damage = Math.round(this.damage(this.pokemon1.getType(), this.pokemon2.getType(), this.pokemon1.getAttack(), this.pokemon2.getDefense()));
                console.log(`${this.pokemon1.getName()} hace ${damage} puntos de daño`);
                this.pokemon2.setHealt(this.pokemon2.getHealt() - damage);
            }
            else {
                let damage = Math.round(this.damage(this.pokemon2.getType(), this.pokemon1.getType(), this.pokemon2.getAttack(), this.pokemon1.getDefense()));
                console.log(`${this.pokemon2.getName()} hace ${damage} puntos de daño`);
                this.pokemon1.setHealt(this.pokemon1.getHealt() - damage);
            }
            if (second == 2) {
                let damage = Math.round(this.damage(this.pokemon2.getType(), this.pokemon1.getType(), this.pokemon2.getAttack(), this.pokemon1.getDefense()));
                console.log(`${this.pokemon2.getName()} hace ${damage} puntos de daño`);
                this.pokemon1.setHealt(this.pokemon1.getHealt() - damage);
            }
            else {
                let damage = Math.round(this.damage(this.pokemon1.getType(), this.pokemon2.getType(), this.pokemon1.getAttack(), this.pokemon2.getDefense()));
                console.log(`${this.pokemon1.getName()} hace ${damage} puntos de daño`);
                this.pokemon2.setHealt(this.pokemon2.getHealt() - damage);
            }
            console.log(`La vida de ${this.pokemon1.getName()} es de ${this.pokemon1.getHealt()}`);
            console.log(`La vida de ${this.pokemon2.getName()} es de ${this.pokemon2.getHealt()}`);
            if (this.pokemon1.getHealt() <= 0) {
                console.log(`El combate ha terminado, el ganador es ${this.pokemon2.getName()}`);
                healt_zero = true;
                winner = 2;
            }
            if (this.pokemon2.getHealt() <= 0) {
                console.log(`El combate ha terminado, el ganador es ${this.pokemon1.getName()}`);
                healt_zero = true;
                winner = 1;
            }
            console.log("");
            turn++;
        }
        return winner;
    }
    /**
     * Función que calcula el daño que realiza un pokemon a su contrincante
     * @param type de tipo string que indica el tipo del pokemon atacante
     * @param type_oponent de tipo string que indica el tipo del pokemon contrincante
     * @param attack de tipo number que indica el ataque del pokemon
     * @param defense de tipo number que indica la defensa del pokemon
     * @returns retorna el daño calculado
     */
    damage(type, type_oponent, attack, defense) {
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
exports.Combat = Combat;
