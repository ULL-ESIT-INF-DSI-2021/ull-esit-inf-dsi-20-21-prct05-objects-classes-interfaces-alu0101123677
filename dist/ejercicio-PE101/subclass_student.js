/**
 * Clase Student a partir de la clase abstacta Person
 * que define los atributos de un estudiante
 *
 * tiene como atributos 4 tipo string de tipo protected: name, surname,
 * birthday y gender. y 1 atributo private: email
 *
 * tiene como métodos 5 métodos de que actuan como getters y 5 métodos que
 * actuan como setters
 */
class Student extends Person {
    constructor(name, surname, birthday, gender, email) {
        super(name, surname, birthday, gender);
        this.name = name;
        this.surname = surname;
        this.birthday = birthday;
        this.gender = gender;
        this.email = email;
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
    getEmail() {
        return this.email;
    }
    setName(name) {
        this.name = name;
    }
    setSurname(surname) {
        this.surname = surname;
    }
    setBirthday(birthday) {
        this.birthday = birthday;
    }
    setGender(gender) {
        this.gender = gender;
    }
    setEmail(email) {
        this.email = email;
    }
}
