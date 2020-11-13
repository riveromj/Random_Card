//document.write("estoy js");
const number= ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
const symbol=["\u2665","\u2666","\u2663","\u2660"]; //66 y 65 rojo

function numberRandom  (myArray){
    let numRandom = Math.floor(Math.random() * (myArray.length));
    return numRandom;

}
let symbolA = symbol[numberRandom(symbol)];
let numberCenter = number[numberRandom(number)];

if(symbolA=="\u2665" || symbolA=="\u2666" ){
    console.log(true);
    document.querySelector("#symbol1").style.color="red";
    document.querySelector("#symbol2").style.color="red";
    document.querySelector("#symbolCenter").style.color="red";

}else{
    document.querySelector("#symbol1").style.color="black";
    document.querySelector("#symbol2").style.color="black";
    document.querySelector("#symbolCenter").style.color="black";

}
document.querySelector("#symbol1").innerHTML= symbolA;
document.querySelector("#symbol2").innerHTML= symbolA;
document.querySelector("#symbolCenter").innerHTML= numberCenter;
console.log(symbolA);