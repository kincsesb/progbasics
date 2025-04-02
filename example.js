// ------------------------
// Változók példák
// ------------------------
// ✅ `let` - Olyan változókhoz használjuk, amelyeknek az értéke a későbbiekben módosulhat.
let name = 'Anna';

// ✅ `const` - Olyan változókhoz használjuk, amelyek értéke nem változik a program futása során.
const pi = 3.14159;

// ✅ `var` - Régi típusú változó létrehozás, ma már kerüljük. Problémás a `scope` (hatókör) miatt.
var oldVariable = 'Ez egy régi módszer, NE HASZNÁLD!';

let isActive = true; // Logikai érték (boolean)
let nullValue = null; // Null érték példa
let age = 10;

console.log('Név:', name);
console.log('Kor:', age);
console.log('Pi értéke:', pi);
console.log('Aktív-e:', isActive);
console.log(nullValue);

// ------------------------
// String műveletek
// ------------------------
console.log('\n=== String Műveletek ===');
let text = 'Hello, JavaScript világ!';

// ✅ .length - A string hosszának megállapítása
console.log('Szöveg hossza:', text.length);

// ✅ .toLowerCase() - Kisbetűssé alakítja a stringet
console.log('Kisbetűs:', text.toLowerCase());

// ✅ .toUpperCase() - Nagybetűssé alakítja a stringet
console.log('Nagybetűs:', text.toUpperCase());

// ✅ .includes() - Ellenőrzi, hogy tartalmaz-e egy adott szót vagy szövegrészletet
console.log("Tartalmazza-e a 'JavaScript' szót?:", text.includes('JavaScript'));

// ✅ .slice() - Szöveg kivágása adott kezdő és záró index között
console.log('Első 5 karakter:', text.slice(0, 5));

// ✅ .replace() - Egy adott szót vagy szövegrészletet lecserél egy másikra
console.log('Csere példa:', text.replace('JavaScript', 'JS'));

// ------------------------
// Number műveletek
// ------------------------
console.log('\n=== Number Műveletek ===');
let a = 5;
let b = 3;

// ✅ Összeadás
console.log('Összeadás:', a + b);

// ✅ Kivonás
console.log('Kivonás:', a - b);

// ✅ Szorzás
console.log('Szorzás:', a * b);

// ✅ Osztás
console.log('Osztás:', a / b);

// ✅ Maradékos osztás (Modulus)
console.log('Maradékos osztás (modulus):', a % b);

// ✅ .round() - Szám kerekítése a legközelebbi egészre
console.log('Kerekítés (Math.round):', Math.round(pi));

// ✅ .floor() - Lefelé kerekítés
console.log('Le kerekítés (Math.floor):', Math.floor(pi));

// ✅ .ceil() - Felfelé kerekítés
console.log('Fel kerekítés (Math.ceil):', Math.ceil(pi));

// ✅ Véletlenszám generálása 0 és 10 között
console.log('0 és 10 közötti véletlen szám:', Math.floor(Math.random() * 10));

// ------------------------
// Boolean műveletek
// ------------------------
console.log('\n=== Boolean Műveletek ===');

const hasLicense = true;
const isAdult = false;
// ✅ AND (&&) - Mindkét feltételnek igaznak kell lennie
console.log('AND művelet (&&):', hasLicense && isAdult);

// ✅ OR (||) - Legalább az egyik feltételnek igaznak kell lennie
console.log('OR művelet (||):', hasLicense || isAdult);

// ✅ NOT (!) - Egy érték ellentétét adja vissza (negálás)
console.log('NOT művelet (!):', !hasLicense);

// ------------------------
// Típuskonverziók
// ------------------------
console.log('\n=== Típuskonverziók ===');

let str = '42';
let num = Number(str);
console.log('Szövegből szám:', num);

let num2 = 42;
let str2 = num2.toString();
console.log('Számból szöveg:', str2);

// ------------------------
// Array (Tömb) műveletek
// ------------------------
console.log('\n=== Tömb Műveletek ===');

