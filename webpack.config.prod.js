/**
 * Created by KJ on 2016/3/10.
 */

var WebpackCfg = require('./webpack.common.config.js');
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
    entry: {
        "app": [
            './src/app.jsx'
        ]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js",
        publicPath: "./"
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            title: 'GUIP-React',
            chunks: ['app'], //指定要加入的entry实例,
            'inject': 'body',
            "env": "development"
        }),
        new CopyWebpackPlugin([
            { from: 'build/react.js', to: 'js/react.min.js' },
            { from: 'build/react-dom.js', to: 'js/react-dom.min.js' },
			{ from: 'build/guip.js', to: 'js/guip.js' },
			{ from: 'build/GuipAPI.js', to: 'js/GuipAPI.js' }
        ])
    ]
};

Object.assign(WebpackCfg, config);

module.exports = WebpackCfg;
