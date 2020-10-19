const util = require('util');
const Influx = require('influx');

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
    const sql = util.format(
      `select MEAN(CO2) as mean from test WHERE time > %d AND time <= %d`,
      (new Date().getTime() - 1000*10*60 )*1000000,
      new Date().getTime()*1000000
    )
      const res = await this.influx.query(sql) 
      return res[0].mean
  }
}

module.exports = new CO2Repository();



