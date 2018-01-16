// modules
const webpack = require('webpack')
const path = require('path')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// resolve path
const resolve = dir => path.resolve(__dirname, '..', dir)

// variables
const isProd = process.env.NODE_ENV === 'production'

// webpack config
const config = {
  devtool: isProd ? '#source-map' : '#cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            'react',
            'stage-0',
            'env',
            { plugins: ['transform-class-properties'] }
          ]
        }
      },
      {
        test: /\.vue$/,
        loader: 'react-vue-loader'
      }
    ]
  },
  plugins: isProd
    ? [
        new webpack.optimize.UglifyJsPlugin({
          compress: { warnings: false }
        }),
        new webpack.optimize.ModuleConcatenationPlugin()
      ]
    : [new FriendlyErrorsPlugin()]
}

// export config
module.exports = config
