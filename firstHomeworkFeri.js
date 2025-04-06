//1. feladat:

const prompt = require('prompt-sync')();

var username = prompt("Mi a neved gyermekem?");
console.log(`Szia, ${username}!`);

var age = prompt("Életkorod mennyi gyermek?");
console.log(`Életkor: ${age}`);

//3. feladat:

var firstFilm = {
    title: "Alien",
    director: "Tom Riply",
    releaseYear: 1991,
    isMovie: true
    
};

var secondFilm = {
    title: "Született Feleségek",
    director: "Andy Vajna",
    releaseYear: 2000,
    isMovie: false,
    episodeCount: 10

}

var thirdFilm = {
    title: "Hófehérke",
    director: "Amy Virgin",
    releaseYear: 2025,
    isMovie: true

}

var fourthFilm = {
    title: "A 3 kismalac",
    director: "Anne Hathaway",
    releaseYear: 1865,
    isMovie: true

}

var fifthFilm = {
    title: "Análrombolók",
    director: "Kovi",
    releaseYear: 2001,
    isMovie: true

}

var movies = [firstFilm, secondFilm, thirdFilm, fourthFilm, fifthFilm ];
console.log("Mozi lista:", movies);