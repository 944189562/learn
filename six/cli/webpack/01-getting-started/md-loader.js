const marked = require('marked')

module.exports = source => {
    // 最终返回js 字符串
    // return 'console.log("hello")'
    // console.log(source)
    // 使用marked把md转换为html
    // return html
    const html = marked.parse(source)
    // const html = source
    // return `module.exports = ${html}` // 这里的直接使用html会有引号换行符，不能编译通过
    // return `module.exports = ${JSON.stringify(html)}`
    // return `export default ${JSON.stringify(html)}`

    //  返回 HTML 字符串 交给下一个loader处理
    return html
}