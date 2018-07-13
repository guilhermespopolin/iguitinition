const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const paths = require('./paths');
const parts = require('./webpack.parts');

module.exports = merge(
  {
    plugins: [
      new CopyWebpackPlugin([
        { from: paths.appPublic, to: paths.build, ignore: ['index.html'] },
      ]),
      new CleanWebpackPlugin(['build'], {
        root: paths.root,
        verbose: true,
      }),
      new UglifyJSPlugin({
        sourceMap: true,
      }),
    ],
    devtool: 'source-map',
  },
  parts.extractCSS(),
);
