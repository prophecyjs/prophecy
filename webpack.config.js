'use strict'
const path = require('path')
const webpack = require('webpack')
const exec = require('child_process').exec

module.exports = {
  mode: 'development',

  context: `${__dirname}/src/`,

  entry: {
    prophecy: './prophecy.js'
  },

  output: {
    path: `${__dirname}/build/`,
    filename: '[name].js',
    library: 'Prophecy',
    libraryTarget: 'umd',
    sourceMapFilename: '[file].map',
    devtoolModuleFilenameTemplate: 'webpack:///[resource-path]', // string
    devtoolFallbackModuleFilenameTemplate: 'webpack:///[resource-path]?[hash]', // string
    umdNamedDefine: true
  },

  performance: {hints: false},

  plugins: [
    new webpack.DefinePlugin({
      // "typeof CANVAS_RENDERER": JSON.stringify(true),
      // "typeof WEBGL_RENDERER": JSON.stringify(true),
      // "typeof EXPERIMENTAL": JSON.stringify(false),
    }),
    {
      apply: (compiler) => {

      }
    }
  ],
  resolve: {
    alias: {
      'pixi': path.resolve(__dirname, './node_modules/pixi.js'),
    }
  },
  devtool: 'source-map'
}