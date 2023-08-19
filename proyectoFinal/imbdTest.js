"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var imbd_1 = require("./imbd");
var movie_1 = require("./movie");
var profesional_1 = require("./profesional");
// Movie 1
var actor1 = new profesional_1.Professional("Javier ", 30, 70, 180, false, "España", 0, "Actor");
var actor2 = new profesional_1.Professional("María", 35, 65, 175, false, "Argentina", 1, "Actriz");
var movie = new movie_1.Movie("La isla mínima", 2023, "España", "Drama");
var director = new profesional_1.Professional("Francisco", 68, 78, 190, false, "España", 3, "Director");
var writer = new profesional_1.Professional("Isabel", 33, 56, 162, false, "Bulgara", 3, "Escritora");
movie.language = "Español";
movie.plataforma = "Online";
movie.isMCU = true;
movie.mainCharacterName = "LIM";
movie.producer = "El elefante azul";
movie.distributor = "Leny's";
movie.actors = [actor1, actor2];
movie.director = director;
movie.writer = writer;
// Movie 2
var actor3 = new profesional_1.Professional("Francisca ", 30, 70, 180, false, "Italia", 0, "Actor");
var actor4 = new profesional_1.Professional("Ramona", 35, 65, 175, false, "Argentina", 1, "Actriz");
var movie2 = new movie_1.Movie("Celda 211", 2023, "España", "Drama");
var director2 = new profesional_1.Professional("Beatriz", 68, 78, 190, false, "España", 3, "Director");
var writer2 = new profesional_1.Professional("Jesus", 33, 56, 162, false, "Bulgara", 3, "Escritora");
movie2.language = "Italiano";
movie2.plataforma = "Cines";
movie2.isMCU = false;
movie2.mainCharacterName = "C211";
movie2.producer = "El gato negro";
movie2.distributor = "Fanny";
movie2.actors = [actor3, actor4];
movie2.director = director2;
movie2.writer = writer2;
// Array movie
var array = [movie, movie2];
var imbd = new imbd_1.Imbd(array);
imbd.printImbd();
