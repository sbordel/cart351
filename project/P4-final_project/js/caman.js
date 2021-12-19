//list of all the caman.js effects used for the garden

//YELLOWING:: yellow tint
Caman("#garden-img", function yellowing() {
 this.brightness(5);
 this.contrast(10);
 this.colorize("#FFFF00", 5);
 this.render();
});

//WILTING:: sepia + contrast 
Caman("#garden-img", function wilting() {
 this.sepia(10)
 this.contrast(5);
 this.clip(5);
 this.render();
});

//BROWNING:: brown tint 
Caman("#garden-img", function () {
this.newLayer(function () {
  //browning layer
  this.setBlendingMode("addition");
  this.opacity(100);

  //color fill
  this.fillColor('#986960');
 });
 this.saturation(100);
 this.brightness(-10);
 this.render();
});

//DRY SOIL:: sharpening 
Caman("#garden-img", function () {
this.gamma(0.6);
this.sharpen(100);
this.render();
});

//DEFOLIATION:: thresholding
Caman("#garden-img", function () {
this.newLayer(function () {
   //threshold layer
   this.setBlendingMode("addition");
   this.opacity(80);

   // copy of parent's contents
   this.copyParent();

   // layer filter -- threshold ranges between 0 and 255.
   // the lower the number, the bigger the white areas
   this.filter.threshold(255);
 });
 this.render();
});

//DISEASE:: White Spotting 
Caman("#garden-img", function () {
this.newLayer(function () {
  //disease layer
  this.setBlendingMode("addition");
  this.opacity(30);

  // copy of parent's contents
  this.copyParent();

  // blur image to prevent artifact edges from being too defined
  this.filter.heavyRadialBlur(50);
  // then launch edge detection
  this.filter.edgeDetect(1);
  // blur image for a second pass
  this.filter.heavyRadialBlur(50);
  this.filter.greyscale(20);
});
this.contrast(5);
this.render();
});

//FERTILIZER CRUST:: Embossing
Caman("#garden-img", function () {
this.newLayer(function () {
  //embossing layer
  this.setBlendingMode("??");
  this.opacity(30);

  // copy of parent's contents
  this.copyParent();

  this.filter.emboss(??);
  this.filter.grayscale(30);
});
this.render();
});
