const log4js = require('log4js')
const logger = log4js.getLogger()
logger.level = 'info'

const util = require('util')

const awaitDelay = require("./util/awaitDelay.js")
const plug = require("./plug/HS105plug.js")
const repository = require("./repo/CO2Repository.js")

async function doCheck() {
  while (true) {
    await awaitDelay(5*60*1000)
    const mean = repository.getMean()
    mean.then( value => {
      logger.debug(util.format('mean:[%d]',value))
      value > 800 ? plug.on() : plug.off()
    } )
  }
}

doCheck();
