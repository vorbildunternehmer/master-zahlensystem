const workbook = require('./assets/createDatabase')
const strings = require('./assets/getStrings')

const majorTranslate = function (number) {
  this.createWorkbook = function (wb) {
    const calc = new strings.getStrings()
    calc.database = wb
    calc.run(number)
  }

  this.db = new workbook.createWorkbook()
  this.db.callback = this.createWorkbook
  this.db.run()
}

module.exports = { majorTranslate }
