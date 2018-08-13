const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const paths = require('./paths');

exports.loadJS = () => ({
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: paths.nodeModules,
        loader: 'babel-loader',
      },
    ],
  },
});

exports.loadCSS = () => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: paths.nodeModules,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              camelCase: true,
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
            ident: 'postcss',
            options: {
              plugins: () => [
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9',
                  ],
                }),
              ],
            },
          },
        ],
      },
    ],
  },
});

exports.loadAsset = () => ({
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif|ttf)$/,
        loader: 'file-loader',
        options: {
          name: 'static/media/[name][hash:8].[ext]',
        },
      },
    ],
  },
});

exports.extractCSS = () => {
  const plugin = new ExtractTextPlugin({
    allChunks: true,
    filename: 'static/css/[name].[hash:8].css',
  });

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: paths.nodeModules,
          use: plugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  camelCase: true,
                  modules: true,
                  localIdentName: '[path][name]__[local]--[hash:base64:5]',
                },
              },
              {
                loader: 'postcss-loader',
                ident: 'postcss',
                options: {
                  plugins: () => [
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9',
                      ],
                    }),
                  ],
                },
              },
            ],
            fallback: 'style-loader',
          }),
        },
      ],
    },
    plugins: [plugin],
  };
};

exports.loadTextfiles = () => ({
  module: {
    rules: [
      {
        test: [/\.txt$/, /\.md$/],
        use: 'raw-loader',
      },
    ],
  },
});

exports.devServer = options => ({
  devServer: {
    contentBase: paths.appPublic,
    stats: 'errors-only',
    historyApiFallback: true,
    hot: true,
    compress: true,
    ...options,
  },
});
