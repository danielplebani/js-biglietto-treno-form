//cliccando il pulsante genera appare il biglietto 
const genera = document.querySelector('.genera').addEventListener('click', function (e) {
    document.getElementById("container_2").style.display = 'block';

    //inserendo il nome  nell'input,il value verrà inserito nel biglietto
    const username = document.getElementById('name_dati').value
    document.getElementById('name').innerHTML = username;

    //inserendo il numero di km  nell'input,il value verrà inserito nel biglietto
    const km = Number(document.getElementById('km_dati').value);
    if (km == 0){
        alert("ops! c'è un errore,fammi fare un po di strada😁")
    }

    //offerta del biglietto,se ci sono sconti
    if (document.getElementById('eta_dati').value === 'maggiorenne') {
        const offerta = 'Biglietto standard'
        document.getElementById('offerta').innerHTML = offerta;
    } else if (document.getElementById('eta_dati').value === 'minorenne') {
        const offerta = 'Biglietto con il 20% di sconto'
        document.getElementById('offerta').innerHTML = offerta;
    } else{
        const offerta = 'Biglietto con il 40% di sconto'
        document.getElementById('offerta').innerHTML = offerta;
    }

    //il numero della carrozza l'ho fatto casuale
    const carrozza = Math.random() * 10;
    document.getElementById('carrozza').innerHTML = Math. trunc(carrozza);

    //il codiceCP l'ho fatto casuale
    const codiceCP = (Math.random() * 100000);
    document.getElementById('codiceCP').innerHTML = Math. trunc(codiceCP);

    //il prezzo varia in base agli sconti
    if (document.getElementById('eta_dati').value === 'maggiorenne') {
        const price = (km * 0.21);
        document.getElementById('costo_biglietto').innerHTML = (Math.round((price + Number.EPSILON) * 100) / 100) + '€';
    } else if (document.getElementById('eta_dati').value === 'minorenne') {
        const discounted20 = ((km * 0.21) *20 /100);
        const price = ((km * 0.21)- discounted20);
        document.getElementById('costo_biglietto').innerHTML = (Math.round((price + Number.EPSILON) * 100) / 100) + '€';
    } else{
        const discounted40 = ((km * 0.21) *40 /100);
        const price = ((km * 0.21)- discounted40);
        document.getElementById('costo_biglietto').innerHTML = (Math.round((price + Number.EPSILON) * 100) / 100) + '€';
    }

})