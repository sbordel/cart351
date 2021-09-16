window.onload = function(){
console.log('20:: arrays one');


/** P1/ SHAPE CLASS (OBJECT) **/
   class DemoShape {
    /* constructor :: for binding */
    constructor(x,y,r,g,b) {
    //position
    this.x = x;
    this.y = y;

    //origPos::
    this.orig_x = x;
    this.orig_y = y;


    //for movement (NOT USE YET)
    this.speedX = Math.random()*4;
    this.speedY = Math.random()*4;

    //for color
    this.a = 1.0;
    this.col = "rgba("+r+","+g+","+b+","+this.a+")";

    /* create an html element */
    this.el = document.createElement('div');
    this.el.classList.add('shape');

    //add background col
    this.el.style.background = this.col;
    //left and top positions.
    this.el.style.left =this.x+"px";
    this.el.style.top= this.y+"px";

    /* use DOM method for appending ... */
    document.getElementById('parent').appendChild(this.el);


    /* add an event listener (to this object)
    :: mousedown is super responsive*/
    this.el.addEventListener("mousedown", this.shapeChange);

  } //close constructor
/*:: member method - also the callback */
  shapeChange(){
    // inbuilt function... and just toggle css class
  if(this.classList.contains('circ'))
  {
    this.classList.remove('circ');

  }
  else{
    this.classList.add('circ');
  }

  }

/*1 ::: add a function to update the pos ... */
update(){
  //OPTIONAL (bonus ::)(5)
  //only animate if is a circ:: - will stop otherwise!
  //if(this.el.classList.contains('circ')){
  this.x+=this.speedX;
  this.y+=this.speedY;
  this.el.style.left =this.x+"px";
  this.el.style.top= this.y+"px";
//}

}

//4:: after inital animation - lets do one last thing -
//implement the abiility to check the screen bounds::
//and change direction ...
//WE ARE MAKING OUR OWN SIZE HERE ...
checkScreenBounds(){
  if(this.x>500 || this.x<0){
    this.speedX = this.speedX*-1;
  }

  if(this.y>500 || this.y<0){
    this.speedY = this.speedY*-1;
  }
}

} //shape object ...
/*********************************************/

 // 1::
 let emptyArray = [];
 console.log(emptyArray);
//2:
  let multipleXPositions = [20,200,600,450,330,679]; //create an array
 console.log(multipleXPositions);
 //
 //
 //  //3: lets draw ONE ellipse using our object and the first element in the array:
 //
 // // //a: how to access? - BY THE POSITION IN THE ARRAY (starts at 0)
 //  document.getElementById("text_1").innerHTML = "item in array: "+multipleXPositions[1];
 // //NEW:: multipleXPositions.length === size of array
 //  document.getElementById("text_2").innerHTML = "array length: "+multipleXPositions.length;
 // //
 //  //b: how to access each one - > by using a for loop:
 //  //USE the length of the array as the condition to terminate the loop
 //   for (let i=0; i<multipleXPositions.length;i++){
 //     let p = document.createElement('p');
 //     p.classList.add("paraAbs");
 //     p.textContent = multipleXPositions[i];
 //     //append to the DOM...
 //     document.getElementById("parent").appendChild(p);
 //     p.style.left = i*200+"px";
 //     //**bonus**:: note how we use the element in the array as a position...
 //     //p.style.left = multipleXPositions[i]+"px";
 //     p.style.top = 300+"px";

 // }
//
 /*c: USING THE SHAPE OBJECT...*/
   for (let i=0; i<multipleXPositions.length;i++){

     // generate random colors...
     let r = Math.floor(Math.random()*255);
     let g = Math.floor(Math.random()*255);
     let b = Math.floor(Math.random()*255);

     new DemoShape(multipleXPositions[i],200,r,g,b);
   }


}//onload
