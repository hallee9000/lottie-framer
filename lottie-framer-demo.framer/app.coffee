# Project Info
# This info is presented in a widget when you share.
# http://framerjs.com/docs/#info.info

Framer.Info =
	title: ""
	author: "leadream4"
	twitter: "https://twitter.com/leadream4"
	description: ""

# Set background color
# 设置背景色
Screen.backgroundColor = "#FFF"

# import the module
# 引入模块
lf = require 'lottieLayer'

# new a instance of it
# 再将其实例化
lottieLogoTop = new lf
	jsonPath:'data.json'
	autoplay: false
	looping: true
	width: Screen.width
	height: Screen.height/2
	borderColor: '#EEE'
	borderWidth: 1

buttonTop = new Layer
	y: 447
	height: 100
	width: 100
	borderRadius: 50
	backgroundColor: "#00D1C1"
	html: "PLAY"
	shadowSpread: 15
	shadowBlur: 50
	shadowColor: "rgba(0,0,0,0.05)"
	x: 14

buttonTop.style =
	"color": "#FFF"
	"text-align": "center"
	"font-size": "22px"
	"line-height": "100px"

isTopPlaying = false
buttonTop.onClick ->
	if isTopPlaying
		# 暂停动画
		# pause the animation
		lottieLogoTop.anim.pause()
		# lottieLogoAnimation.pause()
		isTopPlaying = false
		buttonTop.html = "PLAY"
		buttonTop.animate
			opacity: 1
	else
		# 播放动画
		# play the animation
		lottieLogoTop.anim.play()
		# lottieLogoAnimation.play()
		isTopPlaying = true
		buttonTop.html = "PAUSE"
		buttonTop.animate
			opacity: 0.5

# second #######################################

lottieLogoBottom = new lf
	jsonPath:'data.json'
	autoplay: true
	looping: true
	y: Screen.height/2
	width: Screen.width
	height: Screen.height/2
	borderColor: '#EEE'
	borderWidth: 1

buttonBottom = new Layer
	y: 1018
	x: 14
	height: 100
	width: 100
	borderRadius: 50
	backgroundColor: "#00D1C1"
	html: "PAUSE"
	shadowSpread: 15
	shadowBlur: 50
	shadowColor: "rgba(0,0,0,0.05)"
	opacity: 0.5

buttonBottom.style =
	"color": "#FFF"
	"text-align": "center"
	"font-size": "22px"
	"line-height": "100px"

isBottomPlaying = true
buttonBottom.onClick ->
	if isBottomPlaying
		lottieLogoBottom.anim.pause()
		isBottomPlaying = false
		buttonBottom.html = "PLAY"
		buttonBottom.animate
			opacity: 1
	else
		lottieLogoBottom.anim.play()
		isBottomPlaying = true
		buttonBottom.html = "PAUSE"
		buttonBottom.animate
			opacity: 0.5