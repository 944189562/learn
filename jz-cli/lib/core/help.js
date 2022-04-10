const {program} = require("commander");

const helpOptions = () => {
  program.option('-j --jz-cli', 'a jz-cli cli')
  program.option('-d --dest <dest>', 'a destination folder, example -d /src/components')

  program.on('--help', () => {
    console.log('')
    console.log('others:')
  })
}

module.exports = helpOptions