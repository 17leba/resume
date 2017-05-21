
require('../static/css/resume.css')

import Config from './config'
import Game from './components/game.js'
import loadSources from './components/load'
import mobile from './components/mobile'
// init
var canvas,context,canvasBg,canvasBgContext
document.addEventListener("DOMContentLoaded",function(){
	if(/Android|iPad|iPhone|iPod|SymbianOS|Windows Phone/i.test(navigator.userAgent)){
		// mobile
		mobile.init()
	}
	canvas = document.getElementById("myCanvas")
	context = canvas.getContext("2d") 

	canvasBg = document.getElementById("myCanvas-bg")
	canvasBgContext = canvasBg.getContext("2d")

	loadSources.init(Config.sourceList,function(){
		var game = new Game(canvas.width, canvas.height, context, canvasBgContext)
		game.start()
	})
},false)