# Set background color
Screen.backgroundColor = "#333"

# Utils.domLoadScript 'bodymovin.min.js', ->
# 	print 'loaded'

lf = require 'lottieFramer'
# 再将其实例化
lottieL = new lf
	width: 100
	height:100
	backgroundColor: '#09C'

lottieM = new lf
	x:100
	width: 100
	height:100
	backgroundColor: '#06C'
