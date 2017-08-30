'use strict'
const gulp = require('gulp')
const mocha = require('gulp-mocha')
const standard = require('gulp-standard')
const sequence = require('gulp-sequence')
const dos2unix = require('./')

gulp.task('dos2unix', function () {
  return gulp.src(['README.md', 'LICENSE'])
  .pipe(dos2unix())
  .pipe(gulp.dest('out'))
})

gulp.task('standard', function () {
  return gulp.src('*.js')
  .pipe(standard())
  .pipe(standard.reporter('default', {
    breakOnError: true
  }))
})

gulp.task('mocha', function () {
  return gulp.src('test.js', {read: false})
  .pipe(mocha({reporter: 'min'}))
})

gulp.task('test', sequence('standard', 'dos2unix', 'mocha'))
