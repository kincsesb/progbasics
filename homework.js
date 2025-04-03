const weapons = [
    { name: "M4A1", type: "gépkarabély", caliber: "5.56mm", range: "500m", isAvailable: true },
    { name: "AK-47", type: "gépkarabély", caliber: "7.62mm", range: "400m", isAvailable: true },
    { name: "Desert Eagle", type: "pisztoly", caliber: ".50 AE", range: "100m", isAvailable: false },
    { name: "Barrett M82", type: "sniper", caliber: ".50 BMG", range: "2000m", isAvailable: true },
    { name: "MP5", type: "géppisztoly", caliber: "9mm", range: "200m", isAvailable: true },
    { name: "Glock 17", type: "pisztoly", caliber: "9mm", range: "150m", isAvailable: false },
    { name: "FN SCAR", type: "gépkarabély", caliber: "7.62mm", range: "600m", isAvailable: true },
    { name: "HK416", type: "gépkarabély", caliber: "5.56mm", range: "600m", isAvailable: true },
    { name: "FAMAS", type: "gépkarabély", caliber: "5.56mm", range: "450m", isAvailable: false },
    { name: "SIG Sauer P226", type: "pisztoly", caliber: "9mm", range: "150m", isAvailable: true },
    { name: "Steyr AUG", type: "gépkarabély", caliber: "5.56mm", range: "500m", isAvailable: true },
    { name: "Tavor TAR-21", type: "gépkarabély", caliber: "5.56mm", range: "550m", isAvailable: true },
    { name: "CZ Scorpion EVO", type: "géppisztoly", caliber: "9mm", range: "200m", isAvailable: true },
    { name: "Colt Python", type: "pisztoly", caliber: ".357 Magnum", range: "150m", isAvailable: false },
    { name: "FN P90", type: "géppisztoly", caliber: "5.7mm", range: "200m", isAvailable: true },
    { name: "Mosin-Nagant", type: "sniper", caliber: "7.62mm", range: "800m", isAvailable: false },
    { name: "AWP", type: "sniper", caliber: ".338 Lapua", range: "1500m", isAvailable: true },
    { name: "Dragunov", type: "sniper", caliber: "7.62mm", range: "1300m", isAvailable: true },
    { name: "Walther PPK", type: "pisztoly", caliber: "7.65mm", range: "50m", isAvailable: true },
    { name: "Beretta 92FS", type: "pisztoly", caliber: "9mm", range: "100m", isAvailable: true },
    { name: "Ruger Mini-14", type: "gépkarabély", caliber: "5.56mm", range: "500m", isAvailable: false },
    { name: "SPAS-12", type: "sörétes", caliber: "12 Gauge", range: "50m", isAvailable: true },
    { name: "Remington 870", type: "sörétes", caliber: "12 Gauge", range: "45m", isAvailable: true },
    { name: "M249 SAW", type: "gépágyú", caliber: "5.56mm", range: "600m", isAvailable: false },
    { name: "MG42", type: "gépágyú", caliber: "7.92mm", range: "800m", isAvailable: true },
    { name: "Uzi", type: "géppisztoly", caliber: "9mm", range: "200m", isAvailable: true },
    { name: "Winchester Model 70", type: "sniper", caliber: ".308 Winchester", range: "900m", isAvailable: true },
    { name: "FN Five-seveN", type: "pisztoly", caliber: "5.7mm", range: "150m", isAvailable: true },
    { name: "M1 Garand", type: "gépkarabély", caliber: ".30-06", range: "600m", isAvailable: true },
    { name: "Sten Mk II", type: "géppisztoly", caliber: "9mm", range: "150m", isAvailable: false },
    { name: "MAC-10", type: "géppisztoly", caliber: ".45 ACP", range: "100m", isAvailable: true },
    { name: "Colt M1911", type: "pisztoly", caliber: ".45 ACP", range: "100m", isAvailable: true },
    { name: "Browning Hi-Power", type: "pisztoly", caliber: "9mm", range: "150m", isAvailable: true },
    { name: "HK MP7", type: "géppisztoly", caliber: "4.6mm", range: "200m", isAvailable: true },
    { name: "L96A1", type: "sniper", caliber: ".338 Lapua", range: "1100m", isAvailable: true },
    { name: "FN MAG", type: "gépágyú", caliber: "7.62mm", range: "800m", isAvailable: false },
    { name: "Beretta CX4 Storm", type: "karabély", caliber: "9mm", range: "200m", isAvailable: true },
    { name: "IMI Galil", type: "gépkarabély", caliber: "5.56mm", range: "500m", isAvailable: true },
    { name: "HK G36", type: "gépkarabély", caliber: "5.56mm", range: "600m", isAvailable: true },
    { name: "FN FAL", type: "gépkarabély", caliber: "7.62mm", range: "700m", isAvailable: false },
    { name: "RPG-7", type: "gránátvető", caliber: "40mm", range: "500m", isAvailable: true },
    { name: "Heckler & Koch USP", type: "pisztoly", caliber: ".45 ACP", range: "100m", isAvailable: true },
    { name: "PPSh-41", type: "géppisztoly", caliber: "7.62mm", range: "150m", isAvailable: false },
    { name: "Beretta M9", type: "pisztoly", caliber: "9mm", range: "100m", isAvailable: true },
    { name: "M3 Grease Gun", type: "géppisztoly", caliber: ".45 ACP", range: "100m", isAvailable: false },
    { name: "IWI Tavor X95", type: "gépkarabély", caliber: "5.56mm", range: "550m", isAvailable: true },
    { name: "M240", type: "gépágyú", caliber: "7.62mm", range: "1200m", isAvailable: true },
];

