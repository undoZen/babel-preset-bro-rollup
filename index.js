'use strict';

var plugins = require('babel-preset-bro/node-auto').plugins.slice()
plugins.shift()

module.exports = {
  plugins: plugins
}
