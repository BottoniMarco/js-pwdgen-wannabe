var name = prompt("nome");
document.getElementById('nome').innerHTML = name ;

var surname = prompt("cognome");
document.getElementById('cognome').innerHTML = surname ;

var color = prompt("colore");
document.getElementById('colore').innerHTML = color ;

var password = name + surname + color + 19;
document.getElementById('pass').innerHTML = password;
