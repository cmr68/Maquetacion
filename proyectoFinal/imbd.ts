import { Movie } from "./movie";
const fs = require('fs');
export class Imbd{
    public peliculas: Movie[];
    constructor(peliculas:Movie[]){
        this.peliculas = peliculas;
    }
    addMovie(movie:Movie): void{
        this.peliculas.push(movie);
    }
    printImbd():void{
        this.peliculas.forEach((pelicula, index) => {
            console.log(`Pelicula ${index+1}:\n${pelicula.printMovie()}\n`);
        });
    }
    escribirEnFicheroJSON(nombreFichero: string): void{

        const data = JSON.stringify(this, null, 2);
        fs.writeFileSync(nombreFichero, data);
    }
    public obtenerInstancialIMDB(nombreFichero:string): Imbd{
        const data = fs.readFileSync(nombreFichero, 'utf-8')
        return JSON.parse(data)
    }
}
