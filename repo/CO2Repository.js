const log4js = require('log4js')
const logger = log4js.getLogger()
logger.level = 'info'

const util = require('util')
const Influx = require('influx')

class CO2Repository{
  constructor() {
    this.influx = new Influx.InfluxDB({
      host: '192.168.1.16',
      database: 'test',
      schema: [
        {
          measurement: 'test',
          fields: {
            CO2: Influx.FieldType.INTEGER,
            TVOC: Influx.FieldType.INTEGER
          },
          tags: [
            'host'
          ]
        }
      ]
     })
  }
  async getMean(){
    const currentTime = new Date().getTime()
    const sql = util.format(
      `select MEAN(CO2) as mean from test WHERE time > %d AND time <= %d`,
      (currentTime - 1000*10*60 )*1000000,
      currentTime * 1000000
    )
    logger.debug(util.format('sql:[%s]',sql))

      const res = await this.influx.query(sql) 
      return res[0].mean
  }
}

module.exports = new CO2Repository()



