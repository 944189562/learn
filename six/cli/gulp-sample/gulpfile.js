exports.foo = done => {
    console.log('foo task working~')

    done()
}

exports.default = done => {
    console.log('default task working~')
    done()
}

// gulp 4.0 
const gulp = require('gulp')

gulp.task('bar', done => {
    console.log('bar task working~')
    done()
})