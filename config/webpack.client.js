// modules
const webpack = require('webpack')
const path = require('path')
const webpackMerge = require('webpack-merge')
const webpackBase = require('./webpack.base')

// resolve path
const resolve = dir => path.resolve(__dirname, '..', dir)

// webpack config
const config = {
  entry: resolve('client/main.js'),
  output: {
    path: resolve('public'),
    filename: 'bundle.js'
  }
}

// export config
module.exports = webpackMerge(webpackBase, config)
