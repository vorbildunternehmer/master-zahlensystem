'use strict'

const major = require('./src/index.js')

major.majorTranslate(process.env.NUMBER)

console.log(major.result)
