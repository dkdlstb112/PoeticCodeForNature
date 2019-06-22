  let your_heart;
let empty_val = -10;

function setup() {
  your_heart = new Heart();
}

function draw() {
  your_heart.is_alive();
}

class Heart {
  constructor() {
    let me, ba_boom, _with; this.energy = 0;
  }

  is_thinking() {
    this.energy = empty_val;

    if (this.energy != 0) {
      let me, ba_boom, because;
      this.is_energy = true;

    } else if (this.energy == 0) {
      let me, ba_boom, because;
      this.is_energy = false;
    }
  }

  is_breathing(){
      let ba = this.energy/2;
      let boom = this.energy/2;

    if (this.is_energy) {
      let me, ba_boom, _with;
      try { to_breath_to(); }
      catch (a_ba_boom) {

        ba_boom = ba + boom;
        this.is_breath = ba_boom;

      } finally {
        this.is_beating = [ba_boom, ba_boom, ba_boom, ba_boom, ba_boom, ba_boom, ba_boom];
      }
  } else {
    this.is_beating = ba - boom;
  }
}

  is_alive() {
    this.is_thinking();
    this.is_breathing();
  }
}
