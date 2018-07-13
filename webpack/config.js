const path = require('path');
const merge = require('webpack-merge');

const webpackCommonConfig = require('./webpack.common');

module.exports = (env) => {
  const webpackConfigPath = path.resolve(__dirname, `webpack.${env}.js`);
  // eslint-disable-next-line
  const webpackConfig = require(webpackConfigPath);

  return merge(
    webpackCommonConfig,
    webpackConfig,
  );
};
