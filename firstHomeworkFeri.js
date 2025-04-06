//1. feladat:

const prompt = require('prompt-sync')();

//Ne használj var-t semmiképp! Vagy let vagy const. 
//Ebben a kontextusban minden lehetne const mert semmit se változtatsz rajtuk!
//Ugyan ez igaz a filmekre is.
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

//Ez eléggé low hanging fruit megoldás :D 
//Mármint a logolás

//Az volt a feladat hogy a részleteket logold ki.
//title, director, release year, isMovie, episodeCoutn
//Mivel már vettük a for-loopokat nyugodtan kilogolhatod őket for ciklussal!

console.log("Mozi lista:", movies);
