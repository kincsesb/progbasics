/*1. Felhasználói adatbekérés (Prompt)
Kérdezd meg a felhasználótól a nevét.
Kérdezd meg tőle, hogy hány terméket szeretne vásárolni.*/
const userName = prompt("Mi a felhasználó neved?");
const productCount = prompt("Hány terméket szeretnél vásárolni?");
/*2. Termékadatok tárolása (Object)
Hozz létre egy products nevű objektumot, amely tartalmaz legalább 3 terméket.
Minden terméknek legyen:
name – A termék neve (string)
price – A termék ára (number)
inStock – Boolean érték (true = raktáron van, false = nincs raktáron)*/
const products = [
    apple = {
        name: "Alma",
        price: 350,
        inStock: true
    },
    pear = {
        name: "Körte",
        price: 500,
        inStock: false
    },
    cherry = {
        name: "Cseresznye",
        price: 1000,
        inStock: true
    }
];
/*3. Függvény készítése
Írj egy függvényt calculateTotal néven, amely:
Bemenetként kap egy terméket és egy darabszámot.
Ha a termék elérhető (inStock), számolja ki a teljes árat.
Ha a termék nincs raktáron, írja ki:
"Sajnáljuk, a termék nincs készleten."*/
function notInStock (productName){
    if((productName == products[0].name && products[0].inStock==false) || (productName == products[1].name && products[1].inStock==false) || (productName == products[2].name && products[2].inStock==false)){
        throw new Error("Sajnáljuk, a termék nincs készleten.")
        //console.log("Sajnáljuk, a termék nincs készleten.")
    }
}
function calculateTotal(productName, count){
    if(productName == products[0].name && products[0].inStock==true){
        const totalPrice = products[0].price*count
        console.log(`${userName}, a végösszeged ${totalPrice} Ft.`)
    }
    else if(productName == products[1].name && products[1].inStock==true){
        const totalPrice = products[1].price*count
        console.log(`${userName}, a végösszeged ${totalPrice} Ft.`)
    }
    else if(productName == products[2].name && products[2].inStock==true){
        const totalPrice = products[2].price*count
        console.log(`${userName}, a végösszeged ${totalPrice} Ft.`)
    }
}
/*4. Vásárlási folyamat logikája
Ha a felhasználó 0 terméket szeretne vásárolni, írja ki:
"Nincs mit számolni."*/
if (productCount==0){
    console.log("Nincs mit számolni.")
}
else if(productCount<0){
    console.log("Nem érvényes értéket adott meg.")
}
else{
    const whichProduct = prompt("Melyik terméket szeretné megvásárolni?\n(Ügyeljen a kis és nagybetűkre! Árusított termékek: Alma, Körte, Cseresznye)")
    if(whichProduct==products[0].name || whichProduct==products[1].name || whichProduct==products[2].name){
        try {
            notInStock(whichProduct);
        } catch (e) {
            console.error(e);
        }
        calculateTotal(whichProduct, productCount)
    }
    else{
        console.log("A kívánt termék nem szerepel a katalógusunkban.")
    }
}