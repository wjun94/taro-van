(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"92":function(t,n,i){"use strict";i.r(n),i.d(n,"taro_input_core",(function(){return u}));var o=i(30);function getTrueType(t,n,i){if("search"===n&&(t="search"),i&&(t="password"),void 0===t)return"text";if(!t)throw new Error("unexpected type");return"digit"===t&&(t="number"),t}function fixControlledValue(t){return null!=t?t:""}var u=function(){function e(t){var n=this;Object(o.g)(this,t),this.onInput=Object(o.c)(this,"input",7),this.onFocus=Object(o.c)(this,"focus",7),this.onBlur=Object(o.c)(this,"blur",7),this.onConfirm=Object(o.c)(this,"confirm",7),this.onChange=Object(o.c)(this,"change",7),this.onKeyDown=Object(o.c)(this,"keydown",7),this.isOnComposition=!1,this.onInputExcuted=!1,this.password=!1,this.disabled=!1,this.maxlength=140,this.autoFocus=!1,this.confirmType="done",this.nativeProps={},this.handleInput=function(t){t.stopPropagation();var i=n,o=i.type,u=i.maxlength,s=i.confirmType,a=i.password;if(!n.isOnComposition&&!n.onInputExcuted){var r=t.target.value,c=getTrueType(o,s,a);n.onInputExcuted=!0,"number"===c&&r&&u<=r.length&&(r=r.substring(0,u),t.target.value=r),n._value=r,n.onInput.emit({"value":r,"cursor":r.length})}},this.handleFocus=function(t){n.onInputExcuted=!1,n.onFocus.emit({"value":t.target.value})},this.handleBlur=function(t){n.onBlur.emit({"value":t.target.value})},this.handleChange=function(t){t.stopPropagation(),n.onChange.emit({"value":t.target.value})},this.handleKeyDown=function(t){var i=t.target.value;n.onInputExcuted=!1,t.stopPropagation(),n.onKeyDown.emit({"value":i}),13===t.keyCode&&n.onConfirm.emit({"value":i})},this.handleComposition=function(t){t.target instanceof HTMLInputElement&&("compositionend"===t.type?(n.isOnComposition=!1,n.onInput.emit({"value":t.target.value})):n.isOnComposition=!0)}}return e.prototype.watchHandler=function(t,n){t!==n&&(this._value=t)},e.prototype.watchFocus=function(t,n){!n&&t&&this.inputRef.focus()},e.prototype.componentWillLoad=function(){this._value=this.value},e.prototype.componentDidLoad=function(){var t=this;"file"===this.type?(this.fileListener=function(){t.onInput.emit()},this.inputRef.addEventListener("change",this.fileListener)):(this.inputRef.addEventListener("compositionstart",this.handleComposition),this.inputRef.addEventListener("compositionend",this.handleComposition)),Object.defineProperty(this.el,"value",{"get":function(){return t.inputRef.value},"set":function(n){t._value=n},"configurable":!0})},e.prototype.disconnectedCallback=function(){"file"===this.type&&this.inputRef.removeEventListener("change",this.fileListener)},e.prototype.render=function(){var t=this,n=this,i=n._value,u=n.type,s=n.password,a=n.placeholder,r=n.disabled,c=n.maxlength,h=n.autoFocus,l=n.confirmType,p=n.name,d=n.nativeProps;return Object(o.e)("input",Object.assign({"ref":function(n){t.inputRef=n,h&&(null==n||n.focus())},"class":"weui-input","value":fixControlledValue(i),"type":getTrueType(u,l,s),"placeholder":a,"disabled":r,"maxlength":c,"autofocus":h,"name":p,"onInput":this.handleInput,"onFocus":this.handleFocus,"onBlur":this.handleBlur,"onChange":this.handleChange,"onKeyDown":this.handleKeyDown},d))},Object.defineProperty(e.prototype,"el",{"get":function(){return Object(o.d)(this)},"enumerable":!1,"configurable":!0}),Object.defineProperty(e,"watchers",{"get":function(){return{"value":["watchHandler"],"autoFocus":["watchFocus"]}},"enumerable":!1,"configurable":!0}),e}();u.style="taro-input-core{display:block}input{display:block;height:1.4rem;text-align:inherit;text-overflow:clip;overflow:hidden;white-space:nowrap}"}}]);