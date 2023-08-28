/*

##TOOLS mail
    - Creo array con list mail
    - Prendo form con getElementById 
    - Se mail fa parte della lista allora messaggio benvenuto altrimenti non sei invitato
*/

//Creo array con le mail
const mailingList = ['lorem@boomail.com', 'ipsum@boomail.com', 'magna@boomail.com', 'charta@boomail.com', 'libertatum@boomail.com'];

//Aggiungo il bottone
let sendBtn = document.getElementById('invia');

//Prendo form con getElementById 
const userMail = document.getElementById('user_mail');

//Enuncio l'output
const output = document.getElementById('output');

sendBtn.addEventListener('click', function(){
    const userValue = userMail.value;
    console.log = userValue;

    if (mailingList.includes(userValue)){
        console.log('Accesso consentito');
        output.innerHTML = 'Benvenuto';
    } else {
        console.log('Accesso negato')
        output.innerHTML = 'Non sei tra gli invitati';
    }
});



// //Schiaccio il bottone per inviare
// sendBtn.addEventListener('click', function () {
//     const email = userMail.value
//     console.log = email;

//     if (mailingList.includes(email)) {
//         console.log('Benvenuto!');
        
//     } else {
//         console.log('Non sei invitato!');
//     }



// });