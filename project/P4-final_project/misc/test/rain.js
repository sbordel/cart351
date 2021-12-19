
var drops = [];

function setup() {
    createCanvas(600, 400);
}

function draw(){
    background(0);
    

    for (var i = drops.length - 1; i >= 0; i--) {
        drops.push(new Drop());

        drops[i].update();
        drops[i].display();
    }
}


