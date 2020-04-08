const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

const mode = process.env.NODE_ENV || 'production';
const prod = mode === 'production';

const jsFilename = prod ? '[name].[contenthash:5].js' : '[name].js';
const cssFilename = prod ? '[name].[contenthash:5].css' : '[name].css';

module.exports = {
  mode,
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  output: {
    filename: jsFilename,
    chunkFilename: jsFilename,
    path: __dirname + '/dist',
  },
  devtool: prod ? 'none' : 'cheap-eval-source-map',
  devServer: {
    hot: !prod,
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
            options: {
              hmr: prod,
            },
          },
          "css-loader",
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      eslint: true,
    }),
    new HtmlWebpackPlugin({
      template: prod ? '!!prerender-loader?string!index.template.html' : 'index.template.html',
    }),
    new CopyWebpackPlugin([
      { from: 'static/' },
    ]),
    new MiniCSSExtractPlugin({
      filename: cssFilename,
      chunkFilename: cssFilename,
    }),
    prod && new CleanWebpackPlugin(),
  ].filter(Boolean),
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
};
