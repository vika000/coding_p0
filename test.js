function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(100)

 noStroke();
  //yellow
  fill(245,213,30, 50);
  ellipse(100, 100, 80,80);
  //green
  fill(42,82,19);
  ellipse(520, 227, 80,80);
  //red
  fill(178,5,5);
  ellipse(60, 425, 80,80);
  //blue
  fill(46,60,134, 120);
  ellipse(20,55, 80,80);
  
  fill(178,5,5);
  beginShape();
  vertex(415, 0);
  vertex(415, 410);
  vertex(300, 410);
  vertex(259, 410);
  endShape();
  
  //bottom blue tri
  fill(36,19,124,150);
  beginShape();
  vertex(219, 110);
  vertex(-127, 210);
  vertex(17, -700);
  endShape();
  
  stroke(4);
  strokeWeight(.85);
  line(-10, 0, 100, 100);
  strokeWeight(.85);
  line(100, 140, 560, 190);
  strokeWeight(.95);
  line(-100, 140, 100, 375);
  strokeWeight(.65);
  line(110, 444, 360, 405);
  strokeWeight(.99);
  line(100, 602, 105, 398);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}