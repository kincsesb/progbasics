### **README – Teszt Automatizálás Oktatás – 1. alkalom: Változók, Típusok, HTML és Git Alapok (JavaScript)**

**Időtartam:** 2 óra (1x15 perc szünettel)  
**Célcsoport:** Teljesen kezdők, akik nem rendelkeznek programozási alapismeretekkel  

---

## **Forgatókönyv**

---

### **I. Bevezetés – Miért JavaScript? (5 perc)**
- Miért van szükség programozásra a teszt automatizálásban?
- Miért éppen JavaScript?
  - Könnyen tanulható, széles körben használt.
  - Ideális mind frontend, mind backend tesztelésre.
  - Elterjedt eszközkészlet teszt automatizáláshoz (pl. Jest, Cypress, Playwright, WebDriverIO).

---

### **II. Környezet előkészítése (10 perc)**
- **Visual Studio Code**, **Node.js** és **Git** telepítésének ellenőrzése.
- **Live Server** bővítmény telepítése (VS Code-ban).
- Gyakorlati bemutató: 
  - Hozz létre egy `index.html` és egy `example.js` fájlt.

---

### **III. JavaScript Alapok – Változók és Típusok (30 perc)**
1. **Változók bemutatása**
   - `let`, `const`, `var` magyarázata.
   - Mikor használjuk őket?

2. **Példák változókra**
```javascript
let name = "Anna";      // Szöveg (string)
let age = 30;           // Szám (number)
const pi = 3.14159;     // Állandó érték (const)
let isActive = true;    // Logikai érték (boolean)
let nullValue = null;   // Null érték
let x;                  // undefined érték

console.log("Név:", name);
console.log("Kor:", age);
console.log("Pi értéke:", pi);
console.log("Aktív-e:", isActive);
console.log(nullValue);  // null
console.log(x);          // undefined
```

3. **Típuskonverziók bemutatása**
```javascript
let str = "42";
let num = Number(str);  // Szövegből szám
console.log("\nSzövegből szám:", num);

let num2 = 42;
let str2 = num2.toString();  // Számból szöveg
console.log("Számból szöveg:", str2);
```

4. **`prompt()` függvény – Felhasználói adatbekérés**
```javascript
let username = prompt("Mi a neved?");
console.log(`Szia, ${username}!`);
```

➡️ **Fontos:** A `prompt()` csak böngészőben működik. Ehhez használjuk a **Live Server** bővítményt.

---

### **IV. HTML Alapok (15 perc)**
1. **HTML felépítésének alapjai**
2. **Gyakorlati példa – HTML szerkezet**
```html
<!DOCTYPE html>
<html>
<head>
    <title>HTML Példa</title>
</head>
<body>
    <h1>Főcím</h1>
    <p>Ez egy bekezdés.</p>
    <button id="myButton">Kattints ide!</button>
</body>
</html>
```

3. **JavaScript-tel történő manipuláció**
```javascript
const button = document.getElementById("myButton");
button.textContent = "Új szöveg";

button.addEventListener("click", function() {
    alert("Gomb megnyomva!");
});
```

---

### **V. Szünet (15 perc)**

---

### **VI. Verziókezelés – Git Alapok (20 perc)**
1. **Git fogalma és jelentősége**
2. **Gyakorlati bemutató – Parancsok**
```bash
git init                # Új repository létrehozása
git status              # Repository állapotának megtekintése
git add .               # Fájlok hozzáadása a staging area-hoz
git commit -m "Első commit"  # Változások mentése
```

3. **Távoli repository kapcsolódása (GitHub)**
```bash
git remote add origin <URL>
git push -u origin main
```

4. **SSH kulcs létrehozása és beállítása**
- **SSH kulcs generálása:**  
```bash
ssh-keygen -t ed25519 -C "youremail@example.com"
```
- **Kulcs hozzáadása GitHub-hoz**
  - Másold ki a kulcsot:  
```bash
cat ~/.ssh/id_ed25519.pub
```

---

### **VII. Gyakorlófeladatok és Házi feladat (30 perc)**
1. **Feladat 1:** Írj egy programot, amely bekér egy nevet és egy életkort, majd kiírja:  
   _"Szia, [név]! Te [kor] éves vagy."_

2. **Feladat 2:** Inicializálj egy új Git repository-t, majd végezd el az alábbi műveleteket:
   - Hozz létre egy új fájlt.
   - Írd bele a korábban írt programot.
   - Készíts róla commitot.
   - Töltsd fel a GitHub-ra.

---

### **VIII. Összefoglalás és Zárás (5 perc)**
- Mondd el, hogy a következő alkalommal feltételes elágazásokra és logikai műveletekre fogtok fókuszálni.
- Bátorítsd őket, hogy bátran kísérletezzenek és gyakoroljanak a hét folyamán.

---

## **Összefoglalás – Időbeosztás**
✅ **Bevezetés + Környezet előkészítése** (15 perc)  
✅ **JavaScript Alapok** (30 perc)  
✅ **HTML Alapok** (15 perc)  
✅ **Szünet** (15 perc)  
✅ **Git Alapok** (20 perc)  
✅ **Gyakorlófeladatok + Házi feladat** (30 perc)  
✅ **Összefoglalás és Zárás** (5 perc)  

---