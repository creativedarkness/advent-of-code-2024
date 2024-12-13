const { getInputData } = require('../utility/get-input-data')
const { INPUT } = require('../input-types')


exports.partOne = function (file) {
  const input = getInputData(file, 2)
  let safeCount = 0;

  function isSafeSequence(arr) {
    const parsedArr = arr.split(' ').map(el => Number(el))
    let increase = 0
    let decrease = 0

    for (let i = 0; i < parsedArr.length - 1; i++) {
      const diff = Math.abs(parsedArr[i] - parsedArr[i + 1])
      if (parsedArr[i] > parsedArr[i + 1]) {
        decrease++
      } else {
        increase++
      }

      if((increase > 0 && decrease > 0) || diff === 0 || diff > 3) return false
    }
    return true
}

    input.forEach(line => {
        if (isSafeSequence(line)) {
            safeCount++;
        }
    })

    return safeCount
}

exports.partTwo = function (file) {
  const input = getInputData(file, 2)
  let safeCount = 0;

  function isSafeSequence(arr) {
    const parsedArr = arr.split(' ').map(el => Number(el))
    let increase = 0
    let decrease = 0

    for (let i = 0; i < parsedArr.length - 1; i++) {
      const diff = Math.abs(parsedArr[i] - parsedArr[i + 1])
      if (parsedArr[i] > parsedArr[i + 1]) {
        decrease++
      } else {
        increase++
      }

      if((increase > 0 && decrease > 0) || diff === 0 || diff > 3) return false
    }
    return true
  }

  input.forEach(line => {
    if (isSafeSequence(line)) {
        safeCount++;
    }
  })

  return safeCount
}

// console.log('part one:', this.partOne(INPUT))
// console.log('part two:', this.partTwo(INPUT))
