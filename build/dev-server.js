var webpackDevServer = require('webpack-dev-server')
var webpack = require('webpack')
var webpackConfig = require('./webpack.dev.conf.js')

var complier = webpack(webpackConfig)

var server = new webpackDevServer(complier, {
    quiet: false,
    historyApiFallback: false,
    compress: true,
    quiet: false,
    stats: {
        colors: true
    },
    proxy: {
        "/api": {
            "target": {
                "host": "action-js.dev",
                "protocol": 'http:',
                "port": 80
            },
            ignorePath: true,
            changeOrigin: true,
            secure: false
        }
    }

});

server.listen(8081, "localhost", (error) => {
    if (error) {
        console.log(error)
        return
    }
});