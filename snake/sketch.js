let foodChain;
let food;
let predator;

function setup() {
  createCanvas(1280, 720);
  foodChain = new Foodchain();
  food = new Food();
  predator = new Predator();
}

function draw() {
  background(150);

  foodChain.addCells();
  foodChain.run();
}

class Predator {
  constructor() {
    this.position = createVector(random(width), random(height));
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);

    this.size = random(20, 35);
    this.life = 255;
    this.color = color(random(20, 230));
  }

  run() {
    this.move();
    //this.calculateDistance();
    this.display();
    //this.death();
    this.edges();
  }

  move() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.acceleration.set(0, 0);

    this.position.x = map(noise(this.velocity.x), 0, 1, 0, width);
    this.position.y = map(noise(this.velocity.y), 0, 1, 0, height);

    if (food.size < this.size) {
      this.acceleration = p5.Vector.sub(food.position, this.position);
      this.acceleration.setMag(0.004);
    } else if (food.size > this.size) {
      this.acceleration = p5.Vector.sub(this.position, food.position);
      this.acceleration.setMag(0.01);
    }
  }


  display() {
    ellipse(this.position.x, this.position.y, this.size);
    fill(this.color);
    noStroke();
  }

  edges() {
    if (this.position.x > width) this.position.x = 0;
    if (this.position.x < 0) this.position.x = width;
    if (this.position.y > height) this.position.y = 0;
    if (this.position.y < 0) this.position.y = height;
  }
}


class Food extends Predator {
  move() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.acceleration.set(0, 0);

    this.position.x = map(noise(this.velocity.x), 0, 1, 0, width);
    this.position.y = map(noise(this.velocity.y), 0, 1, 0, height);

    if (predator.size < this.size) {
      this.acceleration = p5.Vector.sub(predator.position, this.position);
      this.acceleration.setMag(0.004);
    } else {
      this.acceleration = p5.Vector.sub(this.position, predator.position);
      this.acceleration.setMag(0.01);
    }
  }

  display() {
    ellipse(this.position.x, this.position.y, this.size);
    fill(this.color);
    noStroke();
  }
}


class Foodchain {
  constructor() {
    this.cells = [];
  }

  addCells() {
    if (mouseIsPressed) {
    let r = random(1);
    if (r < 0.5) {
      this.cells.push(new Predator());
    } else {
      this.cells.push(new Food());
    }
    }
  }

  run() {
    for (let cell of this.cells) {
      cell.run();
    }
  }
}
