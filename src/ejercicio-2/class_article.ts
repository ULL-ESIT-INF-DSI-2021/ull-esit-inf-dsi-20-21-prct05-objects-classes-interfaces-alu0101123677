export class Article {
  constructor(public title: string, public autor: string[], public email: string[], 
    public keywords: string[], public abstrac: string, public date: Date, public editorial: string,
    public citations: number){

    }
   
  APAFormat(): string {
    return `${this.autor}. (${this.date.getFullYear()}). ${this.title}. ${this.editorial}.`;
  }  
}