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
export class Article {
  constructor(public title: string, public autor: string[], public email: string[], 
    public keywords: string[], public abstrac: string, public date: Date, public editorial: string,
    public citations: number){
    }
  
  /**
  * Función que con los atributos de la clase consigue el formato APA para revista electrónica sin DOI 
  * @returns retorna un string con el formato APA de revista electrónica sin DOIS
  */
  APAFormat(): string {
    return `${this.autor}. (${this.date.getFullYear()}). ${this.title}. ${this.editorial}.`;
  }  
}