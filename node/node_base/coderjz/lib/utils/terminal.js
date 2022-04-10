/*
* 执行终端命令相关的代码
* */
// 开启一个子进程，执行终端命令
const {exec, spawn} = require('child_process')

const commandSpawn = (...args) => {
  return new Promise((resolve, reject) => {
    // command, [], options
    const childProcess = spawn(...args)
    childProcess.stdout.pipe(process.stdout)
    childProcess.stderr.pipe(process.stderr)

    childProcess.on('close', () => {
      resolve()
    })
  })
}

const commandExec = (...args) => {
  return new Promise((resolve, reject) => {
    exec(...args, ((error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        reject(error)
        return;
      }
      console.log(stdout);
      // console.error(`stderr: ${stderr}`);
      resolve()
    }))
  })
}

module.exports = {
  spawn: commandSpawn,
  exec: commandExec
}