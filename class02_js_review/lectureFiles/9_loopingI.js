window.onload = function(){
console.log('9:: looping one');

let xPos = 400;
let yPos = 200;
let radius  = 200;
let ellipseAlpha =.15;
//to calculate the correct offset
let cX = xPos+(radius/2);
let cY = yPos+(radius/2);

// 1:: demo for create a dynamic element and append to the DOM on the fly...
let circA = document.createElement('div');
circA.classList.add("shape");
//append to the DOM...
document.getElementById("parent").appendChild(circA);
//and inspect...
circA.style.width = radius+"px";
circA.style.height = radius+"px";
circA.style["border-radius"]=radius+"px";
circA.style.left = (cX -(radius/2))+"px";
circA.style.top =  (cY-(radius/2))+"px";
circA.style.opacity = ellipseAlpha;


//2 lets create some more (smaller radius)...
radius-=50;
ellipseAlpha +=.25;

let circB = document.createElement('div');
circB.classList.add("shape");
//append to the DOM...
document.getElementById("parent").appendChild(circB);
//and inspect...
circB.style.width = radius+"px";
circB.style.height = radius+"px";
circB.style["border-radius"]=radius+"px";
circB.style.left = (cX -(radius/2))+"px";
circB.style.top =  (cY-(radius/2))+"px";
circB.style.opacity = ellipseAlpha;


//3 lets create some more (smaller radius)...
radius-=50;
ellipseAlpha +.25;

let circC = document.createElement('div');
circC.classList.add("shape");
//append to the DOM...
document.getElementById("parent").appendChild(circC);
//and inspect...
circC.style.width = radius+"px";
circC.style.height = radius+"px";
circC.style["border-radius"]=radius+"px";
circC.style.left = (cX -(radius/2))+"px";
circC.style.top =  (cY-(radius/2))+"px";
circC.style.opacity = ellipseAlpha;


//3 lets create some more (smaller radius)...
radius-=50;
ellipseAlpha +=.25;

let circD = document.createElement('div');
circD.classList.add("shape");
//append to the DOM...
document.getElementById("parent").appendChild(circD);
//and inspect...
circD.style.width = radius+"px";
circD.style.height = radius+"px";
circD.style["border-radius"]=radius+"px";
circD.style.left = (cX -(radius/2))+"px";
circD.style.top =  (cY-(radius/2))+"px";
circD.style.opacity = ellipseAlpha;




}//onload
