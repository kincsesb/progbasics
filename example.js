document.addEventListener('DOMContentLoaded', () => {
  // ------------------------
  // HTML ELEMEK LEKÉRÉSE
  // ------------------------

  // 🔹 ID nélküli elem keresése - Rossz módszer
  const randomDiv = document.querySelector('.random-div');
  console.log('❗ ID nélküli elem (gyenge módszer):', randomDiv.textContent);

  // 🔹 `test-key` használata - Jó módszer
  const importantElement = document.querySelector('[test-key="important-element"]');
  console.log('✅ Fontos elem `test-key` alapján:', importantElement.textContent);

  // ------------------------
  // SHADOW DOM KEZELÉSE
  // ------------------------

  // 🔹 Shadow DOM elérés próbálkozás közvetlenül (NEM FOG MŰKÖDNI)
  const shadowHost = document.querySelector('.shadow-host');
  const shadowContentBefore = shadowHost.querySelector('div'); // ❌ Nem működik
  console.log('🚫 Shadow DOM nyitás előtt:', shadowContentBefore);

  // 🔹 Shadow DOM elérés NYITÁS UTÁN (HELYES MÓDSZER)
  const shadowRoot = shadowHost.shadowRoot; // Shadow DOM megnyitása
  const shadowContentAfter = shadowRoot.querySelector('div');
  console.log('✅ Shadow DOM nyitás után:', shadowContentAfter.textContent);

  // ------------------------
// IFRAME KEZELÉSE
// ------------------------

// 🔹 Külső (cross-origin) iframe kezelése
const externalIframe = document.querySelector('[test-key="external-iframe"]');

externalIframe.addEventListener('load', () => {
    try {
        const iframeDocumentBefore = externalIframe.contentDocument || externalIframe.contentWindow.document;

        if (iframeDocumentBefore) {
            console.log('🚫 Külső iframe tartalma (NEM ELÉRHETŐ):', iframeDocumentBefore.body.innerHTML);
        } else {
            console.log('❌ Külső iframe tartalma nem elérhető.');
        }
    } catch (error) {
        console.log('❌ Külső iframe tartalma nem elérhető cross-origin policy miatt.');
    }
});

// 🔹 Belső (azonos domainen lévő) iframe kezelése
const internalIframe = document.querySelector('[test-key="internal-iframe"]');

internalIframe.addEventListener('load', () => {
    try {
        const iframeDocument = internalIframe.contentDocument || internalIframe.contentWindow.document;

        if (iframeDocument) {
            const iframeText = iframeDocument.getElementById('iframe-text').textContent;
            console.log('✅ Belső iframe tartalma:', iframeText);
        } else {
            console.log('❌ Belső iframe tartalma nem elérhető.');
        }
    } catch (error) {
        console.log('❌ Belső iframe tartalma nem elérhető közvetlenül.');
    }
});

  // ------------------------
  // ESEMÉNYKEZELÉS
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
