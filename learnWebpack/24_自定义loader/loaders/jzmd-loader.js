const marked = require('marked')
const hljs = require('highlight.js')

module.exports = function(content) {
  console.log('md-loader run~')

  // 处理md，转换为html
  // code 高亮
  marked.setOptions({
    highlight: function(code, lang) {
      return hljs.highlight(code, {language: lang}).value
    }
  })
  const htmlContent = marked.parse(content)
  // return htmlContent
  // 转换为JavaScript字符串
  // 或者是使用 html-loader
  const innerContent = '`'+htmlContent+'`'
  const moduleCode = `var code=${innerContent}; export default code`

  return moduleCode
}