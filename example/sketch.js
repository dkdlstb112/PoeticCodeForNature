let drawCircle;

function setup() {
  title = createElement('h2', "<a href='/PoeticCodeForNature'> HOME : </a> 작품 제목");
  title.position(20, 0);

  canvas = createCanvas(300, 300);
  canvas.position(20, 60);
  canvas.class("artwork");

  description = "\
  작품에 대한 설명이 들어갑니다. <br/> \
  HTML이 직접 들어가서 줄넘김을 할 수 있습니다. \
  ";
  text = createDiv(description);
  text.position(20, 400);
  text.style("font-family", "monospace");
  text.style("font-size", "12pt");

  drawCircle = new Circle();
}

function draw() {
  background(0);

  drawCircle.move();
  drawCircle.display();
  drawCircle.checkEdge();
}

class Circle {
  constructor(){
    this.position = createVector(width/2, height/2);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0.05);
    this.size = 20;
  }

  move(){
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
  }

  display(){
    ellipse(this.position.x, this.position.y, this.size);
    fill(255);
    noStroke();
  }

  checkEdge(){
    if (this.position.y > height) {
      this.acceleration.y *= -1;
    }
  }
}
