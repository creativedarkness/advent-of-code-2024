const fs = require('fs')
const path = require('path')
const {INPUT, TEST_DATA_PART_ONE, TEST_DATA_PART_TWO } = require('../input-types')


function getInputData (file) {
  return fs.readFileSync(path.resolve(__dirname, `./${file}`), 'utf-8').toString().split('\n')
}

exports.partOne = function (file) {
  const input = getInputData(file)
  const rightArray = input.map((line) => {
    const [left, right] = line.split('  ')
    return Number(right)
  }).sort((a, b) => a - b)
  const leftArray = input.map((line) => {
    const [left, right] = line.split('  ')
    return Number(left)
  }).sort((a, b) => a - b)

  // compare the two arrays and return the total distance between the two arrays at the same index using the reduce method
  let totalDistance = 0
  rightArray.forEach((right, index) => {
    totalDistance += Math.abs(right - leftArray[index])
  })


  // for (let i = 0; i < rightArray.length; i++) {
  //   totalDistance += Math.abs(rightArray[i] - leftArray[i])
  // }


  return totalDistance
}

console.log(this.partOne(TEST_DATA_PART_ONE))
// console.log(this.partOne(TEST_DATA_PART_TWO))
// console.log(this.partOne(INPUT))