'use strict'

const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const MiniCssExtractPlugin  = require('mini-css-extract-plugin')

module.exports = merge(baseConfig, {
  mode: 'production',
  /*
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  }, */
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          {
            loader: 'vue-style-loader',
              options: {
                shadowMode: true
              }
          },
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }, {
        test: /\.styl(us)?$/,
        use: [
          {
            loader: 'vue-style-loader',
              options: {
                shadowMode: true
              }
          },
          // MiniCssExtractPlugin.loader, 
          'css-loader', 
          'stylus-loader'
        ]
      }
    ]
  },
  plugins: [
    /* new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }), */
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[name][id].css"
    })
  ]
})
