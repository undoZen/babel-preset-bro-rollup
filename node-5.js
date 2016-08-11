'use strict';

var plugins = require('babel-preset-bro/node-5').plugins.slice()
plugins.shift()

module.exports = {
  plugins: plugins
}
