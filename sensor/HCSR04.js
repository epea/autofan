const raspi = require("raspi");
const gpio = require("raspi-gpio");

const awaitDelay = require("../util/awaitDelay.js");

const HIGH = gpio.HIGH;
const LOW = gpio.LOW;
const Output = gpio.DigitalOutput;

const trig = new Output("GPIO21");
const echo = new Output("GPIO20");

class HCSR04 {
  constructor() {
    trig.write(LOW);
  }

  async puls() {
    trig.write(HIGH);
    await awaitDelay(0.01);
    trig.write(LOW);
  }

  getDistance() {
    // パルス送信(TRIG端子を10us以上High)
    console.log(performance.now());
    this.puls();
    console.log(performance.now());
    // 受信すると、ECHO端子がHigh

    // ECHO端子がHighになっている時間の半分を音速で割った数値が距離
    return 1000;
  }
}

// while GPIO.input(ECHO) == 0:
//   signaloff = time.time()

// while GPIO.input(ECHO) == 1:
//   signalon = time.time()

// timepassed = signalon - signaloff
// distance = timepassed * 17000
// return distance
// GPIO.cleanup()
// export as singleton:
module.exports = new HCSR04();
