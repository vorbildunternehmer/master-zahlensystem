'use strict'

const major = require('./src/index.js')

if (typeof process.env.NUMBER !== 'undefined' && process.env.NUMBER) {
  major.majorTranslate(process.env.NUMBER)
  console.log(major.result)
}

if (typeof process.env.WORD !== 'undefined' && process.env.WORD) {
  major.majorTranslateWord(process.env.WORD)
  console.log(major.result)
}
