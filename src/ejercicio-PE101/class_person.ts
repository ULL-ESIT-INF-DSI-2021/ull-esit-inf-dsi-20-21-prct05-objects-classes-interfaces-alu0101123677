abstract class Person {
  constructor(protected name: string, protected surname: string, 
    protected birthday: string, protected gender: string){
  }
  
  abstract getName(): string;

  abstract getSurname(): string;
    
  abstract getBirthday(): string;
    
  abstract getGender(): string;
}

  
  /*let bruno =
    new Person("Bruno", "Arroyo", "02/11/1999", "male");
  
  let lupe =
    new Person("lupe", "joaquin", "02/11/1999", "female");
  
  let person = [bruno, lupe];
  
  person.forEach((persona) => {
    console.log(`I am ${persona.getName()} ${persona.getSurname()} , my birth is ${persona.getBirthday()} 
    and I'm ${persona.getGender()} `);
  });*/
  