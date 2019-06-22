let your_body, feel_the, stranger, _with, your_heart, and, your_sense;

function setup() {
  createCanvas(700, 700);

  stranger = new Stranger();
  your_body = new Body();
  your_sense = new Perception();
  your_heart = new Heart();
}

function draw() {
  background(0, 50);
  your_sense.is_awaring_world();
}

class Perception {
  constructor() {
    let me, feel, the, world;
  }

  is_awaring_world() {

    your_heart.is_thinking();

    your_heart.is_breathing();

    this.is_feeling();

    your_body.is_visible();

    stranger.is_visible();

    stranger.is_moving();

    your_body.is_moving();

    this.is_evading();

    this.is_awaring_borders();
  }

  is_feeling() {
    this.is_awareness = p5.Vector.dist(stranger.position, your_body.position);
  }

  is_evading(){
    your_body.acceleration = p5.Vector.sub(your_body.position, stranger.position);

    your_body.acceleration.setMag(0.001);
    your_body.acceleration.x *= 0.5;
    your_body.acceleration.y *= 0.5;
  }

  is_awaring_borders() {
    if (your_body.position.x > width) your_body.position.x = 0;
    if (your_body.position.x < 0) your_body.position.x = width;
    if (your_body.position.y > height) your_body.position.y = 0;
    if (your_body.position.y < 0) your_body.position.y = height;
  }
}


class Heart {
  constructor() {
    let me, ba_boom, _with; this.energy = 0;
  }

  is_thinking() {
    this.energy = your_sense.is_awareness;

    if (this.energy != 0) {
      let me, ba_boom, because;
      this.is_energy = true;

    } else if (this.energy == 0) {
      let me, ba_boom, because;
      this.is_energy = false;
    }
  }

  is_breathing() {
    let ba = this.energy / 2;
    let boom = this.energy / 2;

    if (this.is_energy) {
      let me, ba_boom, _with;
      try {
        to_breath_to();
      } catch (a_ba_boom) {

        ba_boom = ba + boom;
        this.is_breath = ba_boom;

      } finally {
        this.is_beating = [ba_boom, ba_boom, ba_boom, ba_boom, ba_boom, ba_boom, ba_boom];
      }
    } else {
      this.is_beating = ba - boom;
    }
  }
}


class Body {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);

    this.color = color(255);
    this.size = 30;
  }

  is_visible() {
    this.size = your_heart.is_breath/10;
    ellipse(this.position.x, this.position.y, this.size);
    fill(this.color);
    noStroke();
  }

  is_moving() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);

    this.acceleration.set(0, 0);
  }
}


class Stranger {
  constructor() {
    this.position = createVector(random(width/2), random(height/2));
    this.velocity = createVector(random(0,100), random(0,100));
    this.acceleration = createVector(0.01, 0.01)

    this.color = color(150);
    this.size = 10;
  }

  is_moving() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    //this.acceleration.set(0,0);

    this.position.x = map(noise(this.velocity.x), 0, 1, 0, width);
    this.position.y = map(noise(this.velocity.y), 0, 1, 0, width);
  }

  is_visible() {
    ellipse(this.position.x, this.position.y, this.size);
    fill(this.color);
    noStroke();
  }
}
