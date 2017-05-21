var path = require('path')
var webpack = require('webpack')
var utils = require('./utils')

module.exports = {
	devtool: '#source-map',
	entry: {
		app: './src/resume.js'
	},
	output: {
		path: utils.resolve('dist'),
		filename: '[name].[hash].js'
	},
	resolve: {
		extensions: [ '.js', '.json'],
		alias: {
			'src': utils.resolve('src'),
			'static_css': utils.resolve('static/css'),
			'static_js': utils.resolve('static/js'),
			'static_img': utils.resolve('static/img'),
			'static_audio': utils.resolve('static/audio'),
			'static_json': utils.resolve('static/json')
		}
	},
	resolveLoader: {},
	module: {
		loaders: [
			{
				test: /\.css$/, 
				loader: 'style-loader!css-loader'
			},
			{
                test: /\.(png|jpe?g|gif|svg|mp3)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('resource/[name].[hash:7].[ext]')
                }
            },
			{
                test: /\.js$/,
                loader: 'babel-loader',
                include: [ utils.resolve('src'), utils.resolve('test') ]
            }
		]
	},
	
	plugins: []
}
