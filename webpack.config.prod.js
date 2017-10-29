/**
 * Created by KJ on 2016/3/10.
 */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');
const extractLESS = new ExtractTextPlugin('stylesheets/[name].css');

const config = {
  entry: {
    vendor: ['react', 'react-dom'],
    app: [
      './src/index.jsx',
    ],
  },
  // 改用 CommonsChunkPlugin 插件
  // externals: {
  //     'react': 'React',
  //     'react-dom': 'ReactDOM'
  // },
  output: {
    path: `${__dirname }/dist`,
    filename: '[name].bundle.js',
    publicPath: './',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
      // 用到CSS的话
      // {
      //     test: /\.css$/,
      //     use: extractCSS.extract([ 'css-loader', 'postcss-loader' ])
      // },
      {
        test: /\.less$/i,
        use: extractLESS.extract(['css-loader', 'less-loader']),
      },
      { test: /\.(eot|woff|woff2|svg|ttf|png|jpg|jpeg)(\?v=[\d\.]+)?$/, use: 'url-loader?limit=10000&name=/imgs/[name].[ext]' },
    ],
  },
  plugins: [
    // 定义全局变量
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    // 抽离出公共模块到独立的js
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor', // 对应 entry
      filename: '[name].bundle.js',
      minChunks: Infinity,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './template/index.html',
      title: 'react-bilerplate',
      // chunks: ['app'], //指定要加入的entry实例,
      inject: 'body',
      env: 'production',
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    // extractCSS,// 用到CSS的化，加上这个
    extractLESS,
  ],

};

module.exports = config;
