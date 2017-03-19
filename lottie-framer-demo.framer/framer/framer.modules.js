require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"lottieLayer":[function(require,module,exports){
var lottieLayer,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

lottieLayer = (function(superClass) {
  var _loop, animationObj, timer;

  extend(lottieLayer, superClass);

  animationObj = null;

  timer = null;

  function lottieLayer(options) {
    var _loadJSON, anmiLayer, base, base1, base2, base3, base4, base5, base6, bodymovinTimer, elId, isAutoplay, isLoop, jsonPath, renderer;
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
    if ((base5 = this.options).loop == null) {
      base5.loop = true;
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
    jsonPath = this.options.jsonPath;
    renderer = this.options.renderer;
    isLoop = this.options.loop;
    isAutoplay = this.options.autoplay;
    elId = "lottie-animation-" + anmiLayer.id;
    if (document.bodymovinScript) {
      bodymovinTimer = Utils.interval(0.1, function() {
        if (bodymovin) {
          _loadJSON(jsonPath, elId, renderer, isLoop, isAutoplay, bodymovin);
          return window.clearInterval(bodymovinTimer);
        }
      });
    } else {
      document.bodymovinScript = Utils.domLoadScript('bodymovin.min.js', function() {
        return _loadJSON(jsonPath, elId, renderer, isLoop, isAutoplay, bodymovin);
      });
    }
    _loadJSON = function(jsonPath, elId, renderer, isLoop, isAutoplay, bodymovin) {
      return Utils.domLoadJSON(jsonPath, function(err, data) {
        var aniObj;
        aniObj = {
          container: document.getElementById(elId),
          renderer: renderer,
          loop: isLoop,
          autoplay: isAutoplay,
          animationData: data
        };
        return animationObj = bodymovin.loadAnimation(aniObj);
      });
    };
  }

  _loop = function(callback) {
    return timer = Utils.interval(0.1, function() {
      if (animationObj) {
        window.clearInterval(timer);
        return callback();
      }
    });
  };

  lottieLayer.prototype.play = function() {
    return _loop(function() {
      return animationObj.play();
    });
  };

  lottieLayer.prototype.stop = function() {
    return _loop(function() {
      return animationObj.stop();
    });
  };

  lottieLayer.prototype.pause = function() {
    return _loop(function() {
      return animationObj.pause();
    });
  };

  lottieLayer.prototype.setSpeed = function(speed) {
    return _loop(function() {
      return animationObj.setSpeed(speed);
    });
  };

  lottieLayer.prototype.goToAndStop = function(value, isFrame) {
    return _loop(function() {
      return animationObj.goToAndStop(value, isFrame);
    });
  };

  lottieLayer.prototype.goToAndPlay = function(value, isFrame) {
    return _loop(function() {
      return animationObj.goToAndPlay(value, isFrame);
    });
  };

  lottieLayer.prototype.setDirection = function(direction) {
    return _loop(function() {
      return animationObj.setDirection(direction);
    });
  };

  lottieLayer.prototype.playSegments = function(segments, forceFlag) {
    return _loop(function() {
      return animationObj.playSegments(segments, forceFlag);
    });
  };

  lottieLayer.prototype.destroy = function() {
    return _loop(function() {
      return animationObj.destroy();
    });
  };

  return lottieLayer;

})(Layer);

module.exports = lottieLayer;


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2xlYWRyZWFtL2dpdGh1Yi9sb3R0aWUtZnJhbWVyL2xvdHRpZS1mcmFtZXItZGVtby5mcmFtZXIvbW9kdWxlcy9sb3R0aWVMYXllci5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIGxvdHRpZUxheWVyIGV4dGVuZHMgTGF5ZXJcblx0YW5pbWF0aW9uT2JqID0gbnVsbFxuXHR0aW1lciA9IG51bGxcblx0IyDmnoTpgKDlmahcblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblx0XHQjIOWfuuacrOmFjee9rumhuVxuXHRcdEBvcHRpb25zLmpzb25QYXRoID89ICdkYXRhLmpzb24nXG5cdFx0QG9wdGlvbnMud2lkdGggPz0gMjAwXG5cdFx0QG9wdGlvbnMuaGVpZ2h0ID89IDIwMFxuXHRcdEBvcHRpb25zLmJhY2tncm91bmRDb2xvciA/PSAndHJhbnNwYXJlbnQnXG5cdFx0QG9wdGlvbnMucmVuZGVyZXIgPz0gJ3N2Zydcblx0XHRAb3B0aW9ucy5sb29wID89IHRydWVcblx0XHRAb3B0aW9ucy5hdXRvcGxheSA/PSB0cnVlXG5cblx0XHRzdXBlciBAb3B0aW9uc1xuXG5cdFx0YW5taUxheWVyID0gbmV3IExheWVyXG5cdFx0XHRwYXJlbnQ6IEBcblx0XHRcdHdpZHRoOiBAb3B0aW9ucy53aWR0aFxuXHRcdFx0aGVpZ2h0OiBAb3B0aW9ucy5oZWlnaHRcblx0XHRcdGJhY2tncm91bmRDb2xvcjogQG9wdGlvbnMuYmFja2dyb3VuZENvbG9yXG5cblx0XHRhbm1pTGF5ZXIuaHRtbCA9IFwiPGRpdiBpZD0nbG90dGllLWFuaW1hdGlvbi1cIithbm1pTGF5ZXIuaWQrXCInPjwvZGl2PlwiXG5cdFx0YW5taUxheWVyLl9lbGVtZW50LmNoaWxkTm9kZXNbMF0uc3R5bGUuaGVpZ2h0ID0gJzEwMCUnXG5cdFx0YW5taUxheWVyLl9lbGVtZW50LmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5zdHlsZS5oZWlnaHQgPSAnMTAwJSdcblxuXHRcdGpzb25QYXRoID0gQG9wdGlvbnMuanNvblBhdGhcblx0XHRyZW5kZXJlciA9IEBvcHRpb25zLnJlbmRlcmVyXG5cdFx0aXNMb29wID0gQG9wdGlvbnMubG9vcFxuXHRcdGlzQXV0b3BsYXkgPSBAb3B0aW9ucy5hdXRvcGxheVxuXG5cdFx0ZWxJZCA9IFwibG90dGllLWFuaW1hdGlvbi1cIithbm1pTGF5ZXIuaWRcblxuXHRcdGlmKGRvY3VtZW50LmJvZHltb3ZpblNjcmlwdClcblx0XHRcdGJvZHltb3ZpblRpbWVyID0gVXRpbHMuaW50ZXJ2YWwgMC4xLC0+XG5cdFx0XHRcdGlmKGJvZHltb3Zpbilcblx0XHRcdFx0XHRfbG9hZEpTT04oanNvblBhdGgsZWxJZCxyZW5kZXJlcixpc0xvb3AsaXNBdXRvcGxheSxib2R5bW92aW4pXG5cdFx0XHRcdFx0d2luZG93LmNsZWFySW50ZXJ2YWwoYm9keW1vdmluVGltZXIpXG5cdFx0ZWxzZVxuXHRcdFx0ZG9jdW1lbnQuYm9keW1vdmluU2NyaXB0ID0gVXRpbHMuZG9tTG9hZFNjcmlwdCAnYm9keW1vdmluLm1pbi5qcycsIC0+XG5cdFx0XHRcdF9sb2FkSlNPTihqc29uUGF0aCxlbElkLHJlbmRlcmVyLGlzTG9vcCxpc0F1dG9wbGF5LGJvZHltb3ZpbilcblxuXHRcdF9sb2FkSlNPTiA9IChqc29uUGF0aCxlbElkLHJlbmRlcmVyLGlzTG9vcCxpc0F1dG9wbGF5LGJvZHltb3ZpbikgLT5cblx0XHRcdFV0aWxzLmRvbUxvYWRKU09OIGpzb25QYXRoLCAoZXJyLCBkYXRhKS0+XG5cdFx0XHRcdGFuaU9iaiA9XG5cdFx0XHRcdFx0Y29udGFpbmVyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbElkKVxuXHRcdFx0XHRcdHJlbmRlcmVyOiByZW5kZXJlclxuXHRcdFx0XHRcdGxvb3A6IGlzTG9vcFxuXHRcdFx0XHRcdGF1dG9wbGF5OmlzQXV0b3BsYXlcblx0XHRcdFx0XHRhbmltYXRpb25EYXRhOiBkYXRhXG5cdFx0XHRcdGFuaW1hdGlvbk9iaiA9IGJvZHltb3Zpbi5sb2FkQW5pbWF0aW9uKGFuaU9iailcblxuXHRfbG9vcCA9IChjYWxsYmFjayktPlxuXHRcdHRpbWVyID0gVXRpbHMuaW50ZXJ2YWwgMC4xLC0+XG5cdFx0XHRpZihhbmltYXRpb25PYmopXG5cdFx0XHRcdHdpbmRvdy5jbGVhckludGVydmFsKHRpbWVyKVxuXHRcdFx0XHRjYWxsYmFjaygpXG5cdHBsYXk6KCktPlxuXHRcdF9sb29wICgpLT5cblx0XHRcdGFuaW1hdGlvbk9iai5wbGF5KClcblx0c3RvcDooKS0+XG5cdFx0X2xvb3AgKCktPlxuXHRcdFx0YW5pbWF0aW9uT2JqLnN0b3AoKVxuXHRwYXVzZTooKS0+XG5cdFx0X2xvb3AgKCktPlxuXHRcdFx0YW5pbWF0aW9uT2JqLnBhdXNlKClcblx0c2V0U3BlZWQ6KHNwZWVkKS0+XG5cdFx0X2xvb3AgKCktPlxuXHRcdFx0YW5pbWF0aW9uT2JqLnNldFNwZWVkKHNwZWVkKVxuXHRnb1RvQW5kU3RvcDoodmFsdWUsIGlzRnJhbWUpLT5cblx0XHRfbG9vcCAoKS0+XG5cdFx0XHRhbmltYXRpb25PYmouZ29Ub0FuZFN0b3AodmFsdWUsIGlzRnJhbWUpXG5cdGdvVG9BbmRQbGF5Oih2YWx1ZSwgaXNGcmFtZSktPlxuXHRcdF9sb29wICgpLT5cblx0XHRcdGFuaW1hdGlvbk9iai5nb1RvQW5kUGxheSh2YWx1ZSwgaXNGcmFtZSlcblx0c2V0RGlyZWN0aW9uOihkaXJlY3Rpb24pLT5cblx0XHRfbG9vcCAoKS0+XG5cdFx0XHRhbmltYXRpb25PYmouc2V0RGlyZWN0aW9uKGRpcmVjdGlvbilcblx0cGxheVNlZ21lbnRzOihzZWdtZW50cywgZm9yY2VGbGFnKS0+XG5cdFx0X2xvb3AgKCktPlxuXHRcdFx0YW5pbWF0aW9uT2JqLnBsYXlTZWdtZW50cyhzZWdtZW50cywgZm9yY2VGbGFnKVxuXHRkZXN0cm95OigpLT5cblx0XHRfbG9vcCAoKS0+XG5cdFx0XHRhbmltYXRpb25PYmouZGVzdHJveSgpXG5cbm1vZHVsZS5leHBvcnRzID0gbG90dGllTGF5ZXJcbiIsIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQ0FBO0FEQUEsSUFBQSxXQUFBO0VBQUE7OztBQUFNO0FBQ0wsTUFBQTs7OztFQUFBLFlBQUEsR0FBZTs7RUFDZixLQUFBLEdBQVE7O0VBRUsscUJBQUMsT0FBRDtBQUVaLFFBQUE7SUFGYSxJQUFDLENBQUEsNEJBQUQsVUFBUzs7VUFFZCxDQUFDLFdBQVk7OztXQUNiLENBQUMsUUFBUzs7O1dBQ1YsQ0FBQyxTQUFVOzs7V0FDWCxDQUFDLGtCQUFtQjs7O1dBQ3BCLENBQUMsV0FBWTs7O1dBQ2IsQ0FBQyxPQUFROzs7V0FDVCxDQUFDLFdBQVk7O0lBRXJCLDZDQUFNLElBQUMsQ0FBQSxPQUFQO0lBRUEsU0FBQSxHQUFnQixJQUFBLEtBQUEsQ0FDZjtNQUFBLE1BQUEsRUFBUSxJQUFS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
