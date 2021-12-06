"use strict";

let img;

function setup() {    

    /*
let gardenCnv = createElement('div');
gardenCnv.id('garden-canvas'); */

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
}
