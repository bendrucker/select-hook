# select-hook [![Build Status](https://travis-ci.org/bendrucker/select-hook.svg?branch=master)](https://travis-ci.org/bendrucker/select-hook) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/select-hook.svg)](https://greenkeeper.io/)

> virtual-dom hook for setting text selection


## Install

```
$ npm install --save select-hook
```


## Usage

```js
var h = require('virtual-dom/h')
var SelectHook = require('select-hook')

function render (state) {
  return h('input', {
    select: SelectHook({
      start: 0,
      end: 10
    })
  })
}
```

## API

#### `SelectHook([options])` -> `object`

##### options

Type: `object`  
Default: `{start: 0, end: 0}`

An object containing the start and end points of the desired selection.


## License

MIT © [Ben Drucker](http://bendrucker.me)
