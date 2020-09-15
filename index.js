const plug = require("./plug/HS105plug.js");
const sensor = require("./sensor/HCSR04.js");
const awaitDelay = require("./util/awaitDelay.js");

async function doCheck() {
  while (true) {
    await awaitDelay(10000);
    const distance = sensor.scan();
    distance > 100 ? plug.off() : plug.on();
    console.log(distance);
  }
}

doCheck();
