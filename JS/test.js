function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
  fill('darkred');
  ellipse(225,225,300);
  fill('darkblue');
  rect(125,125,200,200);
}