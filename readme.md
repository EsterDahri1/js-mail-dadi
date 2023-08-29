/*Correzione gioco dei dadi con ciclo diverso da for*/

/* 
#Tools
- Math.floor
- Math.random
- const/let
- if/else
- operators >
- console.log
- document.querySelector() 
*/

//generate a random number between 1 and 6 for the player 
const playerNumber = Math.floor(Math.random()*6) + 1;

//generate a random number between 1 and 6 for the PC
const pcNumber = Math.floor(Math.random()*6) + 1;

console.log(pcNumber, playerNumber);

let winner;

//if player number is greater than pc number (Player wins)
if(playerNumber > pcNumber){
    //console.log('Player wins');
    winner = 'Player';
} else if (pcNumber < playerNumber){ //else if pc number is greater than player number (PC wins)
    //console.log('PC wins');
    winner = 'PC';
} else{ //else nobody wins
    //console.log('Pari no winner! try again');
    winner = 'No winner';
}


console.log(`The winner is ${winner}`)


/*Correzione esercizio mail*/

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

//loop sulla list 

//cotrollo se è presente nella lista
//se vero metti accesss to true

for (let i = 0; i < partecipants.length; i++) {
    const thisPartecipantEmail = partecipants[i];
    console.log(thisPartecipantEmail);

    if(thisPartecipantEmail === partecipantEmail){
        canAccess = true;
    }
}

console.log(canAccess);

if(canAccess){
    console.log('Welcome to the party');
}else {
    console.log('Go home')
}
