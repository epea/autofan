const plug = require("./plug/HS105plug.js");

const sensor = require("./sensor/HCSR04.js");

plug.off();

console.log("[" + sensor.scan() + "]");