/*
Csak olyan dolgokat használj amit már eddig is tanultunk! 
Ne használj ChatGPT!


## **Fegyverkezelés – Feladatok**

### **1. Feladat – Fegyverek listázása**
✅ Írj egy függvényt, amely kiírja az összes fegyver nevét a konzolra.

---

### **2. Feladat – Elérhető fegyverek szűrése**
✅ Írj egy függvényt, amely kizárólag az `isAvailable: true` értékű fegyvereket írja ki.

---

### **3. Feladat – Fegyver keresése név alapján**
✅ Készíts egy függvényt, amely bekér egy fegyvernevet, és megkeresi azt a listában.  
➡️ Ha megtalálja, írja ki a fegyver adatait.  
➡️ Ha nem találja meg, jelezze, hogy a fegyver nem létezik.

---

### **4. Feladat – Új fegyver hozzáadása**
✅ Készíts egy függvényt, amely egy új fegyvert ad hozzá a `weapons` tömbhöz.  
➡️ A függvény vegyen be egy objektumot, amely tartalmazza a fegyver nevét, típusát, kaliberét, hatótávját és elérhetőségét.

---

### **5. Feladat – Elérhető sniper fegyverek keresése**
✅ Készíts egy függvényt, amely kizárólag a `sniper` típusú fegyvereket listázza ki, amelyek elérhetők (`isAvailable: true`).

---

### **6. Feladat – Fegyverek rendezése kaliber szerint**
✅ Készíts egy függvényt, amely a fegyvereket **kaliber szerint rendezi** növekvő sorrendben.  
➡️ A függvény a rendezett fegyverek nevét és kaliberét írja ki.

---

### **7. Feladat – Fegyverek törlése**
✅ Készíts egy függvényt, amely egy megadott nevű fegyvert töröl a listából.  
➡️ Ha a fegyver nem található meg, jelezze ezt a konzolon.

---

### **8. Feladat – Komplex Feladat**
✅ Készíts egy olyan programot, amely:

- Megjeleníti az összes fegyvert.  
- Kérd be a felhasználótól, hogy milyen **kaliberű** és milyen **típusú** fegyvereket szeretne keresni.  
- Írja ki, hogy hány fegyver felel meg a keresési feltételeknek.  
- Listázza ki a találatokat.

---

### **9. Extra Kihívás – Véletlenszerű fegyver választása**
✅ Írj egy függvényt, amely véletlenszerűen választ ki egy fegyvert a listából, majd kiírja a nevét és típusát.  

➡️ Példa kimenet:  
🎯 *Véletlenszerű fegyver: Barrett M82 - sniper*
*/