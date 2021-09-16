window.onload = function(){
console.log('12:: looping three (same but with for)');

let xPos = 400;
let yPos = 200;
let radius  = 300;
let ellipseAlpha =.1;
//to calculate the correct offset
let cX = xPos+(radius/2);
let cY = yPos+(radius/2);

for(let i =0; i<6;i++){
  let circ = document.createElement('div');
  circ.classList.add("shape");
  //append to the DOM...
  document.getElementById("parent").appendChild(circ);
  //and inspect...
  circ.style.width = radius+"px";
  circ.style.height = radius+"px";
  circ.style["border-radius"]=radius+"px";
  circ.style.left = (cX -(radius/2))+"px";
  circ.style.top =  (cY-(radius/2))+"px";
  circ.style.opacity = ellipseAlpha;

  //CHANGE ..
  radius-=20;
  ellipseAlpha +=.02;


}
}//onload
