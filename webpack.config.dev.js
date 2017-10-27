const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const CommonCfg = require('./webpack.common.config')

const config = {
  entry: [
    'react-hot-loader/patch',
    './src/index.jsx',
  ],
  devtool: 'inline-source-map',
  devServer: {
     contentBase: './dist',
     hot: true
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './template/index_dev.html',
      title: 'react',
      // chunks: ['app'], //指定要加入的entry实例,
      'inject': 'body',
      "env": "development"
  }),
  ],
  
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};

const cfg = Object.assign(CommonCfg,config);

module.exports = cfg;