module.exports = (source) => {
  console.log('my-loader02', source)
  return source
}

// pitchLoader
module.exports.pitch = () => {
  console.log('pitchLoader02 start')
}