class Person {
    constructor(private name: string, private surname: string, 
      private birthday: string, private gender: string){
    }
  
    getName() {
      return this.name;
    }

    getSurname() {
      return this.surname;
    }

    getBirthday() {
      return this.birthday;
    }

    getGender() {
      return this.gender;
    }
  }
  
  let bruno =
    new Person("Bruno", "Arroyo", "02/11/1999", "male");
  
  let lupe =
    new Person("lupe", "joaquin", "02/11/1999", "female");
  
  let person = [bruno, lupe];
  
  person.forEach((persona) => {
    console.log(`I am ${persona.getName()} ${persona.getSurname()} , my birth is ${persona.getBirthday()} 
    and I'm ${persona.getGender()} `);
  });
  