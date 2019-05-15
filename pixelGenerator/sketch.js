let pixel;
let pixel_1;
let pixel_2;
let pixel2;
let pixel2_1;
let pixel2_2;

let size = 3;

function setup() {
  createCanvas(1280, 720);
  background(50);
  frameRate(1000);
  pixel = new Pixel();
  pixel_1 = new Pixel();
  pixel_2 = new Pixel();
  pixel2 = new Pixel2();
  pixel2_1 = new Pixel2();
  pixel2_2 = new Pixel2();
}

function draw() {
  //background(0, 5);
  let value = [size*-1, 0, size];
  let addValue = value[round(random(value.length - 1))];
  let addValue2 = value[round(random(value.length - 1))];

  pixel.display();
  pixel.edges();
  pixel.move(addValue, addValue2);

  pixel_1.display();
  pixel_1.edges();
  pixel_1.move(addValue, addValue2);

  pixel_2.display();
  pixel_2.edges();
  pixel_2.move(addValue, addValue2);

  pixel2.display();
  pixel2.edges();
  pixel2.move(addValue, addValue2);

  pixel2_1.display();
  pixel2_1.edges();
  pixel2_1.move(addValue, addValue2);

  pixel2_2.display();
  pixel2_2.edges();
  pixel2_2.move(addValue, addValue2);
}

class Pixel {
  constructor() {
    this.position = createVector(0, 0);
    this.size = size;
  }

  move(a, b) {
    this.position = createVector(pixel2.position.x + a, pixel2.position.y + b);
  }

  display() {
    rect(this.position.x, this.position.y, this.size, this.size);
    fill(255);
    noStroke();
  }

  edges() {
    if (this.position.x > width) this.position.x = 0;
    if (this.position.x < 0) this.position.x = width;
    if (this.position.y > height) this.position.y = 0;
    if (this.position.y < 0) this.position.y = height;
  }
}


class Pixel2 {
  constructor() {
    this.position = createVector(0, 0);
    this.size = size;
  }

  move(a, b) {
    this.position = createVector(pixel.position.x + a, pixel.position.y + b);
  }

  display() {
    rect(this.position.x, this.position.y, this.size, this.size);
    fill(255);
    noStroke();
  }

  edges() {
    if (this.position.x > width) this.position.x = 0;
    if (this.position.x < 0) this.position.x = width;
    if (this.position.y > height) this.position.y = 0;
    if (this.position.y < 0) this.position.y = height;
  }
}
