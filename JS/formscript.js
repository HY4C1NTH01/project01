function sum(){
    let num1 = document.querySelector("#num1").value;

    let num2 = document.querySelector("#num2").value;

    let total = +num1 + +num2;

    console.log(total);

    document.querySelector("#result").innerHTML = total;
}

function diff(){
    let num1 = document.querySelector("#num1").value;

    let num2 = document.querySelector("#num2").value;

    let total = +num1 - +num2;

    console.log(total);

    document.querySelector("#result").innerHTML = total;
}
function product(){
    let num1 = document.querySelector("#num1").value;

    let num2 = document.querySelector("#num2").value;

    let total = +num1 * +num2;

    console.log(total);

    document.querySelector("#result").innerHTML = total;
}
function quotient(){
    let num1 = document.querySelector("#num1").value;

    let num2 = document.querySelector("#num2").value;

    let total = +num1 / +num2;

    console.log(total);

    document.querySelector("#result").innerHTML = total;
}