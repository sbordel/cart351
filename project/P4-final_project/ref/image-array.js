// CODE FROM ===> https://stackoverflow.com/a/22826906
/* **** */

//To create an image from array you can do this:

var width = 400,
    height = 400,
    buffer = new Uint8ClampedArray(width * height * 4); // have enough bytes

// The * 4 at the end represent RGBA which we need to be compatible with canvas.

//Fill the buffer with some data, for example:
for(var y = 0; y < height; y++) {
    for(var x = 0; x < width; x++) {
        var pos = (y * width + x) * 4; // position in buffer based on x and y
        buffer[pos  ] = ...;           // some R value [0, 255]
        buffer[pos+1] = ...;           // some G value
        buffer[pos+2] = ...;           // some B value
        buffer[pos+3] = 255;           // set alpha channel
    }
}

//When filled use the buffer as source for canvas:

// create off-screen canvas element
var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');

canvas.width = width;
canvas.height = height;

// create imageData object
var idata = ctx.createImageData(width, height);

// set our buffer as source
idata.data.set(buffer);

// update canvas with new data
ctx.putImageData(idata, 0, 0);

/*
Note that you could use the imageData buffer (here: idata.data) instead of creating your own. Creating your own is really only useful if you use for example floating point values or get the buffer from some other source - setting the buffer as above will take care of clipping and rounding the values for you though.

Now the data in your custom array is copied to the canvas buffer. Next step is to create an image file:
*/

var dataUri = canvas.toDataURL(); // produces a PNG file

//Now you can use the data-uri as source for an image:

image.onload = imageLoaded;       // optional callback function
image.src = dataUri

