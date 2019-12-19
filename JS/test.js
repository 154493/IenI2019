var diamater = 50

function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
   noStroke();
   fill('red');
   ellipse(75,225,diamater);
}
function sfs() {
   for (var n = 1;n <=5;n++) {
   draw(n);
   translate(75,225)    
   }
}