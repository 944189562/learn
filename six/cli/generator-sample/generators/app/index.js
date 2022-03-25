const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    prompting() {
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Your project name',
                default: this.appname // appname 为项目生成目录名称
            }
        ])
        .then(answers => this.answers = answers)
    }
    writing() {
        // this.fs.write(
        //     this.destinationPath('temp.txt'),
        //     Math.random().toString()
        // )

        // 通过模板方式写入文件

        // // 模板文件路径
        // const tmpl = this.templatePath('foo.txt')

        // // 输出目标路径
        // const output = this.destinationPath('foo.txt')

        // // 模板上下文
        // const context = { title: 'Hello, world', success: false }

        // this.fs.copyTpl(tmpl, output, context)

        // 模板文件路径
        const tmpl = this.templatePath('bar.html')

        // 输出目标路径
        const output = this.destinationPath('bar.html')

        // 模板上下文
        const context = this.answers

        this.fs.copyTpl(tmpl, output, context)
    }
}