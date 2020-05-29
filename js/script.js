
//  // Esercizio 1
function checkPalindroma(str) {
    return str == str.split('').reverse().join('');
}

var rilsultato = checkPalindroma('aalsa');
console.log(rilsultato)

if (rilsultato == true) {
  console.log('SI è una parola Palindroma')
} else {
  console.log('Questa, non è una parola Palindroma')
}

// Esercizio 2


// Sceglie Pari o Dispari!
var scegliePariDispari = prompt('sceglie Pari o Dispari')

// Sceglie un numero del 1 al 5!!!
var numeroUtente = parseInt(prompt('Sceglie un numero del 1 al 5'));

// Genera un numero random del 1 al 5!!!
 var numeroRandom = parseInt(Math.floor(Math.random() * 5) + 1);
 console.log(numeroRandom)

// Sommare tutti 2 numeri, e dichiarare se è pari o dispare,
function checkSommaPariDispari() {
  var risultato;
  if ((numeroUtente + numeroRandom) % 2 == 0) {
    alert('La somma è pari')
    risultato = 'pari'
  } else (
    alert('La somma è dispari')

  )
  return risultato;
}
var risultato = checkSommaPariDispari()
// e coincide con la tu risposta iniziale, hai vinto!!!
