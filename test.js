/*
Test gulp-dos2unix.
*/
/* global describe it */
'use strict'
const fs = require('fs')
const assert = require('chai').assert

describe('Test gulp-dos2unix plug-in', function () {
  it('Should create UNIX line ending copies of provided text files (gulp)',
  function (done) {
    assert.equal(fs.existsSync('out/README.md'), true)
    done()
  })
})
