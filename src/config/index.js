// 公用的变量
var Config = {
	sourceList: {
		"images": [
			require('static_img/main.png'), 
			require('static_img/embellish.png'), 
			require('static_img/jumpers.png'), 
			require('static_img/runners.png'), 
			require('static_img/sub-img.png')
		],
		"audio":[
			require('static_audio/cutDown.mp3'),
			require('static_audio/start.mp3'),
			require('static_audio/dice.mp3'),
			require('static_audio/jumper.mp3'),
			require('static_audio/runner.mp3'),
			require('static_audio/resume.mp3')
		],
		"json": [
			require('static_json/main.json'),
			require('static_json/embellish.json'),
			require('static_json/jumpers.json'),
			require('static_json/runners.json')
		]
	},
	resumeJson: {
		"personalInfo": "static/json/resume-personalInfo.json?0503",
		"contact": "static/json/resume-contact.json?0503",
		"blog": "static/json/resume-blog.json?0503",
		"experience": "static/json/resume-experience.json?0503",
		"shortCutKey": "static/json/shortCut-key.json?0503"
	},
	// 三种资源
	imgSource: [],
	mediaSource: [],
	jsonSource: [],
	jsonObj: {},
	// 进度条长度
	progressBarW: 450,
	// 进度条高度
	progressBarH: 30,
	// 进度条的半径，必须为高度的一半
	progressRadius: 15,
	// 进度条颜色
	progressColor: "rgba(255,60,10,.8)",
	// 进度条边框颜色
	progressBorderColor: "rgba(255,60,0,1)",
	// 重力加速度
	GRAVITY_FORCE: 9.81,
	// deg
	deg: Math.PI / 180,
	slopeAngle: 22,
	zoneWidth: 60,
	zoneHeight: 60
}

export default Config