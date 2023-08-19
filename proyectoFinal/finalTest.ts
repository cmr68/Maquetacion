import { Professional } from './profesional';
import { Movie } from './movie';
import { Imbd } from './imbd';
const readline = require('readline-sync');


// Movie 1
let actor1 = new Professional("Javier", 30, 70, 180, false, "España", 0, "Actor");
let actor2 = new Professional("Maria", 35, 65, 175, false, "Argentina", 1, "Actriz");
let movie = new Movie("La isla minima", 2023, "España", "Drama");
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

imdb.escribirEnFicheroJSON('nuev.JSON')
const imdbFromJSON = imdb.obtenerInstancialIMDB('nuev.JSON')
console.log(imdbFromJSON);



let userName = readline.question('¿Que actor es?');

if(userName == 'Javier'){
    console.log(actor1);
    
}
if(userName == 'Maria'){
    console.log(actor2);
    
} 
if (userName == 'Francisca'){
    console.log(actor3);
    
}
if (userName == 'Ramona'){
    console.log(actor4);
    
}


let directorName = readline.question('¿Que director es?');

if(directorName == 'Francisco'){
    console.log(director);
    
}
if(directorName == 'Beatriz'){
    console.log(director2);
    
} 
let writerName = readline.question('¿Que escritor es?');

if(writerName == 'Isabel'){
    console.log(writer);
    
}
if(writerName == 'Jesus'){
    console.log(writer2);
    
} 

let movieName = readline.question('¿Que pelicula es?');

if(movieName == 'La isla minima'){
    console.log(movie);
    
}
if(movieName == 'Celda 211'){
    console.log(movie2);
    
}
