# Set background color
Screen.backgroundColor = "#333"

# Utils.domLoadScript 'bodymovin.min.js', ->
# 	print 'loaded'

lf = require 'lottieLayer'
# 再将其实例化
lottieL = new lf
	autoplay: false
	loop: false
	width: 300
	height:300
	backgroundColor: '#09C'

lottieL.goToAndStop(2000)

lottieM = new lf
	jsonPath:'data-2.json'
	x:300
	width: 100
	height:100
	backgroundColor: '#06C'
