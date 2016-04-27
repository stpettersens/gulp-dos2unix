### gulp-dos2unix
> :tropical_drink: Gulp plug-in to convert DOS (\r\n) to Unix (\n) line endings.

[![Build Status](https://travis-ci.org/stpettersens/gulp-dos2unix.png?branch=master)](https://travis-ci.org/stpettersens/gulp-preprocessor)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)
[![npm version](https://badge.fury.io/js/gulp-dos2unix.svg)](http://npmjs.com/package/gulp-dos2unix)
[![Dependency Status](https://david-dm.org/stpettersens/gulp-remove-markdown.png?theme=shields.io)](https://david-dm.org/stpettersens/gulp-dos2unix) [![Development Dependency Status](https://david-dm.org/stpettersens/gulp-dos2unix/dev-status.png?theme=shields.io)](https://david-dm.org/stpettersens/gulp-dos2unix#info=devDependencies)

##### Install:

    $ npm install --save-dev gulp-dos2unix

##### Usage:
```js
'use strict'

const gulp = require('gulp')
const dos2unix = require('gulp-dos2unix')

gulp.task('default', function () {
  return gulp.src(['README.md', 'LICENSE'])
  .pipe(dos2unix()) // This defaults to {native: false, feedback: false, write: false}
  .pipe(gulp.dest('out'))
})
```

##### Options:

Omittable options object with following allowable parameters
(same as [ssp-dos2unix](http://github.com/stpettersens/ssp-dos2unix)):

* native (Boolean) - Force use of native module (cannot be used with write: false).
* feedback (Boolean) - Display feedback ("File already has UNIX line endings...").
* writable (Boolean) - Write change to file rather than pipe through to copy.

All options are false if omitted.
