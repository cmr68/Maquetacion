import { Professional } from "../profesional"
import { Movie } from "../movie";
import { Imbd } from "../imbd";
const fs = require('fs');
const readLine = require('readline-sync')

// Movie 1
let actor1 = new Professional("Javier ", 30, 70, 180, false, "España", 0, "Actor");
let actor2 = new Professional("María", 35, 65, 175, false, "Argentina", 1, "Actriz");
let movie = new Movie("La isla mínima", 2023, "España", "Drama");
let director = new Professional("Francisco", 68, 78, 190, false, "España", 3, "Director");
let writer = new Professional("Isabel", 33, 56, 162, false, "Bulgara", 3, "Escritora");
movie.language = "Español";
movie.plataforma = "Online";
movie.isMCU = true;
movie.mainCharacterName = "LIM";
movie.producer = "El elefante azul";
movie.distributor = "Leny's"
movie.actors  = [actor1,actor2];
movie.director = director;
movie.writer = writer;

// Movie 2
let actor3 = new Professional("Francisca ", 30, 70, 180, false, "Italia", 0, "Actor");
let actor4 = new Professional("Ramona", 35, 65, 175, false, "Argentina", 1, "Actriz");
let movie2 = new Movie("Celda 211", 2023, "España", "Drama");
let director2 = new Professional("Beatriz", 68, 78, 190, false, "España", 3, "Director");
let writer2 = new Professional("Jesus", 33, 56, 162, false, "Bulgara", 3, "Escritora");
movie2.language = "Italiano";
movie2.plataforma = "Cines";
movie2.isMCU = false;
movie2.mainCharacterName = "C211";
movie2.producer = "El gato negro";
movie2.distributor = "Fanny"
movie2.actors  = [actor3,actor4];
movie2.director = director2;
movie2.writer = writer2;

// Array movie
let array = [movie,movie2]
let imdb = new Imbd(array);
//Convetir el objeto imdb en JSON string
let imdbJsonString = JSON.stringify(imdb, null, 2);
console.log(imdbJsonString);

//Guardar el objeto imdb en un archivo llamado imdbBBDD.json
fs.writeFileSync("imdbBBDD.json", imdbJsonString);

//Leer el contenido de "imdbBBDD.json" 
const data = fs.readFileSync('imdbBBDD.json', 'utf-8');
let imdbData = JSON.parse(data);
let imdbInstance = new Imbd (imdbData);

for (const pelicula of imdbData){
    imdbInstance.addMovie(pelicula);
}


