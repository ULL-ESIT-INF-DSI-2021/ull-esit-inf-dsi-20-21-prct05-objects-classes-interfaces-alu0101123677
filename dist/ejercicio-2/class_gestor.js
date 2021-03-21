"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gestor = void 0;
/**
 * Clase Article que lleva acabo la definición de un gestor bibliográfico.
 *
 * Recibe un array de objetos de la clase Article.
 *
 * Contiene tres métodos, table, filter y export.
 */
class Gestor {
    constructor(bibliografia) {
        this.bibliografia = bibliografia;
    }
    /**
     * Función que muestra por pantalla los titulos de los diferentes articulos en formato tabla
     */
    table() {
        console.table(this.bibliografia, ["title"]);
    }
    /**
     * Función que que filtro dado un string por editorial, palabras claves, autores y fechas y muestra el resultado
     * en una tabla y su formato APA.
     * @param filtro tipo string que contiene la palabras o palabras para realizar el filtro
     * @returns retorna un string para comprobar que ha salido bien la ejecución
     */
    filter(filtro) {
        let filtrado = [];
        this.bibliografia.forEach((articulo) => {
            let keywords = articulo.keywords.join("");
            let date = articulo.date.toLocaleDateString();
            let editorial = articulo.editorial;
            let autor = articulo.autor.join("");
            if (keywords.search(filtro) != -1 || date.search(filtro) != -1 || editorial.search(filtro) != -1 || autor.search(filtro) != -1) {
                filtrado.push(articulo);
            }
        });
        console.table(filtrado, ["title"]);
        console.log(this.export(filtrado));
        return filtrado[0].autor[0];
    }
    /**
     * Función que que exporta el formato APA para revista electrónica sin DOI
     * @param articulos array de tipo Article
     * @returns array de string con string con formato APA para revista electrónica sin DOIS
     */
    export(articulos) {
        let apaformat = [];
        articulos.forEach((articulo) => {
            apaformat.push(articulo.APAFormat());
        });
        return apaformat;
    }
}
exports.Gestor = Gestor;
