/**
 * Clase Teacher a partir de la clase abstacta Person 
 * que define los atributos de un estudiante
 * tiene como atributos 4 tipo string de tipo protected: name, surname,
 * birthday y gender. y 1 atributo private: email
 * tiene como métodos 5 metodos de que actuan como getter
 */
class Teacher extends Person {
  constructor(protected name: string, protected surname: string, 
    protected birthday: string, protected gender: string, private email: string){
    super(name, surname, birthday, gender);       
  }
  
  getName() {
    return this.name
  } 
  
  getSurname() {
    return this.surname
  }
      
  getBirthday() {
    return this.birthday  
  }
      
  getGender() {
    return this.gender
  }

  getEmail() {
    return this.email
  }
  
}