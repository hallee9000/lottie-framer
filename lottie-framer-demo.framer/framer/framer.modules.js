require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"lottieLayer":[function(require,module,exports){
var bm, lottieLayer,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

bm = null;

lottieLayer = (function(superClass) {
  extend(lottieLayer, superClass);

  function lottieLayer(options) {
    var _loadJSON, _this, anmiLayer, base, base1, base2, base3, base4, base5, base6, bodymovinTimer, elId, isAutoplay, isLoop, jsonPath, renderer;
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
    this.anim = null;
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
    isLoop = this.options.looping;
    isAutoplay = this.options.autoplay;
    elId = "lottie-animation-" + anmiLayer.id;
    _this = this;
    if (document.bodymovinScript) {
      bodymovinTimer = Utils.interval(0.1, function() {
        if (bm) {
          _loadJSON(jsonPath, elId, renderer, isLoop, isAutoplay, bm);
          return window.clearInterval(bodymovinTimer);
        }
      });
    } else {
      document.bodymovinScript = Utils.domLoadScript('bodymovin.min.js', function() {
        bm = bodymovin;
        return _loadJSON(jsonPath, elId, renderer, isLoop, isAutoplay, bm);
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
        return _this.anim = bodymovin.loadAnimation(aniObj);
      });
    };
  }

  return lottieLayer;

})(Layer);

module.exports = lottieLayer;


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2xlYWRyZWFtL2dpdGh1Yi9sb3R0aWUtZnJhbWVyL2xvdHRpZS1mcmFtZXItZGVtby5mcmFtZXIvbW9kdWxlcy9sb3R0aWVMYXllci5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImJtID0gbnVsbFxuY2xhc3MgbG90dGllTGF5ZXIgZXh0ZW5kcyBMYXllclxuXHQjIOaehOmAoOWZqFxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXHRcdCMg5Z+65pys6YWN572u6aG5XG5cdFx0QG9wdGlvbnMuanNvblBhdGggPz0gJ2RhdGEuanNvbidcblx0XHRAb3B0aW9ucy53aWR0aCA/PSAyMDBcblx0XHRAb3B0aW9ucy5oZWlnaHQgPz0gMjAwXG5cdFx0QG9wdGlvbnMuYmFja2dyb3VuZENvbG9yID89ICd0cmFuc3BhcmVudCdcblx0XHRAb3B0aW9ucy5yZW5kZXJlciA/PSAnc3ZnJ1xuXHRcdEBvcHRpb25zLmxvb3BpbmcgPz0gdHJ1ZVxuXHRcdEBvcHRpb25zLmF1dG9wbGF5ID89IHRydWVcblxuXHRcdHN1cGVyIEBvcHRpb25zXG5cblx0XHRAYW5pbSA9IG51bGxcblxuXHRcdGFubWlMYXllciA9IG5ldyBMYXllclxuXHRcdFx0cGFyZW50OiBAXG5cdFx0XHR3aWR0aDogQG9wdGlvbnMud2lkdGhcblx0XHRcdGhlaWdodDogQG9wdGlvbnMuaGVpZ2h0XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IEBvcHRpb25zLmJhY2tncm91bmRDb2xvclxuXG5cdFx0YW5taUxheWVyLmh0bWwgPSBcIjxkaXYgaWQ9J2xvdHRpZS1hbmltYXRpb24tXCIrYW5taUxheWVyLmlkK1wiJz48L2Rpdj5cIlxuXHRcdGFubWlMYXllci5fZWxlbWVudC5jaGlsZE5vZGVzWzBdLnN0eWxlLmhlaWdodCA9ICcxMDAlJ1xuXHRcdGFubWlMYXllci5fZWxlbWVudC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uc3R5bGUuaGVpZ2h0ID0gJzEwMCUnXG5cblx0XHRqc29uUGF0aCA9IEBvcHRpb25zLmpzb25QYXRoXG5cdFx0cmVuZGVyZXIgPSBAb3B0aW9ucy5yZW5kZXJlclxuXHRcdGlzTG9vcCA9IEBvcHRpb25zLmxvb3Bpbmdcblx0XHRpc0F1dG9wbGF5ID0gQG9wdGlvbnMuYXV0b3BsYXlcblxuXHRcdGVsSWQgPSBcImxvdHRpZS1hbmltYXRpb24tXCIrYW5taUxheWVyLmlkXG5cblx0XHRfdGhpcyA9IEBcblxuXHRcdGlmKGRvY3VtZW50LmJvZHltb3ZpblNjcmlwdClcblx0XHRcdGJvZHltb3ZpblRpbWVyID0gVXRpbHMuaW50ZXJ2YWwgMC4xLC0+XG5cdFx0XHRcdGlmKGJtKVxuXHRcdFx0XHRcdF9sb2FkSlNPTihqc29uUGF0aCxlbElkLHJlbmRlcmVyLGlzTG9vcCxpc0F1dG9wbGF5LGJtKVxuXHRcdFx0XHRcdHdpbmRvdy5jbGVhckludGVydmFsKGJvZHltb3ZpblRpbWVyKVxuXHRcdGVsc2Vcblx0XHRcdGRvY3VtZW50LmJvZHltb3ZpblNjcmlwdCA9IFV0aWxzLmRvbUxvYWRTY3JpcHQgJ2JvZHltb3Zpbi5taW4uanMnLCAtPlxuXHRcdFx0XHRibSA9IGJvZHltb3ZpblxuXHRcdFx0XHRfbG9hZEpTT04oanNvblBhdGgsZWxJZCxyZW5kZXJlcixpc0xvb3AsaXNBdXRvcGxheSxibSlcblxuXHRcdF9sb2FkSlNPTiA9IChqc29uUGF0aCxlbElkLHJlbmRlcmVyLGlzTG9vcCxpc0F1dG9wbGF5LGJvZHltb3ZpbikgLT5cblx0XHRcdFV0aWxzLmRvbUxvYWRKU09OIGpzb25QYXRoLCAoZXJyLCBkYXRhKS0+XG5cdFx0XHRcdGFuaU9iaiA9XG5cdFx0XHRcdFx0Y29udGFpbmVyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbElkKVxuXHRcdFx0XHRcdHJlbmRlcmVyOiByZW5kZXJlclxuXHRcdFx0XHRcdGxvb3A6IGlzTG9vcFxuXHRcdFx0XHRcdGF1dG9wbGF5OmlzQXV0b3BsYXlcblx0XHRcdFx0XHRhbmltYXRpb25EYXRhOiBkYXRhXG5cdFx0XHRcdF90aGlzLmFuaW0gPSBib2R5bW92aW4ubG9hZEFuaW1hdGlvbihhbmlPYmopXG5cbm1vZHVsZS5leHBvcnRzID0gbG90dGllTGF5ZXJcbiIsIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQ0FBO0FEQUEsSUFBQSxlQUFBO0VBQUE7OztBQUFBLEVBQUEsR0FBSzs7QUFDQzs7O0VBRVEscUJBQUMsT0FBRDtBQUVaLFFBQUE7SUFGYSxJQUFDLENBQUEsNEJBQUQsVUFBUzs7VUFFZCxDQUFDLFdBQVk7OztXQUNiLENBQUMsUUFBUzs7O1dBQ1YsQ0FBQyxTQUFVOzs7V0FDWCxDQUFDLGtCQUFtQjs7O1dBQ3BCLENBQUMsV0FBWTs7O1dBQ2IsQ0FBQyxVQUFXOzs7V0FDWixDQUFDLFdBQVk7O0lBRXJCLDZDQUFNLElBQUMsQ0FBQSxPQUFQO0lBRUEsSUFBQyxDQUFBLElBQUQsR0FBUTtJQUVSLFNBQUEsR0FBZ0IsSUFBQSxLQUFBLENBQ2Y7TUFBQSxNQUFBLEVBQVEsSUFBUjtNQUNBLEtBQUEsRUFBTyxJQUFDLENBQUEsT0FBTyxDQUFDLEtBRGhCO01BRUEsTUFBQSxFQUFRLElBQUMsQ0FBQSxPQUFPLENBQUMsTUFGakI7TUFHQSxlQUFBLEVBQWlCLElBQUMsQ0FBQSxPQUFPLENBQUMsZUFIMUI7S0FEZTtJQU1oQixTQUFTLENBQUMsSUFBVixHQUFpQiw0QkFBQSxHQUE2QixTQUFTLENBQUMsRUFBdkMsR0FBMEM7SUFDM0QsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFXLENBQUEsQ0FBQSxDQUFFLENBQUMsS0FBSyxDQUFDLE1BQXZDLEdBQWdEO0lBQ2hELFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVyxDQUFBLENBQUEsQ0FBRSxDQUFDLFVBQVcsQ0FBQSxDQUFBLENBQUUsQ0FBQyxLQUFLLENBQUMsTUFBckQsR0FBOEQ7SUFFOUQsUUFBQSxHQUFXLElBQUMsQ0FBQSxPQUFPLENBQUM7SUFDcEIsUUFBQSxHQUFXLElBQUMsQ0FBQSxPQUFPLENBQUM7SUFDcEIsTUFBQSxHQUFTLElBQUMsQ0FBQSxPQUFPLENBQUM7SUFDbEIsVUFBQSxHQUFhLElBQUMsQ0FBQSxPQUFPLENBQUM7SUFFdEIsSUFBQSxHQUFPLG1CQUFBLEdBQW9CLFNBQVMsQ0FBQztJQUVyQyxLQUFBLEdBQVE7SUFFUixJQUFHLFFBQVEsQ0FBQyxlQUFaO01BQ0MsY0FBQSxHQUFpQixLQUFLLENBQUMsUUFBTixDQUFlLEdBQWYsRUFBbUIsU0FBQTtRQUNuQyxJQUFHLEVBQUg7VUFDQyxTQUFBLENBQVUsUUFBVixFQUFtQixJQUFuQixFQUF3QixRQUF4QixFQUFpQyxNQUFqQyxFQUF3QyxVQUF4QyxFQUFtRCxFQUFuRDtpQkFDQSxNQUFNLENBQUMsYUFBUCxDQUFxQixjQUFyQixFQUZEOztNQURtQyxDQUFuQixFQURsQjtLQUFBLE1BQUE7TUFNQyxRQUFRLENBQUMsZUFBVCxHQUEyQixLQUFLLENBQUMsYUFBTixDQUFvQixrQkFBcEIsRUFBd0MsU0FBQTtRQUNsRSxFQUFBLEdBQUs7ZUFDTCxTQUFBLENBQVUsUUFBVixFQUFtQixJQUFuQixFQUF3QixRQUF4QixFQUFpQyxNQUFqQyxFQUF3QyxVQUF4QyxFQUFtRCxFQUFuRDtNQUZrRSxDQUF4QyxFQU41Qjs7SUFVQSxTQUFBLEdBQVksU0FBQyxRQUFELEVBQVUsSUFBVixFQUFlLFFBQWYsRUFBd0IsTUFBeEIsRUFBK0IsVUFBL0IsRUFBMEMsU0FBMUM7YUFDWCxLQUFLLENBQUMsV0FBTixDQUFrQixRQUFsQixFQUE0QixTQUFDLEdBQUQsRUFBTSxJQUFOO0FBQzNCLFlBQUE7UUFBQSxNQUFBLEdBQ0M7VUFBQSxTQUFBLEVBQVcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsSUFBeEIsQ0FBWDtVQUNBLFFBQUEsRUFBVSxRQURWO1VBRUEsSUFBQSxFQUFNLE1BRk47VUFHQSxRQUFBLEVBQVMsVUFIVDtVQUlBLGFBQUEsRUFBZSxJQUpmOztlQUtELEtBQUssQ0FBQyxJQUFOLEdBQWEsU0FBUyxDQUFDLGFBQVYsQ0FBd0IsTUFBeEI7TUFQYyxDQUE1QjtJQURXO0VBM0NBOzs7O0dBRlk7O0FBdUQxQixNQUFNLENBQUMsT0FBUCxHQUFpQiJ9
