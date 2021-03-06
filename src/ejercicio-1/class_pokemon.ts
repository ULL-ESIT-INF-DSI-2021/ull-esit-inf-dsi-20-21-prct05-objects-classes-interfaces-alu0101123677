/**
 * Clase Pokemon que lleva acabo la definición de los atributos de un pokemon.
 * Recibe 8 parametros, un nombre, un peso, una altura, un tipo, el ataque, la defensa
 * la velocidad y la vida
 */
export class Pokemon {
  constructor(private name: string, private weight: number, private height: number, 
    private type: string, private attack: number, private defense: number, 
    private speed: number, private healt: number){
    }
  

  /**
   * Función que consigue el atributo name
   * @returns retorna el nombre del pokemon
   */
  getName() {
    return this.name;
  }
  
  /**
   * Función que consigue el atributo weight
   * @returns retorna el peso del pokemon
   */
  getWeight() {
    return this.weight;
  }

  /**
   * Función que consigue el atributo height
   * @returns retorna la altura del pokemon
   */
  getHeight() {
    return this.height;
  }
  
  /**
   * Función que consigue el atributo type
   * @returns retorna el tipo del pokemon
   */
  getType() {
    return this.type;
  }
  
  /**
   * Función que consigue el atributo attack
   * @returns retorna el ataque del pokemon
   */
  getAttack() {
    return this.attack;
  }
  
  /**
   * Función que consigue el atributo defense
   * @returns retorna la defensa del pokemon
   */
  getDefense() {
    return this.defense;
  }
  
  /**
   * Función que consigue el atributo speed
   * @returns retorna la velocidad del pokemon
   */
  getSpeed() {
    return this.speed;
  }
  
  /**
   * Función que consigue el atributo healt
   * @returns retorna la vida del pokemon
   */
  getHealt() {
    return this.healt;
  }
  

  /**
   * Función que cambia el atributo name
   * @param name atributo que será el nuevo nombre del pokemon
   */
  setName(name: string) {
    this.name = name;
  }
  
  /**
   * Función que cambia el atributo weight
   * @param weight atributo que será el nuevo peso del pokemon
   */
  setWeight(weight: number) {
    this.weight = weight;
  }
  
  /**
   * Función que cambia el atributo height
   * @param height atributo que será la nueva altura del pokemon
   */
  setHeight(height: number) {
    this.height = height;
  }
  
  /**
   * Función que cambia el atributo type
   * @param type atributo que será el nuevo tipo del pokemon
   */
  setType(type: string) {
    this.type = type;
  }
  
  /**
   * Función que cambia el atributo attack
   * @param attack atributo que será el nuevo ataque del pokemon
   */
  setAttack(attack: number) {
    this.attack = attack;
  }
  
  /**
   * Función que cambia el atributo defense
   * @param defense atributo que será la nueva defensa del pokemon
   */
  setDefense(defense: number) {
    this.defense = defense;
  }
  
  /**
   * Función que cambia el atributo speed
   * @param speed atributo que será la nueva velocidad del pokemon
   */
  setSpeed(speed: number) {
    this.speed = speed;
  }
  
  /**
   * Función que cambia el atributo healt
   * @param healt atributo que será la nueva vida del pokemon
   */
  setHealt(healt: number) {
    this.healt = healt;
  }
}

