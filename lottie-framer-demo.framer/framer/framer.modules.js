require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"lottieLayer":[function(require,module,exports){
var lottieLayer,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

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
        if (window.bodymovin) {
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
        return _this.anim = bodymovin.loadAnimation(aniObj);
      });
    };
  }

  return lottieLayer;

})(Layer);

module.exports = lottieLayer;


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2xlYWRyZWFtL2dpdGh1Yi9sb3R0aWUtZnJhbWVyL2xvdHRpZS1mcmFtZXItZGVtby5mcmFtZXIvbW9kdWxlcy9sb3R0aWVMYXllci5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIGxvdHRpZUxheWVyIGV4dGVuZHMgTGF5ZXJcblx0IyDmnoTpgKDlmahcblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblx0XHQjIOWfuuacrOmFjee9rumhuVxuXHRcdEBvcHRpb25zLmpzb25QYXRoID89ICdkYXRhLmpzb24nXG5cdFx0QG9wdGlvbnMud2lkdGggPz0gMjAwXG5cdFx0QG9wdGlvbnMuaGVpZ2h0ID89IDIwMFxuXHRcdEBvcHRpb25zLmJhY2tncm91bmRDb2xvciA/PSAndHJhbnNwYXJlbnQnXG5cdFx0QG9wdGlvbnMucmVuZGVyZXIgPz0gJ3N2Zydcblx0XHRAb3B0aW9ucy5sb29waW5nID89IHRydWVcblx0XHRAb3B0aW9ucy5hdXRvcGxheSA/PSB0cnVlXG5cblx0XHRzdXBlciBAb3B0aW9uc1xuXG5cdFx0QGFuaW0gPSBudWxsXG5cblx0XHRhbm1pTGF5ZXIgPSBuZXcgTGF5ZXJcblx0XHRcdHBhcmVudDogQFxuXHRcdFx0d2lkdGg6IEBvcHRpb25zLndpZHRoXG5cdFx0XHRoZWlnaHQ6IEBvcHRpb25zLmhlaWdodFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBAb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3JcblxuXHRcdGFubWlMYXllci5odG1sID0gXCI8ZGl2IGlkPSdsb3R0aWUtYW5pbWF0aW9uLVwiK2FubWlMYXllci5pZCtcIic+PC9kaXY+XCJcblx0XHRhbm1pTGF5ZXIuX2VsZW1lbnQuY2hpbGROb2Rlc1swXS5zdHlsZS5oZWlnaHQgPSAnMTAwJSdcblx0XHRhbm1pTGF5ZXIuX2VsZW1lbnQuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLnN0eWxlLmhlaWdodCA9ICcxMDAlJ1xuXG5cdFx0anNvblBhdGggPSBAb3B0aW9ucy5qc29uUGF0aFxuXHRcdHJlbmRlcmVyID0gQG9wdGlvbnMucmVuZGVyZXJcblx0XHRpc0xvb3AgPSBAb3B0aW9ucy5sb29waW5nXG5cdFx0aXNBdXRvcGxheSA9IEBvcHRpb25zLmF1dG9wbGF5XG5cblx0XHRlbElkID0gXCJsb3R0aWUtYW5pbWF0aW9uLVwiK2FubWlMYXllci5pZFxuXG5cdFx0X3RoaXMgPSBAXG5cblx0XHRpZihkb2N1bWVudC5ib2R5bW92aW5TY3JpcHQpXG5cdFx0XHRib2R5bW92aW5UaW1lciA9IFV0aWxzLmludGVydmFsIDAuMSwtPlxuXHRcdFx0XHRpZih3aW5kb3cuYm9keW1vdmluKVxuXHRcdFx0XHRcdF9sb2FkSlNPTihqc29uUGF0aCxlbElkLHJlbmRlcmVyLGlzTG9vcCxpc0F1dG9wbGF5LGJvZHltb3Zpbilcblx0XHRcdFx0XHR3aW5kb3cuY2xlYXJJbnRlcnZhbChib2R5bW92aW5UaW1lcilcblx0XHRlbHNlXG5cdFx0XHRkb2N1bWVudC5ib2R5bW92aW5TY3JpcHQgPSBVdGlscy5kb21Mb2FkU2NyaXB0ICdib2R5bW92aW4ubWluLmpzJywgLT5cblx0XHRcdFx0X2xvYWRKU09OKGpzb25QYXRoLGVsSWQscmVuZGVyZXIsaXNMb29wLGlzQXV0b3BsYXksYm9keW1vdmluKVxuXG5cdFx0X2xvYWRKU09OID0gKGpzb25QYXRoLGVsSWQscmVuZGVyZXIsaXNMb29wLGlzQXV0b3BsYXksYm9keW1vdmluKSAtPlxuXHRcdFx0VXRpbHMuZG9tTG9hZEpTT04ganNvblBhdGgsIChlcnIsIGRhdGEpLT5cblx0XHRcdFx0YW5pT2JqID1cblx0XHRcdFx0XHRjb250YWluZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsSWQpXG5cdFx0XHRcdFx0cmVuZGVyZXI6IHJlbmRlcmVyXG5cdFx0XHRcdFx0bG9vcDogaXNMb29wXG5cdFx0XHRcdFx0YXV0b3BsYXk6aXNBdXRvcGxheVxuXHRcdFx0XHRcdGFuaW1hdGlvbkRhdGE6IGRhdGFcblx0XHRcdFx0X3RoaXMuYW5pbSA9IGJvZHltb3Zpbi5sb2FkQW5pbWF0aW9uKGFuaU9iailcblxubW9kdWxlLmV4cG9ydHMgPSBsb3R0aWVMYXllclxuIiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFDQUE7QURBQSxJQUFBLFdBQUE7RUFBQTs7O0FBQU07OztFQUVRLHFCQUFDLE9BQUQ7QUFFWixRQUFBO0lBRmEsSUFBQyxDQUFBLDRCQUFELFVBQVM7O1VBRWQsQ0FBQyxXQUFZOzs7V0FDYixDQUFDLFFBQVM7OztXQUNWLENBQUMsU0FBVTs7O1dBQ1gsQ0FBQyxrQkFBbUI7OztXQUNwQixDQUFDLFdBQVk7OztXQUNiLENBQUMsVUFBVzs7O1dBQ1osQ0FBQyxXQUFZOztJQUVyQiw2Q0FBTSxJQUFDLENBQUEsT0FBUDtJQUVBLElBQUMsQ0FBQSxJQUFELEdBQVE7SUFFUixTQUFBLEdBQWdCLElBQUEsS0FBQSxDQUNmO01BQUEsTUFBQSxFQUFRLElBQVI7TUFDQSxLQUFBLEVBQU8sSUFBQyxDQUFBLE9BQU8sQ0FBQyxLQURoQjtNQUVBLE1BQUEsRUFBUSxJQUFDLENBQUEsT0FBTyxDQUFDLE1BRmpCO01BR0EsZUFBQSxFQUFpQixJQUFDLENBQUEsT0FBTyxDQUFDLGVBSDFCO0tBRGU7SUFNaEIsU0FBUyxDQUFDLElBQVYsR0FBaUIsNEJBQUEsR0FBNkIsU0FBUyxDQUFDLEVBQXZDLEdBQTBDO0lBQzNELFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVyxDQUFBLENBQUEsQ0FBRSxDQUFDLEtBQUssQ0FBQyxNQUF2QyxHQUFnRDtJQUNoRCxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVcsQ0FBQSxDQUFBLENBQUUsQ0FBQyxVQUFXLENBQUEsQ0FBQSxDQUFFLENBQUMsS0FBSyxDQUFDLE1BQXJELEdBQThEO0lBRTlELFFBQUEsR0FBVyxJQUFDLENBQUEsT0FBTyxDQUFDO0lBQ3BCLFFBQUEsR0FBVyxJQUFDLENBQUEsT0FBTyxDQUFDO0lBQ3BCLE1BQUEsR0FBUyxJQUFDLENBQUEsT0FBTyxDQUFDO0lBQ2xCLFVBQUEsR0FBYSxJQUFDLENBQUEsT0FBTyxDQUFDO0lBRXRCLElBQUEsR0FBTyxtQkFBQSxHQUFvQixTQUFTLENBQUM7SUFFckMsS0FBQSxHQUFRO0lBRVIsSUFBRyxRQUFRLENBQUMsZUFBWjtNQUNDLGNBQUEsR0FBaUIsS0FBSyxDQUFDLFFBQU4sQ0FBZSxHQUFmLEVBQW1CLFNBQUE7UUFDbkMsSUFBRyxNQUFNLENBQUMsU0FBVjtVQUNDLFNBQUEsQ0FBVSxRQUFWLEVBQW1CLElBQW5CLEVBQXdCLFFBQXhCLEVBQWlDLE1BQWpDLEVBQXdDLFVBQXhDLEVBQW1ELFNBQW5EO2lCQUNBLE1BQU0sQ0FBQyxhQUFQLENBQXFCLGNBQXJCLEVBRkQ7O01BRG1DLENBQW5CLEVBRGxCO0tBQUEsTUFBQTtNQU1DLFFBQVEsQ0FBQyxlQUFULEdBQTJCLEtBQUssQ0FBQyxhQUFOLENBQW9CLGtCQUFwQixFQUF3QyxTQUFBO2VBQ2xFLFNBQUEsQ0FBVSxRQUFWLEVBQW1CLElBQW5CLEVBQXdCLFFBQXhCLEVBQWlDLE1BQWpDLEVBQXdDLFVBQXhDLEVBQW1ELFNBQW5EO01BRGtFLENBQXhDLEVBTjVCOztJQVNBLFNBQUEsR0FBWSxTQUFDLFFBQUQsRUFBVSxJQUFWLEVBQWUsUUFBZixFQUF3QixNQUF4QixFQUErQixVQUEvQixFQUEwQyxTQUExQzthQUNYLEtBQUssQ0FBQyxXQUFOLENBQWtCLFFBQWxCLEVBQTRCLFNBQUMsR0FBRCxFQUFNLElBQU47QUFDM0IsWUFBQTtRQUFBLE1BQUEsR0FDQztVQUFBLFNBQUEsRUFBVyxRQUFRLENBQUMsY0FBVCxDQUF3QixJQUF4QixDQUFYO1VBQ0EsUUFBQSxFQUFVLFFBRFY7VUFFQSxJQUFBLEVBQU0sTUFGTjtVQUdBLFFBQUEsRUFBUyxVQUhUO1VBSUEsYUFBQSxFQUFlLElBSmY7O2VBS0QsS0FBSyxDQUFDLElBQU4sR0FBYSxTQUFTLENBQUMsYUFBVixDQUF3QixNQUF4QjtNQVBjLENBQTVCO0lBRFc7RUExQ0E7Ozs7R0FGWTs7QUFzRDFCLE1BQU0sQ0FBQyxPQUFQLEdBQWlCIn0=
