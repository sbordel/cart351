window.onload = function(){
console.log('22:: arrays three:: update..');


/** P1/ SHAPE CLASS (OBJECT) **/
   class DemoShape {
    /* constructor :: for binding */
    constructor(x,y,r,g,b) {
  // ADD
    let self = this;
    //position
    this.x = x;
    this.y = y;

    //origPos::
    this.orig_x = x;
    this.orig_y = y;



    //for movement (NOT USE YET)
    this.speedX = (Math.random()*4)+1;
    this.speedY = (Math.random()*4)+1;


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


    /*  remove ::add an event listener (to this object)
    :: mousedown is super responsive*/
    //this.el.addEventListener("mousedown", this.shapeChange);

    //3 ;; NEW on over...::

    //A:: this -> is the HTML element ... inside the removeFromArray::
    // when function is triggered we will not be accessing the instance of our shape obj:
//   this.el.addEventListener("mouseover", this.removeFromArray);
  // B:: essentially same issues as A
  //this.el.addEventListener("mouseover", self.removeFromArray);

// HERE :: WE HAVE an anon function - and within that we say when the anon function is triggered call self -
//and now becuase we call that function (not pass a ref - "this" inside the function will now be our object)
// the SIDE issues of js ... ::
  this.el.addEventListener("mouseover", function(){self.removeFromArray()});

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

  // 5 ;; get the index and then splice NEW::
  removeFromArray(){
    console.log(this);
    const myIndex = demoShapes.indexOf(this);
    console.log(myIndex);
    demoShapes.splice(myIndex,1);
    this.el.remove();
    // AND have to remove from the dom...


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


 let demoShapes = [];
 document.getElementById("parent").addEventListener("mousedown",addPos);


 function addPos(){
   //4: instead of random pos - lets capture the x of the mouse and put that in instead
   let bBox = this.getBoundingClientRect();
   // the one we use ...diff
   let mouse_offset_x = event.clientX-bBox.x;
   let mouse_offset_y = event.clientY-bBox.y;

 //here we add ...
   let r = Math.floor(Math.random()*255);
   let g = Math.floor(Math.random()*255);
   let b = Math.floor(Math.random()*255);

  //demoShapes.push(new DemoShape(mouse_offset_x,mouse_offset_y,r,g,b));

  // 2:: NEW for avoiding conflict
  demoShapes.push(new DemoShape(Math.random()*400,Math.random()*400,r,g,b));

  // add in the length::
   console.log("array length:: "+demoShapes.length)

 }//end Add ///

 //1: call the inbuilt function

 requestAnimationFrame(animate);

 function animate(){

   for(let i = 0; i<demoShapes.length;i++ ){
     demoShapes[i].update();
    demoShapes[i].checkScreenBounds();
   }
   //call again
   requestAnimationFrame(animate);
 }






}//onload
