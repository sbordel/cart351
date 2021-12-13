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

