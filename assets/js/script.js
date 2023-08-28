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
})


/*

##TOOLS mail
    - Creo array con list mail
    - Prendo form con getElementById 
    - Se mail fa parte della lista allora messaggio benvenuto altrimenti non sei invitato
*/

//Creo array con le mail
const mailingList = ['lorem@boomail.com', 'ipsum@boomail.com', 'magna@boomail.com', 'charta@boomail.com', 'libertatum@boomail.com'];

//Aggiungo il bottone
const submit = document.querySelector('.submit');

//Prendo form con getElementById 
let userMail = document.getElementById('user_mail');

//Schiaccio il bottone per inviare
submit.addEventListener('click', function (){
    //Cerco tra le mail della lista quindi faccio un loop
    for (let i = 0; i < mailingList.length; i++) {
        const email = mailingList[i];

        if (mailingList.includes(email)) {
            console.log('Benvenuto!');
        } else {
            console.log('Non sei invitato!');
        }

    }
});

