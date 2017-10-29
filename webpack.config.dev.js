const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const CommonCfg = require('./webpack.common.config')

const config = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    './src/index.jsx',
    
  ],
  devtool: 'inline-source-map',
  devServer: {
     contentBase: './dist',
     hot: true,
     port:3000,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
  }),
    new CleanWebpackPlugin(['dist']),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './template/index_dev.html',
      title: 'react-bilerplate-dev',
      // chunks: ['app'], //指定要加入的entry实例,
      'inject': 'body'
  }),
  ],
  
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};

const cfg = Object.assign(CommonCfg,config);

module.exports = cfg;