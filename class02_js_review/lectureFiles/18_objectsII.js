window.onload = function(){
// use 15 and add event listeners.
console.log('18:: objects II');

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


    /* 1::: add an event listener (to this object)
    :: mousedown is super responsive*/
    this.el.addEventListener("mousedown", this.shapeChange);

  } //close constructor
/*2:: member method - also the callback */
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
} //shape object ...


// OUTSIDE OF CLASS DEFENITION :: CUSTOM FUNCTION...
//number rows and cols
createTheBoxes(10,10);

function createTheBoxes(numRows, numCols){

  for(let i=0; i<numCols ; i++){

    for(let j=0; j<numRows;j++){
      // generate random colors...
      let r = Math.floor(Math.random()*255);
      let g = Math.floor(Math.random()*255);
      let b = Math.floor(Math.random()*255);

      new DemoShape((i+1)*50,(j+2)*50,r,g,b);
    }

  }
}


}//onload
