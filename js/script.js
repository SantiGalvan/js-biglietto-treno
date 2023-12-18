// JavaScript Test
console.log('JS OK')

/*
Scompongo il problema
- 1 Prendo l'elemento dal DOM
- 2 Chiedo all'utente il km da percorrere
- 3 Chiediamo all'utente l'età
- 4 Calcolo il prezzo del biglietto
- 5 Controllo se l'utente ha diritto a uno sconto
- 6 Se l'utente ne ha diritto applico lo sconto
- 7 Trasformo il prezzo con solo 2 decimi
- 8 Inserisco il prezzo nella pagina
*/

// - 1 Prendo l'elemento dal DOM
const paragrph = document.getElementById('content');
console.log('id: ', paragrph);

// - 2 Chiedo all'utente il km da percorrere
const userKm = parseInt(prompt('Quanti km devi percorrere?', '57'));
console.log('Km da percorrere:', userKm);

// - 3 Chiediamo all'utente l'età
const userAge = parseInt(prompt('Quanti anni hai?', '11'));
console.log('La tua età è:', userAge, 'anni');

// - 4 Calcolo il prezzo del biglietto
let price = userKm * 0.21;
console.log('Il prezzo del biglietto è di: ', price, '€');

// - 5 Controllo se l'utente ha diritto a uno sconto
if (userAge < 18 || userAge > 65) {
    if (userAge < 18) {
        price = price - (price * 0.2);
    } else if (userAge > 65) {
        price = price - (price * 0.4);
    }
}

console.log('Il prezzo del biglietto è di: ', price, '€');

// - 7 Trasformo il prezzo con solo 2 decimi
price = parseFloat(price.toFixed(2));
console.log('Il prezzo del biglietto è di: ', price, '€');

// - 8 Inserisco il prezzo nella pagina
paragrph.innerHTML = `Il prezzo del biglietto è di: <strong>${price}</strong> €`;

