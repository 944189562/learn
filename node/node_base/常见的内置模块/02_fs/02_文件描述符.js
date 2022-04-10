const fs = require('fs')

const filepath = './abc.txt'

fs.open(filepath, (err, fd) => {
  if (err) {
    console.log(err)
    return
  }

  console.log(fd)
  fs.fstat(fd, (err, info) => {
    console.log(info)
  })
})