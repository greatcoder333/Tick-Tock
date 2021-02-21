var hr, min, sec

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
   hr = hour()
  min = minute()
  sec = second()
  angleMode(DEGREES)
}

function draw() {
  background(0,255,0);  
  drawSprites();
  stroke(255,0,0)
 strokeWeight(7)
 line(0,0,100,0)
 secAngle = map(sec,0,60,0,360)
 push()
 rotate(secAngle)
 stroke(255,0,0)
 strokeWeight(7)
 line(0,0,100,0)
 translate(0,0)
 pop()
}