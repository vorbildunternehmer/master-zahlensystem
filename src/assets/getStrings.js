const fs = require('fs')

const getStrings = function () {
  this.compareNumber = false
  this.number = []
  this.database = false
  this.output = []
  this.getDatabase = async function () {
    const data = await fs.readFileSync('./src/database.json', 'utf8');
    return JSON.parse(data)
  }

  this.swap = function (json){
    var ret = {};
    for(var key in json){
      ret[json[key]] = key;
    }
    return ret;
  }

  this.run = async function (nbr) {
    if (!this.database) {
      this.database = await this.getDatabase()
    }
    this.database = this.swap(this.database)
    this.compareNumber = nbr
    this.calculateWords(nbr)
  }

  this.calculateWords = function (nbr) {
    if (!nbr) {
      console.log(this.compareNumber, '=', this.output.join(' '))
      return false
    }
    this.number = nbr
    this.calcChars(this.number)
  }

  this.calcChars = function (nbr) {
    const nbrTmp = {}

    for (var i = 1; i <= nbr.split('').length -1; i++) {
      nbrTmp[i] = nbr.slice(0, -i)
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
    this.number = this.number.slice(clean, this.number.length)

    this.output.push(output[2])

    this.calculateWords(this.number)
  }

}

module.exports = { getStrings }
