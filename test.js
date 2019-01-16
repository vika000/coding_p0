function setup() {
	createCanvas(windowWidth, windowHeight);

}

function draw() {
	window.onresize = function(){createCanvas(windowWidth, windowHeight)};
	
	if (mousePressed) {
		fill(0);
	} else {
		fill(255);
	}
  ellipse(mouseX, mouseY, 80, 80);
}