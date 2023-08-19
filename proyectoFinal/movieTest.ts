import { Professional } from "./profesional";
import { Movie } from "./movie";

let actor1 = new Professional("Actor 1", 30, 70, 180, false, "Country 1", 0, "Actor");
let actor2 = new Professional("Actor 2", 35, 65, 175, false, "Country 2", 1, "Actor");
let movie = new Movie("Título de la película", 2023, "Country 3", "Drama");
let director = new Professional("Director", 68, 78, 190, false, "Country 3", 3, "Director");
let writer = new Professional("Escritor", 33, 56, 162, false, "Country 4", 3, "Escritor");
movie.language = "Español";
movie.plataforma = "Online";
movie.isMCU = true;
movie.mainCharacterName = "Name";
movie.producer = "El elefante azul";
movie.distributor = "Leny's"
movie.actors  = [actor1,actor2];
movie.director = director;
movie.writer = writer;
movie.printMovie();