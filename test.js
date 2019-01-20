function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	

}

function draw() {
	background(0)
	window.onresize = function(){createCanvas(windowWidth, windowHeight)};
	let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, locX, locY, 100);
 
   push();
  translate(width / 4, -height / 4, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  normalMaterial();
  torus(mouseX, height/2, mouseY/2+10, mouseY/2+10);
  pop();

  var inverseX = width-mouseX;
  var inverseY = height-mouseY;

   push();
  translate(width / 4, height / 4, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  specularMaterial(250);
  torus(inverseX, height/2, (inverseY/2)+10, (inverseY/2)+10);
  pop();

	//if (mouseIsPressed) {
		//fill(200, 200, 200, 200);
	//} else {
		//fill(255);
	//}
  //ellipse(mouseX, mouseY, 30, 45);
}
