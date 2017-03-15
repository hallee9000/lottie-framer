# 使用时先用require引进
# visualMusic = require 'visual-music'
# 再将其实例化
# vm = new visualMusic
# 	src:'audio.mp3'

class lottieLayer extends Layer
	animationObj = null
	# 构造器
	constructor: (@options={}) ->
		# 基本配置项
		@options.jsonPath ?= 'data.json'
		@options.width ?= 200
		@options.height ?= 200
		@options.backgroundColor ?= 'transparent'
		@options.renderer ?= 'svg'
		@options.loop ?= true
		@options.autoplay ?= true

		super @options

		anmiLayer = new Layer
			parent: @
			width: @options.width
			height: @options.height
			backgroundColor: @options.backgroundColor

		anmiLayer.html = "<div id='lottie-animation-"+anmiLayer.id+"'></div>"
		anmiLayer._element.childNodes[0].style.height = '100%'
		anmiLayer._element.childNodes[0].childNodes[0].style.height = '100%'

		jsonPath = @options.jsonPath
		renderer = @options.renderer
		isLoop = @options.loop
		isAutoplay = @options.autoplay

		elId = "lottie-animation-"+anmiLayer.id

		if(document.bodymovinScript)
			timer = Utils.interval 0.1,->
				if(bodymovin)
					_loadJSON(jsonPath,elId,renderer,isLoop,isAutoplay,bodymovin)
					window.clearInterval(timer)
		else
			document.bodymovinScript = Utils.domLoadScript 'bodymovin.min.js', ->
				_loadJSON(jsonPath,elId,renderer,isLoop,isAutoplay,bodymovin)

		_loadJSON = (jsonPath,elId,renderer,isLoop,isAutoplay,bodymovin) ->
			Utils.domLoadJSON jsonPath, (err, data)->
				aniObj =
					container: document.getElementById(elId)
					renderer: renderer
					loop: isLoop
					autoplay:isAutoplay
					animationData: data
				animationObj = bodymovin.loadAnimation(aniObj)

	play:()->
		timer = Utils.interval 0.1,->
			if(animationObj)
				animationObj.play()
				window.clearInterval(timer)
	stop:()->
		timer = Utils.interval 0.1,->
			if(animationObj)
				animationObj.stop()
				window.clearInterval(timer)
	pause:()->
		timer = Utils.interval 0.1,->
			if(animationObj)
				animationObj.pause()
				window.clearInterval(timer)
	setSpeed:(speed)->
		timer = Utils.interval 0.1,->
			if(animationObj)
				animationObj.setSpeed(speed)
				window.clearInterval(timer)
	goToAndStop:(value, isFrame)->
		timer = Utils.interval 0.1,->
			if(animationObj)
				animationObj.goToAndStop(value, isFrame)
				window.clearInterval(timer)
	goToAndPlay:(value, isFrame)->
		timer = Utils.interval 0.1,->
			if(animationObj)
				animationObj.goToAndPlay(value, isFrame)
				window.clearInterval(timer)
	setDirection:(direction)->
		timer = Utils.interval 0.1,->
			if(animationObj)
				animationObj.setDirection(direction)
				window.clearInterval(timer)
	playSegments:(segments, forceFlag)->
		timer = Utils.interval 0.1,->
			if(animationObj)
				animationObj.playSegments(segments, forceFlag)
				window.clearInterval(timer)
	destroy:()->
		timer = Utils.interval 0.1,->
			if(animationObj)
				animationObj.destroy()
				window.clearInterval(timer)

module.exports = lottieLayer
