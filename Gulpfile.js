'use strict'
const gulp = require('gulp')
const mocha = require('gulp-mocha')
const dos2unix = require('./')

gulp.task('dos2unix', function () {
  return gulp.src(['README.md', 'LICENSE'])
  .pipe(dos2unix())
  .pipe(gulp.dest('out'))
})

gulp.task('mocha', function () {
  return gulp.src('test.js', {read: false})
  .pipe(mocha({reporter: 'min'}))
})

gulp.task('test', ['dos2unix', 'mocha'], function () {})
