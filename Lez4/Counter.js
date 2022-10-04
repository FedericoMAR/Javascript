let counter = 0;

var fs = require("fs");
var text = fs.readFileSync("./movies.md");
var textByLine = text.split("\n")
var film = textByLine.split("|");

const divContatore = document.getElementById('contatore');
const divFilm = document.getElementById('film');
const btnDown = document.getElementById('down');
const btnUp = document.getElementById('up');

btnDown.onclick = function(){
    decrementa();
    showCounter();
    showFile();
};

btnUp.addEventListener('click',function(){
    incrementa();
    showCounter();
    showFilm();
});
console.log(typeof divContatore);

function incrementa(){
    counter++;
}
function decrementa(){
    counter--;
}
function showCounter(){
    divContatore.textContent = counter;
}
function showFilm(){
    divFilm.textContent = film[counter*2];
    divFilm.style='font-size: 1.5em';
}