const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')

const paths = require('../paths')
const parts = require('./webpack.parts')

module.exports = merge(
  {
    entry: ['@babel/polyfill', paths.src],
    output: {
      path: paths.build,
      filename: 'static/js/[name].[hash:8].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: paths.appIndexHtml,
        filename: 'index.html',
      }),
    ],
    resolve: {
      modules: [paths.src, 'node_modules'],
      extensions: ['.js', '.jsx', '.json', '.css'],
    },
  },
  parts.loadJS(),
  parts.loadAsset(),
)
