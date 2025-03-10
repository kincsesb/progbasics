### **Teszt Automatizálás Oktatás – 1. alkalom: Változók, Típusok és Git Alapok (JavaScript)**

**Időtartam:** 2 óra (1x15 perc szünettel)  
**Célcsoport:** Teljesen kezdők, akik nem rendelkeznek programozási alapismeretekkel  
[[__TOC__]]
---

### **Forgatókönyv**

### **I. Bevezetés – Alapok és környezet előkészítése (20 perc)**
1. **Programozás gyors áttekintés**
   - Miért van szükség programozásra a teszt automatizálásban?
   - Miért JavaScript? (Elterjedt, könnyen tanulható, teszteléshez ideális)
2. **Környezet előkészítése**
   - Visual Studio Code + Node.js telepítve van-e?
   - Alternatív live coding lehetőség: [JSFiddle](https://jsfiddle.net/) vagy [CodePen](https://codepen.io/)
3. **"Hello World!" program – Gyors sikerélmény**
   ```javascript
   console.log("Hello World!");
   ```

---

### **II. Változók – Alapfogalmak és típusok (40 perc)**
1. **Mi az a változó?**
   - Hasonlat: Változó = "doboz", amiben értékeket tárolunk.
   - Miért fontosak a változók? (Adatok tárolása, módosítása, feldolgozása)

2. **Változók létrehozása és kulcsszavak**
   - `let`, `const`, `var` magyarázata és különbségei:

| Kulcsszó | Jellemzők |
|:-----------|:-----------------------|
| `let`       | Újabb standard, rugalmas, biztonságosabb. Értéke módosítható. |
| `const`     | Nem módosítható érték. Statikus konstansokhoz ideális. |
| `var`       | Régi módszer, kerülendő. (Scope-problémák miatt) |

3. **Példák különböző típusú változókra**
   ```javascript
   let name = "Anna";      // Szöveg (string)
   let age = 30;           // Szám (number)
   const pi = 3.14159;     // Állandó érték (const)
   let isActive = true;    // Logikai érték (boolean)

   console.log("Név:", name);
   console.log("Kor:", age);
   console.log("Pi értéke:", pi);
   console.log("Aktív-e:", isActive);
   ```

4. **Típusok ismertetése**
   - **String** – Szöveg
     - Template Literals (` `) — dinamikus értékbeillesztés:
       ```javascript
       let name = "Anna";
       console.log(`Szia, ${name}!`);
       ```

   - **Number** – Számok
     - Egész számok (`int`) és lebegőpontos számok (`float`) ugyanúgy kezelve

   - **Boolean** – Logikai érték (`true`, `false`)

   - **Null és Undefined**
     - `null`: tudatosan üres érték
     - `undefined`: érték nincs definiálva

---

### **III. Szünet (15 perc)**

---

### **IV. Műveletek a változókkal (25 perc)**
1. **Alapvető műveletek**
   - **Számokkal végzett műveletek**
     ```javascript
     let a = 5;
     let b = 3;

     console.log("Összeadás:", a + b);
     console.log("Kivonás:", a - b);
     console.log("Szorzás:", a * b);
     console.log("Osztás:", a / b);
     console.log("Maradékos osztás:", a % b);
     ```

   - **String összefűzés (concatenation)**
     ```javascript
     let firstName = "Péter";
     let lastName = "Kovács";
     console.log("Teljes név:", firstName + " " + lastName);
     ```

2. **Típuskonverziók**
   - Szövegből számmá alakítás:
     ```javascript
     let str = "42";
     let num = Number(str);
     console.log("Szövegből szám:", num);
     ```

   - Számból szöveggé alakítás:
     ```javascript
     let num = 42;
     let str = num.toString();
     console.log("Számból szöveg:", str);
     ```

---

### **V. Git Alapok (25 perc)**
1. **Mi az a Git?**
   - Verziókezelő rendszer, ami lehetővé teszi a kódváltozások nyomon követését és kezelését.
   - Miért fontos? (Visszalépés a korábbi verziókra, párhuzamos munka támogatása)

2. **Alapfogalmak:**
   - **Repository (repo):** A projekt tárolója.
   - **Commit:** Egy adott állapot mentése.
   - **Branch (ág):** Egy különálló munkafolyamat.
   - **Merge:** Ágak egyesítése.

3. **Gyakorlati bemutató (live coding)**
   ```bash
   git init                # Új repository létrehozása
   git status              # Repository állapotának megtekintése
   git add .               # Fájlok hozzáadása a staging area-hoz
   git commit -m "Első commit"  # Változások mentése
   ```

4. **Távoli repository kapcsolódása (GitHub)**
   - Felhasználói fiók létrehozása és kapcsolat beállítása
   - Példa:
   ```bash
   git remote add origin <URL>
   git push -u origin main
   ```

---

### **VI. Interaktív Gyakorlófeladatok (15 perc)**
1. **Feladat 1:** Készítsenek egy új projektet, amely tartalmaz egy `index.js` fájlt és egy `console.log()` üzenetet.
2. **Feladat 2:** A projektet inicializálják Git-tel, készítsenek egy első commitot, majd írjanak egy újabb üzenetet a kódban, amit újra commitoljanak.

---

### **VII. Összefoglalás és házi feladat (10 perc)**
1. **Összefoglalás**
   - Mikor használjunk `let`-et vagy `const`-ot?
   - Mi a különbség `null` és `undefined` között?
   - Git alapvető parancsok ismétlése.

2. **Házi feladat**
   - Írjanak egy programot, amely bekér egy nevet és egy életkort, majd kiírja a konzolra.
   - Hozzanak létre egy új Git repository-t, amelyben commitolják a kész kódot.

---

### **VIII. Zárás (5 perc)**
- Mondd el, hogy a következő alkalommal feltételes elágazásokra és logikai műveletekre fogtok fókuszálni.
- Bátorítsd őket, hogy bátran kísérletezzenek és gyakoroljanak a hét folyamán.

---