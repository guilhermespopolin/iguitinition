const webpack = require('webpack')
const merge = require('webpack-merge')

const paths = require('../paths')
const parts = require('./webpack.parts')

module.exports = merge(
  {
    mode: 'development',
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
      contentBase: paths.appPublic,
      open: 'google-chrome',
      stats: 'errors-only',
      historyApiFallback: true,
      hot: true,
      port: '8080',
    },
  },
  parts.loadCSS(),
)
