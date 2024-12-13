const { partOne,  partTwo } = require('./index')
const {TEST_INPUT} = require('../input-types')

describe('Day 2', () => {
  describe('partOne', () => {
    it('find the number of "safe" reports', () => {
      const expected = 2
      const actual = partOne(TEST_INPUT)

      expect(actual).toEqual(expected)
    })
  })

  describe('partTwo', () => {
    it('returns the the similarity score of the right and left lists', () => {
      const expected = 31
      const actual = partTwo(TEST_INPUT)

      expect(actual).toEqual(expected)
    })
  })

})
