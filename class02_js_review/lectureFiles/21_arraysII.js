window.onload = function(){
console.log('21:: arrays two (push and pop)');


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

 //2: NEW:: make the empty array to hold possible positions::
 let multipleXPositions =[];

 //4: for OPTIOn B::
let demoShapes = [];

 //3:: lets ADD to the array on mouseClick (of parent)...
 document.getElementById("parent").addEventListener("mousedown",addPos);


 function addPos(){
   //4: instead of random pos - lets capture the x of the mouse and put that in instead
   let bBox = this.getBoundingClientRect();
   // the one we use ...diff
   let mouse_offset_x = event.clientX-bBox.x;
   let mouse_offset_y = event.clientY-bBox.y;
   // PUSH into the array
   multipleXPositions.push(mouse_offset_x);
   //console.log(multipleXPositions);
   let lastAddedIndex = multipleXPositions.length-1;
   document.getElementById("text_1").innerHTML = "item in array: "+multipleXPositions[lastAddedIndex];
   //NEW:: multipleXPositions.length === size of array
   document.getElementById("text_2").innerHTML = "array length: "+multipleXPositions.length;

   // //OPTION A: if we put here - we are constantly adding new demo objects to the DOM ...
   // //IS not exactly what we want....
   // for (let i=0; i<multipleXPositions.length;i++){
   //
   //   // generate random colors...
   //   let r = Math.floor(Math.random()*255);
   //   let g = Math.floor(Math.random()*255);
   //   let b = Math.floor(Math.random()*255);
   //
   //   new DemoShape(multipleXPositions[i],500,r,g,b);
   // }
 // // OPTION B: we make an array of shapes and add a new shape each time ...
 // //here we add ...
 //   let r = Math.floor(Math.random()*255);
 //   let g = Math.floor(Math.random()*255);
 //   let b = Math.floor(Math.random()*255);
 //  // demoShapes.push(new DemoShape(multipleXPositions[lastAddedIndex],500,r,g,b));
 //  // OPTION C: note:: how we actually do not need the other array anymore  -
 //  // we can just push the x and y  ...
 // demoShapes.push(new DemoShape(mouse_offset_x,mouse_offset_y,r,g,b));

 }//end Add ///

/* WON't WORK here
   for (let i=0; i<multipleXPositions.length;i++){

     // generate random colors...
     let r = Math.floor(Math.random()*255);
     let g = Math.floor(Math.random()*255);
     let b = Math.floor(Math.random()*255);

     new DemoShape(multipleXPositions[i],500,r,g,b);
   }
*/

}//onload
