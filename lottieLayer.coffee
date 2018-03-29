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

		anmiLayer = new Layer
			parent: @
			width: @options.width
			height: @options.height
			backgroundColor: @options.backgroundColor

		anmiLayer.html = "<div id='lottie-animation-"+anmiLayer.id+"'></div>"
		anmiLayer._element.childNodes[0].style.height = '100%'
		anmiLayer._element.childNodes[0].childNodes[0].style.height = '100%'

		@elId = "lottie-animation-" + anmiLayer.id
		@anim = null

		@_insertScript()
		@_initialize(@elId)

	@define 'jsonPath',
		get: ->
			@options.jsonPath
		set: (value) ->
			@options.jsonPath = value
			if @elId
				@_initialize(@elId)

	_insertScript: () ->
		localSrc = 'lottie.min.js'
		onlineSrc = 'https://raw.githubusercontent.com/airbnb/lottie-web/master/build/player/lottie.min.js'
		if !window.lottie
			try
				scriptText = Utils.domLoadDataSync localSrc
			catch e
				try
					scriptText = Utils.domLoadDataSync onlineSrc
				catch e
					throw Error("Cant find lottie.min.js, please put it in project root folder.")
			script = document.createElement "script"
			script.type = "text/javascript"
			script.innerHTML = scriptText

			head = document.getElementsByTagName("head")[0]
			head.appendChild script

	_initialize: (elId) ->
		aniObj =
			container: document.getElementById(elId)
			renderer: @options.renderer
			loop: @options.looping
			autoplay: @options.autoplay
			path: @options.jsonPath
		@anim = lottie.loadAnimation(aniObj)

module.exports = lottieLayer
