
alert("Let's go!")

//uso prompt per chiedere i km

let userkm = prompt("Please enter the kilometers you will ride today");
console.log(userkm);

//uso prompt per chiedere l'età

userage = prompt("Please enter your age");
console.log(userage);


// moltiplico il prezzo per i numeri di km selezionati dal cliente 
const priceperKm = 0.21;
const provisionalPrice = userkm * priceperKm;
console.log(provisionalPrice);
let totalPrice = 0;
//htmlcol
const priceDisplay = document.getElementById('result_display');
if (userage < 18) {
    // applico lo sconto per i minori di 18 anni del 20%
    const discount20 = provisionalPrice / 100 * 20;
    totalPrice = provisionalPrice - discount20;
    console.log(totalPrice);
    //htmlcol
    priceDisplay.innerHTML = `&euro; ${totalPrice}`;

} else if (userage >= 65) {
    // applico lo sconto per gli over= 65 de 40%
    const discount40 = provisionalPrice / 100 * 40;
    totalPrice = provisionalPrice - discount40;
    console.log(totalPrice);
    //htmlcol
    priceDisplay.innerHTML = `&euro; ${totalPrice}`;
} else {
    totalPrice = provisionalPrice;
    //htmlcol
    priceDisplay.innerHTML = `&euro; ${totalPrice}`;
}
