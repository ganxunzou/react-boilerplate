/**
 * Created by KJ on 2016/3/10.
 */

var WebpackCfg = require('./webpack.common.config.js');
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: {
        "app": [
            './src/index.jsx'
        ]
    },
    // externals: {
    //     'react': 'React',
    //     'react-dom': 'ReactDOM'
    // },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js",
        publicPath: "./"
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './template/index.html',
            title: 'react-bilerplate',
            // chunks: ['app'], //指定要加入的entry实例,
            'inject': 'body',
            "env": "production"
        }),
        new webpack.HashedModuleIdsPlugin(),
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

Object.assign(WebpackCfg, config);

module.exports = WebpackCfg;
