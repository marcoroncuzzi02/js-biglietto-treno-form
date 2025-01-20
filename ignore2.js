let età = 66
let kilometri = 100
let prezzo = 0.21 * kilometri
let discount = 0;

// pongo le condizioni per lo sconto del prezzo del biglietto

if (età < 18){
    discount = prezzo * 0.20   
}
else if (età > 65){
    discount = prezzo * 0.40
}

prezzo = prezzo - discount
console.log(`il prezzo è di ${prezzo}$`);

//INPUT -> ELABORAZIONE/CONTROLLO -> OUTPUT