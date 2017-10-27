const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.dev.js');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: "/"
}));


app.listen(config.devServer.port, function () {
  console.log('start app listening on port 3000!\n');
});