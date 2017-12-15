const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const ROOT_PATH = path.resolve(__dirname)
const SRC_PATH = path.resolve(ROOT_PATH, 'src')
const DIST_PATH = path.resolve(ROOT_PATH, 'dist')
const MODULE_PATH = path.resolve(ROOT_PATH, 'node_modules')

const config = {
  entry: {
    main: path.resolve(SRC_PATH, 'main')
  },
  output: {
    path: DIST_PATH,
    filename: 'script.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [SRC_PATH]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  resolve: {
    moduleExtensions: [
      'node_modules',
      'src'
    ],
    alias: {
      'pokemon-gif': path.resolve(MODULE_PATH, 'pokemon-gif', 'lib', 'pokemon-gif.js')
    }
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}

module.exports = config
