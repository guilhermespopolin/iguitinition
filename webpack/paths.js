const path = require('path');

const root = path.resolve(__dirname, '..');
const src = path.resolve(root, 'src');
const build = path.resolve(root, 'build');

const appPublic = path.resolve(root, 'public');
const appIndexHtml = path.resolve(appPublic, 'index.html');

const nodeModules = path.resolve(root, 'node_modules');

module.exports = {
  build,
  appIndexHtml,
  appPublic,
  root,
  src,
  nodeModules,
};
