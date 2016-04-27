'use strict'

const gutil = require('gulp-util')
const through = require('through2')
const dos2unix = require('ssp-dos2unix').dos2unix
const fs = require('fs')

function dosToUnix (file, options, cb) {
  if (options === undefined) {
    options = {
      feedback: false,
      write: false
    }
  } else if (options.write === undefined) {
    options.write = false
  }
  // Run file through dos2unix module.
  let converted = dos2unix(file, options)
  if (converted === 1) {
    // Read any file unchanged by dos2unix too.
    converted = fs.readFileSync(file)
  }
  return cb(null, converted)
}

module.exports = function (options) {
  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      cb(null, file)
      return
    }

    if (file.isStream()) {
      cb(new gutil.PluginError('gulp-dos2unix', 'Streaming not supported'))
      return
    }

    dosToUnix(file.path, options, function (err, data) {
      if (err) {
        cb(new gutil.PluginError('gulp-dos2unix', err, {filename: file.path}))
        return
      }
      file.contents = new Buffer(data)
      cb(null, file)
    })
  })
}
