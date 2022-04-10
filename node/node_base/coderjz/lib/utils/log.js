const chalk = require('chalk')
const log = console.log

const hint = (...info) => {
  log(chalk.blue(info))
}

const warning = (...info) => {
  log(chalk.yellow(info))
}

const error = (...info) => log(chalk.red(info))


module.exports = {
  hint,
  warning,
  error
}