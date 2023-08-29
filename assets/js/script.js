/* #console di prova
console.log('hello');
*/

/*

Gioco dei dadi
- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
- Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

/*

##TOOLS Gioco dei dadi
    - variabile
    - math random 
    - funzione click
    - if a>b hai vinto! / else a<b hai perso!
*/

//Metto il bottone in una costante
const button = document.querySelector('.btn');


//Se schiaccio il bottone mi dà il risultato
button.addEventListener('click', function() {
    //Genera numero random da 1 a 6 
    const userChoice = Math.ceil(Math.random() * 6);
    const computerChoice = Math.ceil(Math.random() * 6);

    //Condizione chi ha il numero più alto 
    if (userChoice > computerChoice) {
        console.log('Hai vinto! 🎉');
        document.getElementById('user_result').innerHTML = userChoice;
        document.getElementById('computer_result').innerHTML = computerChoice;
        document.querySelector('.message').innerHTML = `Hai vinto! 🎉`;
    } else if(userChoice === computerChoice){
        console.log('Pari ! Riprova!');
        document.getElementById('user_result').innerHTML = userChoice;
        document.getElementById('computer_result').innerHTML = computerChoice;
        document.querySelector('.message').innerHTML = `Pari ! Riprova!`;
    } else {
        console.log('Hai perso! 😭');
        document.getElementById('user_result').innerHTML = userChoice;
        document.getElementById('computer_result').innerHTML = computerChoice;
        document.querySelector('.message').innerHTML = `Hai perso! 😭`;
    }
});


/*Mail
- Chiedi all'utente la sua email 
- Controlla che sia nella lista di chi può accedere 
- Stampa un messaggio appropriato sull’esito del controllo.*/

/*
#Tools
- Inserisco l'input in costante
- creo array
- creo la funzionalità del bottone
- uso for per capire se la mail fa parte della lista
- stampa messaggio per esito del controllo
*/



//const bottone del form
const send = document.getElementById('invia');

// Creo un array delle email
const partecipants = [
    'lorem@boomail.com', 
    'ipsum@boomail.com', 
    'cicero@boomail.com', 
    'catullo@boomail.com', 
    'cesare@boomail.com'
];

//chiedo all'utente il suo indirizzo email
const partecipantEmail = 'cicero@boomail.com';
let canAccess = false;

//schiaccio il bottone 
send.addEventListener('click', function(){
    //loop sulla list 
    for (let i = 0; i < partecipants.length; i++) {
        const thisPartecipantEmail = partecipants[i];
        console.log(thisPartecipantEmail);
    
        if(thisPartecipantEmail === partecipantEmail){
            canAccess = true;
        }
    };
    
    //console.log(canAccess);
    
    if(canAccess === true){
        console.log('Welcome to the party');
        document.getElementById('output').innerHTML = 'Welcome to the party'
    }else {
        console.log('Go home');
        document.getElementById('output').innerHTML = 'Go home!'
    };
});

