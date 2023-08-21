class Movie{

    constructor(title, releaseYear, nacionality, genre, photo){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
        this.photo = photo;
        this.actors = [];
        this.director = "";
        this.writer = "";
        this.language = "";
        this.plataforma = "";
        this.isMCU = false;
        this.mainCharacterName = "";
        this.producer = "";
        this.distributor = "";

    }
    //------- Métodos públicos ------
    printMovie(){
        let printActors = "";
        for(let actor of this.actors){
            printActors += console.log(actor);
        }
        console.log(`
        Title: ${this.title} 
        Release year: ${this.releaseYear} 
        Actors: ${printActors} 
        Nacionality: ${this.nacionality}
        Director: \n${this.director}\n
        Writer: \n${this.writer}\n
        Language: ${this.language}
        Plataforma: ${this.plataforma}
        Is MCU: ${this.isMCU}
        Main Character Name: ${this.mainCharacterName}
        Producer: ${this.producer}
        Distributor: ${this.distributor}
        Genre: ${this.genre}`);
    }
}