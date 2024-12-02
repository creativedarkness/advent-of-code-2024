const fs = require('fs')
const path = require('path')
const {INPUT, TEST_DATA_PART_ONE, TEST_DATA_PART_TWO } = require('../input-types')


function getInputData (file) {
  return fs.readSync(path.resolve(__dirname, `./${file}`), 'utf-8').toString().split('\n')
}


exports.partOne = function (file) {
  const input = this.getInputData(file)
}

console.log(this.partOne(TEST_DATA_PART_ONE))
// console.log(this.partOne(TEST_DATA_PART_TWO))
// console.log(this.partOne(INPUT))