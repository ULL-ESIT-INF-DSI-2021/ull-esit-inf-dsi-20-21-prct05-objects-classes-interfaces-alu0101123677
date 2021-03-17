class Student extends Person {
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