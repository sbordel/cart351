window.onload = function(){
console.log('6:: boolean expressions I');


//declare
let rectX = 400;
let rectY = 300;

let theElementThree = document.getElementById("three");
theElementThree.style.left = rectX+"px";
theElementThree.style.top = rectY+"px";

//1: event listener - KEY
window.addEventListener("keydown",keyClickHandler);

//4 : our call back...
function keyClickHandler(){
//1
  /*for debug
  console.log(event)*/
  console.log(event.key);
//check which key was just down
  if(event.key ==="ArrowRight"){rectX+=5;}
  if(event.key ==="ArrowLeft"){rectX-=5;}
  if(event.key ==="ArrowUp"){rectY-=5;}
  if(event.key ==="ArrowDown"){rectY+=5;}



  theElementThree.style.left = rectX+"px";
  theElementThree.style.top = rectY+"px";

  //for x
  document.getElementById("text_1").innerHTML = 'rectX is:: '+'<span class = "highlight">'+rectX+' px</span>';

  let evaluation = (rectX>500);
  document.getElementById("text_2").innerHTML  = "is rectX greater than 500 px?: "+'<span class = "highlight">'+evaluation+'</span>';


  let evaluationTwo = (rectX!==600);
  document.getElementById("text_3").innerHTML = "is rectX not  equal to 600 px?: "+'<span class = "highlight">'+evaluationTwo+'</span>';

  //for y
  document.getElementById("text_4").innerHTML = 'rectY is::  '+'<span class = "highlight">'+rectY+' px</span>';



  let evaluationThree = (rectY===90);
  document.getElementById("text_5").innerHTML = "is rectY equal to 90 px?: "+'<span class = "highlight">'+evaluationThree+'</span>';


  let evaluationFour = (rectY< 20);
  document.getElementById("text_6").innerHTML = "is rectY less than 20 px?: "+'<span class = "highlight">'+evaluationFour+'</span>';





}




}//onload
