(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"66":function(t,n,o){"use strict";o.r(n),o.d(n,"taro_canvas_core",(function(){return i}));var e=o(26),i=function(){function Canvas(t){var n=this;Object(e.g)(this,t),this.onTouchStart=function(){n.timer=setTimeout((function(){n.onLongTap.emit()}),500)},this.onTouchMove=function(){clearTimeout(n.timer)},this.onTouchEnd=function(){clearTimeout(n.timer)},this.onLongTap=Object(e.d)(this,"longtap",7)}return Canvas.prototype.render=function(){var t=this.canvasId;return Object(e.f)("canvas",{"canvas-id":t,"style":{"width":"100%","height":"100%"},"onTouchStart":this.onTouchStart,"onTouchMove":this.onTouchMove,"onTouchEnd":this.onTouchEnd})},Object.defineProperty(Canvas.prototype,"el",{"get":function(){return Object(e.e)(this)},"enumerable":!0,"configurable":!0}),Object.defineProperty(Canvas,"style",{"get":function(){return"taro-canvas-core{position:relative;display:block;width:300px;height:150px}"},"enumerable":!0,"configurable":!0}),Canvas}()}}]);