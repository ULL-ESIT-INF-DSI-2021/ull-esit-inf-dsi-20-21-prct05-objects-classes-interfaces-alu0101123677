/**
 * Clase abstacta Person que define los atributos de una persona
 * 
 * tiene como atributos 4 tipo string de tipo protected: name, surname,
 * birthday y gender.
 * 
 * tiene como métodos 4 metodos de que actuan como getters y 4 métodos
 * que actuan como setters
 * 
 */
abstract class Person {
  constructor(protected name: string, protected surname: string, 
    protected birthday: string, protected gender: string){
  }
  
  
  abstract getName(): string;

  abstract getSurname(): string;
    
  abstract getBirthday(): string;
    
  abstract getGender(): string;

  abstract setName(name: string): void;

  abstract setSurname(surname: string): void;

  abstract setBirthday(birthday: string): void;

  abstract setGender(gender: string): void;
}
  