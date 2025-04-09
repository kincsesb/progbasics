## **JavaScript Haladó Ciklusok – `for`, `forEach`, `for...of`, `do...while`, stb.**

**Célcsoport:** Kezdők és haladó tesztelők számára, akik szeretnék mélyebben megérteni a ciklusok működését.

---

## **I. Bevezetés a ciklusokhoz**

A ciklusok lehetővé teszik egy adott kódrészlet **ismétlését** meghatározott számú alkalommal vagy egy adott feltétel teljesüléséig. A ciklusok fontos szerepet játszanak a tesztautomatizálásban, különösen akkor, ha tömeges adatokkal dolgozunk, ismétlődő folyamatokat hajtunk végre, vagy dinamikus elemeket kezelünk a DOM-ban.

---

## **II. For ciklus (`for`)**

A `for` ciklus klasszikus módja az ismétlődő műveletek végrehajtásának. Akkor hasznos, ha pontosan tudjuk, hányszor kell végrehajtani a ciklust.

### **Alap szintaxis**
```javascript
for (kezdőérték; feltétel; léptetés) {
    // Végrehajtandó kód
}
```

### **Példa:**
```javascript
for (let i = 0; i < 5; i++) {
    console.log(`Lépés: ${i}`);
}
```

✅ **Kimenet:**  
```
Lépés: 0
Lépés: 1
Lépés: 2
Lépés: 3
Lépés: 4
```

---

## **III. For Each ciklus (`forEach`)**

A `forEach` metódus egy modern alternatíva, amelyet főként tömbök elemeinek bejárására használunk. Egyszerűbb és elegánsabb szintaxissal rendelkezik.

### **Példa:**
```javascript
const fruits = ['alma', 'banán', 'narancs'];

fruits.forEach((fruit) => {
    console.log(fruit);
});
```

✅ **Kimenet:**  
```
alma
banán
narancs
```

---

## **IV. For...of ciklus (`for...of`)**

A `for...of` ciklus a `forEach`-hez hasonlóan kényelmes módja a tömbök és más iterálható objektumok kezelésének.

### **Példa:**
```javascript
const fruits = ['alma', 'banán', 'narancs'];

for (const fruit of fruits) {
    console.log(fruit);
}
```

✅ **Kimenet:**  
```
alma
banán
narancs
```

---

## **V. For...in ciklus (`for...in`)**

A `for...in` ciklust objektumok tulajdonságainak (kulcsainak) bejárására használjuk.

### **Példa:**
```javascript
const person = {
    name: 'Anna',
    age: 30,
    city: 'Budapest'
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}
```

✅ **Kimenet:**  
```
name: Anna
age: 30
city: Budapest
```

---

## **VI. While ciklus (`while`)**

A `while` ciklus addig fut, amíg a feltétel igaz (`true`). Akkor hasznos, ha nem tudjuk pontosan, hányszor kell ismételni a ciklust.

### **Példa:**
```javascript
let counter = 0;

while (counter < 3) {
    console.log(`Számláló értéke: ${counter}`);
    counter++;
}
```

✅ **Kimenet:**  
```
Számláló értéke: 0
Számláló értéke: 1
Számláló értéke: 2
```

---

## **VII. Do...While ciklus (`do...while`)**

A `do...while` ciklus legalább egyszer végrehajtja a ciklusblokkot, mielőtt ellenőrzi a feltételt.

### **Példa:**
```javascript
let number = 0;

do {
    console.log(`Szám értéke: ${number}`);
    number++;
} while (number < 3);
```

✅ **Kimenet:**  
```
Szám értéke: 0
Szám értéke: 1
Szám értéke: 2
```

---

## **VIII. Break és Continue**

A `break` és `continue` kulcsszavak segítségével **megszakíthatjuk** vagy **átugorhatjuk** a ciklus egyes lépéseit.

### **Break példa:**
```javascript
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        console.log('Megszakítás itt:', i);
        break;
    }
    console.log(`Lépés: ${i}`);
}
```

✅ **Kimenet:**  
```
Lépés: 0
Lépés: 1
Lépés: 2
Megszakítás itt: 3
```

---

### **Continue példa:**
```javascript
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        console.log('Ugrás itt:', i);
        continue;
    }
    console.log(`Lépés: ${i}`);
}
```

✅ **Kimenet:**  
```
Lépés: 0
Lépés: 1
Ugrás itt: 2
Lépés: 3
Lépés: 4
```

---

## **IX. Gyakorló feladatok**

✅ Írj egy `for` ciklust, amely kiírja a számokat **1-től 10-ig**.  
✅ Készíts egy `forEach` ciklust, amely egy gyümölcslistát ír ki.  
✅ Írj egy `while` ciklust, amely **5-ig** számol vissza.  
✅ Készíts egy `do...while` ciklust, amely mindig kiír egy értéket legalább egyszer.  
✅ Írj egy `for...in` ciklust, amely egy objektum kulcsait és értékeit logolja.  

---

## **X. Ciklusok Összehasonlítása**

| Ciklus típusa | Mikor használjuk?                          | Előnye                 | Hátránya            |
|----------------|--------------------------------------------|-------------------------|----------------------|
| `for`            | Ha pontosan tudjuk, hányszor fut a ciklus. | Precíz vezérlés.         | Hosszabb szintaxis.  |
| `forEach`         | Ha tömb elemein szeretnénk végighaladni.   | Tömör, egyszerű szintaxis.| Nem lehet megszakítani (`break`). |
| `for...of`        | Ha iterálható objektumokat kezelünk.        | Könnyű használni.        | Csak értékeket jár be. |
| `for...in`        | Ha objektumok kulcsait szeretnénk bejárni. | Objektumok kezelésére ideális. | Nem ajánlott tömbökre. |
| `while`           | Ha nem tudjuk előre, hányszor kell futnia. | Rugalmas feltételkezelés.| Végtelen ciklus veszélye. |
| `do...while`      | Ha legalább egyszer mindenképp végre kell hajtani a ciklust. | Garantált egyszeri lefutás. | Kevésbé elterjedt. |

---

## **XI. Házi Feladat**

A házifeladat részleteit a homework.js-ben találod :)

### 🚀 **Cél:** A házi feladat során gyakorolhatod az összes tanult ciklus szerkezetet és azok használatát változatos helyzetekben.