let fruits = ['alma', 'banán', 'cseresznye'];
// ✅ .push() - Új elem hozzáadása a tömb végéhez
fruits.push('narancs');

// ✅ .shift() - Első elem eltávolítása
fruits.shift();

// ✅ .pop() - Utolsó elem eltávolítása
fruits.pop();

// ✅ .includes() - Ellenőrzi, hogy tartalmazza-e az adott elemet
console.log('Tartalmazza-e a banánt?:', fruits.includes('banán'));

// ✅ .join() - Tömb összefűzése szöveggé
console.log('Tömb összefűzve:', fruits.join(', '));

// ✅ Index alapú elérés
console.log('Első elem:', fruits[0]);

// ------------------------
// Object (Objektum) műveletek
// ------------------------
console.log('\n=== Objektum Műveletek ===');

let person = {
  name: 'Anna',
  age: 30,
  isActive: true,
  hobbies: ['BJJ', 'programozás', 'futás'],
};
// ✅ Tulajdonság elérése
console.log('Név:', person.name);

// ✅ Új tulajdonság hozzáadása
person.city = 'Budapest';

// ✅ Tulajdonság módosítása
person.age = 31;

// ✅ Tulajdonság törlése
delete person.isActive;

// ✅ Objektum kulcsainak listázása
console.log('Objektum kulcsai:', Object.keys(person));

// ✅ Objektum értékeinek listázása
console.log('Objektum értékei:', Object.values(person));

// ------------------------
// IF-ELSE szerkezet
// ------------------------
console.log('\n=== IF-ELSE PÉLDA ===');

/*
Az if-else szerkezet egy feltételes elágazás, amely lehetővé teszi, 
hogy a kód különböző műveleteket hajtson végre attól függően, 
hogy egy megadott feltétel igaz vagy hamis értéket ad-e vissza. 
Az if után zárójelekben (()) adjuk meg a feltételt, amelyet ki szeretnénk értékelni. 
Ha a feltétel igaz (true), az if blokkban lévő kód fut le. Ha a feltétel hamis (false), 
és van else blokk, akkor annak tartalma hajtódik végre.

Az else if segítségével több feltételt is ellenőrizhetünk egymás után. 
Ha egy if blokkban a feltétel teljesül, a további else if vagy else blokkok már nem futnak le.
*/

// Életkor ellenőrzés
let userAge = 20;

if (userAge >= 18) {
  console.log('Felnőtt vagy.');
} else if (userAge >= 16) {
  console.log('Kiskorú vagy, de bizonyos helyekre beléphetsz.');
} else {
  console.log('Kiskorú vagy, nem léphetsz be.');
}

/*
A ternary operator (? :) egy rövidebb alternatívája az if-else szerkezetnek, 
amely egyszerű feltételek kiértékelésére ideális.
*/

// ------------------------
// Példa – Ternary Operator
// ------------------------

let isRaining = true;

// Ternary operator
let message = isRaining ? 'Esik az eső!' : 'Nincs eső, szép idő van.';
console.log(message);

// ------------------------
// Függvények (Functions)
// ------------------------

/*
A függvény a programozás egyik legfontosabb építőköve, amely lehetővé teszi, 
hogy egy adott műveletsort újra és újra felhasználjunk. 
A függvények célja, hogy a kódot strukturáltabbá, 
tisztábbá és könnyebben karbantarthatóvá tegyék. 
Egy függvény általában bemeneti adatokat (paramétereket) fogad, 
és egy eredményt (visszatérési értéket) ad vissza. 
A függvények lehetnek void típusúak is, 
amelyek nem adnak vissza értéket, 
csak végrehajtanak bizonyos műveleteket (pl. console.log()). 
A függvények fontos előnye, 
hogy segítenek elkerülni a kód ismétlését (DRY – Don't Repeat Yourself elv), 
így a program karbantarthatóbb és hatékonyabb lesz. 
Egy jól elnevezett függvény már önmagában dokumentálja, hogy mit csinál, 
például: calculateTotal(), getUserData() vagy logError().
 */

