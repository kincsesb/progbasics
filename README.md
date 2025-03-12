### **README – Teszt Automatizálás Oktatás – 1. alkalom: Változók, Típusok, HTML és Git Alapok (JavaScript)**


Bence Repository


**Időtartam:** 2 óra (1x15 perc szünettel)  
**Célcsoport:** Teljesen kezdők, akik nem rendelkeznek programozási alapismeretekkel  

---

## **Forgatókönyv**

---

### **I. Bevezetés – Miért JavaScript?**
- Miért van szükség programozásra a teszt automatizálásban?
- Miért éppen JavaScript?
  - Könnyen tanulható, széles körben használt.
  - Ideális mind frontend, mind backend tesztelésre.
  - Elterjedt eszközkészlet teszt automatizáláshoz (pl. Jest, Cypress, Playwright, WebDriverIO).

---

### **II. Környezet előkészítése**
- **Visual Studio Code**, **Node.js** és **Git** telepítésének ellenőrzése.
- **Live Server** bővítmény telepítése (VS Code-ban).
- Gyakorlati bemutató: 
  - Hozz létre egy `index.html` és egy `example.js` fájlt.

---

### **III. JavaScript Alapok – Változók és Típusok**
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

---

3. **Tömbök (Array) bemutatása**
- A **tömbök** olyan változók, amelyek több értéket tudnak tárolni egyetlen változóban.

**Tömb példa**
```javascript
let fruits = ["alma", "banán", "cseresznye"];
console.log("Első gyümölcs:", fruits[0]);  // alma
console.log("Összes gyümölcs:", fruits);

fruits.push("narancs"); // Új elem hozzáadása
console.log("Új lista:", fruits);

fruits.pop(); // Utolsó elem eltávolítása
console.log("Módosított lista:", fruits);
```

---

4. **Objektumok (Object) bemutatása**
- Az **objektumok** kulcs-érték párokból állnak, amelyek logikailag összetartozó adatokat tárolnak.

**Objektum példa**
```javascript
let person = {
    name: "Anna",
    age: 30,
    isActive: true
};

console.log(`Név: ${person.name}, Kor: ${person.age}, Aktív-e: ${person.isActive}`);
person.city = "Budapest";  // Új tulajdonság hozzáadása
console.log("Kibővített objektum:", person);
```

---

5. **Típuskonverziók bemutatása**
```javascript
let str = "42";
let num = Number(str);  // Szövegből szám
console.log("\nSzövegből szám:", num);

let num2 = 42;
let str2 = num2.toString();  // Számból szöveg
console.log("Számból szöveg:", str2);
```

---

6. **`prompt()` függvény – Felhasználói adatbekérés**
```javascript
let username = prompt("Mi a neved?");
console.log(`Szia, ${username}!`);
```

➡️ **Fontos:** A `prompt()` csak böngészőben működik. Ehhez használjuk a **Live Server** bővítményt.

---

### **IV. HTML Alapok**
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

### **VI. Verziókezelés – Git Alapok**
1. **Git fogalma és jelentősége**
2. **Gyakorlati bemutató – Parancsok**
```bash
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

### **VII. Gyakorlófeladatok és Házi feladat**

---

### **Feladat 1:**  
✅ Írj egy programot, amely bekér egy **nevet** és egy **életkort**, majd kiírja:  

---

### **Feladat 2:**  
✅ Inicializálj egy új **Git repository-t**, majd végezd el az alábbi műveleteket:  
1. Hozz létre egy új fájlt.  
2. Írd bele a korábban írt programot.  
3. Készíts róla **commit**-ot.  
4. Töltsd fel a projektet **GitHub-ra**.  

---

### **Feladat 3 – Bővítés: Kedvenc filmek listája**  
✅ A programodba építsd be a következő funkciót is:

1. Hozz létre egy **`movies`** nevű tömböt, amely **5 darab objektumot** tartalmaz.  
2. Minden objektumban legyenek az alábbi tulajdonságok:  
   - **`title`** – A film vagy sorozat címe (string).  
   - **`director`** – A film rendezője (string).  
   - **`releaseYear`** – A film vagy sorozat kiadási éve (number).  
   - **`isMovie`** – Boolean érték (`true` = film, `false` = sorozat).  
   - **`episodeCount`** – *(opcionális)* Csak akkor legyen benne, ha az `isMovie` értéke `false`.  

3. Logold ki az összes film vagy sorozat részleteit a konzolban.  

### **VIII. Összefoglalás és Zárás**
- Mondd el, hogy a következő alkalommal feltételes elágazásokra és logikai műveletekre fogtok fókuszálni.
- Bátorítsd őket, hogy bátran kísérletezzenek és gyakoroljanak a hét folyamán.

---

## **Összefoglalás – Időbeosztás**
✅ **Bevezetés + Környezet előkészítése** (15 perc)  
✅ **JavaScript Alapok (beleértve az Array és Object alapokat)** (40 perc)  
✅ **HTML Alapok** (15 perc)  
✅ **Szünet** (15 perc)  
✅ **Git Alapok** (20 perc)  
✅ **Gyakorlófeladatok + Házi feladat** (10 perc)  
✅ **Összefoglalás és Zárás** (5 perc)  

---