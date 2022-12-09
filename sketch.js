let circRotateClock = 0;

function setup() {
  createCanvas(500, 500);
  background(color(255));
  angleMode(DEGREES);
}

function draw() {
  background(255, 70);
  translate(width / 2, height / 2);
  rotate(circRotateClock*1.25);
  circRotateClock++;
  noFill();
  stroke(139, 0, 0);
  strokeWeight(2);

  for (let i = 0; i < 100; i++) {
    console.log(i);

    rotate(3.6);
    arc(75, 0, 25, 20, 0, 180);
    arc(75 + 32, 0, 40, 27.5, 180, 0);
    arc(75 + 32 * 2, 0, 25, 20, 0, 180);
    arc(75 + 32 * 3, 0, 40, 27.5, 180, 0);

  }
}
