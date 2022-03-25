module.exports = grunt => {
    grunt.registerTask('foo', () => {
        console.log('foo')
    })

    grunt.registerTask('bar', '任务描述', () => {
        console.log('foo')
    })

    // grunt.registerTask('default', () => {
    //     console.log('default task')
    // })

    grunt.registerTask('default', ['foo', 'bar'])

    grunt.registerTask('async-task', function() {
        const done = this.async()

        setTimeout(() => {
            console.log('async task working')
            done()
        }, 1000);
    })
}