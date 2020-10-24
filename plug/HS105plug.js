const log4js = require('log4js')
const logger = log4js.getLogger()
logger.level = 'info'

const util = require('util')

const { Client } = require("tplink-smarthome-api")

const client = new Client();

const plug = client.getPlug({ host: "192.168.11.40" })

class HS105plug {
  constructor() {
    plug.setPowerState(false)
  }

  async on() {
    const result = await plug.setPowerState(true)
    logger.debug(util.format('setPowerStateON',result))
  }

  async off() {
    const result = await plug.setPowerState(false)
    logger.debug(util.format('setPowerStateOff',result))
  }
}
// export as singleton:
module.exports = new HS105plug();
