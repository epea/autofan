const awaitDelay = require("./util/awaitDelay.js")
const plug = require("./plug/HS105plug.js")
const repository = require("./repo/CO2Repository.js")

async function doCheck() {
  while (true) {
    await awaitDelay(5*60*1000)
    const mean = repository.getMean()
    mean.then( value => {
      value > 800 ? plug.on() : plug.off();
    } )
  }
}

doCheck();
