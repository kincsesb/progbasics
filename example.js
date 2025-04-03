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

  // 🔹 Form adatainak lekérése és kiíratása
  document.getElementById('userForm').addEventListener('submit', (event) => {
      event.preventDefault();

      const username = document.getElementById('username').value;
      const email = document.querySelector('input[name="email"]').value;
      const country = document.getElementById('country').value;
      const selectedGender = document.querySelector('input[name="gender"]:checked')?.value;

      console.log(`🧑 Név: ${username}`);
      console.log(`📧 Email: ${email}`);
      console.log(`🌍 Ország: ${country}`);
      console.log(`🚻 Nem: ${selectedGender || 'Nincs kiválasztva'}`);
  });
});
