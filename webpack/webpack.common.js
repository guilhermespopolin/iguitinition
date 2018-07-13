const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');

const paths = require('./paths');
const parts = require('./webpack.parts');

module.exports = merge(
  {
    entry: ['babel-polyfill', paths.src],
    output: {
      path: paths.build,
      filename: 'static/js/[name].[hash:8].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: paths.appIndexHtml,
        filename: 'index.html',
      }),
      new webpack.NamedModulesPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: ({ resource }) => /node_modules/.test(resource),
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: [paths.src, 'node_modules'],
    },
  },
  parts.loadJS(),
  parts.loadAsset(),
);
