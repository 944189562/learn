const path = require('path')
const appDir = process.cwd()

const resolveApp = (dir) => path.resolve(appDir, dir)

module.exports = resolveApp