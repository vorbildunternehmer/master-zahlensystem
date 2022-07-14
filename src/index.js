'use strict'

const workbook = require('./assets/createDatabase')
const strings = require('./assets/getStrings')

const majorTranslate = function (number) {
  this.result = false
  this.createWorkbook = function (wb) {
    const calc = new strings.getStrings()
    calc.database = wb
    calc.run(number)
    this.result = calc.result
  }

  this.db = new workbook.createWorkbook()
  this.db.callback = this.createWorkbook.bind(this)
  this.db.run()
}

const majorTranslateWord = function (word) {
  this.result = false
  const calc = new workbook.createWorkbook()
  calc.translate(word)
  this.result = [word, calc.workbook[word]]
}

module.exports = { majorTranslate, majorTranslateWord }
