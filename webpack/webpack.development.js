const webpack = require('webpack');
const merge = require('webpack-merge');

const parts = require('./webpack.parts.js');

module.exports = merge(
  {
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
    devtool: 'cheap-eval-source-map',
  },
  parts.loadCSS(),
  parts.devServer({
    useLocalIp: true,
    open: true,
    host: '0.0.0.0',
    port: '8080',
  }),
);
