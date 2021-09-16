window.onload = function(){
// here we just create the object ...
console.log('17:: objects I');

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

  } //close constructor
} //shape object ...

//2: OUTSIDE OF CLASS DEFENITION :: CUSTOM FUNCTION...
//number rows and cols
createTheBoxes(10,10);

function createTheBoxes(numRows, numCols){
//3: 1 shape
 //new DemoShape(50,50,255,125,0);

//  // 5:: using a nested for loop ...
//  for(let i=0; i<numCols ; i++){
//
// //4:: make ONE column
//   for(let j=0; j<numRows;j++){
//       // generate random colors...
//       let r = Math.floor(Math.random()*255);
//       let g = Math.floor(Math.random()*255);
//       let b = Math.floor(Math.random()*255);
//
//     new DemoShape((i+1)*50,(j+2)*50,r,g,b);
//     // for 4
//     //new DemoShape(50,(j+2)*50,r,g,b);
//     }
//
//    }
}


}//onload
