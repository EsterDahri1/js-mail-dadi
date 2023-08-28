/* #console di prova
console.log('hello');
*/

/*

Gioco dei dadi
- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
- Stabilire il vincitore, in base a chi fa il punteggio più alto.

Mail
- Chiedi all'utente la sua email 
- Controlla che sia nella lista di chi può accedere 
- Stampa un messaggio appropriato sull’esito del controllo.*/

/*

##TOOLS
    - variabile
    - math random 
    - funzione click
    - if a>b hai vinto! / else a<b hai perso!
*/

//Metto il bottone in una costante
const button = document.querySelector('button');


//Se schiaccio il bottone mi dà il risultato
button.addEventListener('click', function() {
    //Genera numero random da 1 a 6 
    const userChoice = Math.ceil(Math.random() * 6);
    const computerChoice = Math.ceil(Math.random() * 6);

    //Condizione chi ha il numero più alto 
    if (userChoice > computerChoice) {
        console.log('Hai vinto! 🎉');
    } else {
        console.log('Hai perso! 😭');
    }
})

