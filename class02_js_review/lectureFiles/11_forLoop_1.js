window.onload = function(){
console.log('11:: for loop one -with text');

xpos =0;


//1
for(let i = 0; i<9; i++){
//  console.log(i);
  xpos = xpos+15;
  let p = document.createElement('p');
  p.classList.add("paraAbs");
  p.textContent = i;
  //append to the DOM...
  document.getElementById("parent").appendChild(p);
  p.style.left = xpos+"px";
}
/*put back to 0*/
//NOTE how i is LOCAL to the clause {}

//2
xpos =0;
for(let i = 0; i<100; i+=10){
  //console.log(i);
  xpos+=25;
  let p = document.createElement('p');
  p.classList.add("paraAbs");
  p.textContent = i;
  //append to the DOM...
  document.getElementById("parent").appendChild(p);
  p.style.left = xpos+"px";
  p.style.top = 300+"px";
}

//put back to 0
//NOTE how i is LOCAL to the clause {}
xpos =0;
//3
for(let i = 100; i>0; i=i-5){
  //console.log(i);
  xpos = xpos+45;
  let p = document.createElement('p');
  p.classList.add("paraAbs");
  p.textContent = i;
  //append to the DOM...
  document.getElementById("parent").appendChild(p);
  p.style.left = xpos+"px";
  p.style.top = 400+"px";
}







}//onload
