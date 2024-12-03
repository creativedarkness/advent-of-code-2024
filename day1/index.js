const { getInputData } = require('../utility/get-input-data')
const {INPUT, TEST_INPUT } = require('../input-types')


exports.partOne = function (file) {
  const input = getInputData(file, 1)
  const rightArray = input.map((line) => {
    const [left, right] = line.split('  ')
    return Number(right)
  }).sort((a, b) => a - b)
  const leftArray = input.map((line) => {
    const [left, right] = line.split('  ')
    return Number(left)
  }).sort((a, b) => a - b)

  let totalDistance = 0

  rightArray.forEach((right, index) => {
    totalDistance += Math.abs(right - leftArray[index])
  })

  return totalDistance
}

exports.partTwo = function (file) {
  const input = getInputData(file, 1)

  const rightArray = input.map((line) => {
    const [left, right] = line.split('  ')
    return Number(right)
  }).sort((a, b) => a - b)
  const leftArray = input.map((line) => {
    const [left, right] = line.split('  ')
    return Number(left)
  })

const matches = []

  rightArray.forEach((num) => {
    const matched = leftArray.find(el => el === num)
    if (!!matched) matches.push(matched)

  })
console.log({ rightArray, leftArray, matches, rouge: matches[3] })
}

// console.log(this.partOne(TEST_INPUT))
// console.log(this.partTwo(TEST_INPUT))
// console.log(this.partOne(INPUT))
