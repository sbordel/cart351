window.onload = function(){
console.log('7:: boolean expressions II');



//declare
let rectX = 100;
let rectY = 100;

let theElementThree = document.getElementById("three");
theElementThree.style.left = rectX+"px";
theElementThree.style.top = rectY+"px";

let leftRect = document.getElementById("left");
let rightRect = document.getElementById("right");


//1: event listener - KEY
window.addEventListener("keydown",keyClickHandlerChange);

//4 : our call back...
function keyClickHandlerChange(){
//1
  /*for debug
  console.log(event)
  console.log(event.key);*/
//check which key was just down
  if(event.key ==="ArrowRight"){rectX+=5;}
  if(event.key ==="ArrowLeft"){rectX-=5;}
  if(event.key ==="ArrowUp"){rectY-=5;}
  if(event.key ==="ArrowDown"){rectY+=5;}


//update
  theElementThree.style.left = rectX+"px";
  theElementThree.style.top = rectY+"px";

//1:: new:: boolean checks;
if(rectX>500){
  rightRect.style.background = "#2a67d1";
  left.style.background = "#ffffff";

}
/*2::/
else{
  left.style.background = "#2a67d1";
  right.style.background = "#ffffff";
}*/

}


}//onload
