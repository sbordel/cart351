window.onload = function(){
console.log('3:: more and different variable types');

//USing strings, floats  - intoduce bool... - CURRENTLY NOT YET CHANGING the vars -
//but that is not to say its impossible ...

//declare
let rectX = 400; //int
let rectY = 100; //int
let rectWidthAsDecimal = 68.68; //float *important as mouse will be float
let booleanTest = true; //boolean (true or false)

let stringName = "Margie";
let stringFavColor = "Magenta";
//using concat op ...
let mySentence = stringName +" loveszmnznxz "+stringFavColor;
// length of string
let sentenceLength = mySentence.length;

//1: INNER html is another function for changing the dom element. ...
document.getElementById("text_1").innerHTML = mySentence;
document.getElementById("text_2").innerHTML = stringName;
document.getElementById("text_3").innerHTML = stringFavColor;
document.getElementById("text_4").innerHTML = sentenceLength;


let theElementThree = document.getElementById("three");
theElementThree.style.left = rectX+"px";
theElementThree.style.top = rectY+"px";
//use the float...
theElementThree.style.width = rectWidthAsDecimal+"px";

}//onload
