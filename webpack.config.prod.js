/**
 * Created by KJ on 2016/3/10.
 */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const extractLESS = new ExtractTextPlugin('[name]-[contenthash:8].css');

const config = {
  entry: {
    vendor: ['react', 'react-dom'],
    App: './src/index.jsx',
  },
  // 改用 CommonsChunkPlugin 插件
  // externals: {
  //     'react': 'React',
  //     'react-dom': 'ReactDOM'
  // },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name]-[chunkhash:8].bundle.js',
    publicPath: './',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/i,
        use: extractLESS.extract({
          use: [{
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          }],
        }),
      },
      { test: /\.(eot|woff|woff2|svg|ttf|png|jpg|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10, // 20K
              fallback: 'file-loader', // default
              name: '[name]-[hash:8].[ext]',
              // publicPath: 'assets/',
              outputPath: './images/',
              useRelativePath: false, // true : outputPath 失效
            },
          }],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    // 定义全局变量
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    // 抽离出公共模块到独立的js
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor', // 对应 entry
      filename: '[name]-[chunkhash:8].bundle.js',
      minChunks: Infinity,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './template/index.html',
      title: 'react-boilerplate',
      // chunks: ["App", 'vendor'], // 指定要加入的entry实例,
      inject: 'body',
    }),
    new webpack.optimize.UglifyJsPlugin(),
    // extractCSS,// 用到CSS的化，加上这个
    extractLESS,
    new webpack.HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 10,
    }),
  ],

};

module.exports = config;
