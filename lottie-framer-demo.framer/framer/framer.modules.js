require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"lottieLayer":[function(require,module,exports){
var lottieLayer,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

lottieLayer = (function(superClass) {
  extend(lottieLayer, superClass);

  function lottieLayer(options) {
    var anmiLayer, base, base1, base2, base3, base4, base5, base6;
    this.options = options != null ? options : {};
    if ((base = this.options).jsonPath == null) {
      base.jsonPath = 'data.json';
    }
    if ((base1 = this.options).width == null) {
      base1.width = 200;
    }
    if ((base2 = this.options).height == null) {
      base2.height = 200;
    }
    if ((base3 = this.options).backgroundColor == null) {
      base3.backgroundColor = 'transparent';
    }
    if ((base4 = this.options).renderer == null) {
      base4.renderer = 'svg';
    }
    if ((base5 = this.options).looping == null) {
      base5.looping = true;
    }
    if ((base6 = this.options).autoplay == null) {
      base6.autoplay = true;
    }
    lottieLayer.__super__.constructor.call(this, this.options);
    anmiLayer = new Layer({
      parent: this,
      width: this.options.width,
      height: this.options.height,
      backgroundColor: this.options.backgroundColor
    });
    anmiLayer.html = "<div id='lottie-animation-" + anmiLayer.id + "'></div>";
    anmiLayer._element.childNodes[0].style.height = '100%';
    anmiLayer._element.childNodes[0].childNodes[0].style.height = '100%';
    this.elId = "lottie-animation-" + anmiLayer.id;
    this.anim = null;
    this._insertScript();
    this._initialize(this.elId);
  }

  lottieLayer.define('jsonPath', {
    get: function() {
      return this.options.jsonPath;
    },
    set: function(value) {
      this.options.jsonPath = value;
      if (this.elId) {
        return this._initialize(this.elId);
      }
    }
  });

  lottieLayer.prototype._insertScript = function() {
    var e, head, localSrc, onlineSrc, script, scriptText;
    localSrc = 'lottie.min.js';
    onlineSrc = 'https://raw.githubusercontent.com/airbnb/lottie-web/master/build/player/lottie.min.js';
    if (!window.lottie) {
      try {
        scriptText = Utils.domLoadDataSync(localSrc);
      } catch (error) {
        e = error;
        try {
          scriptText = Utils.domLoadDataSync(onlineSrc);
        } catch (error) {
          e = error;
          throw Error("Cant find lottie.min.js, please put it in project root folder.");
        }
      }
      script = document.createElement("script");
      script.type = "text/javascript";
      script.innerHTML = scriptText;
      head = document.getElementsByTagName("head")[0];
      return head.appendChild(script);
    }
  };

  lottieLayer.prototype._initialize = function(elId) {
    var aniObj;
    aniObj = {
      container: document.getElementById(elId),
      renderer: this.options.renderer,
      loop: this.options.looping,
      autoplay: this.options.autoplay,
      path: this.options.jsonPath
    };
    console.log(aniObj);
    return this.anim = lottie.loadAnimation(aniObj);
  };

  return lottieLayer;

})(Layer);

module.exports = lottieLayer;


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2xlYWRyZWFtL2dpdGh1Yi9sb3R0aWUtZnJhbWVyL2xvdHRpZS1mcmFtZXItZGVtby5mcmFtZXIvbW9kdWxlcy9sb3R0aWVMYXllci5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIGxvdHRpZUxheWVyIGV4dGVuZHMgTGF5ZXJcblx0IyDmnoTpgKDlmahcblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblx0XHQjIOWfuuacrOmFjee9rumhuVxuXHRcdEBvcHRpb25zLmpzb25QYXRoID89ICdkYXRhLmpzb24nXG5cdFx0QG9wdGlvbnMud2lkdGggPz0gMjAwXG5cdFx0QG9wdGlvbnMuaGVpZ2h0ID89IDIwMFxuXHRcdEBvcHRpb25zLmJhY2tncm91bmRDb2xvciA/PSAndHJhbnNwYXJlbnQnXG5cdFx0QG9wdGlvbnMucmVuZGVyZXIgPz0gJ3N2Zydcblx0XHRAb3B0aW9ucy5sb29waW5nID89IHRydWVcblx0XHRAb3B0aW9ucy5hdXRvcGxheSA/PSB0cnVlXG5cblx0XHRzdXBlciBAb3B0aW9uc1xuXG5cdFx0YW5taUxheWVyID0gbmV3IExheWVyXG5cdFx0XHRwYXJlbnQ6IEBcblx0XHRcdHdpZHRoOiBAb3B0aW9ucy53aWR0aFxuXHRcdFx0aGVpZ2h0OiBAb3B0aW9ucy5oZWlnaHRcblx0XHRcdGJhY2tncm91bmRDb2xvcjogQG9wdGlvbnMuYmFja2dyb3VuZENvbG9yXG5cblx0XHRhbm1pTGF5ZXIuaHRtbCA9IFwiPGRpdiBpZD0nbG90dGllLWFuaW1hdGlvbi1cIithbm1pTGF5ZXIuaWQrXCInPjwvZGl2PlwiXG5cdFx0YW5taUxheWVyLl9lbGVtZW50LmNoaWxkTm9kZXNbMF0uc3R5bGUuaGVpZ2h0ID0gJzEwMCUnXG5cdFx0YW5taUxheWVyLl9lbGVtZW50LmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5zdHlsZS5oZWlnaHQgPSAnMTAwJSdcblxuXHRcdEBlbElkID0gXCJsb3R0aWUtYW5pbWF0aW9uLVwiICsgYW5taUxheWVyLmlkXG5cdFx0QGFuaW0gPSBudWxsXG5cblx0XHRAX2luc2VydFNjcmlwdCgpXG5cdFx0QF9pbml0aWFsaXplKEBlbElkKVxuXG5cdEBkZWZpbmUgJ2pzb25QYXRoJyxcblx0XHRnZXQ6IC0+XG5cdFx0XHRAb3B0aW9ucy5qc29uUGF0aFxuXHRcdHNldDogKHZhbHVlKSAtPlxuXHRcdFx0QG9wdGlvbnMuanNvblBhdGggPSB2YWx1ZVxuXHRcdFx0aWYgQGVsSWRcblx0XHRcdFx0QF9pbml0aWFsaXplKEBlbElkKVxuXG5cdF9pbnNlcnRTY3JpcHQ6ICgpIC0+XG5cdFx0bG9jYWxTcmMgPSAnbG90dGllLm1pbi5qcydcblx0XHRvbmxpbmVTcmMgPSAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FpcmJuYi9sb3R0aWUtd2ViL21hc3Rlci9idWlsZC9wbGF5ZXIvbG90dGllLm1pbi5qcydcblx0XHRpZiAhd2luZG93LmxvdHRpZVxuXHRcdFx0dHJ5XG5cdFx0XHRcdHNjcmlwdFRleHQgPSBVdGlscy5kb21Mb2FkRGF0YVN5bmMgbG9jYWxTcmNcblx0XHRcdGNhdGNoIGVcblx0XHRcdFx0dHJ5XG5cdFx0XHRcdFx0c2NyaXB0VGV4dCA9IFV0aWxzLmRvbUxvYWREYXRhU3luYyBvbmxpbmVTcmNcblx0XHRcdFx0Y2F0Y2ggZVxuXHRcdFx0XHRcdHRocm93IEVycm9yKFwiQ2FudCBmaW5kIGxvdHRpZS5taW4uanMsIHBsZWFzZSBwdXQgaXQgaW4gcHJvamVjdCByb290IGZvbGRlci5cIilcblx0XHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgXCJzY3JpcHRcIlxuXHRcdFx0c2NyaXB0LnR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiXG5cdFx0XHRzY3JpcHQuaW5uZXJIVE1MID0gc2NyaXB0VGV4dFxuXG5cdFx0XHRoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdXG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkIHNjcmlwdFxuXG5cdF9pbml0aWFsaXplOiAoZWxJZCkgLT5cblx0XHRhbmlPYmogPVxuXHRcdFx0Y29udGFpbmVyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbElkKVxuXHRcdFx0cmVuZGVyZXI6IEBvcHRpb25zLnJlbmRlcmVyXG5cdFx0XHRsb29wOiBAb3B0aW9ucy5sb29waW5nXG5cdFx0XHRhdXRvcGxheTogQG9wdGlvbnMuYXV0b3BsYXlcblx0XHRcdHBhdGg6IEBvcHRpb25zLmpzb25QYXRoXG5cdFx0Y29uc29sZS5sb2coYW5pT2JqKVxuXHRcdEBhbmltID0gbG90dGllLmxvYWRBbmltYXRpb24oYW5pT2JqKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxvdHRpZUxheWVyXG4iLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUNBQTtBREFBLElB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
