let img;
function preload(){
  img = loadImage("rb.png");
  
}
function setup() {
  createCanvas(400, 400, WEBGL);
}
function draw() {
  background(200);
  rotateX(frameCount * 0.01);
  texture(img);
  box(100);
}
