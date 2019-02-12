const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')

const paths = require('../paths')

const loadJS = () => ({
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: paths.nodeModules,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
})

const loadCSS = () => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: paths.nodeModules,
        use: [
          {
            loader: 'style-loader',
            options: {
              singleton: false,
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              camelCase: true,
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
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
})

const loadAsset = () => ({
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
})

const extractCSS = () => {
  const plugin = new ExtractTextPlugin({
    allChunks: true,
    filename: 'static/css/[name].[hash:8].css',
  })

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
  }
}

module.exports = {
  loadJS,
  loadCSS,
  loadAsset,
  extractCSS,
}
