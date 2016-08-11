'use strict';

var plugins = require('babel-preset-bro/node-4').plugins.slice()
plugins.shift()

module.exports = {
  plugins: plugins
}
