// Változók példák

// Változót létrehozhatunk let, const, var értékkel annak függvényében mit szeretnénk benne tárolni.

let name = "Anna";      // Szöveg (string)
let age = 30;           // Szám (number)
const pi = 3.14159;     // Állandó érték (const)
let isActive = true;    // Logikai érték (boolean)
let nullValue = null;   // null érték példa

console.log("Név:", name);
console.log("Kor:", age);
console.log("Pi értéke:", pi);
console.log("Aktív-e:", isActive);
console.log(nullValue);

// ------------------------alma
// String műveletek
// ------------------------
console.log("\n=== String Műveletek ===");
let text = "Hello, JavaScript világ!";

// String hosszának kiíratása
console.log("Szöveg hossza:", text.length);

// Kisbetűssé alakítás
console.log("Kisbetűs:", text.toLowerCase());

// Nagybetűssé alakítás
console.log("Nagybetűs:", text.toUpperCase());

// Részszöveg keresése
console.log("Tartalmazza-e a 'JavaScript' szót?:", text.includes("JavaScript"));

// Részszöveg kivágása
console.log("Első 5 karakter:", text.slice(0, 5));

// Szó csere
console.log("Csere példa:", text.replace("JavaScript", "JS"));

// ------------------------
// Number műveletek
// ------------------------
console.log("\n=== Number Műveletek ===");
let a = 5;
let b = 3;

console.log("Összeadás:", a + b);
console.log("Kivonás:", a - b);
console.log("Szorzás:", a * b);
console.log("Osztás:", a / b);
console.log("Maradékos osztás (modulus):", a % b);

// Kerekítés
console.log("Kerekítés (Math.round):", Math.round(pi));
console.log("Le kerekítés (Math.floor):", Math.floor(pi));
console.log("Fel kerekítés (Math.ceil):", Math.ceil(pi));

// Random szám generálása
console.log("0 és 10 közötti véletlen szám:", Math.floor(Math.random() * 10));

// ------------------------
// Boolean műveletek
// ------------------------
console.log("\n=== Boolean Műveletek ===");

const hasLicense = true;
const isAdult = false;

console.log("AND művelet (&&):", hasLicense && isAdult);  // Mindkettő igaz kell legyen
console.log("OR művelet (||):", hasLicense || isAdult);   // Legalább egyik igaz
console.log("NOT művelet (!):", !hasLicense);             // Negálás (ellenkező érték)

// ------------------------
// Típuskonverziók
// ------------------------
console.log("\n=== Típuskonverziók ===");
let str = "42";
let num = Number(str);  // Szövegből szám
console.log("Szövegből szám:", num);

let num2 = 42;
let str2 = num2.toString();  // Számból szöveg
console.log("Számból szöveg:", str2);

// ------------------------
// Array (Tömb) műveletek
// ------------------------
console.log("\n=== Tömb Műveletek ===");

let fruits = ["alma", "banán", "cseresznye"];
console.log("Eredeti lista:", fruits);

// Új elem hozzáadása a végére
fruits.push("narancs");
console.log("Hozzáadás után:", fruits);

// Első elem eltávolítása
fruits.shift();
console.log("Első elem eltávolítva:", fruits);

// Utolsó elem eltávolítása
fruits.pop();
console.log("Utolsó elem eltávolítva:", fruits);

// Elem keresése
console.log("Tartalmazza-e a banánt?:", fruits.includes("banán"));

// Tömb összefűzése szöveggé
console.log("Tömb összefűzve:", fruits.join(", "));

// Index alapú elérés
console.log("Első elem:", fruits[0]);

// ------------------------
// Object (Objektum) műveletek
// ------------------------
console.log("\n=== Objektum Műveletek ===");

let person = {
    name: "Anna",
    age: 30,
    isActive: true,
    hobbies: ["BJJ", "programozás", "futás"]
};

// Objektum kiíratása
console.log("Eredeti objektum:", person);

// Tulajdonság elérése
console.log("Név:", person.name);
console.log("Életkor:", person.age);

// Új tulajdonság hozzáadása
person.city = "Budapest";
console.log("Kibővített objektum:", person);

// Tulajdonság módosítása
person.age = 31;
console.log("Életkor módosítva:", person.age);

// Tulajdonság törlése
delete person.isActive;
console.log("Törölt tulajdonság:", person);

// Objektum kulcsainak listázása
console.log("Objektum kulcsai:", Object.keys(person));

// Objektum értékeinek listázása
console.log("Objektum értékei:", Object.values(person));

// ------------------------
// Prompt példa
// ------------------------
// prompt() csak böngészőben működik
// Pl. futtasd ezt böngésző konzolban
let username = prompt("Mi a neved?");
console.log(`Szia, ${username}!`);

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
