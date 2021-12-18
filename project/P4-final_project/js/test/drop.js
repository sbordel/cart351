function Drop(x, y) {
    this.x = x;
    this.y = y;


    this.display = function (){
      scale(1,1);
      stroke('rgba(0,0,0,0)')
      strokeCap(PROJECT);
      strokeJoin(MITER);
      fill("#00bdf4")
      stroke("#33ccff");
      translate(this.x, this.y);
      beginShape();
      vertex(27.139,0.993);
      bezierVertex(-18.113,100.459,2.056,124.2,30.423,124.49);
      bezierVertex(62.283,124.819,88.962,86.992,27.139,0.993);
      endShape();
    }

    this.update = function() {

      this.x = this.x + random(-1, 1);
      this.y = this.y + random(-1, 1);

    }

  }

