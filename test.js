'use strict'

var test = require('tape')
var SelectHook = require('./')

test('default', function (t) {
  t.plan(2)

  var defaults = SelectHook()
  defaults.hook({
    setSelectionRange: function setSelectionRange (start, end) {
      t.equal(start, 0)
      t.equal(end, 0)
    }
  })
})

test('range', function (t) {
  t.plan(2)

  var defaults = SelectHook({start: 1, end: 2})
  defaults.hook({
    setSelectionRange: function setSelectionRange (start, end) {
      t.equal(start, 1)
      t.equal(end, 2)
    }
  })
})
