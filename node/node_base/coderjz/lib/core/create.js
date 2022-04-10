const {program} = require('commander');
const {createProjectAction, addComponentAction, addPageAction, addStoreAction} = require('./actions')

const createCommands = () => {
  program
    .command('create <project> [others...]')
    .description('clone repository into a folder')
    .action(createProjectAction)

  program
    .command('addCpn <name>')
    .description('add vue component, example: coderjz addCpn Name [-d /src/xxx]')
    .action((name) => {
      const dest = program.opts().dest || 'src/components'
      addComponentAction(name, dest)
    })

  program
    .command('addPage <name>')
    .description('add vue page, , example: coderjz addPage Name [-d /src/xxx]')
    .action(name => {
      const dest = program.opts().dest || 'src/pages'
      addPageAction(name, dest)
    })

  program
    .command('addStore <name>')
    .description('add vue store, example: coderjz addStore Name [-d /src/xxx]')
    .action(name => {
      const dest = program.opts().dest || 'src/store/modules'
      addStoreAction(name, dest)
    })
}

module.exports = createCommands