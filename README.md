# Framer lottie 模块
<!-- 【[English version](#a-framer-module-to-visualize-music)】 -->

这个 Framer module 将 Airbnb 的 Lottie 结合进来，让你能够通过 Framer 加载 AE 导出的动画，并能对这个动画过程进行控制。

### 使用方法

先在你的`项目文件夹/modules`里面添加`lottieLayer.coffee`文件，在项目根目录下添加`bodymovin.min.js`文件以及动画数据`data.json`文件，然后再在主文件`app.coffee`中添加以下代码。

初始化 lottieLayer 对象，该对象是对`Layer`对象的扩展，所以你可以自定义它的宽高背景的等。同时，它又有一些新增的属性，可以控制动画的自动播放或是否循环。

```CoffeeScript
lottieLayer = require 'lottieLayer'
# 新建一个 lottieLayer 图层
animA = new lottieLayer
	width: 100
	height:100
	backgroundColor: '#09C'
```
#### 属性

* **jsonPath** 存储动画数据的文件路径，默认是`data.json`。
* **renderer** 渲染动画的方式，默认是`svg`，可选的值有`canvas`、`html`。
* **loop** 设定动画是否循环播放，默认为`true`。
* **autoplay** 设定动画是否自动播放，默认为`true`。

#### 方法

* **play()** 播放动画。
* **stop()** 停止播放动画。
* **pause()** 暂停动画。
* **setSpeed(speed)** 设定速度，1为正常速度，小于1表示慢速，大于1表示快速。
* **goToAndStop(value, isFrame)** 跳转到某一毫秒或某一帧停止。第一个参数是一个数字，第二个参数是个布尔值，用来决定第一个参数的数字代表时间还是帧数，默认为时间。
* **goToAndPlay(value, isFrame)** 跳转到某一毫秒或某一帧播放。第一个参数是一个数字，第二个参数是个布尔值，用来决定第一个参数的数字代表时间还是帧数，默认为时间。
* **setDirection(direction)** 设定方向，1表示正向动画。
* **playSegments(segments, forceFlag)** 播放片段。第一个参数是一个或多个数组组成的片段或片段集合，每个数组都有两个值（开始帧，结束帧）。第二个参数是一个布尔值，表示下一个片段是否立即播放。第一个参数的值可以这样写：`[0,20]`或者`[[0,20],[30,40]]`。
* **destroy()** 销毁这个动画。

<!-- ### 效果演示 -->

____

<!-- # a-framer-module-to-visualize-music -->
