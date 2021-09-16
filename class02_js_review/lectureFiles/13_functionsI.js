window.onload = function(){
console.log('13:: functionsI');

//PASS the element id as a parameter ...
//p2
addAndDisplay(30,100,"text_1");

//p3
addAndDisplay(-8080,50,"text_2");

//p1::
function addAndDisplay(numOne,numTwo,elementId){
  let result = numOne+numTwo;
  document.getElementById(elementId).innerHTML = "the result from function <span> addAndDisplay():   "+result+"</span>";
}
//result is LOCAL to the function
//console.log(result); // no is not defined ..

//p4:: RETURN the value and get store the result in a variable
function subtractAndReturn(numA,numB){
  let result  = numA-numB;
 return result;
}

//p5
let r1 = subtractAndReturn(4040,50);
document.getElementById("text_3").innerHTML = "the result from function <span> subtractAndReturn():   "+r1+"</span>";


//p6
let r2 = subtractAndReturn(8040,50);
document.getElementById("text_4").innerHTML = "the result from function <span> subtractAndReturn():   "+r2+"</span>";







}//onload
