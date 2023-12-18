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
const userKm = prompt('Quanti km devi percorrere?', '35');
console.log('Km da percorrere:', userKm);

// - 3 Chiediamo all'utente l'età
const userAge = prompt('Quanti anni hai?', '28');
console.log('La tua età è:', userAge, 'anni');