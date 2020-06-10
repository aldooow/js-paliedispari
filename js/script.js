
//  // Esercizio 1

// var parola = document.getElementById('js_parola');
// var buttonUno = document.getElementById('js_button1');
// var risultatoUno = document.getElementById('js_risultato1');
// var checkParola = checkPalindroma(parola);

var parola = prompt('Inserisci una parola:');
var checkParola = checkPalindroma(parola);
if (checkParola) {
  alert('SI è una parola Palindroma')
} else {
  alert('Questa, non è una parola Palindroma')
}
function checkPalindroma(stringa) {
    return stringa == stringa.split('').reverse().join('');
}
// Esercizio 2


// // Sceglie Pari o Dispari!
// var scegliePariDispari = prompt('sceglie Pari o Dispari')
//
// // Sceglie un numero del 1 al 5!!!
// var numeroUtente = parseInt(prompt('Sceglie un numero del 1 al 5'));
//
// // Genera un numero random del 1 al 5!!!
//  var numeroRandom = parseInt(Math.floor(Math.random() * 5) + 1);
//  console.log(numeroRandom)
//
// // Sommare tutti 2 numeri, e dichiarare se è pari o dispare,
//


// Chiedere all'utente Pari o Dispari
var pariDispari = prompt('Scegli tra pari o dispari');
console.log('Hai scelto ' + pariDispari);
// Verifica del dato immesso
while ( !(pariDispari === 'pari') && !(pariDispari === 'dispari') ) {
    pariDispari = prompt('Il dato immesso non è corretto. Scegli tra pari o dispari');
}
// Chiedere all'utente un numero da 1 a 5
var numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log('Il numero inserito dall\'utente è ' + numeroUtente);
// Verifica del dato immesso
while ( (numeroUtente > 5) || (numeroUtente < 1) || isNaN(numeroUtente) ) {
    numeroUtente = parseInt(prompt('Il dato immesso non è corretto. Inserisci un numero da 1 a 5'));
}

// Risultato della funzione con i dati inseriti dall'utente
giocoPariDispari(pariDispari, numeroUtente);

// Funzione del gioco Pari e Dispari
function giocoPariDispari( stringa, numeroScelto ) {
    // Variabile numero random del computer
    var numeroPc = parseInt(Math.floor(Math.random() * 5) + 1);
    console.log('Il computer ha scelto il numero ' + numeroPc);
    // Somma tra il numero scelto dall'utente e quello del computer
    var risultatoGioco = numeroScelto + numeroPc;
    console.log('Il risultato dei due numeri inseriti è  ' + risultatoGioco);
    // Condizione per capire chi ha vinto in base alla scelta dell'utente
    if ( stringa === 'pari'){    // Se l'utente ha scelto pari si verifica questa condizione
        if ( risultatoGioco % 2 === 0 ) {
            console.log('La somma è pari, ha vinto l\'utente!');
        } else {
            console.log('La somma è dispari, ha vinto il pc!');
        }
    } else {     // Altrimenti se l'utente a scelto dispari si verifica questa condizione
        if ( risultatoGioco % 2 === 0 ) {
            console.log('La somma è pari, ha vinto il pc!');
        } else {
            console.log('La somma è dispari, ha vinto l\'utente!');
        }
    }
    return risultatoGioco;
}


// e coincide con la tu risposta iniziale, hai vinto!!!
