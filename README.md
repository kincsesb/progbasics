### Teszt Automatizálás Oktatás – 2. alkalom: `if-else` szerkezet és függvények (JavaScript)\*\*

**Időtartam:** 2x45 perc (1x15 perc szünettel)  
**Célcsoport:** Teljesen kezdők, akik nem rendelkeznek programozási alapismeretekkel

---

## **Forgatókönyv**

---

### **I. Házi feladat megbeszélése + Ismétlő kérdéssor (20 perc)**

1. **Házi feladat megvitatása**

   - A korábbi feladatok átnézése.
   - Közös kódelemzés: kiemelni a gyakori hibákat és megoldásokat.
   - Rövid magyarázat az esetleges buktatókról.

2. **Ismétlő kérdéssor**
   - Kérdések az előző alkalom anyagából (pl. változók, típusok, string/number műveletek, tömbök, objektumok).

---

### **II. Bevezetés – Miért fontos az `if-else` és a függvények? (5 perc)**

- Az `if-else` szerkezet segít feltételek ellenőrzésében és különböző utasítások végrehajtásában.
- A függvények segítenek az ismétlődő kódrészeket újra felhasználhatóvá és szervezettebbé tenni.

---

### **III. `if-else` szerkezet – Alapok és példák (30 perc)**

1. **Alapvető `if-else` szerkezet**

   ```javascript
   let age = 18;

   if (age >= 18) {
     console.log('Felnőtt vagy.');
   } else {
     console.log('Még kiskorú vagy.');
   }
   ```

2. **`else if` szerkezet – Több feltétel ellenőrzése**

   ```javascript
   let temperature = 30;

   if (temperature > 30) {
     console.log('Nagyon meleg van!');
   } else if (temperature > 20) {
     console.log('Kellemes idő van.');
   } else if (temperature > 10) {
     console.log('Hűvös van.');
   } else {
     console.log('Nagyon hideg van.');
   }
   ```

### **3. Logikai műveletek az `if` szerkezetben**

A logikai műveletek lehetővé teszik, hogy több feltételt is ellenőrizzünk egyszerre.

---

### **AND (`&&`) művelet – Mindkét feltételnek igaznak kell lennie**

✅ **Csak akkor hajtódik végre az `if` blokk, ha MINDKÉT feltétel igaz.**

```javascript
let hasLicense = true;
let isSober = true;

if (hasLicense && isSober) {
  console.log('Vezethetsz autót.');
} else {
  console.log('Nem vezethetsz autót.');
}
```

✅ **Eredmény:** `"Vezethetsz autót."`

---

**Példa AND művelet hibás esetére:**

```javascript
let hasLicense = true;
let isSober = false;

if (hasLicense && isSober) {
  console.log('Vezethetsz autót.');
} else {
  console.log('Nem vezethetsz autót.');
}
```

❌ **Eredmény:** `"Nem vezethetsz autót."`  
➡️ A `&&` (AND) műveletnél ha bármelyik feltétel **hamis**, a teljes feltétel `false` lesz.

---

### **OR (`||`) művelet – Legalább egy feltételnek igaznak kell lennie**

✅ **Az `if` blokk akkor is lefut, ha csak az egyik feltétel igaz.**

```javascript
let hasUmbrella = false;
let hasRaincoat = true;

if (hasUmbrella || hasRaincoat) {
  console.log('Nem ázol meg.');
} else {
  console.log('Meg fogsz ázni.');
}
```

✅ **Eredmény:** `"Nem ázol meg."`

---

**Példa OR művelet hibás esetére:**

```javascript
let hasUmbrella = false;
let hasRaincoat = false;

if (hasUmbrella || hasRaincoat) {
  console.log('Nem ázol meg.');
} else {
  console.log('Meg fogsz ázni.');
}
```

❌ **Eredmény:** `"Meg fogsz ázni."`  
➡️ A `||` (OR) műveletnél csak akkor lesz a feltétel `false`, ha **mindkét feltétel hamis**.

---

4. **`if` szerkezet rövidítése (`ternary operator`)**

   ```javascript
   let score = 85;
   let result = score >= 50 ? 'Sikeres vizsga' : 'Sikertelen vizsga';
   console.log(result);
   ```

5. **Gyakorlati példa: Felhasználó adatbekérés és életkor ellenőrzés**
   ```javascript
   let age = prompt('Hány éves vagy?');
   if (age >= 18) {
     console.log('Beléphetsz.');
   } else {
     console.log('Sajnálom, nem léphetsz be.');
   }
   ```

