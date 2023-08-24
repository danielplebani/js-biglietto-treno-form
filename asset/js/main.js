/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
--il prezzo del biglietto è definito in base ai km (0.21 € al km)
--va applicato uno sconto del 20% per i minorenni
--va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (ovvero con massimo due decimali, per indicare i centesimi sul prezzo).
*/

//chiede il numero di km che vuole percorrere,lo trasforma in numero e non può essere 0
const kilometers = Number(prompt('quanti kilometri vuoi percorerre'));
console.log("l'utente vuole percorrere " + kilometers + " km");
if (kilometers == 0){
    alert("ops! c'è un errore,fammi fare un po di strada😁")
}

//chiede l'età del passeggero e la trasforma in un numero
const age = Number(prompt('quanti anni hai'));
console.log("Quanti hanni hai? " + age);
if (age == 0){
    alert("ops! c'è un errore,devi avere almeno qualche mese😁")
}

//calcolo il prezzo del biglietto 
if (age >= 18 && age < 65){
    const price = (kilometers * 0.21)
    console.log('il prezzo del biglietto sarà: '+ price + '€');
    document.getElementById('prezzo').innerHTML = (Math.round((price + Number.EPSILON) * 100) / 100) + '€';
} else if (age < 18){
    const discounted20 = ((kilometers * 0.21) *20 /100);
    const price = ((kilometers * 0.21)- discounted20);
    console.log('il prezzo del biglietto sarà: '+ price + '€');
    document.getElementById('prezzo').innerHTML = (Math.round((price + Number.EPSILON) * 100) / 100) + '€';
} else{
    const discounted40 = ((kilometers * 0.21) *40 /100);
    const price = ((kilometers * 0.21)- discounted40);
    console.log('il prezzo del biglietto sarà: '+ price + '€');
    document.getElementById('prezzo').innerHTML = (Math.round((price + Number.EPSILON) * 100) / 100) + '€';
}
