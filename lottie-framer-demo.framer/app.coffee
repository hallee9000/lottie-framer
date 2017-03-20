# Set background color
Screen.backgroundColor = "#FFF"

lf = require 'lottieLayer'
# 再将其实例化
lottieLogoAnimation = new lf
	jsonPath:'data.json'
	autoplay: false
	looping: true
	width: Screen.width
	height: Screen.height


styles =
	"color": "#00D1C1"
	"text-align": "center"
	"font-size": "35px"
	"line-height": "93px"

buttonPlay = new Layer
	y: 981
	x: 30
	height: 93
	width: 270
	borderRadius: 6
	backgroundColor: "#00D1C1"
	html: "PLAY"
	shadowSpread: 15
	shadowBlur: 50
	shadowColor: "rgba(0,0,0,0.1)"

buttonPause = new Layer
	y: 981
	x: 340
	height: 93
	width: 270
	borderRadius: 6
	backgroundColor: "#FFF"
	borderWidth: 2
	borderColor: "#00D1C1"
	html: "PAUSE"
	shadowSpread: 10
	shadowBlur: 40
	shadowColor: "rgba(0,0,0,0.1)"

buttonPlay.style = styles
buttonPause.style = styles
buttonPlay.style["color"] = "#FFF"

buttonPlay.onClick ->
	lottieLogoAnimation.play()
	buttonPlay.animate
		opacity: 0.6
	buttonPause.animate
		opacity: 1

buttonPause.onClick ->
	lottieLogoAnimation.pause()
	buttonPause.animate
		opacity: 0.6
	buttonPlay.animate
		opacity: 1