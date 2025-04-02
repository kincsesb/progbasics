/*Írj egy függvényt, amely egy számot fogad paraméterként és visszatér:
 
- `"Páros szám"` ha a szám páros.
- `"Páratlan szám"` ha a szám páratlan.*/
function evenOrOdd(number){
    if(number%2==0 && number!=0){
        console.log("páros")
    }
    else if(number%2==1){
        console.log("Páratlan szám")
    }
    else{
        console.log("nulla")
    }
};
evenOrOdd(0);
evenOrOdd(7);
evenOrOdd(2);

/*Készíts egy függvényt, amely bekér egy nevet és egy életkort, majd visszatér az alábbi szöveggel:

"Szia, [név]! Te [kor] éves vagy."
Tipp: Használj template literal-t ( ).*/
function nameAndAge(name, age){
    console.log(`Szia, ${name}! Te ${age} éves vagy. `)
}
nameAndAge("Zoli", 26)

/*Készíts egy függvényt, amely bekér egy vizsga pontszámot és visszatér az eredménnyel:

"Kiváló" (90 felett)
"Jó" (70–89 között)
"Megfelelt" (50–69 között)
"Elégtelen" (50 alatt)*/
function examScore(score){
    if(score<0){
        console.log("A vizsga pontszáma nem lehet kevesebb, mint 0.")
    }
    else if(score>100){
        console.log("A vizsga pontszáma nem haladhatja meg a 100-at.")
    }
    else if(score>=90){
        console.log("Kiváló")
    }
    else if(score<=89 && score>=70){
        console.log("Jó")
    }
    else if(score<=69 && score>=50){
        console.log("Megfelelt")
    }
    else{
        console.log("Elégtelen")
    }
}
examScore(-3);
examScore(999);
examScore(100);
examScore(89);
examScore(69);
examScore(49);