const {program} = require('commander')

const {
  createProjectAction,
  addComponentAction,
  addPageAction,
  addStoreAction
} = require('./action')

const createCommand = () => {
  program
    .command('create <name>')
    .description('clone repository into a folder')
    .action(createProjectAction)

  program
    .command('addCpn <name>')
    .description('add component, example: jz-cli addCpn NavBar')
    .action((name) => {
      const dest = program.opts().dest || 'src/components'
      addComponentAction(name, dest)
    })

  program
    .command('addPage <name>')
    .description('add page, example: jz-cli addPage NavBar [-d /test/xxx]')
    .action((name) => {
      const dest = program.opts().dest || `src/pages/${name.toLowerCase()}`
      addPageAction(name, dest)
    })

  program
    .command('addStore <name>')
    .description('add store, example: jz-cli addStore home [-d /test/xxx]')
    .action((name) => {
      const dest = program.opts().dest || `src/store/modules/${name.toLowerCase()}`
      addStoreAction(name, dest)
    })
}

module.exports = createCommand