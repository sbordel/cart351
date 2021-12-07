"use strict";

let img;

function preload() {
}

function setup() {
let modalCnv = createCanvas(300, 300);
modalCnv.parent('img-upload');
modalCnv.id('inline-upload');
background(200);
fill(0, 0, 255);
textAlign(CENTER);
textSize(30);
text('⤒', width / 2, height / 2);
modalCnv.drop(gotFile);
};

function draw() {
if (img) {
    image(img, 0, 0, width, height);
}
};

function gotFile(file) {
img = createImg(file.data, '').hide();

/*
let imgSrc = file.data;

let plot = {}; // new  JSON Object

plot.id = 0;
plot.src = imgSrc ;

saveJSON(plot, '../json/garden-img.json');*/
}

/*

FERTILIZER

1- #
2- @
3- $

4- ()
5- ?
6- *

7- +
8- ~
9- /

10- %
11- =
12- ^

LIQUID SUNSHINE

#8e525f 
filter: invert(36%) sepia(9%) saturate(2234%) hue-rotate(297deg) brightness(95%) contrast(85%);

#ffce3c 
filter: invert(98%) sepia(76%) saturate(6333%) hue-rotate(322deg) brightness(99%) contrast(100%);

#ff5c00
filter: invert(41%) sepia(41%) saturate(5076%) hue-rotate(2deg) brightness(105%) contrast(104%);

#f42a41
filter: invert(32%) sepia(82%) saturate(6143%) hue-rotate(341deg) brightness(101%) contrast(91%);

#ca50b6 
filter: invert(48%) sepia(77%) saturate(1382%) hue-rotate(280deg) brightness(83%) contrast(88%);

#e336a8 
filter: invert(39%) sepia(72%) saturate(5177%) hue-rotate(300deg) brightness(95%) contrast(87%);

#3556ab 
filter: invert(28%) sepia(71%) saturate(1163%) hue-rotate(200deg) brightness(90%) contrast(88%);

#00b4b2 
filter: invert(55%) sepia(35%) saturate(3690%) hue-rotate(141deg) brightness(92%) contrast(101%);


---

color filters determined with ==> https://codepen.io/sosuke/pen/Pjoqqp
*/