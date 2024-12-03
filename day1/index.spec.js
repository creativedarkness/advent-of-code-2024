const { partOne } = require('./index')
const { partTwo } = require('./index')
const {TEST_INPUT} = require('../input-types')

describe('Day 1', () => {
  describe('partOne', () => {
    it('find the total distance between the left list and the right list', () => {
      const expected = 11
      const actual = partOne(TEST_INPUT)

      expect(actual).toEqual(expected)
    })
  })

  describe.only('partTwo', () => {
    it('returns the the similarity score of the right and left lists', () => {
      const expected = 31
      const actual = partTwo(TEST_INPUT)

      expect(actual).toEqual(expected)
    })
  })

})
