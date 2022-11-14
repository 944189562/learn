const { validate } = require("schema-utils");
const shcema = require("../schemas/loader-01-schema.json");

// normalLoader
// 同步loader
// module.exports = function(source) {
//   console.log('my-loader01', source)
//   // 同步loader返回数据的两种方式
//   // 1. return
//   // return source
//   // 2. callback
//   this.callback(null, source)
// }

// 异步loader
module.exports = function (source) {
  console.log("my-loader01", source);

  // 获取传入的参数
  const options = this.getOptions();
  console.log("options: ", options);
  validate(shcema, options);
  const callback = this.async();

  setTimeout(() => {
    callback(null, source);
  }, 2000);
};

// pitchLoader
module.exports.pitch = () => {
  console.log("pitchLoader01 start");
};
