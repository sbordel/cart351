window.onload = function(){

console.log('2:: using variables (numbers)');

//** SPECIFY THAT you can ALSO log all the vars ...)
// math + assignment + applying to elements from DOM

//2: declare variable
let rectX = 100;
let rectY = 100;

//3:  NOTE:: THE inbuilt method to access an element by its ID (from the DOM)
//CAN ALSO assign that to a var
let theElement = document.getElementById("one");
console.log(theElement);

//4: change the top and left of one (CSS INLINE STYLE properties)...
theElement.style.left = rectX+"px";
theElement.style.top = rectX+"px";
console.log(theElement);

//5: ADDition
let rectWidth = 30;
let rectHeight = rectWidth+50;

 let theElementTwo = document.getElementById("two");
 theElementTwo.style.width = rectWidth+"px";
 theElementTwo.style.height = rectHeight+"px";

//6: MULTIPLY
let multiX = 100*2;
let theElementThree = document.getElementById("three");
theElementThree.style.width = multiX+"px";
theElementThree.style.left = multiX+"px";



}//onload
