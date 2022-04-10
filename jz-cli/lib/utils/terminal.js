const {spawn} = require('child_process')

const spawnProcess = (...args) => {
  return new Promise((resolve, reject) => {
    const subProcess = spawn(...args)
    subProcess.stdout.pipe(process.stdout)
    subProcess.stderr.pipe(process.stderr)

    subProcess.on('close', (code) => {
      resolve(code)
    })
  })
}

module.exports = {
  spawn: spawnProcess
}