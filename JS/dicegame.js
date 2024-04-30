
function dicegame(){
let rannum1 = (Math.random()*6)+1;
let rannum2 = (Math.random()*6)+1;

let player1 = parseInt(rannum1);
let player2 = parseInt(rannum2);

document.querySelector(".img1").src = `Images/dice-${player1}`+ ".png"
document.querySelector(".img2").src = `Images/dice-${player2}`+ ".png"

if(player1 > player2){
document.getElementById("result").innerHTML = "Player 1 Wins!"
}

else if(player2 > player1){
document.getElementById("result").innerHTML = "Player 2 Wins!"
}
else{
document.getElementById("result").innerHTML = "It's A Draw!"
}

}
const back = document.getElementById("dicegame");


function change(){
let color = "#" ;
for(let i = 0; i < 6; i++){
color += Math.floor((Math.random() *16)).toString(16);
}
return color;

}

function colorchange(){

back.style.backgroundColor = change();
}

