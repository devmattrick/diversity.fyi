const { HotModuleReplacementPlugin } = require('webpack');
const merge = require('webpack-merge');

module.exports = merge(require('./webpack.base.config'), {
  mode: 'development',
  devServer: {
    hot: true,
  },
  watchOptions: {
    poll: true,
    ignored: /node_modules/
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-modules-typescript-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localsConvention: "camelCaseOnly",
              importLoaders: 1,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HotModuleReplacementPlugin(),
  ],
});
