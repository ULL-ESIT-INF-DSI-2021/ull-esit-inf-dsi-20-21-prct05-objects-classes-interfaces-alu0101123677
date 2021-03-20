import {Article} from './class_article'

export class Gestor {
    constructor(public bibliografia: Article[]){
    }

    table(){
      console.table(this.bibliografia, ["title"]);
    }

    filter(filtro: string){
      let filtrado: Article[] = [];
      this.bibliografia.forEach((articulo) => {
        let keywords: string = articulo.keywords.join("");
        let date: string = articulo.date.toLocaleDateString();
        let editorial: string = articulo.editorial;
        let autor: string = articulo.autor.join("");
        if (keywords.search(filtro) != -1 || date.search(filtro) != -1 || editorial.search(filtro) != -1 || autor.search(filtro) != -1) {
          filtrado.push(articulo);
        }
      });
      console.table(filtrado, ["title"]);
      console.log(this.export(filtrado));
    }

    export(articulos: Article[]): string[]{
      let apaformat: string[] = []
      articulos.forEach((articulo) => {
        apaformat.push(articulo.APAFormat());
      });
      return apaformat;
    }
}