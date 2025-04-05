// ------------------------
// CIKLUSOK (LOOP STRUCTURES)
// ------------------------

// 🔹 FOR LOOP – Hagyományos for ciklus
// Alkalmas fix számú ismétléshez

console.log('🔄 For ciklus példa:');
for (let index = 0; index < 5; index++) {
    console.log(`Lépés: ${index}`);
}

// 🔹 FOR LOOP - Tömb bejárása index alapján
const fruits = ['alma', 'banán', 'narancs'];

console.log('🍎 Gyümölcsök listája:');
for (let i = 0; i < fruits.length; i++) {
    console.log(`- ${fruits[i]}`);
}

// 🔹 FOR EACH – Modern megközelítés
// Közvetlenül iterál az elemek felett, nem kell az index
console.log('🍌 For Each példa:');

fruits.forEach( (fruit) => {
    console.log(`- ${fruit}`);
});

// 🔹 FOR...OF – Ideális tömbök és iterálható objektumok kezelésére
console.log('🍊 For...of példa:');
for (const fruit of fruits) {
    console.log(`- ${fruit}`);
}

// 🔹 FOR...IN – Objektum kulcsainak bejárása
const person = {
    name: 'Anna',
    age: 30,
    city: 'Budapest'
};

console.log('👤 For...in példa (Objektum kulcsai):');
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// 🔹 WHILE CIKLUS – Amíg a feltétel igaz, a ciklus fut
let counter = 0;

console.log('🔢 While ciklus példa:');

while (counter < 3) {
    console.log(`Számláló értéke: ${counter}`);
    counter++;
};

// 🔹 DO...WHILE CIKLUS – Legalább egyszer végrehajtja a blokkot
let number = 0;

console.log('🔄 Do...While ciklus példa:');
do {
    console.log(`Szám értéke: ${number}`);
    number++;
} while (number < 3);

// 🔹 BREAK – Ciklus megszakítása
console.log('⛔ Break példa:');
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        console.log('Megszakítás itt:', i);
        break;
    }
    console.log(`Lépés: ${i}`);
}

// 🔹 CONTINUE – Ugrás a következő iterációra
console.log('⏩ Continue példa:');
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        console.log('Ugrás itt:', i);
        continue;
    }
    console.log(`Lépés: ${i}`);
}
