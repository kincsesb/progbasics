// 1. Gyakorlófeladat megoldása assas
const prompt = require('prompt-sync')();


let buyernam = prompt("Mi a neved?");
console.log(`Hello!\n ${buyernam}`);
let productQuantity = prompt(`Hány terméket szeretnél vásárolni?`);
console.log(`Ennyi a termek szam\n ${productQuantity}`);
let productname = prompt(`Milyen terméket szeretnél vásárolni?`);
console.log(`Ez a kivalasztott termek\n ${productname}`);

let vegOsszeg = 0;

function parosVagyParatlan (number){
    if(number==0) {
        console.log("Ez nulla!");
    } else if (number%2==0){
        console.log("Páros szám bástya!");
    } else if (number%2!=0){
        console.log("Páratlan");
    }
}
parosVagyParatlan(3);
parosVagyParatlan(12);
parosVagyParatlan(0);
console.log("__________________________________________________________________________")

// 2. Gyakorlófeladat megoldása
function nevEsEletkor (nev, eletkor){
    console.log(`Szia, ${nev}! Te ${eletkor} éves vagy!`);
}
// 3. Gyakorlófelada megoldása
function vizsgaEredmeny (pontszam){
    if (pontszam < 0 ) {
        return 'Ez nem valid pontszám Bástya!';
    } else if (pontszam >= 0 && pontszam <= 49 ) {
        return 'Ez Elégtelen!';
    } else if ( pontszam >= 50 && pontszam <= 69 ) {
        return 'Ez Megfelelt!';
    } else if ( pontszam >=70 && pontszam <= 89) {
        return 'Ez Jó!';
    } else if ( pontszam >= 90 && pontszam <= 100) {
        return 'Kiváló!!';
    } else if (pontszam > 100 ) {
        return 'Túl sok pont, ez tuti valid??';
    }
}

console.log(vizsgaEredmeny(-11));
console.log(vizsgaEredmeny(0));
console.log(vizsgaEredmeny(66));
console.log(vizsgaEredmeny(113));
console.log(vizsgaEredmeny(79));
console.log(vizsgaEredmeny(99));
// 1. Házi

let kenyer = {
    name: "Kenyer",
    price: 12000,
    inStock: true
};

let cipo = {
    name: "Cipo",
    price: 55000,
    inStock: false
}

let kalacs = {
    name: "Kalacs",
    price: 1434,
    inStock: true
}


let products = [kenyer, cipo, kalacs];

function calculateTotal (product1, darab){
    
    if (darab == 0){
        console.log('Nincs mit számolni.');
    } else if (product1.inStock == true && darab > 0){
        console.log(product1.price*darab);
        console.log(darab);
        console.log(product1.price);
        vegOsszeg = product1.price*darab;

    } else if (product1.inStock == false) {
        console.log('Sajnáljuk, a termék nincs készleten.');
    }
};


console.log(products);
console.log('Productquatity= ', productQuantity)
if (productQuantity == 0) {
    console.log ('Nincs mit számolni.');
} else if (products[0].name == productname ) {
    calculateTotal(products[0], productQuantity);
} else if (products[1].name == productname ) {
    calculateTotal(products[1], productQuantity);
}else if (products[2].name == productname ) {
    calculateTotal(products[2], productQuantity);
}

console.log(`${buyernam}, a végösszeged ${vegOsszeg} Ft.`);