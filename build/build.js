var shell = require('shelljs')
var config = require('../config')
var path = require('path')
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')
var ora = require('ora')

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
shell.rm('-rf', assetsPath)
shell.mkdir('-p', assetsPath)
shell.cp('-r', ['static/json'], assetsPath)

var spinner = ora('building for production...')
spinner.start()

webpack(webpackConfig, function(err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n')
})