// ✅ Hagyományos függvény létrehozása
function greet(name) {
  console.log(`Szia, ${name}!`); // Nincs return = void függvény
}

greet('Anna');

// ✅ Arrow function (Modern függvény szintaxis)
/*
Az arrow function egy modernebb szintaxis, amely rövidebb és egyszerűbb módot kínál a függvények létrehozására. 
Különösen hasznos rövidebb, egyszerűbb függvényekhez. 
Ha a függvény csak egyetlen műveletet végez, a return kulcsszó és a kapcsos zárójelek ({}) is elhagyhatóak, ezzel még tömörebbé téve a kódot.
 

Bár az arrow function rövidebb szintaxissal rendelkezik, fontos tudni, 
hogy nem rendelkezik saját this értékkel, hanem a környezeti (lexikális) this-t örökli. 
Ez problémát okozhat például objektumokon belüli metódusok létrehozásánál. 
Emellett az arrow function nem használható arguments objektummal sem, 
ezért bizonyos helyzetekben a klasszikus függvények előnyösebbek.


A void függvények nem adnak vissza értéket, csak végrehajtanak egy műveletet, 
például adat kiíratása vagy állapot módosítása. 
Ezeket általában eseménykezelésnél vagy egyszerű logikai folyamatoknál használjuk.
*/
const greetArrow = (name) => console.log(`Szia, ${name}!`);
greetArrow('Péter');

// ✅ Függvény paraméterekkel és visszatérési értékkel

/*
A függvények általában egy értékkel térnek vissza, amelyet a return kulcsszóval adhatunk meg. 
A return kulcsszó azonnal megszakítja a függvény végrehajtását, így minden utána következő kódsor már nem fut le.
*/

function add(a, b) {
  return a + b;
}

console.log('Összeg:', add(3, 7));

// ✅ Arrow function verzió
const addArrow = (a, b) => a + b;
console.log('Összeg arrow-val:', addArrow(3, 7));

// ✅ Függvény `if-else` logikával
function checkNumber(num) {
  if (num > 0) {
    return 'Pozitív szám';
  } else if (num < 0) {
    return 'Negatív szám';
  } else {
    return 'Nulla';
  }
}

console.log(checkNumber(-5));

// ✅ Arrow function verzió
const checkNumberArrow = (num) =>
  num > 0 ? 'Pozitív szám' : num < 0 ? 'Negatív szám' : 'Nulla';
console.log(checkNumberArrow(-5));

// ------------------------
// VOID függvények
// ------------------------
// Void függvények NEM adnak vissza értéket (nincs return)
function logMessage(message) {
  console.log('Üzenet:', message);
}
logMessage('Ez egy void függvény példa.');

// ------------------------
// YIELD használat (Generátorfüggvény)
// ------------------------

/*
A generátorfüggvények (function*) olyan speciális függvények, amelyek több értéket tudnak lépésenként visszaadni a yield kulcsszó segítségével. 
Ezek rendkívül hasznosak, ha egy sorozat elemeit szeret.prettierrcnénk fokozatosan feldolgozni, például iteráció során.
*/
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = numberGenerator();

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

// ------------------------
// Metódus példa
// ------------------------
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  multiply: (a, b) => a * b, // Arrow function metódusként (nem ajánlott `this` miatt)
};

console.log('Metódus - Összeadás:', calculator.add(3, 5));
console.log('Metódus - Szorzás:', calculator.multiply(4, 2));

// ------------------------
// Prompt példa
// ------------------------
// prompt() csak böngészőben működik
// let username = prompt('Mi a neved?');
// console.log(`Szia, ${username}!`);

// ------------------------
// Git alapok
// ------------------------
// Parancsok (parancssorban futtatandóak)
// git init
// git status
// git add .
// git commit -m "Elso commit"
// git remote add origin <URL>
// git push -u origin main
