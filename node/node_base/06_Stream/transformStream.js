const { Transform } = require("stream");

const transformStream = new Transform()

transformStream._transform = (chunk, encoding, callback) => {
  transformStream.push(chunk.toString().toUpperCase())
  callback()
}

process.stdin.pipe(transformStream).pipe(process.stdout)

transformStream.push('hi \n')
transformStream.push('test')

transformStream.destroy()