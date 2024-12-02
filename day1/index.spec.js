const { partOne } = require('./index')
const { partTwo } = require('./index')
const {TEST_DATA_PART_ONE, TEST_DATA_PART_TWO } = require('../input-types')

describe('Day 1', () => {
  describe('partOne', () => {
    it('find the total distance between the left list and the right list in the input', () => {
      const expected = 11
      const actual = partOne(TEST_DATA_PART_ONE)

      expect(actual).toEqual(expected)
    })
  })

  describe.only('partTwo', () => {
    it('returns the sum of the first and last digit of each line in the input', () => {
      const expected = 281
      const actual = partTwo(TEST_DATA_PART_TWO)

      expect(actual).toEqual(expected)
    })
  })

})
