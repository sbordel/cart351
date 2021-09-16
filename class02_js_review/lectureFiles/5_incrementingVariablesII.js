window.onload = function(){
console.log('5:: incrementing variables II');
//NOTE scope ;; local versus global

//declare global
let rectX = 400;
let rectY = 100;

// 1: get one initial rect
let theElementThree = document.getElementById("three");
theElementThree.style.left = rectX+"px";
theElementThree.style.top = rectY+"px";

//2: event listener for when we click on parent (SAME as 4)
document.getElementById('parent').addEventListener("click",mouseClickHandler);

//2: event listener
theElementThree.addEventListener("mousemove",mouseMoveHandler);

//3 : our call back... (same as 4)
function mouseClickHandler(){
  //4: change the value of rectX - note that this is a speed...
  rectX =rectX+10;
  //reassign ...
  theElementThree.style.left = rectX+"px";

  //assign here BUT is changing in mousemove - > is fine as is a global var.
  theElementThree.style.top = rectY+"px";

//IS NOT defined here as r,g,b are LOCAL vars!
  //console.log(r);


}

//4 : NEW our call back...
function mouseMoveHandler(){
//USING math .random ...
//using Math.floor
//LOCAL VARS
  let r = Math.floor(Math.random()*255);
  let g = Math.floor(Math.random()*255);
  let b = Math.floor(Math.random()*255);
  theElementThree.style.background = "rgb("+r+","+g+","+b+")";
/* increment the var here ... but not redraw */

  rectY = rectY+1;
  //rectY= rectY-1;
  console.log(rectY);
  console.log(`this is another way to log rectY:${rectY}`);

  //console.log(randomNumber(5,40));
  //console.log(randomNumber(40,400));
}



// to generate a random range:: (not 0 to but between a min and max value::
//here is a custom function):
// Function to generate random number
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


}//onload
