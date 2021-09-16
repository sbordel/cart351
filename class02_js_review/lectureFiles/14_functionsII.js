window.onload = function(){
console.log('14:: functions two');



//draw one!
//2:
let radiusCirc = 50;
drawEllipse(60,100,50,1.0); //call my custom function!

//3: draw more in a for loop (row)
for(let xPos = 60; xPos <600; xPos+=(radiusCirc+10)){

  drawEllipse(xPos,200,radiusCirc,.65); //call my custom function!
}


//4: draw more in a for loop (col)
for(let yPos = 200; yPos <650; yPos+=(radiusCirc+10)){

  drawEllipse(700,yPos,radiusCirc,.25); //call my custom function!
}

//1::function CUSTOM :: pass the x,y,r ...
  function drawEllipse(x,y,r,a){
    // 1:: demo for create a dynamic element and append to the DOM on the fly...
    let circA = document.createElement('div');
    circA.classList.add("shape");
    //append to the DOM...
    document.getElementById("parent").appendChild(circA);
    //and inspect...
    circA.style.width = r+"px";
    circA.style.height = r+"px";
    circA.style["border-radius"]=r+"px";
    circA.style.left = (x -(r/2))+"px";
    circA.style.top =  (y-(r/2))+"px";
    circA.style.opacity = a;

  }







}//onload
