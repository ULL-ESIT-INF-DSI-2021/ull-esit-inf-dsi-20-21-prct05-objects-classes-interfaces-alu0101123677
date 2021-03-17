class Asignature {
  constructor(private name: string, private teacher: Teacher, private student: Student){
  }
  
  getName(){
    return this.name;
  }

  setName(name: string): void{
    this.name = name;
  }

  getTeacherName() {
    return this.teacher.getName();
  }

  getStudentName() {
    return this.student.getName();
  }
  
  classroom(){
    console.log(`La asignatura ${this.getName()} tiene el siguiente profesor: ${this.getTeacherName()}
    y el almuno es ${this.getStudentName()} `);
  }

  listStudent(){

  }

  listTeacher(){

  } 
}  