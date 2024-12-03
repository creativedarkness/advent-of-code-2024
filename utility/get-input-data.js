const fs = require('fs')
const path = require('path')

exports.getInputData = function (file, day) {
  return fs.readFileSync(path.resolve(__dirname, `../day${day}/${file}`), 'utf-8').toString().split('\n')
}