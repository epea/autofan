let { execSync } = require("child_process");

class HCSR04 {
  scan() {
    return execSync("python ./sensor/getDistance.py")
      .toString()
      .replace(/\r?\n/g, "");
  }
}
// export as singleton:
module.exports = new HCSR04();
