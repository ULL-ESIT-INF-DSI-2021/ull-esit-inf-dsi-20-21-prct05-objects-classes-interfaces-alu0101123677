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
class Person {
    constructor(name, surname, birthday, gender) {
        this.name = name;
        this.surname = surname;
        this.birthday = birthday;
        this.gender = gender;
    }
}
