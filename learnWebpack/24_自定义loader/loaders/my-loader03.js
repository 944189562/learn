// normalLoader

module.exports = (source) => {
  console.log('my-loader03', source)
  return source
}

// pitchLoader
module.exports.pitch = () => {
  console.log('pitchLoader03 start')
}