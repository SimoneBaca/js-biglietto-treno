
alert("Let's go!")

//uso prompt per chiedere i km

let userkm = prompt("Please enter the kilometers you will ride today");
console.log(userkm);

//uso prompt per chiedere l'età

userage = prompt("Please enter your age");
console.log(userage);

// cosi ottengo il costo del biglietto senza sconti
let result = userkm * 0.21;
console.log(result);
let element = document.getElementById("result_display");
console.log ();
element.innerHTML = result;
