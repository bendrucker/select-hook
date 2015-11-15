'use strict'

var extend = require('xtend')
var Hook = require('virtual-hook')
var nextTick = require('next-tick')

var defaults = {
  start: 0,
  end: 0
}

module.exports = function SelectHook (options) {
  options = extend(defaults, options)

  return Hook({
    hook: function selectHook (node) {
      nextTick(function select () {
        node.setSelectionRange(options.start, options.end)
      })
    }
  })
}
