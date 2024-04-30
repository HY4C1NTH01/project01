var attempt = 3;
var count = 1;
let randnumb = (Math.random()*100)+1;
let randomnom = parseInt(randnumb);
let nom = document.querySelector("#guessarea").value;
let guess = parseInt(nom)

function playgame(){
console.log(nom);
console.log(randomnom);
console.log(attempt);
console.log(count);


}


function resetgame(){
document.getElementById("guessarea").value = '';
document.getElementById("guessarea").disabled = false;
randnumb = (Math.random()*100)+1;
randomnom = parseInt(randnumb);
attempt = 3;
count = 1;
}

const dy = document.getElementById("game");

function change(){
let color = "#" ;
for(let i = 0; i < 6; i++){
color += Math.floor((Math.random() *16)).toString(16);
}
return color;

}
function cchange(){
dy.style.backgroundColor = change();
}

