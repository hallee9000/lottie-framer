# Framer lottie 模块
【[bodymovin插件](https://github.com/bodymovin/bodymovin)】
【[for English](#a-framer-module-to-use-lottie)】

想知道怎么在 AE 中使用 bodymovin 插件，请点[这里](http://www.cnblogs.com/zamhown/p/6688369.html)。

bodymovin 插件是一款支持将 AE 动画导出为 json 数据，并在 web 中渲染播放的 AE 插件。前段时间 Airbnb 出了一个 Lottie 工具，和该插件结合起来，使得 iOS 和 Android 工程师可以很容易地在这两个平台中实现。

为了方便大家能够在 Framer 中播放并控制 AE 制作的动画，我写了这个这个 Framer module ，将 bodymovin 结合进来，让你能够通过 Framer 加载 AE 导出的动画，并能对这个动画过程进行控制。

### 使用方法

先在你的`项目文件夹/modules`里面添加`lottieLayer.coffee`文件，在项目根目录下添加`bodymovin.min.js`文件以及动画数据`data.json`文件，然后再在主文件`app.coffee`中添加以下代码。

```CoffeeScript
lottieLayer = require 'lottieLayer'
# 新建一个 lottieLayer 图层
lottieLogo = new lottieLayer
	jsonPath:'data.json' #动画数据的json路径
	autoplay: false #是否自动播放
	looping: true #是否循环播放
	width: 100
	height:100
	backgroundColor: '#09C'
```

首先我们需要引入 lottieLayer 对象，该对象是对Layer对象的扩展，所以你可以像定义Layer一样自定义它的宽、高、背景色等。

### 属性

该对象又有一些新增的属性，可以控制动画的自动播放或是否循环。

* **jsonPath** 存储动画数据的文件路径，默认是`data.json`。
* **renderer** 渲染动画的方式，默认是`svg`，可选的值有`canvas`、`html`。
* **looping** 设定动画是否循环播放，默认为`true`。
* **autoplay** 设定动画是否自动播放，默认为`true`。

### 方法

<h4 style="color:red;"><b>特别注意：</b>之前的版本有一个 bug ：生成两个 lottieLayer 之后，控制两个动画的过程只对第二个有效，现已修复。但现在调用这些方法时，不再是直接调用这个图层的方法，而是调用它的 anim 属性的方法。</h4>

```CoffeeScript
lottieLogo.anim.play()
```

* **play()**  播放动画。
* **stop()**  停止播放动画。
* **pause()**  暂停动画。
* **setSpeed(speed)**  设定速度，1为正常速度，小于1表示慢速，大于1表示快速。
* **goToAndStop(value, isFrame)**  跳转到某一毫秒或某一帧停止。第一个参数是一个数字，第二个参数是个布尔值，用来决定第一个参数的数字代表时间还是帧数，默认为时间。
* **goToAndPlay(value, isFrame)**  跳转到某一毫秒或某一帧播放。第一个参数是一个数字，第二个参数是个布尔值，用来决定第一个参数的数字代表时间还是帧数，默认为时间。
* **setDirection(direction)**  设定方向，1表示正向动画。
* **playSegments(segments, forceFlag)**  播放片段。第一个参数是一个或多个数组组成的片段或片段集合，每个数组都有两个值（开始帧，结束帧）。第二个参数是一个布尔值，表示下一个片段是否立即播放。第一个参数的值可以这样写：`[0,20]`或者`[[0,20],[30,40]]`。
* **destroy()**  销毁这个动画。

### 效果演示
[DEMO链接](https://framer.cloud/ytocz/2/)

![](demo.gif)

____

# a Framer module to use Lottie

【[bodymovin plugin](https://github.com/bodymovin/bodymovin)】

Bodymovin is a great AE plugin, which can export the animations' json data and help you render it in web. Recently Airbnb publishes Lottie, an iOS, Android, and React Native library, which renders After Effects animations in real time, allowing apps to use animations as easily as they use static images.

To make bodymovin can be used in Framer, I wrote this module. It helps you play animations exported by AE and control its process.

### usage

Copy the module file `lottieLayer.coffee` to your `projectName/modules` folder, then add the below code to your main file `app.coffee`. In addition, add the Lottie plugin `bodymovin.min.js` and your animation data `data.json` to the root directory.

```CoffeeScript
# Initialize the lottieLayer object
lottieLayer = require 'lottieLayer'
# Create a lottieLayer
lottieLogo = new lottieLayer
	jsonPath:'data.json' #animation data
	autoplay: false #if autoplay
	looping: true #if looping
	width: 100
	height:100
	backgroundColor: '#09C'
```

### properties

* **jsonPath** the relative path to the animation object. (animationData and path are mutually exclusive)
* **renderer** 'svg' / 'canvas' / 'html' to set the renderer
* **looping** true / false / number.
* **autoplay** true / false it will start playing as soon as it is ready

### methods

<h4 style="color:red;"><b>NOTE：</b>The previous version had a bug: if you use its methods, just the latest one works when creating 2 lottieLayers. Now it's fixed, but you should call it from lottieLayer's `anim` property.</h4>

animation instances have these main methods:

* **play()**  Play the animation.
* **stop()**  Stop the animation.
* **pause()**  Pause the animation.
* **setSpeed(speed)**  one param speed (1 is normal speed)
* **goToAndStop(value, isFrame)**  first param is a numeric value. second param is a boolean that defines time or frames for first param
* **goToAndPlay(value, isFrame)**  first param is a numeric value. second param is a boolean that defines time or frames for first param
* **setDirection(direction)**  one param direction (1 is normal direction.)
* **playSegments(segments, forceFlag)**  first param is a single array or multiple arrays of two values each(fromFrame,toFrame), second param is a boolean for forcing the new segment right away
* **destroy()**  Destroy the animation.

Play the animation manually like this:

```CoffeeScript
	lottieLogo.anim.play()
```

### DEMO TIME
[DEMO link](https://framer.cloud/ytocz/2/)

![](demo.gif)

Enjoy it.
