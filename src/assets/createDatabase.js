'use strict'

const wl = require('./wordlist.js')

const createWorkbook = function () {
  this.workbook = {}
  this.callback = function () {}

  this.getData = function () {
    const data = wl.wordlist;
    return data
  }
  this.run = async function (callback) {
    let data = this.getData()
    data = data.split("\n")

    data.forEach(this.translate.bind(this))
    this.callback(this.workbook)
  }
  this.translate = function (word) {
    const replace = {
      'sch': 6,
      'ch': 6,
      'ck': 7,
      'll': 5,
      'ss': 0,
      'tt': 1,
      'nn': 2,
      'mm': 3,
      'ff': 8,
      'rr': 4,
      'tt': 1,
      'pp': 9,
      'ww': 8,
      'dd': 1,
      'j': 6,
      'c': 7,
      'r': 4,
      'l': 5,
      'k': 7,
      'g': 7,
      'b': 9,
      'p': 9,
      't': 1,
      'd': 1,
      's': 0,
      'z': 0,
      'n': 2,
      'm': 3,
      'f': 8,
      'w': 8,
      'v': 8
    }

    if (typeof word === 'undefined' || !word) {
      return false
    }
    let newWord = word.toLowerCase()
    Object.keys(replace).forEach(function (key) {
      if (typeof replace[key] !== 'undefined') {
        newWord = newWord.split(key).join(replace[key])
      }
    })
    newWord = newWord.replace(/[^\d.-]/g, '')

    this.workbook[word] = newWord
  }
}

module.exports = { createWorkbook }
