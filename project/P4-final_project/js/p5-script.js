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

changes hue

1- #8e525f = tint(142, 82, 95, 50)
2- #ffce3c = tint(255, 206, 60)
3- #ff5c00 = tint(255, 92, 0)
4- #f42a41 = tint(244, 42, 65)
5- #ca50b6 = tint(202, 80, 182) 
6- #e336a8 = tint(227, 54, 168)
7- #3556ab = tint(53, 86, 171)
8- #00b4b2 = tint(0, 180, 178)

*/