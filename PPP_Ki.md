    // p5js editor 링크 : https://editor.p5js.org/dkdlstb112@gmail.com/sketches/9ACrQR1Gc

    let ki;
    let your_body;
    let your_heart;

    function setup() {
      createCanvas(400, 400);

      ki = new Ki();
      your_body = new Body();
      your_heart = new Heart();
    }

    function draw() {
      background(100);

      ki.is_flowing();
    }

    class Body {
      constructor() {
        this.pos = createVector(width / 2, height / 2);

        this.color = color(255);
        this.size = 10;
      }

      is_moving() {
        this.ranV = 5;
        this.movement = random(-this.ranV, this.ranV);

        this.vel = createVector(this.movement, your_heart.is_breath);
        this.pos.add(this.vel);
      }

      is_visible() {
        ellipse(this.pos.x, this.pos.y, this.size);
        fill(this.color);
        noStroke();
      }

      has_boundary() {
        if (this.pos.x > width) this.pos.x = 0;
        if (this.pos.x < 0) this.pos.x = width;
        if (this.pos.y > height) this.pos.y = 0;
        if (this.pos.y < 0) this.pos.y = height;
      }
    }


    class Ki {
      constructor() {
        let ki, flows, through, breathing;
        this.is_breathing = flows;
      }

      is_flowing() {
        if (this.is_breathing != 0) {

          your_body.is_moving();
          your_body.is_visible();
          your_body.has_boundary();

          your_heart.is_thinking();
          your_heart.is_breathing();

          this.flow = 5;
          this.is_circulating = random(-this.flow, this.flow);

          if (your_heart.is_breath == this.flow) {
            this.is_over_flowing();
          }

          if (your_heart.is_breath < 0) {
            this.is_under_flowing();
          }
        }
      }

      is_over_flowing() {
          your_heart.energy *= 2;
          your_body.ranV *= 2;
        }

      is_under_flowing() {
          your_heart.energy %= 2;
          your_body.ranV %= 2;
      }
    }


    class Heart {
      constructor() {
        let me, ba_boom, _with; this.energy = 0;
      }

      is_thinking() {
        this.energy = ki.is_circulating;

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
