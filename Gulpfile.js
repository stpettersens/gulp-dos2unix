'use strict'

const gulp = require('gulp')
const dos2unix = require('./')

gulp.task('default', function () {
  return gulp.src(['README.md', 'LICENSE'])
  .pipe(dos2unix())
  .pipe(gulp.dest('out'))
})
