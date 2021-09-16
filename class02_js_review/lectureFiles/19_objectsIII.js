window.onload = function(){
// use 15 and add event listeners.
console.log('19:: objects III - ANIMATE');

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



// OUTSIDE OF CLASS DEFENITION :: CUSTOM FUNCTION...
//number rows and cols
//createTheBoxes(10,10);

//2: FOR NOW  create one BOx and animate
//ASSIGN to a VARIABLE! (not like before )
let box1 =   new DemoShape(50,50,255,0,0);

/*function createTheBoxes(numRows, numCols){

  for(let i=0; i<numCols ; i++){

    for(let j=0; j<numRows;j++){
      // generate random colors...
      let r = Math.floor(Math.random()*255);
      let g = Math.floor(Math.random()*255);
      let b = Math.floor(Math.random()*255);

      new DemoShape((i+1)*50,(j+2)*50,r,g,b);
    }

  }
}*/

//3: call the inbuilt function
//that will automatically be called AUTOMATICALLY at the next screen repaint
//SIMILAR to setInterval() - but here the interval is set by the browser
//(next screen repaint)
requestAnimationFrame(animate);

function animate(){

console.log("animate");
  box1.update();

  //5: call to check the edges ...
  box1.checkScreenBounds()
  // need to call CONTINUOUSLY
  requestAnimationFrame(animate);
}






}//onload
