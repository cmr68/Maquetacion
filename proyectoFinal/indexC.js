// Pelicualas iniciales en la web
const movie1 = new Movie ('Interstellar', 2014, 'USA', 'Ciencia ficción', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_RccL1NBnzoF49rygF-O0YRB2-kIsi_u2OY4nhmV9hRCWbHok');
movie1.actors = ['Matthew McConaughey','Jessica Chastain','Anne Hathaway', 'Mackenie Foy', 'Timothée Chalamet', 'Matt Damon'];
movie1.director = 'Christopher Nolan';
movie1.writer = 'Jonathan Nolan';
movie1.language = 'English';
movie1.isMCU = false;
movie1.mainCharacterName = 'Dr. Mann';
movie1.producer = 'Lynda Rosen Obst';
movie1.distributor = 'Paramount Pictures';

const movie2 = new Movie ('Black Window', 2021, 'USA', 'Ciencia ficción', 'https://pics.filmaffinity.com/Viuda_negra-372790622-large.jpg');
movie2.actors = ['Scarlett Johansson', 'Florence Pugh', 'Rachel Weisz', 'David Harbour', 'Olga Kurylenko', 'Julia Louis-Dreyfus'];
movie2.director = 'Cate Shortland';
movie2.writer = 'Jac Schaeffer';
movie2.language = 'English';
movie2.isMCU = true;
movie2.mainCharacterName = 'Natasha Romanoff';
movie2.producer = 'Kevin Feige';
movie2.distributor = 'Marvel Studios';

const movie3 = new Movie ('Pulp Fiction', 1994, 'USA', 'Comedia y Drama', 'https://musicart.xboxlive.com/7/767c6300-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080');
movie3.actors = ['Quentin Tarantino', 'John Travolta', 'Samuel L. Jackson', 'Uma Thurman', 'Bruce Willis', 'Tim Roth'];
movie3.director = 'Quentin Tarantino';
movie3.writer = 'Quentin Tarantino';
movie3.language = 'English';
movie3.isMCU = false;
movie3.mainCharacterName = 'Vincen Vega';
movie3.producer = 'Lawrence Bender';
movie3.distributor = 'A Band Apart';

// Array movies
let registerMovies = [movie1,movie2,movie3];

//Cargar movies iniciales
const htmlMovies = i => {
    $('#movies').append(`
        <div class="movie">
            <div class="card" style="width: 18rem;">
                <img src="${registerMovies[i].photo}" class="card-img-top" alt="" id="card_img">
                <div class="card-body">
                    <h5 class="card-title text-light" id="titulo">${registerMovies[i].title}</h5>
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#infoModal${i}">
                    Ver ficha
                    </button>
                </div>
            </div>

            <!-- Modal -->
            <div class="modal fade" id="infoModal${i}" tabindex="-1" aria-labelledby="infoModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">${registerMovies[i].title}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                        <span class="fw-bold">Año:</span> ${registerMovies[i].releaseYear}<br>
                        <span class="fw-bold">Reparto:</span> ${registerMovies[i].actors}<br>
                        <span class="fw-bold">Nacionalidad:</span> ${registerMovies[i].nacionality}<br>
                        <span class="fw-bold">Director:</span> ${registerMovies[i].director}<br>
                        <span class="fw-bold">Escritor:</span> ${registerMovies[i].writer}<br>
                        <span class="fw-bold">Idioma:</span> ${registerMovies[i].language}<br>
                        <span class="fw-bold">¿MCU?:</span> ${registerMovies[i].isMCU}<br>
                        <span class="fw-bold">Nombre del/la protagonista:</span> ${registerMovies[i].mainCharacterName}<br>
                        <span class="fw-bold">Productor:</span> ${registerMovies[i].producer}<br>
                        <span class="fw-bold">Distribuidor:</span> ${registerMovies[i].distributor}<br>
                        <span class="fw-bold">Género:</span> ${registerMovies[i].genre}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
     </div>
    `);
}

let i=registerMovies.length;
const addMovie = () =>{
    let titulo = $('#input__titulo').val();
    let año = $('#input__año').val();
    let reparto = $('#input__reparto').val();
    let nacionalidad = $('#input__nacionalidad').val();
    let director = $('#input__director').val();
    let escritor = $('#input__escritor').val();
    let idioma = $('#input__idioma').val();
    let MCU = $('#input__MCU').val();
    let nombreProtagonista = $('#input__nombreProtagonista').val();
    let productor = $('#input__productor').val();
    let distribuidor = $('#input__distribuidor').val();
    let genero = $('#input__genero').val();
    let foto = $('#input__foto').val();

    let newMovie = new Movie(titulo,año,nacionalidad,genero,foto);
    newMovie.actors = reparto.split(',');
    newMovie.director = director;
    newMovie.writer = escritor;
    newMovie.language = idioma;
    newMovie.isMCU = MCU;
    newMovie.mainCharacterName = nombreProtagonista;
    newMovie.producer = productor;
    newMovie.distributor = distribuidor;
    registerMovies.push(newMovie);

    // muestra la nueva película por pantalla
    for (let j=i; j < registerMovies.length; j++) {
        htmlMovies(j);
    }
}

//Professionals
let professional1 = new Professional('Matthew McConaughey',53,61,180,false,'Estadounidense', 1, 'Actor','https://m.media-amazon.com/images/M/MV5BMTg0MDc3ODUwOV5BMl5BanBnXkFtZTcwMTk2NjY4Nw@@._V1_FMjpg_UX1000_.jpg');
let professional2 = new Professional('Scarlett Johansson', 39,58,160,false,'Estadounidense',2,'Actriz', 'https://media.vogue.es/photos/619bb42af6dca536c8fdb77c/2:3/w_2560%2Cc_limit/GettyImages-1205154708.jpg');
let professional3 = new Professional('Quentin Tarantino', 60,90,185,false,'Estadounidense',8,'Director','https://media.gettyimages.com/id/162600345/es/foto/writer-director-quentin-tarantino-winner-of-the-best-original-screenplay-award-for-django.jpg?s=612x612&w=gi&k=20&c=7BLKoI6uT46PPFdBTFhA4MBhJEzGB62TvCpZNaLYFGY=');

let registerProfessional = [professional1,professional2,professional3];

const htmlProfessional = i =>{
    $('#professional').append(`
        <div class="profesional">
            <div class="card" style="width: 18rem;">
                <img src="${registerProfessional[i].photo}" class="card-img-top" alt="" id="card_img">
                <div class="card-body">
                    <h5 class="card-title text-light" id="titulo">${registerProfessional[i].name}</h5>
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#infoProfModal${i}">
                    Ver ficha
                    </button>
                </div>
            </div>

            <!-- Modal -->
            <div class="openModal">
                <div class="modal fade" id="infoProfModal${i}" tabindex="-1" aria-labelledby="infoModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">${registerProfessional[i].name}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <span class="fw-bold">Edad:</span> ${registerProfessional[i].age}<br>
                        <span class="fw-bold">Peso:</span> ${registerProfessional[i].weight}<br>
                        <span class="fw-bold">Altura:</span> ${registerProfessional[i].height}<br>
                        <span class="fw-bold">¿Está retirado/a?:</span> ${registerProfessional[i].isRetired}<br>
                        <span class="fw-bold">Nacionalidad:</span> ${registerProfessional[i].nationality}<br>
                        <span class="fw-bold">Nº de Oscars ganados:</span> ${registerProfessional[i].oscarsNumber}<br>
                        <span class="fw-bold">Profesión:</span> ${registerProfessional[i].profession}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
      </div>
    `);
}

//cargar movies
const uploadMovies = () =>{
    for (let j=0; j < registerMovies.length; j++) {
        htmlMovies(j);
    }
}
//cargar profesionales
const uploadProfessional = () =>{
    for (let j = 0; j < registerProfessional.length; j++) {
        htmlProfessional(j);
    }
    // $('#seleccion-movies').css("display","flex");
}
//Cargar los datos 
const cargarDatos = () =>{
    uploadMovies();
    uploadProfessional();
}

