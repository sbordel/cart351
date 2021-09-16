window.onload = function(){
console.log('4:: incrementing variables');



//declare
let rectX = 100;
let rectY = 100;

// 1: get one initial rect
let theElementThree = document.getElementById("three");
theElementThree.style.left = rectX+"px";
theElementThree.style.top = rectY+"px";

//2: event listener for when we click on parent
document.getElementById('parent').addEventListener("click",mouseClickHandler);

//3 : our call back...
function mouseClickHandler(){
  console.log(event); // EXPLAIN
  console.log(this); //EXPLAIN (who was CLICKED)

  //4: change the value of rectX - note that this is a speed...
  rectX =rectX+10;
  //reassign ...
  theElementThree.style.left = rectX+"px";

}
//5: ANOTHER event listener for when we click on box
theElementThree.addEventListener("click",mouseClickHandlerTwo);

//6 : our call back...
// NOTE how BOTH events occur :)
function mouseClickHandlerTwo(){
  console.log(this);//EXPLAIN (who was CLICKED)
  //6: change the value of rectY - note that this is a speed...
  rectY =rectY+2;
  //reassign ...
  theElementThree.style.top = rectY+"px";

}



}//onload
