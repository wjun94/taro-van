/*! For license information please see 29.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"111":function(e,n,i){"use strict";i.r(n),i.d(n,"taro_view_core",(function(){return u}));var r=i(30),s=i(121),u=function(){function t(e){Object(r.g)(this,e),this.onLongPress=Object(r.c)(this,"longpress",7),this.hoverStartTime=50,this.hoverStayTime=400,this.hover=!1,this.touch=!1,this.startTime=0}return t.prototype.onTouchStart=function(){var e=this;this.hoverClass&&(this.touch=!0,setTimeout((function(){e.touch&&(e.hover=!0)}),this.hoverStartTime)),this.timeoutEvent=setTimeout((function(){e.onLongPress.emit()}),350),this.startTime=Date.now()},t.prototype.onTouchMove=function(){clearTimeout(this.timeoutEvent)},t.prototype.onTouchEnd=function(){var e=this;Date.now()-this.startTime<350&&clearTimeout(this.timeoutEvent),this.hoverClass&&(this.touch=!1,setTimeout((function(){e.touch||(e.hover=!1)}),this.hoverStayTime))},t.prototype.render=function(){var e,n=Object(s.a)(((e={})[""+this.hoverClass]=this.hover,e)),i={};return this.animation&&(i.animation=this.animation,i["data-animation"]=this.animation),Object(r.e)(r.a,Object.assign({"class":n},i),Object(r.e)("slot",null))},t}();u.style="body,html{-webkit-tap-highlight-color:rgba(0, 0, 0, 0);user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}taro-view-core{display:block}"},"121":function(e,n,i){"use strict";i.d(n,"a",(function(){return r}));var r=function createCommonjsModule(e,n,i){return e(i={"path":n,"exports":{},"require":function(e,n){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},i.exports),i.exports}((function(e){!function(){var n={}.hasOwnProperty;function o(){for(var e=[],i=0;i<arguments.length;i++){var r=arguments[i];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var u=o.apply(null,r);u&&e.push(u)}}else if("object"===s)if(r.toString===Object.prototype.toString)for(var a in r)n.call(r,a)&&r[a]&&e.push(a);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):window.classNames=o}()}))}}]);