---

### **IV. Szünet (15 perc)**

---

### **V. Függvények – Alapok és példák**

1. **Alapvető függvény létrehozása**

   ```javascript
   function greet(name) {
     console.log(`Szia, ${name}!`);
   }

   greet('Anna'); // Kiírja: "Szia, Anna!"
   greet('Péter'); // Kiírja: "Szia, Péter!"
   ```

2. **Visszatérési értékkel rendelkező függvény**

   ```javascript
   function add(a, b) {
     return a + b;
   }

   let result = add(5, 3);
   console.log('Összeg:', result); // Kiírja: "Összeg: 8"
   ```

3. **Függvény `if-else` szerkezettel**

   ```javascript
   function checkNumber(num) {
     if (num > 0) {
       return 'Pozitív szám';
     } else if (num < 0) {
       return 'Negatív szám';
     } else {
       return 'Nulla';
     }
   }

   console.log(checkNumber(10)); // Pozitív szám
   console.log(checkNumber(-5)); // Negatív szám
   console.log(checkNumber(0)); // Nulla
   ```

4. **Függvény több paraméterrel**

   ```javascript
   function calculateArea(width, height) {
     return width * height;
   }

   console.log('Terület:', calculateArea(5, 10)); // Terület: 50
   ```

5. **Függvény `default` értékkel**

   ```javascript
   function greet(name = 'vendég') {
     console.log(`Szia, ${name}!`);
   }

   greet(); // Kiírja: "Szia, vendég!"
   greet('Anna'); // Kiírja: "Szia, Anna!"
   ```

---

### **VI. Gyakorlófeladatok**

✅ Írj egy függvényt, amely egy számot fogad paraméterként és visszatér:

- `"Páros szám"` ha a szám páros.
- `"Páratlan szám"` ha a szám páratlan.

✅ Készíts egy függvényt, amely bekér egy nevet és egy életkort, majd visszatér az alábbi szöveggel:

- `"Szia, [név]! Te [kor] éves vagy."`
- **Tipp:** Használj template literal-t (` `).

✅ Készíts egy függvényt, amely bekér egy vizsga pontszámot és visszatér az eredménnyel:

- `"Kiváló"` (90 felett)
- `"Jó"` (70–89 között)
- `"Megfelelt"` (50–69 között)
- `"Elégtelen"` (50 alatt)

---

### **VII. Összefoglalás és Zárás**

- Ismételd át a legfontosabb fogalmakat:  
  ✅ `if-else` szerkezet és logikai műveletek  
  ✅ Függvények létrehozása, paraméterezése és visszatérési értéke  
  ✅ Gyakorlati példák megbeszélése

### **VIII. Házi feladat**

---

### **Feladat leírás**

---

### **1. Felhasználói adatbekérés (Prompt)**

- Kérdezd meg a felhasználótól a nevét.
- Kérdezd meg tőle, hogy hány terméket szeretne vásárolni.

---

### **2. Termékadatok tárolása (Object)**

- Hozz létre egy `products` nevű objektumot, amely tartalmaz **legalább 3 terméket**.
- Minden terméknek legyen:
  - **`name`** – A termék neve (string)
  - **`price`** – A termék ára (number)
  - **`inStock`** – Boolean érték (`true` = raktáron van, `false` = nincs raktáron)

---

### **3. Függvény készítése**

- Írj egy függvényt `calculateTotal` néven, amely:
  - Bemenetként kap egy **terméket** és egy **darabszámot**.
  - Ha a termék **elérhető** (`inStock`), számolja ki a teljes árat.
  - Ha a termék **nincs raktáron**, írja ki:
  - "Sajnáljuk, a termék nincs készleten."

---

### **4. Vásárlási folyamat logikája**

- Ha a felhasználó **0 terméket** szeretne vásárolni, írja ki:
- "Nincs mit számolni."

---

- Ha több mint **0 terméket** akar vásárolni:
  - Kérdezze meg, hogy **melyik terméket szeretné** (pl. `"Alma"`, `"Banán"`, `"Narancs"`).
  - Ellenőrizze, hogy a megadott termék szerepel-e a listában.
  - Ha igen, számolja ki az árat a megadott darabszám alapján.

---

### **5. Végső üzenet**

- Írja ki a felhasználó nevével együtt az összesítést, például:
- "Anna, a végösszeged 3000 Ft."
