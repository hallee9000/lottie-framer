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

welcomeText = new Layer
	y: 350
	width: Screen.width
	backgroundColor: 'transparent'
	html: "<p>WELCOME</p><p>TO</p><p>LOTTIE</p>"

welcomeText.style =
	"color": "#00D1C1"
	"text-align": "center"
	"font-size": "66px"
	"line-height": "80px"
	"font-family": "Avenir Light,Georgia,serif"
	"font-style": "italic"
	"letter-spacing": "5px"

buttonPlay = new Layer
	y: 981
	x: 150
	height: 93
	width: 340
	borderRadius: 6
	backgroundColor: "#00D1C1"
	html: "PLAY"
	shadowSpread: 15
	shadowBlur: 50
	shadowColor: "rgba(0,0,0,0.05)"

buttonPlay.style =
	"color": "#FFF"
	"text-align": "center"
	"font-size": "35px"
	"line-height": "93px"

isPlaying = false
buttonPlay.onClick ->
	if isPlaying
		lottieLogoAnimation.pause()
		isPlaying = false
		buttonPlay.html = "PLAY"
		buttonPlay.animate
			opacity: 1
	else
		lottieLogoAnimation.play()
		isPlaying = true
		buttonPlay.html = "PAUSE"
		buttonPlay.animate
			opacity: 0.5
		welcomeText.animate
			opacity: 0