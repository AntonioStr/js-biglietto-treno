let age = prompt('Eta passeggero');
let km = prompt('Kilometri da percorrere');
const prezzo = 0.21;
const disc20 = 20;
const disc40 = 40;

let biglietto = (km * prezzo);

if (age < 18){
    let prezzoScontato20 = ((biglietto / 100) * disc20);
    document.write(prezzoScontato20.toFixed(1));
} else if (age > 65) {
    let prezzoScontato40 = ((biglietto / 100) * disc40);
    document.write(prezzoScontato40.toFixed(1));
} else {
    document.write(biglietto.toFixed(1));
}
