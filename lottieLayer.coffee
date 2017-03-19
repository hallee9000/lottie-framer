class lottieLayer extends Layer
	animationObj = null
	timer = null
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
			bodymovinTimer = Utils.interval 0.1,->
				if(bodymovin)
					_loadJSON(jsonPath,elId,renderer,isLoop,isAutoplay,bodymovin)
					window.clearInterval(bodymovinTimer)
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

	_loop = (callback)->
		timer = Utils.interval 0.1,->
			if(animationObj)
				window.clearInterval(timer)
				callback()
	play:()->
		_loop ()->
			animationObj.play()
	stop:()->
		_loop ()->
			animationObj.stop()
	pause:()->
		_loop ()->
			animationObj.pause()
	setSpeed:(speed)->
		_loop ()->
			animationObj.setSpeed(speed)
	goToAndStop:(value, isFrame)->
		_loop ()->
			animationObj.goToAndStop(value, isFrame)
	goToAndPlay:(value, isFrame)->
		_loop ()->
			animationObj.goToAndPlay(value, isFrame)
	setDirection:(direction)->
		_loop ()->
			animationObj.setDirection(direction)
	playSegments:(segments, forceFlag)->
		_loop ()->
			animationObj.playSegments(segments, forceFlag)
	destroy:()->
		_loop ()->
			animationObj.destroy()

module.exports = lottieLayer
