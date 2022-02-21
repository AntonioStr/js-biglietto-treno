let age = prompt('Inserire età passeggero:');
let km = prompt('Inserire i kilometri (km) da percorrere:');
const prezzo = 0.21;
const disc20 = 20;
const disc40 = 40;

let biglietto = (km * prezzo);

if (age < 18){
    let prezzoScontato20 = ((biglietto / 100) * disc20);
    document.write('Il prezzo del tuo biglietto è: ' + prezzoScontato20.toFixed(2) + '€');
} else if (age > 65) {
    let prezzoScontato40 = ((biglietto / 100) * disc40);
    document.write('Il prezzo del tuo biglietto è: ' + prezzoScontato40.toFixed(2) + '€');
} else {
    document.write(biglietto.toFixed(1));
}
