// Istruzioni:
// (1) L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// (2) Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// (3) Sommiamo i due numeri.
// (4) Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
// (5) Dichiariamo chi ha vinto.


// (1) Primo step
  var numeroUtente = prompt('Inserisci un numero compreso tra 1 e 5:');
  if (numeroUtente > 5) {
    alert('numero non valido');
  }
