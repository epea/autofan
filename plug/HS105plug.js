const { Client } = require("tplink-smarthome-api");

const client = new Client();

const plug = client.getPlug({ host: "192.168.11.40" });

class HS105plug {
  constructor() {
    plug.setPowerState(false);
  }

  on() {
    plug.setPowerState(true);
  }

  off() {
    plug.setPowerState(false);
  }
}
// export as singleton:
module.exports = new HS105plug();
