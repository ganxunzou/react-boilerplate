const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

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
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx']
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
  module: {
    rules: [
        { test: /\.(js|jsx)$/, use: "babel-loader" , exclude: /node_modules/},
        { test: /\.css$/, use: [
            "style-loader",
            "css-loader"
        ]},
        { test: /\.less$/, use:[
            "style-loader",
            "css-loader",
            "less-loader"
        ] },
        { test: /\.(eot|woff|woff2|svg|ttf|png|jpg|jpeg)(\?v=[\d\.]+)?$/,use: 'url-loader?limit=10000&name=/imgs/[name].[ext]'}
      ]
  },
};

module.exports = config;