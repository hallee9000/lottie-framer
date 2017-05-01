class lottieLayer extends Layer
	# 构造器
	constructor: (@options={}) ->
		# 基本配置项
		@options.jsonPath ?= 'data.json'
		@options.width ?= 200
		@options.height ?= 200
		@options.backgroundColor ?= 'transparent'
		@options.renderer ?= 'svg'
		@options.looping ?= true
		@options.autoplay ?= true

		super @options

		@anim = null

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
		isLoop = @options.looping
		isAutoplay = @options.autoplay

		elId = "lottie-animation-"+anmiLayer.id

		_this = @

		if(document.bodymovinScript)
			bodymovinTimer = Utils.interval 0.1,->
				if(window.bodymovin)
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
				_this.anim = bodymovin.loadAnimation(aniObj)

module.exports = lottieLayer
