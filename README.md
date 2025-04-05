## **Teszt Automatizálás Oktatás – 3. alkalom: HTML elemek kezelése, iframe-ek, Shadow DOM és Event Listener-ek**

**Időtartam:** 2x45 perc (1x15 perc szünettel)  
**Célcsoport:** Tesztelést tanulók, akik szeretnék megérteni a HTML szerkezetet és annak tesztelési szempontjait  

---

## **Forgatókönyv**

---

### **I. Bevezetés – Miért fontos megérteni a HTML-t teszteléskor? (10 perc)**

A HTML alapvető elemeinek és azok viselkedésének ismerete kulcsfontosságú a tesztelés során. Néhány példa, hogy miért:

✅ Egyes elemek nehezen érhetők el (pl. Shadow DOM, Iframe-ek).  
✅ Stabil szelektorok használata kiemelten fontos az automatizált tesztelés során.  
✅ Az eseménykezelések és a DOM manipuláció hibaforrások lehetnek.  

---

### **II. HTML elemek alapjai (20 perc)**

#### **1. HTML alapok és fontos attribútumok tesztelés szempontjából**
- **`id`** – Egyedi azonosító, amely segít könnyen kiválasztani egy elemet.
- **`class`** – Stílus és több elem azonosítására alkalmas.
- **`data-*` attribútumok (pl. `test-key`)** – Teszteléshez stabil szelektor.
- **`innerText`** – Az elem szöveges tartalma.
- **`textContent`** – Hasonló az `innerText`-hez, de megőrzi a rejtett szövegeket is.
- **`innerHTML`** – Az elem HTML tartalmát adja vissza.

✅ **`innerText` vs `textContent` különbsége:**  
- `innerText` csak a látható szöveget mutatja.  
- `textContent` minden szöveget visszaad, még a rejtetteket is.

---

#### **2. Példa – HTML elem lekérése különböző módokon**
```javascript
// 🔹 ID alapján történő lekérés
const elementById = document.getElementById('username');
console.log('📋 ID alapján:', elementById.value);

// 🔹 `test-key` attribútum használata (ajánlott teszteléshez)
const elementByTestKey = document.querySelector('[test-key="submit-button"]');
console.log('✅ `test-key` alapján:', elementByTestKey);

// 🔹 Név vagy egyéb attribútum alapján (NEM IDEÁLIS MÓDSZER)
const elementByName = document.querySelector('input[name="email"]');
console.log('⚠️ Név alapján (gyengébb szelektor):', elementByName.value);
```

---

### **III. Shadow DOM – Mi ez és miért fontos? (20 perc)**

✅ A **Shadow DOM** egy különálló DOM-fában lévő elem, amely elszigetelt a fő DOM-tól.  
✅ Egyes webalkalmazások fontos elemeit Shadow DOM-ban helyezik el a védelem és a szervezés miatt.  
✅ A Shadow DOM tesztelése **bonyolultabb**, mert alapértelmezetten nem látható.

---

#### **1. Shadow DOM elérése – Példa**
```javascript
// 🔹 Shadow DOM próbálkozás közvetlenül (NEM FOG MŰKÖDNI)
const shadowHost = document.querySelector('.shadow-host');
const shadowContentBefore = shadowHost.querySelector('div');
console.log('🚫 Shadow DOM nyitás előtt:', shadowContentBefore); // NULL

// 🔹 Shadow DOM helyes módja (kinyitás után)
const shadowRoot = shadowHost.shadowRoot;
const shadowContentAfter = shadowRoot.querySelector('div');
console.log('✅ Shadow DOM nyitás után:', shadowContentAfter.textContent);
```

---

### **IV. Iframe-ek – Miért jelentenek problémát és hogyan kezeljük őket? (20 perc)**

✅ Az **iframe** egy HTML dokumentum beágyazása egy másik dokumentumba.  
✅ Biztonsági okokból a böngészők korlátozzák a különböző domainről származó iframe-ek tartalmának elérését (`cross-origin policy`).  

---

#### **1. Iframe kezelése – Példa**
```javascript
// 🔹 Külső (cross-origin) iframe – NEM FOG MŰKÖDNI
const externalIframe = document.querySelector('[test-key="external-iframe"]');
externalIframe.addEventListener('load', () => {
    try {
        const iframeDocument = externalIframe.contentDocument || externalIframe.contentWindow.document;
        console.log('🚫 Külső iframe tartalma (NEM ELÉRHETŐ):', iframeDocument.body.innerHTML);
    } catch (error) {
        console.log('❌ Külső iframe tartalma nem elérhető cross-origin policy miatt.');
    }
});

// 🔹 Belső iframe – ELÉRHETŐ
const internalIframe = document.querySelector('[test-key="internal-iframe"]');
internalIframe.addEventListener('load', () => {
    const iframeDocument = internalIframe.contentDocument || internalIframe.contentWindow.document;
    console.log('✅ Belső iframe tartalma:', iframeDocument.getElementById('iframe-text').textContent);
});
```

---

### **V. Event Listener-ek és Event Bubbling (30 perc)**

✅ Az **Event Listener** egy olyan függvény, amely reagál egy felhasználói eseményre (pl. kattintás, űrlap beküldése).  
✅ Az események felfelé (buborékolás) és lefelé (capture) is terjedhetnek a DOM-fán.  

---

#### **1. Alap Event Listener példa**
```javascript
const button = document.querySelector('[test-key="submit-button"]');

button.addEventListener('click', () => {
    console.log('✅ Gombra kattintottak!');
});
```

---

#### **2. Event Bubbling példa (Hogyan terjed felfelé?)**
```html
<div id="outer">
  <div id="inner">
    <button id="btn">Kattints rám!</button>
  </div>
</div>
```

```javascript
document.getElementById('outer').addEventListener('click', () => {
    console.log('🔺 Külső div elkapta az eseményt!');
});

document.getElementById('inner').addEventListener('click', () => {
    console.log('🔹 Belső div elkapta az eseményt!');
});

document.getElementById('btn').addEventListener('click', (event) => {
    console.log('🟢 Gombra kattintottak!');
    event.stopPropagation(); // Megállítja az esemény buborékolását
});
```

✅ **Kimenet:**  
```
🟢 Gombra kattintottak!
🔹 Belső div elkapta az eseményt!
🔺 Külső div elkapta az eseményt!
```

## 🚀 **Cél:** A résztvevők képesek legyenek hatékonyan kezelni HTML elemeket, iframe-eket és Shadow DOM-okat tesztelési környezetben.