//selezioniamo gli elementi nel documento tramite id per poterli manipolare
const buttonEl = document.getElementById('button');
const imgEl = document.getElementById('lampadina');
//funzione posta a true per poter ripetere l'evento
let prima_img = true;

//cerchiamo una funzione in caso di evento di click del pulsante
buttonEl.addEventListener('click',
    function accendiSpegni() {
        //codizione che viene posta a vero e quindi cambia src dell'immagine e l'inner html del bottone
        if (prima_img) {
            imgEl.src = './assets/img/yellow_lamp.png';
            buttonEl.innerHTML = 'Spegni!';
        } 
        //se falsa cambia src dell'immagine e l'inner html del bottone
        else
         {
            imgEl.src = './assets/img/white_lamp.png';
            buttonEl.innerHTML = 'Accendi!';
        
         }
        prima_img = !prima_img;
    });