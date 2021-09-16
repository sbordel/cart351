window.onload = function(){
console.log('16:: functions four');

//see how we are getting closer to objects in js?
//1: outer
function outerShapeStrip(startYpos,spacer,shapeSize,numberTimes,colorOfShape){
  console.log(`startYPos:${startYpos}`);
  console.log(`spacer:${spacer}`);
  console.log(`shapeSize:${shapeSize}`);
  console.log(`numberTimes:${numberTimes}`);
  console.log(`colorOfShape:${colorOfShape}`);


  //3:inner scope::
  /*this function is ONLY available here ... (CANNOT use anywhere else)
  function drawShape(xPos,a){


    let squ = document.createElement('div');
    squ.classList.add("shape");
    //append to the DOM...
    document.getElementById("parent").appendChild(squ);

    //using from our strip ////
    squ.style.width = shapeSize-spacer+"px";
    squ.style.height = shapeSize-spacer+"px";
    //using from our strip ////
    squ.style.background =colorOfShape;
    squ.style.left = (xPos)+"px";
    squ.style.top =  (startYpos)+"px";
    squ.style.opacity = a;
  }*/
    //4: call once
    //drawShape((shapeSize),100,.85);

    // 8: use draw shape for number of times
    /*for(let i=0; i<numberTimes;i++){
      //xPos yPos, a
     drawShape((shapeSize*i),100,.85)
   }*/
}

// 2: call a strip
//outerShapeStrip(100,10,50,10,"#ffffff");

// 5: call a strip
//outerShapeStrip(100,10,50,10,"#ffffff");
//6: and another
//outerShapeStrip(300,10,75,10,"#ff0000");


//7:CAN We call? NO! it has local scope to outer function ....
//foundation for objects.
  //drawShape(20,100,.85)




}//onload
