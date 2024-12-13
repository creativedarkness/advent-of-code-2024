const { getInputData } = require('../utility/get-input-data')
const {INPUT } = require('../input-types')


exports.partOne = function (file) {
  const input = getInputData(file, 1)
  const rightArray = input.map((line) => {
    const [right, left] = line.split('  ')
    return Number(right)
  }).sort((a, b) => a - b)
  const leftArray = input.map((line) => {
    const [right, left] = line.split('  ')
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
    const [right, left] = line.split('  ')
    return Number(right)
  })
  const leftArray = input.map((line) => {
    const [right, left] = line.split('  ')
    return Number(left)
  })

  let similarityScore = 0
  rightArray.forEach((right) => {
    const leftCount = leftArray.filter((num) => num === right).length
    similarityScore += right * leftCount
  })
  return similarityScore
}

console.log('Day 1:', this.partOne(INPUT))
console.log('Day 2:', this.partTwo(INPUT))
