// Istruzioni:
// (1) L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// (2) Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// (3) Sommiamo i due numeri.
// (4) Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
// (5) Dichiariamo chi ha vinto.


// (1) Primo step
// variabile
  var numeroUtente = parseInt(prompt('Inserisci un numero compreso tra 1 e 5:'));
  console.log(numeroUtente);
// condizione
  if (numeroUtente > 5) {
    alert('numero non valido');
  }

// (2) Secondo step
// variabile
var numeroComputer = generaNumero(1, 5);
console.log(numeroComputer);
// Funzione
function generaNumero(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// (3) Terzo step
var risultato = numeroUtente + numeroComputer;
console.log(risultato);
