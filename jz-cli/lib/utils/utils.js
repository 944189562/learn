const path = require('path')

const resolveDir = (superDir, subDir) => path.resolve(superDir, subDir)

module.exports = {
  resolveDir
}