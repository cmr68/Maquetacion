import { Professional } from "./profesional";

export class Movie{
    public title: string;
    public releaseYear: number;
    public actors: Professional[];
    public nacionality: string;
    public director: Professional;
    public writer: Professional;
    public language: string;
    public plataforma: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: string;
    public distributor: string;
    public genre: string;

    constructor(title:string, releaseYear:number, nacionality:string, genre:string){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
        this.actors = [];
    }
    //------- Métodos públicos ------
    printMovie():string{
        let printActors = "";
        for(let actor of this.actors){
            printActors += actor.printProfessional();
        }
        let director = this.director.printProfessional();
        let writer = this.writer.printProfessional();
        return `Title: ${this.title} 
        Release year: ${this.releaseYear} 
        Actors: ${printActors} 
        Nacionality: ${this.nacionality}
        Director: \n${director}\n
        Writer: \n${writer}\n
        Language: ${this.language}
        Plataforma: ${this.plataforma}
        Is MCU: ${this.isMCU}
        Main Character Name: ${this.mainCharacterName}
        Producer: ${this.producer}
        Distributor: ${this.distributor}
        Genre: ${this.genre}`;
    }
}