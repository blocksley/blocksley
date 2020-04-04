'use strict'

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const utils = require('./utils')

module.exports = {
  // context: utils.resolve('.quasar'),
  entry: {
    // applet: utils.resolve('./.quasar/client-entry.js')
    applet: utils.resolve('./src/main.js')
  },
  output: {
    filename: 'js/[name].js',
    path: utils.resolve('dist'),
    // publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      app: utils.resolve('./'),
      src: utils.resolve('./src'),
      assets: utils.resolve('./src/assets'),
      boot: utils.resolve('./src/boot'),
      layouts: utils.resolve('./src/layouts'),
      pages: utils.resolve('./src/pages'),
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
        ],
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            shadowMode: true
          }
        }
      }, 
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('img/[name].[hash:7].[ext]')
          }
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('media/[name].[hash:7].[ext]')
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('css/fonts/[name].[hash:7].[ext]'),
            publicPath: '../'
          }
        }
      }
    ]
  },

  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: utils.resolve('src/index.template.html'),
      inject: true,
      ctx: { mode: { cordova: undefined } }
    }),
    new VueLoaderPlugin({
      shadowMode: true
    }),
    new CopyWebpackPlugin([{
      from: utils.resolve('src/statics'),
      to: utils.resolve('dist/statics'),
      toType: 'dir'
    }])
  ]
}
