/**
 * Clase Teacher a partir de la clase abstacta Person 
 * que define los atributos de un estudiante
 * 
 * tiene como atributos 4 tipo string de tipo protected: name, surname,
 * birthday y gender. y 1 atributo private: email
 * 
 * tiene como métodos 5 métodos de que actuan como getters y 5 métodos que
 * actuan como setters
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

  setName(name: string): void {
    this.name = name;
  }

  setSurname(surname: string): void {
    this.surname = surname;
  }

  setBirthday(birthday: string): void {
    this.birthday = birthday;
  }

  setGender(gender: string): void {
    this.gender = gender;
  }

  setEmail(email: string): void {
    this.email = email;
  }
  
}