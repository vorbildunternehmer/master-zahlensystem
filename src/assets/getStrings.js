'use strict'

const getStrings = function () {
  this.compareNumber = false
  this.number = []
  this.database = false
  this.output = []

  this.swap = function (json){
    var ret = {};
    for(var key in json){
      ret[json[key]] = key;
    }
    return ret;
  }

  this.run = async function (nbr) {
    this.database = this.swap(this.database)
    this.compareNumber = nbr
    this.calculateWords(nbr)
  }

  this.calculateWords = function (nbr) {
    if (!nbr) {
      this.result = [this.compareNumber, this.output.join(' ')]
      return false
    }
    this.number = nbr
    this.calcChars(this.number)
  }

  this.calcChars = function (nbr) {
    const nbrTmp = {}

    for (var i = 1; i <= nbr.toString().split('').length -1; i++) {
      nbrTmp[i] = nbr.toString().slice(0, -i)
    }
    nbrTmp[0] = nbr

    this.checkNumber(nbrTmp)
  }

  this.checkNumber = function (nbr) {
    const db = this.database
    let ready = false
    let output = []
    Object.keys(nbr).forEach(function (k) {
      if (db[nbr[k]] && !ready) {
        output = [k, nbr[k], db[nbr[k]]]
        ready = true
      }
    })

    const clean = Object.keys(nbr).length - (output[0] * 1)
    this.number = this.number.toString().slice(clean, this.number.length)

    this.output.push(output[2])

    this.calculateWords(this.number)
  }

}

module.exports = { getStrings }
