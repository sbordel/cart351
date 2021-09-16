window.onload = function(){
console.log('15:: functions three');
//NEW return a function def
 //2: call the custom function
 //drawSquare(20,100,40,.65); //call my custom function!

 //4 : use the function that returns the def to either draw a square OR to draw a circle
 //let functionChosen = chooseASHape(Math.floor(Math.random()*100));
//console.log(functionChosen)
 //use it
//functionChosen(20,600,40,.65);


/*5: NEW: draw more in a for loop (col);
let num =0;
for(let xPos = 50; xPos <600; xPos+=50){

let functionChosen = chooseASHape(num);
num=num+1;
functionChosen(xPos,600,40,.65);
}*/


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

  //1 : NEW::function CUSTOM :: pass the x,y,r ...
    function drawSquare(x,y,r,a){
      // 1:: demo for create a dynamic element and append to the DOM on the fly...
      let squ = document.createElement('div');
      squ.classList.add("shape");
      //append to the DOM...
      document.getElementById("parent").appendChild(squ);
      //and inspect...
      squ.style.width = r+"px";
      squ.style.height = r+"px";
      squ.style.background ="#b3b3ff";
      //squ.style["border-radius"]=r+"px";
      squ.style.left = (x -(r/2))+"px";
      squ.style.top =  (y-(r/2))+"px";
      squ.style.opacity = a;

    }

//3: returning a function as a value - why - this will be purely demonstrative
function chooseASHape(choice){
  if(choice%2===0){
    return drawEllipse;
  }
  else{
    return drawSquare;
  }
}





}//onload
