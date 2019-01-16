function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);

}

function draw() {
	window.onresize = function(){createCanvas(windowWidth, windowHeight)};

	if (mouseIsPressed) {
		fill(200, 200, 200, 200);
	} else {
		fill(255);
	}
  ellipse(mouseX, mouseY, 30, 45);
}
