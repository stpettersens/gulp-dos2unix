/*
Test gulp-dos2unix.
*/
/* global describe it */
'use strict'
const fs = require('fs')
const assert = require('chai').assert
const _exec = require('child_process').exec

const sources = ['index.js', 'test.js', 'Gulpfile.js']

describe('Test gulp-dos2unix plug-in', function () {
  it('Test code conforms to JS Standard Style (http://standardjs.com).', function (done) {
    _exec(`standard ${sources.join(' ')}`, function (err, stdout, stderr) {
      let passed = true
      if (err || stderr.length > 0) {
        console.log('\n' + stderr)
        console.log(stdout)
        passed = false
      }
      assert.equal(passed, true)
      done()
    })
  })

  it('Should create UNIX line ending copies of provided text files (gulp)',
  function (done) {
    assert.equal(fs.existsSync('out/README.md'), true)
    done()
  })
})
