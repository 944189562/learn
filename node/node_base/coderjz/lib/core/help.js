const {program} = require("commander");

const helpOptions = () => {
  // 增加自己的options
  program.option('-c --coderjz', 'a coderjz cli')
  program.option('-t --test', 'test option commander')
  program.option('-d --dest <dest>', 'a destination folder, example -d /src/components')

  // 自动解析传入的参数，目前版本不用传递 process.argv
  // program.parse(process.argv)
  program.on('--help', () => {
    console.log('')
    console.log('Other:')
    console.log('  other options~')
  })

  // 获取传入的参数
  // console.log(program.opts().dest)
}

module.exports = helpOptions