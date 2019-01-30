"use strict";
//Detect environment
const path = require('path')
const compression = require('compression')
const history = require('connect-history-api-fallback')
const isDeveloping = process.env.NODE_ENV !== 'production'
const port = isDeveloping ? 3000 : process.env.PORT
// Generate webpack config with CLI service
const webpackConfig = require("@vue/cli-service/webpack.config.js");

// Create express app
const express = require("express");
const app = express();
app.use(history())
if(isDeveloping){
    // Configure webpack as middleware
    const webpack = require("webpack");

    webpackConfig.entry.app.unshift('webpack-hot-middleware/client');
    const compiler = webpack(webpackConfig);
    const devMiddleware = require('webpack-dev-middleware'); // eslint-disable-line
    const middleware = devMiddleware(compiler, {
        noInfo: false,
        publicPath: webpackConfig.output.publicPath,
        headers: { "Access-Control-Allow-Origin": "*" },
        stats: {colors: true}
    })
    app.use(middleware);

    const hotMiddleware = require('webpack-hot-middleware'); // eslint-disable-line
    app.use(hotMiddleware(compiler, {
        log: console.log
    }));
    app.get('*', (req, res) => {
        res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')))
        res.end()
    })
}else{
    app.use(compression());
    app.use(express.static(__dirname + '/dist'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'dist/index.html'))
    })
}


app.listen(port, '0.0.0.0', function onStart(err) {
    if(err){
        console.log(err)
    }
    console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
})