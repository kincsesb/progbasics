let name2 = prompt("Mi a neved?");
let age2 = prompt("Hány éves vagy?");
console.log(`Szia ${name2}, ${age2} éves`);
const movies = [
  (avatar = {
    title: "Avatár - Aang legendája",
    director: ["Michael Dante DiMartino", "Bryan Konietzko"],
    releaseYear: 2005,
    isMovie: false,
    episodeCount: 61,
  }),
  (onepiece = {
    title: "One Piece",
    director: "Eiichiro Oda",
    releaseYear: 1999,
    isMovie: false,
    episodeCount: 1122,
  }),
  (days = {
    title: "28 nappal később",
    director: "Danny Boyle",
    releaseYear: 2002,
    isMovie: true,
  }),
  (weeks = {
    title: "28 héttel később",
    director: "Juan Carlos Fresnadillo",
    releaseYear: 2007,
    isMovie: true,
  }),
  (years = {
    title: "28 évvel később",
    director: "Danny Boyle",
    releaseYear: 2025,
    isMovie: true,
  }),
];
for (let index = 0; index < movies.length; index++) {
  if (movies[index].isMovie == true) {
    console.log(
      "Film címe: " +
        movies[index].title +
        ",\n" +
        "Film rendezője: " +
        movies[index].director +
        ",\n" +
        "Film kiadási éve: " +
        movies[index].releaseYear
    );
  } else {
    console.log(
      "Sorozat címe: " +
        movies[index].title +
        ",\n" +
        "Sorozat rendezője: " +
        movies[index].director +
        ",\n" +
        "Sorozat kiadási éve: " +
        movies[index].releaseYear +
        ",\n" +
        "Sorozat epizódjainak száma: " +
        movies[index].episodeCount
    );
  }
}
