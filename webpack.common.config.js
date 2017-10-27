/**
 * Created by KJ on 2016/4/9.
 */
var webpack = require('webpack');
var path = require('path');
var config = {
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "[name].bundle.js"
    },
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
    plugins: []
};

module.exports = config;
