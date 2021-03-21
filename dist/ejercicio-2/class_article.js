"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Article = void 0;
/**
 * Clase Article que lleva acabo la definición de los atributos de un articulo.
 *
 * Recibe 8 parametros, un string que sería el titulo, un array de string que indican los
 * nombres de los autores, una array de string que indican el email de los autores,
 * un array de string de palabras claves, un string que sería el abstrac, un tipo Date que sería la
 * fecha de publicación, un tipo string que sería la editorial y un tipo number que serían las citaciones
 *
 * Contiene un método APAFormat.
 */
class Article {
    constructor(title, autor, email, keywords, abstrac, date, editorial, citations) {
        this.title = title;
        this.autor = autor;
        this.email = email;
        this.keywords = keywords;
        this.abstrac = abstrac;
        this.date = date;
        this.editorial = editorial;
        this.citations = citations;
    }
    /**
    * Función que con los atributos de la clase consigue el formato APA para revista electrónica sin DOI
    * @returns retorna un string con el formato APA de revista electrónica sin DOIS
    */
    APAFormat() {
        return `${this.autor}. (${this.date.getFullYear()}). ${this.title}. ${this.editorial}.`;
    }
}
exports.Article = Article;
