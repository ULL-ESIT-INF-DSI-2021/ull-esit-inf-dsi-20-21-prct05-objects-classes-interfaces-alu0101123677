class Asignature {
    constructor(name, teacher, student) {
        this.name = name;
        this.teacher = teacher;
        this.student = student;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getTeacherName() {
        return this.teacher.getName();
    }
    getStudentName() {
        return this.student.getName();
    }
    classroom() {
        console.log(`La asignatura ${this.getName()} tiene el siguiente profesor: ${this.getTeacherName()}
    y el almuno es ${this.getStudentName()} `);
    }
    listStudent() {
    }
    listTeacher() {
    }
}
